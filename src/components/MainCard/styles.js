import styled from 'styled-components'

export const MainCardContainer = styled.a`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    border-radius: 30px;
    box-shadow: 3px 5px 8px #f4f3f5;
    background: rgb(24,71,101);
    background: linear-gradient(90deg, rgba(24,71,101,1) 0%, rgba(107,128,159,1) 80%);
`

export const ShortDescription = styled.div`
    color: white;
    font-family: 'Roboto';
    
`

export const ParagraphShortDescription = styled.p`
    font-size: 13px;
    font-weight: 300;
    font-family: "Roboto";
    color: #d4d4d4;
    margin: 0;
    line-height: 1.3;
`
export const ImageContainer = styled.div`
    
    width: 90px;
    height: 130px;
    position: absolute;
    right: -23px;
    top: -20px;
}
`
export const ImageCard = styled.img`
    width: 100%;
    height: 100%;
`