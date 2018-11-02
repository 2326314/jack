<template>
    <div id="nav">
       <!--  <div id="list">
            <Leftapp></Leftapp>
        </div> -->
        
        <el-row >
            <el-col :span="7">
                <el-tabs>
                    <el-tab-pane label="点餐" >
                        <el-table :data="tableData" border show-summary style="width:100%">
                            <el-table-column prop="name" label="商品">

                            </el-table-column>
                            <el-table-column prop="shu" label="数量">
                            </el-table-column>
                            <el-table-column prop="one" label="单价">
                            </el-table-column>
                             <el-table-column label="操作">
                                 <template slot-scope="scope">
                                        <el-button type='text' size='small' @click="tt(scope.$index)">减少</el-button>
                                        <el-button type='text' size='small' @click="dd(scope.$index)">增加</el-button>
                                 </template>
                            </el-table-column>
                            </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="外卖" >外卖</el-tab-pane>
                </el-tabs>
            </el-col>
             <el-col :span="12">
                 <div>
                     产品区
                     <ul class="pri">
                         <li v-for="(v,i) in pri" :key="i" @click="jia(i)">
                             <img :src="v.img">
                             <span>{{v.name}}</span>
                             <span>{{v.money}}</span>
                         </li>
                     </ul>
                 </div>
                 <el-tabs  class="eat">
                    <el-tab-pane label="肥仔">
                        <ul class="pri">
                         <li v-for="(v,i) in zai1" :key="i" @click="fz1(i)">
                             <img :src="v.img">
                             <span>{{v.name}}</span>
                             <span>{{v.money}}</span>
                         </li>
                     </ul>
                    </el-tab-pane>
                    <el-tab-pane label="肥仔1">
                        <ul class="pri">
                         <li v-for="(v,i) in zai2" :key="i" @click="fz2(i)">
                             <img :src="v.img">
                             <span>{{v.name}}</span>
                             <span>{{v.money}}</span>
                         </li>
                     </ul>
                    </el-tab-pane>
                    <el-tab-pane label="肥仔2">
                        <ul class="pri">
                         <li v-for="(v,i) in zai3" :key="i" @click="fz3(i)">
                             <img :src="v.img">
                             <span>{{v.name}}</span>
                             <span>{{v.money}}</span>
                         </li>
                     </ul>
                    </el-tab-pane>
                 </el-tabs>
             </el-col>
        </el-row>
   
    </div>
</template>
<script>
import Leftapp from "@/components/left"
import axios from "axios"
export default {
    data(){
        return {
            tableData:[],
            pri:[],
            zai1:[],
            zai2:[],
            zai3:[],
            add:{}  
        }
    },
    components:{
     Leftapp
    },
    mounted(){
        let h = document.body.clientHeight;
        let list = document.querySelector('#list');
        list.style.height = h + 'px';
    },
    methods:{
        tt(i){
            if(this.tableData[i].shu==1){
                if(confirm("确定删除吗")){
                    this.tableData.splice(i,1)
                }
            }else{
                 this.tableData[i].shu--
            }
           
        },
        dd(i){
            this.tableData[i].shu++
        },
        jia(i){
            let that = this;
            that.add={
                "name":this.pri[i].name,
                "one":this.pri[i].money,
                "shu":1
            }
            that.tableData.push(that.add)
            that.add={}
        },
        fz1(i){
            let that = this;
            that.add={
                "name":this.zai1[i].name,
                "one":this.zai1[i].money,
                "shu":1
            }
            that.tableData.push(that.add)
            that.add={}
        },
        fz2(i){
            let that = this;
            that.add={
                "name":this.zai2[i].name,
                "one":this.zai2[i].money,
                "shu":1
            }
            that.tableData.push(that.add)
            that.add={}
        },
        fz3(i){
            let that = this;
            that.add={
                "name":this.zai3[i].name,
                "one":this.zai3[i].money,
                "shu":1
            }
            that.tableData.push(that.add)
            that.add={}
        },
    },
    created(){
        axios.get("http://localhost:8080/static/data.json")
            .then(res=>{
                this.pri=res.data.pri
                this.zai1=res.data.zai1
                this.zai2=res.data.zai2
                this.zai3=res.data.zai3
                this.tableData=res.data.tableData 
            })
            .catch(err=>{
                console.log(err)
            })
    }
}
</script>
<style scoped>
    #list{
        float: left;
    }
    .pri{
        width: 100%;
        overflow: hidden;
    }
    .pri li{
        width: 100px;
        list-style: none;
        float: left;
        border: 1px solid palevioletred;
        margin:10px 20px;
        padding: 10px;
    }
     .pri li img{
         width:100%;
         height: 50px;
     }
     .eat{
         display: block;
     }
</style>


