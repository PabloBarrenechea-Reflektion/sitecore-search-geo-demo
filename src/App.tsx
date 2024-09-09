import "./App.css";
import { WidgetsProvider } from "@sitecore-search/react";
import GeoSearchResultsWidget from "./widgets/GeoSearch";

function App() {
  const DISCOVER_CONFIG = {
    env: import.meta.env.VITE_SEARCH_ENV,
    customerKey: import.meta.env.VITE_SEARCH_CUSTOMER_KEY,
    apiKey: import.meta.env.VITE_SEARCH_API_KEY,
  };

  return (
    <>
      <div>
        <WidgetsProvider
          env={DISCOVER_CONFIG.env}
          customerKey={DISCOVER_CONFIG.customerKey}
          apiKey={DISCOVER_CONFIG.apiKey}
          publicSuffix={true}
        >
          <h1 className="text-md">
            This app shows how to apply multiple Geo filters using AND or OR
            filters
          </h1>
          <GeoSearchResultsWidget rfkId={"rfkid_7"} />
        </WidgetsProvider>
      </div>
    </>
  );
}

export default App;
