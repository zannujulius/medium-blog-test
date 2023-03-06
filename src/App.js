import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
function App() {
  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("https://medium.com/feed/@remisafrica");
        console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }
    })();
    return () => {};
  }, []);

  return (
    <div className="App">
      <div className="">Blog post</div>
    </div>
  );
}

export default App;
