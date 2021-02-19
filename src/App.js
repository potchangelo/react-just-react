import React, { useState } from 'react';
import './App.css';
import LoginArea from './LoginArea';

const AuthContext = React.createContext();

function App() {
    const [auth, setAuth] = useState(null);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            <section className="app-section">
                <div className="app-container">
                    <LoginArea />
                </div>
            </section>
        </AuthContext.Provider>
    );
}

export { AuthContext };
export default App;
