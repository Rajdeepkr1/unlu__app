import "./App.css";
import Feed from "./component/Feed";
import Header from "./component/Header";
import Login from "./component/Login";
import { useStateValue } from "./component/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  //const user = null;
  return (
    
    <div className="App">
      {!user ? (
         <Login />
      ) : (
        <>
          <Header />
          <Feed />
        </>
      )}
    </div>
  );
}

export default App;
