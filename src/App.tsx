import './App.css'
import {WidgetsProvider} from "@sitecore-search/react";
import GeoSearchResultsWidget from "./widgets/GeoSearchResults";
import { createTheme } from '@sitecore-search/ui';
import {useState} from "react";
function App() {
    const [lat, setLat] = useState<number | undefined>(undefined);
    const [lon, setLon] = useState<number | undefined>(undefined);
    const DISCOVER_CONFIG = {
        env: import.meta.env.VITE_SEARCH_ENV,
        customerKey: import.meta.env.VITE_SEARCH_CUSTOMER_KEY,
        apiKey: import.meta.env.VITE_SEARCH_API_KEY,
    };
    navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
    });
    const { style } = createTheme({});
  return (
    <>
      <div style={style}>
          <WidgetsProvider
              env={DISCOVER_CONFIG.env}
              customerKey={DISCOVER_CONFIG.customerKey}
              apiKey={DISCOVER_CONFIG.apiKey}
              publicSuffix={true}
          >
              <GeoSearchResultsWidget rfkId={"rfkid_7"} defaultLat={lat} defaultLon={lon} />
          </WidgetsProvider>
        </div>
    </>
  )
}

export default App
