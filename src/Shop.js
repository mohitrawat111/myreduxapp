import React from 'react'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index'

export const Shop = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            <button className="btn-primary  " onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
            update Balance
            <button className="btn-primary " onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button>
        </div>
    )
}
