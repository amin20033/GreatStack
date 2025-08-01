import React, { useState } from "react";
import "./contact.css";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target; // Save reference to form
    setResult("Sending...");

    const formData = new FormData(form);
    formData.append("access_key", "0fd761f7-5128-43d0-b3b3-baebc0b748fa");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        form.reset(); // ✅ Reset form using saved reference
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("Network error. Please try again.");
    }
  };

  return (
    <div className="contact">
      <div className="col">
        <h3>
          Send us a message
          <img
            src="https://greatstack.in/assets/msg-icon-ClKDHhj8.png"
            width="30"
            alt="message"
          />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service.
        </p>
        <ul>
          <li>📧 Contact@GreatStack.dev</li>
          <br />
          <li>📞 +1 123-456-7890</li>
          <br />
          <li>
            📍 18/1 Topsia 2nd Lane,
            <br /> Kolkata-700039
          </li>
        </ul>
      </div>

      <div className="col1">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <br />

          <label>Phone Number</label>
          <br />
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number"
            required
          />
          <br />

          <label>Your Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <br />

          <label>Write your message here</label>
          <br />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="6"
            required
          />
          <br />

          <button className="btn btn-dark" type="submit">
            Submit
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
