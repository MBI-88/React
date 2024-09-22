import React from 'react' 
import GeoUI from '../GeoUI/GeoUI.tsx'

// Container component

const GeoCont = () => {
    const [latitude,setLatitude] = React.useState<number | null>(null)
    const [longitude,setLongitude] = React.useState<number | null>(null)
    const [loading,setLoading] = React.useState<boolean>(true)

    const handleGeo = ({coords:{latitude,longitude}}:{coords:{latitude:number;longitude:number}}) => {
        setLatitude(latitude)
        setLongitude(longitude)
        setTimeout(()=> setLoading(false),1000)
    }

    React.useEffect(() => {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(handleGeo)
        }
    },[])

    return (
        <article>
            {loading ? (<p>Loading...</p>):(
                <GeoUI latitude={latitude} longitude={longitude} />
            )}
        </article>
    )
}

export default GeoCont