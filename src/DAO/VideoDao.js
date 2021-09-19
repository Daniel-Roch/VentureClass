class VideoDao{
    constructor(db){
        this.db = db
    }
    getAll(){
        return new Promise((resolve,reject)=>{
            this.db.all('SELECT * FROM Videos',(err,rows)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            })
        })
    }
    setVideo(newVideo){
        return new Promise((resolve,reject)=>{
            this.db.run(`INSERT INTO Videos(TITULO, DESCRICAO, url_da_thumbnail, url_do_video) VALUES(?,?,?,?)`,
            [newVideo.titulo, newVideo.descricao, newVideo.url_da_thumbnail,newVideo.url_do_video],
            (err)=>{
                if(err){
                    reject(err)
                }else{
                    resolve({"Envio_de_dados" : true})
                }
            })
        })
    }
    getVideo(id){
        return new Promise((resolve,reject)=>{
            this.db.get(`SELECT * FROM Videos WHERE ID = ?`, id, (erro,row)=>{
                if(erro){
                    reject(erro)
                }else{
                    if(row){
                        resolve(row)
                    }else{
                        reject({"ID" : false})
                    }
                }
            })
        })
    }
}
module.exports = VideoDao