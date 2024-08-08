import React from 'react'
import './Contact.css'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "471fab7a-634a-43a9-a37c-2c983aa53550");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='Contact'>
      <div className="contact-col">
      <h3 className='message'>Send us a message &#128231;</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam vel impedit incidunt corrupti repellat blanditiis ipsam laboriosam excepturi saepe sit. Ad blanditiis voluptatum cumque soluta error minus quod alias, praesentium perferendis harum officiis explicabo fuga vitae delectus dolor esse tenetur!</p>
      <ul>
        <li>&#128231; Contact@boulevard</li>
        <li>&#128383; +91 1234567890</li>
        <li>&#127970; New Delhi , India</li>
      </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor=""> Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <label htmlFor="">Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter Your Mobile Number' />
          <label htmlFor="">Write Your Message Here </label>
          <textarea name="message" rows='6' placeholder='Enter Your Message'></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now  &#8594;</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact