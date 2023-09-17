import { isUndefined } from './is-undefined';

export function getKey(keys: string[], index: number) {
	const key = keys[index];
	if (isUndefined(key)) {
		throw new TypeError(`Undefined key at position ${index}`);
	}
	return key;
}
