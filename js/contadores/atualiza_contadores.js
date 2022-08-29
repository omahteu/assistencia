import { link } from "../setup/index.js"
import { numero } from "../geradores/numero.js"

function formatDate(date) {
  const d = numero(date.getDate());
  const mo = numero(date.getMonth() + 1);
  const y = numero(date.getFullYear());
  const h = numero(date.getHours());
  const mi = numero(date.getMinutes());
  const s = numero(date.getSeconds());
  return `${d}/${mo}/${y} ${h}:${mi}:${s}`;
}

function minutes(f0) {
  return ((Number(f0[0]) * 60) + Number(f0[1]))
}

const base = new Date()
const h = base.getHours()
const mi = base.getMinutes()
const s = base.getSeconds()

const converter = (minutos) => {
  const horas = Math.floor(minutos / 60);
  const min = minutos % 60;
  const textoHoras = (`00${horas}`).slice(-2);
  const textoMinutos = (`00${min}`).slice(-2);
  return `${textoHoras}:${textoMinutos}`;
};

$.get(link[11], e => {
  e.forEach(el => {
    var ohra = el.datahora
    var ohra_formatada = ohra.split(":")
    var atual = [h, mi]
    var hora_um = minutes(ohra_formatada)
    var hora_dois = minutes(atual)
    var diferenca = parseInt(hora_dois) - parseInt(hora_um)
    var acrescimo = parseInt(hora_dois) + parseInt(diferenca)
    var hora_acrescida = converter(acrescimo)
    var id = el.id
    var valor = el.valor
    var quarto = el.quarto
    var tipo = el.tipo
    $.ajax({
      url: link[11] + id + "/",
      type: "PUT",
      dataType: "json",
      data: {
        datahora: hora_acrescida,
        valor: valor,
        quarto: quarto,
        tipo: tipo
      },
      success: () => {
        console.log("Sucesso")
      }
    })
  })
})
