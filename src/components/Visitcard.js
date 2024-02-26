import React from 'react'

const Visitcard = () => {
  return (    
    <div class="border-t border-amber-200 ">
        <div class="p-4  rounded-lg md:p-8 bg-amber-400 ">
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto  sm:grid-cols-3 xl:grid-cols-3  sm:p-8">
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">1B+</dt>
                    <dd class="text-stone-900 font-semibold ">Members</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">90+</dt>
                    <dd class="text-stone-900 font-semibold  ">Rides</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">4M+</dt>
                    <dd class="text-stone-900 font-semibold  ">Site Visit</dd>
                </div>
            </dl>
        </div>
    </div>
  )
}

export default Visitcard