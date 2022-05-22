import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { saveQuestions } from './actions/question';

import QuestionInput from './questionInput';
import QuestionCard from './questionCard';

function Questions() {
  const initialQuestions = useSelector((state) => {
    return state.questions.arr;
  })
  const dispatcher = useDispatch();
  const [questions, setQuestions] = useState(initialQuestions);

  useEffect(() => {
    setQuestions(initialQuestions)
  }, [initialQuestions]);

  const handleSave = () => {
    dispatcher(saveQuestions(questions));
  }

  const handleCreate = (question) => {
    // Mock id - random number
    const id = Math.floor(Math.random() * 1000);

    setQuestions([
      ...questions,
      {
        id,
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

  return (
    <div className="Questions" style={{ border: '4px solid #8338ec', width: '90vw', padding: '1rem' }}>
      <header style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ display: 'flex', flex: 1}}>
          Questions with thunks
        </h2>

        <div style={{ display: 'flex', flex: 3, alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}>
          <button onClick={handleRemoveAll} className="danger">
            Remove all
          </button>
          <button onClick={handleSave} className="magic">
            Save local state
          </button>
        </div>
      </header>

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

      <QuestionInput onSubmit={handleCreate} />
    </div>
  );
}

export default Questions;
