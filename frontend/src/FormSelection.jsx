import { Link } from "react-router-dom";

const FormSelection = () => (
  <div className=" container d-flex justify-content-center align-items-center vh-100">
    <div className="text-center">
      <h1 className="mb-4">Select Form</h1>
      <Link to="/form/A">
        <button className="btn btn-primary m-2 ">Form A</button>
      </Link>
      <Link to="/form/B">
        <button className="btn btn-primary m-2">Form B</button>
      </Link>
    </div>
  </div>
);

export default FormSelection;
