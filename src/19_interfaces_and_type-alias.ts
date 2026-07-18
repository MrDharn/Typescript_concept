//interface can be reopened
interface Box1 {
    width: number
}

interface Box1{
    height: number
}

const demonBox: Box1 = {width: 40, height: 500}

// type Box2 = {width: number}
// type Box2 = {height: bnumber}

//type cannot be reopened