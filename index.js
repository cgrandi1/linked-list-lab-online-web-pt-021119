// let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
// masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
// ntrandm: {name: 'Juliet', next: null}
// }

function getName(node){
    return node.name
}

function headNode(linkedList, collection){
    let head = collection[linkedList];
    return head

}

function next(node, collection){
    let nextAddress = node.next;
    return collection[nextAddress]
}

function nodeAt(index, linkedList, collection){
    let node = headNode(linkedList, collection);
    for(let i = 0; i < index; i++){
       node = next(node, collection);
    }
  
    return node;
  }

  function addressAt(index, linkedList, collection){
    if(index == 0){
      return linkedList
    } else {
      let node = nodeAt(index-1, linkedList, collection)
      return node.next
    }
  }

function indexAt(node, collection, linkedList){
  let currentNode = headNode(linkedList, collection);
  let currentIndex = 0
  while(currentNode != node){
    currentIndex++
    currentNode = next(currentNode, collection)
  }
  return currentIndex
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
  let previousNode = nodeAt(index -1, linkedList, collection);
  let nextNode = nodeAt(index, linkedList, collection);

  let previousIndex = indexAt(previousNode, collection, linkedList);
  let nextIndex = indexAt(nextNode, collection, linkedList);

  let previousAddress = addressAt(previousIndex, linkedList, collection);
  let nextAddress = addressAt(nextIndex, linkedList, collection);

  previousNode.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = nextAddress
}

function deleteNodeAt(index, linkedList, collection){
  let previousNode;
  let currentNode = headNode(linkedList, collection);
  for(let i = 0; i < index; i++){
    previousNode = currentNode
    currentNode = next(currentNode, collection);

  }
  previousNode.next = currentNode.next
}

