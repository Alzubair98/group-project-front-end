import React from 'react';
import { CFormSelect, CButton, CCol } from '@coreui/react';
import uuid from 'react-uuid';
import dummy from '../../dummyApi/dummy';

const Form = () => ( <>
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
      

   