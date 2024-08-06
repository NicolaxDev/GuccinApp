export async function send(data, isNewUser) {
  const url = isNewUser
    ? "http://localhost:3000/api/users"
    : `http://localhost:3000/api/users/${data.email}`

  try {
    const response = await fetch(url, {
      method: isNewUser ? "POST" : "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    if (response.ok) {
      const jsonResponse = await response.json()
      console.log(isNewUser ? "Usuario creado:" : "Usuario actualizado:", jsonResponse)
    } else {
      console.error("Error al enviar los datos:", response.statusText)
    }
  } catch (error) {
    console.error("Error al enviar los datos:", error)
  }
}

export const fetchUserData = async (email) => {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${email}`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching user data:', error)
    return null
  }
}