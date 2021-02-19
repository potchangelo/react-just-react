import React from 'react';
import './App.css';
import LoginArea from './LoginArea';

const fakeUser = { username: 'nice789', fullname: 'เต้า หมิงซื่อ' };

const AuthContext = React.createContext();

function App() {
    return (
        <AuthContext.Provider value={fakeUser}>
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
