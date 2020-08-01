import React from 'react'
import { Table } from 'react-bootstrap'
import Loading from '../../../components/Loading'
export default function ListGlobalCorona(props) {
    const { globalData, isLoading } = props
    if (isLoading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }
    return (
        <div>
            <br /><h1 className="d-flex justify-content-center">Global Corona Data</h1><br />
            <h1 className="d-flex justify-content-center">Total Data : {globalData.length}</h1><br />
            <Table striped bordered hover>
                <thead>
                    <tr className="table-active">
                        <th>No</th>
                        <th>Object ID</th>
                        <th>Country Region</th>
                        <th>Last Update</th>
                        <th>Lat</th>
                        <th>Long</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {globalData.map((data, index) =>
                        <tr className="table-active">
                            <td>{index + 1}</td>
                            <td>{data.attributes.OBJECTID}</td>
                            <td>{data.attributes.Country_Region}</td>
                            <td>{data.attributes.Last_Update}</td>
                            <td>{data.attributes.Lat}</td>
                            <td>{data.attributes.Long_}</td>
                            <td>{data.attributes.Confirmed}</td>
                            <td>{data.attributes.Deaths}</td>
                            <td>{data.attributes.Recovered}</td>
                            <td>{data.attributes.Active}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
