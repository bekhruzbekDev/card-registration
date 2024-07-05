import { useState } from "react";
import { Card } from "./components/Card/Card";
import { CardForm } from "./components/CardForm/CardForm";
import "./style/main.css";
import { Checked } from "./components/Checked/Checked";
export function App() {
  const [isCardInfo,setIsCardInfo] =useState({})
  const [isActive,setIsActive]=useState(false)
  return (
    <>
      <img src="../assets/image/bg-image.png" alt="" className="bgImg" />
      <div className="container">
        <Card isCardInfo={isCardInfo}/>
      {!isActive?
        <CardForm  setIsCardInfo={setIsCardInfo} setIsActive={setIsActive}/>:
        <Checked/>
      }
      </div>
    </>
  );
}
