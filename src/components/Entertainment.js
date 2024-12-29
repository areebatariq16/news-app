import React, {useContext, useEffect} from 'react';
import Card from './Card';
import { NewsContext } from '../context/NewsContext';


const Entertainment = () => {
    const {newsData, getData, setSearch} = useContext(NewsContext);

    useEffect(() => {
        setSearch("entertainment");
        getData("entertainment");
    }, [getData, setSearch]);

  return (
    <div>
        <h2>Entertainment</h2>
        <Card data={newsData} />
    </div>
  )
}

export default Entertainment;