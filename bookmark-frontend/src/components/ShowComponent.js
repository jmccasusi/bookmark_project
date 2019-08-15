import React from 'react';
import BookmarkComponent from './BookmarkComponent';
import EditFormComponent from './EditFormComponent';

class ShowComponent extends React.Component {
    render() {
        return(
            <div>
                This is the show component.
                <div>
                    <BookmarkComponent/>
                    <EditFormComponent/>
                </div>
            </div>
        )
    }
}

export default ShowComponent;