import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './style';
import { ToastProvider } from 'react-toast-notifications';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, SignIn, Register, Dashboard, Homepage, Coinpage } from "./components";
import Layout from "./components/Layout";


const App = () => {
  return (
    <Router>
      <ToastProvider>
      <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="/" element={<Home />} />
      <Route path='/' component={Homepage} exact />
      <Route path="/coins/:id" element={<Layout><Coinpage /></Layout>} />
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
