import {con} from "./connection.js";


export async function adicionar(heroi){  
     const comando=
     `INSERT INTO tb_super_heroi(nm_super_heroi, ds_super_poder, bt_voa)
    valores (?,?,?)`

    const  [ reposta ] = await con.query (comando, [ heroi.nome, heroi.superPoder, heroi.voa]);
    herói.id=reposta.insertId;
    return herói;
}
export async function listadeHerois(){
    const comando=
    `SELECT id_super_heroi id,
    nm_super_heroi nome,
    ds_super_poder superPoder,
    bt_voa voa
    from tb_super_heroi`;

    const[linhas]=await con.query(comando);
    return linhas;
}