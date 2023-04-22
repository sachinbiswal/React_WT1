import logo from './logo.svg';
// import './App.css';
import Navbar from './Component/Navbar';
import Bussiness from './Component/Bussiness';
import Features from './Component/Features';
import Featurehead from './Component/Featurehead';
import Featurespara from './Component/Featurespara';
import Winning from './Component/Winning';
import Footer from './Component/Footer';

function App() {
  return (
    <div style = {{marginLeft : "20%",width : "800px",height : "100%",border : "2px solid black",margin : "10px",padding : "10px",dispaly :"flex",justifyContent :"center",alignItems : "center"}}>
      <Navbar />
      <Bussiness />
      <Features />
      <Featurehead />
      <Featurespara />
      <Winning />
      <Footer />
      
    </div>
  );
}

export default App;