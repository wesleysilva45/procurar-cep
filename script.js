async function consultarCEP() {
    try {
        const cepInput = document.getElementById('meuInput');
        let cep = cepInput.value;
  
        // Formata o CEP
        cep = cep.replace(/\D/g, "");
        cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");
  
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
  
        // Exiba as partes do CEP no HTML
        const resultadoDiv = document.getElementById('result');
        resultadoDiv.innerHTML = `
            <p><strong>Cidade:</strong> ${data.localidade}</p>
            <p><strong>Logradouro:</strong> ${data.logradouro}</p>
            <p><strong>Bairro:</strong> ${data.bairro}</p>
            <p><strong>CEP:</strong> ${cep}</p>
        `;
    } catch (error) {
        console.error('Erro ao consultar o CEP:', error);
    }
  }
function limparTela(){
    const resultadoDiv = document.getElementById('result');
    resultadoDiv.innerHTML = '';
    

};
