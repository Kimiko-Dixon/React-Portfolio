export function validEmail(name){
    const pattern = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/
    if(name.match(pattern)){
        return true
    }
    return false
}