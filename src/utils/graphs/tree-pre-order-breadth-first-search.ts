import { Tree } from 'src/types';
import { getQueue } from './queue';
import { treePreOrderTraversal } from './tree-pre-order-traversal';

/**
 * Implementation of pre order traversal, breadth first search algorithm for Trees
 * @param tree The tree to be traversed
 * @param keyNames the name for each node level. The level will be assumed as the name if it is not provided
 * @returns An iterables of { keys, value } objects, where keys contains the id for each node on the path
 */
export function treePreOrderBreadthFirstSearch<T>(tree: Tree<T>) {
	return treePreOrderTraversal(tree, getQueue());
}
