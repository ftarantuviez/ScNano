import styled, { keyframes } from 'styled-components';

export const MenuAnimationOn = keyframes`
    from{
        left: -1000px;
    }
    to{
        left: 0;
    }
`
export const MenuAnimationOff = keyframes`
    from{
        left: 0;
    }
    to{
        left: -1000px;
    }
`

export const UnorderList = styled.ul`

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

`

export const AnchorList = styled.a`

    font-size: 24px;

`

export const ContainerAbsolute = styled.div`

    position: absolute;
    width: 100%;
    height: 100%;
    
    display: block;
    background: #f4f3f5; 
    &.menuOn{
        animation: ${MenuAnimationOn} 2s forwards;
    }
    &.menuOff{
        animation: ${MenuAnimationOff} 2s forwards;

    }
    
`
export const RowContainer = styled.div`
    height: 100%;
`

