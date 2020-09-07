class Activivity {
    constructor(id, name, type,) {
    }
}

const x = {
    id: 1,
    name: 'Happy Hour - Fiap',
    capital: 'Relacionamento', //enum
    lifeAspect: 'Social e Lazer', //enum
    totalInvest: 4934.0,
    cycleStartDate: '2020-09-01T00:00:00Z',
    cycleEndtDate: '2020-09-09T00:00:00Z',
    cycleQuantity: 4,
    enrollQuantity: 100,
    attendantQuantity: 317,
    percentage: 89.5,
    cycles: [
        {
            cycleNumber: 1,
            attendantQuantity: 317,
            invest: 934.0,
            percentage: 89.5
        },
        {
            cycleNumber: 2,
            attendantQuantity: 317,
            invest: 934.0,
            percentage: 89.5
        },
        {
            cycleNumber: 3,
            attendantQuantity: 317,
            invest: 934.0,
            percentage: 89.5
        },
        {
            cycleNumber: 4,
            attendantQuantity: 317,
            invest: 934.0,
            percentage: 89.5
        }
    ]
}

export default Activivity;
