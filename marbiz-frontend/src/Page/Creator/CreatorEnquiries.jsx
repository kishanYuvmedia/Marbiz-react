import React, { useEffect, useState } from 'react'
import { CardHorizontal } from '../../Components/card-horizontal'
import { enquiryListById } from '../../services/api/api-service';
import { isNull, result } from 'lodash';

const CreatorEnquiries = ({ pagetitle }) => {

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      enquiryListById().then(result => {
        setList(result);
        setLoading(false);
      });
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className='d-inline-flex justify-content-between my-2'>
            <h1 className="text-center">{pagetitle}</h1>
          </div>
          <hr className="hr hr-blurry border border-danger border-2" />
        </div>
      </div>
      <div className='container'>
        {!isNull(list) &&
          <CardHorizontal details={list} />
        }
      </div>
    </>
  )
}

export default CreatorEnquiries