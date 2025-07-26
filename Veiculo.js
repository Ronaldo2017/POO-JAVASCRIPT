// CLASSE VEICULO VAI SER A SUPER CLASSE
class Veiculo {
  constructor(nome, tipoMotor, qtdRodas) {
    this._nome = nome;
    this._tipoMotor = tipoMotor;
    this._qtdRodas = qtdRodas;
  }

  /**
   * ENCAPSULANDO OS ATRIBUTOS PARA NÃO FICAREM ACESSÍVEIS DIRETAMENTE
   */
  get nome(){
    return this._nome
  }

  set nome(nome){
    this._nome = nome
  }

  get tipoMotor(){
    return this._tipoMotor
  }

  set tipoMotor(motor){
    this._tipoMotor = motor
  }

  get qtdRodas(){
    return this._qtdRodas
  }

  set qtdRodas(rodas){
    this._qtdRodas = rodas
  }

  // METODO UTILIZADO PARA TODAS AS CLASSES, ONDE VERIFICA
  // QUAL TIPO DE MOTOR ESTA SENDO MOSTRADO
  acelerar() {
    if (this._tipoMotor === 0) {
      console.log("Acelerando com motor à combustão!");
    } else if (this._tipoMotor === 1) {
      console.log("Acelerando com motor elétrico!");
    } else {
      console.log("Tipo de motor inexistente!");
      return;
    }

    console.log(`Acelerando ${this._nome} com ${this._qtdRodas} rodas!`);
  }
}

// CLASSE CARRO
class Carro extends Veiculo {
  constructor(nome, tipoMotor, arcondicionado) {
    super(nome, tipoMotor, 4);
    // INSERE MAIS UM ATRIBUTO AO CARRO
    this._arcondicionado = arcondicionado;
  }

  // VERIFICA SE O OPCIONAL ESTA LIGADO OU NAO
  opcionais() {
    if (this._arcondicionado) {
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
// TROCA NOME E QTDRODAS, ATRAVES DO METODO SET
carroC.nome = "F MAX 250"
carroC.qtdRodas = 6
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
const motoE = new Moto("Twister", 1);
motoE.acelerar();
