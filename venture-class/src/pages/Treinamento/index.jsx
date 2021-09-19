import React,{useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import Header from '../../components/Header'

import {
    DivTrein,
    DivVideo,
    DivCardsVideos,
    VideoIframe,
    TitleVideo,
    DescVideo
} from './styled'

import CardsVideos from '../../components/CardsVideos'

export default function Treinamento() {
    let {id} = useParams()
    const [click,setClick] = useState(true)
    const [dadosVideo, setDadosVideo] = useState("")
    const [dadosTodosVideos, setDadosTodosVideos] = useState("")
    let history = useHistory()

    useEffect(()=>{
        if(click){
            DadosVideos()
            AllVideos()
            setClick(false)
        }
    },[click])
    //pegar um video através do params.
    const DadosVideos = () =>{
        fetch(`/videos/${id}`)
            .then(res => res.json())
            .then(json => setDadosVideo(json))
    }
    const AllVideos = ()=>{
        fetch(`/videos`)
            .then(res => res.json())
            .then(json => setDadosTodosVideos(json))
    }
    function ClickVideo(id){
        setClick(true)
        history.push(`/Treinamento/${id}`)
    }

    return (<>
        <Header/>
        <DivTrein>
            <DivVideo>
                <VideoIframe src={dadosVideo.url_do_video}></VideoIframe>
                <TitleVideo>{dadosVideo.TITULO}</TitleVideo>
                <DescVideo>{dadosVideo.DESCRICAO}</DescVideo>
            </DivVideo>
            <DivCardsVideos>
                {dadosTodosVideos !== "" && dadosTodosVideos.map(video =>{
                    return (
                    <CardsVideos key={video.ID} onClick={()=> ClickVideo(video.ID)}
                    src={video.url_da_thumbnail} 
                    titulo={video.TITULO} 
                    desc={video.DESCRICAO}/>
                    )
                })}
            </DivCardsVideos>
        </DivTrein>
    </>)
}
