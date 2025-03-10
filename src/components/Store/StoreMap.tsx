'use client';
import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { FiSmartphone, FiMessageSquare, FiMapPin } from 'react-icons/fi';

interface Location {
    lat: number;
    lng: number;
}

const StoreMap = () => {
    const [currentLocation] = useState<Location>({ lat: 59.95, lng: 30.33 });
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const GOOGLE_MAP_LIBRARIES: ("places" | "drawing" | "geometry" | "visualization")[] = ["places"];

    const { isLoaded } = useJsApiLoader({
        libraries: GOOGLE_MAP_LIBRARIES,
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    });

    useEffect(() => {
        if (map) {
            const handleResize = () => {
                google.maps.event.trigger(map, 'resize');
                map.panTo(currentLocation);
            };
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [map, currentLocation]);

    if (!isLoaded) return <div className="text-white p-4">Loading Map...</div>;

    return (
        <div className="w-full lg:w-1/4 hidden xl:block">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-4">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <GoogleMap
                        mapContainerStyle={{ width: '100%', height: '100%' }}
                        center={currentLocation}
                        zoom={15}
                        options={{
                            disableDefaultUI: true,
                            styles: [
                                { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }
                            ]
                        }}
                        onLoad={map => setMap(map)}
                        onUnmount={() => setMap(null)}
                    >
                        <Marker
                            position={currentLocation}
                            icon={{
                                url: "https://img.icons8.com/fluency/48/street-view.png",
                                scaledSize: new window.google.maps.Size(32, 32),
                            }}
                        />
                    </GoogleMap>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3">
                    <button className="w-full flex items-center justify-center gap-1.5 sm:gap-2 
                                     px-2.5 py-1.5 sm:px-3 sm:py-2 
                                     bg-[#20bead] hover:bg-[#1da393] 
                                     text-white rounded-lg 
                                     text-xs sm:text-sm transition-all">
                        <FiSmartphone className="flex-shrink-0 text-sm sm:text-base" />
                        <span className="whitespace-nowrap">Show Phone Number</span>
                    </button>

                    <button className="w-full flex items-center justify-center gap-1.5 sm:gap-2 
                                     px-2.5 py-1.5 sm:px-3 sm:py-2 
                                     bg-green-600 hover:bg-green-700 
                                     text-white rounded-lg 
                                     text-xs sm:text-sm">
                        <FiMessageSquare className="flex-shrink-0 text-sm sm:text-base" />
                        <span className="whitespace-nowrap">WhatsApp Chat</span>
                    </button>
                </div>

                <p className="text-center text-[10px] xs:text-xs text-gray-500">
                    <FiMapPin className="inline mr-1" />
                    Shop #24, Tech Valley
                </p>
            </div>
        </div>
    );
};

export default StoreMap;