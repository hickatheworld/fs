import { PathLike } from 'fs';
import FileStats from '../interfaces/FileStats';
import readFile from './readFile';

/**
 * Gets metrics about a text file
 * @param path Path to the file to get stats of
 * @returns Metrics of the file
 */
export default async function fileStats(path: PathLike): Promise<FileStats | undefined> {
	const stats = {} as FileStats;
	const file = await readFile(path);
	if (!file)
		return undefined;
	stats.characters = file.map(line => line.length).reduce((prev, current) => prev + current);
	stats.emptyLines = file.filter(line => line === '').length;
	stats.lines = file.length;
	stats.spaces = file.join('').match(/ /g)?.length || 0;
	return stats;
}

fileStats('test.txt').then(console.log);