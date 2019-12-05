import React from "react";
import "./SingleAuthorPageAdress.css"
function SingleAuthorPageAddress(props) {
    return <div id="singleAuthorPageAddress">
        <div id="adress">
    <h1>Address</h1>
<p>Street: {props.author.address.street}</p>
<p>City: {props.author.address.city}</p>
<p>Zipcode: {props.author.address.zipcode}</p>
</div>
<iframe
   width="100%"
   height="100%"
   scrolling="no"
   marginHeight="0"
   marginWidth="0"
   title={props.author.address.name}
   frameBorder="0"
   style={{ border: 0 }}
src={`https://maps.google.com/maps?q=${props.author.address.geo.lat},${props.author.address.geo.lng}&z=15&output=embed`}
/>

    </div>
}

export default SingleAuthorPageAddress;