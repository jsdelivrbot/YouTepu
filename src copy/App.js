import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; //when importing, write absolute path
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY ='AIzaSyC28Uhczwqq7odVJARMggWIuEmU2RSF71Q'



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos : [],
            selectedVideo : null,
        }
        this.videoSearch('indoor-robotics')
     
            //when key and its value have the same name, it is the ES6 way to write  this.setState({videos : videos})
    }
    
    videoSearch(term){
        YTSearch({
            key : API_KEY,
            term : term},
            (videos) => {  //on pourrait ecrire tepu mais on fait expres de dire que le nom de la key sera le meme que le nom de la key value
                this.setState({
                    videos : videos,
                    selectedVideo : videos[0]
                })
            })
    }


    render(){
        const videoSearch = _.debounce((term)=> {this.videoSearch(term)}, 300)
        return(
        <div>
            <h1 className='title'>YouPuteuuuh</h1>
            <SearchBar onSearchTermChange={ videoSearch}/>
            
            {/*App is the parent of VideoList We need to pass some data from the parent to the child */}
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList videos={this.state.videos} onVideoSelect={selectedVideo=>this.setState({selectedVideo})}/>  {/*dans le fichier video_list, videos devient une props */}
            {/*were passing prop videos to VideoList */}
            
        </div>
        )
    }
} 



export default App