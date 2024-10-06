"use client";
import React, { useState } from "react";
import ApartmentListings from "./Components/ApartmentListings";
import ApartmentData from "./data/apartments.json";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApartmentDetails from "./Components/ApartmentDetails";

const App = () => {
  const [data, setData] = useState(ApartmentData);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  console.log(data);

  return (
    <div>
      <h1 className="flex justify-center items-center text-5xl">
        Project 10 AirBnb
      </h1>

      <div className="flex  items-center mt-6">
        <div className="flex space-x-4 ml-10">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Giriş Tarihi Seçiniz"
            className="border p-2"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            placeholderText="Çıkış Tarihi"
            className="border p-2"
          />
        </div>

        <div className="flex justify-center items-center ml-28">
          <input
            value={search}
            placeholder="Oda arayın..."
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-full w-96 p-1 border-2 border-sky-500"
          />
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ApartmentListings
                data={data}
                search={search}
                startDate={startDate}
                endDate={endDate}
              />
            }
          />

          <Route path="/apartment/:id" element={<ApartmentDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
