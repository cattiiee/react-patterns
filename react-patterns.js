// useState hook
const [value, setValue] = useState(initial);

// List rendering + keys
<ul>
  {items.map(item => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>

// Toggle boolean in array
setItems(i =>
  i.map(x =>
    x.id === id ? { ...x, checked: !x.checked } : x
  )
);

// localStorage save/load
useEffect(() => {
  const stored = JSON.parse(localStorage.getItem('list') || '[]');
  setItems(stored);
}, []);
useEffect(() => {
  localStorage.setItem('list', JSON.stringify(items));
}, [items]);
