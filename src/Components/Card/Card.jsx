import { useEffect, useState } from "react";
import "./Card.css";

export default function Card({ question , selectedId, setSelectedId }) {
  const [isClicked, setIsClicked] = useState(true);
  const handleClick = (id) => {
    setSelectedId(id);
    setIsClicked(!isClicked);
    console.log(isClicked);
  };
  
  useEffect(() => {
    setIsClicked(true);
  }, [selectedId]);

  return (
    <div
      onClick={() => handleClick(question.id)}
      className={
        isClicked && question.id === selectedId ? "answer" : "question"
      }
    >
      {isClicked  && question.id === selectedId ? (
        <p>{question.answer}</p>
      ) : (
        <p>{question.question}</p>
      )}
    </div>
  );
}
