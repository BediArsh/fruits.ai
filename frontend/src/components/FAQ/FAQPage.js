import React, { useEffect, useState } from 'react';
import { fetchFAQs } from '../../services/api';

function FAQPage() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    async function loadFAQs() {
      const data = await fetchFAQs();
      setFaqs(data);
    }
    loadFAQs();
  }, []);

  return (
    <div className="faq-page">
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map(faq => (
          <li key={faq.id} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQPage;
