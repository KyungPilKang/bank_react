import {useState} from "react";
import "./AccountInfo.css"
import Swal from 'sweetalert2';

function AccountInfo(){
    const accstr = '{"id":1001,"name":"park","balance":200000,"grade":"VIP"}';
    const acc = JSON.parse(accstr);
    const[inputs,setInputs]=useState({
        id:"",
    });
    const[isHide,setIsHide]=useState(true)
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
        setInputs(values=>({...values, [name]:value}));
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsHide(false);
        sweetalert("info", "조회가 완료되었습니다", "계좌정보를 확인하세요");
    };
    return(
    <div className="container mt-3">
        <h5 className='title'>계좌 조회</h5>
        <form onSubmit={handleSubmit}>
            <div hidden={!isHide}>
            <div className="input-group mb-2">
                <span className="input-group-text title">계좌번호</span>
                <input type="text" className="form-control" name="id" value={inputs.id} onChange={handleChange}/>
            </div>
            <div className="mb-2 d-grid">
                <input type="submit" className="btn btn-primary btn-block" value='계좌조회'/>
            </div>
            </div>
            <div hidden={isHide}>
            <div className="input-group mb-2">
                <span className="input-group-text title">계좌번호</span>
                <input type="text" className="form-control" value={acc.id} disabled/><br/>
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text title">이름</span>
                <input type="text" className="form-control" value={acc.name} disabled/>
            </div>        
            <div className="input-group mb-2">
                <span className="input-group-text title">잔액</span>
                <input type="text" className="form-control" value={acc.balance} disabled/>
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text title">종류</span>
                <input type="text" className="form-control" value={(acc.grade=="null")? "일반계좌":"특수계좌"} disabled/>
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text title">등급</span>
                <input type="text" className="form-control" value={acc.grade} disabled/>
            </div>
            </div>
        </form>
    </div>
    );
}
export default AccountInfo;
