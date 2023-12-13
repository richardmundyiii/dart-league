export default function HistoricalPage() {
  return (
    <>
      <main>
        <h1>Historical Stats</h1>
        <section>
          <table className="table table-striped p-3">
            <thead className="text-center">Historical Winners</thead>
            <tbody>
              <tr>
                <th>Year</th>
                <th>Team</th>
                <th>Venue</th>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
