const database = require('../../database');

module.exports = {
    async index(request, response) {
        const denuncia = await database('denuncia').select('*');
        console.log({ denuncia });
        return response.json({ denuncia });
    },

    async create(request, response) {
        const denuncia = request.body;
        console.log(request.body);
        const erro = "deu merda";


        try {
            const { nome, email } = request.body;
            console.log(nome, email);
            const idpessoa = await database('pessoa').select('idpessoa').where('email', email);
            const id = idpessoa[0]["idpessoa"]

            console.log(id);

            await database('denuncia')
                .insert({
                    idpessoa: id,
                    periodo: request.body.periodo,
                    data_: request.body.data_,
                    colegaapesentou: request.body.colegaapesentou,
                    vunerabilidade: request.body.vunerabilidade,
                    descricaovulnerabilidade: request.body.descricaovulnerabilidade,
                    latitude: request.body.latitude,
                    longitude: request.body.longitude
                })

        } catch (erro) {
            console.log(erro);

        }

        return response.json("Dados inseridos");
    }
}