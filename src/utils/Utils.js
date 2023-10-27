const isArrayEmpty = (arr) => {
    return arr === undefined && arr === null && arr.length <= 0
}

const dumpLogs = (message) => {
    console.log(message)
}

export {isArrayEmpty, dumpLogs}