const express = require("express");
const router = express.Router();
const pessoaController = require('../Controllers/PessoaController');

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

// Exports the router object
module.exports = router;