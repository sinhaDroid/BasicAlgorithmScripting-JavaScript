function reverse(s) {
    function rev(s, len, o) {
        return (len === 0) ? o : rev(s, --len, (o += s[len]));
    };
    return rev(s, s.length, '');
}