import React from 'react';
import {data} from "./data.js";
import Place from "./components/Place.jsx";
function App() {
  return <>
    <header>
          <h1>I did it by myself</h1>
          <p>it's just the beginning</p>
    </header>
        <main>
          <section className="places-category">
            <ul className="places">
              {data.map((place, index) => (
                <Place key={index} into={place} />
              ))}
            </ul>
          </section>
        </main>
        </>;
}

export default App;
