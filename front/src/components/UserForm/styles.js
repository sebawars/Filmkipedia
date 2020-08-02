import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
  min-width: 300px;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.span`
  color: red;
  font-size: 14px;
`
export const SubmitButton = styled.button`
    height: 2em;
    width: 5em;
    border-radius: 0.3em;
    background-color: #1c3643;
    color: #90a4ae;
`
