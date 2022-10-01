import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Test from './components/Test';
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from './components/DataTables';

type UnitConversion = {
	fromUnit: string;
	toUnit: string;
	factor: number;
};

const data: UnitConversion[] = [
	{
		fromUnit: "inches",
		toUnit: "millimetres (mm)",
		factor: 25.4
	},
	{
		fromUnit: "feet",
		toUnit: "centimetres (cm)",
		factor: 30.48
	},
	{
		fromUnit: "yards",
		toUnit: "metres (m)",
		factor: 0.91444
	}
];

const columnHelper = createColumnHelper<UnitConversion>();

const columns = [
	columnHelper.accessor("fromUnit", {
		cell: (info) => info.getValue(),
		header: "To convert"
	}),
	columnHelper.accessor("toUnit", {
		cell: (info) => info.getValue(),
		header: "Into"
	}),
	columnHelper.accessor("factor", {
		cell: (info) => info.getValue(),
		header: "Multiply by",
		meta: {
			isNumeric: true
		}
	})
];

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>


			<Test />

			<DataTable columns={columns} data={data} />
		</div>
	)
}

export default App
