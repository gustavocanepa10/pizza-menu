import React from "react";

// Dados das pizzas traduzidos
const dadosPizzas = [
  {
    nome: "Focaccia",
    ingredientes: "Pão com azeite de oliva italiano e alecrim",
    preco: 6,
    nomeFoto: "pizzas/focaccia.jpg",
    esgotada: false,
  },
  {
    nome: "Pizza Margherita",
    ingredientes: "Molho de tomate e muçarela",
    preco: 10,
    nomeFoto: "pizzas/margherita.jpg",
    esgotada: false,
  },
  {
    nome: "Pizza Spinaci (Espinafre)",
    ingredientes: "Molho de tomate, muçarela, espinafre e queijo ricota",
    preco: 12,
    nomeFoto: "pizzas/spinaci.jpg",
    esgotada: false,
  },
  {
    nome: "Pizza Funghi (Cogumelos)",
    ingredientes: "Molho de tomate, muçarela, cogumelos e cebola",
    preco: 12,
    nomeFoto: "pizzas/funghi.jpg",
    esgotada: false,
  },
  {
    nome: "Pizza Salamino (Pepperoni)",
    ingredientes: "Molho de tomate, muçarela e pepperoni",
    preco: 15,
    nomeFoto: "pizzas/salamino.jpg",
    esgotada: true,
  },
  {
    nome: "Pizza Prosciutto (Presunto Cru)",
    ingredientes: "Molho de tomate, muçarela, presunto cru, rúcula e burrata",
    preco: 18,
    nomeFoto: "pizzas/prosciutto.jpg",
    esgotada: false,
  },
];

export default function App() {
  return (
    <div className="container-geral">
      <Cabecalho />
      <Cardapio />
      <Rodape />
    </div>
  );
}

function Cabecalho() {
  return (
    <header className="cabecalho">
      <h1 className="titulo-cabecalho">Pizzaria React Express Co.</h1>
    </header>
  );
}

function Cardapio() {
  const pizzas = dadosPizzas;
  const quantidadePizzas = pizzas.length;

  return (
    <main className="cardapio">
      <h2 className="titulo-cardapio">Nosso Cardápio</h2>

      {quantidadePizzas > 0 ? (
        <ul className="lista-pizzas">
          {pizzas.map((pizza) => (
            <ItemPizza // Renomeado para ItemPizza para clareza
              key={pizza.nome}
              nome={pizza.nome}
              ingredientes={pizza.ingredientes} // Corrigido para 'ingredientes' (plural)
              nomeFoto={pizza.nomeFoto}
              preco={pizza.preco}
              esgotada={pizza.esgotada}
            />
          ))}
        </ul>
      ) : (
        <p>Nenhuma pizza disponível no momento. Por favor, volte mais tarde!</p>
      )}
    </main>
  );
}

// Renomeado para ItemPizza para evitar conflito com o nome do arquivo/conceito geral
function ItemPizza(props) {
  // console.log(props); // Mantido para depuração, se necessário

  // Se a pizza estiver esgotada, não renderiza nada
  if (props.esgotada) return null;

  return (
    <li className="item-pizza">
      <img className="imagem-pizza" src={props.nomeFoto} alt={props.nome} />
      <div>
        <h3>{props.nome}</h3>
        <p>{props.ingredientes}</p>
        <span>R$ {props.preco.toFixed(2)}</span> {/* Exibindo o preço formatado */}
      </div>
    </li>
  );
}

function Rodape() {
  const horaAtual = new Date().getHours();
  const horarioAbertura = 18;
  const horarioFechamento = 23;
  const estaAberto = horaAtual >= horarioAbertura && horaAtual < horarioFechamento; // Ajustado para < horarioFechamento
  // console.log(estaAberto); // Mantido para depuração, se necessário

  return (
    <footer className="rodape">
      {estaAberto ? (
        <InformacaoPedido horarioFechamento={horarioFechamento} />
      ) : (
        <p>
          Estamos fechados no momento. Nosso horário de funcionamento é das{" "}
          {horarioAbertura}:00 às {horarioFechamento}:00.
        </p>
      )}
    </footer>
  );
}

// Renomeado para InformacaoPedido
function InformacaoPedido(props) {
  return (
    <div className="area-pedido">
      <p>
        Estamos abertos até às {props.horarioFechamento}:00. Venha nos visitar ou faça já
        o seu pedido online!
      </p>
      <button className="botao-pedido">Fazer Pedido</button>
    </div>
  );
}