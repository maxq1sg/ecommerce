const numberVariants = (number) => {
    const array = []
    while (number > 0) {
        array.push(number)
        --number
    }
    return array.reverse()
}
export default numberVariants
