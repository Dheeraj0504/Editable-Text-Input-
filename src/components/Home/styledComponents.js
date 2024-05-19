import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #f5d0fe;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ResponsiveContainer = styled.div`
  background-color: #ffffff;
  width: 45%;
  height: 40%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Heading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 50px;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0;
  height: 50px;
`

export const InputText = styled.input`
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 20px;
  width: 100%;
  max-width: 250px;
  height: 32px;
  padding: 8px 16px;
  margin-right: 12px;
  border-radius: 5px;
  border: 2px solid #cbd2d9;
  outline: none;
`

export const TextLine = styled.p`
  color: #323f4b;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  width: 80%;
  min-width: 100px;
  max-width: 250px;
`

export const SaveButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  background-color: #d946ef;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  width: 110px;
  height: 40px;
  margin-left: 12px;
`
