import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
// import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index'

export const Shop = () => {
    const dispatch = useDispatch();
    const balance = useSelector(state => state.amount);
    // const actions = bindActionCreators(actionCreators, dispatch);
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            {/* <button className="btn-primary  " onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
            update Balance
            <button className="btn-primary " onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button> */}
            {/* <button className="btn-primary  " onClick={() => { actions.withdrawMoney(100) }}>-</button>
            update Balance
            <button className="btn-primary " onClick={() => { actions.depositMoney(100) }}>+</button> */}
            <button className="btn-primary mx-2 " onClick={() => { withdrawMoney(100) }}>-</button>
            update Balance ({balance})
            <button className="btn-primary mx-2" onClick={() => { depositMoney(100) }}>+</button>
        </div>
    )
}
