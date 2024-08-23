function codificar() {
    var input = document.getElementById("inputText").value;
    var output = btoa(input); // Codifica o texto usando Base64
    document.getElementById("outputText").value = output;
    mostrarResultado();
}

function decodificar() {
    var input = document.getElementById("inputText").value;
    try {
        var output = atob(input); // Decodifica o texto de Base64
        document.getElementById("outputText").value = output;
        mostrarResultado();
    } catch (e) {
        document.getElementById("outputText").value = "Erro: Texto inválido para decodificação.";
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById("outputPlaceholder").style.display = 'none';
    document.getElementById("outputText").style.display = 'block';
}

function copiarTexto() {
    var outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móveis

    navigator.clipboard.writeText(outputText.value)
        .then(() => {
            alert("Texto copiado com sucesso!");
        })
        .catch(err => {
            alert("Erro ao copiar o texto: " + err);
        });
}
