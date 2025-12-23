import LineGraph from "../components/LineGraph";
import BarGraph from "../components/BarGraph";
export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-100 p-6 rounded-lg shadow">

        <h3 className="text-xl font-bold">Welcome</h3>
        <p className="text-gray-500 mt-1">
          Simple Next.js dashboard starter with graphs.
        </p>
      </div>
          
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LineGraph />
        <BarGraph />
      </div>
    </div>
  );
}