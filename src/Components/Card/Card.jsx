import "./Card.css";

export default function Card({ question, handleClick, selectedId }) {
  return (
    <div
      onClick={() => handleClick(question.id)}
      className={question.id === selectedId ? "answer" : "question"}
    >
      {question.id === selectedId ? (
        <p>{question.answer}</p>
      ) : (
        <p>{question.question}</p>
      )}
    </div>
  );
}
