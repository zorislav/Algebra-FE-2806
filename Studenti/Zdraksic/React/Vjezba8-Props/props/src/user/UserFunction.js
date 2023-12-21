function UserFunction(props) {
  const { name, years } = props;

  return (
    <p>
      Pozdrav, moje ime je {name} i imam {years} godina
    </p>
  );
}

export default UserFunction;
