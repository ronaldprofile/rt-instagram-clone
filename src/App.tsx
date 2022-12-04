import { Router } from "./Router";
import { globalStyles } from "./styles/global";

export function App() {
  globalStyles();

  return <Router />;
}
