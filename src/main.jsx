// const Root = ReactDOM.createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     {/* <Provider store={store}> */}
//       <Router>
//         <App />
//       </Router>
//     {/* </Provider> */}
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";
import ContextProvider from "./Features/Navigations/ContextProvider.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    </Provider>
  </StrictMode>
);
