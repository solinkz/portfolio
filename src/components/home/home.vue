<template>
    <div class="hero">
        <div class="container">
           <div class="row hero-content position-relative">
               <!-- image -->
               <div class="avatar">
                   <img :src="pathOrigin + '/images/avatar.jpg'" alt="Avatar">
               </div>
               <div class="col-lg-7">
                    <div class="row">
                        <div class="col-lg-9">
                            <h1>Hi, my name is Solomon Eyitene</h1>
                        </div>
                        <div class="w-100"></div>
                        <div class="col-12">
                            <p class="subtitle pt-4">I’m a UI/UX designer and a Frontend developer with a well grounded background in Graphic design</p>
                        </div>

                        
                        <div class="col mt-5">
                            <a href="#" class="btn-cta">
                                <span>My works</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="#111111"/>
                                </svg>

                            </a>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    </div>
</template>