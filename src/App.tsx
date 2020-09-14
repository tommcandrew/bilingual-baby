import React, { useState } from "react";
import Home from "./components/Home";

const options = ["english", "turkish", "spanish"];

const App = () => {
  const [lang1, setLang1] = useState("english");
  const [lang2, setLang2] = useState("turkish");
  const [gender, setGender] = useState("male");
  return (
    <div>
      <Home
        options={options}
        lang1={lang1}
        lang2={lang2}
        setLang1={setLang1}
        setLang2={setLang2}
        setGender={setGender}
        gender={gender}
      />
    </div>
  );
};

export default App;
