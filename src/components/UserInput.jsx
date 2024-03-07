import { useState } from "react";

export default function UserInput() {
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
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial investment</label>
          <input
            id="initialInvestment"
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => {
              handleChange("initialInvestment", +(e.target.value || "0"));
            }}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual investment</label>
          <input
            id="annualInvestment"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => {
              handleChange("annualInvestment", +(e.target.value || "0"));
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            id="expectedReturn"
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => {
              handleChange("expectedReturn", +(e.target.value || "0"));
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => {
              handleChange("duration", +(e.target.value || "0"));
            }}
          />
        </p>
      </div>
    </section>
  );
}
