// CLASSE VEICULO VAI SER A SUPER CLASSE
class Veiculo {
  constructor(nome, tipoMotor, qtdRodas) {
    this.nome = nome;
    this.tipoMotor = tipoMotor;
    this.qtdRodas = qtdRodas;
  }

  // METODO UTILIZADO PARA TODAS AS CLASSES, ONDE VERIFICA
  // QUAL TIPO DE MOTOR ESTA SENDO MOSTRADO
  acelerar() {
    if (this.tipoMotor === 0) {
      console.log("Acelerando com motor à combustão!");
    } else if (this.tipoMotor === 1) {
      console.log("Acelerando com motor elétrico!");
    } else {
      console.log("Tipo de motor inexistente!");
      return;
    }

    console.log(`Acelerando ${this.nome} com ${this.qtdRodas} rodas!`);
  }
}

// CLASSE CARRO
class Carro extends Veiculo {
  constructor(nome, tipoMotor, arcondicionado) {
    super(nome, tipoMotor, 4);
    // INSERE MAIS UM ATRIBUTO AO CARRO
    this.arcondicionado = arcondicionado;
  }

  // VERIFICA SE O OPCIONAL ESTA LIGADO OU NAO
  opcionais() {
    if (this.arcondicionado) {
      console.log("Arcondicionado ligado: Sim");
    } else {
      console.log("Arcondicionado ligado: Não");
    }
  }
}

// CLASSE MOTO
class Moto extends Veiculo {
  constructor(nome, tipoMotor) {
    super(nome, tipoMotor, 2);
  }
}

console.log("");
console.log("===========VEÍCULOS A COMBUSTÃO==================");
console.log("");

console.log("----- ACELERANDO O CARRO -----");
console.log("");
const carroC = new Carro("Fox", 0, false);
carroC.acelerar();
carroC.opcionais();

console.log("");
console.log("----- ACELERANDO A MOTO-----");
console.log("");

const motoC = new Moto("Kawasaki", 0);
motoC.acelerar();

console.log("");
console.log("===========VEÍCULOS ELÉTRICOS===========");

console.log("");
console.log("----- ACELERANDO O CARRO-----");
console.log("");
const carroE = new Carro("BMW", 1, true);
carroE.acelerar();
carroE.opcionais();

console.log("");
console.log("----- ACELERANDO A MOTO-----");
console.log("");
const motoE = new Moto("Twist", 1);
motoE.acelerar();
