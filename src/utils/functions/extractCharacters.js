/**
 * Extracts a specified number of characters from the end of a string.
 *
 * @param {string} path The string from which to extract characters.
 * @param {number} outPutNum The number of characters to extract from the end of the string.
 * @returns {string | undefined} The extracted portion of the string, or undefined if the inputs are invalid.
 */

export default function extractChars(path, outPutNum) {
    if (typeof path === 'string' && typeof outPutNum === 'number') {
        let pathLength = path.length;
        let extractedChars = path.slice(pathLength - outPutNum, pathLength);
        return extractedChars
    }
}

export function substringAfter(fullChars, startingPoint,) {
    if (typeof fullChars === 'string' && typeof startingPoint === 'string') {
        // check if startingPoint is in fullChars
        if (fullChars.includes(startingPoint)) {
            let extractedArray = fullChars.split(startingPoint)
            let extractedChars = extractedArray[extractedArray.length - 1];
            return extractedChars;
        }
    }

}