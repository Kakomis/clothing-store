import styled from 'styled-components'

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const CategoryTitle = styled.h2`
    font-size: 1.8rem;
    cursor: pointer;
`

export const Preview = styled.div`
    margin-top: 25px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-row: auto;
`