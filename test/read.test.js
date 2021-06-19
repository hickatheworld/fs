/* eslint-disable @typescript-eslint/no-var-requires, no-undef */

const { expect } = require('chai');
const { fileStats } = require('../build/index');
const { SAMPLE_TEXT } = require('./init.js');
console.log(process.cwd());
describe('Reader functions test', function () {
	describe('fileStats()', function () {
		it('should return the correct stats', async function () {
			const result = await fileStats('test_file.txt');
			expect(result).to.eql({
				characters: SAMPLE_TEXT.replace(/\n/g, '').length,
				emptyLines: 1,
				lines: 4,
				spaces: 1
			});
		});
	});
});