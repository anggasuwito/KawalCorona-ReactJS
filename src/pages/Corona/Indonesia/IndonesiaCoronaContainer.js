import React, { useState, useEffect } from 'react'
import { getCoronaByProvince } from './../../../api/CoronaServices'
import ListIndonesiaProvinsiCorona from './ListIndonesiaProvinsiCorona'

export default function IndonesiaCoronaContainer() {
    const [indoCoronaData, setindoCoronaData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {    
        loadData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadData = () => {
        getCoronaByProvince().then((res) => {
            setindoCoronaData(res.data)
            setIsLoading(!isLoading)
        })
    }
    console.log("coba:", indoCoronaData);
    return (
        <div className="container-fluid">
            <ListIndonesiaProvinsiCorona indoCoronaData={indoCoronaData} isLoading={isLoading} />
        </div>
    )
}
