import { useState } from "react";
import './Withdraw.css';
import Swal from 'sweetalert2';

function Withdraw(){
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
    let withdrawedBalance=20000;
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsHide(false);
        sweetalert("success", "출금이 완료되었습니다.", "잔액을 확인하세요");
    };
    return(
        <div className="container mt-3">
        <h5 className='title'>출 금</h5>
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-2">
                <span className="input-group-text title">계좌번호</span>
                <input type="text" className="form-control" name="id" onChange={handleChange}/><br/>
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text title">출금액</span>
                <input type="text" className="form-control" name="balance" onChange={handleChange}/>
            </div>
            <div className="input-group mb-2 d-grid">
                <input type="submit" className="btn btn-primary btn-block" value='출금'/>
            </div>
            <div className="input-group mb-2" name='result' hidden={isHide}>
                <span className="input-group-text title">잔액</span>
                <input type="text" className="form-control" name="balance2" value={withdrawedBalance-(+inputs.balance)} disabled/>
            </div>            
        </form>
        </div>
    );
}
export default Withdraw;