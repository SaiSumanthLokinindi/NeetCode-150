class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push({value, timestamp})
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)) return "";

        const data = this.keyStore.get(key);

        if(timestamp < data[0].timestamp) return "";

        let left = 0, right = data.length-1, ans = "";

        while(left <= right){
            const mid = left + Math.floor((right-left)/2);
            const midData = data[mid];

            if(midData.timestamp <= timestamp) ans = midData.value;
            if(timestamp >= midData.timestamp){
                left = mid + 1;
            }else right = mid - 1;
        }
        return ans;
    }
}
