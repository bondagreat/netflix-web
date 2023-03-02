import Footer from '../../layouts/Footer';
import NavBarAccount from '../../layouts/NavBarAccount';

export default function ChangePlan() {
  return (
    <>
      <NavBarAccount />
      <div className="">
        <h1>Change Streaming Plan</h1>
        <button>Package Monthly</button>
        <button>Package 3 Months</button>
      </div>
      <Footer />
    </>
  );
}
