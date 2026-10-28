import React from 'react';
import { Link } from 'gatsby';

const LocationMarker = (props) => {
  const [showPopup, setShowPopup] = React.useState(false);
  const handleClick = () => {
    setShowPopup(true);
    props.onMarkerClick(props);
  };

  const markerStyle = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    height: '50px',
    transform: 'translate(-50%, -100%)',
  };

  return (
    <div>
      {showPopup && props.id === props.currentMarker && (
        <div className="down-arrow-marker">
          <div className="gm-style popup-styles">
            <div
              className="popup-close"
              onClick={() => {
                setShowPopup(false);
              }}
            >
              x
            </div>
            <div className="infoWindow">
              <h2>{props.location}</h2>
              <div className="infoWindow-left">
                {props.address1}
                <br />
                {props.city + ', ' + props.province + ', ' + props.postalCode}
                <br />
                <br />
                <h3>Contact</h3>
                <a
                  className="popup-anchor"
                  href={`tel:${props.phone}`}
                  tabindex="0"
                >
                  {props.phone}
                </a>
                <br />
                <a
                  className="popup-anchor"
                  href={`mailto:${props.email}?subject=La Ronge Contact Request`}
                >
                  {props.email}
                </a>
              </div>
              <div className="infoWindow-right">
                <h3>Branch Manager</h3>
                {props.branchManager}
                <br />
                <br />
                <h3>Branch Hours</h3>
                {props.branchHours}
                <br />
                <Link
                  className="popup-anchor"
                  to={`/locations/${props.urlSlug}`}
                >
                  View Service Areas
                </Link>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      )}

      <img style={markerStyle} src={props.src} onClick={handleClick} />
    </div>
  );
};

export default LocationMarker;
