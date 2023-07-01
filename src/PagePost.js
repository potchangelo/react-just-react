import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LayoutPage from './LayoutPage';

function PagePost() {
  const [post, setPost] = useState({});
  const [commentArray, setCommentArray] = useState([]);

  const { postId } = useParams();

  async function getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const responseJson = await response.json();
    setPost(responseJson);
  }

  async function getCommentArray(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const responseJson = await response.json();
    setCommentArray(responseJson);
  }

  useEffect(() => {
    getPost(postId);
    getCommentArray(postId);
  }, [postId]);

  const commentElements = commentArray.map(comment => {
    return (
      <div key={comment.id}>
        <p>{comment.body}</p>
        <p>{comment.email}</p>
        <hr />
      </div>
    );
  });

  return (
    <LayoutPage>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <hr />
      <h4>{commentArray.length} Comments</h4>
      {commentElements}
    </LayoutPage>
  );
}

export default PagePost;
