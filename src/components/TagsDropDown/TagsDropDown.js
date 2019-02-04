import React, { Component } from 'react';
import { connect } from 'react-redux';

class TagsDropDown extends Component {

    // As soon as this component mounts, dispatch saga to fetch all tags 
    // (i.e. project technologies).
    componentDidMount() {
        const action = { type: 'FETCH_TAGS' };
        this.props.dispatch(action);
    }

    // When this drop down changes, sets the tag_id in 'AdminInputForm'
    selectedTag = (event) => {
        this.props.setTagID(event.target.value);
    }

    // Display this component on the DOM
    render() {
        return (
            <select onChange={this.selectedTag} defaultValue="" required>
                <option value="" disabled hidden>-- Select a Tag --</option>
                {this.props.rs.tags.map(
                    (tag) => <option key={tag.id} value={tag.id}>{tag.name}</option>
                )}
            </select>
        );
    }
}

const mapReduxStoreToProps = (rs) => ({rs});
export default connect(mapReduxStoreToProps)(TagsDropDown);