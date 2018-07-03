
const arr = ['test', 'foo', 'bar'];

function doubleChar(arr) {
    const result = [];

    arr.map(item => {
        let newArr = item.split('');
        let checkedChar = '';
        newArr.map(char => {
            if(checkedChar === char) result.push(item);
            checkedChar = char;
        })
    });

    return result;

}

doubleChar(arr);