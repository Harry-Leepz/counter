import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButton = ({ setCount, type, locked }) => {
  const handleClick = (event) => {
    setCount((prevCount) => {
      if (type === "minus") {
        // Ensure count never goes below 0
        const newCount = prevCount - 1;
        if (newCount < 0) return 0;
        return newCount;
      } else {
        // Ensure count never goes above 5
        const newCount = prevCount + 1;
        if (newCount > 5) return 5;
        return newCount;
      }
    });

    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className='count-btn'>
      {type === "minus" ? (
        <MinusIcon className='count-btn-icon' />
      ) : (
        <PlusIcon className='count-btn-icon' />
      )}
    </button>
  );
};

export default CountButton;
