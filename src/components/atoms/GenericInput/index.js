import PropTypes from 'prop-types'
import React from 'react'
import * as S from './styles.js'

const GenericInput = ({ type, placeholder, id, aName, max, min, onChange, onClick, onBlur, error, value }) => {
  return (
        <S.InputTypes type={type} placeholder={placeholder} id={id} name={aName} max={max} min={min} onChange={onChange} onClick={onClick} errorField={error} value={value} onBlur={onBlur} />
  )
}

export default GenericInput

GenericInput.propTypes = {
  type: PropTypes.node,
  placeholder: PropTypes.node,
  id: PropTypes.node,
  aName: PropTypes.node,
  checked: PropTypes.node,
  max: Number,
  min: Number
}