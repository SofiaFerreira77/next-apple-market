const isArrayEmpty = (arr) => {
    return arr === undefined && arr === null && arr.length <= 0
}

const formatPrice = (price, localeString = 'pt-PT') => {
    const formattedPrice = price.toLocaleString( localeString, {
        style: 'currency',
        currency: 'EUR'
    });

    return formattedPrice;
}

export {isArrayEmpty, formatPrice}