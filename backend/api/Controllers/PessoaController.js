const database = require('../../database');

module.exports = {

    async create(request, response) {
        const pessoa = request.body;
        console.log(request.body);
        const erro = "deu merda";

        try {
            await database('pessoa').returning(["nome", "email", "idade", "sexo", "cor",
                "escolaridade", "categoriaprof", "renda", "sintomas", "diagnostico", "contatocom"])
                .insert({
                    nome: request.body.nome,
                    email: request.body.email,
                    idade: request.body.idade,
                    sexo: request.body.sexo,
                    cor: request.body.cor,
                    escolaridade: request.body.escolaridade,
                    categoriaprof: request.body.categoriaprof,
                    renda: request.body.renda,
                    sintomas: request.body.sintomas,
                    diagnostico: request.body.diagnostico,
                    contatocom: request.body.contatocom
                })

        } catch (erro) {
            console.log(erro);

        }

        return response.json("Dados inseridos");
    }

};