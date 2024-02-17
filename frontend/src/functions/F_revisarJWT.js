export async function revisarJWT(){
    var token = localStorage.getItem("token")
    return token
}