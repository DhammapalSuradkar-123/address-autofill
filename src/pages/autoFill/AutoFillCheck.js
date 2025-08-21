import React, { useState } from 'react';

const AutoFillCheck = () => {
    const [address, setAddress] = useState({});

    const handleOnAddressChange = (name, value) => {
        setAddress((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted")
    }

    return (
        <form autoComplete="on">
          <div>
          <input
            type="text"
            name="given-name"
            id="given-name"
            autoComplete="given-name"
            placeholder="First Name*"
            value={address.firstname || ""}
            onChange={(e) => handleOnAddressChange('firstname', e.target.value?.trim?.())}
            />

            <input
            type="text"
            name="family-name"
            id="family-name"
            autoComplete="family-name"
            placeholder="Last Name*"
            value={address.lastname || ""}
            onChange={(e) => handleOnAddressChange('lastname', e.target.value?.trim?.())}
            />

            <input
            type="tel"
            name="tel"
            id="tel"
            autoComplete="tel"
            placeholder="Mobile Number*"
            value={address.telephone || ""}
            onChange={(e) => handleOnAddressChange('telephone', e.target.value?.trim?.())}
            />

            <input
            type="text"
            name="address-line1"
            id="address-line1"
            autoComplete="address-line1"
            placeholder="Street/Road"
            value={address.street || ""}
            onChange={(e) => handleOnAddressChange('street', e.target.value)}
            />

            <input
            type="text"
            name="postal-code"
            id="postal-code"
            autoComplete="postal-code"
            placeholder="Zipcode*"
            value={address.postcode || ""}
            onChange={(e) => handleOnAddressChange('postcode', e.target.value?.trim?.())}
            />

            <input
            type="text"
            name="address-level2"
            id="address-level2"
            autoComplete="address-level2"
            placeholder="City*"
            value={address.city || ""}
            onChange={(e) => handleOnAddressChange('city', e.target.value?.trim?.())}
            />

            <select
            id="address-level1"
            name="address-level1"
            autoComplete="address-level1"
            value={address.state || ""}
            onChange={(e) => handleOnAddressChange("state", e.target.value)}
            >
            <option value="">Select State</option>
            <option value="CA">California</option>
            <option value="NY">New York</option>
            <option value="GA">Georgia</option>
            <option value="MH">Maharashtra</option>
            </select>

            <select
            id="country"
            name="country"
            autoComplete="country"
            value={address.country || ""}
            onChange={(e) => handleOnAddressChange("country", e.target.value)}
            >
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="IN">India</option>
            <option value="CA">Canada</option>
            <option value="AU">Australia</option>
            </select>
            <button
                type="submit"
                className="btn btnPrimary"
                onClick={(event) => {
                  event.preventDefault();
                  handleSubmit(event);
                }}
              >
               Save
              </button>

          </div>
        </form>
    )
}

export default AutoFillCheck;