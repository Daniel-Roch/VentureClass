import styled from 'styled-components'

export const SectionHome = styled.section`
    background: #2D46B9;

    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(3,auto);


`
export const TitleHome = styled.p`
    grid-column: 1/2;
    grid-row: 1/1;
    position: absolute;
    width: 363px;
    height: 128px;
    left: 110px;
    top: 150px;

    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 56px;
    line-height: 64px;

    color: #FFFFFF;
`
export const DescHome = styled.p`
    position: absolute;
    width: 423px;
    height: 36px;
    left: 110px;
    top: 350px;

    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;

    color: rgba(255, 255, 255, 0.64);
`
export const BtnHome = styled.button`
    grid-column: 1/2;
    grid-row: 3/3;
    position: absolute;
    width: 393px;
    height: 58px;
    left: 110px;
    top: 450px;

    color: #FFFFFF;
    background: #F9A528;
    box-shadow: 1px 1px 20px -7px #F6D167;
    border-radius: 5px;
`
export const ImgHome = styled.img`
    grid-column: 2/2;
    grid-row: 1;

    left: 200px;
    top: 50px;
`