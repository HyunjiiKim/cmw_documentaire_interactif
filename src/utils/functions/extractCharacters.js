export default function extractChars(path, outPutNum) {
    if (typeof path === 'string' && typeof outPutNum === 'number') {
        let pathLength = path.length;
        let extractedChars = path.slice(pathLength - outPutNum, pathLength);
        return extractedChars
    }
}
