import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addFaq, updateFaq, removeFaq, removeAll } from './actions/faq';

import QuestionInput from './questionInput';
import QuestionCard from './questionCard';

function Faqs() {
  const faqs = useSelector((state) => {
    return state.faqs.arr;
  })
  const dispatcher = useDispatch();
  const [localFaqs, setLocalFaqs] = useState(faqs);

  useEffect(() => {
    setLocalFaqs(faqs)
  }, [faqs]);

  const handleCreate = (newFaq) => {
    dispatcher(addFaq(newFaq));
  }

  const handleUpdate = (updatedFaq) => {
    dispatcher(updateFaq(updatedFaq));
  }

  const handleRemove = (id) => {
    dispatcher(removeFaq(id));
  }

  const handleRemoveAll = () => dispatcher(removeAll());

  return (
    <div className="Faqs" style={{ border: '4px solid #8338ec', width: '90vw', padding: '1rem' }}>
      <header style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ display: 'flex', flex: 1}}>
          FAQs with redux
        </h2>

        <div style={{ display: 'flex', flex: 3, alignItems: 'center', justifyContent: 'flex-end', gap: '1rem'  }}>
          <button onClick={handleRemoveAll} className="danger">
            Remove all
          </button>
        </div>
      </header>

      <ul>
        {localFaqs.map(faq => {
          return (
            <li key={faq.id} style={{ listStyleType: 'decimal' }}>
              <QuestionCard
                initialValues={faq}
                onUpdate={handleUpdate}
                onRemove={handleRemove}
              />
            </li>
          )
        })}
      </ul>

      <QuestionInput onSubmit={handleCreate} />
    </div>
  );
}

export default Faqs;
