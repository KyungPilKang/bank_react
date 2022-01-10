import Swal from 'sweetalert2';

function Home(){
    const sweetalert=(icon,title,contents)=>{
        Swal.fire({
            icon: icon,
            title: title,
            text: contents,
            showCancelButton: true,
            confirmButtonText: "확인",
            cancelButtonText: "취소"
        })
    }
    sweetalert("warning", "계좌생성부터 진행하세요", "상단의 메뉴바를 확인하세요");
    return(
        <>
        </>
    );
}
export default Home;