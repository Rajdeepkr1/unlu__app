import React, { useState, useEffect } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
 import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Feed() {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    );
  }, []);

  return (
    <div className="feed">
      <MessageSender />
      {posts.map((post)=>(

      <Post
        key={post.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        timestamp={post.data.timestamp}
        username={post.data.username}
        image={post.data.image}
      />
      ))}
      <Post
        profilePic={user.photoURL}
        message="Holding earth and green tree in hands, world environment day concept, saving growing young tree, Element of this image furnished by NASA ....!"
        timestamp="timestamp"
        username={user.displayName}
        image="http://shop.gardenstatehonda.com/wp-content/uploads/sites/21/2021/03/iStock-973325366-e1617027950865.jpg"
      />
      <Post
        profilePic={user.photoURL}
        message="Balck & white Image of Rajdeep isn't looking good hahahahaha....!"
        timestamp="timestamp"
        username={user.displayName}
        image="https://scontent.fpat3-2.fna.fbcdn.net/v/t1.6435-9/47388970_573656189743860_6615327724170903552_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=WH0RCsAKoo4AX-jxxja&tn=musevzylfQhWhZ3L&_nc_ht=scontent.fpat3-2.fna&oh=7db78c274138eb5bf53be9d87d3d572d&oe=60D45112"
      />
      <Post
        profilePic={user.photoURL}
        message="Once you are happy with your black and white transformation, save and share your results in the Adobe Photoshop community and on social media. Don't forget to tag Adobe Photoshop and hashtag your image with #blackandwhitephotoshop. ....!"
        timestamp="timestamp"
        username={user.displayName}
        image="https://static.vecteezy.com/ti/fotos-gratis/p2/746912-menina-bonita-em-bicicleta-foto.jpg"
      />

      <Post
        profilePic={user.photoURL}
        message="This is the image of the person who is going to build this web Apps ...!"
        timestamp="timestamp"
        username={user.displayName}
        image="https://scontent.fpat3-3.fna.fbcdn.net/v/t1.6435-9/82132726_844896529286490_7923576892836282368_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=19026a&_nc_ohc=1mrmwCH7nhMAX9JSBYB&_nc_ht=scontent.fpat3-3.fna&oh=3db61e37ea6a9fa11847db2e057f6baf&oe=60D68D99"
      />

      <Post
        profilePic={user.photoURL}
        message="Color photography is indispensable when colors and shades, or hues, in your image are distinctive and vivid, allowing you to see even the most intricate details. Black and white photography is the better option when you want to focus on the subject and the textures in an image without being distracted by colors. Black and white effects can help bring out the drama in your images. ...!"
        timestamp="timestamp"
        username={user.displayName}
        image="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
      />

      <Post
        profilePic={user.photoURL}
        message="The sun shining through a majestic green oak tree on a meadow, with clear blue sky in the background, panorama format ....!"
        timestamp="timestamp"
        username={user.displayName}
        image="https://thumbs.dreamstime.com/z/sun-shining-majestic-oak-tree-green-meadow-clear-blue-sky-background-panorama-format-76383540.jpg"
      />

      <Post
        profilePic={user.photoURL}
        message="This stock illustration showing a spray of color, created by Shutterstock contributor CarpathianPrince, is our free vector illustration of the week. Log in to Shutterstock and download it for free until Monday, October 11.....!"
        timestamp="timestamp"
        username={user.displayName}
        image="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2010/10/free_colorful_particles_shutterstock_59247190_web.jpg"
      />

      <Post
        profilePic={user.photoURL}
        message="Buy cosmetics & beauty products online from Nykaa, the online shopping beauty store. Browse makeup, health products & more from top beauty brands. ✓....!"
        timestamp="timestamp"
        username={user.displayName}
        image="https://media-exp1.licdn.com/dms/image/C4D1BAQHt5jcoqtEWIg/company-background_10000/0/1617264177780?e=2159024400&v=beta&t=T2fcYwGlPmcbM1ihTzLW57yZneMMYe34tRAWjYnU3wY"
      />
    </div>
  );
}

export default Feed;
