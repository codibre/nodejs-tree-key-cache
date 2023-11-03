import { KeyTreeCacheStorage } from 'src/types';

export function getReadStorageFunction<R>(storage: KeyTreeCacheStorage<R>) {
	return storage.getHistory?.bind(storage) ?? storage.get.bind(storage);
}