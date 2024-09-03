let str = "hello my name is viral jain, username viraljain7 and you are great"

const findLongestStr = (str) => {
    if (str.trim().length === 0) return false;

    words = str.split(" ")
    words = words.sort((a, b) => b.length - a.length)
    return words[0]
}

console.log(findLongestStr(str));
