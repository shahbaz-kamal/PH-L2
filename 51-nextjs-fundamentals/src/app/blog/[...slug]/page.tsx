import React from 'react';

const CatchAllRoutes = async({params}:{params:Promise<{slug:string[]}>}) => {

    const {slug}=await params

    console.log(slug)
    return (
        <div>
            CatchAllRoutes
        </div>
    );
};

export default CatchAllRoutes;