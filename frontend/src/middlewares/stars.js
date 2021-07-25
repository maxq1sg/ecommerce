export default function stars(number) {
    const array = []
    let count = 0
    if (Number.isInteger(number)) {
        for (let i = 1; i <= number; i++) {
            array.push('fas fa-star')
        }
        for (let i = 1; i <= 5 - number; i++) {
            array.push('far fa-star')
        }
        return array
    } else {
        while (count < 5) {
            if (number > 0 && number < 1) {
                array.push('fas fa-star-half-alt')
            } else if (number < 0) {
                array.push('far fa-star')
            } else {
                array.push('fas fa-star')
            }
            number--
            count++
        }
        return array
    }

}