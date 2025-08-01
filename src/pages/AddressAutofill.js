import React, { useState } from 'react';

const AddressForm = () => {
  const [formData, setFormData] = useState({
    addressOne: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted address:', formData);
    // you can handle API or state update here
  };

  return (
    <main>
      <div className="wrapper" style={{margin: "100px"}}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="address-line1" style={{display:"inline-block",width:"300px"}}>Address line 123</label>
            <input
              autoComplete="address-line1"
              required
              type="text"
              id="address-line1"
              name="address-line1"
              value={formData.addressOne}
              onChange={(e) => handleChange("addressOne", e.target.value)}
            />
          </div>
          <br/>
          <div>
            <label htmlFor="address-level2" style={{display:"inline-block",width:"300px"}}>City</label>
            <input
              autoComplete="address-level2"
              required
              type="text"
              id="address-level2"
              name="address-level2"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
            />
          </div>
          <br/>
          <div>
            <label htmlFor="address-level1" style={{display:"inline-block",width:"300px"}}>State / Province / Region (optional)</label>
            <input
              autoComplete="address-level1"
              type="text"
              id="address-level1"
              name="address-level1"
              value={formData.state}
              onChange={(e) => handleChange("state", e.target.value)}
            />
          </div>
          <br/>
          <div>
            <label htmlFor="postal-code" style={{display:"inline-block",width:"300px"}}>ZIP / Postal code (optional)</label>
            <input
              autoComplete="postal-code"
              type="text"
              id="postal-code"
              name="postal-code"
              value={formData.zip}
              onChange={(e) => handleChange("zip", e.target.value)}
            />
          </div>
          <br/>
          <div>
            <label htmlFor="country" style={{display:"inline-block",width:"300px"}}>Country</label>
            <input
              autoComplete="country"
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={(e) => handleChange("country", e.target.value)}
            />
          </div>
          <br/><br/>
          <div style={{display:"flex"}}>
            <div style={{width: "300px"}} />
            <button type="submit">Save address</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddressForm;
