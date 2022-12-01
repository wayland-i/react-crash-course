import {useState, Fragment} from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  return (
    <>

    <ul>
      { items.map(item => {
        return (
          <Fragment key={item}>
            <li key={item}>{item}</li>
            <li>Test</li>
          </Fragment>
        );
      }) }
    </ul>

    <input 
      type="text"
      value={newItem}
      onChange={(event) => setNewItem(event.target.value)} />

    <button onClick={() => {
      setItems([...items, newItem]);
      setNewItem('');
    }}>
      Add List Item
    </button>
    </>
  );
}

export default App;
