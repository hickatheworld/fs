/* eslint-disable @typescript-eslint/no-var-requires, no-undef */

const { expect, use } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { fileStats, readFile, readJSON } = require('../build/index');
const { SAMPLE_TEXT, SAMPLE_OBJECT } = require('./init.js');

use(chaiAsPromised);
describe('Reader functions test', function () {
	describe('readFile()', function () {
		it('should be a correct array of file lines', async function () {
			const arr = await readFile('test_file.txt');
			expect(arr).to.eql(['line1', 'line2 ', '', 'line3	']);
		});
		it('should be undefined', async function () {
			const result = await readFile('not_a_file.txt');
			expect(result).to.be.undefined;
		});
		it('should throw an error', async function () {
			expect(readFile('test_dir')).to.eventually.be.rejected;
		});
	});
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
		it('should be undefined', async function () {
			const result = await fileStats('not_a_file.txt');
			expect(result).to.be.undefined;
		});
		it('should throw an error', async function () {
			expect(fileStats('test_dir')).to.eventually.be.rejected;
		});
	});
	describe('readJSON()', function () {
		it('should return a correct object', async function () {
			const result = await readJSON('test_json.txt');
			expect(result).to.eql(SAMPLE_OBJECT);
		});
		it('should be undefined', async function () {
			const result = await readJSON('not_a_file.txt');
			expect(result).to.be.undefined;
		});
		it('should throw an error', async function () {
			expect(readJSON('test_dir')).to.eventually.be.rejected;
		});
	});
});