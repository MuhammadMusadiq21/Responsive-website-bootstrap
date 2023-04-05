import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Company from './Components/Company';
import Cards from './Components/Cards';
import Investment from './Components/Investment';
import New from './Components/New';
import Table from './Table';
import Righttext from './Righttext';
import Patners from './Components/Patners';
import Office from './Components/Office';
import Form from './Components/Form';
import Footer2 from './Components/Footer2';
import SecondLast from './Components/SecondLast';
import Footer from './Components/Footer';
import SideIcon from './Components/SideIcon';

function App() {
  return (
    <div className="App">

     <Navbar/> 
     <Hero/> 
     <SideIcon/>
   <Company/>
    <Cards/>
     <Investment/>
      <New/>
      <Table/>
      <Righttext/>
      <Patners/>
      <Office/>
      <Form/>
      <Footer2/>
      <SecondLast/>
      <Footer/>

    </div>
  );
}

export default App;
