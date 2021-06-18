import { mkdir } from 'fs';

/**
 * Creates one or multiple directories
 * @param paths The paths of the directories to create
 */
export default async function makeDir(...paths: string[]): Promise<void> { // I never need the returned path
	return new Promise((resolve, reject) => {
		for (const path of paths) {
			mkdir(path, { recursive: true, mode: 0o777 }, (err: NodeJS.ErrnoException | null) => {
				if (err)
					reject(err);
			});
		}
		resolve();
	});
}