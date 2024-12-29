import React, {useContext, useEffect} from 'react';
import Card from './Card';
import { NewsContext } from '../context/NewsContext';


const Politics = () => {
    const {newsData, getData, setSearch} = useContext(NewsContext);

    useEffect(() => {
        setSearch("politics");
        getData("politics");
    }, [getData, setSearch]);

  return (
    <div>
        <h2>Politics</h2>
        <Card data={newsData} />
    </div>
  )
}

export default Politics;