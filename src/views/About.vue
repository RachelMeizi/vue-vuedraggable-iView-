<template>
  <div>
    <div class="i-layout-page-header">
      <PageHeader class="product_tabs" :title="$route.meta.title" hidden-breadcrumb></PageHeader>
    </div>
    <Card :bordered="false" dis-hover class="ivu-mt">
      <div class="acea-row row-between-wrapper">
        <Row type="flex">
          <Col v-bind="grid">
            <div class="button acea-row row-middle">
              <Button type="primary" icon="md-add" @click="add">添加</Button>
            </div>
          </Col>
        </Row>
      </div>
      <Table
        :columns="columns1"
        :data="list"
        ref="table"
        class="mt25"
        :loading="loading"
        highlight-row
        no-userFrom-text="暂无数据"
        no-filtered-userFrom-text="暂无筛选结果"
      >
        <template slot-scope="{ row, index }" slot="region">
          <div class="font-blue">{{row.type?'首页':'小程序首页'}}</div>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <a @click="edit(row)">编辑</a>
          <div v-if="row.id !=1" style="display: inline-block">
            <Divider type="vertical" />
            <a @click="del(row,index)">删除</a>
          </div>
          <div style="display: inline-block" v-if="row.status != 1">
            <Divider type="vertical" />
            <a @click="setStatus(row,index)">设为首页</a>
          </div>
        </template>
      </Table>
    </Card>
  </div>
</template>

<script>
// import { diyList, diyDel, setStatus } from '@/api/diy'
import { mapState } from "vuex";
export default {
  name: "devise_list",
  data() {
    return {
      grid: {
        xl: 7,
        lg: 7,
        md: 12,
        sm: 24,
        xs: 24,
      },
      loading: false,
      columns1: [
        {
          title: "页面ID",
          key: "id",
          minWidth: 120,
        },
        {
          title: "页面名称",
          key: "name",
          minWidth: 300,
        },
        {
          title: "页面类型",
          slot: "region",
          minWidth: 120,
        },
        {
          title: "添加时间",
          key: "add_time",
          minWidth: 120,
        },
        {
          title: "更新时间",
          key: "update_time",
          minWidth: 120,
        },
        {
          title: "操作",
          slot: "action",
          fixed: "right",
          minWidth: 300,
        },
      ],
      list: [
        {
          id: 3,
          version: "1.0",
          name: "首页",
          // value: "{"1599392519919984":{"name":"goodList","timestamp":"1599392519919984","tabConfig":{"tabVal":0,"type":1,"tabList":[{"name":"\u81ea\u52a8\u9009\u62e9","icon":"iconzidongxuanze"},{"name":"\u624b\u52a8\u9009\u62e9","icon":"iconshoudongxuanze"}]},"selectConfig":{"title":"\u5546\u54c1\u5206\u7c7b","activeValue":"","list":[{"title":"|-----\u5bb6\u7535\u7535\u5668","activeValue":"9"},{"title":"|-----|-----\u6d17\u8863\u673a","activeValue":"31"},{"title":"|-----|-----\u7a7a\u8c03","activeValue":"30"},{"title":"|-----|-----\u7535\u89c6","activeValue":"29"},{"title":"|-----\u670d\u9970\u978b\u5e3d","activeValue":"13"},{"title":"|-----|-----\u65f6\u5c1a\u8fd0\u52a8","activeValue":"49"},{"title":"|-----|-----\u7cbe\u54c1\u7537\u88c5","activeValue":"45"},{"title":"|-----|-----\u7bb1\u5305","activeValue":"48"},{"title":"|-----|-----\u9999\u6c34\u5f69\u5986","activeValue":"46"},{"title":"|-----|-----\u914d\u9970","activeValue":"47"},{"title":"|-----|-----\u65f6\u5c1a\u5973\u88c5","activeValue":"44"},{"title":"|-----\u5f71\u97f3\u8bbe\u5907","activeValue":"12"},{"title":"|-----|-----\u97f3\u54cd","activeValue":"34"},{"title":"|-----|-----\u8033\u673a","activeValue":"33"},{"title":"|-----|-----\u76f8\u673a","activeValue":"32"},{"title":"|-----\u667a\u80fd\u8bbe\u5907","activeValue":"11"},{"title":"|-----|-----\u673a\u5668\u4eba","activeValue":"37"},{"title":"|-----|-----\u65e0\u4eba\u673a","activeValue":"36"},{"title":"|-----|-----\u624b\u73af","activeValue":"35"},{"title":"|-----\u51fa\u884c\u4ea4\u901a","activeValue":"17"},{"title":"|-----|-----\u5750\u57ab","activeValue":"40"},{"title":"|-----|-----\u7f8e\u5bb9\u6e05\u6d17","activeValue":"39"},{"title":"|-----|-----\u8f66\u8f7d\u7535\u5668","activeValue":"38"},{"title":"|-----\u9910\u53a8\u53a8\u623f","activeValue":"14"},{"title":"|-----|-----\u8336\u5177\u5957\u88c5","activeValue":"43"},{"title":"|-----|-----\u6cb9\u70df\u7076\u5177","activeValue":"42"},{"title":"|-----|-----\u70f9\u996a\u9505\u5177","activeValue":"41"},{"title":"|-----\u624b\u673a\u6570\u7801","activeValue":"10"},{"title":"|-----|-----\u624b\u673a","activeValue":"28"},{"title":"|-----|-----\u667a\u80fd\u9501","activeValue":"51"},{"title":"|-----|-----\u7b14\u8bb0\u672c","activeValue":"50"},{"title":"|-----\u70ed\u95e8\u63a8\u8350","activeValue":"1"},{"title":"|-----|-----\u65b0\u54c1\u4e0a\u7ebf","activeValue":"4"},{"title":"|-----|-----\u6298\u6263\u4e13\u533a","activeValue":"3"},{"title":"|-----|-----\u70ed\u95e8\u4fc3\u9500","activeValue":"2"},{"title":"|-----\u5c45\u5bb6\u751f\u6d3b","activeValue":"6"},{"title":"|-----|-----\u5e8a\u57ab","activeValue":"7"},{"title":"|-----|-----\u5e03\u827a\u8f6f\u88c5","activeValue":"22"},{"title":"|-----|-----\u5bb6\u9970\u82b1\u5349","activeValue":"21"},{"title":"|-----|-----\u5e8a\u54c1\u4ef6\u5957","activeValue":"20"},{"title":"|-----|-----\u5bb6\u5177","activeValue":"19"},{"title":"|-----|-----\u706f\u5177","activeValue":"8"}]},"goodsSort":{"title":"\u5546\u54c1\u6392\u5e8f","name":"goodsSort","type":0,"list":[{"val":"\u7efc\u5408","icon":"iconComm_whole"},{"val":"\u9500\u91cf","icon":"iconComm_number"},{"val":"\u4ef7\u683c","icon":"iconComm_Price"}]},"numConfig":{"val":6},"themeColor":{"title":"\u80cc\u666f\u989c\u8272","name":"themeColor","default":[{"item":"#fff"}],"color":[{"item":"#fff"}]},"itemStyle":{"title":"\u663e\u793a\u7c7b\u578b","name":"itemSstyle","type":0,"list":[{"val":"\u5355\u5217","icon":"icondanlie"},{"val":"\u4e24\u5217","icon":"iconlianglie"},{"val":"\u4e09\u5217","icon":"iconsanlie"}]},"mbConfig":{"title":"\u9875\u9762\u95f4\u8ddd","val":0,"min":0},"lrConfig":{"title":"\u5546\u54c1\u95f4\u8ddd","val":0,"min":0},"goodsList":{"max":20,"list":[]}},"1599392519919994":{"name":"articleList","timestamp":"1599392519919994","numConfig":{"val":3},"selectConfig":{"title":"\u6587\u7ae0\u5206\u7c7b","activeValue":"","list":[]},"listStyle":{"cname":"listStyle","title":"\u6587\u672c\u4f4d\u7f6e","type":0,"list":[{"val":"\u5c45\u5de6","icon":"icondoc_left"},{"val":"\u5c45\u53f3","icon":"icondoc_right"}]},"bgColor":{"title":"\u80cc\u666f\u989c\u8272","default":[{"item":"#F5F5F5"}],"color":[{"item":"#F5F5F5"}]},"itemConfig":{"title":"\u6587\u7ae0\u95f4\u8ddd","val":0,"min":0},"mbConfig":{"title":"\u9875\u9762\u95f4\u8ddd","val":0,"min":0}}}",
          add_time: "2020-09-06 19:41:59",
          update_time: "2020-09-06 19:41:59",
          status: 0,
          type: 1,
          is_del: 0,
        },
        {
          id: 1,
          version: "1.0",
          name: "默认",
          // value: "{"1599100344224220":{"name":"follow","timestamp":""
          add_time: "2020-07-17 09:39:26",
          update_time: "2020-09-03 10:32:24",
          status: 1,
          type: 1,
          is_del: 0,
        },
      ],
    };
  },
  created() {
    // this.getList()
  },
  methods: {
    // 获取列表
    getList() {
      this.loading = true;
      diyList().then((res) => {
        this.loading = false;
        this.list = res.data.list;
      });
    },
    // 编辑
    edit(row) {
      // console.log(row,'row')
      this.$router.push({
        path: "/home",
        query: { id: row.id, name: row.name, type: row.type },
      });
    },
    // 添加
    add() {
      this.$router.push({
        path: "/home",
        query: { id: 0, name: "首页", type: 1 },
      });
    },
    // 删除
    del(row) {
      let delfromData = {
        title: "删除",
        num: 2000,
        success: diyDel(row.id),
      };
      this.$modalSure(delfromData)
        .then((res) => {
          this.getList();
        })
        .catch((res) => {
          this.$Message.error(res.msg);
        });
    },
    // 使用模板
    setStatus(row) {
      setStatus(row.id).then((res) => {
        this.$Message.success(res.msg);
        this.getList();
      });
    },
  },
};
</script>

<style scoped>
</style>
