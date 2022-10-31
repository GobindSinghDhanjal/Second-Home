import React from "react";
import Header from "../subComponents/Header";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function UserAdd1() {

    const [homeType, setHomeType] = React.useState('');
  
    const handleChange = (event) => {
      setHomeType(event.target.value);
    };

    const [countryOrRegion, setCountryOrRegion] = React.useState('');
  
    const handleChange2 = (event) => {
      setCountryOrRegion(event.target.value);
    };

    return(
        <div>
            <Header />
            <br />
            <br />
            
            <div className="progress rounded-0 sticky-top" style={{height: "8px", top: "72px"}}>
      <div className="progress-bar" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <section className="py-5">
      <div className="container">
        <p className="subtitle text-primary">Add new listing</p>
        <h1 className="h2 mb-5"> Basic information <span className="text-muted float-end">Step 1</span>      </h1>
        <form>
          <div className="row form-block">
            <div className="col-lg-4">
              <h4>Basic</h4>
              <p className="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.</p>
            </div>
            <div className="col-lg-7 ms-auto">
              <div className="mb-4">
                <TextField className="form-control" id="form_name" label="Property Name" variant="outlined" />
              </div>
              <div className="mb-4">
                {/* <label className="form-label" for="form_type">Home type</label> */}

                <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Home Type</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    value={homeType}
    label="HomeType"
    onChange={handleChange}
    className="selectpicker"
    name="type"
    id="form_type"
    data-style="btn-selectpicker" 
    aria-describedby="propertyTypeHelp"
  >
    <MenuItem value={"type_0"}>Entire place</MenuItem>
    <MenuItem value={"type_1"}>Private room</MenuItem>
    <MenuItem value={"type_2"}>Shared room</MenuItem>
  </Select>
                </FormControl>

<small className="form-text text-muted" id="propertyTypeHelp">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</small>
              </div>
              <div className="mb-4">
                <label className="form-label">Is your property set as a dedicated guest space?</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" id="guests_0" name="guests"/>
                  <label className="form-check-label" for="guests_0">Yes, it's primarily set up for guests</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" id="guests_1" name="guests"/>
                  <label className="form-check-label" for="guests_1">No, I keep my personal belongings there</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row form-block">
            <div className="col-lg-4">
              <h4>Location</h4>
              <p className="text-muted text-sm">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
            </div>
            <div className="col-lg-7 ms-auto">
              {/* <!-- Country--> */}
              <div className="mb-4">
                {/* <label className="form-label" for="form_country">Country / Region</label> */}
                <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Country / Region</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    value={countryOrRegion}
    label="Country / Region"
    onChange={handleChange2}
    className="selectpicker"
    name="country"
    id="form_country"
    data-style="btn-selectpicker"
    title=" "
    data-live-search="true"
  >
 <MenuItem value={"country_#{index}"}>Afghanistan             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Albania             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Algeria             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Andorra             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Angola             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Anguilla             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Antigua &amp; Barbuda             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Argentina             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Armenia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Aruba             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Australia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Austria             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Azerbaijan             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Bahamas             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Bahrain             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Bangladesh             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Barbados             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Belarus             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Belgium             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Belize             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Benin             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Bermuda             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Bhutan             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Bolivia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Bosnia &amp; Herzegovina             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Botswana             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Brazil             </MenuItem>
                  <MenuItem value={"country_#{index}"}>British Virgin Islands             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Brunei             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Bulgaria             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Burkina Faso             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Burundi             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Cambodia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Cameroon             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Cape Verde             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Cayman Islands             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Chad             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Chile             </MenuItem>
                  <MenuItem value={"country_#{index}"}>China             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Colombia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Congo             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Cook Islands             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Costa Rica             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Cote D Ivoire             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Croatia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Cruise Ship             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Cuba             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Cyprus             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Czech Republic             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Denmark             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Djibouti             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Dominica             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Dominican Republic             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Ecuador             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Egypt             </MenuItem>
                  <MenuItem value={"country_#{index}"}>El Salvador             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Equatorial Guinea             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Estonia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Ethiopia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Falkland Islands             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Faroe Islands             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Fiji             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Finland             </MenuItem>
                  <MenuItem value={"country_#{index}"}>France             </MenuItem>
                  <MenuItem value={"country_#{index}"}>French Polynesia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>French West Indies             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Gabon             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Gambia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Georgia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Germany             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Ghana             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Gibraltar             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Greece             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Greenland             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Grenada             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Guam             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Guatemala             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Guernsey             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Guinea             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Guinea Bissau             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Guyana             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Haiti             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Honduras             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Hong Kong             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Hungary             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Iceland             </MenuItem>
                  <MenuItem value={"country_#{index}"}>India             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Indonesia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Iran             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Iraq             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Ireland             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Isle of Man             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Israel             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Italy             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Jamaica             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Japan             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Jersey             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Jordan             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Kazakhstan             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Kenya             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Kuwait             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Kyrgyz Republic             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Laos             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Latvia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Lebanon             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Lesotho             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Liberia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Libya             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Liechtenstein             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Lithuania             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Luxembourg             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Macau             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Macedonia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Madagascar             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Malawi             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Malaysia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Maldives             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Mali             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Malta             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Mauritania             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Mauritius             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Mexico             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Moldova             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Monaco             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Mongolia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Montenegro             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Montserrat             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Morocco             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Mozambique             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Namibia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Nepal             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Netherlands             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Netherlands Antilles             </MenuItem>
                  <MenuItem value={"country_#{index}"}>New Caledonia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>New Zealand             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Nicaragua             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Niger             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Nigeria             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Norway             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Oman             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Pakistan             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Palestine             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Panama             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Papua New Guinea             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Paraguay             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Peru             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Philippines             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Poland             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Portugal             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Puerto Rico             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Qatar             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Reunion             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Romania             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Russia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Rwanda             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Saint Pierre &amp; Miquelon             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Samoa             </MenuItem>
                  <MenuItem value={"country_#{index}"}>San Marino             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Satellite             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Saudi Arabia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Senegal             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Serbia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Seychelles             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Sierra Leone             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Singapore             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Slovakia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Slovenia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>South Africa             </MenuItem>
                  <MenuItem value={"country_#{index}"}>South Korea             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Spain             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Sri Lanka             </MenuItem>
                  <MenuItem value={"country_#{index}"}>St Kitts &amp; Nevis             </MenuItem>
                  <MenuItem value={"country_#{index}"}>St Lucia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>St Vincent             </MenuItem>
                  <MenuItem value={"country_#{index}"}>St. Lucia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Sudan             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Suriname             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Swaziland             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Sweden             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Switzerland             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Syria             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Taiwan             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Tajikistan             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Tanzania             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Thailand             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Timor L'Este             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Togo             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Tonga             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Trinidad &amp; Tobago             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Tunisia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Turkey             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Turkmenistan             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Turks &amp; Caicos             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Uganda             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Ukraine             </MenuItem>
                  <MenuItem value={"country_#{index}"}>United Arab Emirates             </MenuItem>
                  <MenuItem value={"country_#{index}"}>United Kingdom             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Uruguay             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Uzbekistan             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Venezuela             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Vietnam             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Virgin Islands (US)             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Yemen             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Zambia             </MenuItem>
                  <MenuItem value={"country_#{index}"}>Zimbabwe             </MenuItem>
                  </Select>
                </FormControl>

              </div>
              {/* <!-- Street--> */}
              <div className="mb-4">
                <TextField className="form-control" id="form_street" label="Street Address" variant="outlined" />
              </div>
              {/* <!-- City + State--> */}
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-4">
                    <TextField className="form-control" id="form_city" label="City" variant="outlined" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-4">
                    <TextField className="form-control" id="form_state" label="State" variant="outlined" />
                  </div>
                </div>
              </div>
              {/* <!-- ZIP Code--> */}
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-4">
                    <TextField className="form-control" id="form_zip" label="ZIP Code" variant="outlined" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row form-block flex-column flex-sm-row">
            <div className="col text-center text-sm-start">
            </div>
            <div className="col text-center text-sm-end"><a className="btn btn-primary px-3" href="/user-add-2"> Next step<i className="fa-chevron-right fa ms-2"></i></a></div>
          </div>
        </form>
      </div>
    </section>
        </div>
    );
}

export default UserAdd1;