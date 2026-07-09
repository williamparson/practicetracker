import React from "react";
import CreateLog from "./CreateLog";
import { useState, useEffect } from "react";
import TableEntry from "./TableEntry";
import "./MainPage.css";
import { getPractices } from "../services/practiceStorage";

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPracticeData, setLoadedPracticeData] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getPractices()
      .then((practices) => {
        const sorted = [...practices].sort((a, b) => {
          const dateA = new Date(a.year, a.month, a.day);
          const dateB = new Date(b.year, b.month, b.day);
          return dateB - dateA;
        });
        setLoadedPracticeData(sorted);
      })
      .catch(() => {
        setError("Could not load practice sessions.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [refreshKey]);

  function handlePracticeAdded() {
    setRefreshKey((current) => current + 1);
  }

  const totalMinutes = loadedPracticeData.reduce(
    (sum, entry) => sum + Number(entry.duration || 0),
    0
  );

  return (
    <div>
      <CreateLog onPracticeAdded={handlePracticeAdded} />
      {error && <p className="error-message">{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="summary">
            {loadedPracticeData.length} session
            {loadedPracticeData.length === 1 ? "" : "s"} logged · {totalMinutes}{" "}
            total minutes
          </p>
          <div>
            <div className="header">
              <h1>Date</h1>
              <h1>Minutes</h1>
              <h1>Description</h1>
            </div>
            {loadedPracticeData.length === 0 ? (
              <p className="empty-state">
                No practice sessions yet. Click &quot;Add practice&quot; to log your
                first session.
              </p>
            ) : (
              loadedPracticeData.map((entry) => (
                <TableEntry
                  key={entry.id}
                  day={entry.day}
                  month={entry.month}
                  year={entry.year}
                  description={entry.description}
                  duration={entry.duration}
                />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default MainPage;
