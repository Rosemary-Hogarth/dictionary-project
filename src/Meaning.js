import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";


export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <div className="speech">{props.meaning.partOfSpeech}</div>
      <div className="info">
        <div className="definition">{props.meaning.definition}</div>
        <div className="example">{props.meaning.example}</div>

      <p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
    </div>
  )
}
