import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>BOOK YOUR TABLE</h1>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Type Your Email" />
        <textarea placeholder="Write Here....."></textarea>
        <input type="submit" value="BOOK" />
      </form>
    </div>
  );
}

export default Contact;
