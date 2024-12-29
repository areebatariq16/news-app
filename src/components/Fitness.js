import React, {useContext, useEffect} from 'react';
import Card from './Card';
import { NewsContext } from '../context/NewsContext';


const Fitness = () => {
    const {newsData, getData, setSearch} = useContext(NewsContext);

    useEffect(() => {
        setSearch("fitness");
        getData("fitness");
    }, [getData, setSearch]);

  return (
    <div>
        <h2>Fitness</h2>
        <Card data={newsData} />
    </div>
  )
}

export default Fitness;