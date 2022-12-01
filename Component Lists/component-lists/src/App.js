import {useState} from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  return (
    <>

    <ul>
      { items.map(item => {
        return (
          <li key={item}>{item}</li>
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
