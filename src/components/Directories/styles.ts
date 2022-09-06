import styled from 'styled-components'

export const DirectoriesContainer = styled.div`
    width: 80%;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, 280px));
    grid-auto-rows: 2fr;
    gap: 20px;
    justify-content: center;

    div:first-child {
        grid-area: 1 / 1 / 3 / 3;
        height: 600px;
    }

    @media screen and (max-width: 768px) {
        width: 90%;

        div {
            margin-left: 0;
            grid-area: auto;
        }

        div:first-child {
            grid-area: auto;
            height: 290px;
        }
    }
`
