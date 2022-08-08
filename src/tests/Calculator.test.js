import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    const buttonAdd = container.getByTestId('operator-add');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', ()  => {
    const button7 = container.getByTestId('number7');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply 3 by 5 and get 15', ()  => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', ()  => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const buttonDivide = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

 it('should concatenate multiple number button clicks', () => {
    const button3 = container.getByTestId('number3');
    const button8 = container.getByTestId('number8');
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(button8);
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('387');
 })

 it('should chain multiple operations together', () => {
    const button3 = container.getByTestId('number3');
    const button2 = container.getByTestId('number2');
    const button4 = container.getByTestId('number4');
    const button8 = container.getByTestId('number8');
    const buttonDivide = container.getByTestId('operator-divide');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(button2); 
    fireEvent.click(buttonDivide);
    fireEvent.click(button2);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonAdd);
    fireEvent.click(button8);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('20');
 })

 it('should clear the running total without affecting the calculation', () => {
    const button6 = container.getByTestId('number6');
    const button5 = container.getByTestId('number5');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonClear = container.getByTestId('clear');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button6);
    fireEvent.click(buttonAdd); 
    fireEvent.click(button6);
    fireEvent.click(buttonAdd);
    fireEvent.click(button5);
    fireEvent.click(buttonClear);
    fireEvent.click(button6);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('18');
 })

})
