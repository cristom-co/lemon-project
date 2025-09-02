import React from "react";
import { useState } from "react";



const BookingForm = (props) => {

   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("")

   const handleSumbit = (e) => {
   e.preventDefault();
   };

  const handleChange = (value) => {
   setDate(value);
   props.dispatch(value);
  }

  return (
    <header>
      <section>
        <form onSubmit={handleSumbit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type={"date"} />
            </div>
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select id="book-time" aria-label="Choose a time" value={times} onChange={(e) => setTimes(e.target.value)}>
               <option value="">Select Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes} value={availableTimes}>{availableTimes}</option>})}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests</label>
              <input id="book-guests" aria-label="Number of guests" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={1} min={1} max={10} />
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select id="book-occasion" aria-label="Occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
               <option value="">Select Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>
            <div>
              <input type={"submit"} aria-label="Make your reservation" value={"Make Your Reservation"} />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
