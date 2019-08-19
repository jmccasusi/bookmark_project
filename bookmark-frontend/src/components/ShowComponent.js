import React from 'react';
import BookmarkComponent from './BookmarkComponent';

class ShowComponent extends React.Component {
    render() {
        return(
            <div class="App-custom-container rounded col-md-8 mx-auto py-4">
                    {this.props.bookmarks.map((bookmark, index)=> {
                        return(
                            <div key={bookmark._id}>
                                <BookmarkComponent bookmark={bookmark} updateBookmark={this.props.updateBookmark} deleteBookmark={this.props.deleteBookmark} baseURL={this.props.baseURL}/>
                                {
                                    index < this.props.bookmarks.length-1 ? <hr className="my-2"/> : null
                                }
                            </div>
                            )
                    })}
            </div>
        )
    }
}

export default ShowComponent;