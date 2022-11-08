import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Test from './components/Test';
import Calculator from './components/calculator/Calculator';
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from './components/DataTables';
import TableChakra from './components/TableChakra';
import { Box, Divider, Text, Button } from '@chakra-ui/react'

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
			<Calculator />


			{/* <Test /> */}
			<Box
				borderRadius="10px"
				boxShadow='base' p='6' rounded='md' bg='white'
			>
				<Text
					p="20px"
					fontWeight="700"
					textAlign="left"
				>
					Members
				</Text>
				{/* <DataTable columns={columns} data={data} /> */}
				<Divider />
				<TableChakra />
			</Box>
		</div>
	)
}

export default App
