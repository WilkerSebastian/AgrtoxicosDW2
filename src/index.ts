import { App } from "./app"

const __PORTA:number = 8081;

new App().server.listen(__PORTA , ()=>{

    console.log(`servidor rodando na porta: ${__PORTA}`);

});