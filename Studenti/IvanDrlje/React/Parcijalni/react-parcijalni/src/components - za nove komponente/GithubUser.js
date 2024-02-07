//nova funkcijska komponenta
function GithubUser({ user }) {
  //OVO SMO PRIHVATILI USER PROPERTY U OBLIKU OBKETA KOJE SMO DEFINIRALI
  // NA GLAVNOJ KOMPONENTI A SADA GA UVODIMO OVDI!!! User je cili oni objekt
  //koji smo dobili od API-a

  //ovo je samo provjera ako nismo ništa dobili pa da prekinemo
  if (!user) {
    return null;
  }

  const { avatar_url, bio, name, location } = user;
  //destruktuiramo objekt user i radimo varijable samo onim svojstvima
  //kojim želimo pristupiti!!!

  return (
    <div style={styles.container}>
      {/* OVO SADA POSTAVLJAMO CSS PUTEM DOL DEFINIRANIH STILOVA U OBJEKTU */}
      <div style={styles.titleContainer}>
        <img src={avatar_url} alt="no logo" style={styles.image} />
        {/* POSTAVLJAMO SLIKU KAO SRC AVATAR OD GORE i on stiže
                TOP!!! */}
        <span style={styles.name}>{name}</span>
        {/* ovdi je ime repozitorija */}
      </div>
      <p>
        <strong>BIO: </strong>
        {bio}
      </p>
      <p>
        <strong>LOCATION: </strong>
        {location}
      </p>
    </div>
  );
}

export default GithubUser;
//exportiramo je default

//OVO RADIMO OBJEKT ZA STILIZACIJU KOJU ĆEMO GORE PRIMJENITI
const styles = {
  container: {
    texAlign: "justify",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 24,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 64,
    marginLeft: 36,
    display: "inline",
  },
};
