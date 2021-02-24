class LRUCache {
    capacity = 0
    map: { [key: number]: number } = {}
    keys: number[] = []

    constructor(capacity: number) {
        this.capacity = capacity
    }

    private refreshKey(key: number) {
        const index = this.keys.indexOf(key)
        if (index === -1) return
        this.keys.splice(index, 1)
        this.keys.push(key)
    }

    get(key: number): number {
        this.refreshKey(key)
        return this.map[key] ?? -1
    }

    put(key: number, value: number): void {
        if (!this.map.hasOwnProperty(key) && this.keys.length === this.capacity) {
            const delKey = this.keys.shift() as number
            delete this.map[delKey]
        }
        if (!this.map.hasOwnProperty(key)) {
            this.keys.push(key)
        } else {
            this.refreshKey(key)
        }
        this.map[key] = value
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */