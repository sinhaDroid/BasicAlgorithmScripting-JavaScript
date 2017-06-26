function reverse(s) {
    return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
}
