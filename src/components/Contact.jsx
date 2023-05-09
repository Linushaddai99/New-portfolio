import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

    const [state, handleSubmit] = useForm("xgebdgew");

        if (state.succeeded) {
            return <p>Thanks for joining!</p>;
        }

  return (
    <>
        <div className='contact' id="contact">
          <h2>CONTACT & LINKS</h2>
          <p>Do you have any ideas? Tell me about it.  I am enabled to develop concepts that you would not have been able to do individually.</p>

          <div className="social-media">
          <h3>Email: </h3>
          <a href="">awajisomegak@gmail.com</a>
          </div>
          
          <div className="social-media">
            <h3>Accounts: </h3>
            <a href="https://github.com/Linushaddai99" target='_blanck'>GitHub</a>
            <a href="https://www.linkedin.com/in/linusshaddai/" target='_blanck'>LinkedIn</a>
            <a href="https://twitter.com/ShaddaiLinus" target='_blanck'>Twitter</a>
            </div>

          <form method="post" onSubmit={handleSubmit}>
            <textarea 
            id="message"
            name="message" 
            cols="30" 
            rows="10" 
            className='textarea' 
            placeholder="Write your message here">
            </textarea>

            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className='line'></div>

        <p style={{textAlign: 'center', marginTop: 20}}>SHADDAI</p>
    </>
  )
}

export default Contact