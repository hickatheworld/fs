import { PathLike, readFile } from 'fs';

/**
 * Reads a file and parses its content to a JSON object
 * @param path Path to the file to read
 * @returns The file content parsed to a JSON object or undefined if the file doesn't exist
 */
export default function readJSON(path: PathLike): Promise<Record<string, unknown> | undefined> {
	return new Promise((resolve, reject) => {
		readFile(path, { encoding: 'utf-8' }, (err, data) => {
			if (err) {
				if (err.code === 'ENOENT')
					return undefined;
				return reject(err);
			}
			const parsed = JSON.parse(data);
			resolve(parsed);
		});
	});
}