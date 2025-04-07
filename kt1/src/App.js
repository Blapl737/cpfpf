import Header from "./components/Header/Header"
import OfferSection from "./components/OfferSection/OfferSection"
import DescriptionSection from "./components/DescriptionSection/DescriptionSection"
import ServiceSection from "./components/ServiceSection/ServiceSection"
import RentalSection from "./components/RentalSection/RentalSection"

function App(){

  return (
    <div className="App">
      <Header/>
      <OfferSection/>
      <DescriptionSection/>
      <ServiceSection/>
      <RentalSection/>
    </div>
  )
}

export default App
