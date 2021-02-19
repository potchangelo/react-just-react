import { useContext } from "react";
import { AuthContext } from "./App";

function LoginBox() {
    const auth = useContext(AuthContext);

    if (!!auth) {
        return (
            <div>
                <h3>เข้าสู่ระบบแล้วจ้า</h3>
                <p>Auth username = {auth.username}</p>
                <p>Auth fullname = {auth.fullname}</p>
                <p><button>Log out</button></p>
            </div>
        );
    }

    return (
        <form onSubmit>
            <h3>โปรดเข้าสู่ระบบ</h3>
            <p><input type="text" placeholder="Username" /></p>
            <p><input type="password" placeholder="Password" /></p>
            <p><button type="submit">Log in</button></p>
        </form>
    );
}

export default LoginBox;