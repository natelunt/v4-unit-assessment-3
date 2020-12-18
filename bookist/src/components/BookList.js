import React, {Component} from 'react'



class BookList extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){

        

        
        return (
            <div className="BookList">
                <h1>myBooks: {this.props.books}</h1>
            </div>
        )
    }
}






export default BookList