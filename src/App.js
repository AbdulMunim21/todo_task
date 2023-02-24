import "./App.css";
import { useEffect } from "react";

function App() {
  const myFunction = () => {
    console.log("pressed Enter ✅");
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log("User pressed: ", event.key);

      if (event.key === "Enter") {
        event.preventDefault();
        myFunction();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
  return <div className="App"></div>;
}

export default App;
