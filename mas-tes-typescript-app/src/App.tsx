import React, { useEffect } from 'react';

import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getPhones } from "./actions/phones";
import PhoneListContainer from './PhoneListContainer/PhoneListContainer';

const Main = styled.div`
  font-family: "Verdana";
`;

const Heading = styled.h1`
  margin: 20px;
`;

const App = ({ getPhones, phones }: any) => {

  useEffect(() => {
    getPhones();
  }, [getPhones])

  return (
    <Main>
      <Heading>Phones...</Heading>
      <PhoneListContainer phones={phones}/>
    </Main>
  );
}

const mapDispatchToProps: any = () => (dispatch: any) => bindActionCreators({ getPhones }, dispatch);
const mapStateToProps = (state: any) => ({
  phones: state.phones
});

export default connect(mapStateToProps, mapDispatchToProps)(App);