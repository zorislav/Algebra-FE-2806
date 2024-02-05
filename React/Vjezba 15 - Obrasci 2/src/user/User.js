function UserFunction({ime, years, onNameChange, onDeleteUser}){

  return (
    <>
      <p onClick={onDeleteUser}>Pozdrav, moje ime je {ime} i imam {years} godina.</p>
      <input type="text" value={ime} onChange={onNameChange} />
    </>
  );
}

export default UserFunction;