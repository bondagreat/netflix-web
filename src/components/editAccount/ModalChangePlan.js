import { Modal } from 'flowbite-react';
import { ListGroup } from 'flowbite-react';
import { Button } from 'flowbite-react';

const ModalChangePlan = ({ changePlan, setChangePlan }) => {
  return (
    <>
      <Modal show={changePlan} onClose={() => setChangePlan(false)} size="4xl">
        <Modal.Header>Change Streaming Plan</Modal.Header>
        <Modal.Body>
          <div className="flex justify-center  w-[900px] h-[500px]">
            <div className="flex-col justify-center h-[100px]">
              {/* <div className="border-4 border-gray-300 w-[770px] h-20"> */}
              <button class="flex justify-between items-center rounded-lg  mt-6 border-4 border-gray-300 w-[770px] h-20">
                <div className="w-44">Mobie</div>
                <div className="flex justify-between w-[100%]">
                  <div className="flex justify-between text-xs ">
                    Good video quality in SD (480p). Watch on any phone or
                    tablet. Computer and TV not included.
                  </div>{' '}
                  <div className="text-base ml-3">THB99/month</div>
                </div>
              </button>
              {/* </div>{' '} */}
              <br />
              {/* <div className="border-4 border-gray-300 w-[770px] h-20"> */}
              <button class="flex justify-between rounded-lg items-center mt-6 border-4 border-gray-300 w-[770px] h-20">
                <div className="w-44">Basic</div>
                <div className="flex justify-between w-[100%] ">
                  <div className="w-auto flex justify-between text-xs ">
                    Good video quality in HD (720p). Watch on any phone, tablet,
                    computer or TV.
                  </div>
                  <div className="text-base ml-3 ">THB169/month</div>
                </div>
              </button>
              {/* </div>{' '} */}
              <br />
              {/* <div className="border-4 border-gray-300 w-[770px] h-20"> */}
              <button class="flex justify-between items-center rounded-lg border-4 border-gray-300 w-[770px] h-20 ">
                <div className="w-44">Standard</div>
                <div className="flex justify-between w-[100%]">
                  <div className="flex justify-between text-xs w-[400px] ">
                    Great video quality in Full HD (1080p). Watch on any phone,
                    tablet, computer or TV.
                  </div>{' '}
                  <div className="text-base ml-24">THB349/month</div>
                </div>
                <div></div>
              </button>
              {/* </div>{' '} */}
              <br />
              {/* <div className="border-4 border-gray-300 w-[770px] h-20"> */}
              <button class="flex justify-between items-center rounded-lg border-4 border-gray-300 w-[770px] h-20">
                <div className="w-44">CURRENT PLAN: Premium</div>
                <div className="flex justify-between w-[100%]">
                  <div className="flex justify-between text-xs ">
                    Our best video quality in Ultra HD (4K) and HDR. Watch on
                    any phone, tablet, computer or TV.
                  </div>{' '}
                  <div className="text-base ml-3">THB419/month</div>
                </div>
                <div></div>
              </button>
              {/* </div>{' '} */}
              <p className="text-xs w-[800px] mt-5 mr-14  ">
                HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
                subject to your internet service and device capabilities. Not
                all content is available in all resolutions. See our Terms of
                Use for more details.
              </p>
              <br />{' '}
              <p className="text-xs w-[800px] ">
                Only people who live with you may use your account. Watch on 4
                different devices at the same time with Premium, 2 with
                Standard, and 1 with Basic and Mobile.
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalChangePlan;
