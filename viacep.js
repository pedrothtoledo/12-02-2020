const axios = require('axios');
axios.get ("https://viacep.com.br/ws//json/")
.then(function(res){
    const adress = res.data;
    console.log(adress.cep) ;
    console.log(adress.bairro);
    console.log(adress.localidade);
    console.log(adress.uf);
    console.log(adress.unidade);
    console.log(adress.ibge);
    console.log(adress.gia);
})
.catch(function(err){
    console.log(err.response.data);
})
