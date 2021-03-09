/*
 * Min Heap Construction
 */

class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    /***
     * O(n) time complexity
     * O(1) aux space
     * @param array
     * @returns {[]}
     */
    buildHeap(array) {
        let startingIndex = this.getParentIndex(array.length - 1)
        for (let i = startingIndex; i >= 0 ; i--) {
            this.siftDown(i, array)
        }
        return array
    }

    /***
     * O(log(N) time complexity
     * O(1) aux space
     * @param currIndex
     * @param {[]} heap
     */
    siftDown(currIndex, heap) {
        while(this.getLeftIndex(currIndex) <= heap.length - 1) {
            let indexOfSmallest = currIndex
            const leftIndex = this.getLeftIndex(currIndex)
            const rightIndex = this.getRightIndex(currIndex)

            if(leftIndex <= heap.length - 1 && heap[leftIndex] < heap[indexOfSmallest]) indexOfSmallest = leftIndex
            if(rightIndex <= heap.length - 1 && heap[rightIndex] < heap[indexOfSmallest]) indexOfSmallest = rightIndex

            if(indexOfSmallest !== currIndex) {
                this.swap(currIndex, indexOfSmallest, heap)
                currIndex = indexOfSmallest
            } else break
        }
    }

    /***
     * O(log(N)) time complexity
     * O(1) aux space
     * @param currIndex
     * @param heap
     */
    siftUp(currIndex, heap) {
        let parentIndex = this.getParentIndex(currIndex)
        while(heap[currIndex] < heap[parentIndex]) {
            this.swap(currIndex, parentIndex, heap)
            currIndex = parentIndex
            parentIndex = this.getParentIndex(currIndex)
        }
    }

    /***
     * O(1) time complexity
     * O(1) aux space
     * @returns {*}
     */
    peek() {
        return this.heap[0]
    }

    /***
     * Remove the minimum element and build a new heap
     * O(log(N)) time complexity
     * O(1) aux space
     * @returns {*}
     */
    remove() {
        this.swap(0, this.heap.length - 1, this.heap)
        const removed = this.heap.pop()
        this.siftDown(0, this.heap)
        return removed
    }

    /***
     * O(log(N)) time complexity
     * O(1) aux space
     * @param value
     */
    insert(value) {
        this.heap.push(value)
        this.siftUp(this.heap.length - 1, this.heap)
    }


    swap(i, j, heap) {
        const temp = heap[i]
        heap[i] = heap[j]
        heap[j] = temp
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }

    getRightIndex(index) {
        return 2 * index + 2
    }

    getLeftIndex(index) {
        return 2 * index + 1
    }
}
