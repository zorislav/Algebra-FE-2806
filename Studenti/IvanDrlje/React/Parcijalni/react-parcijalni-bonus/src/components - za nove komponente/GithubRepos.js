
//nova funkcijska komponenta
function GithubRepos ({repos}){
    //opet uvodimo proprety koje smo napravili u glavnoj komponenti i ubacili 
    //stanje

    if(!repos || repos.length <= 0){
        return null;
    }
    //kada u reposu nema ništa vraćamo ništa


    return(
        <div> 
            <p>
                <strong>REPOSITORIES:</strong>
            </p>
            <ul style={styles.ul}>
              {
                repos.map((repo) => <li key={repo.id}>{repo.name}</li>)
              }
            </ul>
            {/* SADA OVDI IZBACUJEMO SA MAP LISTU SVIH REPOZITORIJA, ZA ONAJ KEY ŠTA
             TRIBAMO POVEZAT STAVLJAMO KAO VALJDA UNIKATNI ID OD REPOA*/}
        </div>
    );

}

export default GithubRepos;


const styles = {
    ul: {
        listStyleType: 'none'
    }
}