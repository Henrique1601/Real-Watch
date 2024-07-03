
function togglemode(){
  const html = document.documentElement
  html.classList.toggle ('dark')

}

setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();
  
 // Verifica se é PM e ajusta a hora
 let amPm = hour >= 12 ? 'PM' : 'AM';
 hour = hour % 12 || 12; // Converte para formato 12 horas


  document.getElementById("hour").innerText = hour
  document.getElementById("minutes").innerText = minute
  document.getElementById("seconds").innerText = seconds
  document.getElementById("am_pm").innerText = amPm; // Exibe AM ou PM
},1000)
///Versão melhora do meu código que perguntei ao copilot 
/*
function updateClock() {
  const date = new Date();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  // Converte para formato 12 horas e define AM/PM
  const amPm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;

  // Atualiza os elementos HTML
  document.getElementById("hour").innerText = hour.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minute.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
  document.getElementById("amPm").innerText = amPm;
}

// Chama a função inicialmente e a cada segundo
updateClock();
setInterval(updateClock, 1000);

*/