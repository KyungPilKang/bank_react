import { useState } from "react";
import './Deposit.css';
import Swal from 'sweetalert2';

function Deposit(){
    const[inputs,setInputs]=useState({
        id:"",
        balance:"",
    });
    const sweetalert=(icon,title,contents)=>{
        Swal.fire({
            icon: icon,
            title: title,
            text: contents,
            confirmButtonText: "확인"
        })
    }
    const[isHide,setIsHide]=useState(true)
    const handleChange=(e)=>{
        const name=e.target.name;     
        const value=e.target.value;
        setInputs(values=>({...values, [name]:value}));
    };
    let depositedBalance=20000;
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsHide(false);
        sweetalert("success", "입금이 완료되었습니다.", "잔액을 확인하세요");
    };
    return(
        <div className="container mt-3">
        <h5 className='title'>입 금</h5>
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-2">
                <span className="input-group-text title">계좌번호</span>
                <input type="text" className="form-control" name="id" onChange={handleChange}/><br/>
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text title">입금액</span>
                <input type="text" className="form-control" name="balance" onChange={handleChange}/>
            </div>
            <div className="input-group mb-2 d-grid">
                <input type="submit" className="btn btn-primary btn-block" value='입금'/>
            </div>
            <div className="input-group mb-2" name='result' hidden={isHide}>
                <span className="input-group-text title">잔액</span>
                <input type="text" className="form-control" name="balance2" value={depositedBalance+(+inputs.balance)} disabled/>
            </div>            
        </form>
        </div>
    );
}
export default Deposit;