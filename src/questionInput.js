import React from 'react';

function QuestionInput(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { question, answer } = e.target.elements;
        
        props.onSubmit({
            question: question.value,
            answer: answer.value
        });

        question.value = '';
        answer.value = '';
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                padding: '1rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridAutoRows: 'minmax(3rem, auto)',
                rowGap: '1rem',
                border: '1px solid #3a86ff',
                backgroundImage: 'repeating-linear-gradient(-45deg, #3a86ff, #3a86ff 0.25px, transparent 0, transparent 50%)',
                backgroundSize: '12px 12px'
            }}
        >
            <div
                style={{
                    gridColumn: '1 / span 3',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <label htmlFor="question">
                    Question:
                </label>
                <input
                    name="question"
                    className="writing"
                />
            </div>

            <div
                style={{
                    gridColumn: '1 / span 3',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <label htmlFor="answer">
                    Answer:
                </label>
                <input
                    name="answer"
                    className="writing"
                />
            </div>

            <button
                type="submit"
                style={{
                    gridColumn: '3 / span 1',
                    gridRowStart: '3',
                    width: '100%',
                }}
            >
                Add
            </button>
        </form>
    );
}

export default QuestionInput;
