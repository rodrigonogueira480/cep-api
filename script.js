

const consultarCep = () => {
    console.log(`chamou a api`);
    const cep = document.getElementById('cep').value;

    let uri = `https://cep.awesomeapi.com.br/json/${cep}`

    fetch(uri)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            document.getElementById('logradouro').value = json.address;
            document.getElementById('bairro').value = json.district;
            document.getElementById('uf').value = json.state;
            document.getElementById('localidade').value = json.city;
        })
}
/*Consultar nomes mais populares por estado[*/

const fetchEstados = () => {
    let uri = `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`

    console.log(`URI: ${uri}`);

    fetch(uri)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            let options = `<option value="">Selecione</option>`

            data.forEach(estado => {
                options += `<option value="${estado.sigla}">${estado.nome}</option>`
            });
            document.getElementById('uf').innerHTML = options;
            // Preencher o select com os estados

        })
}

fetchEstados()

const fetchMunicipios = () => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/CE/municipios`)
        .then(json => {
            console.log(json)

            let options = `<option selected disabled>Selecione</option>`

            json.forEach(municipio => {
                options = options + `<option value="${municipio.nome}">${municipio.nome}</option>`
            });
            document.getElementById('localidade').innerHTML = options
            // Preencher o select com os estados
        })
}
fetchMunicipios()