import { listarPlacas } from "./placa.js";
import { listarProcessadores } from "./processador.js";
import { listarMemorias } from "./memoria.js"
import { listarHds } from "./hd.js"
import { listarFontes } from "./fonte.js"
import { listarSeriais} from "./serial.js"

$(document).ready(function(){
    listarPlacas()
    listarProcessadores()
    listarMemorias()
    listarHds()
    listarFontes()
    listarSeriais()
})
