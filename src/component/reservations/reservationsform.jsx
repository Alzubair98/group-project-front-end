import React from 'react';
import { CFormSelect, CButton, CCol } from '@coreui/react';
import uuid from 'react-uuid';
import dummy from '../../dummyApi/dummy';


const Form = () => (
  <>
    <CFormSelect size="lg" className="mb-3" aria-label="Large select example">
      <option>Select and reserve a bike</option>
      {
      dummy.map((bike, index) => (
        <option value={index} key={uuid()}>
          react-elastic-carousel@`&quot;`^0.11.5`&quot;`

          {bike.name}

        </option>
      ))
    }
    </CFormSelect>
    <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
    <option>Select a User/Owner</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </CFormSelect>
    <CCol xs={12}>
      <CButton color="primary" type="submit">
        Submit form
      </CButton>
    </CCol>

  </>
);

export default Form;
