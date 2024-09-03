import './App.css';
import { Layout } from 'antd';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import { Element } from 'react-scroll';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <Layout>
      <Header />
      <Layout.Content style={{ marginTop: 64 }}>
        <Home />
        <About />
        <Projects />
        {/* <Resume /> */}
        <Contact />
        <Footer />
      </Layout.Content>
    </Layout>
  );
}

export default App;
