import { useState } from "react";
import axios from "axios";

const RefreshData = () => {
  const [message, setMessage] = useState("");

  const refreshData = () => {
    axios
      .get("http://localhost:3001/api/refresh")
      .then((response) => setMessage(response.data.message))
      .catch((err) => console.error(err));
  };

  return (
    <div className=" container d-flex justify-content-center align-items-center vh-100">
    <div className="text-center">
      <h2 className="mb-4">Refresh Data</h2>
      <button className="btn btn-secondary" onClick={refreshData}>Refresh Excel</button>
      {message && <p>{message}</p>}
    </div>
    </div >
  );
};

export default RefreshData;
