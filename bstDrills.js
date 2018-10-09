'use strict';

const BinarySearchTree = require('./bst');

function main(){
  const bst = new BinarySearchTree();

  bst.insert(3);
  bst.insert(1);
  bst.insert(4);
  bst.insert(6);
  bst.insert(9);
  bst.insert(2);
  bst.insert(5);
  bst.insert(7);

  //   console.log(bst);
  //   function findHeight(bst){
  //     if(!bst){
  //       return 0;
  //     }
  
  //     let leftHeight = findHeight(bst.left);
  //     // console.log('left-', leftHeight);
  //     let rightHeight = findHeight(bst.right);
  //     // console.log('right-',rightHeight);
  //     return(Math.max(leftHeight, rightHeight)+1);
  //   }
  //   console.log(findHeight(bst));
  // 

  //   function isBst(bst){
  //     if(!bst){
  //       return true;
  //     }

  //     if(bst.left.key > bst.key){
  //       return false;
  //     }
  //     if(bst.right.key < bst.key){
  //       return false;
  //     }

  //     return true;
  //   }

  //   console.log(isBst(bst));


  //   function thirdLargestNode(bst, array=[]){
  //     if(bst){
  //       thirdLargestNode(bst.left, array);
  //       array.push(bst.key);
  //       thirdLargestNode(bst.right, array);
  //     }
  //     return array[array.length-3];
  //   }
  //   console.log(thirdLargestNode(bst));

  function isBalanced(bst){
    if(!bst){
      return 0;
    }

    let leftheight = isBalanced(bst.left);
    let rightHeight = isBalanced(bst.right);

    return(Math.abs(leftheight - rightHeight) <=0);
  }
  console.log(isBalanced(bst));
}

main();