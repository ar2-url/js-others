//true false in use

const truthyOrFalsy = value => {
    if (value) {
        return true
    }
    return false
}

/*
// As a function declaration:
function truthyOrFalsy(value) {
    if (value) {
        return true
    } else {
        return false
    }
}

// Using a ternary: 
const truthyOrFalsy = value => value ? true : false 
*/

//num

const numImaginaryFriends = totalFriends => Math.round(totalFriends * .33)

/*
// As a function declaration:
    function numImaginaryFriends(totalFriends) {
    return Math.round(totalFriends * .33)
}
*/