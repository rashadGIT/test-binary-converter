const toText = (binary) => {
    if(binary.length === 0) return '';
    if(binary.length < 0 && !binary.match(/^[0|1|\s]+$/)) return "Not a Proper Binary"
    return String.fromCharCode(...binary.trim().split(' ').map(bin => parseInt(bin, 2)))
}
const toBinary = (text) => text.split('').map((char) => char.charCodeAt(0).toString(2)).join(' ');

module.exports = {
    toText,
    toBinary
};