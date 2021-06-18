import { PathLike, writeFile as wf, appendFile } from 'fs';

/**
 * Writes into a file
 * @param path Path to the file to write data into
 * @param content Text to write to the file
 * @param append Whether to append data to file (`true`) or override its content with the new data (`false`). Defaults to false.
 */
export default async function writeFile(path: PathLike, content: string, append = false): Promise<void> {
	return new Promise((resolve, reject) => {
		const callback = err => {
			if (err)
				reject(err);
			resolve();
		};
		if (append)
			appendFile(path, content, callback);
		else
			wf(path, content, callback);
	});
}