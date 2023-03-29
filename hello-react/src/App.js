import './App.css';
import menuTop from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import logo from './images/ironhack-logo-xs.png'

function App() {
  return (
    <div className="App"> 
    <div className = "main">
      <nav>
        <img src = {logo} alt = "logo" />
        <img src = {menuTop} alt = "menu top" />
      </nav>      
      <h1>Say hello to React JS</h1>
      <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
      <button>Awesome!</button>
    </div>
    <div className = "content">
      <img src={icon1} alt="icon1"/>
      <h2>Declarative</h2>
      <p>React makes it painless to create interactive UIs</p>
      <img src={icon2} alt="icon1"/>
      <h2>Components</h2>
      <p>Build encapsulated components that manage theis state</p>
      <img src={icon3} alt="icon1"/>
      <h2>Single-Way</h2>
      <p>A set of immutable values are passed to the component's.</p>
      <img src={icon4} alt="icon1"/>
      <h2>JSX</h2>
      <p>Statiscally-typed, designed to run on modern browsers.</p>
    </div>




    </div>
    

  );
}

export default App;
