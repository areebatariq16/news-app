import React, { useContext, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import FormComponent from './FormComponent';
import search_icon from '../assets/search.png';
import { NewsContext } from '../context/NewsContext';

const pageVariants = {
  initial: { opacity: 0, y: -50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: 50 },
};
const pageTransition = {
  type: 'spring',
  stiffness: 50,
};
const Categories = lazy(() => import('./Categories'));

const Newsapp = () => {
  const { search, setSearch, newsData, showForm, setShowForm, getData } = useContext(NewsContext);

  useEffect(() => {
    getData(search);
  }, [search, getData]);

  const handleInput = (e) => setSearch(e.target.value);
  const handleFormOpen = () => setShowForm(true);
  const handleFormClose = () => setShowForm(false);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <header>
        <h1 className='header-title'>HeadlinesHub</h1>
      </header>

      <nav aria-label="Main navigation">
        <div className="search-bar">
          <input type="text" placeholder="Search News" value={search} onChange={handleInput} />
          <button className="search-icon" onClick={() => getData(search)} aria-label="Search">
            <img src={search_icon} alt="Search" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
          </button>
          <button onClick={handleFormOpen}>Subscribe</button>
        </div>
      </nav>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          id="newsletterModal"
          className="modal"
        >
          <div className="modal" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
            <div className="modal-content">
              <span className="close" onClick={handleFormClose} aria-label="Close" role="button" tabIndex="0"></span>
              <FormComponent handleClose={handleFormClose} />
            </div>
          </div>
        </motion.div>
      )}

      <div>
        <p className="head">Stay updated with HeadlinesHub</p>
      </div>

      <Suspense fallback={<div>Loading categories...</div>}>
        <Categories setSearch={setSearch} />
      </Suspense>

      <div>
        <Card data={newsData} />
      </div>
    </motion.div>
  );
};

export default Newsapp;
