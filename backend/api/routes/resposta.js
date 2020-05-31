const express = require("express");
const router = express.Router();
const respostaController = require('../Controllers/RespostaController')
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