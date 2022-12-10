import * as S from "./styles.js";

const GenericInput = ({type, placeholder, id, aName}) => {
    return (
        <S.InputTypes type={type} placeholder={placeholder} id={id} name={aName}></S.InputTypes>
    );
};

export default GenericInput;