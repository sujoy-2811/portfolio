import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-bg-primary)] overflow-hidden">
      <Header />
      <Main />
    </div>
  );
}
