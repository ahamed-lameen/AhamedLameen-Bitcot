import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './view/pages/contactPage/contactPage';
import AddContact from './view/pages/addContact/addContact';
import EditContact from './view/pages/editContact/editContact';

function App() {
  return (
    <div className="App">
        <ContactPage />
    </div>
  );
}

export default App;
