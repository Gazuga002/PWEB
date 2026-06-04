let texto = require("./modulo1");


let app = require("./app/config/server");
let rotaHome = require("./app/routes/home");

rotaHome(app);

let rotaHistoria = require("./app/routes/historia");

rotaHistoria(app);

let rotaCursos = require("./app/routes/cursos");

rotaCursos(app);


let rotaProfessores = require("./app/routes/professores");

rotaProfessores(app);

let rotaAdicionarUsuario = require("./app/routes/adicionar_usuario");

rotaAdicionarUsuario(app);


app.listen(3000, function() {
    console.log('Servidor iniciado com sucesso! '+texto);
});
