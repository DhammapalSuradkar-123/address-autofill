import React, { useState } from 'react';

const AutoFillCheck = () => {
  const [address, setAddress] = useState({
    firstname: "",
    lastname: "",
    telephone: "",
    street: "",
    postcode: "",
    city: "",
    state: "",
    country: ""
  });

  const handleOnAddressChange = (name, value) => {
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", address);
  };

  return (
    <form autoComplete="on" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="given-name"
          autoComplete="given-name"
          placeholder="First Name*"
          value={address.firstname}
          onChange={(e) => handleOnAddressChange('firstname', e.target.value)}
        />

        <input
          type="text"
          name="family-name"
          autoComplete="family-name"
          placeholder="Last Name*"
          value={address.lastname}
          onChange={(e) => handleOnAddressChange('lastname', e.target.value)}
        />

        <input
          type="tel"
          name="tel"
          autoComplete="tel"
          placeholder="Mobile Number*"
          value={address.telephone}
          onChange={(e) => handleOnAddressChange('telephone', e.target.value)}
        />

        <input
          type="text"
          name="address-line1"
          autoComplete="address-line1"
          placeholder="Street/Road"
          value={address.street}
          onChange={(e) => handleOnAddressChange('street', e.target.value)}
        />

        <input
          type="text"
          name="postal-code"
          autoComplete="postal-code"
          placeholder="Zipcode*"
          value={address.postcode}
          onChange={(e) => handleOnAddressChange('postcode', e.target.value)}
        />

        <input
          type="text"
          name="address-level2"
          autoComplete="address-level2"
          placeholder="City*"
          value={address.city}
          onChange={(e) => handleOnAddressChange('city', e.target.value)}
        />

        <select
          name="address-level1"
          autoComplete="address-level1"
          value={address.state}
          onChange={(e) => handleOnAddressChange("state", e.target.value)}
        >
          <option value="">Select State</option>
          <option value="CA">California</option>
          <option value="NY">New York</option>
          <option value="GA">Georgia</option>
          <option value="MH">Maharashtra</option>
        </select>

        <select
          name="country"
          autoComplete="country-name"
          value={address.country}
          onChange={(e) => handleOnAddressChange("country", e.target.value)}
        >
          <option value="">Select Country</option>
          <option value="US">United States</option>
          <option value="IN">India</option>
          <option value="CA">Canada</option>
          <option value="AU">Australia</option>
        </select>

        <button type="submit" className="btn btnPrimary">
          Save
        </button>
      </div>
    </form>
  );
};

export default AutoFillCheck;
