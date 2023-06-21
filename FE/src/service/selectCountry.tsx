import React, { Component, useState } from 'react';
import { Button, Text } from 'zmp-ui'
// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


class Country extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { country: 'Vietnam', region: '' };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }


  selectRegion(val) {
    this.setState({ region: val });
  }
  
  render() {
    const { country, region } = this.state;

    return (
      <div>
        <Text>Quốc Gia</Text>
        <CountryDropdown classes='selectCountry'
          
          value={this.state.country}
          name='country'
          onChange={(val) => this.selectCountry(val)}
          defaultOptionLabel='Chọn Quốc Gia' />

        <Text>Tỉnh Thành</Text>
        <RegionDropdown classes='selectCountry'
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)}
          defaultOptionLabel='Chọn Tỉnh Thành' />
          {/* <h3>{this.state.region}</h3> */}
      </div>
    );
  }
}

export default Country
