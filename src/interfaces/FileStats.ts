/**
 * Metrics about a file
 */
interface FileStats {
	/** Total amount of characters in the file */
	characters: number,
	/** Amoumt of empty lines in the file */
	emptyLines: number,
	/** Amount of lines in the file */
	lines: number,
	// /** Size of the file in (?) */
	// size: number,
	/** Amount of space characters in the file */
	spaces: number,
}

export default FileStats;