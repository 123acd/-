<template>
  <div style="padding: 10px">
    <!--    功能区域-->
    <div style="margin: 10px 0">
      <el-button type="primary" @click="add" >新增</el-button>
      <el-popconfirm
          v-if="user.role === 1"
          title="确定删除吗？"
          @confirm="deleteBatch"
      >
        <template #reference>
          <el-button type="danger" >批量删除</el-button>
        </template>
      </el-popconfirm>

    </div>

    <!--    搜索区域-->
    <div style="margin: 10px 0">
      <el-input v-model="search" placeholder="请输入关键字" style="width: 20%" clearable></el-input>
      <el-button type="primary" style="margin-left: 5px" @click="load">查询</el-button>
    </div>
    <el-table
        v-loading="loading"
        :data="tableData"
        border
        stripe
        style="width: 85%"
        @selection-change="handleSelectionChange"
    >
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
<!--      <el-table-column-->
<!--          prop="id"-->
<!--          label="ID"-->
<!--          sortable-->
<!--      >-->
<!--      </el-table-column>-->
      <el-table-column
          prop="name"
          label="品牌">
      </el-table-column>
      <el-table-column
          prop="price"
          label="售价"
          sortable
      >
      </el-table-column>
<!--      <el-table-column-->
<!--          prop="userId"-->
<!--          label="卖家">-->
<!--      </el-table-column>-->
      <el-table-column
          prop="createTime"
          label="发布时间"
          sortable
      >
      </el-table-column>

<!--      <el-table-column-->
<!--          label="封面">-->
<!--        <template #default="scope">-->
<!--          <el-image-->
<!--              style="width: 100px; height: 100px"-->
<!--              :src="scope.row.cover"-->
<!--              :preview-src-list="[scope.row.cover]">-->
<!--          </el-image>-->
<!--        </template>-->
<!--      </el-table-column>-->
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="details(scope.row)">详情</el-button>
          <el-button size="mini" @click="handleEdit(scope.row)" v-if="scope.row.userId === String(user.id) || user.role === 1">编辑</el-button>
          <el-popconfirm title="确定删除吗？" @confirm="handleDelete(scope.row.id)" v-if="scope.row.userId === String(user.id) || user.role === 1">
            <template #reference>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin: 10px 0">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>

      <el-dialog title="提示" v-model="dialogVisible" width="60%">
        <el-form :model="form" label-width="120px">
          <el-form-item label="品牌">
            <el-input v-model="form.name" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="价格">
            <el-input v-model="form.price" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="车辆详细信息">
            <div id="div1"></div>
          </el-form-item>
<!--          <el-form-item label="上传者">-->
<!--            <el-input v-model="form.userId" style="width: 80%"></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="出版时间">-->
<!--            <el-date-picker v-model="form.createTime" value-format="YYYY-MM-DD" type="date" style="width: 80%" clearable></el-date-picker>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="封面">-->
<!--            <el-upload ref="upload" :action="filesUploadUrl" :on-success="filesUploadSuccess">-->
<!--              <el-button type="primary">点击上传</el-button>-->
<!--            </el-upload>-->
<!--          </el-form-item>-->
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="save">确 定</el-button>
          </span>
        </template>
      </el-dialog>
      <el-dialog title="详情" v-model="vis" width="50%">
        <el-card>
          <div v-html="detail.author" style="min-height: 100px"></div>
        </el-card>
        <template #footer>
        <span class="dialog-footer">
           <el-button size="mini" type="danger">去结算</el-button>
            <el-button size="mini" type="primary" @click="chat" >与卖家聊</el-button>
          </span>
        </template>
      </el-dialog>

    </div>
  </div>
</template>

<script>


import E from 'wangeditor'
import request from "@/utils/request";

let editor;

export default {
  name: 'Usedcar',
  components: {

  },
  data() {
    return {
      user: {},
      loading: true,
      vis: false,
      form: {},
      dialogVisible: false,
      search: '',
      currentPage: 1,
      pageSize: 10,
      total: 0,
      tableData: [],
      filesUploadUrl: "http://" + window.server.filesUploadUrl + ":9090/files/upload",
      ids: [],
      detail: {}
    }
  },
  created() {
    let userStr = sessionStorage.getItem("user") || "{}"
    this.user = JSON.parse(userStr)
    // 请求服务端，确认当前登录用户的 合法信息
    request.get("/user/" + this.user.id).then(res => {
      if (res.code === '0') {
        this.user = res.data
      }
    })

    this.load()
  },
  methods: {
    details(row) {
      this.detail = row
      this.vis = true
    },
    deleteBatch() {
      if (!this.ids.length) {
        this.$message.warning("请选择数据！")
        return
      }
      request.post("/book/deleteBatch", this.ids).then(res => {
        if (res.code === '0') {
          this.$message.success("批量删除成功")
          this.load()
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    handleSelectionChange(val) {
      this.ids = val.map(v => v.id)   // [{id,name}, {id,name}] => [id,id]
    },
    filesUploadSuccess(res) {
      console.log(res)
      this.form.cover = res.data
    },
    load() {
      this.loading = true
      request.get("/book", {
        params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search: this.search
        }
      }).then(res => {
        this.loading = false
        this.tableData = res.data.records
        this.total = res.data.total
      })
    },
    add() {
      this.dialogVisible = true
      this.form = {}


      this.$nextTick(() => {
        // 关联弹窗里面的div，new一个 editor对象
        if (!editor) {
          editor = new E('#div1')

          // 配置 server 接口地址
          editor.config.uploadImgServer = 'http://' + window.server.filesUploadUrl + ':9090/files/editor/upload'
          editor.config.uploadFileName = "file"  // 设置上传参数名称
          editor.create()
        }
      })

    },
    save() {
      this.form.author = editor.txt.html()

      if (this.form.id) {  // 更新
        request.put("/book", this.form).then(res => {
          console.log(res)
          if (res.code === '0') {
            this.$message({
              type: "success",
              message: "更新成功"
            })
          } else {
            this.$message({
              type: "error",
              message: res.msg
            })
          }
          this.load() // 刷新表格的数据
          this.dialogVisible = false  // 关闭弹窗
        })
      }  else {  // 新增
        let userStr = sessionStorage.getItem("user") || "{}"
        let user = JSON.parse(userStr)
        this.form.userId = user.id
        request.post("/book", this.form).then(res => {
          console.log(res)
          if (res.code === '0') {
            this.$message({
              type: "success",
              message: "新增成功"
            })
          } else {
            this.$message({
              type: "error",
              message: res.msg
            })
          }

          this.load() // 刷新表格的数据
          this.dialogVisible = false  // 关闭弹窗
        })
      }
    },
    chat(){
      this.$router.push("/im")
    },
    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true

      this.$nextTick(() => {
        if (this.$refs['upload']) {
          this.$refs['upload'].clearFiles()  // 清除历史文件列表
        }
        if (!editor) {
          editor = new E('#div1')

          // 配置 server 接口地址
          editor.config.uploadImgServer = 'http://localhost:9090/files/editor/upload'
          editor.config.uploadFileName = "file"  // 设置上传参数名称
          editor.create()
        }
        editor.txt.html(row.author)
      })

    },
    handleDelete(id) {
      console.log(id)
      request.delete("/book/" + id).then(res => {
        if (res.code === '0') {
          this.$message({
            type: "success",
            message: "删除成功"
          })
        } else {
          this.$message({
            type: "error",
            message: res.msg
          })
        }
        this.load()  // 删除之后重新加载表格的数据
      })
    },
    handleSizeChange(pageSize) {   // 改变当前每页的个数触发
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) {  // 改变当前页码触发
      this.currentPage = pageNum
      this.load()
    }
  }
}
</script>
