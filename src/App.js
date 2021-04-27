import { InputWithLabel } from "./components/InputWithLabel";

function App() {
  return (
    <div>
      <InputWithLabel
        name="senha"
        id="nome"
        type="text"
        label="Digite a senha"
        required
        autoComplete="off"
      />
    </div>
  );
}

export default App;
