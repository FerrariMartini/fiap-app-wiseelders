import client from 'superagent';

class WiseEldersAPI {
    constructor(baseAddress) {
        this.baseAddress = baseAddress;
        console.log(`API base address: ${this.baseAddress}`);
    }

    getActivities() {
        const url = `${this.baseAddress}/activities`;
        return client.get(url)
            .then(res => Promise.resolve(res.body), err => Promise.reject(err));
    }
}

//TODO: Parametrizar base address
export default new WiseEldersAPI('https://5f56736432f56200168bd5e0.mockapi.io');
