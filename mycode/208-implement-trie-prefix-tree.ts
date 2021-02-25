class Trie {
    private isWord: boolean = false
    private dict: { [key: string]: Trie } = {}
    
    constructor() {
    }

    insert(word: string): void {
        if (word === '') {
            this.isWord = true
        } else {
            if (!this.dict[word[0]]) this.dict[word[0]] = new Trie()
            this.dict[word[0]].insert(word.substring(1))
        }
    }

    search(word: string): boolean {
        if (word === '') {
            return this.isWord
        } else {
            return this.dict[word[0]]?.search(word.substring(1)) ?? false
        }
    }

    startsWith(prefix: string): boolean {
        if (prefix === '') {
            return true
        } else {
            return this.dict[prefix[0]]?.startsWith(prefix.substring(1)) ?? false
        }
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
