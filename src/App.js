import { Fragment } from 'react';
import NavFooter from './components/NavFooter';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Book from './components/Book';

function App() {
  return (
    <Fragment>
      <nav>
        <NavFooter section={'nav'} />
      </nav>
      <main>
        <Hero />
        <About />
        <Work />
        <Book />
      </main>
      <footer>
        <NavFooter section={'footer'} />
      </footer>
    </Fragment>
  );
}

export default App;
