import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function SubCategory() {

    const [subCategory, setSubCategory] = React.useState('');

    const handleSubCategory = (event) => {
        setSubCategory(event.target.value);
    };

    return (

        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">SubCategory</InputLabel>

            <Select
                className="selectpicker"
                data-live-search="true"
                labelId="demo-simple-select-label"
                value={subCategory}
                label="Category"
                onChange={handleSubCategory}
                name="Category"
                id="form_subCategory">
                <MenuItem value="subCategory_0">Hipster    </MenuItem>
                <MenuItem value="subCategory_1">Music club    </MenuItem>
                <MenuItem value="subCategory_2">Bar    </MenuItem>
                <MenuItem value="subCategory_3">Pub    </MenuItem>
                <MenuItem value="subCategory_4">Deli    </MenuItem>
                <MenuItem value="subCategory_5">Bistro    </MenuItem>
            </Select>
        </FormControl>

    );
}

export default SubCategory;