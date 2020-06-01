const express = require("express");
const router = express.Router();
const denunciaController = require('../Controllers/DenunciaController');
const pessoaController = require('../Controllers/PessoaController');
const respostaController = require('../Controllers/RespostaController');

//inseri os dados da pessoa, retorna json de ok
router.post("/pessoa", pessoaController.create);
/**rota1- método post-
 * JSON:
 *  "nome" : "lulu",
	"email": "lulu@teste.com",
	"idade": 22,
	"sexo": "feminino",
	"cor": "parda",
	"escolaridade": "estudando",
	"categoriaprof": "computacao",
	"renda": 1252.0,
	"sintomas": 1,
	"diagnostico": 0,
	"contatocom": 1
 *
 */
//inseri os dados da pessoa, retorna json de ok
router.post("/denuncia", denunciaController.create);
/**rota2 - método post-
 * 		JSON:	
			"email": "lulu@teste.com",
            "periodo": "manha",
            "data_": 20012001,
            "colegaapesentou": 1,
            "vunerabilidade": "falta de mascara",
            "descricaovulnerabilidade": "sggasdaghsdvsgdvf",
            "latitude": 452.25,
            "longitude": 6325.52
 */
router.get("/denuncia", denunciaController.index);
/**ROTA3-método get
 * retorno do arquivo:
 *{  "denuncia": [
    {
      "idpessoa": 1,
      "iddenuncia": 3,
      "periodo": "manha",
      "data_": "20012001",
      "colegaapesentou": 1,
      "vunerabilidade": "falta de mascara",
      "descricaovulnerabilidade": "sggasdaghsdvsgdvf",
      "latitude": 452.25,
      "longitude": 6325.52
    }
  ]
}
 * 
 */
//inseri os dados da pessoa, retorna json de ok
router.post("/resposta", respostaController.create);
/**ROTA4- método post
 * JSON:
 * {	"nome": "prefeito",
		 "email": "prefeitofeio@email.com",
		 "telefone": "222222222",
		 "cargo": "perfeito",
		 "cpf": "652233552",
		 "cnes_cnpj": "225115/515151",
		 "iddenuncia": 3
}
 * 
 */
router.get("/resposta", respostaController.index);
/**
 * ROTA 5- método get-
 * Retorno do arquivo JSON:
 * {
  "resposta": [
    {
      "idresposta": 3,
      "nome": "prefeito",
      "email": "prefeitofeio@email.com",
      "telefone": "222222222",
      "cargo": "perfeito",
      "cpf": "652233552",
      "cnes_cnpj": "225115/515151",
      "iddenuncia": 3
    }
  ]
}
 */

// Exports the router object
module.exports = router;