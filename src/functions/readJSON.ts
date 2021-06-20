import { PathLike, readFile } from 'fs';

/**
 * Reads a file and parses its content to a JSON object
 * @param path Path to the file to read
 * @returns The file content parsed to a JSON object
 */
export default function readJSON(path: PathLike): Promise<Record<string, unknown>> {
	return new Promise((resolve, reject) => {
		readFile(path, { encoding: 'utf-8' }, (err, data) => {
			if (err)
				reject(err);
			const parsed = JSON.parse(data);
			resolve(parsed);
		});
	});
}