let str = "my name is viral"

const fun = (str) => {

    if (str.length > 180 || str.trim().length === 0) return false
    let words = str.split(" ");
    words = words.map((eachWord) => eachWord.replace(eachWord[0], eachWord[0].toUpperCase()));
    words = words.join("")
    return `#${words}`

}

console.log(fun(str))