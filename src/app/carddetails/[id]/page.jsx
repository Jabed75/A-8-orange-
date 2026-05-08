import Image from 'next/image';
import { notFound } from 'next/navigation';

const PhotoDetailsPage = async ({ params }) => {
    // 1. Await params properly
    const { id } = await params;

    // 2. Fetch the data
    const res = await fetch('https://a-8-orange-kawp.vercel.app/data.json', {
        cache:'no-store'
    });
    
    if (!res.ok) return <div>Failed to load data</div>;

    const photos = await res.json();
    
    // 3. Find the specific photo
    const photo = photos.find(p => p.id.toString() === id);

    // 4. Handle "Not Found" cases gracefully
    if (!photo) {
        notFound(); 
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6 md:p-12 flex justify-center items-center">
            {/* Card Container */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 max-w-sm w-full transition-all duration-300 hover:shadow-2xl hover:border-gray-300">
                
                {/* Small Image Container (Top Left/Center) */}
                <div className="relative w-100 h-70 mb-6 rounded-2xl overflow-hidden border-2 border-gray-100 shadow-inner">
                    <Image 
                        src={photo.image || "/placeholder.jpg"} 
                        fill 
                        alt={photo.title || "Photo detail"} 
                        className="object-cover"
                        priority 
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-2 leading-tight tracking-tight">
                        {photo.title}
                    </h2>
                    
                    <p className="text-sm text-gray-600 mb-6">
                        by <span className="font-semibold text-gray-700">{photo.instructor}</span>
                    </p>
            
                    {/* Rating Section */}
                    <div className="mt-auto flex items-center justify-between gap-2 text-xl font-bold text-gray-900 border-t pt-4 border-gray-100">
                        <div className="flex items-center gap-1.5">
                            <span>{photo.rating.toFixed(1)}</span>
                            <span className="text-yellow-500 text-2xl">★</span>
                        </div>
                        {/* Excellence Badge */}
                        <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Excellence
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoDetailsPage;