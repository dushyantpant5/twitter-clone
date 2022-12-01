import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="app">
     {/* sidebar */}
     <Sidebar/>
     {/* feed */}
     <Feed/>
     {/* widgets */}
     <Widgets/>
    </div>
  );
}

export default App;
