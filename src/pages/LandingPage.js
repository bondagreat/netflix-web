import { useState } from 'react';
import { Accordion } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Faq1 from '../components/landing/Faq1';
import { NetFlixLogo } from '../images';

const faq = [
  {
    head: 'What is Netflix?',
    body: `Netflix is a streaming service that offers a wide variety of
award-winning TV shows, movies, anime, documentaries, and more on
thousands of internet-connected devices. You can watch as much as
you want, whenever you want without a single commercial – all for
one low monthly price. There's always something new to discover and
new TV shows and movies are added every week!`,
  },
  {
    head: `How much does Netflix cost?`,
    body: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
  streaming device, all for one fixed monthly fee. Plans range
  from THB99 to THB419 a month. No extra costs, no contracts.`,
  },
  {
    head: `Where can I watch?`,
    body: `Watch anywhere, anytime. Sign in with your Netflix account to
watch instantly on the web at netflix.com from your personal
computer or on any internet-connected device that offers the
Netflix app, including smart TVs, smartphones, tablets,
streaming media players and game consoles. You can also download
your favorite shows with the iOS, Android, or Windows 10 app.
Use downloads to watch while you're on the go and without an
internet connection. Take Netflix with you anywhere.`,
  },
  {
    head: `How do I cancle?`,
    body: `Netflix is flexible. There are no pesky contracts and no
  commitments. You can easily cancel your account online in two
  clicks. There are no cancellation fees – start or stop your
  account anytime.`,
  },
  {
    head: `What can I watch on Netflix?`,
    body: ` Netflix has an extensive library of feature films,
  documentaries, TV shows, anime, award-winning Netflix originals,
  and more. Watch as much as you want, anytime you want.`,
  },
];

export default function LandingPage() {
  const [active, setActive] = useState('');
  return (
    <>
      {/* div 1 */}
      <div>
        <div className="-z-30 absolute h-[100vh] w-[98.8vw] bg-black/60"></div>
        <img
          className=" -z-40 absolute h-[100vh] w-screen "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/e251261f-cc87-497a-8672-194e306e76bc/TH-en-20230213-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/e251261f-cc87-497a-8672-194e306e76bc/TH-en-20230213-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/e251261f-cc87-497a-8672-194e306e76bc/TH-en-20230213-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/e251261f-cc87-497a-8672-194e306e76bc/TH-en-20230213-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt=""
        ></img>
      </div>
      <div className="h-[10vh] w-11/12 flex justify-between mx-auto">
        <NetFlixLogo />
        <Link to={'/login'}>
          <button
            type="button"
            className="text-base text-white py-1 bg-[#E50914] px-4 font-normal my-5 rounded-sm "
          >
            Sign In
          </button>
        </Link>
      </div>
      <div className="flex justify-center w-7/12 mx-auto flex-col h-[90vh]">
        <h1 className="font-bold text-center text-white text-5xl mx-20">
          Unlimited movies, TV shows, and more.
        </h1>
        <br />
        <p className="text-center font-medium text-white text-3xl">
          watch anywhere. Cancel anytime.
        </p>
        <br />
        <p className="text-center font-medium text-white text-xl">
          Ready to Watch? Enter your email to create or restart your membership.
        </p>
        <br />
        <form className="flex justify-center">
          <input
            className="p-4 w-7/12 rounded-l-sm"
            type="text"
            placeholder="Email address"
          ></input>
          <button
            onClick={Navigate}
            type="submit"
            className="rounded-r-sm p-2 px-16 bg-[#E50914] text-white font-medium active:bg-red-700 text-2xl"
          >
            Get Started
          </button>
        </form>
      </div>
      <hr className="border-4 border-[#303030] my-0" />
      {/* div 1 */}
      {/* div 2 */}
      <div className="bg-black h-[50vh] flex">
        <div className="flex flex-col w-1/2 justify-center ml-14">
          <h2 className="mb-8 font-bold text-white text-5xl">
            Enjoy on your TV.
          </h2>
          <p className="font-medium text-2xl text-white">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="relative">
          <img
            alt=""
            className="absolute z-10 "
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          />
          <div className="scale-x-[73%] scale-y-[82%] translate-y-10 -z-30">
            <video autoPlay playsInline muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <hr className="border-4 border-[#303030] my-0" />
      {/* div 2 */}
      {/* div 3 */}
      <div className="h-[30vh] bg-black flex justify-center flex-col">
        <h1 className="ml-14 mb-8 font-bold text-white text-5xl w-1/2">
          Watch everywhere.
        </h1>
        <p className=" ml-14 font-medium text-2xl text-white  w-1/2">
          Stream Unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>
      <hr className="border-4 border-[#303030] my-0" />
      {/* div 3 */}
      {/* div 4 */}
      <div className=" bg-black flex flex-col h-fit pb-40">
        <h1 className=" font-bold text-white text-center text-5xl my-16 ">
          Frequently Asked Questions
        </h1>

        <Accordion
          allowZeroExpanded={true}
          className="w-7/12 self-center"
          onChange={(inp) => {
            switch (inp[0]) {
              case ':r1:':
                return setActive(0);
              case ':r3:':
                return setActive(1);
              case ':r5:':
                return setActive(2);
              case ':r7:':
                return setActive(3);
              case ':r9:':
                return setActive(4);
            }
            setActive('');
          }}
        >
          {faq.map((el, index) => {
            return (
              <Faq1
                key={index}
                head={el.head}
                body={el.body}
                active={active === index}
              />
            );
          })}
        </Accordion>

        <br />
        <br />

        <p className="text-center font-medium text-white text-xl">
          Ready to Watch? Enter your email to create or restart your membership.
        </p>
        <br />
        <div>
          <form className="flex justify-center">
            <input
              className="p-4 w-5/12 rounded-l-sm"
              type="text"
              placeholder="Email address"
            ></input>
            <button
              type="submit"
              className="rounded-r-sm p-2 px-16 bg-[#E50914] text-white font-medium active:bg-red-700 text-2xl"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
      <hr className="border-4 border-[#303030] my-0" />
      {/* div 4 */}
    </>
  );
}
