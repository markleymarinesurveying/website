import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Import fonts for better control and performance
import '@fontsource/rajdhani/400.css';
import '@fontsource/rajdhani/600.css';
import '@fontsource/rajdhani/700.css';
import '@fontsource/saira-condensed/400.css';
import '@fontsource/saira-condensed/600.css';
import '@fontsource/saira-condensed/700.css';
import '@fontsource/barlow-condensed/400.css';
import '@fontsource/barlow-condensed/600.css';
import '@fontsource/barlow-condensed/700.css';
import '@fontsource/orbitron/700.css';
import '@fontsource/orbitron/900.css';

createRoot(document.getElementById("root")!).render(<App />);
