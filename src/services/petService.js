const BASE_URL=`${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`  // import to be able to access variable for use in all fetch


export const index = async () => {
    try {
        const res = await fetch(BASE_URL) // make request to base URL using fetch
        return res.json() // to resolve response need to invoke json
    } catch (err) {
        console.log(err)
    }
}




// pet service returns JSON of whats at base URL /pets -- making request to localhoost3000/pets- make request to various routes
// back end /pets has index so it returns arrary in server

// export { // creating an object with key and value of the function {index: index}
//     index
// }


// or you can put export before variable declaration
// this is called a name export

//default export is differet - instead of exproting an object of key value pairs, by default its exporting whole function so you can import it as somethingelse from
// importing name is destricted { }

export const create = async (petData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(petData)
        } ) // specfiy the type of content we're sending

        return res.json()

    } catch (err) {
        console.log(err)
    }

}


export const update = async (petData, id) => {
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(petData)
        } ) // specfiy the type of content we're sending

        return res.json()
    } catch (err) {
        console.log(err)
    }
}


export const deletePet = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        } )
        return res.json()
        } catch (err) {
        console.log(err)
    }

}
