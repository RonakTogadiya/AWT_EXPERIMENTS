import React, { useRef } from 'react';

function RefForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    console.log('Ref Form Data:', data);
    alert(`Submitted!\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`);

    //Clear fields
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px', maxWidth: '400px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label>Name: </label><br />
        <input type="text" ref={nameRef} required />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Email: </label><br />
        <input type="email" ref={emailRef} required />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Message: </label><br />
        <textarea ref={messageRef} rows={3} cols={30} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RefForm;
