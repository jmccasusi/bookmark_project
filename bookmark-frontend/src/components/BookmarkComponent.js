import React from 'react';

class BookmarkComponent extends React.Component {
    render() {
        return(
            <div>
                {this.props.bookmarks.map((bookmark)=> {
                    return(
                        <li key={bookmark._id}><a href={bookmark.url}>{bookmark.title}</a></li>
                    )
                })}
            </div>
        )
    }
}

export default BookmarkComponent;