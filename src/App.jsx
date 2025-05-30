import React from "react";

// Apenas nomes e ingredientes das pizzas traduzidos
const pizzaData = [
  {
    name: "Focaccia", // Nome próprio, mantido
    ingredients: "Pão com azeite de oliva italiano e alecrim", // Traduzido
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita", // Nome próprio, mantido
    ingredients: "Molho de tomate e muçarela", // Traduzido
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci (Espinafre)", // Nome original com tradução para clareza
    ingredients: "Molho de tomate, muçarela, espinafre e queijo ricota", // Traduzido
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi (Cogumelos)", // Nome original com tradução para clareza
    ingredients: "Molho de tomate, muçarela, cogumelos e cebola", // Traduzido
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino (Pepperoni)", // Nome original com tradução para clareza
    ingredients: "Molho de tomate, muçarela e pepperoni", // Traduzido
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto (Presunto Cru)", // Nome original com tradução para clareza
    ingredients: "Molho de tomate, muçarela, presunto cru, rúcula e queijo burrata", // Traduzido
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container"> {/* CSS Class original */}
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header> {/* Tag original */}
      <h1 className="header-title">Pizzaria React Express Co.</h1> {/* Texto traduzido, CSS Class original */}
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData; // Variável original
  // const pizzas = [];
  const numbPizzas = pizzas.length; // Variável original

  return (
    <main className="menu"> {/* CSS Class original */}
      <h2 className="menu-title">Nosso Cardápio</h2> {/* Texto traduzido, CSS Class original */}

      {numbPizzas > 0 ? (
        <ul className="pizzas"> {/* CSS Class original */}
          {pizzas.map((pizza) => (
            <Pizza // Componente original
              key={pizza.name}
              name={pizza.name}
              ingredient={pizza.ingredients} // Prop 'ingredient' como no original
              photoName={pizza.photoName}
              price={pizza.price}
              soldOut={pizza.soldOut}
            />
          ))}
        </ul>
      ) : (
        <p>Nenhuma pizza disponível no momento.</p> // Texto já estava em PT
      )}
      {/* <Pizza name = "Pizza Funghi" ingredient = "Tomato, mushrooms" price = {12} photo = 'src/assets/pizzas/funghi.jpg'  /> */}
    </main>
  );
}

function Pizza(props) { // Componente original com props originais
  // console.log(props);

  if (props.soldOut) return null;

  return (
    <li className="pizza"> {/* CSS Class original */}
      <img className="img" src={props.photoName} alt={props.name} /> {/* CSS Class original, alt usa o nome da pizza (pode estar traduzido de pizzaData) */}
      <div>
        <h2>{props.name}</h2>
        <p>{props.ingredient}</p>
        <span>R$ {(props.price + 0).toFixed(2)}</span> {/* Mantendo a lógica original (somar 0 para garantir número e formatar), mas pode ser só props.price.toFixed(2) */}
      </div>
    </li>
  );
}

function Footer() { // Componente original
  const hour = new Date().getHours(); // Variável original
  const openHour = 18; // Variável original
  const closeHour = 23; // Variável original
  const isOpen = hour >= openHour && hour < closeHour; // Variável e lógica original (ajustado para < closeHour)
  // console.log(isOpen);

  // if (hour >= openHour && hour  <= closeHour) {
  //   alert("A pizzaria está aberta")
  // } else {
  //   alert("A pizza está fechada no momento")
  // }

  return (
    <footer className="footer"> {/* CSS Class original */}
      {isOpen ? (
        <Order closeHour={closeHour} /> // Componente original, prop original
      ) : (
        <p>Estamos fechados no momento. Nosso horário de funcionamento é das {openHour}:00 às {closeHour}:00.</p> // Texto ajustado para PT
      )}
    </footer>
  );
}

function Order(props) { // Componente original com props originais
  return (
    <div className="order"> {/* CSS Class original */}
      <p>
        Estamos abertos até às {props.closeHour}:00. Venha nos visitar ou faça já o
        seu pedido!
      </p> {/* Texto já estava em PT */}
      <button className="btn">Fazer Pedido</button> {/* Texto do botão traduzido, CSS Class original */}
    </div>
  );
}