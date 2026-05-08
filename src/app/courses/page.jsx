import PhotoCard from '@/components/PhotoCard';

const AllCards = async () => {
    
    const res = await fetch('https://a-8-orange-kawp.vercel.app/data.json', { cache: 'no-store' });
    const photos = await res.json();

    return (
        <div className="max-w-7xl mx-auto p-5">
            <h1 className="text-2xl font-bold mb-5 text-center">All Courses</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    photos.map(photo => (
                        <PhotoCard key={photo.id} photo={photo} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllCards;