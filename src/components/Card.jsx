import { useEffect, useState } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import CountButton from "./CountButton";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeyDown = (e) => {
      // event listener for spacebar keydown
      if (e.code === "Space") {
        const newCount = count + 1;
        // Ensure count never goes above 5
        if (newCount > 5) {
          setCount(5);
          return;
        }
        setCount(newCount);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      // Remove event listener when component unmounts and prevent app from crashing due to excessive event listeners being added
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count]);

  return (
    <div className={`card ${locked && "card--limit"}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type='minus' locked={locked} setCount={setCount} />
        <CountButton type='plus' locked={locked} setCount={setCount} />
      </ButtonContainer>
    </div>
  );
}
