const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('database.db')

const TABELA_VIDEOS = `
CREATE TABLE if not exists "Videos" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "TITULO" varchar(150) not null,
    "DESCRICAO" varchar(255) not null,
    "url_da_thumbnail" varchar(255) not null,
    "url_do_video" varchar(255) not null
);`;

function criarTabela(){
    db.run(TABELA_VIDEOS, (erro)=>{
        if(erro){
            console.log("[ERRO] : Criação de tabela.")
        }
    })
}

db.serialize( ()=> {
    criarTabela();
});