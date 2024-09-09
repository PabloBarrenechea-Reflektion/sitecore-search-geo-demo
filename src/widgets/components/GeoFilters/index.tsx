const GeoFilters = ({
  geoValues,
  geoChangeHandler,
  removeHandler,
}: {
  geoValues: Array<any>;
  geoChangeHandler: any;
  removeHandler: any;
}) => {
  return (
    <div className="mb-4">
      {geoValues.map((geoValue, index) => (
        <div className="w-full flex justify-between mt-2">
          <div>
            <label>Distance: </label>
            <input
              className="input"
              name="distance"
              value={geoValue.distance}
              onChange={(e) => geoChangeHandler(e, "distance", index)}
            />
          </div>
          <div>
            <label>Latitude: </label>
            <input
              className="input"
              name="lat"
              value={geoValue.lat}
              onChange={(e) => geoChangeHandler(e, "lat", index)}
            />
          </div>
          <div>
            <label>Longitude: </label>
            <input
              className="input"
              name="lon"
              value={geoValue.lon}
              onChange={(e) => geoChangeHandler(e, "lon", index)}
            />
          </div>
          <div>
            <button className="btn" onClick={() => removeHandler(index)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GeoFilters;
