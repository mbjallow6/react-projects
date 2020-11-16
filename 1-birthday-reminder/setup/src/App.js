import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
 const [data1, setPeople] = useState(data);
  return (
    <main>
      <section className = 'container'>
        <h3> {data1.length } Birthdays today</h3>
        <List people={data1}/>
        <button onClick={()=>setPeople([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
