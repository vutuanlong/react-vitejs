import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { btns, BTN_ACTIONS } from "./btnConfig";
import './calculator.css';
import { effect } from '@chakra-ui/react';
import { cleanup } from '@testing-library/react';
Calculator.propTypes = {

};

function Calculator (props) {
	const btnsRef = useRef(null);
	const expsRef = useRef(null);

	const [expression, setExpression] = useState('');

	useEffect(()=>{
		const btns = Array.from(btnsRef.current.querySelectorAll('button'));
		btns.forEach(e=>e.style.height = e.offsetWidth + 'px');
	}, []);

	const btnClick = (item) => {
		const expDiv = expsRef.current;
		if (item.action === BTN_ACTIONS.THEME) {
			document.body.classList.toggle('dark');
		}
		if (item.action === BTN_ACTIONS.ADD) {
			addAnimSpan(item.display);

			const oper = item.display !== 'x' ? item.display : '*';
			setExpression(expression + oper);
		}
		if (item.action === BTN_ACTIONS.DELETE) {
			expDiv.parentNode.querySelector('div:last-child').innerHTML = '';
			expDiv.innerHTML = '';

			setExpression('');
		}
		if (item.action === BTN_ACTIONS.CALC) {
			if (expression.trim().length <= 0) {
				return;
			}
			expDiv.parentNode.querySelector('div:last-child').remove();
			const cloneNode = expDiv.cloneNode(true);
			expDiv.parentNode.appendChild(cloneNode);

			const transform = `translateY(${-(expDiv.offsetHeight + 10) + 'px'}) scale(0.4)`;
			try {
				let res = eval(expression);

				setExpression(res.toString());

				cloneNode.style.transform = transform;
				expDiv.innerHTML = '';
				addAnimSpan(Math.floor(res * 1000)/1000);
				// setTimeout(() => {
				// 	cloneNode.style.transform = transform;
				// 	expDiv.innerHTML = '';
				// 	addAnimSpan(Math.floor(res * 1000)/1000);
				// }, 200);
			} catch {
				cloneNode.style.transform = transform;
				expDiv.innerHTML = 'Syntax error';
				// setTimeout(() => {
				// 	cloneNode.style.transform = transform;
				// 	expDiv.innerHTML = 'Syntax error';
				// }, 200);
			} finally {
				console.log('calc complete');
			}
		}
	}

	const addAnimSpan = (content) => {
		const expDiv = expsRef.current;
		const span = document.createElement('span');

		span.innerHTML = content;
		expDiv.appendChild(span);
	}

	return (
		<div className='calculator'>
			<div className='calculator__result'>
				<div ref={expsRef} className='calculator__result--exp'>

				</div>
				<div className='calculator__result--exp'></div>
			</div>
			<div ref={btnsRef} className='calculator__btns'>
				{
					btns.map( (item, index) => (
						<button
							key={index}
							className={item.class}
							onClick={() => btnClick(item)}
						>
							{item.display}
						</button>
					) )
				}
			</div>
		</div>
	);
}

export default Calculator;