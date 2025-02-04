
/*
El Elite Fitness Center es un gimnasio boutique ubicado en Palo Alto, California, que ofrece membresías por $150 al mes.
Opera de 6 AM a 10 PM, emplea a 10 entrenadores certificados
y cuenta con comodidades como sauna, piscina y clases grupales.
*/


const gymName = 'The Elite Fitness Center'
const gymType = 'boutique'

const location = 'Palo Alto, California'

const openingTime = 6
const closingTime = 22

const currency = '$'
const membershipPeriod = 'monthly'
const membershipPriceInDollars = 150

const numberOfTrainers = 10

const amenity1 = 'sauna'
const amenity2 = 'pool'
const amenity3 = 'group classes'

console.log(`
    Gym: ${gymName} (${gymType})\n
    Location: ${location}\n
    Price: ${currency}${membershipPriceInDollars}/${membershipPeriod}\n
    Time: ${openingTime}:00AM-${closingTime-12}:00PM\n 
    Team: ${numberOfTrainers} certified trainers\n
    Amenities: ${amenity1},${amenity2},${amenity3}
    `)
    