import React from "react";
import "./style.css";

import Dummy from "./dummy.json";

import StackWidget from "../components/StackWidget";

export default function App() {
  return (
    <div>
      {Dummy.stacks.map(stack => (
        <StackWidget {...stack} />
      ))}
    </div>
  );
}
