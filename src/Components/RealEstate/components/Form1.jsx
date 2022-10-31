import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Form1() {

    const [location, setLocation] = React.useState('');

    const handleChange = (event) => {
        setLocation(event.target.value);
    };

    const [type, setType] = React.useState('');

    const handleChange2 = (event) => {
        setType(event.target.value);
    };

    const [maxPrice, setPrice] = React.useState('');

    const handlePrice = (event) => {
        setPrice(event.target.value);
    };

    return (
        <div>

            <div className="row">
                <div className="col-lg-4 d-flex align-items-center form-group no-divider">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Location</InputLabel>
                        <Select className="selectpicker"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={location}
                            label="Location"
                            onChange={handleChange}
                        >
                            <MenuItem value="city_0">San Francisco</MenuItem>
                            <MenuItem value="city_1">Los Angeles</MenuItem>
                            <MenuItem value="city_2">Santa Monica</MenuItem>
                            <MenuItem value="city_3">San Diego</MenuItem>
                            <MenuItem value="city_4">Fresno</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select className="selectpicker"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Type"
                            onChange={handleChange2}
                        >
                            <MenuItem value="type_0">Duplex</MenuItem>
                            <MenuItem value="type_1">Appartment</MenuItem>
                            <MenuItem value="type_2">House</MenuItem>
                            <MenuItem value="type_3">Land</MenuItem>
                            <MenuItem value="type_4">Other</MenuItem>
                        </Select>
                    </FormControl>
                </div>


                <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Max Price</InputLabel>
                        <Select className="selectpicker"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={maxPrice}
                            label="Max Price"
                            onChange={handlePrice}
                        >
                            <MenuItem value="price_0">$5,000</MenuItem>
                            <MenuItem value="price_1">$10,000</MenuItem>
                            <MenuItem value="price_2">$25,000</MenuItem>
                            <MenuItem value="price_3">$50,000</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-lg-2 d-grid form-group mb-0">
                    <button className="btn btn-primary h-100" type="submit">Search </button>
                </div>
            </div>

        </div>


    );
}

export default Form1;