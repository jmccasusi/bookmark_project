import React from 'react';

class EditFormComponent extends React.Component {
    render() {
        return(
            <div>
                <h6>Edit this Bookmark</h6>
                <form>

                <div class="form-group row">
                    <input class="form-control col" type="text" name="title" value="" placeholder="website" onChange={""}/>
                    <input class="form-control col" type="text" name="url" value={""} placeholder="http://" onChange={""}/>
                    <input type="submit"  class="btn btn-primary" value="Save"/>
                </div>
                </form>
            </div>
        )
    }
}

export default EditFormComponent;