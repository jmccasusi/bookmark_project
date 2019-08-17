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
                <div className="row">
                    <div className="col">
                        <li><a href={this.props.bookmark.url}>{this.props.bookmark.title}</a></li>
                    </div>
                    <div className="col">
                    { 
                        !this.state.isDisplayed ? <button className="btn btn-danger" onClick={() => this.props.deleteBookmark(this.props.bookmark._id)}>X</button> : null
                    }
                    </div>
                    <div className="col">
                    {
                        this.state.isDisplayed ? <button className="btn btn-danger" onClick={() => this.toggleEditForm(this.props.bookmark)}>CANCEL</button> : <button className="btn btn-warning" onClick={() => this.toggleEditForm(this.props.bookmark)}>EDIT</button>
                    }
                    </div>
                </div>
                {renderForm}
                <hr/>
                </div>
            </div>
        )
    }
}

export default BookmarkComponent;