Array.prototype.last = function() {
    if (this[0] === undefined) { return -1; }
    for (let i = 0; i < 1000; i++) {
        if(this[i+1] === undefined) { return this[i]; }
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
