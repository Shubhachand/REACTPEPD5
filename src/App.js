import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Callback from './components/Callback';

import UserProfile from './components/UserProfile';
import Car from './components/Car';
import Product from './components/Product';
import Destructuring from './components/Destructuring';
import HooksExample from './components/HooksExample';
function App() {
  const data = {
    firstName: 'Shreyansh', // Changed to match the props expected by UserProfile
    lastName: 'Kumar',      // Added a lastName
    age: 21,
    occupation: 'Software Developer' // Optional, can be removed if not used
  };

  return (
    <>
     <HooksExample />  {/* Added a new component */}
      <Navbar />
      <Callback />
      <Product name="Lenovo" price={999.99} isAvailable={true} />

      <Content />
      <Destructuring/>
      <Header />
     
      <UserProfile 
        firstName={data.firstName} 
        lastName={data.lastName} 
        age={data.age} 
      />
      <Car brand="Honda"/>
      <Car/>
      <Footer />
    </>
  );
}

export default App;
