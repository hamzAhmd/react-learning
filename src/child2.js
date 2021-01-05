import React, { useContext } from "react";
import Counterapp from "./counterapp";

function Grandss() {
  let CounterValue = useContext(Counterapp);
  return (
  <div>
      Hello World ! the value is {CounterValue}
  </div>
  );
}
export default Grandss;
