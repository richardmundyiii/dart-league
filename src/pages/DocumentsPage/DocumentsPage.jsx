import "./DocumentsPage.css";
import HighlightsSheet from "../../assets/images/highlights.png";
import ASheet from "../../assets/images/divisionA.png";
import BSheet from "../../assets/images/divisionB.png";
import DrinkSheet from "../../assets/images/DrinkSheet.png";

export default function DocumentsPage() {
  return (
    <>
      <main className="document-page">
        <section className="docu-container">
          <section className="card docu-card">
            <section className="card-header">
              <h2>A League Score Sheet</h2>
            </section>
            <section className="card-body" id="doc-body">
              <a href={`${process.env.PUBLIC_URL}/ScoreA.pdf`}>
                <img src={ASheet} alt="A League Scoresheet" />
              </a>
              <button className="btn btn-success">
                <a href={`${process.env.PUBLIC_URL}/ScoreA.pdf`} download>
                  Download
                </a>
              </button>
            </section>
          </section>
          <section className="card docu-card">
            <section className="card-header">
              <h2>B League Score Sheet</h2>
            </section>
            <section className="card-body" id="doc-body">
              <a href={`${process.env.PUBLIC_URL}/ScoreB.pdf`}>
                <img src={BSheet} alt="B League Scoresheet" />
              </a>
              <button className="btn btn-success">
                <a href={`${process.env.PUBLIC_URL}/ScoreB.pdf`} download>
                  Download
                </a>
              </button>
            </section>
          </section>
          <section className="card docu-card">
            <section className="card-header">
              <h2>Highlists Sheet</h2>
            </section>
            <section className="card-body" id="doc-body">
              <a href={`${process.env.PUBLIC_URL}/Highlights.pdf`}>
                <img src={HighlightsSheet} alt="Highlights Scoresheet" />
              </a>
              <button className="btn btn-success">
                <a href={`${process.env.PUBLIC_URL}/Highlights.pdf`} download>
                  Download
                </a>
              </button>
            </section>
          </section>
          <section className="card docu-card">
            <section className="card-header">
              <h2>Drink Sheet</h2>
            </section>
            <section className="card-body" id="doc-body">
              <a href={`${process.env.PUBLIC_URL}/DrinkSheet.pdf`}>
                <img src={DrinkSheet} alt="Drink Sheet" />
              </a>
              <button className="btn btn-success">
                <a href={`${process.env.PUBLIC_URL}/DrinkSheet.pdf`} download>
                  Download
                </a>
              </button>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
