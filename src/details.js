const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=1a11bd55cc8f9c')

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to get the current location')
    }
}

export { getLocation }