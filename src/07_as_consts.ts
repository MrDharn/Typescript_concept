const ROLES = ['admin', 'user', 'operator'] as const

type Role = (typeof ROLES)[number]

function setRole(r: Role){
    console.log(r)
}

setRole('user')