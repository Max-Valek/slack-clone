import React, { useEffect, useState } from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import InfoIcon from '@mui/icons-material/Info'
import db from './firebase'
import Message from './Message'

function Chat() {
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState([])
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId).onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
        }

        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())))

    }, [roomId])
    console.log(roomDetails)
    return (
        <div className='chat'>
            <div className='chat__header'>
                <div className='chat__headerLeft'>
                    <h4 className='chat__channelName'>
                        {/* <strong>#{roomDetails?.name}</strong> */}
                        <strong>#general</strong>
                        <StarBorderIcon />
                    </h4>
                </div>
                <div className='chat__headerRight'>
                    <p>
                        <InfoIcon /> Details
                    </p>
                </div>
            </div>
            <div className='chat__messages'>
                {roomMessages.map(({ message, timestamp, user, userImage }) => (
                    <Message
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chat