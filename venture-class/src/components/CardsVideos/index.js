import React from 'react'
import styled from 'styled-components'

const DivCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 350px;
    grid-template-areas: 
    "img title"
    "img desc";
    margin: 10px;
    gap: 10px;
    cursor: pointer;

`

const DivVideosImg = styled.img`
    grid-area: img;

    width: 150px;
`
const CardTitle = styled.p`
    grid-area: title;

    font-family: Ubuntu;
    font-style: normal;
    font-size: 17px;

    color: #222222;
`
const DescCard = styled.p`
    grid-area: desc;


    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    color: rgba(34, 34, 34, 0.64);
`

export default function CardsVideos(props) {
    return (
        <DivCard onClick={props.onClick}>
            <DivVideosImg src={props.src}/>
            <CardTitle>{props.titulo}</CardTitle>
            <DescCard>{props.desc}</DescCard> 
        </DivCard>
    )
}
