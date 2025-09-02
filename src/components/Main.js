import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Booking from "./Booking";
import Header from "./Header";
import NotFound from "./NotFound";

const Main = () => {
    const initialState = {availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state) {
        return {availableTimes: ["test"]}
    }

    return(
        <main id="main-content">
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>


    )
}

export default Main;