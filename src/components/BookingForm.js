import { useState } from "react";

const BookingForm = (props) => {

   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("")
   const [errors, setErrors] = useState({});
   const [statusMessage, setStatusMessage] = useState("");

   const handleSumbit = (e) => {
     e.preventDefault();
     const newErrors = {};

     // required checks
     if (!date) newErrors.date = 'Please choose a date.';
     if (!times) newErrors.time = 'Please choose a time.';
     const guestNum = parseInt(guests, 10);
     if (!guests) newErrors.guests = 'Please enter number of guests.';
     else if (isNaN(guestNum) || guestNum < 1 || guestNum > 10) newErrors.guests = 'Guests must be between 1 and 10.';

     // date not in the past
     if (date) {
       const today = new Date();
       today.setHours(0,0,0,0);
       const selected = new Date(date + 'T00:00:00');
       if (selected < today) newErrors.date = 'Date cannot be in the past.';
     }

     setErrors(newErrors);
     if (Object.keys(newErrors).length === 0) {
       setStatusMessage('Reservation submitted.');
       // call optional callback
       if (props.onSubmit) props.onSubmit({date, times, guests: guestNum, occasion});
     } else {
       setStatusMessage(Object.values(newErrors)[0]);
     }
   };

  const handleChange = (value) => {
   setDate(value);
   props.dispatch(value);
  }

  return (
      <section className="booking-section" aria-labelledby="booking-heading">
        <form className="booking-form" onSubmit={handleSumbit} noValidate>
          <fieldset className="booking-fieldset">
            <div className="field-group">
              <label htmlFor="book-date">Choose Date</label>
              <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type={"date"} aria-invalid={errors.date ? "true" : "false"} aria-describedby={errors.date ? 'book-date-error' : undefined} required />
              {errors.date && <div id="book-date-error" role="alert" className="error-text">{errors.date}</div>}
            </div>

            <div className="field-group">
              <label htmlFor="book-time">Choose Time</label>
              <select id="book-time" aria-label="Choose a time" value={times} onChange={(e) => setTimes(e.target.value)} aria-invalid={errors.time ? "true" : "false"} aria-describedby={errors.time ? 'book-time-error' : undefined} required>
               <option value="">Select Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes} value={availableTimes}>{availableTimes}</option>})}
              </select>
              {errors.time && <div id="book-time-error" role="alert" className="error-text">{errors.time}</div>}
            </div>

            <div className="field-group">
              <label htmlFor="book-guests">Number of Guests</label>
              <input id="book-guests" aria-label="Number of guests" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={1} min={1} max={10} aria-invalid={errors.guests ? "true" : "false"} aria-describedby={errors.guests ? 'book-guests-error' : undefined} required />
              {errors.guests && <div id="book-guests-error" role="alert" className="error-text">{errors.guests}</div>}
            </div>

            <div className="field-group">
              <label htmlFor="book-occasion">Occasion</label>
              <select id="book-occasion" aria-label="Occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
               <option value="">Select Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>

            <div className="field-group">
              <button type="submit" className="primary-button" aria-label="Make your reservation">Make Your Reservation</button>
            </div>

            <div role="status" aria-live="polite" className="status-message">{statusMessage}</div>
          </fieldset>
        </form>
      </section>
  );
};

export default BookingForm;
