function Box({value, setValue}) {

  return (
    <>
      <button onClick={ () => {
        setValue(value+1)
      }} >Increment</button>
    </>
  );
}

export default Box



