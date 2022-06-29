import {useState,useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';


const BlogHeading = styled.h1`


text-align: center;
  color: #2196f3;
  margin-bottom: 2px;

 

`;

const Post = styled.div`


border: 1px solid #e1e1e1;
padding: 10px 10px;
border-radius: 5px;
margin-top: 10px;

a{
  text-decoration: none;
}

&:hover{
  border: 1px solid #2196f3;
  
}

`;

const PostSubTitle = styled.p`
font-size: 13px;
`


function Home() {
  const [posts,setPosts] = useState([]);


  useEffect(()=>{
firestore
.collection('posts')
.get()
.then((snapshot)=>{
  const posts = snapshot.docs.map((doc)=> {
    return{
      id:doc.id,
      ...doc.data()
    };
  });
  console.log('posts',posts);
  setPosts(posts);
});
  },[]);
  return (<div className="home">
    <BlogHeading>Tech Blog</BlogHeading>
     <div id="blog-by">Raunak</div>
     {
       posts.map((post,index)=>(
         <Post className="post" key={`post-${index}`}>
<Link to ={`/post/${post.id}`}>
<h3>{post.title}</h3>
  
</Link>

<PostSubTitle>{post.subTitle}</PostSubTitle>
           </Post>
       ))
     }
  
  </div>
);

}

export default Home;
