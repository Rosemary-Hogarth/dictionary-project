import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>Definition:{props.meaning.definition}</p>
      <em>{props.meaning.example}</em>
    </div>
  )
}
