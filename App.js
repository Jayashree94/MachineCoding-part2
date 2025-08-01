import { useEffect, useRef, useState } from "react";
import "./styles.css";
const OTP_DIGITS = 5;

export default function App() {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS).fill(""));
  refArr = useRef([]);
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);
  const handleOnChange = (e, index) => {
    if (isNaN(e.target.value)) return;
    const newVal = e.target.value.trim();
    const newArr = [...inputArr];
    newArr[index] = newVal.slice(-1);
    setInputArr(newArr);
    newVal && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
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
          ref={(input) => {
            refArr.current[index] = input;
          }}
          onChange={(e) => handleOnChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        ></input>
      ))}
    </div>
  );
}
