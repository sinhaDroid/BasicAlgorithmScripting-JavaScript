function reverse(s) {
    if (s.length < 2)
        return s;
    var halfIndex = Math.ceil(s.length / 2);
    return reverse(s.substr(halfIndex)) +
        reverse(s.substr(0, halfIndex));
}