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