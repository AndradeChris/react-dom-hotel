// Arquivo criado: 15/12/2022 às 20:49
import React from 'react'
import DescriptionParagraph from '../../components/atoms/DescriptionParagraph'
import MiniTitle from '../../components/atoms/MiniTitle'
import PrincipalTitle from '../../components/atoms/PrincipalTitle'
import UnorderedList from '../../components/atoms/UnorderedList'
import Carrousel from '../../components/organisms/Carrousel'
import RoomDropdown from '../../components/organisms/RoomDropdown'
import { carrouselImages, contentListOffer, contentRoomBox } from './data'
import * as S from './styles'

export const Acomodacoes = () => {
  return (
    <S.Wrapper> 
      <PrincipalTitle>Nossas Acomodações</PrincipalTitle>
      {contentRoomBox.map((block, index) => (
        <S.RoomsContainer key={index}>
            <RoomDropdown title={block.title} imgCollection={block.imgCollection} />
        </S.RoomsContainer>
      ))}
      <S.FeaturedContainer>
        <PrincipalTitle>Pacote em destaque</PrincipalTitle>
        <MiniTitle span='Feriado de Páscoa!' />
        <S.OfferContainer>
          <S.CarrouselContainer>
            <Carrousel imgCollection={carrouselImages} altText={'Images Carrousel'} />
          </S.CarrouselContainer>
          <S.OfferDescription>
            <DescriptionParagraph msg='Venha se divertir e se emocionar durante o feriado de Páscoa de 2023! Serão 5 dias inesquecíveis de alegria para toda a família!' />
            <MiniTitle span='O que você vai aproveitar:'/>
            <UnorderedList arr={contentListOffer} />
            <DescriptionParagraph msg='Consulte nossas condições e venha se divertir com sua família!' />
          </S.OfferDescription>
        </S.OfferContainer>
      </S.FeaturedContainer>
    </S.Wrapper>
  )

}

export default Acomodacoes
