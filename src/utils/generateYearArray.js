export default (yearSpan) => {
    const currentYear = new Date().getUTCFullYear();
    let yearArray = [];

    for (var i = yearSpan; i > 0; i--) {
        yearArray.push(currentYear - i);
    }

    return yearArray;
}