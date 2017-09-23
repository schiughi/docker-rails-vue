<template>
<div class="staffs">
  <h1>staffs</h1>
  <div class="search-form-static">
  <el-form ref="form" :model="query" label-width="120px">
    <el-form-item label="名前">
      <el-input v-model="query.name_cont" placeholder="input name"></el-input>
    </el-form-item>
    <el-form-item label="年齢">
      <el-col :span="11">
        <el-input-number v-model="query.age_gteq" :min="0" :max="150"></el-input-number>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-input-number v-model="query.age_lteq" :min="0" :max="150"></el-input-number>
      </el-col>
    </el-form-item>
    <el-form-item label="入社日">
      <el-col :span="11">
        <el-date-picker
          v-model="query.joined_on_gteq"
          type="date"
          placeholder="日時を選択してください">
        </el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-date-picker
          v-model="query.joined_on_lteq"
          type="date"
          placeholder="日時を選択してください">
        </el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="search">search</el-button>
    </el-form-item>
  </el-form>
  </div>
  <el-table
    :data="staffs"
    height="400"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      sortable
      label="名前"
      width="180">
    </el-table-column>
    <el-table-column
      prop="age"
      sortable
      label="年齢"
      width="180">
    </el-table-column>
    <el-table-column
      prop="joined_on"
      sortable
      label="入社日">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    data: function(){ 
      return {
        staffs: [],
        query: {
          name_cont: null,
          age_gteq: 0,
          age_lteq: 100,
          joined_on_gteq: null,
          joined_on_lteq: null
        }
      }
    },
    created: function(){
      this.search()
    },
    methods:{
      notify: function(msg){
        this.$notify({
          type: 'error',
          title: 'Error',
          message: msg
        });
      },
      search: function(){
        this.$http.get('/api/staffs/search',{
          params: {
            q: this.query
          }
        })
        .then((response) => {
          console.log(response);
          this.staffs = response.data.staffs;
        })
        .catch((error) => {
          console.log(error);
          this.notify(error.message);
        })
      }
    }
  }
</script>