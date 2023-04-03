import Logo from "../../assets/images/santaCDA.png";
import Camellia from "../../assets/images/camellia23.jpg";
import TurkeyShoot from "../../assets/images/turkeyShoot.jpg";
import StocktonRB from "../../assets/images/stocktonRB.jpg";

export default function Homepage() {
  return (
    <>
      <div id="mainLogo">
        <img src={Logo} alt="Santa Cruz Dart League Logo" className="w-25" />
      </div>
      <div id="upcomingEvents" className="text-center">
        {/* <h3 class="text-cente">Upcoming Events</h3> */}
        <img src={Camellia} alt="Camellia Classic Flyer" className="w-25" />
        <img
          src={TurkeyShoot}
          alt="Santa Cruz Turkey Shoot Flyer"
          id="mobile"
          className="w-25"
        />
        <img
          src={StocktonRB}
          alt="The Riverboat Flyer"
          id="mobile"
          className="w-25"
        />
      </div>
      <div className="container mt-4 mb-4">
        <div className="container" id="cards-2022">
          <div className="card" id="card-22">
            <div className="card-header text-center">
              <h3>Fall 2022 A League</h3>
            </div>
            <div className="card-body text-center">
              <h4>Dartvernugen</h4>
              <h5>Champions</h5>
              <h6>Captain: Darin Heath</h6>
              <hr />
              <h4>Trip-n-Dubs</h4>
              <h5>Regular Season Best Record</h5>
              <h6>Captain: Kris MacKellar</h6>
            </div>
          </div>
          <div className="card" id="card-22">
            <div className="card-header text-center">
              <h3>Fall 2022 B League</h3>
            </div>
            <div className="card-body text-center">
              <h4>Bulls Deep</h4>
              <h5>Champions</h5>
              <h6>Captain: Richard Mundy</h6>
              <hr />
              <h4>Bulls Deep</h4>
              <h5>Regular Season Best Record</h5>
              <h6>Captain: Richard Mundy</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
