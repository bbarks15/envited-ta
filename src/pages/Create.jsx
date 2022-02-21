export default function Create() {
 

  return (
    <div className="m-5 space-y-6 h-screen overflow-auto max-w-full lg:max-w-3xl lg:mx-auto">
      <div className="flex items-center">
        <img
          src="/public/envited_e_white background.png"
          alt="envited e logo"
          className="w-12 rounded-full"
        />
        <h1 className="text-2xl font-bold text-envitedPurple">Event Details</h1>
      </div>
      <Forms />
    </div>
  );
}

function Forms() {
  return (
    <div>
      <div className="space-y-4 flex flex-col">
        <input
          type="text"
          class="mt-1 block w-full rounded-xl border-envitedPurple border-2"
          placeholder="Event Name"
        />
        <input
          type="text"
          class="mt-1 block w-full rounded-xl border-envitedPurple border-2"
          placeholder="Host Name"
        />
        <div class="flex space-x-3">
          <div className="grow rounded-xl border-envitedPurple border-2 overflow-auto">
            <span class="text-sm px-3 text-[#6b7280]">Start Date</span>
            <input type="Date" class="block w-full border-0 " placeholder="" />
          </div>
          <div className="grow rounded-xl border-envitedPurple border-2 overflow-auto">
            <span class="text-sm px-3 text-[#6b7280]">Start Time</span>
            <input type="Time" class="block w-full border-0 " placeholder="" />
          </div>
        </div>
        <div class="flex space-x-3">
          <div className="grow rounded-xl border-envitedPurple border-2 overflow-auto">
            <span class="text-sm px-3 text-[#6b7280]">End Date</span>
            <input type="Date" class="block w-full border-0 " placeholder="" />
          </div>
          <div className="grow rounded-xl border-envitedPurple border-2 overflow-auto">
            <span class="text-sm px-3 text-[#6b7280]">End Time</span>
            <input type="Time" class="block w-full border-0 " placeholder="" />
          </div>
        </div>

        <div>
          <span class="text-envitedPurple opacity-50">Event Photo</span>
          <input
            type="file"
            class="mt-1 w-full text-sm"
            accept="image/png, image/jpeg"
            placeholder=""
          />
        </div>
        <div className="flex-auto">
          <span class="text-envitedPurple opacity-50">Description</span>
          <textarea
            name=""
            id=""
            className="w-full overflow-auto border-2 rounded-lg border-envitedPurple "
          ></textarea>
        </div>
        <div className="flex justify-center items-center">
          <a href="/event" className="w-full bg-envitedPurple text-white rounded-xl p-2 text-center" >
            Next
          </a>
        </div>
      </div>
    </div>
  );
}
