import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "../src/styles/styles.css"
import App from "./App.tsx"
import { SubscribeContextProvider } from "./context/SubscriberContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <SubscribeContextProvider>
      <App />
    </SubscribeContextProvider>
  </BrowserRouter>,
)
