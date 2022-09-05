import styled from 'styled-components'

export const SigninContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }

    span {
        font-size: 0.8rem;
    }
        
    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
