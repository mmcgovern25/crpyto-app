import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './style';
import { ToastProvider } from 'react-toast-notifications';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, SignIn, Register, Dashboard, Homepage, Coinpage } from "./components";

const App = () => {
  return (
    <Router>
      <ToastProvider>
      <Routes>
        <Route path="/signin" element={<SignIn />} /> {/* Define a route for the SignIn page */}
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Define a route for the Dashboard page */}
        <Route path="/" element={<Home />} />
        <Route path='/' component={Homepage} exact />
        <Route path='/coins/:id' component={Coinpage} />
      </Routes>
      </ToastProvider>
    </Router>
  );
}


// You can define your landing page component here
const Home = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
