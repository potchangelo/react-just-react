import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LayoutPage from "./LayoutPage";

function PageHome() {
    const [postArray, setPostArray] = useState([]);

    async function getPostArray() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const responseJson = await response.json();
        setPostArray(responseJson);
    }

    useEffect(() => {
        getPostArray();
    }, []);

    const postElements = postArray.map(post => {
        return (
            <div key={post.id}>
                <h4>
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h4>
                <hr />
            </div>
        )
    });

    return (
        <LayoutPage>
            <h2>Home หน้าแรกของหมู่เฮา</h2>
            {postElements}
        </LayoutPage>
    );
}

export default PageHome;