const url = "https://evening-cliffs-15769.herokuapp.com"

export const fetchAllUsers = () => {
    return fetch(`${url}/users`, {
        method: 'GET'
    })
        .then(response => response.json())
}

export const fetchUserById = (userId) => {

    return fetch(`${url}/users/${userId}`, {
        method: 'GET'
    })
        .then(response => response.json())


}

export const updateUser = (user) => {
    return fetch(`${url}/users/${user.id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

export const deleteUser = (id) => {
    return fetch(`${url}/users/${id}`, {
        method: 'DELETE'
    }).then(response => response)
}

export const createUser = (user) => {
    return fetch(`${url}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const login = (user) =>
    fetch(`${url}/users/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const get_events_for_user = (userId) =>
    fetch(`${url}/users/${userId}/events`, {
        method: "GET",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const get_friends = (id) =>{
   return fetch(`${url}/users/${id}/friends`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}
export default {
    fetchAllUsers,
    fetchUserById,
    updateUser,
    deleteUser,
    createUser,login,get_friends
}
