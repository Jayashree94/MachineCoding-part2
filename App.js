import { useState } from "react";
import "./styles.css";
const OTP_DIGITS = 5;

export default function App() {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS).fill(""));
  const handleOnChange = (e, index) => {
    if (isNaN(e.target.value)) return;
    const newArr = [...inputArr];
    newArr[index] = e.target.value.slice(-1);
    setInputArr(newArr);
  };
  return (
    <div className="App">
      <h1>Enter the OTP</h1>
      {inputArr.map((input, index) => (
        <input
          className="otp-input"
          key={index}
          type="text"
          value={inputArr[index]}
          onChange={(e) => handleOnChange(e, index)}
        ></input>
      ))}
    </div>
  );
}
