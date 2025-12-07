function lengthOfLongestSubstring(s: string): number {
    let l = 0
    let maxL = 0
    let obj: Record<string, number> = {}

    for (let r = 0; r < s.length; r++) {
        let ch = s[r]

        // If duplicated and still inside the window, move l forward
        if (obj[ch] >= l) {
            l = obj[ch] + 1
        }

        // Store latest index of this char
        obj[ch] = r

        // Update max length
        maxL = Math.max(maxL, r - l + 1)
    }

    return maxL
}
