import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
     {/* sidebar */}
     <Sidebar/>
     {/* feed */}
     <Feed/>
     {/* widgets */}
    </div>
  );
}

export default App;
