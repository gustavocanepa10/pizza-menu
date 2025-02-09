import React from "react";


const pizzaData = [
  {
    // Pizza
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  // Pizza
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  // Pizza
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  // Pizza
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  // Pizza
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  // Pizza
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <Footer/>
      
    </div>
  );
}

function Header() {
  
  return <header>
    <h1 className="header-title">Fast React Pizza Co.</h1>
    </header> 

}

function Menu () {
  const pizzas = pizzaData
  // const pizzas = [];
  const numbPizzas = pizzas.length


  return (
    <main className="menu">
      <h2 className="menu-title">Our menu</h2>

      {numbPizzas > 0 ? (
    <ul className="pizzas">
    {pizzas.map((pizza) => (
      <Pizza
        key={pizza.name}
        name={pizza.name}
        ingredient={pizza.ingredients}
        photoName={pizza.photoName}
        price={pizza.price}
        soldOut={pizza.soldOut}
        
      />
    ))}
  </ul>
) : (
  <p>Nenhuma pizza disponível no momento.</p>
)}

      
      
      
      



      {/* <Pizza name = "Pizza Funghi" ingredient = "Tomato, mushrooms" price = {12} photo = 'src/assets/pizzas/funghi.jpg'   /> */}




      </main>
  )

}

function Pizza(props) {
  console.log(props)

  if (props.soldOut) return null;




  return (
    <li className="pizza">
      <img className="img" src={props.photoName} alt={props.name} />
      <div>
      <h2>{props.name}</h2>
      <p>{props.ingredient}</p>
      
      
      <span>{props.price + 3}</span>
      </div>
      
    </li>
  )
}


function Footer() {
  const hour = new Date().getHours()
  const openHour  = 18
  const closeHour = 23
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  

  // if (hour >= openHour && hour  <= closeHour) {
  //   alert("A pizzaria está aberta")
  
  // } else {
  //   alert("A pizza está fechada no momento")
  // }
  

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour =  {closeHour}  />
       
      ) : (
        <p>Estamos fechados no momento. Venha nos visitar outra hora</p>
      )}
    </footer>
  );

}  


function Order(props) {
  return <div className="order">
  <p>Estamos abertos até {props.closeHour}:00, venha nos visitar ou faça já o seu pedido!</p>
  <button className="btn">Order</button>
</div>
}


