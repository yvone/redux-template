import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getFaqs,
  createFaq,
  updateFaq,
  removeFaq,
} from '../actions/faq';

import { QuestionCard, QuestionInput } from '../components';

function Faqs() {
  const dispatcher = useDispatch();
  const faqs = useSelector((state) => {
    return state.faqs.arr;
  })
  const status = useSelector((state) => {
    return state.faqs.status;
  });

  useEffect(() => {
    dispatcher(getFaqs())
  }, []);

  const handleCreate = (newFaq) => {
    dispatcher(createFaq(newFaq));
  }

  const handleUpdate = (updatedFaq) => {
    dispatcher(updateFaq(updatedFaq));
  }

  const handleRemove = (id) => {
    dispatcher(removeFaq(id));
  }

  // const handleRemoveAll = () => dispatcher(removeAll());

  const renderActions = () => {
    /*if (status === 'READY') {
      return (
        <div style={{ display: 'flex', flex: 3, alignItems: 'center', justifyContent: 'flex-end', gap: '1rem' }}>
          <button onClick={handleRemoveAll} className="danger">
            Remove all
          </button>
        </div>
      )
    }*/
    return null;
  }

  const renderContent = () => {
    if (status === 'IDLE' || status === 'LOADING') {
      return (
        <p>Loading...</p>
      )
    };
  
    if (status === 'ERROR') {
      return (
        <p>
          Something went wrong, try again later
        </p>
      )
    };

    return (
      <>
        {faqs.map(faq => {
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
      </>
    )
  }

  return (
    <div
      className="Faqs"
      style={{
        border: '4px solid #3a86ff',
        width: '90vw',
        height: 'calc(85vh - 10px)',
        overflowY: 'scroll',
        overscrollBehavior: 'contain'
      }}
    >
      <header
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <h2 style={{ display: 'flex', flex: 1, margin: '1rem' }}>
          FAQs
        </h2>

        {renderActions()}
      </header>

      <ul style={{
        height: 'calc(100% - 312px)',
        minHeight: '300px',
        overflowY: 'scroll',
        margin: 0
      }}>
        {renderContent()}
      </ul>

      <footer style={{
        position: 'sticky',
        'webkitBoxShadow': '0px 0px 60px -30px rgba(0,0,0,0.75)',
        'mozBoxShadow': '0px 0px 60px -30px rgba(0,0,0,0.75)',
        boxShadow: '0px 0px 60px -30px rgba(0,0,0,0.75)'
      }}>
        <QuestionInput onSubmit={handleCreate} disabled={status !== 'READY'} />
      </footer>
    </div>
  );
}

export default Faqs;
