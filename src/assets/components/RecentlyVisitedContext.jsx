import React, {createContext, useContext, useState} from 'react'

const RecentlyVisitedContext = createContext();

export const RecentlyVisitedProvider = ({ children }) => {
  const [recentlyVisitedArtist, setRecentlyVisitedArtist] = useState(null);

  return (
    <RecentlyVisitedContext.Provider value={{ recentlyVisitedArtist, setRecentlyVisitedArtist }}>
      {children}
    </RecentlyVisitedContext.Provider>
  );
};

export const useRecentlyVisited = () => {
  return useContext(RecentlyVisitedContext);
};