class Heroi {
    constructor(nome, idade, tipo) {
        // Inicializa o herói com as propriedades nome, idade e tipo
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        // Define o tipo de ataque com base no tipo de herói
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        // Exibe a mensagem do ataque
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi("Aragorn", 35, "guerreiro");
heroi1.atacar();  // Exibe: o guerreiro atacou usando espada

const heroi2 = new Heroi("Gandalf", 1000, "mago");
heroi2.atacar();  // Exibe: o mago atacou usando magia

const heroi3 = new Heroi("Bruce", 30, "monge");
heroi3.atacar();  // Exibe: o monge atacou usando artes marciais

const heroi4 = new Heroi("Kage", 25, "ninja");
heroi4.atacar();  // Exibe: o ninja atacou usando shuriken
