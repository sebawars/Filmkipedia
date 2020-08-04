import styled from 'styled-components'

export const FilmEdit = styled.form`
    display: block;
    margin: 0.8em auto;
    text-align:center;
    
    h1{
        margin-top: 1em;
        font-size: 1.5em;
    }

    input{
        height: 2em;
        width: fit-content;
    }

    button{
        margin: 1em;
    }

`

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1em;

    div{
        max-width: 25%;
        @media (max-width: 600px){
            max-width: 60%;
            margin: auto;
        }
    }

    input{
        width: 100%;
        @media (max-width: 600px){
            text-align: center;
        }
    }

    @media (max-width: 600px){
        display: block;
        text-align: center;
    }

`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;

    button{
        margin: 0 2em;
    }

`