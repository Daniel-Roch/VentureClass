import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import SairImg from '../../assets/sair.png'

import { useParams } from 'react-router-dom'

const DivHeader = styled.div`
    padding: 30px 70px;
    display: flex;
    justify-content: space-between;
    background: #2D46B9;
    a{
        text-decoration: none;
        color: #FFFFFF;
    }
`

const TitleHeader = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #FFFFFF;
    
`
export const SairApp = styled.p`

    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;

    color: #FFFFFF;
    :hover{
        box-shadow: 0px 1px #F89B29;
    }
`
export const ImgSair = styled.img`
    height: 14px;
`

export default function Header() {
    let {id} = useParams()

    return (
        <DivHeader>
            <TitleHeader><Link to="/">Venture<span style={{color: '#F89B29'}}>Class</span></Link></TitleHeader>
            {id && <SairApp><Link to="/">Sair do app <ImgSair src={SairImg}/></Link></SairApp>}
        </DivHeader>
    )
}
