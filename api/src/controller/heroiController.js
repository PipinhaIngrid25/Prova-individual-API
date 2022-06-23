import {adicionar, listadeHerois} from "../repository/heroiRepository.js"
import {Router} from "express"
const server = Router();

server.post('/heroi', async (req, resp)=>{
    try{
        const infoheroi=req.body;
    if
        (!infoheroi.nome)
            throw new Error(
                'Nome do Heroi é obrigatorio!');
    
    if
        (!infoheroi.poder)
            throw new Error(
                'Descrição é obrigatoria!');
    if
        (!infoheroi.voa == undefined || infoheroi.voa < 0)
            throw new Error(
                'Informe se o heroi voa ou não!');
            const addHeroi = await adicionar(infoheroi);
            req.send(addHeroi);
    } 
    catch (err){
        resp.status(400).send({erro:err.message});
    }
})
server.get ('/heroi', async(req, resp)=>{
    try{
        const reposta = await listadeHerois();
        resp.send(reposta);
    }
    catch (err){
        resp.status(400).send({
            erro:err.message
        });
    }
})
export default server;