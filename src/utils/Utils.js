const isArrayEmpty = (arr) => {
    return arr === undefined && arr === null && arr.length <= 0
}

const dumpLogs = (message) => {
    console.log(message)
}

const formatPrice = (price, localeString = 'pt-PT') => {
    const formattedPrice = price.toLocaleString( localeString, {
        style: 'currency',
        currency: 'EUR'
    });

    return formattedPrice;
}

export {isArrayEmpty, dumpLogs, formatPrice}