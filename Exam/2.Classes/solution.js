class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
        this.listOfParticipants = [] //{ name, condition, power: 100, wins: 0 }
    }
    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.")
        }

        if (Number(money) < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`
        }

        for (let i = 0; i < this.listOfParticipants.length; i++) {
            if (this.listOfParticipants[i].name == name) {
                return `The ${name} is already registered at the camp.`
            }
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 })
        return `The ${name} was successfully registered.`

    }
    unregisterParticipant(name) {
        for (let i = 0; i < this.listOfParticipants.length; i++) {
            if (this.listOfParticipants[i].name == name) {
                this.listOfParticipants.splice(i, 1)
                return `The ${name} removed successfully.`

            }

        }
        throw new Error(`The ${name} is not registered in the camp.`)
    }
    timeToPlay(typeOfGame, participant1, participant2 = 0) {
        if (typeOfGame == 'Battleship') {
            let isFoundName = false
            this.listOfParticipants.forEach((member) => {
                if (member.name == participant1) {
                    isFoundName = true;
                    member.power += 20
                }
            })
            if (!isFoundName) {
                throw new Error(`Invalid entered name/s.`)
            } else {
                return `The ${participant1} successfully completed the game ${typeOfGame}.`
            }

        } else {
            let firstPlayerName = false;
            let secondPlayerName = false;
            let firstPlayerType;
            let secondPlayerType;

            this.listOfParticipants.forEach(element => {
                if (element.name == participant1) {
                    firstPlayerName = true;
                    firstPlayerType = element.condition

                } else if (element.name == participant2) {
                    secondPlayerName = true;
                    secondPlayerType = element.condition
                }
            })
            if (!firstPlayerName || !secondPlayerName) {
                throw new Error(`Invalid entered name/s.`)
            }
            if (firstPlayerType != secondPlayerType) {
                throw new Error(`Choose players with equal condition.`)
            }

            for (let i = 0; i < this.listOfParticipants.length; i++) {
                if (this.listOfParticipants[i].name == participant1) {
                    for (let j = 0; j < this.listOfParticipants.length; j++) {
                        if (this.listOfParticipants[j].name == participant2) {
                            if (this.listOfParticipants[i].power > this.listOfParticipants[j].power) {
                                this.listOfParticipants[i].wins += 1
                                return `The ${this.listOfParticipants[i].name} is winner in the game ${typeOfGame}.`
                            } else if (this.listOfParticipants[i].power < this.listOfParticipants[j].power) {
                                this.listOfParticipants[j].wins += 1
                                return `The ${this.listOfParticipants[j].name} is winner in the game ${typeOfGame}.`

                            } else {
                                return `There is no winner.`
                            }

                        }
                    }
                }
            }
        }
    }
    toString() {
        let result = []
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)

        // let sortedList = this.listOfParticipants.slice(0)
        // sortedList.sort(function (a, b) {
        //     return a.wins - b.wins
        // })

        this.listOfParticipants.sort((a, b) => b.wins - a.wins)
        this.listOfParticipants.forEach(e => {
            result.push(`${e.name} - ${e.condition} - ${e.power} - ${e.wins}`)
        })
        return result.join('\n')

    }




}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());


