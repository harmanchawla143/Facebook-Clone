import React,{useState} from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from './StateProvider'
import db from './firebase'
import firebase from 'firebase'

function MessageSender() {
    const[{user},dispatch] = useStateValue();
    const[Input,setInput] = useState('')
    const[ImgUrl,setImgUrl] = useState('')

    const handleSubmit = e => {
        var tru = document.getElementById('int').value;
        e.preventDefault();
        if(tru === ""){
            alert("Hey,Please Type Somthing");
            return false;
        }else{
        db.collection('Posts').add({
            message: Input,
            timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
            profilePic: user.photoURL,
            username: user.displayName,
            image: ImgUrl, 
        });
        setInput('');
        setImgUrl('');
    }
}
    return (
        <div className="messageSender">
            <div className="messageSender__top">
            <Avatar src={user.photoURL}/>
                <form>
                    <input id="int" placeholder={`What's Up, ${user.displayName}`} className="messageSender__input" value={Input} onChange={(e) => setInput(e.target.value)} required="true"/>
                    <input placeholder="image URL (Optional)" value={ImgUrl} onChange={(e) => setImgUrl(e.target.value)}/>
                    <button type='submit' className="sub_but" onClick={handleSubmit}>Post</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: `red`}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: `green`}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: `orange`}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
