import React from "react";
import Verified from "./Verified";
import VerifiedHeader from "./VerifiedHeader";

class PartnerTable extends React.Component {
  render() {
    return (
      <>
        <table className="partner-table">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Name & Partner id</th>
              <th>Contact/City</th>
              <th>Created on</th>
              <th>Fulfilled # / Assigned #</th>
              <th>Meds mapped</th>
              <th>Locality</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row:1 Cell:1</td>
              <td>Row:1 Cell:2</td>
              <td>Row:1 Cell:3</td>
              <td>Row:1 Cell:4</td>
              <td>Row:1 Cell:5</td>
              <td>Row:1 Cell:6</td>
              <td>Row:1 Cell:7</td>
            </tr>
            <tr>
              <td>Row:2 Cell:1</td>
              <td>Row:2 Cell:2</td>
              <td>Row:2 Cell:3</td>
              <td>Row:2 Cell:4</td>
              <td>Row:2 Cell:5</td>
              <td>Row:2 Cell:6</td>
              <td>Row:2 Cell:7</td>
            </tr>
            <tr>
              <td>Row:3 Cell:1</td>
              <td>Row:3 Cell:2</td>
              <td>Row:3 Cell:3</td>
              <td>Row:3 Cell:4</td>
              <td>Row:3 Cell:5</td>
              <td>Row:3 Cell:6</td>
              <td>Row:3 Cell:7</td>
            </tr>
            <tr>
              <td>Row:4 Cell:1</td>
              <td>Row:4 Cell:2</td>
              <td>Row:4 Cell:3</td>
              <td>Row:4 Cell:4</td>
              <td>Row:4 Cell:5</td>
              <td>Row:4 Cell:6</td>
              <td>Row:4 Cell:7</td>
            </tr>
            <tr>
              <td>Row:5 Cell:1</td>
              <td>Row:5 Cell:2</td>
              <td>Row:5 Cell:3</td>
              <td>Row:5 Cell:4</td>
              <td>Row:5 Cell:5</td>
              <td>Row:5 Cell:6</td>
              <td>Row:5 Cell:7</td>
            </tr>
            <tr>
              <td>Row:6 Cell:1</td>
              <td>Row:6 Cell:2</td>
              <td>Row:6 Cell:3</td>
              <td>Row:6 Cell:4</td>
              <td>Row:6 Cell:5</td>
              <td>Row:6 Cell:6</td>
              <td>Row:6 Cell:7</td>
            </tr>
          </tbody>
        </table>
        {this.props.isVerified ? <Verified /> : null}
      </>
    );
  }
}

export default PartnerTable;
