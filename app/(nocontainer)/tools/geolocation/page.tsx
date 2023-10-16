'use client';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import AddressesList from './components/AddressesList';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { db } from '@/utils/firebase';
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import { ReadMore } from '@/components/core/buttons/Buttons';
import MiniSpinner from '@/components/effects/MiniSpinner';

interface Location {
    name: string;
    latitude: string;
    longitude: string;
}

const DistanceCalculator = lazy(() => import('./DistanceCalculator'));
const MapDisplay = lazy(() => import('./components/google-long-lat-map'));

const AddressConverter: React.FC = () => {
    const [latitude, setLatitude] = useState<string>('');
    const [longitude, setLongitude] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [locations, setLocations] = useState<Location[]>([]);
    const [showLocations, setShowLocations] = useState<boolean>(false);
    const [showMap, setShowMap] = useState<boolean>(false);
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState(false);

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === process.env.NEXT_PUBLIC_ADMIN_PASSSWORD) {
            setAuth(true);
        } else {
            toast({ title: 'Incorrect password' });
        }
    };

    const convertToLatLong = () => {
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY_NEW;
        const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
        )}&key=${apiKey}`;
        fetch(endpoint)
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'OK') {
                    const location = data.results[0].geometry.location;
                    setLatitude(location.lat.toString());
                    setLongitude(location.lng.toString());
                    toast({
                        title: `Found location: ${location.lat.toString()}, ${location.lng.toString()}`,
                    });
                } else {
                    toast({ title: 'Could not find location' });
                }
            })
            .catch((error) => {
                console.error('An error occurred:', error);
                toast({ title: 'An error occurred.' });
            });
    };

    const saveLocation = async () => {
        const location: Location = {
            name: address,
            latitude,
            longitude,
        };

        try {
            const locationsCollection = collection(db, 'locations');
            await addDoc(locationsCollection, location);
            toast({ title: 'Location saved successfully.' });
        } catch (error) {
            console.error('Error saving location:', error);
            toast({ title: 'An error occurred while saving the location.' });
        }

        const updatedLocations = [...locations, location];
        setLocations(updatedLocations);
        setShowLocations(true);
        setShowMap(true);
    };

    const copyToClipboard = (type: 'latitude' | 'longitude') => {
        const value = type === 'latitude' ? latitude : longitude;
        if (value) {
            navigator.clipboard.writeText(value);
            toast({ title: `${type} copied to clipboard.` });
        }
    };

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const locationsCollection = collection(db, 'locations');
                const querySnapshot = await getDocs(locationsCollection);
                const fetchedLocations: Location[] = [];
                querySnapshot.forEach((doc) => {
                    fetchedLocations.push(doc.data() as Location);
                });
                setLocations(fetchedLocations);
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        };

        fetchLocations();
    }, []);

    return (
        <div className='flex flex-col'>
            <div className='grid my-[80px] gap-4 md:grid-cols-2 lg:grid-cols-4'>
                <Card className='flex flex-col gap-2'>
                    <CardHeader className='flex flex-row items-center justify-between pb-2'>
                        <CardTitle className='text-sm font-medium'>Address</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Input
                            type='text'
                            id='adres'
                            placeholder='Fill in the address'
                            value={address}
                            className='mb-2'
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <span className='flex w-full justify-between'>
                            <span
                                className='text-xs text-muted-foreground'
                                onClick={convertToLatLong}
                            >
                                Get Lat/Long
                            </span>
                            <span
                                className='flex w-full justify-end mt-2 text-xs text-muted-foreground'
                                onClick={saveLocation}
                            >
                                Save location
                            </span>
                        </span>
                    </CardContent>
                </Card>

                <Card className='flex flex-col gap-2'>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                        <CardTitle className='text-sm font-medium'>Latitude</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Input
                            type='text'
                            id='latitude'
                            readOnly
                            value={latitude}
                        />
                        <span
                            className='flex w-full justify-end mt-2 text-xs text-muted-foreground'
                            onClick={() => copyToClipboard('latitude')}
                        >
                            Copy
                        </span>
                    </CardContent>
                </Card>

                <Card className='flex flex-col gap-2 p-8'>

                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                        <CardTitle className='text-sm font-medium'>Longitude</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Input
                            type='text'
                            id='longitude'
                            readOnly
                            value={longitude}
                        />
                        <span
                            className='text-xs text-muted-foreground'
                            onClick={() => copyToClipboard('longitude')}
                        >
                            Copy
                        </span>
                    </CardContent>
                </Card>

                <Card className='flex flex-col gap-2 p-4'>
                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                        <CardTitle className='text-sm font-medium'>Locations</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {!auth && (
                            <div>
                                <p>
                                    You need to enter the correct password to access this feature.
                                </p>
                                <form className='flex flex-col gap-1 onSubmit={handlePasswordSubmit}'>
                                    <Input
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Enter password'
                                    />
                                    <ReadMore>Submit</ReadMore>
                                </form>
                            </div>
                        )}
                        {showLocations && auth && (
                            <div>
                                <AddressesList
                                    locations={locations}
                                    onSelect={(selectedLocation) => {
                                        setLatitude(selectedLocation.latitude);
                                        setLongitude(selectedLocation.longitude);
                                        setAddress(selectedLocation.name);
                                    }}
                                />
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            <Suspense fallback={<div><MiniSpinner /></div>}>
                {showMap && typeof window !== 'undefined' && latitude && longitude && (
                    <MapDisplay
                        latitude={parseFloat(latitude)}
                        longitude={parseFloat(longitude)}
                    />
                )}
                <DistanceCalculator />
            </Suspense>
        </div>
    );
};

export default AddressConverter;
