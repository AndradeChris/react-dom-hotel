import MiniTitle from '../../atoms/MiniTitle/index.js';
import PrincipalTitle from '../../atoms/PrincipalTitle/index.js';
import SubTitle from '../../atoms/SubTitle/index.js';
import GenericInput from '../../atoms/GenericInput/index.js';
import * as S from './styles.js';
import { useState } from 'react';
import Anchor from '../../atoms/Anchor/index.js'

const ComponentsArea = () => {
  const miniTitleCollection = [{ price: "150,00" }, { price: "250,00" }, { price: "350,00" }];
  const [inputsData, setInputsData] = useState([
        {
          type: "text",
          placeholder: "Digite seu nome"
        },
        {
          type: "number",
          placeholder: "1"
        },
        {
          type: "password",
          placeholder: "Digite sua senha"
        }

      ])
  const [inputsReserve, setInputsReserve] = useState([
        {
          id: "1",
          type: "date",
          label: "Data de checkin"
        },
        {
          id: "2",
          type: "date",
          label: "Data de checkout"
        },
        {
          id: "3",
          type: "number",
          label: "Número de adultos"
        },
        {
          id: "4",
          type: "number",
          label: "Número de crianças"
        }

      ])

  return (
    <S.Wrapper>
      <PrincipalTitle>Página de Components</PrincipalTitle>
      {miniTitleCollection.map((item, index) => (
        <MiniTitle key={index} span="R$ " text={item.price} />
      ))}
      <SubTitle>Subtitle aqui!</SubTitle>
      {inputsData.map((element, index) => (
        <GenericInput key={index} type={element.type} placeholder={element.placeholder} />
      ))}
      <Anchor />
    </S.Wrapper>
  )
}


export default ComponentsArea