import Header from './components/header';
import Navigator from './components/navigator';
import Principal from './components/principal';
import Footer from './components/footer';
import './styles.css';


const App = ()=>{
  return(
    <div classname="app">
      <Header/>
      <Navigator/>
      <Principal/>
      <Footer/>
    </div>
  )
}
export default App;
