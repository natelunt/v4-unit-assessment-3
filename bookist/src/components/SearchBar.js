import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(){
        super()
        this.state = {}
    }

    handleChange(filter){
        this.setState({ filterTitles: filter })
    }

    handleClick(search){
        this.setState({ searchTitles: search })
    }

    handleClear(clear){
        this.setState({ clearSearch: clear })
    }

    render() {
        return (
            <div className="SearchBar">
                <p>This is my search bar</p>
            </div>
        )
    }
}






export default SearchBar