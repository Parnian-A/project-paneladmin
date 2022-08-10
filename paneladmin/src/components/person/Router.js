import React from "react";
import Full from "./Full";
import List from "./List";
import New from "./New";
import { Routes , Route } from "react-router-dom";


export default function Router() {
  return (
    <div>
        <Routes>
            <Route path="/" exact element={<List/>}/>
            <Route path="/:id" exact element={<Full/>}/>
            <Route path="/New" element={<New/>}/>
        </Routes>

    </div>
  )
}
