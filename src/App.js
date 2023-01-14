import Blog from './components/Blogs';
import { Provider } from "react-redux";
import store from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddBlog from './components/AddBlog';
import EditBlog from './components/EditBlog';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path='/' element={<Blog />} />
            <Route exact path='/add' element={<AddBlog />} />
            <Route exact path='/edit/:id' element={<EditBlog />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
