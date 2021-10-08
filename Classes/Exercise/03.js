function solve(tickets, criter) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = price
            this.status = status
        }

    }
    const ticketObj = [];
    tickets.forEach((entry) => {
        const [dest, price, status] = entry.split('|')
        ticketObj.push(new Ticket(dest, Number(price), status));
    })
    if (criter == 'destination') {
        ticketObj.sort((a, b) => {
            return a.destination.localeCompare(b.destination)
        })
    } else if (criter == 'status') {
        ticketObj.sort((a, b) => {
            return a.status.localeCompare(b.status)
        })
    } else {
        ticketObj.sort((a, b) => {
            return a.price - b.price
        })
    }
    return ticketObj
}


solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')

    //todo
