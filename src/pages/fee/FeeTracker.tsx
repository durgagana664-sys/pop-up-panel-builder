import React, { useMemo, useState } from "react";
import { format } from "date-fns";

type Tx = {
  id: string;
  student: string;
  class: string;
  amount: number;
  date: string; // ISO
  method: string;
  status: "Success" | "Pending" | "Failed";
};

const MOCK_TX: Tx[] = [
  { id: "T1001", student: "Rahul Kumar", class: "5A", amount: 1500, date: "2025-10-01", method: "Online", status: "Success" },
  { id: "T1002", student: "Sita Devi", class: "6B", amount: 2000, date: "2025-10-05", method: "Cheque", status: "Pending" },
  { id: "T1003", student: "Aman Gupta", class: "7A", amount: 1800, date: "2025-09-28", method: "Cash", status: "Success" },
  { id: "T1004", student: "Meena Sharma", class: "5A", amount: 1500, date: "2025-10-10", method: "Online", status: "Failed" },
];

export default function FeeTracker() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | Tx["status"]>("All");

  const filtered = useMemo(() => {
    return MOCK_TX.filter((t) => {
      if (statusFilter !== "All" && t.status !== statusFilter) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        t.id.toLowerCase().includes(q) ||
        t.student.toLowerCase().includes(q) ||
        t.class.toLowerCase().includes(q) ||
        t.method.toLowerCase().includes(q)
      );
    });
  }, [query, statusFilter]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Fee Tracker — Transaction History</h1>

      <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by ID, student, class or method"
          className="border rounded px-3 py-2 w-full sm:w-72"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as any)}
          className="border rounded px-3 py-2"
        >
          <option value="All">All Statuses</option>
          <option value="Success">Success</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      <div className="overflow-auto bg-card border rounded">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Tx ID</th>
              <th className="px-4 py-2 text-left">Student</th>
              <th className="px-4 py-2 text-left">Class</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Method</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-2">{t.id}</td>
                <td className="px-4 py-2">{t.student}</td>
                <td className="px-4 py-2">{t.class}</td>
                <td className="px-4 py-2">₹{t.amount.toFixed(2)}</td>
                <td className="px-4 py-2">{format(new Date(t.date), "dd MMM yyyy")}</td>
                <td className="px-4 py-2">{t.method}</td>
                <td className="px-4 py-2">
                  <span className={
                    `inline-block px-2 py-1 rounded text-sm font-medium ` +
                    (t.status === "Success"
                      ? "bg-green-100 text-green-800"
                      : t.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800")
                  }>{t.status}</span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-6 text-center text-muted">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
