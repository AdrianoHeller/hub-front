import axios from 'axios'

const hmsUrl = "https://sistemas-via-saude.uc.r.appspot.com/indicadores/";

export const Api = () => {
    let companyData = new Array;
    axios.get(hmsUrl)
        .then(res => {
            let mData = "";
            let oData = "";
            oData = res.data[0];
            mData = res.data[1];
            const data = {
                mData,
                oData
            };
            return data;
        })
        .then(data => {
            const parsedUrl = `${hmsUrl}/${data['mData']}/populacao`
            axios.get(parsedUrl)
                .then( res => {
                    companyData.push(res.data);
                });
            return companyData;
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => console.error(err));
    return companyData;
};