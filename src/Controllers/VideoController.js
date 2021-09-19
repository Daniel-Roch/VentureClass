const VideoDao = require('../DAO/VideoDao')
const Video = require('../Models/VideoModel')


module.exports = (app,db) =>{
    const videoDao = new VideoDao(db)

    app.get('/videos', async (req,res)=>{
        await videoDao.getAll()
            .then(rows => res.status(200).json(rows))
            .catch(erro => res.status(500).json(erro))
    })
    app.post('/videos', async (req,res)=>{
        const {titulo,descricao,url_da_thumbnail, url_do_video} = req.body
        const newVideo = new Video(titulo,descricao,url_da_thumbnail, url_do_video)
        
        await videoDao.setVideo(newVideo)
            .then(rows => res.status(200).json(rows))
            .catch(erro => res.status(500).json(erro))
    })
    //Pegar por id
    app.get('/videos/:id', async (req,res)=>{
        await videoDao.getVideo(req.params.id)
            .then(row =>res.status(200).json(row))
            .catch(erro => res.status(500).json({erro}))
    })
}