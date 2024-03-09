class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está realizando suas atividades.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
        super(nome, idade, 'Gerente');
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, linguagem) {
        super(nome, idade, 'Desenvolvedor');
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

function exibirErro(mensagem) {
    document.getElementById('resultado').innerHTML = `<p style="color: red;">Erro: ${mensagem}</p>`;
}

function criarFuncionarios() {
    try {
        const nome = document.getElementById('nome').value;
        const idade = parseInt(document.getElementById('idade').value);
        const cargo = document.getElementById('cargo').value;

        if (!nome || isNaN(idade) || !cargo) {
            throw new Error('Preencha todos os campos obrigatórios.');
        }

        let funcionario;

        if (cargo.toLowerCase() === 'gerente') {
            const departamento = document.getElementById('departamento').value;
            funcionario = new Gerente(nome, idade, departamento);
        } else if (cargo.toLowerCase() === 'desenvolvedor') {
            const linguagem = document.getElementById('linguagem').value;
            funcionario = new Desenvolvedor(nome, idade, linguagem);
        } else {
            throw new Error('Cargo inválido. Escolha entre "Gerente" ou "Desenvolvedor".');
        }

        document.getElementById('resultado').innerHTML = `
            <p>${funcionario.seApresentar()}</p>
            <p>${funcionario.trabalhar()}</p>
            <p>${funcionario instanceof Gerente ? funcionario.gerenciar() : funcionario.programar()}</p>
        `;
    } catch (error) {
        exibirErro(error.message);
    }
}
