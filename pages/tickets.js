import { useState } from "react";
// import nodemailer from "nodemailer";


function TicketBooking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission and booking process
    
    // // Create a NodeMailer transporter object
    // let transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "pramodkesarkar2222@gmail.com",
    //     pass: "pramod@2222",
    //   },
    // });
  
    // // Compose the email message with the ticket information
    // let message = {
    //   from: "pramodkesarkar2222@gmail.com",
    //   to: email,
    //   subject: "Ticket Information",
    //   text: `Dear ${name},\n\nYour ticket for the bus to ${destination} on ${date} has been booked successfully.\n\nThank you for choosing our bus service!\n\nBest regards,\nThe Bus Company`,
    // };
  
    // // Send the email
    // transporter.sendMail(message, (error, info) => {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log(`Email sent: ${info.response}`);
    //   }
    // });
  
    // // Reset the form fields
    // setName("");
    // setEmail("");
    // setPhone("");
    // setDestination("");
    // setDate("");
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Ticket Booking</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Pickup
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="destination">
            Destination
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="destination"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
            Seats
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="number"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Book Ticket
          </button>
        </div>
      </form>
    </div>
  );
}

export default TicketBooking;

