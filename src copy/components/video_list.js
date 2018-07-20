import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => { 
   var videoItem = props.videos.map((video)=>{
        return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video}/> //key c 'est pour la ref de la map
    })

    return(
        <div>
            <ul className='col-md-4 list-group '>
                {videoItem}
            </ul>
        </div>
    )
}



export default VideoList

