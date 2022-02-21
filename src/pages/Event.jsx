import {
  CheckIcon,
  DotsHorizontalIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/solid";

import {
  MailIcon,
  ClockIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";

/*
TODO 
Minor fixes with layout at different breakpoints
Get proper icons with color
*/

export default function Event() {
  return (
    <div>
      <div className="max-w-full xl:max-w-4xl mx-auto">
        <Photo />
      </div>
      <div className="bg-white rounded-xl pt-2 overflow-auto max-w-full xl:max-w-3xl mx-auto">
        <Title />
        <ResponseButtons />
        <InviteFriendButton />
        <Details />
      </div>
    </div>
  );
}

function Photo() {
  return (
    <>
      <img src="/public/Cover_photo.png" alt="" className="lg:rounded-xl" />
    </>
  );
}

function Title() {
  return (
    <div className="flex flex-col justify-center md:justify-start px-16">
      <h1 className=" text-3xl text-envitedPurple font-bold">
        Anica’s 22nd Birthday
      </h1>
      <h3 className=" text-envitedPurple opacity-30 font-bold">
        Anica’s 22nd Birthday
      </h3>
    </div>
  );
}

function ResponseButtons() {
  return (
    <div className="flex justify-between pt-5 px-10 md:justify-around md:space-x-6">
      <CircleIcon Icon={CheckIcon} color="text-envitedGreen" />
      <CircleIcon Icon={QuestionMarkCircleIcon} color="text-envitedPurple" />
      <CircleIcon Icon={XIcon} color="text-envitedPink" />
    </div>
  );
}

function CircleIcon({ Icon, color }) {
  return (
    <button className="rounded-full shadow-xl">
      <Icon className={`w-16 w- h-16 ${color}`} />
    </button>
  );
}

function InviteFriendButton() {
  return (
    <div className="py-8 px-8 flex justify-between space-x-3">
      <button className="flex justify-center items-center space-x-3 bg-[#EFEFF4] rounded-[10px] flex-grow">
        <MailIcon className="w-10 text-gray-200" />
        <p className="font-bold text-envitedPurple">Invite a friend</p>
      </button>
      <button className="bg-[#EFEFF4] rounded-[10px]">
        <DotsHorizontalIcon className="w-14 h-9 text-purple-300" />
      </button>
    </div>
  );
}

/* 
TODO NEED TO FACTOR FOR DYNAMIC DATA
Take an arry of data and map over it to produce details
*/
function Details() {
  return (
    <div>
      <div className="space-y-5">
        <Detail Icon={ClockIcon}>
          <p className="text-envitedPurple font-bold">Sat 16 Oct 2022 6:00pm</p>
          <p className="text-envitedPurple font-bold">
            to Sat 16 Oct 2022 11:00pm
          </p>
          <button className="text-envitedPurple opacity-30 text-sm leading-4">
            Add to calender
          </button>
        </Detail>
        <Detail Icon={LocationMarkerIcon}>
          <p className="text-envitedPurple font-bold">84 Davy Street</p>
          <button className="text-envitedPurple opacity-30 text-sm">
            Open in maps
          </button>
        </Detail>
      </div>
      <div className="flex justify-between mx-6 pt-4 space-x-6">
        <button className="grow text-sm rounded-[20px] px-12 py-1 bg-envitedPurple bg-opacity-30 text-envitedPurple">
          Details
        </button>
        <button className="grow text-sm rounded-[20px] px-12 py-1 border-envitedPurple border">
          Posts
        </button>
      </div>
      <div className="">
        <p className="text-[#757575] px-6 py-3">
          Just a lowkey dinner to celebrate my 22nd. Would love to see you...
          <br/>
          <button className="text-envitedPurple font-bold">see more</button>
        </p>
      </div>
    </div>
  );
}

function Detail(props) {
  return (
    <div className="flex space-x-6 px-5">
      <div className="pt-1 flex justify-center">
        {<props.Icon className="w-7 h-7" />}
      </div>
      <div className="">{props.children}</div>
    </div>
  );
}
