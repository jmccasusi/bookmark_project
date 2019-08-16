import React from 'react';

class BookmarkComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteButtonStyle: {

            }
        }
        this.deleteButtonHover = this.deleteButtonHover.bind(this);
        this.deleteButtonNotHover = this.deleteButtonNotHover.bind(this);
    }

    deleteButtonHover(event) {
        // console.log(event.currentTarget)
        event.currentTarget.style = "background-color:white; color: red"
    }

    deleteButtonNotHover(event) {
        // console.log(event.currentTarget)
        event.currentTarget.style = "background-color:red; color: white"
    }

    render() {
        return(
            <div>
                {this.props.bookmarks.map((bookmark)=> {
                    return(
                        <div key={bookmark._id} class="row">
                            <div class="col">
                                <li><a href={bookmark.url}>{bookmark.title}</a></li>
                            </div>
                            <div class="col">
                            <button class="btn btn-danger" onClick={() => this.props.deleteBookmark(bookmark._id)} onMouseOver={this.deleteButtonHover} onMouseOut={this.deleteButtonNotHover}>X</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BookmarkComponent;