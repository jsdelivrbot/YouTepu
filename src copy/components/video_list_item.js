import React from 'react'

 const VideoListItem = ({ video, onVideoSelect }) => { //we can pass several props as argument like this (ES6)
    const imageUrl = video.snippet.thumbnails.default.url  

    return (
        <div>
            <li onClick={()=> onVideoSelect(video)} className='list-group-item'>
                <div className='video-list media'>
                    <div className=' media-left'>
                        <img className='media-object'src = {imageUrl}/>
                    </div>

                    <div className=' media-body'>
                    {video.snippet.title}
                    </div>
                </div>
            </li>
        </div>
    )
}

export default VideoListItem