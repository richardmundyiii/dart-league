import Logo from "../../assets/images/santaCDA.png";
export default function Homepage() {
  return (
    <>
      <div id="mainLogo">
        <img src={Logo} alt="Santa Cruz Dart League Logo" class="w-25" />
      </div>
      <div id="upcomingEvents" class="text-center">
        {/* <h3 class="text-cente">Upcoming Events</h3> */}
        <img src="/images/camellia23.jpg" alt="Camellia Classic Flyer" />
        <img
          src="/images/turkeyShoot.jpg"
          alt="Santa Cruz Turkey Shoot Flyer"
          id="mobile"
        />
        <img
          src="/images/stocktonRB.jpg"
          alt="The Riverboat Flyer"
          id="mobile"
        />
      </div>
      <div class="container mt-4 mb-4">
        <div class="container" id="cards-2022">
          <div class="card" id="card-22">
            <div class="card-header text-center">
              <h3>Fall 2022 A League</h3>
            </div>
            <div class="card-body text-center">
              <h4>Dartvernugen</h4>
              <h5>Champions</h5>
              <h7>Captain: Darin Heath</h7>
              <hr />
              <h4>Trip-n-Dubs</h4>
              <h5>Regular Season Best Record</h5>
              <h7>Captain: Kris MacKellar</h7>
            </div>
          </div>
          <div class="card" id="card-22">
            <div class="card-header text-center">
              <h3>Fall 2022 B League</h3>
            </div>
            <div class="card-body text-center">
              <h4>Bulls Deep</h4>
              <h5>Champions</h5>
              <h7>Captain: Richard Mundy</h7>
              <hr />
              <h4>Bulls Deep</h4>
              <h5>Regular Season Best Record</h5>
              <h7>Captain: Richard Mundy</h7>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
