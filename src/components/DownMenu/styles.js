import styled, { keyframes } from 'styled-components'

export const DownMenuContainer = styled.div`
    position: fixed;
    bottom: 20px;
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 20;
`

export const DownMenuRow = styled.div`
    box-shadow: 3px 5px 8px #f4f3f5;
    border-radius: 60px;
    width: 40%;
    padding: 10px;
    display: flex;
    justify-content: center;
    background: #d4d4d4b8;
`
export const DownMenuCol = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CercleMenu = styled.div`

    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    position: fixed;
    right: 30px;
    top: 152px;

    @media(max-width: 767px){
        top: 207px;
    }
    

`