import { Route, BrowserRouter, Routes } from "react-router-dom";

function Dashboard() {
  return <h1 className="text-2xl font-bold p-4">Dashboard</h1>;
}

function KanbanBoard() {
  return <h1 className="text-2xl font-bold p-4">Kanban Board</h1>;
}

function Analytics() {
  return <h1 className="text-2xl font-bold p-4">Analytics</h1>;
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/kanban" element={<KanbanBoard />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
