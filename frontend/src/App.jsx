
import './App.css'
import Categories from './components/Categories'
import Discount from './components/Dicount'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import TopProducts from './components/TopProducts'
import TopProductsCard from './components/TopProductsCard'

function App() {


  return (
   <div className=' font-Roboto'>
      <Header />
      <Hero />
      <Categories />
      <TopProducts />
      <Discount />
      <Footer />
   </div>
  )
}

export default App
