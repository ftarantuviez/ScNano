import styled from 'styled-components';

export const StrongCategorie = styled.strong`
    &::first-letter{
        text-transform: uppercase;
    }
`

export const BodyContainer = styled.div`
    font-size: 20px !important;
    font-family: Lato, sans-serif !important;
    line-height: 1.6;
    @media screen and (min-width: 768px){
        margin: 0 40px;
    }
`