import CodeBlock from "./CodeBlock";
import Objective from "./Objective";
import { steps } from "./steps";

function App() {
  return (
    <div className="app">
      <h2
        style={{
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        🚀 Project 2: Jenkins Declarative CI/CD Pipeline on AWS via with Docker
        Compose and Web Hook.
      </h2>
      <Objective />
      <h2
        style={{
          marginBottom: "1rem",
        }}
      >
        Step by Step Impelementation
      </h2>
      {steps.map((item, ind) => (
        <CodeBlock
          key={ind}
          indx={ind}
          desc={item.desc}
          img={item.img}
          code={item.code}
          text={item.text}
        />
      ))}
      <h4
        style={{
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        ✅ The End
      </h4>
    </div>
  );
}

export default App;
