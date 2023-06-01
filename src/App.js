import { useState } from 'react';
import Header from "./components/header.tsx";
import SubpageSlot from "./components/subpageslot.tsx"
import './App.css';

function App() {
  const [selectedSubpage, setSelectedSubpage] = useState(0);

  return (
    <div>
      <Header
        selectedSubpage={selectedSubpage}
        setSelectedSubpage={setSelectedSubpage}
      />
      <SubpageSlot selectedSubpage={selectedSubpage} />
    </div>
  )
}

export default App;
