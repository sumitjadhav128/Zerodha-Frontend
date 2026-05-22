
import Hero from './Hero';
import Awards from './Awards'
import Stats from './Stats'
import Pricing from './Pricing';
import Education from './Education'
import OpenAccount from '../OpenAccount';

function Homepage() {
    return ( <>
   {/* <Navbar></Navbar> */}
        <Hero></Hero>
        <Awards> </Awards>
        <Stats></Stats>
        <Pricing></Pricing>
        <Education></Education>
        <OpenAccount></OpenAccount>
        {/* <Footer></Footer> */}
        </>
     );
}

export default Homepage;