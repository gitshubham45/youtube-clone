import React from 'react';
import { AppContext } from './context/contextApi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import Feed from './components/Feed';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import VideoDetails from './components/VideoDetails';


const App = () => {

    return (
        <AppContext>
            <BrowserRouter>
                <div className='flex  flex-col h-full'>
                    <Header />
                    <Analytics />
                    <Routes>
                        
                        <Route path="/" exact element={ <Feed />} />
                        <Route path="searchResult/:searchQuery" element={<SearchResult />} />
                        <Route path="/video/:id" element={ <VideoDetails />} />
                        

                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    )
}

export default App
