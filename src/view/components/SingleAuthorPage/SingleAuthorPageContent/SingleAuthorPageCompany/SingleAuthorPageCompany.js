import React from "react";
import "./SingleAuthorPageCompany.css"
function SingleAuthorPageCompany(props){
    return <div id="singleAuthorPageCompany">
        <h1>Company</h1>
<p>Name: {props.author.company.name}</p>
<p>Slogan: {props.author.company.catchPhrase}</p>
    </div>
}

export default SingleAuthorPageCompany;