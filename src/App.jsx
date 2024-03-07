import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 60000,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevState) => ({
      ...prevState,
      [inputIdentifier]: newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <p style={{ textAlign: "center" }}>
        Disclaimer: App does not intend to provide any financial advice or
        assistance
      </p>
    </>
  );
}

export default App;
