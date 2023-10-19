import React from 'react';

const FormResponse = ({ location }) => {
  const formData = location.state?.formData;

  return (
    <div>
      <h2>Thank You for Your Submission</h2>
      {formData && (
        <div>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
        </div>
      )}
    </div>
  );
};

export default FormResponse;
