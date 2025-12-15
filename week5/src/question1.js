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

    let printed =  printSinglyLinkedList(node1)
    
    return printed
}

// console.log(createSinglyLinkedList(10, 20, 30))


// 2. Add a Node at the Beginning 
// • Insert 5 at the start → [5,10,20,30]. 

// export function addNodeAtTheBeginning (element) {
//     let head = createSinglyLinkedList(10, 20, 30)

//     let newNode = {
//         value: element,
//         next : head
//     }

//     let printed = printSinglyLinkedList(newNode)
//     return printed
// }
// console.log(addNodeAtTheBeginning(5))