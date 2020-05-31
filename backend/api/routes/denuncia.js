const express = require("express");
const router = express.Router();
const denunciaController = require('../Controllers/DenunciaController')
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

// Exports the router object
module.exports = router;