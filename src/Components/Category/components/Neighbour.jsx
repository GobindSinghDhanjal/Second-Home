import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function Neighbour() {

    const [neighbourhood, setNeighbour] = React.useState('');

    const handleChange = (event) => {
        setNeighbour(event.target.value);
    };


    return (

        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Neighbourhood</InputLabel>

        <Select
            className="selectpicker"
            name="neighbourhood"
            id="form_neighbourhood"
            data-live-search="true"
            labelId="demo-simple-select-label"
            value={neighbourhood}
            label="Neighbourhood"
            onChange={handleChange}>

            <MenuItem value="neighbourhood_0">Battery Park City    </MenuItem>
            <MenuItem value="neighbourhood_1">Bowery    </MenuItem>
            <MenuItem value="neighbourhood_2">Carnegie Hill    </MenuItem>
            <MenuItem value="neighbourhood_3">Central Park    </MenuItem>
            <MenuItem value="neighbourhood_4">Chelsea    </MenuItem>
            <MenuItem value="neighbourhood_5">Chinatown    </MenuItem>
            <MenuItem value="neighbourhood_6">Civic Center    </MenuItem>
            <MenuItem value="neighbourhood_7">East Harlem    </MenuItem>
            <MenuItem value="neighbourhood_8">Financial District    </MenuItem>
            <MenuItem value="neighbourhood_9">Flatiron    </MenuItem>
            <MenuItem value="neighbourhood_10">Garment District    </MenuItem>
            <MenuItem value="neighbourhood_11">Gramercy Park    </MenuItem>
            <MenuItem value="neighbourhood_12">Greenwich Village    </MenuItem>
            <MenuItem value="neighbourhood_13">East Village    </MenuItem>
            <MenuItem value="neighbourhood_14">West Village    </MenuItem>
            <MenuItem value="neighbourhood_15">Hamilton Heights    </MenuItem>
            <MenuItem value="neighbourhood_16">Harlem    </MenuItem>
            <MenuItem value="neighbourhood_17">Hell's Kitchen / Clinton    </MenuItem>
            <MenuItem value="neighbourhood_18">Inwood    </MenuItem>
            <MenuItem value="neighbourhood_19">Kips Bay    </MenuItem>
            <MenuItem value="neighbourhood_20">Lenox Hill    </MenuItem>
            <MenuItem value="neighbourhood_21">Little Italy    </MenuItem>
            <MenuItem value="neighbourhood_22">Lower Eastside    </MenuItem>
            <MenuItem value="neighbourhood_23">Madison Square    </MenuItem>
            <MenuItem value="neighbourhood_24">Manhattan Valley    </MenuItem>
            <MenuItem value="neighbourhood_25">Meatpacking District    </MenuItem>
            <MenuItem value="neighbourhood_26">Midtown    </MenuItem>
            <MenuItem value="neighbourhood_27">Morningside Heights    </MenuItem>
            <MenuItem value="neighbourhood_28">Murray Hill    </MenuItem>
            <MenuItem value="neighbourhood_29">NoHo    </MenuItem>
            <MenuItem value="neighbourhood_30">NoLita    </MenuItem>
            <MenuItem value="neighbourhood_31">Roosevelt Island    </MenuItem>
            <MenuItem value="neighbourhood_32">SoHo    </MenuItem>
            <MenuItem value="neighbourhood_33">Stuyvesant Town (Stuyvesant Square)    </MenuItem>
            <MenuItem value="neighbourhood_34">Sutton Place    </MenuItem>
            <MenuItem value="neighbourhood_35">Times Square    </MenuItem>
            <MenuItem value="neighbourhood_36">Tribeca    </MenuItem>
            <MenuItem value="neighbourhood_37">Turtle Bay    </MenuItem>
            <MenuItem value="neighbourhood_38">Upper Eastside    </MenuItem>
            <MenuItem value="neighbourhood_39">Upper Westside    </MenuItem>
            <MenuItem value="neighbourhood_40">Washington Heights    </MenuItem>
            <MenuItem value="neighbourhood_41">Yorkville    </MenuItem>
        </Select>
        </FormControl>
    );
}

export default Neighbour;