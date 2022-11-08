import React, {useState} from 'react';
import './emailcta.css';

const EmailCTA = () => {
  
  const [submit, setSubmit] = useState(false);


  
  return (
    <div className='dbo__emailcta' id='dbo__emailcta'>
      <div className='dbo__emailcta-container'>
        <div className={submit? 'dbo__emailcta-container_response open' : 'dbo__emailcta-container_response '}>
          <h4>Email submitted, I'll get back to you as soon as I can!</h4>
          <button onClick={() => setSubmit(false)}>RETURN</button>
        </div>
        <form className={submit? 'dbo__emailcta-container_form closed' : 'dbo__emailcta-container_form'}>
          <p>To start the process of creating a truly unique and beautiful piece of furniture, flick us a message!</p>
          <input type="text" placeholder="name" required/>
          <input type="text" placeholder="email" required/>
          <textarea name='message' rows="5" columns="100" placeholder="write message here..." required/>
          <button type="submit" onClick={() => setSubmit(true)}>SEND</button>
        </form>
      </div>
    </div>
  )
}

export default EmailCTA;