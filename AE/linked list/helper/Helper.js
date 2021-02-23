import { LinkedList } from "../construction/LinkedList.js";

export function objectToLinkedList(object, ll = new LinkedList()) {
    const nodes = object.linkedList.nodes
    for(const node of nodes) {
        ll.append(node.value)
    }
    return ll
}

// An object used in algo expert to describe a linked list:
const obj = {
    "linkedList": {
        "head": "0",
        "nodes": [
            {"id": "0", "next": "1", "value": 0},
            {"id": "1", "next": "2", "value": 1},
            {"id": "2", "next": "3", "value": 2},
            {"id": "3", "next": "4", "value": 3},
            {"id": "4", "next": "5", "value": 4},
            {"id": "5", "next": "6", "value": 5},
            {"id": "6", "next": "7", "value": 6},
            {"id": "7", "next": "8", "value": 7},
            {"id": "8", "next": "9", "value": 8},
            {"id": "9", "next": "10", "value": 9},
            {"id": "10", "next": "11", "value": 10},
            {"id": "11", "next": "12", "value": 11},
            {"id": "12", "next": null, "value": 12}
        ]
    }
}
