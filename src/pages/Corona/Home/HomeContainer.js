import React, { useState, useEffect } from 'react'
import HomeListData from './HomeListData'
import { getIndonesiaCoronaData, getGlobalPositiveCorona, getGlobalDeathCorona, getGlobalRecoverCorona } from './../../../api/CoronaServices'
import { connect } from 'react-redux'
const HomeContainer = (props) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadData = async () => {
        await getIndonesiaCoronaData().then((res) => {
            props.onSetCoronaIndonesia(res.data[0])
        })
        await getGlobalPositiveCorona().then((res) => {
            props.onSetGlobalPositive(res.data.value);
        })
        await getGlobalDeathCorona().then((res) => {
            props.onSetGlobalDeath(res.data.value);

        })
        await getGlobalRecoverCorona().then((res) => {
            props.onSetGlobalRecover(res.data.value);
        })
        setIsLoading(!isLoading)
    }
    return (
        <div className="container-fluid">
            <HomeListData isLoading={isLoading} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetCoronaIndonesia: (coronaIndonesia) => dispatch({ type: "GET_DATA_CORONA_INDONESIA", coronaIndonesia: coronaIndonesia }),
        onSetGlobalPositive: (globalPositive) => dispatch({ type: "GET_DATA_GLOBAL_POSITIVE", globalPositive: globalPositive }),
        onSetGlobalDeath: (globalDeath) => dispatch({ type: "GET_DATA_GLOBAL_DEATH", globalDeath: globalDeath }),
        onSetGlobalRecover: (globalRecover) => dispatch({ type: "GET_DATA_GLOBAL_RECOVER", globalRecover: globalRecover })
    }
}

export default connect(null, mapDispatchToProps)(HomeContainer)
