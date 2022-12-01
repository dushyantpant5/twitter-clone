import React,{useState,useEffect} from 'react'
import "../styles/Feed.css"
import Tweetbox from './Tweetbox'
import Post from './Post'
import db from '../firebase'

function Feed() {
  
  const [Posts,setPosts] = useState([]);

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  },[]);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);

  return (
    <div className='feed' >
       <div className="feed__header">
        <h2>Home</h2>
       </div>

       {/* TweetBox */}
        <Tweetbox/>

        {Posts.map(post =>(
          <Post 
          avatar = {post.avatar}
          displayName = {post.displayName}
          userName = {post.userName}
          verified = {post.verified}
          text = {post.text}
          image = {post.image}
          />
        ))}

    </div>
  )
}

export default Feed