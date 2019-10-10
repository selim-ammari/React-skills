import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - { id }</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio placeat nisi eius alias, doloremque odio sequi dolorum recusandae dolor, quo qui magni reiciendis, ducimus iure rem soluta impedit minus? Porro.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Selim</div>
                    <div>2nd of September, 3pm</div>
                </div>
            </div>
        </div>
    )
}


export default ProjectDetails;