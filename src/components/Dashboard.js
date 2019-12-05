import React from "react";

export default function DashBoard(props) {
  return (
    <div>
      <button onClick={props.strike}>Strike</button>
      <button onClick={props.ball}>Ball</button>
      <button onClick={props.foul}>Foul</button>
      <button onClick={props.hit}>Hit</button>
    </div>
  );
}
