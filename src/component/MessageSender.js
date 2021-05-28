import React, { useRef, useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import firebase from "firebase";
import db from "./firebase";
import storage from "./firebase";
import { useStateValue } from "./StateProvider";

function MessageSender() {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts")
      .add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl,
        // postImage: user.image,
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");
          removeImage();
          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });
    setInput("");
    setImageUrl("");
  };
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />

        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind, ${user.displayName} ?`}
          />
          <input
            value={imageUrl}
            src={user.postImage}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
        {imageToPost && (
          <div onClick={removeImage} className="flex">
            <img src={imageToPost} alt="imageOfyourpost" />
            <p className="text-xs">Remove</p>
          </div>
        )}
      </div>
      <div className="messageSender__bottom">
        <div
          onClick={() => filepickerRef.current.click()}
          className="messageSender__option"
        >
          <VideoLibraryIcon style={{ color: "red" }} />
          <h3> Video</h3>
          <input
            ref={filepickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>
        <div
          onClick={() => filepickerRef.current.click()}
          className="messageSender__option"
        >
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo</h3>
          <input
            ref={filepickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
