import styled, { keyframes } from 'styled-components'

export const CercleMenu = styled.div`

    height: 50px;
    border-radius: 50%;
    position: fixed;
    right: 30px;
    top: 152px;
    background: #cac3ba59;
    z-index: 20;

    @media(max-width: 767px){
        top: 207px;
    }
    
    &.menuOn{
        width: 200px;
        border-radius: 12px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    &.menuOff{
        width: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #9c9c9c;
    }

`

export const IconPresent = styled.a`
    color: #030303;
`
export const IconAusent = styled.a`
    color: #B9ACAD;

    &:hover{
        color: #030303;
    }
`

export const CancelIcon = styled.span`
    color: #4c6a89;
    cursor: pointer;

    &:hover{
        color: rgb(190, 30, 44);
    }
`