/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Account from "../../modules/account/Account";

const AccountPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/account/main')
  }, []);

  return (
    <section>
      <Account />
    </section>
  )
};

export default AccountPage;