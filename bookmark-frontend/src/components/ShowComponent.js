import React from 'react';
import BookmarkComponent from './BookmarkComponent';

class ShowComponent extends React.Component {
    render() {
        return(
            <div>
                    {this.props.bookmarks.map((bookmark, index)=> {
                        return(
                            <div key={bookmark._id}>
                                <BookmarkComponent bookmark={bookmark} updateBookmark={this.props.updateBookmark} deleteBookmark={this.props.deleteBookmark} baseURL={this.props.baseURL}/>
                            </div>
                            )
                    })}
            </div>
        )
    }
}

export default ShowComponent;