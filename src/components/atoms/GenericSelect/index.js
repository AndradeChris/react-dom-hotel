import React from 'react'
import * as S from './styles.js'

const GenericSelect = ({ id, aName, children }) => {
  return (
        <S.SelectInput defaultValue={'checked'} id={id} name={aName}>
            { children }
        </S.SelectInput>

  )
}

export default GenericSelect