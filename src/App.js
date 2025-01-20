import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Body from './components/Body';
import UserProfile from './components/UserProfile';
import Car from './components/Car';
import Product from './components/Product';
function App() {
  const user = 'shubh';
  const data = {
    firstName: 'Shreyansh', // Changed to match the props expected by UserProfile
    lastName: 'Kumar',      // Added a lastName
    age: 21,
    occupation: 'Software Developer' // Optional, can be removed if not used
  };

  return (
    <>
      <Navbar />
      <Product name="Lenovo" price={999.99} isAvailable={true} />

      <Content />
      <Header />
      <Body name={user} />
      <UserProfile 
        firstName={data.firstName} 
        lastName={data.lastName} 
        age={data.age} 
      />
      <Car brand="Honda" />
      <Car/>
      <Footer />
    </>
  );
}

export default App;
