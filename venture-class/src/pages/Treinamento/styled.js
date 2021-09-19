import styled from "styled-components";

export const DivTrein = styled.div`
    background: #E5E5E5;
    height: 100vh;

    padding: 5px 60px;

    display: grid;
    grid-template-areas:
    "video cards";
    grid-template-columns: 1fr;
    gap: 10px;
    align-content: center;

`
//Parte dos Cards do Vídeos -
export const DivCardsVideos = styled.div`
    grid-area: cards;
    
    height: auto;

    background: #FFFFFF;
    box-shadow: 1px 1px 20px -14px rgba(0, 107, 255, 0.25);
    border-radius: 5px;
`

//Parte do Video - 
export const DivVideo = styled.div`
    grid-area: video;
    display: flex;
    flex-direction: column;
`
export const VideoIframe = styled.iframe`
    width: 646px;
    height: 432px;
`
export const TitleVideo = styled.p`
    margin-top: 10px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    color: #222222;
`
export const DescVideo = styled.p`
    margin-top: 10px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;

    color: rgba(34, 34, 34, 0.64);
`