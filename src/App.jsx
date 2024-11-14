import Bellow from './Bellow';
import items from './assets/items.json';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen my-10">
      <Bellow data={items} filterKeyword="" isOpen={false} underline={true} showWordCount onClick={(value) => console.log(value)} />
    </div>
  );
}

export default App;
