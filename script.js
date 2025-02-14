// script.js
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');
const themeToggle = document.getElementById('themeToggle');

// Atualiza o contador de caracteres e palavras
inputText.addEventListener('input', () => {
    const text = inputText.value;
    charCount.textContent = `${text.length} caracteres`;
    wordCount.textContent = `${text.split(/\s+/).filter(word => word.length > 0).length} palavras`;
});

// Funções de conversão
function convertToUpperCase() {
    outputText.value = inputText.value.toUpperCase();
}

function convertToLowerCase() {
    outputText.value = inputText.value.toLowerCase();
}

function convertToTitleCase() {
    outputText.value = inputText.value.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function convertToSentenceCase() {
    outputText.value = inputText.value.charAt(0).toUpperCase() + inputText.value.slice(1).toLowerCase();
}

function convertToInverseCase() {
    outputText.value = inputText.value.split('').map(char => 
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
}

function convertToCamelCase() {
    outputText.value = inputText.value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

function convertToSnakeCase() {
    outputText.value = inputText.value.toLowerCase().replace(/\s+/g, '_');
}

function convertToKebabCase() {
    outputText.value = inputText.value.toLowerCase().replace(/\s+/g, '-');
}

// Copiar para a área de transferência
function copyToClipboard() {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado!');
}

// Limpar texto
function clearText() {
    outputText.value = '';
}

// Alternar tema
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Modo Claro' : '🌙 Modo Escuro';
}