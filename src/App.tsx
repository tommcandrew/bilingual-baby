import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Results from "./components/Results";
import { getLangPair } from "./utils/getLangPair";

const options = ["english", "turkish", "spanish"];

const App = () => {
  const [currentComponent, setCurrentComponent] = useState("Home");
  const [lang1, setLang1] = useState("english");
  const [lang2, setLang2] = useState("turkish");
  const [gender, setGender] = useState<any>("male");
  const [langPair, setLangPair] = useState<any>("enTr");

  useEffect(() => {
    const newPair = getLangPair(lang1, lang2);
    setLangPair(newPair);
  }, [lang1, lang2]);

  return (
    <div className="app__wrapper">
      {currentComponent === "Home" && (
        <Home
          options={options}
          lang1={lang1}
          lang2={lang2}
          setLang1={setLang1}
          setLang2={setLang2}
          setGender={setGender}
          gender={gender}
          setCurrentComponent={setCurrentComponent}
        />
      )}
      {currentComponent === "Results" && (
        <Results
          options={options}
          lang1={lang1}
          lang2={lang2}
          setLang1={setLang1}
          setLang2={setLang2}
          setGender={setGender}
          gender={gender}
          setCurrentComponent={setCurrentComponent}
          langPair={langPair}
        />
      )}
    </div>
  );
};

export default App;
