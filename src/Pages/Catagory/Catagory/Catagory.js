import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Catagory = () => {

    const catagorynews=useLoaderData()
    return (
        <div>
            {/* <h2>Total Newa : {news.length}</h2> */}
        {
            catagorynews.map(news=><NewsSummaryCard
                key={news._id}
                news={news}
            ></NewsSummaryCard>)

        }

        </div>
    );
};

export default Catagory;