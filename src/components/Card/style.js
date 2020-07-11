import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CardContainer = styled.a`
    border-radius: 18px;
    height: 250px;
    padding: 20px;
    position: relative;
    width: 100%;
    margin: 20px 50px 10px 10px;
    color: white;

    &.scienceColor{  
        background: linear-gradient(45deg, rgba(149,139,137,1) 0%, rgba(202,195,186,1) 64%);
    }

    &.businessColor{
        background: linear-gradient(45deg, rgb(25, 24, 25) 0%, rgba(79,78,79,1) 59%);
    }

    &.technologyColor{
        background: linear-gradient(22deg, rgb(84, 99, 84) 0%, rgba(177,176,175,1) 60%);
    }
`

export const SmallDescription = styled.p`
    font-size: 14px;
    line-height: 1;
    margin-top: 5px;

`

export const DescriptionContainer = styled.div`
    position: absolute;
    bottom: 30px;

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