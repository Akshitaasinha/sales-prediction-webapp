import React, { useState } from "react";
import axios from "axios";

function App() {
  const [forecast, setForecast] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [days, setDays] = useState("");

  const getPrediction = async () => {
    try {
      const response = await axios.post("http://localhost:5000/predict", {
        start_date: startDate,
        days: days,
      });
      setForecast(response.data);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Sales Prediction Dashboard</h1>
      <div>
        <input
          type="date"
          onChange={(e) => setStartDate(e.target.value)}
          className="mt-4 p-2"
        />
        <input
          type="number"
          placeholder="Days"
          onChange={(e) => setDays(e.target.value)}
          className="mt-4 p-2 ml-2"
        />
        <button
          onClick={getPrediction}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Get Prediction
        </button>
      </div>

      <div className="mt-8">
        {forecast.length > 0 && (
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Predicted Sales</th>
              </tr>
            </thead>
            <tbody>
              {forecast.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.Date}</td>
                  <td className="border px-4 py-2">{item.Predicted_Sales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;