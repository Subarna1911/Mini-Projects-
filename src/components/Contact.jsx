import React, { useState } from 'react';

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.contact.trim()) {
      newErrors.contact = "Contact is required";
    } else if (form.contact.length < 10) {
      newErrors.contact = "Contact must be at least 10 digits";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      setSubmittedName(form.name);
      setSubmitted(true);
      setError({});
      setForm({ name: "", email: "", contact: "", message: "" });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className='max-w-screen px-3'>
      <div className='container mx-auto px-4 py-2 bg-slate-600'>

        {submitted ? (
          <h2 className='text-blue-500 text-lg font-bold'>
            Thank you, {submittedName}!
          </h2>
        ) : (
          <form className='flex  flex-col items-center justify-center' onSubmit={handleSubmit}>

            <label className='text-2xl font-bold text-white mb-3'>Name:</label>
            <input className='outline-none bg-white w-80 p-2 rounded-lg' 
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />
            {error.name && <p className='text-red-600'>{error.name}</p>}

            <label className='text-2xl font-bold text-white mb-3'>Email:</label>
            <input 
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className='outline-none bg-white w-80 p-2 rounded-lg'
            />
            {error.email && <p className='text-red-600'>{error.email}</p>}

            <label className='text-2xl font-bold text-white mb-3'>Contact:</label>
            <input 
              name="contact"
              type="number"
              value={form.contact}
              onChange={handleChange}
              className='outline-none bg-white w-80 p-2 rounded-lg'
            />
            {error.contact && <p className='text-red-600'>{error.contact}</p>}

            <label className='text-2xl font-bold text-white mb-3'>Message:</label>
            <input 
              name="message"
              type="text"
              value={form.message}
              onChange={handleChange}
              className='outline-none bg-white w-80 p-2 rounded-lg'
            />
            {error.message && <p className='text-red-600'>{error.message}</p>}

            <button className='mt-3 bg-blue-500 text-white p-2 rounded'>
              Submit
            </button>

          </form>
        )}

      </div>
    </div>
  );
};

export default Contact;
