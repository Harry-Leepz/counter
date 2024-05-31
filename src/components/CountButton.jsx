import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButton = ({ setCount, type }) => {
  const handleClick = () => {
    setCount((prevCount) => {
      if (type === "minus") {
        // Ensure count never goes below 0
        const newCount = prevCount - 1;
        if (newCount < 0) return 0;
        return newCount;
      } else {
        return prevCount + 1;
      }
    });
  };

  return (
    <button onClick={handleClick} className='count-btn'>
      {type === "minus" ? (
        <MinusIcon className='count-btn-icon' />
      ) : (
        <PlusIcon className='count-btn-icon' />
      )}
    </button>
  );
};

export default CountButton;
