import axios from "axios";
import { useState } from "react";

const apiEndpointPrefix = import.meta.env.VITE_API_ENDPOINT;

const Contact = ({ courts }) => {
  const [selectedCourt, setSelectedCourt] = useState(null);

  const handleSelectedCourt = (event) => {
    const selectedCourt = courts.find(
      (court) => court.court_id === parseInt(event.target.value)
    );
    console.log("selectedCourt", selectedCourt.court_name);
    setSelectedCourt(selectedCourt);
  };

  const handleSubmit = async () => {
    const bookingFormData = {
      court_name: selectedCourt ? selectedCourt.court_name : null,
      member_id: 1,
      // selectedMember ? selectedMember.member_id : null,
      booked_at: new Date().toISOString(),
      day_name: "Monday",
      // day_name: selectedDayOfWeek ? selectedDayOfWeek.day_name : null,
      start_time: "14:00",
      // start_time: selectedStartTime ? selectedStartTime.start_time : null,
      duration_hours: 1,
      booking_type_name: "singles",
      // duration_hours: selectedDuration ? selectedDuration.duration_hours : null,
      // booking_type_name: selectedBookingType
      //   ? selectedBookingType.booking_type_name
      //   : null,
    };

    try {
      const bookingResponse = await axios.post(
        `${apiEndpointPrefix}/bookings`,
        bookingFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Booking created:", bookingResponse.data);
      history.push('/')
    } catch (err) {
      console.error("Error creating booking", err.message);
    }
  };

  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Booking Form
      </h1>
      <form action="" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Select a court</label>
            <select
              className="border-2 rounded-lg p-3 flex border-gray-300"
              name="court"
              onClick={handleSelectedCourt}
            >
              {courts.map(({ court_name, court_id }) => (
                <option value={court_id} key={court_id}>
                  {court_name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 flex border-gray-300"
            rows="10"
            name="message"
          />
        </div>
        <button
          className="bg-[#001b5e] text-gray-100 mt-[0.25rem] w-full p-[0.25rem] rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
