import Button from "react-bootstrap/Button";
//importiramo komponentu koja se zove Button iz react-bootstrapa
import { VISIBILITY_TYPES } from "../constants/const";
import PropTypes from 'prop-types';




//ova funkcija je za minjanje boja na botunima
function getButtonVariant(visibilityType, currentVisibilityType) {
  return visibilityType === currentVisibilityType ? "dark" : "outline-dark";
  //ternarni operator
}

const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPES;
//destruktuirali smo uvezeni objekt



function VisibilityToolbar({ visibilityType, onVisibilityChange }) {
  //očekujemo dobiti visibility type kao property(objekt) u našoj komponenti
  //TO JE OBAJ PROPERTY ŠTA SMO GA DODALI KOMPONENTI U APP.JS!!!! - props

  //event handler funkcija
  function handle(value) {
    onVisibilityChange(value);
    //Value će biti jedna od naših konstanti
  }

  return (
    <>
      <Button
        variant={getButtonVariant(visibilityType, ALL)}
        size="sm"
        onClick={() => handle(ALL)}
        // Ovu arrow funkciju pišemo samo da handle funkciji možemo dati parametar
      >
        All
      </Button>
      {/* ovo je bootstrapova verija botuna sa posebnom stilizacijom */}
      <Button
        variant={getButtonVariant(visibilityType, ACTIVE)}
        size="sm"
        onClick={() => handle(ACTIVE)}
      >
        Active
      </Button>
      <Button
        variant={getButtonVariant(visibilityType, COMPLETED)}
        size="sm"
        onClick={() => handle(COMPLETED)}
      >
        Completed
      </Button>
    </>
  );
}

export default VisibilityToolbar;


VisibilityToolbar.propTypes = {
  visibilityType: PropTypes.string,
  onVisibilityChange: PropTypes.func
}
//Ovo smo gore importirali, ali mi nije baš najjasnije, za šta to služi uopće
//neko dokumentiranje???
