<template>
    <div>
         <vue-particles style="position: absolute; top: 0; left: 0;"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="8"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
        <!-- Hero -->
        <div class="hero" id="home">
            <div class="container">
            <div class="row hero-content position-relative">
                <!-- image -->
                <div class="avatar" data-sal="slide-up"
                    data-sal-delay="600"
                    data-sal-duration="800"
                    data-sal-easing="ease-out-bounce">
                    <img :src="pathOrigin + '/images/avatar.jpg'" alt="Avatar">
                </div>
                <div class="col-lg-7">
                        <div class="row">
                            <div class="col-lg-9">
                                <h1 
                                data-sal="slide-up"
                                data-sal-delay="100"
                                data-sal-duration="800"
                                data-sal-easing="ease-out-bounce"
                                
                                >Hi, my name is Solomon Eyitene</h1>
                            </div>
                            <div class="w-100"></div>
                            <div class="col-12">
                                <p class="subtitle pt-4"
                                data-sal="slide-up"
                                data-sal-delay="400"
                                data-sal-duration="800"
                                data-sal-easing="ease-out-bounce"
                                >I’m a UI/UX designer and a Frontend developer with a well grounded background in Graphic design</p>
                            </div>

                            
                            <div class="col mt-5">
                                <a href="#portfolio" class="btn-cta"
                                
                                data-sal="slide-up"
                                data-sal-delay="400"
                                data-sal-duration="800"
                                data-sal-easing="ease-out-bounce"
                                >
                                    <span>My works</span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="#111111"/>
                                    </svg>

                                </a>
                            </div>
                        </div>
                </div>

            </div>
                <div class="socials">
                    <a href="https://instagram.com/graphlinkz" target="_blank" class="social-ig">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.999 7.377C10.7726 7.377 9.59651 7.86417 8.72934 8.73134C7.86217 9.59851 7.375 10.7746 7.375 12.001C7.375 13.2274 7.86217 14.4035 8.72934 15.2707C9.59651 16.1378 10.7726 16.625 11.999 16.625C13.2254 16.625 14.4015 16.1378 15.2687 15.2707C16.1358 14.4035 16.623 13.2274 16.623 12.001C16.623 10.7746 16.1358 9.59851 15.2687 8.73134C14.4015 7.86417 13.2254 7.377 11.999 7.377V7.377ZM11.999 15.004C11.2023 15.004 10.4382 14.6875 9.87485 14.1241C9.31149 13.5608 8.995 12.7967 8.995 12C8.995 11.2033 9.31149 10.4392 9.87485 9.87585C10.4382 9.31249 11.2023 8.996 11.999 8.996C12.7957 8.996 13.5598 9.31249 14.1231 9.87585C14.6865 10.4392 15.003 11.2033 15.003 12C15.003 12.7967 14.6865 13.5608 14.1231 14.1241C13.5598 14.6875 12.7957 15.004 11.999 15.004V15.004Z"/>
                        <path d="M16.806 8.285C17.4014 8.285 17.884 7.80236 17.884 7.207C17.884 6.61164 17.4014 6.129 16.806 6.129C16.2107 6.129 15.728 6.61164 15.728 7.207C15.728 7.80236 16.2107 8.285 16.806 8.285Z" />
                        <path d="M20.533 6.111C20.3015 5.51318 19.9477 4.97028 19.4943 4.51706C19.041 4.06384 18.4979 3.71027 17.9 3.479C17.2004 3.21636 16.4612 3.07434 15.714 3.059C14.751 3.017 14.446 3.005 12.004 3.005C9.56201 3.005 9.24901 3.005 8.29401 3.059C7.5474 3.07356 6.80877 3.2156 6.11001 3.479C5.51195 3.71 4.96878 4.06347 4.51535 4.51673C4.06192 4.96999 3.70824 5.51302 3.47701 6.111C3.21432 6.81061 3.07263 7.54984 3.05801 8.297C3.01501 9.259 3.00201 9.564 3.00201 12.007C3.00201 14.449 3.00201 14.76 3.05801 15.717C3.07301 16.465 3.21401 17.203 3.47701 17.904C3.70889 18.5018 4.06291 19.0446 4.51645 19.4978C4.96999 19.951 5.51308 20.3046 6.11101 20.536C6.80845 20.8092 7.54739 20.9614 8.29601 20.986C9.25901 21.028 9.56401 21.041 12.006 21.041C14.448 21.041 14.761 21.041 15.716 20.986C16.4631 20.9708 17.2022 20.8291 17.902 20.567C18.4998 20.3352 19.0426 19.9813 19.496 19.528C19.9493 19.0746 20.3032 18.5318 20.535 17.934C20.798 17.234 20.939 16.496 20.954 15.748C20.997 14.786 21.01 14.481 21.01 12.038C21.01 9.595 21.01 9.285 20.954 8.328C20.9424 7.57027 20.7999 6.82025 20.533 6.111V6.111ZM19.315 15.643C19.3086 16.2193 19.2034 16.7902 19.004 17.331C18.8538 17.7199 18.6239 18.073 18.3291 18.3677C18.0342 18.6624 17.681 18.8921 17.292 19.042C16.7572 19.2404 16.1924 19.3456 15.622 19.353C14.672 19.397 14.404 19.408 11.968 19.408C9.53001 19.408 9.28101 19.408 8.31301 19.353C7.74294 19.346 7.17834 19.2408 6.64401 19.042C6.2537 18.893 5.89902 18.6637 5.6029 18.369C5.30679 18.0742 5.07585 17.7206 4.92501 17.331C4.72846 16.7961 4.62333 16.2318 4.61401 15.662C4.57101 14.712 4.56101 14.444 4.56101 12.008C4.56101 9.571 4.56101 9.322 4.61401 8.353C4.62048 7.77702 4.72567 7.20642 4.92501 6.666C5.23001 5.877 5.85501 5.256 6.64401 4.954C7.1786 4.75614 7.74304 4.65096 8.31301 4.643C9.26401 4.6 9.53101 4.588 11.968 4.588C14.405 4.588 14.655 4.588 15.622 4.643C16.1924 4.64986 16.7574 4.75507 17.292 4.954C17.6809 5.10427 18.0342 5.3342 18.329 5.62903C18.6238 5.92386 18.8537 6.27707 19.004 6.666C19.2006 7.20095 19.3057 7.76516 19.315 8.335C19.358 9.286 19.369 9.553 19.369 11.99C19.369 14.426 19.369 14.688 19.326 15.644H19.315V15.643Z" />
                        </svg>
                    </a>

                    <a href="https://dribbble.com/solinkz" target="_blank" class="social-dr">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 0.5C4.977 0.5 0.5 4.977 0.5 10.5C0.5 16.023 4.977 20.5 10.5 20.5C16.023 20.5 20.5 16.023 20.5 10.5C20.5 4.977 16.023 0.5 10.5 0.5ZM10.5 1.949C12.6785 1.949 14.667 2.764 16.177 4.105C15.0675 5.5685 13.382 6.543 11.693 7.2025C10.7369 5.46117 9.66531 3.78576 8.4855 2.1875C9.14535 2.02845 9.82176 1.94839 10.5005 1.949H10.5ZM6.862 2.759C7.977 4.427 9.057 5.9735 10.0435 7.724C7.5485 8.3705 4.729 8.7585 2.1245 8.765C2.6735 6.101 4.463 3.889 6.862 2.7595V2.759ZM17.1255 5.094C18.3611 6.60398 19.0409 8.49242 19.051 10.4435C17.073 10.0535 15.106 9.9515 13.103 10.1535C12.878 9.592 12.605 9.0585 12.3435 8.4835C14.07 7.787 15.916 6.595 17.1255 5.0935V5.094ZM10.738 9.047C10.952 9.502 11.2 9.985 11.433 10.4785C8.648 11.7065 5.6855 13.3475 4.148 16.2245C2.672 14.5911 1.8854 12.4499 1.953 10.2495C4.9355 10.2355 7.863 9.8625 10.738 9.047V9.047ZM15.257 11.3785C16.5014 11.3788 17.7407 11.5384 18.9445 11.8535C18.7589 13.0116 18.337 14.1192 17.705 15.1072C17.073 16.0953 16.2445 16.9428 15.271 17.597C14.812 15.5095 14.3745 13.512 13.601 11.498C14.1492 11.4181 14.7025 11.378 15.2565 11.378L15.257 11.3785ZM18.989 11.5335C18.983 11.5825 18.9775 11.6305 18.9705 11.6785C18.9775 11.63 18.9835 11.582 18.989 11.5335ZM12.019 11.8885C12.807 13.925 13.4255 16.18 13.8405 18.3745C12.7841 18.8227 11.6481 19.053 10.5005 19.0515C8.59942 19.0542 6.75213 18.4206 5.253 17.2515C6.8015 14.7395 9.2 12.8385 12.0185 11.889L12.019 11.8885Z" />
                        </svg>
                    </a>
                    <a href="https://fiverr.com/solinkz" target="_blank" class="social-dr">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9342 10.437H11.0995C11.152 10.2113 11.2885 10.0065 11.5667 10.0065C11.782 10.0065 11.9342 10.206 11.9342 10.437ZM21.001 10.5C21.001 16.2986 16.2996 21 10.501 21C4.70235 21 0.000976562 16.2986 0.000976562 10.5C0.000976562 4.70138 4.70235 0 10.501 0C16.2996 0 21.001 4.70138 21.001 10.5ZM5.43998 8.5575C5.43998 8.68281 5.48976 8.803 5.57837 8.89161C5.66698 8.98022 5.78716 9.03 5.91248 9.03C6.03779 9.03 6.15797 8.98022 6.24658 8.89161C6.3352 8.803 6.38498 8.68281 6.38498 8.5575C6.38498 8.43218 6.3352 8.312 6.24658 8.22339C6.15797 8.13478 6.03779 8.085 5.91248 8.085C5.78716 8.085 5.66698 8.13478 5.57837 8.22339C5.48976 8.312 5.43998 8.43218 5.43998 8.5575ZM6.76823 11.55H6.40073V9.33975H4.24298V9.198C4.24298 8.91975 4.52123 8.9145 4.66298 8.9145C4.82573 8.9145 4.89923 8.93025 4.89923 8.93025V8.16375C4.89923 8.16375 4.75223 8.14275 4.55273 8.14275C4.10123 8.14275 3.26648 8.26875 3.26648 9.22425V9.345H2.87273V10.0537H3.26648V11.55H2.89898V12.2588H4.67348V11.55H4.24298V10.0537H5.42423V11.55H5.05673V12.2588H6.76823V11.55V11.55ZM9.75548 10.0485H10.081V9.33975H8.53223V10.0485H8.79473L8.45873 11.0985C8.39573 11.2718 8.37998 11.4817 8.37998 11.4817H8.35898C8.35898 11.4817 8.34323 11.2718 8.28023 11.0985L7.94423 10.0485H8.20673V9.33975H6.65798V10.0485H6.98348L7.79198 12.2535H8.94698L9.75548 10.0485V10.0485ZM12.9475 10.6785C12.9475 9.87 12.4592 9.2715 11.593 9.2715C10.6532 9.2715 10.0757 9.93825 10.0757 10.794C10.0757 11.571 10.6375 12.3217 11.677 12.3217C12.4645 12.3217 12.9317 11.9123 12.9317 11.9123L12.5747 11.235C12.5747 11.235 12.1862 11.5132 11.7557 11.5132C11.446 11.5132 11.152 11.3505 11.0785 10.9777H12.9265C12.9212 10.9725 12.9475 10.773 12.9475 10.6785V10.6785ZM15.5515 9.303C15.5515 9.303 15.4937 9.2925 15.436 9.2925C14.9897 9.28725 14.6222 9.61275 14.5015 10.0118H14.491C14.491 10.0118 14.5015 9.954 14.5015 9.86475V9.7125C14.5015 9.44475 14.3545 9.33975 14.0867 9.33975H13.168V10.0485H13.441C13.5197 10.0485 13.567 10.0958 13.567 10.1745V11.55H13.1732V12.2588H14.9425V11.55H14.5487V11.1247C14.5487 10.5945 14.8112 10.248 15.352 10.248C15.4727 10.248 15.5515 10.2637 15.5515 10.2637V9.303V9.303ZM18.1397 10.2637V9.303C18.1397 9.303 18.082 9.2925 18.0242 9.2925C17.5832 9.28725 17.2157 9.61275 17.0897 10.0118H17.0792C17.0792 10.0118 17.0897 9.954 17.0897 9.86475V9.7125C17.0897 9.44475 16.9427 9.33975 16.675 9.33975H15.7562V10.0485H16.0292C16.108 10.0485 16.1552 10.0958 16.1552 10.1745V11.55H15.7615V12.2588H17.5307V11.55H17.137V11.1247C17.137 10.5945 17.3995 10.248 17.9402 10.248C18.061 10.248 18.1397 10.2637 18.1397 10.2637V10.2637Z" />
                        </svg>

                    </a>
                </div>
            </div>
        </div>

        <!-- services -->

        <div class="services" id="services">
            <div class="services-decor"></div>
            <div class="services-content">
                <div class="container">
                    <h2 class="heading-styled">What I do</h2>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="services-item"
                            data-sal="slide-up"
                            data-sal-delay="300"
                            data-sal-duration="800"
                            data-sal-easing="ease-out-bounce"
                            >
                                <div class="ball"></div>
                                <h3>UI UX Design</h3>
                                <p>
                                    I love creating beautiful User Interfaces which are simple to use and makes users happy. The goal when ever I design is to make sure aesthetic matches up to the required functionality
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="services-item"
                            data-sal="slide-up"
                    data-sal-delay="500"
                    data-sal-duration="800"
                    data-sal-easing="ease-out-bounce"
                            >
                                <div class="ball"></div>
                                <h3>Frontend Dev.</h3>
                                <p>
                                    I enjoy bringing my ideas to life, Creating clean codes and making sure a website looks nice on a browser both on Mobile and on the PC.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="services-item"
                                data-sal="slide-up"
                    data-sal-delay="700"
                    data-sal-duration="800"
                    data-sal-easing="ease-out-bounce"
                            >
                                <div class="ball"></div>
                                <h3>Graphic Design</h3>
                                <p>
                                    I am really passionate about Designing as a whole and bring ideas to life, this include creating beautiful designs for Brand and branding purposes or illustrations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- portfolio -->

        <div class="portfolio" id="portfolio">
            <div class="portfolio-semi">
                <div class="container">
                    <h3 class="heading-styled">My works</h3>

                    <div class="row">
                        <div class="col-md-4">
                            <router-link to="/afgras">
                                <div class="portfolio-item" 
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-duration="800"
                                    data-sal-easing="ease-out-bounce">
                                    <img src="https://res.cloudinary.com/solinkz/image/upload/v1595717931/afgras-p1.jpg">
                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-4">
                            <router-link to="/campustalkative">
                                <div class="portfolio-item" 
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-duration="800"
                                    data-sal-easing="ease-out-bounce">
                                    <img src="https://res.cloudinary.com/solinkz/image/upload/v1595717931/ct-p2.jpg">
                                </div>
                            </router-link>
                        </div>
                        <div class="col-md-4">
                            <router-link to="/lonux">
                                <div class="portfolio-item" 
                                    data-sal="slide-up"
                                    data-sal-delay="300"
                                    data-sal-duration="800"
                                    data-sal-easing="ease-out-bounce">
                                    <img src="https://res.cloudinary.com/solinkz/image/upload/v1595939068/lonux-p3.jpg">
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        
    </div>
</template>

<script>
import sal from 'sal.js';
export default {
    mounted(){
        sal();
    }
}
</script>