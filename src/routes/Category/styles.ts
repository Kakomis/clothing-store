import styled from 'styled-components'

export const CategoryTitle = styled.h2`
    width: 80%;
    margin: 30px auto 25px;
    font-size: 1.8rem;
    cursor: pointer;
`

export const CategoryItem = styled.div`
    width: 80%;
    margin: 0 auto 80px;
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-row: auto;
`
