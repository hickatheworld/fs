import { PathLike, readFile as rf } from 'fs';

/**
 * Reads a file
 * @param path Path to the file to read.
 * @returns The file's lines splitted in an array or undefined if the file doesn't exist
 */
export default async function readFile(path: PathLike): Promise<string[] | undefined> {
	return new Promise((resolve, reject) => {
		rf(path, { encoding: 'utf-8' }, (err, data) => {
			if (err) {
				if (err.code === 'ENOENT')
					return resolve(undefined);
				return reject(err);
			}
			const arr: string[] = data
				.split('\n') // Splits the file into an array of lines
				.map(line => line.replace(/\r$/, '')); // Clears \r in case of CRLF end of line sequence
			resolve(arr);
		});
	});
}