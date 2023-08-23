import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import AuthPage from "../AuthPage/AuthPage";
import TeamStandingsPage from "../TeamStandingsPage/TeamStandingsPage";
import TeamDetailPage from "../TeamDetailPage/TeamDetailPage";
import PlayerDetailPage from "../PlayerDetailPage/PlayerDetailPage";
import PlayerStandingsPage from "../PlayerStandingsPage/PlayerStandingsPage";
import NewsPage from "../NewsPage/NewsPage";
import DocumentsPage from "../DocumentsPage/DocumentsPage";
import SponsorsPage from "../SponsorsPage/SponsorsPage";
import HistoricalPage from "../HistoricalPage/HostoricalPage";

export default function PublicPages({ user }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/teamstandings" element={<TeamStandingsPage />} />
        <Route path="/teams/:teamId" element={<TeamDetailPage />} />
        <Route path="/players/:playerId" element={<PlayerDetailPage />} />
        <Route path="/playerstandings" element={<PlayerStandingsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/historical" element={<HistoricalPage />} />
      </Routes>
    </>
  );
}
