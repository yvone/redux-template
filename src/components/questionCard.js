import React, { useState } from 'react';

function QuestionCard(props) {
    const [editable, setEditable] = useState(false);

    const {
        initialValues,
        onUpdate,
        onRemove,
    } = props;

    const handleUpdate = (e) => {
        const { value, name } = e.target;

        if ( initialValues[name] !== value ) {
            onUpdate({
                ...initialValues,
                [name]: value,
            });
        } else {
            e.target.value = initialValues[name];
        }

        setEditable(false);
    };

    const handleRemove = () => {
        onRemove(initialValues.id);
    };

    return (
        <form
            onSubmit={e => e.preventDefault()}
            style={{
                padding: '1rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridAutoRows: 'minmax(3rem, auto)',
                rowGap: '1rem',
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
                    className="writing"
                    name="question"
                    defaultValue={initialValues.question}
                    onBlur={handleUpdate}
                    disabled={!editable}
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
                    className="writing"
                    name="answer"
                    defaultValue={initialValues.answer}
                    onBlur={handleUpdate}
                    disabled={!editable}
                />
            </div>

            <div
                style={{
                    gridColumn: '3 / span 1',
                    gridRowStart: '3',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.5rem',
                }}
            >
                <button
                    className={editable ? "disabled" : "danger"}
                    type="button"
                    onClick={handleRemove}
                    disabled={editable}
                >
                    Remove
                </button>
                <button
                    className="warning"
                    type="button"
                    onClick={() => setEditable(!editable)}
                >
                    {editable ? 'Cancel' : 'Edit'}
                </button>
            </div>
        </form>
    );
}

export default QuestionCard;
