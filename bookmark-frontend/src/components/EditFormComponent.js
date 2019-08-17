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
            <div>
                <form onSubmit={this.handleUpdate}>
                <div className="form-group row">
                    <input onChange={this.handleChange} className="form-control col" type="text" value={this.state.title} name="title" placeholder="website"/>
                    <input onChange={this.handleChange} className="form-control col" type="text" name="url" value={this.state.url} placeholder="http://"/>
                    <input type="submit"  className="btn btn-success" value="Save"/>
                </div>
                </form>
            </div>
        )
    }
}

export default EditFormComponent;