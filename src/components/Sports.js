import React, {useContext, useEffect} from 'react';
import Card from './Card';
import { NewsContext } from '../context/NewsContext';


const Sports = () => {
    const {newsData, getData, setSearch} = useContext(NewsContext);

    useEffect(() => {
        setSearch("sports");
        getData("sports");
    }, [getData, setSearch]);

  return (
    <div>
        <h2>Sports</h2>
        <Card data={newsData} />
    </div>
  )
}

export default Sports;