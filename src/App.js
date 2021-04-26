import { InputWithLabel } from "./components/InputWithLabel";

function App() {
  return (
    <div>
      <InputWithLabel
        nome="senha"
        id="nome"
        tipo="text"
        label="Digite a senha"
      />
    </div>
  );
}

export default App;
