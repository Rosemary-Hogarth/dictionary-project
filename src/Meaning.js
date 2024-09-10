import React from "react";
import Synonyms from "./Synonyms";


export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <em>{props.meaning.example}</em>
      <p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  )
}
