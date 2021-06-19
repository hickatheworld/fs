import { mkdirSync, rmdirSync, writeFileSync } from 'fs';
import os from 'os';

/** Creates required temp files for tests */
export default function init(): void {
	process.chdir(os.tmpdir());
	try {
		mkdirSync('@hickatheworld');
		mkdirSync('@hickatheworld/fs');
	} catch (err) {
		// Occurs if the directories already exist
		// Probably because last test didn't end correctly
	}
	process.chdir('@hickatheworld/fs');

	writeFileSync('test_file.txt', 'line1\nline2 \n\nline3	');
	mkdirSync('test_dir');
	writeFileSync('test_dir/test_file2.txt', 'line1\nline2 \n\nline3	');

	process.on('exit', () => {
		process.chdir('../..');
		rmdirSync('@hickatheworld', { recursive: true });
	});
	process.on('SIGINT', () => process.exit());
}

init();
setTimeout(() => null, 10000);