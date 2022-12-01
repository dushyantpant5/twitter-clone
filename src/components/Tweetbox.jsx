import React,{useState} from 'react'
import { Button ,Avatar} from '@mui/material';
import '../styles/Tweetbox.css'
import db from '../firebase'

function Tweetbox() {
  
  const [TweetMessage,setTweetMessage] = useState("");
  const [TweetImageUrl,setTweetImageUrl] = useState("");
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    //Submit the data to firebase-database
    db.collection('posts').add({
      avatar : "https://i.imgur.com/kKlpVlg.jpg",
      displayName: "Dushyant Pant",
      userName:"dushy_dushyant",
      verified:true,
      text:TweetMessage,
      image:TweetImageUrl
    })
    
    setTweetMessage("");
    setTweetImageUrl("");

  }

  return (
    <div className='tweetBox' >
        <form>
         <div className="tweetBox__input">
            <Avatar src= "https://i.imgur.com/kKlpVlg.jpg"/>
            <input type="text" value={TweetMessage} placeholder="What's happening?" onChange={(e)=> setTweetMessage(e.target.value) } />
         </div>
         <input className='tweetBox__imageInput' value={TweetImageUrl} type="text" placeholder='Optional:Image URL' onChange={(e)=> setTweetImageUrl(e.target.value)} />
         <Button onClick={handleSubmit} className='tweetBox__tweetButton' >Tweet</Button>
        </form>
    </div>
  )
}

export default Tweetbox