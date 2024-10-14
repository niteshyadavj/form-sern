import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormSelection from "./FormSelection";
import DynamicForm from "./DynamicForm";
import RefreshData from "./RefreshData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<FormSelection />} />
        <Route path="/form/:formType" element={<DynamicForm />} />
        <Route path="/refresh" element={<RefreshData />} />
      </Routes>
    </Router>
  );
}

export default App;
