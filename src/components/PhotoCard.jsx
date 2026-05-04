import { Button, Card } from "@heroui/react";
import Image from 'next/image';
import Link from "next/link";

const PhotoCard = ({ photo }) => {
    return (
        <Card className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-all flex flex-col h-full">
           
            <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-xl">
                <Image 
                    src={photo.image || ""} 
                    fill 
                    alt={photo?.title || "img"} 
                    className="object-cover" 
                />
            </div>

            
            <div className="flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
                    {photo.title}
                </h2>
                
                <p className="text-sm text-gray-500 mb-3">
                    {photo.instructor}
                </p>

                <div className="mt-auto flex items-center gap-1 font-bold text-gray-800">
                    <span>{photo.rating}</span>
                    <span className="text-yellow-500">★</span>
                </div>
            </div>
            <Link href={`/carddetails/${photo.id}`}><Button className={'w-full'}>View Details</Button></Link>
        </Card>
    );
};

export default PhotoCard;