import React from 'react'
import { Table } from 'react-bootstrap'
import Loading from '../../../components/Loading'

export default function ListIndonesiaProvinsiCorona(props) {
    const { indoCoronaData,isLoading } = props
    if (isLoading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }
    return (
        <div>
            <br /><h1 className="d-flex justify-content-center">Indonesia Per Province Corona Data</h1><br />
            <Table striped bordered hover>
                <thead>
                    <tr className="table-active">
                        <th>No</th>
                        <th>ID</th>
                        <th>Province Code</th>
                        <th>Province</th>
                        <th>Positive Case</th>
                        <th>Recovery Case</th>
                        <th>Deaths Case</th>
                    </tr>
                </thead>
                <tbody>
                    {indoCoronaData.map((data, index) =>
                        <tr className="table-active">
                            <td>{index + 1}</td>
                            <td>{data.attributes.FID}</td>
                            <td>{data.attributes.Kode_Provi}</td>
                            <td>{data.attributes.Provinsi}</td>
                            <td>{data.attributes.Kasus_Posi}</td>
                            <td>{data.attributes.Kasus_Semb}</td>
                            <td>{data.attributes.Kasus_Meni}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
