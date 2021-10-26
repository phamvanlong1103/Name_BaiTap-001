<template>
  <div class="container">
    <div class="container__table">
      <div class="container__table-search" @click="OpenList">
        <input type="search" name="" id="" placeholder="Chọn tỉnh thành" />
        <i class="fa fa-caret-down" aria-hidden="true"></i>
      </div>
      <div class="container__table-seclect" v-if="check">
        <div class="container__table-seclect-list">
          <ul name="" id="">
            <li v-for="item in getListPost" :key="item.code">
              <label class="lab">
                <input
                  class="checkbox"
                  type="checkbox"
                  name=""
                  id=""
                  v-model="item.check"
                />
                <p>{{ item.name }}</p>
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>

        <div class="select-group-button">
          <button
            class="container__table-btn next success"
            @click="sumbitOpenList"
          >
            Đồng ý
          </button>
          <button class="container__table-btn del warning" @click="cancelSave">
            Hủy
          </button>
        </div>
      </div>
    </div>
    <div class="box" v-if="getListSave.length > 0">
      <div class="box-content">
        <div
          class="box-content-item"
          v-for="item in getListSave"
          :key="item.code"
        >
          <span>{{ item.name }} </span>
          <i
            class="fa fa-times"
            aria-hidden="true"
            @click="DeleteItem(item)"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Table",
  data() {
    return { check: false };
  },
  created() {
    this.getListPostHasPaging();
  },
  computed: {
    ...mapGetters(["getListPost", "getOpenList", "getListSave"]),
  },
  methods: {
    ...mapActions([
      "getListPostHasPaging",
      "openData",
      "listItem",
      "saveItem",
      "Delete",
    ]),
    OpenList() {
      this.check = !this.check;
    },
    sumbitOpenList() {
      this.check = false;
      this.saveItem();
    },
    cancelSave() {
      this.check = false;
    },
    DeleteItem(item) {
      item.check = false;
      this.Delete(item);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

html {
  width: 100vw;
  height: 100vh;
}

input {
  outline: none;
  border: none;
}

.container {
  width: 100vw;
  position: relative;
  display: flex;

  .container__table {
    width: 480px;
    height: 352px;
    margin-top: 48px;
    margin-left: 80px;
    background: #ffffff;
    border-radius: 4px;

    .container__table-search {
      width: 480px;
      height: 48px;
      border: 1px solid #007bc3;
      border-radius: 3px;
      display: flex;
      justify-content: space-between;

      input {
        width: 277px;
        height: 16px;
        margin-left: 10px;
        margin-top: 16px;
      }

      i {
        display: block;
        height: 4px;
        width: 8px;
        margin-top: 18px;
        margin-right: 22px;
      }
    }

    .container__table-seclect {
      width: 480px;
      height: 248px;
      margin-bottom: 64px;
      position: relative;
      box-shadow: 0px 1px 8px rgba(102, 102, 102, 0.2);

      .container__table-seclect-list {
        height: 240px;
        overflow-y: scroll;
        overflow-x: hidden;
      }

      ul {
        list-style: none;
        position: relative;
        width: 100%;
        padding-top: 16px;

        li {
          width: 100%;
          height: 40px;
          padding: 8px;
          display: flex;
          position: relative;
          justify-content: center;
          align-content: center;

          &:hover {
            background: #e7f1fd;
          }

          .checkbox {
            font-size: 16px;
            opacity: 0;
            position: absolute;
            left: 11.27%;
            right: 64.79%;
            top: 22.58%;
            bottom: 74.19%;
            font-family: Noto Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            display: flex;
            align-items: center;
            color: #333333;
          }

          label {
            font-size: 16px;
            line-height: 24px;
            margin-left: 12px;
            width: 100%;

            .checkmark {
              height: 16px;
              width: 16px;
              position: absolute;
              left: 20px;
              border: 1px solid black;

              &:after {
                content: "";
                position: absolute;
                display: none;
                left: 4px;
                top: 2px;
                width: 5px;
                height: 10px;
                border: solid white;
                border-width: 0 3px 3px 0;
                transform: rotate(45deg);
              }
            }

            p {
              position: absolute;
              left: 42px;
              top: 5px;
              margin-bottom: 16px;
            }
          }
        }
      }
    }

    .lab input:checked ~ .checkmark {
      background: #45d1c9;
      border: 1px solid #45d1c9;
    }

    .lab input:checked ~ .checkmark:after {
      display: block;
    }

    .select-group-button {
      height: 64px;
      margin-top: 20px;

      .container__table-btn {
        border-radius: 4px;
        border: none;
        outline: none;
        margin-left: 11px;

        &.next {
          background: #dcdcdc;
          width: 128px;
          height: 32px;
          line-height: 24px;
          padding: 4px 19px;

          &.success {
            background: #007bc3;
            color: #ffffff;
          }
        }

        &.del {
          background: white;
          width: 84px;
          height: 24px;
          color: #007bc3;
        }
      }
    }
  }

  .box {
    position: absolute;
    top: 102px;
    left: 95px;
    background: #ffffff;
    border-radius: 4px;
    width: 480px;
    height: 48px;
    box-sizing: border-box;
    border-radius: 4px;

    .box-search {
      width: 480px;
      height: 48px;
      display: flex;
      justify-content: space-around;

      i {
        position: absolute;
        right: 22px;
        bottom: 24px;
        height: 4px;
        width: 8px;
        left: 446px;
      }

      input {
        width: 277px;
        height: 16px;
        position: absolute;
        top: 16px;
        left: 10px;
      }
    }
  }

  .box-content {
    position: relative;
    width: 480px;
    height: auto;
    /* White */
    background: #ffffff;
    /* Gray/Gray02 */
    border: 1px solid #999999;
    border-radius: 4px;

    .box-content-item {
      display: inline-block;
      position: relative;
      background: #f8f8f8;
      text-align: center;
      color: #333333;
      width: 180px;
      border-radius: 32px;
      height: 32px;
      margin-top: 4px;

      i {
        position: absolute;
        right: 8px;
        top: 5px;
      }
      span {
        margin-left: -30px;
        margin-top: 20px;
      }
    }
  }
}
</style>
