import axios from 'axios';

const baseURL = "http://api.kawalcorona.com/"

const getIndonesiaCoronaData = async () => {
    let datas = await axios.get(`${baseURL}indonesia/`)
    return datas
}

const getGlobalCoronaData = async () => {
    let datas = await axios.get(`${baseURL}`)
    return datas
}

const getGlobalPositiveCorona = async () => {
    let datas = await axios.get(`${baseURL}positif/`)
    return datas
}

const getGlobalRecoverCorona = async () => {
    let datas = await axios.get(`${baseURL}sembuh/`)
    return datas
}

const getGlobalDeathCorona = async () => {
    let datas = await axios.get(`${baseURL}meninggal/`)
    return datas
}

const getCoronaByProvince = async () => {
    let datas = await axios.get(`${baseURL}indonesia/provinsi`)
    return datas
}

export { getIndonesiaCoronaData, getGlobalCoronaData, getGlobalPositiveCorona, getGlobalRecoverCorona, getGlobalDeathCorona, getCoronaByProvince };