import { useStore } from "./store";

export default function App() {
  const [state, dispatch] = useStore();
  console.log(state);
  return (
    <div className="App">
      <h1>â</h1>
      <h2> aaaaaaaaaaaa</h2>
    </div>
  );
}
