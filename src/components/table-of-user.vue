<template>
<div>
    <el-table
    :data="tableData.filter
    (data => !search || data.email.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Адрес электронной почты"
      prop="email">
    </el-table-column>
    <el-table-column
      label="Пароль"
      prop="password">
    </el-table-column>
    <el-table-column
      label="Телефон"
      prop="phone">
    </el-table-column>
    <el-table-column
      label="ФИО"
      prop="name">
    </el-table-column>
    <el-table-column
      label="Статус пользователя"
      prop="status">
    </el-table-column>
    <el-table-column
      label="Дата создания"
      prop="createDate">
    </el-table-column>
    <el-table-column
      label="Дата последнего изменения"
      prop="lastChangeDate">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="{}">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: 'TableOfUser',
  data() {
    return {
      tableData: [{
        email: 'notTom@gmail.com',
        password: 'RandomPassword',
        phone: '89993912931',
        name: 'Tom Holland Junior',
        status: 'client',
        createDate: '2015-15-03',
        lastChangeDate: '2016-05-03',
      }, {
        email: 'TrueHolland@gmail.com',
        password: 'RandomPassword',
        phone: '89423912931',
        name: 'Tom Holland Junior',
        status: 'client',
        creatineDate: '2015-15-03',
        lastChangeDate: '2016-05-03',
      }, {
        email: 'WhoHolland@gmail.com',
        password: 'RandomPassword',
        phone: '89123912931',
        name: 'Tom Holland Junior',
        status: 'client',
        createDate: '2015-15-03',
        lastChangeDate: '2016-05-03',
      }, {
        email: 'Robetr@mail.ru',
        password: 'RandomPassword',
        phone: '89503123123',
        name: 'Tom Holland Junior',
        status: 'client',
        createDate: '2015-15-03',
        lastChangeDate: '2016-05-03',
      }],
      search: '',
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>
