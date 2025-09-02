import BookingForm from "./BookingForm";

const Booking = (props) => {

    return (
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch}/>
    )
}

export default Booking;