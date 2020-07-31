import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './pages/Navigation';
import { BrowserRouter } from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container-fluid" >
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;