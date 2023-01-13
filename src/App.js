import Blog from './components/Blogs';
import { Provider } from "react-redux";
import store from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddBlog from './components/AddBlog';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='/add' element={<AddBlog />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
