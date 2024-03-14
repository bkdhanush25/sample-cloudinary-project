// import { a,  } from 'react-router-dom';
import './App.css';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="App"> 
      <h1>Upload files using Cloudinary Service in MERN stack Project</h1>
      <a href="/">Home</a>|<a href="/upload">Upload</a>|<a href="/secure-upload">Secure Upload</a>
      <br/><br/>
      <AppRouter/>
    </div>
  );
}

export default App;
