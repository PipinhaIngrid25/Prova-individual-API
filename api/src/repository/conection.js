const con = aguardemysql.criarConexão({
    hospedeiro:processo.env.MYSQL_HOST,
    usuário:processo.env.MYSQL_USER,
    senha:processo.env.MYSQL_PWD,
    banco:processo.env.MYSQL_DB
} )

export {con}