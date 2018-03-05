import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Aside extends Component {
  render () {
    return <aside>
    <table class="infobox">
    <thead>
      <tr>
        <th colspan="2" className = 'title'>Grace Murray Hopper</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td colspan="2" className = 'card'>
          <img className= 'image' src="https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg" alt="Grace Hopper"></img>
          <p>Rear Admiral Grace M. Hopper, 1984</p>
          <hr></hr>
        </td>
      </tr>
      <tr>
        <th> Nickname(s)</th>
        <td>"Amazing Grace"</td>
      </tr>
      <tr>
        <th>Born</th>
        <td>December 9, 1906 <br></br> New York City, New York, U.S.</td>
      </tr>
      <tr>
        <th>Died</th>
        <td>January 1,1992 (aged 85) <br></br> <a href="https://en.wikipedia.org/wiki/Arlington,_Virginia" target="_blank"></a>Arlington, Virginia, U.S.</td>
      </tr>
      <tr>
        <th>Place of burial</th>
        <td><a href="https://en.wikipedia.org/wiki/Arlington_National_Cemetery" target="_blank">Arlington National Cemetery</a></td>
      </tr>
      <tr>
        <th>Allegiance</th>
        <td><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png" alt="EEUU"></img> United States of America</td>
      </tr>
      <tr>
        <th>Service/branch</th>
        <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_the_United_States_Navy.svg/23px-Flag_of_the_United_States_Navy.svg.png" alt=""></img><a href="https://en.wikipedia.org/wiki/United_States_Navy"> United States Navy</a></td>
      </tr>
    </tbody>
  </table>
  </aside>
  }
}

ReactDOM.render(<Aside />, document.getElementById('aside'));