import React from 'react';
import uuid from 'react-uuid';
import './mainpage.css';
import {
  CCard, CCardBody, CCardFooter,
  CCardImage, CCardTitle, CCardText, CCol, CRow,
} from '@coreui/react';
import dummy from '../../dummyApi/dummy';

function Mainpage() {
  return (
    <>
      <h1 className="text-center">Our Services</h1>
      <div className="mainpage">
        {
        dummy.map((item, index) => (
          <div key={uuid()} id={index} className="cardContainer">
            {/* <div className="imgcard">
              <img
                src={item.image}
                alt="img"
                className="realimg"
              />
            </div>
            <div className="content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="pricebtn">
                <p>
                  $
                  {item.price}
                </p>
                <button type="button">Reserve</button>
              </div>
            </div> */
              <CRow sm={{ cols: 3, gutter: 4 }} md={{ cols: 2 }}>
                <CCol xs>
                  <CCard style={{ width: '13rem' }}>
                    <CCardImage orientation="top" src={item.image} />
                    <CCardBody>
                      <CCardTitle>{item.name}</CCardTitle>
                      <CCardText>
                        {item.description}
                      </CCardText>
                      <CCardText>
                        {item.price}
                      </CCardText>
                    </CCardBody>
                    <CCardFooter>
                      <small className="text-medium-emphasis">Last updated 3 mins ago</small>
                    </CCardFooter>
                  </CCard>
                </CCol>
              </CRow>
            }
          </div>
        ))
      }
      </div>
    </>
  );
}

export default Mainpage;
