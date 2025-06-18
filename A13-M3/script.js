class Cliente {
  #saldo
  // por padrão as propriedades da classe são publicas, mas também podemos criar as propriedades privadas
  constructor({ nome, cpf, saldo }) {
    this.nome = nome;
    this.cpf = cpf;
    this.#saldo = saldo;
  }

  //getters e setters são métodos para acessar as propriedades que são privadas
  get saldo() {
    return this.#saldo;
  }

  set saldo(value) {
    this.#saldo = value
  }
}

const botaoEnviar = document.getElementById('botao-enviar');

let listaClientes = [];

botaoEnviar.addEventListener('click', () => {
  const inputNome = document.getElementById('input-nome');
  const inputCPF = document.getElementById('input-cpf');
  const resultado = document.getElementById('resposta-usuario');

  const clientes = new Cliente({ nome: inputNome.value, cpf: inputCPF.value });

  listaClientes.push(clientes);

  resultado.innerHTML = '';

  // Mostrar todos os clientes
  listaClientes.forEach((cliente) => {
    const li = document.createElement('li');
    li.textContent = `Nome: ${cliente.nome} | CPF: ${cliente.cpf}`;
    resultado.appendChild(li);
  });

})

