// import Customers from './pages/Customers'
// import TeamSection from './pages/Team'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

import Services from './pages/Services'
import Body from './pages/Body'
import Navbar from './Navbar'
import Testimonials from './pages/Testimonials'
import ImpactNumbers from './pages/ImpactNumber'


function Layout() {
  return (
    <div className="font-open-sans">
      <Navbar />

      <Body />

      <Services />

      
      <Testimonials />
      <ImpactNumbers  />
      

      <Contact />

      <Footer />
    </div>
  )
}

export default Layout
