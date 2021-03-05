class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if(value < this.value) {
            if(this.left === null) this.left = new BST(value)
            else this.left.insert(value)
        } else {
            if(this.right === null) this.right = new BST(value)
            else this.right.insert(value)
        }

        return this;
    }

    contains(value) {
        let curr = this
        while(curr) {
            if(value < curr.value) curr = curr.left
            else if(value > curr.value) curr = curr.right
            else return true
        }
        return false
    }

    remove(value, parent = null) {
        let curr = this
        while(curr) {
            if(value < curr.value) {
                parent = curr
                curr = curr.left
            }
            else if(value > curr.value) {
                parent = curr
                curr = curr.right
            }
            else{
                if(curr.left !== null && curr.right !== null) {
                    curr.value = curr.right.getMinValue()
                    curr.right.remove(curr.value, curr)
                }
                else if(parent === null) {
                    if(curr.left !== null) {
                        curr.value = curr.left.value
                        curr.left = curr.left.left
                        curr.right = curr.left.right
                    }
                    else if(curr.right !== null) {
                        curr.value = curr.right.value
                        curr.left = curr.right.left
                        curr.right = curr.right.right
                    }
                    else {

                    }
                }
                else if(parent.left === curr) parent.left = curr.left !== null ? curr.left : curr.right
                else if(parent.right === curr) parent.right = curr.left !== null ? curr.left : curr.right
                break
            }
        }
        return this
    }

    getMinValue() {
        let curr = this
        while(curr.left) {
            curr = curr.left
        }
        return curr.value
    }
}

