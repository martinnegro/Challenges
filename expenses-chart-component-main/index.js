
const response = await fetch('./data.json');
const data = await response.json();

let maxAmount;
data.forEach((day) => { 
    if (!maxAmount) maxAmount = day.amount;
    else if (day.amount > maxAmount) maxAmount = day.amount;
});

const barsContainer = document.querySelector(".bars-container");
const labelsContainer = document.querySelector(".labels-container");
console.log(data)

const createBarAndLabel = (nameDay, amount) => {
    const bar = document.createElement('div');
    bar.style.height = `${100 * (amount / maxAmount) }px`;
    bar.classList.add("bar");
    if (amount === maxAmount) bar.classList.add("bar-blue");
    
    const label = document.createElement('p');
    label.classList.add('label-p');
    label.innerText = nameDay;

    const amountLabel = document.createElement('div');
    amountLabel.classList.add('label-p');
    amountLabel.classList.add('badge');
    amountLabel.classList.add('bold');
    amountLabel.classList.add('show-on-hover');
    amountLabel.innerHTML = `$${amount}`

    const labeledBar = document.createElement('div');
    labeledBar.classList.add('bar-labeled');
    labeledBar.appendChild(amountLabel);
    labeledBar.appendChild(bar);
    labeledBar.appendChild(label);
    
    return labeledBar;
};

data.forEach(element => {
    const labeledBar = createBarAndLabel(element.day,element.amount)
    barsContainer.appendChild(labeledBar)
});