import React, { useState, useEffect } from 'react'
import { getGlobalCoronaData } from './../../../api/CoronaServices'
import ListGlobalCorona from './ListGlobalCorona'
export default function GlobalCoronaContainer() {
    const [globalData, setGlobalData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadData = () => {
        getGlobalCoronaData().then((res) => {
            console.log(res);
            setGlobalData(res.data)
            setIsLoading(!isLoading)
        })
    }
    console.log("global:", globalData);
    return (
        <div className="container-fluid">
            <ListGlobalCorona globalData={globalData} isLoading={isLoading} />
        </div>
    )
}
