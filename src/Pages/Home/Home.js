import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {

    const totalnews=useLoaderData();
    return (
        <div>
          

            {
                totalnews.map(news=><NewsSummaryCard
                key={news._id}
                news={news}
                ></NewsSummaryCard>)

            }


        </div>
    );
};

export default Home;