import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Projects currentCategory={currentCategory}></Projects>
            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;
