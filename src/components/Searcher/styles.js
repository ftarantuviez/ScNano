import styled from 'styled-components'


export const Input = styled.input`

    border: none;
    background: #f4f3f5;
    outline: none;
    border-radius: 40px;
    padding: 16px;
    font-size: 15px;
    width: 100%;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;

    &::placeholder{
        color: #e6e5e6;
    
    }

`

export const SearcherContainer = styled.div`
    width: 100%;
    margin: 0;
    padding: 20px 30px;
    
`

export const IconSearch = styled.div`
    display: flex;
    width: 100%;
    border-radius: 40px;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    align-items: center;
    justify-content: center;
    background: #f4f3f5;
    color: #e6e5e6;
    padding-bottom: 4px;
    padding-right: 0;
`