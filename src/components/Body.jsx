import { useEffect, useState } from "react"

const Body = () => {
    const [map, setMap] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_API_KEY}&q=Space+Needle,Seattle+WA`)
            .then(response => response.json())
            .then((jsonifiedResponse) => {
                setMap(jsonifiedResponse.results)
                setIsLoaded(true)
            })
            .catch((error) => {
                setError(error)
                setIsLoaded(true)
            });
    }, [])

    return (
        <iframe
            title="Google Maps"
            width="450"
            height="250"
            frameBorder="0"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/MAP_MODE?key=${map}&q=Space+Needle,Seattle+WA`}
            allowFullScreen
        ></iframe>
    )
}

export default Body;