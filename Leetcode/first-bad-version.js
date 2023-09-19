/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1) {
            return 1;
        }
        const mid = Math.ceil(n / 2);
        if (isBadVersion(mid)) {
            for (let i = mid; i > 0; i--) {
                if (!isBadVersion(i-1)) {
                    return i;
                }
            }
        } else {
            if (isBadVersion(n)) {
                for (let i = n; i > mid; i--) {
                    if (!isBadVersion(i-1)) {
                        return i;
                    }
                }
            }
        };
    };
};
