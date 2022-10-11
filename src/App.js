import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
// import News setProgress={setProgress}Item from "./components/News setProgress={setProgress}Item";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
// import { application } from "express";

const App = () => {
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          // onLoaderFinished={()=>setProgress(0)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
                apiKey={apiKey}
              />
            }
          ></Route>

          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
                apiKey={apiKey}
              />
            }
          ></Route>

          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
                apiKey={apiKey}
              />
            }
          ></Route>

          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
                apiKey={apiKey}
              />
            }
          ></Route>

          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
                apiKey={apiKey}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
