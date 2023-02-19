export default function ProfilePage() {
    return (
        <>
            <div className=" h-screen flex justify-center flex-col bg-black">
                <div className="flex justify-center mt-10">
                    <h1 className="text-white">Who's watching?</h1>
                </div>
                <div className="flex justify-center gap-3 mt-3">
                    <div>
                        <img
                            className="w-[100px]"
                            src="http://occ-0-2339-769.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ_JEhgVlFamty5bFR0ofXrH6YH0NJ868l21auwAbp78Qx2jeEuB088_MY2tepK6ppRoDQ7Fet7t8c4CI7t1xn_zbkLj0QtJU8Ot.png?r=749"
                            alt="1"
                        />
                        <span className="flex justify-center text-white">
                            Aommei
                        </span>
                    </div>
                    <div>
                        <img
                            className="w-[100px]"
                            src="http://occ-0-2339-769.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ_JEhgVlFamty5bFR0ofXrH6YH0NJ868l21auwAbp78Qx2jeEuB088_MY2tepK6ppRoDQ7Fet7t8c4CI7t1xn_zbkLj0QtJU8Ot.png?r=749"
                            alt="1"
                        />
                        <span className="flex justify-center  text-white">
                            Soffy
                        </span>
                    </div>
                    <div>
                        <img
                            className="w-[100px]"
                            src="http://occ-0-2339-769.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ_JEhgVlFamty5bFR0ofXrH6YH0NJ868l21auwAbp78Qx2jeEuB088_MY2tepK6ppRoDQ7Fet7t8c4CI7t1xn_zbkLj0QtJU8Ot.png?r=749"
                            alt="1"
                        />
                        <span className="flex justify-center  text-white">
                            Mint
                        </span>
                    </div>
                    <div>
                        <img
                            className="w-[100px]"
                            src="http://occ-0-2339-769.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ_JEhgVlFamty5bFR0ofXrH6YH0NJ868l21auwAbp78Qx2jeEuB088_MY2tepK6ppRoDQ7Fet7t8c4CI7t1xn_zbkLj0QtJU8Ot.png?r=749"
                            alt="1"
                        />
                        <span className="flex justify-center  text-white">
                            Tum
                        </span>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <button className="border-2 border-white  text-white w-136 h-69 p-3">
                        Manage Profiles
                    </button>
                </div>
            </div>
        </>
    );
}
