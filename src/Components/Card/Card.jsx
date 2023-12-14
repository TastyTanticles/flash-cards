import "./Card.css";

export default function Card({ question, handleClick, selectedId, isClicked }) {
  return (
    <div
      onClick={() => handleClick(question.id)}
      className={
        isClicked && question.id === selectedId ? "answer" : "question"
      }
    >
      {isClicked && question.id === selectedId ? (
        <p>{question.answer}</p>
      ) : (
        <p>{question.question}</p>
      )}
    </div>
  );
}
