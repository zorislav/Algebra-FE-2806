function UserFunction({ime, years, onNameChange}){

  return (
    <>
      <p>Pozdrav, moje ime je {ime} i imam {years} godina</p>
      <input type="text" onChange={onNameChange} />
    </>
  );
}

export default UserFunction;