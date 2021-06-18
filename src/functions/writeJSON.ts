import { PathLike } from 'fs';
import writeFile from './writeFile';

/**
 * Serializes a JSON object into a file
 * @param path Path to the file to write JSON into
 * @param object The object to serialize in the file
 * @param forcePretty Whether to force a pretty print of the object even in production environment. Defaults to false.
 * @returns The stringified object as written in the file
 */
export default async function writeJSON(path: PathLike, object: Record<string, unknown>, forcePretty = false): Promise<string> {
	let out: string;
	if (process.env.NODE_ENV === 'production' && !forcePretty)
		out = JSON.stringify(object);
	else
		out = JSON.stringify(object, null, 4);
	await writeFile(path, out);
	return out;
}