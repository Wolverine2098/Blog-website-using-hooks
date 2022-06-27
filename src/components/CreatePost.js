// import { useState } from "react/cjs/react.production.min";
import react from "react";
import {firestore} from '../firebase';
import { useState } from "react" 
function CreatePost() {
  const [title,setTitle] = useState('');
  const [subTitle,setSubTitle] = useState('');
  const [content,setContent] = useState('');

function handleSubmit(e){
  e.preventDefault();
  console.log('title',title);
  console.log('Subtitle',subTitle);
  console.log('content',content);

firestore.collection('posts').add({
title,
content,
subTitle,


});createdAt; new Date();
}

  return <div className="create-post">
    <h1>Create post</h1>
    <form onSubmit= {handleSubmit}>

      <div className ="form-field">
        <label>Title</label>
        <input value={title} onChange={ (e) => setTitle(e.target.value)}/>
</div>

        <div className ="form-field">
        <label>Subtitle</label>
        <input value={subTitle} onChange={ (e) => setSubTitle(e.target.value)}/>
        </div>


        <div className ="form-field">
        <label>Content</label>
        <textarea value={content} onChange={(e)=>setContent(e.target.value)}></textarea>

      </div>
      <button className = "create-post-btn">Create Post</button>
    </form>

    </div>
}

export default CreatePost;
