const database = require('../../database');

module.exports = {
    async index(request, response) {
        const resposta = await database('resposta').select('*');
        console.log({ resposta });
        return response.json({ resposta });
    },

    async create(request, response) {
        const resposta = request.body;
        console.log(request.body);
        const erro = "deu merda";

        try {

            await database('resposta')
                .insert({
                    nome: request.body.nome,
                    email: request.body.email,
                    telefone: request.body.telefone,
                    cargo: request.body.cargo,
                    cpf: request.body.cpf,
                    cnes_cnpj: request.body.cnes_cnpj,
                    iddenuncia: request.body.iddenuncia

                })

        } catch (erro) {
            console.log(erro);

        }

        return response.json("dados inseridos ok");
    }
}