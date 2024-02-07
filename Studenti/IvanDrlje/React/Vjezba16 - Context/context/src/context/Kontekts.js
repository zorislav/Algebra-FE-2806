import React from 'react';


const Context = React.createContext();
//Spremamo u objekt Context ono što nam vraća metoda u reactu - create context

export const Provider = Context.Provider;
//Definiramo komponentu preko ugrađenog svojstva na Context objektu - Provider
export const Consumer = Context.Consumer;
//Još jedna komponenta proizvoljnog imena aisto preko ugrađenog svojstva
//Consumer


export default Context;

