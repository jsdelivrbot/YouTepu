import React, {Component} from 'react' //do this for each file that uses JSX.
                            // {component} => import react and pull off the property component as a variable named component

import Input from '@material-ui/core/Input'


    //basic component with ES6 syntax
class SearchBar extends Component  {  
    constructor(props){
        super(props);
        this.state = {term: ''};
    }

  

    render(){
        return(
            <div className='search-bar'>
                <Input className='search-bar-input' value={this.state.term}  placeholder='write search here'
                type='textarea' onChange={(event)=> this.onInputChange(event.target.value) }/> 
                <pre>input value :{this.state.term}</pre>
            </div>
            
        )
    }

    onInputChange(term){
        this.setState({
            term,
        })
        this.props.onSearchTermChange(term)
    }
   
} 

export default SearchBar //each other file where we write searchbar wiill have a reference to this component.