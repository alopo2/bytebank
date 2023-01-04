import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Angela", 11122233309);

const contaCorrenteAngela = new ContaCorrente(1001, cliente1);
contaCorrenteAngela.depositar(500);
contaCorrenteAngela.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaCorrenteAngela)
console.log(contaPoupanca)