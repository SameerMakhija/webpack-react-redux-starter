import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from '../styles/footer.scss';
import Routes from '../routes';

const App = () => {
    return (
        <div>
            <h1>My App</h1>
            { Routes }
            <footer>
                <Link to="/" />
                <Link to="/about" />
            </footer>
        </div>
    );
};

export default App;

