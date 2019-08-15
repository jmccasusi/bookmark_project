import React from 'react';
import axios from 'axios';

class NewFormComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            url: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault()
        const baseURL = this.props.baseURL;
        const response = await axios.post(`${baseURL}/bookmark`, {
            title: this.state.title,
            url: this.state.url
        });
        this.setState({
            title: '',
            url: ''
        });
        this.props.addBookmark(response.data);
    }

    handleChange(event) {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }

    render() {
        return(
            <div>
                <h3>Add a New Bookmark</h3>
                <form onSubmit={this.handleSubmit}>

                <div class="form-group row">
                    <input class="form-control col" type="text" name="title" value={this.state.title} placeholder="website" onChange={this.handleChange}/>
                    <input class="form-control col" type="text" name="url" value={this.state.url} placeholder="http://" onChange={this.handleChange}/>
                    <input type="submit"  class="btn btn-primary" value="Add!"/>
                </div>
                </form>
            </div>
        )
    }
}

export default NewFormComponent;