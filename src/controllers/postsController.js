import { getAllPosts } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const resultados = await getAllPosts();
    res.status(200).json(resultados)
}