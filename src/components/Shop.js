import React from 'react'
import {useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state/index';

const Shop = () => {
    const transactionAdd = () => {
        depositMoney(100);
        var add=document.createElement("li");
        var text = document.createTextNode("Deposited 100 Rs at "+new Date().toLocaleTimeString());
        add.appendChild(text);
        document.getElementById("history").appendChild(add);
    }

    const transactionSub = () => {
        withdrawMoney(100)
        var add=document.createElement("li");
        var text = document.createTextNode("Withdrawn 100 Rs at "+new Date().toLocaleTimeString());
        add.appendChild(text);
        document.getElementById("history").appendChild(add);
    }

    const dispatch = useDispatch();
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators, dispatch);
    return (
        <div>
        <h2>Deposit / Withdraw Money.</h2>
            <button className="btn btn-primary mx-1 my-2" onClick={transactionSub}>-</button>
            Transaction 
            <button className='btn btn-primary mx-1 my-2' onClick={transactionAdd}>+</button>


            <h2 className='my-5'>Transaction History:</h2>
            <ul className='history' id='history'>
            </ul>

        </div>
    )
}

export default Shop