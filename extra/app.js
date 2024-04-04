(() => {
    // YOUR CODE HERE
    
})();

const changes = [50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

function getChange() {
    const cost = parseInt(document.querySelector('#cost').value * 100);
    const bill = parseInt(document.querySelector('#bill').value * 100);
    const display = document.querySelector('#change');

    if (bill < cost) {
        display.innerHTML = 'More money please!';
        return;
    } else if (bill === cost) {
        display.innerHTML = 'No change for you.';
        return;
    }

    const due = bill - cost;

    let count = 0;
    let index = 0;
    let array = [];

    while (count !== due) {
        if (count + changes[index] <= due) {
            count += changes[index];
            array.push(changes[index] / 100);
        } else {
            index++;
        }
        console.log(count);
    }

    display.innerHTML = array.join(', ');
}
