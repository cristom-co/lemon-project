import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from '../components/BookingForm';

test('BookingForm renders controls and allows selecting time and guests', async () => {
  const available = { availableTimes: ['17:00', '18:00'] };
  const dispatch = jest.fn();
  render(<BookingForm availableTimes={available} dispatch={dispatch} />);

  // Labels and controls
  expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
  const timeSelect = screen.getByLabelText(/Choose Time/i);
  expect(timeSelect).toBeInTheDocument();

  // Select a time option
  await userEvent.selectOptions(timeSelect, screen.getByRole('option', { name: '17:00' }));
  expect(screen.getByRole('option', { name: '17:00' }).selected).toBe(true);

  // Guests input
  const guests = screen.getByLabelText(/Number of guests/i);
  await userEvent.clear(guests);
  await userEvent.type(guests, '3');
  expect(guests.value).toBe('3');
});
