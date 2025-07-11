import React from "react";
import { Routes, Route } from "react-router-dom";
import ResponsiveDashboard from "./Demo";
import Movie from "./Movie";

const pages = [
  { label: "Products", path: "/Products" },
  { label: "Games", path: "/Games" },
  { label: "Cloths", path: "/Cloths" },
  { label: "Shoes", path: "/Shoes" },
  { label: "Watches", path: "/watches" },

];

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ResponsiveDashboard />}>

        {/* dynamic routes */}
        {pages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textTransform: "uppercase",

                }}
              >
                <h1>{page.label}</h1>
              </div>
            }
          />
        ))}



        <Route
          index
          element={
            <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', textTransform: "uppercase" }}>
              <h1>dashboard</h1>
            </div>
          }
        />
        <Route
          path="/orders"
          element={
            <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', textTransform: "uppercase" }}>
              <h1>orders</h1>
            </div>
          }
        />
        <Route
          path="/reports"
          element={
            <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', textTransform: "uppercase" }}>
              <h1>Reports</h1>
            </div>
          }
        />

        {/* sub category */}

            <Route path="/movie/animated/cartoon-1" element={<div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', textTransform: "uppercase" }}>
              <h1>Cartoon 1</h1>
            </div>} />
            <Route path="/movie/animated/cartoon-2" element={<div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', textTransform: "uppercase" }}>
              <h1>Cartoon 2</h1>
            </div>} />
          {/* </Route> */}
          {/* <Route path="bollywood" element={<Movie />}> */}
            <Route path="/movie/bollywood/movie-1" element={<div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', textTransform: "uppercase" }}>
              <h1>Movie 1</h1>
            </div>} />
            <Route path="/movie/bollywood/movie-2" element={<div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', textTransform: "uppercase" }}>
              <h1>movie 2</h1>
            </div>} />

      </Route>
    </Routes>
  );
}
