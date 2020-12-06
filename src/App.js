import React from "react";
import "./style.css";

import Dummy from "./dummy.json";

import StackWidget from "../components/StackWidget";

export default function App() {
  return (
    <div className="stack-grid">
      {Dummy.stacks.map(stack => (
        <StackWidget stack={stack} />
      ))}
    </div>
  );
}
