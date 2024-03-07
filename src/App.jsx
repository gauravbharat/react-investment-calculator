import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 60000,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidDuration = userInput.duration >= 1 && userInput.duration <= 100;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => ({
      ...prevState,
      [inputIdentifier]: +newValue,
    }));
  }

  return (
    <>
      <Header />
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Disclaimer: App does not intend to provide any financial advice or
        assistance
      </p>
      <UserInput onChange={handleChange} userInput={userInput} />

      {isValidDuration ? (
        <Results input={userInput} />
      ) : (
        <p style={{ textAlign: "center", color: "pink" }}>
          Please enter a duration greater than zero and less than hundred.
        </p>
      )}
    </>
  );
}

export default App;
