import CountButton from "./CountButton";

const ButtonContainer = ({ setCount, locked }) => {
  return (
    <div className='button-container'>
      <CountButton type='minus' locked={locked} setCount={setCount} />
      <CountButton type='plus' locked={locked} setCount={setCount} />
    </div>
  );
};

export default ButtonContainer;
