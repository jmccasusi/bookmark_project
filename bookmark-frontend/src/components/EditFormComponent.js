import React from 'react';
import axios from 'axios';

class EditFormComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            url: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    async handleUpdate(event) {
        event.preventDefault()
        const newValueBookmark = {
            _id: this.props.bookmark._id,
            title: this.state.title,
            url: this.state.url
        }
        await axios.put(`${this.props.baseURL}/bookmark/${this.props.bookmark._id}`, newValueBookmark);
        this.props.toggleEditForm(newValueBookmark);
        this.props.updateBookmark(newValueBookmark);
    }

    handleChange(event) {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }

    componentDidMount() {
        this.setState({
            title: this.props.bookmark.title,
            url: this.props.bookmark.url
        })
    }

    render() {
        return(
            <div className="text-dark bg-white border rounded col-12 mx-auto py-4">
                <form onSubmit={this.handleUpdate}>
                <div className="form-group row d-flex justify-content-center">
                    <div className="col-lg-6 py-2 App-titillium-font">
                        <label for="title">Title</label>
                        <input onChange={this.handleChange} className="form-control col" type="text" id="title" value={this.state.title} name="title" placeholder="website"/>
                    </div>
                    <div className="col-lg-6 py-2 App-titillium-font">
                        <label for="url">URL</label>
                        <input onChange={this.handleChange} className="form-control col" type="text" id="url" name="url" value={this.state.url} placeholder="http://"/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center px-2">
                    <input type="submit"  className="btn btn-success btn-block mx-auto" value="Save"/>
                </div>
                </form>
            </div>
        )
    }
}

export default EditFormComponent;