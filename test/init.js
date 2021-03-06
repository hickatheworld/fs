/* eslint-disable @typescript-eslint/no-var-requires */
const { mkdirSync, rmdirSync, writeFileSync } = require('fs');
const os = require('os');

const SAMPLE_TEXT = 'line1\nline2 \n\nline3	';
module.exports.SAMPLE_TEXT = SAMPLE_TEXT;
const SAMPLE_OBJECT = { a: 12, b: 'test', c: [1] };
module.exports.SAMPLE_OBJECT = SAMPLE_OBJECT;

/** Creates required temp files for tests */
function init() {
	process.chdir(os.tmpdir());
	try {
		mkdirSync('@hickatheworld');
		mkdirSync('@hickatheworld/fs');
		mkdirSync('@hickatheworld/fs/test_dir');
	} catch (err) {
		// Occurs if the directories already exist
		// Probably because last test didn't end correctly
	}
	process.chdir('@hickatheworld/fs');

	writeFileSync('test_file.txt', SAMPLE_TEXT);
	writeFileSync('test_json.txt', JSON.stringify(SAMPLE_OBJECT));

	process.on('exit', () => {
		process.chdir('../..');
		rmdirSync('@hickatheworld', { recursive: true });
	});
	process.on('SIGINT', () => process.exit());
}
init();