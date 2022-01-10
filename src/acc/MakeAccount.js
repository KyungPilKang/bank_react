import { useState } from "react";
import './MakeAccount.css';
import Swal from 'sweetalert2';

function MakeAccount(){
    const[inputs, setInputs]=useState({
        id:"",
        name:"",
        balance:""
    });
    const sweetalert=(icon,title,contents)=>{
        Swal.fire({
            icon: icon,
            title: title,
            text: contents,
            confirmButtonText: "확인"
        })
    }
    const handleChange=(e)=>{
        const name=e.target.name;     
        const value=e.target.value;
        if(name=="type"&&value=="normal"){
            setInputs(values=>({...values, ["grade"]:null}));
        } else if(name=="type"&&value=="special"){    
            setInputs(values=>({...values, ["grade"]:"VIP"}));
        }
        setInputs(values=>({...values, [name]:value}));
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputs.id==""){
            sweetalert("error", "계좌번호 오류", "계좌번호를 입력하세요");
            return;
        }
        if(inputs.name==""){
            sweetalert("error", "이름 오류", "이름을 입력하세요");
            return;
        }
        if(inputs.balance==""){
            sweetalert("error", "입금액 오류", "입금액를 입력하세요");
            return;
        }
        sweetalert("success", "계좌가 생성되었습니다", "이용해주셔서 감사합니다");
        console.log(inputs);
    };
    return(
        <div className="container mt-3">
            <h5 className='title'>계좌 개설</h5>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-2">
                    <span className="input-group-text title">계좌번호</span>
                    <input type="text" className="form-control" name="id" value={inputs.id||""} onChange={handleChange}/><br/>
                </div>
                <div className="input-group mb-2">
                    <span className="input-group-text title">이름</span>
                    <input type="text" className="form-control" name="name" value={inputs.name||""} onChange={handleChange}/>
                </div>
                <div className="input-group mb-2">
                    <span className="input-group-text title">입금액</span>
                    <input type="text" className="form-control" name="balance" value={inputs.balance||""} onChange={handleChange}/>
                </div>
                <div className="input-group mb-2">
                    <span className="input-group-text title">종류</span>
                    <span className="form-control">
                        <input type="radio" name='type' value="normal" onChange={handleChange}/>&nbsp;일반계좌 &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="radio" name='type' value="special" onChange={handleChange}/>&nbsp;특수계좌
                    </span>
                </div>
                <div className="input-group mb-2">
                    <span className="input-group-text title">등급</span>
                    <select className="form-select" name='grade' value={inputs.grade||""} onChange={handleChange} disabled={inputs.type=="normal"}>
                        <option>VIP</option>
                        <option>Gold</option>
                        <option>Silver</option>
                        <option>Normal</option>
                    </select>
                </div>
                <div className="d-grid">
                    <input type="submit" className="btn btn-primary btn-block" value='계좌개설'/>
                </div>
            </form>
        </div>
    );
}
export default MakeAccount;