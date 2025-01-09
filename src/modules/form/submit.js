import dayjs from "dayjs";

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e define a data minima como sendo a atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
  // Faz com que o navegador nao de refresh na página
  event.preventDefault();

  console.log("Enviado!")
} 