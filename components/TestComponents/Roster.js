import React from 'react';
import Table from 'react-bootstrap/Table';
import { thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

function Roster(){

    return (
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Player Roster</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jerami Grant</td>
    </tr>
    <tr>
      <td>Trey Lyles</td>
    </tr>
    <tr>
      <td>Gary Harris</td>
    </tr>
    <tr>
      <td>Juan Hernangomez</td>
    </tr>
    <tr>
      <td>Nikola Jokic</td>
    </tr>
    <tr>
      <td>Tyler Lydon</td>
    </tr>
    <tr>
      <td>Paul Millsap</td>
    </tr>
    <tr>
      <td>Monte Morris</td>
    </tr>
    <tr>
      <td>Jamal Murray</td>
    </tr>
    <tr>
      <td>Mason Plumlee</td>
    </tr>
    <tr>
      <td>Michael Porter Jr.</td>
    </tr>
    <tr>
      <td>Jared Vanderbilt</td>
    </tr>
    <tr>
      <td>Thomas Welsh</td>
    </tr>
    <tr>
      <td>Bol Bol</td>
    </tr>
    <tr>
      <td>Tyler Cook</td>
    </tr>
    <tr>
      <td>Torrey Craig</td>
    </tr>
    <tr>
      <td>Will Barton</td>
    </tr>
  </tbody>
</Table>
    );
}

export default Roster