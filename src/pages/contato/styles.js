import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h1{
    margin: 50px 0;
  }
  h2{
    margin: 40px 0 20px 0;
    padding: 10px;
    text-transform: uppercase;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items:left;
  max-width: 600px;
  width: 100%;
`

export const FormContainer = styled.form`
  max-width: 600px;
  width: 100%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  textarea{
    margin:0 0 35px 0;
  }

  button {
    margin: 16px 0 0 0;
  }

  textarea, button{    
    text-transform: uppercase ;
    font-family:Helvetica, sans-serif ;
  }

  @media (max-width: 640px) {
    .inputsContainer{
      width:80%;      
    }
  }

`
