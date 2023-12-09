import * as ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./view/home/page.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
