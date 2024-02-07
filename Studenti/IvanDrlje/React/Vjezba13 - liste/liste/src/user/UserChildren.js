
function UserChildren ({name, years, children}){
    //stavljamo novi POSEBNI property children, koji nam omogućava 
    //React mehanizam

    return (
        <>
            <p>Pozdrav, moje ime je {name} i imam {years} godina</p>
            <p>{children}</p>
        </>//ovo smo ubacili onaj React fragment, jer ne smimo imati 2 elementa iste razine
    );
}

export default UserChildren;
//Ekportiramo našu funkcijsku komponentu
