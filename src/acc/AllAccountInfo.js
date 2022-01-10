import {useState} from "react";
import "./AllAccountInfo.css";
import Swal from 'sweetalert2';

function AllAccountInfo(){
    const accstr = ['{"id":1001,"name":"hong","balance":100000,"grade":null}',
    '{"id":1002,"name":"park","balance":200000,"grade":"VIP"}',
    '{"id":1003,"name":"song","balance":300000,"grade":"Gold"}'];
    const acc=[];
    for(let temp of accstr){
        acc.push(JSON.parse(temp));
    }
    const[isHide,setIsHide]=useState(true);
    const[isHide2,setIsHide2]=useState(false);
    const[cnt,setCnt]=useState(0);
    const sweetalert=(icon,title,contents)=>{
        Swal.fire({
            icon: icon,
            title: title,
            text: contents,
            confirmButtonText: "확인"
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        sweetalert("info", "조회를 시작합니다", "확인버튼을 누르세요");
        setIsHide(false);
    };
    const handleClick=()=>{
        if(cnt>=2){
            sweetalert("success", "조회가 완료되었습니다", "마지막 계좌입니다");
            setIsHide2(true);
            return;
        }
        setCnt(cnt+1);
    }
    return(
    <div className="container mt-3">
        <form onSubmit={handleSubmit}>
            <div hidden={!isHide}>
            <h5 className='title'>전체 계좌 조회</h5>
            <div className="mb-2 d-grid">
                <input type="submit" className="btn btn-primary btn-block" value='전체조회'/>
            </div>
            </div>
            <div hidden={isHide}>
            <h5 className='title'>{cnt+1}번 계좌 조회</h5>
            <div className="input-group mb-2">
                <span className="input-group-text title">계좌번호</span>
                <input type="text" className="form-control" value={acc[cnt].id} disabled/><br/>
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text title">이름</span>
                <input type="text" className="form-control" value={acc[cnt].name} disabled/>
            </div>        
            <div className="input-group mb-2">
                <span className="input-group-text title">잔액</span>
                <input type="text" className="form-control" value={acc[cnt].balance} disabled/>
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text title">종류</span>
                <input type="text" className="form-control" value={(acc[cnt].grade==null)? "일반계좌":"특수계좌"} disabled/>
            </div>
            <div className="input-group mb-2">
                <span className="input-group-text title">등급</span>
                <input type="text" className="form-control" value={(acc[cnt].grade==null)? "null":acc[cnt].grade} disabled/>
            </div>
            </div>
            <div hidden={(cnt==0)? isHide:isHide2}>
            <div className="mb-2 d-grid">
                <input type="button" className="btn btn-primary btn-block" value='다음계좌' onClick={handleClick}/>
            </div>
            </div>
        </form>
    </div>
    );
}
export default AllAccountInfo;
