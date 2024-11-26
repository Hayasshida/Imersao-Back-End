import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getAllPosts(){
    const db = conexao.db("imersão-instabytes");
    const colecao = db.collection("posts");

    return colecao.find().toArray();
};

export async function criarPost(novoPost){
    const db = conexao.db("imersão-instabytes");
    const colecao = db.collection("posts");
    
    return colecao.insertOne(novoPost);
}

export async function atualizaPost(id, post){
    const db = conexao.db("imersão-instabytes");
    const colecao = db.collection("posts");
    const objId = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objId)}, {$set: novoPost});
}