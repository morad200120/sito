// Conferma che il file JavaScript è collegato correttamente
console.log("Il file login.js è collegato correttamente.");

// Seleziona gli elementi dal DOM
const togglePassword = document.querySelector("#togglePassword"); // Seleziona l'icona per il toggle della password
const passwordInput = document.querySelector("#password-input"); // Seleziona l'input della password

// Aggiungi un listener per il click sull'icona
togglePassword.addEventListener("click", function () {
  // Controlla il tipo dell'input password
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password"; // Cambia il tipo da password a text o viceversa
  passwordInput.setAttribute("type", type); // Imposta il nuovo tipo per l'input

  // Cambia l'icona in base alla visibilità della password
  togglePassword.textContent = type === "password" ? "👁️" : "🙈"; // Cambia l'icona in base al tipo di input
});    
