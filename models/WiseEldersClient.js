import client from 'superagent';

class WiseEldersClient {
    constructor(baseAddress) {
        this.baseAddress = baseAddress;
        console.log(baseAddress);
    }

    getActivities() {
        const url = `${this.baseAddress}/activities`;
        return client.get(url)
            .then(res => Promise.resolve(res.body), err => Promise.reject(err));
    }
}

//TODO: Parametrizar base address
export default new WiseEldersClient('https://5f56736432f56200168bd5e0.mockapi.io');
