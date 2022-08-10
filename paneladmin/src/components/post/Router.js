import List from "./List";
import React from 'react'
import Full from "./Full";
import { Route , Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
        <Route path="/"  element={<List/>} />
        <Route path="/:id" element={<Full/>} />
    </Routes>
  )
}
