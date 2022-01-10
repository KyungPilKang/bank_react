import {Outlet, Link} from "react-router-dom";

function Layout(){
    return(
        <>
            <div className="p-5 bg-primary text-white text-center">
            <h1>멀캠은행</h1>
            </div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">홈</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/makeaccount">계좌개설</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/deposit">계좌입금</Link>    
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/withdraw">계좌출금</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/accountinfo">계좌조회</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/allaccountinfo">전체계좌조회</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
export default Layout;