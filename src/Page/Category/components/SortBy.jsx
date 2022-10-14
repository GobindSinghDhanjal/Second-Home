import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function SortBy() {

    const [sort, setSort] = React.useState('');

    const handleSort = (event) => {
        setSort(event.target.value);
    };

    return (

        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
                className="selectpicker"
                labelId="demo-simple-select-label"
                value={sort}
                label="Sort By"
                onChange={handleSort}
                name="sort"
                id="form_subCategory">
                <MenuItem value="sortBy_0">Most popular   </MenuItem>
                <MenuItem value="sortBy_1">Recommended   </MenuItem>
                <MenuItem value="sortBy_2">Newest   </MenuItem>
                <MenuItem value="sortBy_3">Oldest   </MenuItem>
                <MenuItem value="sortBy_4">Closest   </MenuItem>
            </Select>
        </FormControl>




    );
}

export default SortBy;