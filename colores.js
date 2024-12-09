// scripts.js

// Mostrar/Ocultar el menú de accesibilidad
function toggleMenu() {
    const menu = document.getElementById("menu-options");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Aplicar perfiles de accesibilidad
function applyProfile(profile) {
    switch (profile) {
        case 'motora':
            alert("Navegación con teclado activada.");
            enableKeyboardNavigation();
            break;
        case 'ceguera':
            alert("Modo compatible con lectores de pantalla activado.");
            break;
        case 'daltonismo':
            document.body.style.filter = "grayscale(100%)";
            alert("Filtro de daltonismo aplicado.");
            break;
        case 'dislexia':
            enableDyslexiaMode();
            break;
        case 'visionBaja':
            alert("Aumentando el zoom global.");
            document.body.style.zoom = "1.5";
            break;
        case 'cognitivo':
            alert("Simplificando contenido.");
            simplifyPageContent();
            break;
        case 'convulsiones':
            disableAnimations();
            alert("Contenido animado desactivado para prevenir convulsiones.");
            break;
        case 'tdah':
            activateFocusMode();
            break;
        default:
            alert("Perfil no reconocido.");
    }
}

// Leer la página
function readPage() {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(document.body.innerText);
    utterance.lang = "es-ES";
    synth.speak(utterance);
    alert("Leyendo el contenido de la página.");
}

// Navegación por voz
function voiceNavigation() {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
        alert("Navegación por voz no soportada en este navegador.");
        return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "es-ES";
    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        processVoiceCommand(command);
    };
    recognition.start();
}

// Procesar comando de voz
function processVoiceCommand(command) {
    if (command.includes("contraste")) toggleContrast();
    else if (command.includes("agrandar texto")) enlargeText();
    else if (command.includes("leer página")) readPage();
    else alert("Comando no reconocido.");
}

// Resaltar enlaces
function highlightLinks() {
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.style.backgroundColor = "yellow";
        link.style.color = "black";
    });
    alert("Enlaces resaltados.");
}

// Agrandar texto
function enlargeText() {
    document.body.style.fontSize = "120%";
    alert("Texto agrandado.");
}

// Espaciado de texto
function increaseTextSpacing() {
    document.body.style.lineHeight = "2";
    alert("Espaciado de texto aumentado.");
}

// Desactivar animaciones
function disableAnimations() {
    const styles = document.createElement("style");
    styles.innerHTML = `* { animation: none !important; transition: none !important; }`;
    document.head.appendChild(styles);
    alert("Animaciones desactivadas.");
}

// Modo apto para dislexia
function enableDyslexiaMode() {
    document.body.style.fontFamily = "'OpenDyslexic', Arial, sans-serif";
    alert("Modo apto para dislexia activado.");
}

// Activar modo de enfoque (TDAH)
function activateFocusMode() {
    document.body.style.backgroundColor = "#f4f4f4";
    alert("Modo de enfoque activado.");
}
