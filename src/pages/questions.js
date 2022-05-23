import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getQuestions } from '../actions/question';

import { QuestionCard, QuestionInput } from '../components';

function Questions() {
  const dispatcher = useDispatch();

  const getQuestionsStatus = useSelector((state) => {
    return state.questions.getQuestionsState;
  });
  const initialQuestions = useSelector((state) => {
    return state.questions.arr;
  });
  const [questions, setQuestions] = useState(initialQuestions);

  useEffect(() => {
    dispatcher(getQuestions());
  }, []);

  useEffect(() => {
    setQuestions(initialQuestions)
  }, [initialQuestions]);

  const handleCreate = (question) => {
    setQuestions([
      ...questions,
      {
        id: null,
        ...question,
      }
    ]);
  }

  const handleUpdate = (updatedQuestion) => {
    setQuestions(
      questions.map(originalQuestion => {
        if(originalQuestion.id === updatedQuestion.id) {
          return updatedQuestion;
        }
        return originalQuestion;
      })
    );
  };

  const handleRemove = (id) => {
    setQuestions(
      questions.filter(question => question.id !== id)
    );
  };

  const handleRemoveAll = () => setQuestions([]);

  const renderActions = () => {
    if (getQuestionsStatus === 'READY') {
      return (
        <div style={{ display: 'flex', flex: 3, alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}>
          <button onClick={handleRemoveAll} className="danger">
            Remove all
          </button>
        </div>
      )
    } else {
      return null;
    }
  }

  const renderContent = () => {
    if (getQuestionsStatus === 'IDLE' || getQuestionsStatus === 'LOADING') {
      return (
        <p>Loading...</p>
      )
    };
  
    if (getQuestionsStatus === 'ERROR') {
      return (
        <p>
          Something went wrong, try again later
        </p>
      )
    };

    return (
      <>
        <ul>
          {questions.map(question => {
            return (
              <li key={question.id} style={{ listStyleType: 'decimal' }}>
                <QuestionCard
                  initialValues={question}
                  onUpdate={handleUpdate}
                  onRemove={handleRemove}
                />
              </li>
            )
          })}
        </ul>
    
        <QuestionInput onSubmit={handleCreate} disabled={getQuestionsStatus !== 'READY'}/>
      </>
    )
  }

  return (
    <div className="Questions" style={{ border: '4px solid #8338ec', width: '90vw', padding: '1rem' }}>
      <header style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ display: 'flex', flex: 1}}>
          Questions with thunks
        </h2>

        {renderActions()}
      </header>

      {renderContent()}
    </div>
  );
}

export default Questions;
