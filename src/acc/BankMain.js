import {BrowserRouter, Routes, Route} from "react-router-dom";
import MakeAccount from './MakeAccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AccountInfo from './AccountInfo';
import AllAccountInfo from './AllAccountInfo';
import Home from "./Home";
import Layout from "./Layout";

function BankMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="makeaccount" element={<MakeAccount />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="accountinfo" element={<AccountInfo />} />
          <Route path="allaccountinfo" element={<AllAccountInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default BankMain;
