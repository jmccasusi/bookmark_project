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
            <div className="App-custom-container rounded col-md-8 mx-auto py-4">
                <h3>Add a New Bookmark</h3>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group row d-flex justify-content-center">
                    <div className="col-lg-6">
                    <input className="form-control col" type="text" name="title" value={this.state.title} placeholder="website" onChange={this.handleChange}/>
                    </div>
                    <div className="col-lg-6">
                    <input className="form-control col" type="text" name="url" value={this.state.url} placeholder="http://" onChange={this.handleChange}/>
                    </div>
                </div>

                <div className="row d-flex justify-content-center px-3">
                    <input type="submit"  className="btn btn-primary btn-block" value="Add Bookmark"/>
                </div>
                </form>
            </div>
        )
    }
}

export default NewFormComponent;