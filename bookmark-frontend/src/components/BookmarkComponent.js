import React from 'react';
import EditFormComponent from './EditFormComponent';

class BookmarkComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayed: false,
            bookmark: {}
        }
        this.toggleEditForm = this.toggleEditForm.bind(this);
    }

    toggleEditForm(bookmark) {
        if(this.state.isDisplayed === false){
            this.setState({
                isDisplayed: true,
                bookmark: bookmark
            })
        } else {
            this.setState({
                isDisplayed: false,
                bookmark: bookmark
             })
        }
    }

    render() {
        const renderForm = this.state.isDisplayed ?  <EditFormComponent bookmark={this.state.bookmark} updateBookmark={this.props.updateBookmark} baseURL={this.props.baseURL} toggleEditForm={this.toggleEditForm}/> : null

        return(
            <div key={this.props.bookmark._id}>
                <div>
                <div className="d-flex justify-content-between">
                    <div>
                        <h3><span className="badge"><a className="text-white App-titillium-font" href={this.props.bookmark.url}>{this.props.bookmark.title}</a></span></h3>
                    </div>
                    <div>
                        { 
                            this.state.isDisplayed ? <button className="btn btn-danger text-light" onClick={() => this.props.deleteBookmark(this.props.bookmark._id)}><span>🗑️ Delete Bookmark</span></button> : null
                        }
                        {
                            this.state.isDisplayed ? <button className="btn btn-secondary ml-2" onClick={() => this.toggleEditForm(this.props.bookmark)}>X</button> : <button className="badge badge-primary" onClick={() => this.toggleEditForm(this.props.bookmark)}> . . .</button>
                        }
                    </div>
                </div>
                {renderForm}
                </div>
            </div>
        )
    }
}

export default BookmarkComponent;