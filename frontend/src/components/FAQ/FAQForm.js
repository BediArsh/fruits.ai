import React, { useState } from 'react';
import { createFAQ } from '../../services/api';

function FAQForm({ setFaqs }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFaq = await createFAQ({ question, answer });
    setFaqs((prevFaqs) => [...prevFaqs, newFaq]);
    setQuestion('');
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        required
      />
      <button type="submit">Add FAQ</button>
    </form>
  );
}

export default FAQForm;
