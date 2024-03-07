import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  return (
    <>
      <Header />
      <UserInput />
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Disclaimer: App does not intend to provide any financial advice or
        assistance
      </p>
    </>
  );
}

export default App;
