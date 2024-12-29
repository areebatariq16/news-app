import React, {useContext, useEffect} from 'react';
import Card from './Card';
import { NewsContext } from '../context/NewsContext';


const Health = () => {
    const {newsData, getData, setSearch} = useContext(NewsContext);

    useEffect(() => {
        setSearch("health");
        getData("health");
    }, [getData, setSearch]);

  return (
    <div>
        <h2>Health</h2>
        <Card data={newsData} />
    </div>
  )
}

export default Health;