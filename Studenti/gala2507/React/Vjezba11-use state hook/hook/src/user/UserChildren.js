function UserChildren({ ime, years, children }) {
  return (
    <>
      <p>
        Pozdrav, moje ime je {ime} i imam {years} godina.
      </p>
      <p>{children}</p>
    </>
  );
}

export default UserChildren;
