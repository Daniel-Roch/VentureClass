import React from 'react'
import {Link} from 'react-router-dom'
import imgLayout from '../../assets/imgLayout.jpg'

import {
    SectionHome,
    TitleHome,
    DescHome,
    BtnHome,
    ImgHome
} from './styled'

import Header from '../../components/Header'

export default function Home() {
  return (<>
    <Header/>
    <SectionHome>
            <TitleHome>Educação que <span style={{color: '#F89B29'}}>transforma</span></TitleHome>
            <DescHome>Alunos de todo o mundo estão iniciando novas carreiras e avançando em suas áreas</DescHome>
            <Link to="/Treinamento/1"><BtnHome>INICIAR TREINAMENTO</BtnHome></Link>
            <ImgHome src={imgLayout} />
    </SectionHome>
  </>);
}