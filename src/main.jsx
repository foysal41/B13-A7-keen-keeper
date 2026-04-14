import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h3 className="text-red-500">Hello</h3>
  </StrictMode>,
);
