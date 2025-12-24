import Loading from '@/components/ui/Loading';
import React from 'react';

const BlogsLoadingPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <Loading></Loading>
        </div>
    );
};

export default BlogsLoadingPage;