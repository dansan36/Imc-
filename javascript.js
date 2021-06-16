
(function chamarAlunos() {
    // Quantidadade de alunos da turma
    var qtdAlunos = 3;
    // Array para armazenar os objetos de newAlunos
    var alunos = [];

    var alturaAlunos = 0;
    // Classe construtora para gerar os objetos de alunos
    class newAluno {
        constructor(nome, idade, altura, peso) {
            this.nome = nome;
            this.idade = idade;
            this.altura = altura;
            this.peso = peso;
            this.imc = this.peso/(this.altura * this.altura);
        }
    };
    // Laço de repetição para que todos os alunos da turma sejam chamados
    do {
        // Função getter para criar um novo objeto instância de newAlunos
        function getDados() {
            var nome;
            var idade;
            var altura;
            var peso;
            var aluno;

            function getNome(){
                nome = window.prompt("Informe o nome do aluno: ");
                try {
                    if(nome == null || nome == undefined || nome == " ") {
                        throw "Nome informado inválido!"
                    }
                } catch(e) {
                    console.log(e);
                }
            } getNome();

            function getIdade(){
                idade = window.prompt("Informe a idade do aluno: ");
                try {
                    if(idade == null || idade == undefined || Number.isNaN(idade) || idade == " ") {
                        throw "Idade informada inválida!"
                    }
                } catch(e) {
                    console.log(e);
                }
            } getIdade();

            function getAltura(){
                altura = window.prompt("Informe a altura do aluno (em centímetros): ");
                try {
                    if(altura == null || altura == undefined || Number.isNaN(altura) || altura == " ") {
                        throw "Altura informada inválida!"
                    }
                } catch(e) {
                    console.log(e);
                }
            } getAltura();

            function getPeso(){
                peso = window.prompt("Informe o peso do aluno (em Kg - 00.00): ");
                try {
                    if(peso == null || peso == undefined || Number.isNaN(peso) || peso == " ") {
                        throw "Peso informado inválido!"
                    }
                } catch(e) {
                    console.log(e);
                }
            } getPeso();

            // Pegar valores das funções getters para instânciar cada objeto
            aluno = new newAluno(nome, idade, altura, peso);
            // Método .push para armazenar a instância de cada objeto no array alunos
            alunos.push(aluno);
            // Somar altura dos alunos para calcular a média total
            alturaAlunos += parseFloat(altura);
            // Resetar os valores dos atributos para próxima instância
            nome = ""; idade = ""; altura = ""; peso = "";
            // Decremento da variável qtdAlunos
            qtdAlunos--;
        } getDados();
        
    } while (qtdAlunos >= 1);

    (function classificacaoIMC() {
        for(var i = 0; i < alunos.length; i++) {
            console.log("O aluno " + alunos[i].nome + " possui o IMC de " + parseFloat(alunos[i].imc).toFixed(2));
            if (alunos[i].imc < 18.5) {
                console.log("Alerta: O cálculo IMC do aluno " + alunos[i].nome + " indica magreza");
            } else if (alunos[i].imc >= 25 && alunos[i].imc <= 29.9) {
                console.log("Alerta: O cálculo IMC do aluno " + alunos[i].nome + " indica Obesidade nível 1");
            } else if (alunos[i].imc >= 30 && alunos[i].imc <= 39.9) {
                console.log("Alerta: O cálculo IMC do aluno " + alunos[i].nome + " indica Obesidade nível 2");
            } else if (alunos[i].imc >= 40) {
                console.log("Alerta: O cálculo IMC do aluno " + alunos[i].nome + " indica Obesidade nível 3");
            }
        }

        var getMaiorIMC = function() {
            var maiorIMC = Math.max.apply(Math, alunos.map(function(m){
                return m.imc;
            }))
            var alunoMaiorIMC = alunos.find(function(m) {
                return m.imc == maiorIMC;
            })
            console.log(alunoMaiorIMC.nome + " é o aluno com maior IMC da turma com um índice de: " + (alunoMaiorIMC.imc).toFixed(2));
        }
        getMaiorIMC();

        var getMenorIMC = function() {
            var menorIMC = Math.min.apply(Math, alunos.map(function(m) {
                return m.imc;
            }))
            var alunoMenorIMC = alunos.find(function(m) {
                return m.imc == menorIMC;
            })
            console.log(alunoMenorIMC.nome + " é o aluno com menor IMC da turma com um índice de: " + (alunoMenorIMC.imc).toFixed(2));
        }
        getMenorIMC();

        console.log("A altura média da turma é de " + ((((alturaAlunos/alunos.length))/100)).toFixed(2) + "m.");
    })();
})();
