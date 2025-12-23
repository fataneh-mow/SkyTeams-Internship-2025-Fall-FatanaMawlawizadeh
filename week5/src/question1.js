/*
    * Author: Fatana Mawlawizadeh *

    * Date: Dec, 14th, 2025 *

    Part 1 — Linked List Basics  
    1. Create a Singly Linked List 
        • Create a linked list with 3 nodes [10, 20, 30] and print all elements. 
    2. Add a Node at the Beginning 
        • Insert 5 at the start → [5,10,20,30]. 
    3. Add a Node at the End 
        • Append 40 → [5,10,20,30,40]. 
    4. Delete the First Node 
        • Remove head → [10,20,30,40]. 
    5. Search for a Value 
        • Check if 20 exists → return true/false.

*/

// print helper function
export function printSinglyLinkedList (head) {
    let current = head
    let values = []
    while (current !== null) {
        values.push(current.value)
        current = current.next
    }   
    return values
}

// 1. Create a Singly Linked List 
// • Create a linked list with 3 nodes [10, 20, 30] and print all elements. 
export function createSinglyLinkedList (element1, element2, element3) {
    if (element1 === null || element1 === undefined || element2 === null || element2 === undefined || element3 === null || element3 === undefined) {
        throw new Error(`Error: Invalid inputs
        Make sure inputs are not empty or undefined`);
    }

    let node1 = {
        value: element1,
        next: null
    }
    let node2 = {
        value: element2,
        next: null
    }
    let node3 = {
        value: element3,
        next: null
    }

    // linking nodes together
    node1.next = node2
    node2.next = node3
    
    return node1
}

// 2. Add a Node at the Beginning 
// • Insert 5 at the start → [5,10,20,30]. 
export function addNodeAtTheBeginning (head, element) {
    if (element === null || element === undefined || head === null || head === undefined) {
        throw new Error(`Error: Invalid input
        elemnt can't have a value of null or undefined`);
    }

    let newNode = {
        value: element,
        next : head
    }

    return newNode
}

//  3. Add a Node at the End 
// • Append 40 → [5,10,20,30,40].
export function addNodeAtTheEnd (head, element) {
    if (element === null || element === undefined || head === null || head === undefined) {
        throw new Error(`Error: Invalid input
        elemnt can't have a value of null or undefined`);
    }

    let newNode = {
        value: element,
        next: null
    }

    let current = head
    while (current.next !== null) {
        current = current.next
    }

    current.next = newNode

    return head
}

// 4. Delete the First Node 
// • Remove head → [10,20,30,40]
export function deleteFirstNode (head) {
    if (head === null || head === undefined) {
        throw new Error(`Error: Invalid input
        head must not be null or undefined`);
    }

    let removed = head.next
    return removed
}

// 5. Search for a Value 
// • Check if 20 exists → return true/false.
export function isSearchForValue (head, value) {
    if (head === null || head === undefined || value === null || value === undefined) {
        throw new Error(`Error: Invalid inputs
        inputs must not be null or undefined`);
    }

    while (head.value !== null) {
        if(head.value === value) {
            return true
        }
        else {
            return false
        }
    }
}