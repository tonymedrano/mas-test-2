import React from 'react';
import styled from "styled-components";
//import { connect } from "react-redux";

const Main = styled.div`
  margin: 20px;
`;

const Phone = styled.article`
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 20px;
`;
const Heading = styled.h2`
  font-weight: normal;
  text-transform: capitalize;
  margin: 0 0 15px 0;
  padding: 0 0 5px 0;
  border-bottom: 1px solid #f5f5f5;
`;

const Body = styled.div`
  font-weight: normal;
  font-size: 1em;
`;

const Meta = styled.div`
  font-size: 0.675em;
  color: grey;
  margin-top: 10px;
`;

/** 
 "_id": "motorola-xoom-with-wi-fi",
"age": 0,
"imageUrl": "http://localhost:8081/images/phones/motorola-xoom-with-wi-fi.0.jpg",
"name": "Motorola XOOM™ with Wi-Fi",
"description": "The Next, Next Generation

Experience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).",
"price": 285

*/
const PhoneListContainer = ({phones}: any) => {
  const phoneFactory: any = (phone:any) => {
    return (
      <Phone key={phone._id}>
        <Heading>{phone.name}</Heading>
        <Body>{phone.description}</Body>
        <Meta>
          Price: ${phone.price}
        </Meta>
      </Phone>
    );
  } 
  return (
    <Main>
        {Object.values(phones)
          .reverse()
          .map((phone: any)=> phoneFactory(phone))}
      </Main>
  );
}

/* function mapStateToProps(state: any) {
  return {
    phones: state.phones
  };
}

export default connect(mapStateToProps)(PhoneListContainer);
 */

export default PhoneListContainer;