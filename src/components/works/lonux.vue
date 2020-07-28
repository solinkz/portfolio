<template>
    <div class="portfolio">
        <div class="container">

            <div class="portfolio-intro">

                <h1 class="my-5">{{data.title}}</h1>
                <div class="row">
                    <div class="col-md-8">
                        <p>{{data.description}}</p>
                    </div>
                </div>
            </div>

            <div class="portfolio-brief">
                <div class="row">
                    <div class="col-md-8">
                        <div class="problem">
                            <h5 class="mb-4 text-uppercase ">PROBLEM</h5>
                            <P> {{data.problem.description}} </P>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="role">
                            <h5 class="mb-4 text-uppercase">ROLE</h5>
                            <p>{{data.problem.role}}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <div class="portfolio-featured-image">
            <div class="container">
                <img :src="pathOrigin + '/images/'+data.featuredImage.url" class="img-fluid" alt="">
                <p class="text-center py-3"> {{data.featuredImage.caption}}</p>

            </div>
        </div>

        <div class="portfolio-process">
            <div class="container">
                <div v-for="stage in data.processes" :key="stage.id" class="portfolio-process-stage">
                    <h1 class="mb-3">stage {{stage.id}}</h1>
                    <p class="title">{{stage.title}}</p>

                    <p v-if="stage.id == 1">
                        <ol class="portfolio-list">
                            <li v-for="(item, i) in stage.list" :key="i">
                                {{item}}
                            </li>
                        </ol>
                    </p>

                    <div class="my-5 row" v-if="stage.description !== ''">
                        <div class="col-md-8">
                            <p>
                                {{stage.description}}
                            </p>
                        </div>
                    </div>

                    <div class="my-5" v-if="stage.image !== '' ">
                        <img  :src="pathOrigin+ '/images/'+ stage.image" class="img-fluid" alt="">
                        <p class="py-4 text-center text-secondary">
                            {{stage.caption}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import lonuxData from './data/lonuxData.json'
export default {
    name: 'afgras',
    data(){
        return{
            data: lonuxData
        }
    },
    created(){
        console.log(this.data);
    }
}
</script>