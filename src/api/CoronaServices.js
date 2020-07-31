import axios from 'axios';

const getIndonesiaCoronaData = async () => {
    let datas = await axios.get("https://api.kawalcorona.com/indonesia/")
    return datas
}

const getGlobalCoronaData = async () => {
    let datas = await axios.get("https://api.kawalcorona.com")
    return datas
}

const getGlobalPositiveCorona = async () => {
    let datas = await axios.get("https://api.kawalcorona.com/positif/")
    return datas
}

const getGlobalRecoverCorona = async () => {
    let datas = await axios.get("https://api.kawalcorona.com/sembuh")
    return datas
}

const getGlobalDeathCorona = async () => {
    let datas = await axios.get("https://api.kawalcorona.com/meninggal")
    return datas
}

const getCoronaByProvince = async () => {
    let datas = await axios.get("https://api.kawalcorona.com/indonesia/provinsi/")
    return datas
}

export { getIndonesiaCoronaData, getGlobalCoronaData, getGlobalPositiveCorona, getGlobalRecoverCorona, getGlobalDeathCorona, getCoronaByProvince };