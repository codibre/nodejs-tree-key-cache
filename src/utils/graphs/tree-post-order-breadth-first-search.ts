import { ChainedObject, SyncTree } from 'src/types';
import { Queue } from './queue';
import { treePostOrderTraversal } from './tree-post-order-traversal';

/**
 * Implementation of pre order traversal, breadth first search algorithm for Trees
 * @param tree The tree to be traversed
 * @param keyNames the name for each node level. The level will be assumed as the name if it is not provided
 * @param rootKey the root key where the iteration started
 * @param now the current timestamp to be considered on expiration
 * @returns An iterables of { keys, value } objects, where keys contains the id for each node on the path
 */
export function treePostOrderBreadthFirstSearch<T>(
	tree: SyncTree<T>,
	parentRef: ChainedObject | undefined,
) {
	return treePostOrderTraversal(tree, new Queue(), parentRef);
}
