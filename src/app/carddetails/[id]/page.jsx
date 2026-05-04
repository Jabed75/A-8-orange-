
const PhotoDetailsPage =async ({params}) => {
    const{id} =await params;
     const res = await fetch('http://localhost:3000/data.json')
    const photos=await res.json()
    const photo= photos.find(p => p.id == id)
    return (
        <div className="border">
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
        </div>
    );
};

export default PhotoDetailsPage;