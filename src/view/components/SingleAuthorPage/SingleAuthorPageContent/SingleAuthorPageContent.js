import React from "react";
import SingleAuthorPageInfo from "./SingleAuthorPageInfo/SingleAuthorPageInfo";
import SingleAuthorPageAdress from "./SingleAuthorPageAddress/SingleAuthorPageAddress"
import SingleAuthorPageCompany from "./SingleAuthorPageCompany/SingleAuthorPageCompany";
import { Link } from "react-router-dom";
import "./SingleAuthorPageContent.css"
const author = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
};

function SingleAuthorPageContent() {
  return (
    <div id="singleAuthorPageContent">
      <Link to="/">
        <p>{"<"}Back</p>
      </Link>
      <SingleAuthorPageInfo author={author} />
      <SingleAuthorPageAdress author={author} />
      <SingleAuthorPageCompany author={author} />
    </div>
  );
}
export default SingleAuthorPageContent;
