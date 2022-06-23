import 'dotenv/config'

import controller from './controller'
import express from 'express'
import cors from 'cors'

const server=express();
server.use(cors());
server.use(express.json());

server.use(controller);
server.listen(process.env.PORT, () => console.log `API ligada na porta ${process.env.PORT}`);
