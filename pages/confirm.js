import React,{ useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import RideSelector from './components/RideSelector'
import {useRouter} from 'next/Router'
import Link from 'next/link'


const Confirm = () => {

    const router = useRouter()
    const {pickup, dropoff } = router.query
    const [pickupCoordinates, setPickupCoordinated] = useState([0,0])
    const [dropoffCoordinates, setDropoffCoordinated] = useState([0,0])
    const getPickupCoordinates =(pickup)=>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic2hpdmFua2FyNzciLCJhIjoiY2wyemw3c3BoMDJxcjNicm9kbXZ4NXp4diJ9.DBrcIvAzpWhFPOsbo93FZw",
                limit:1
            })
        
        )
        .then(response=>response.json())
        .then(data=>{
            console.log("pickup")
            setPickupCoordinated(data.features[0].center)
        })
    }

    const getDropOffCoordinates = (dropoff) =>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic2hpdmFua2FyNzciLCJhIjoiY2wyemw3c3BoMDJxcjNicm9kbXZ4NXp4diJ9.DBrcIvAzpWhFPOsbo93FZw",
                limit:1
            })
        
        )
        .then(response=>response.json())
        .then(data=>{
            console.log("dropoff")
            setDropoffCoordinated(data.features[0].center)
        })
    } 

    useEffect(() => {
        getPickupCoordinates(pickup); 
        getDropOffCoordinates(dropoff)
    }, [pickup,dropoff]);
  return (
    <Wrapper>
        <ButtonContainer>
            <Link href="/search">
                <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png'/>
            </Link>
        </ButtonContainer>
        <Map 
            pickupCoordinates = {pickupCoordinates}
            dropoffCoordinates = {dropoffCoordinates}
        />
        <RideContainer>
            <RideSelector
                pickupCoordinates = {pickupCoordinates}
                dropoffCoordinates = {dropoffCoordinates}
            />
            <ConfirmButtonContainer>
                <ConfirmButton>
                    Confirm UberX
                </ConfirmButton>
            </ConfirmButtonContainer>
  
        </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Wrapper = tw.div`
    flex flex-col h-screen
`

const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
    border-t-2
`
const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 py-4 text-center text-xl
`
const ButtonContainer = tw.div`
    rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`
const BackButton = tw.img`
 h-fill object-contain
`