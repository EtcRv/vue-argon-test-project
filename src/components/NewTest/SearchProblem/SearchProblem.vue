<template>
  <div class="search_problem">
    <div class="search_problem-form mt-5 mb-5 ml-5">
      <form role="form">
        <strong class="form-header">案件検索</strong>

        <!-- Name Inputs -->
        <div class="form-inputs" style="width: 40%">
          <div class="form-inputs-input">
            <span class="input-text">案件名</span>
            <input
              type="text"
              name="ProjectName"
              v-model="dataUserFind.prjname"
            />
          </div>
          <div class="form-inputs-input">
            <span class="input-text">クライアント</span>
            <input
              type="text"
              name="Customer"
              v-model="dataUserFind.customer"
            />
          </div>
        </div>

        <!-- Date Inputs -->
        <div class="form-inputs" style="width: 60%">
          <div class="form-inputs-input">
            <span class="input-text">開始日</span>
            <input
              type="date"
              name="DayStartProject"
              v-model="dataUserFind.dayStartProject"
            />
            <span class="input-text">~</span>
            <input
              type="date"
              name="DayEndProject"
              v-model="dataUserFind.dayEndProject"
            />
          </div>
          <div class="form-inputs-input">
            <span class="input-text">納品日</span>
            <input
              type="date"
              name="DayStartDelivery"
              v-model="dataUserFind.dayStartDelivery"
            />
            <span class="input-text">~</span>
            <input
              type="date"
              name="DayEndDelivery"
              v-model="dataUserFind.dayEndDelivery"
            />
          </div>
        </div>

        <!-- Status Inputs -->
        <div class="form-inputs" style="width: 80%">
          <span class="input-text">ステータス</span>
          <div class="form-inputs-input">
            <input
              type="radio"
              value="納品済み"
              v-model="dataUserFind.status"
            />
            納品済み
            <input
              type="radio"
              value="要件定義"
              v-model="dataUserFind.status"
            />
            要件定義
            <input
              type="radio"
              value="見積もり"
              v-model="dataUserFind.status"
            />
            見積もり
            <input
              type="radio"
              value="スケジュール"
              v-model="dataUserFind.status"
            />
            スケジュール
            <input
              type="radio"
              value="ヒアリング"
              v-model="dataUserFind.status"
            />
            ヒアリング
            <input
              type="radio"
              value="デザイン"
              v-model="dataUserFind.status"
            />
            デザイン
            <input type="radio" value="提案" v-model="dataUserFind.status" />
            提案
            <input type="radio" value="修正" v-model="dataUserFind.status" />
            修正
            <input type="radio" value="失注" v-model="dataUserFind.status" />
            失注
          </div>
        </div>

        <!-- Sort Inputs
        <div class="form-inputs" style="width: 60%">
          <div class="form-inputs-input">
            <span class="input-text">並び替え1</span>
            <select>
              <option>案件名：昇順</option>
              <option>案件名：降順</option>
              <option>クライアント名：昇順</option>
              <option>クライアント名：降順</option>
            </select>
          </div>
          <div class="form-inputs-input">
            <span class="input-text">並び替え2</span>
            <select>
              <option>案件名：昇順</option>
              <option>案件名：降順</option>
              <option>クライアント名：昇順</option>
              <option>クライアント名：降順</option>
            </select>
          </div>
          <div class="form-inputs-input">
            <span class="input-text">並び替え1</span>
            <select>
              <option>案件名：昇順</option>
              <option>案件名：降順</option>
              <option>クライアント名：昇順</option>
              <option>クライアント名：降順</option>
            </select>
          </div>
        </div> -->

        <!-- Submit Button -->
        <base-button type="success" class="submit-btn" @click="submitFormHandle"
          >検索</base-button
        >
      </form>
    </div>
    <hr class="my-3" style="width: 80vw" />
    <SearchProblemTable :dataResults="dataResults" />
  </div>
</template>

<script>
import SearchProblemTable from "./SearchProblemTable.vue";
export default {
  name: "Search Problem",
  components: {
    SearchProblemTable,
  },
  data() {
    return {
      allDataProjects: [
        {
          prjname: "AAAシステム",
          customer: "株式会社AA",
          dayStart: "2021年1月1日",
          dayLimited: "2021年5月1日",
          status: "納品済み",
          linkProject: "/",
        },
        {
          prjname: "BBBシステム",
          customer: "株式会社BB",
          dayStart: "2021年2月1日",
          dayLimited: "2021年5月24日",
          status: "要件定義",
          linkProject: "/",
        },
        {
          prjname: "CCCシステム",
          customer: "株式会社CC",
          dayStart: "2021年3月1日",
          dayLimited: "2021年8月24日",
          status: "見積もり",
          linkProject: "/",
        },
        {
          prjname: "DDDシステム",
          customer: "株式会社DD",
          dayStart: "2021年10月21日",
          dayLimited: "2022年12月24日",
          status: "ヒアリング",
          linkProject: "/",
        },
        {
          prjname: "EEEシステム",
          customer: "株式会社EE",
          dayStart: "2021年2月8日",
          dayLimited: "2021年8月24日",
          status: "スケジュール",
          linkProject: "/",
        },
        {
          prjname: "FFFシステム",
          customer: "株式会社FF",
          dayStart: "2021年3月8日",
          dayLimited: "2021年8月16日",
          status: "納品済み",
          linkProject: "/",
        },
        {
          prjname: "GGGシステム",
          customer: "株式会社GG",
          dayStart: "2021年1月4日",
          dayLimited: "2021年12月24日",
          status: "デザイン",
          linkProject: "/",
        },
        {
          prjname: "HHHシステム",
          customer: "株式会社HH",
          dayStart: "2021年4月4日",
          dayLimited: "2021年8月4日",
          status: "提案",
          linkProject: "/",
        },
        {
          prjname: "IIIシステム",
          customer: "株式会社II",
          dayStart: "2021年4月8日",
          dayLimited: "2021年8月4日",
          status: "修正",
          linkProject: "/",
        },
        {
          prjname: "JJJシステム",
          customer: "株式会社JJ",
          dayStart: "2021年3月9日",
          dayLimited: "2021年11月12日",
          status: "失注",
          linkProject: "/",
        },
        {
          prjname: "KKKシステム",
          customer: "株式会社KK",
          dayStart: "2021年2月8日",
          dayLimited: "2021年8月24日",
          status: "納品済み",
          linkProject: "/",
        },
        {
          prjname: "LLLシステム",
          customer: "株式会社LL",
          dayStart: "2021年1月1日",
          dayLimited: "2021年2月1日",
          status: "失注",
          linkProject: "/",
        },
        {
          prjname: "MMMシステム",
          customer: "株式会社MM",
          dayStart: "2021年5月6日",
          dayLimited: "2021年6月25日",
          status: "スケジュール",
          linkProject: "/",
        },
        {
          prjname: "NNNシステム",
          customer: "株式会社NN",
          dayStart: "2021年2月8日",
          dayLimited: "2021年8月24日",
          status: "スケジュール",
          linkProject: "/",
        },
      ],
      dataResults: [],
      dataUserFind: {
        prjname: "",
        customer: "",
        dayStartProject: "",
        dayEndProject: "",
        dayStartDelivery: "",
        dayEndDelivery: "",
        status: "",
      },
    };
  },
  methods: {
    // Submit Form
    submitFormHandle() {
      this.searchByStatus();

      this.searchByProjectName();

      this.searchByCustomer();

      this.searchByDayStartProject();

      this.searchByDayEndProject();
    },

    // Lọc Project thông qua Status
    searchByStatus() {
      if (this.dataUserFind.status != "") {
        if (this.dataResults.length === 0) {
          this.allDataProjects.map((project) => {
            if (project.status == this.dataUserFind.status) {
              this.dataUserFinddataResults.push(project);
            }
          });
        } else {
          this.dataResults = this.dataResults.filter((test) => {
            return test.status === this.dataUserFind.status;
          });
        }
      }
    },

    // Lọc Project thông qua Project name
    searchByProjectName() {
      if (this.dataUserFind.prjname.trim().length > 0) {
        if (this.$slotsdataResults.length === 0) {
          this.allDataProjects.map((project) => {
            if (project.prjname.includes(this.dataUserFind.prjname)) {
              this.$slotsdataResults.push(project);
            }
          });
        } else {
          this.$slotsdataResults = this.$slotsdataResults.filter((test) => {
            return test.prjname.includes(this.dataUserFind.prjname.trim());
          });
        }
      }
    },

    // Lọc Project thông qua Customer
    searchByCustomer() {
      if (this.dataUserFind.customer.trim().length > 0) {
        if (this.dataResults.length === 0) {
          this.allDataProjects.map((project) => {
            if (project.customer.includes(this.dataUserFind.customer)) {
              this.dataResults.push(project);
            }
          });
        } else {
          this.dataResults = this.dataResults.filter((test) => {
            return test.customer.includes(this.dataUserFind.customer.trim());
          });
        }
      }
    },

    // Lọc Project thông qua Day Project
    searchByDayStartProject() {
      if (
        this.dataUserFind.dayStartProject.length > 0 &&
        this.dataUserFind.dayEndProject.length > 0
      ) {
        // Tách ngày người dùng nhập vào thành 1 mảng chứa các phần tử là ngày, tháng, năm
        let arrayNumsOfDayStartProject = this.dataUserFind.dayStartProject.split(
          "-"
        );

        let arrayNumsOfDayEndProject = this.dataUserFind.dayEndProject.split(
          "-"
        );

        if (this.dataResults.length === 0) {
          this.allDataProjects.map((project) => {
            // Tách ngày của dữ liệu thành mảng chứa ngày, tháng, năm
            let arrayNumsOfDayStart = project.dayStart
              .replace("年", " ")
              .replace("月", " ")
              .replace("日", "")
              .split(" ");

            let flag = 0;

            if (
              // So sánh năm của ngày người dùng nhập với năm của ngày trên dữ liệu để lọc
              Number(arrayNumsOfDayStartProject[0]) <=
              Number(arrayNumsOfDayStart[0])
            ) {
              if (
                // So sánh tháng của ngày người dùng nhập với tháng của ngày trên dữ liệu để lọc
                Number(arrayNumsOfDayStartProject[1]) <
                Number(arrayNumsOfDayStart[1])
              ) {
                flag += 1;
              } else if (
                Number(arrayNumsOfDayStartProject[1]) ==
                Number(arrayNumsOfDayStart[1])
              ) {
                if (
                  // So sánh ngày của ngày người dùng nhập với ngày của ngày trên dữ liệu để lọc
                  Number(arrayNumsOfDayStartProject[2]) <=
                  Number(arrayNumsOfDayStart[2])
                ) {
                  flag += 1;
                }
              }
            }
            if (
              Number(arrayNumsOfDayEndProject[0]) >=
              Number(arrayNumsOfDayStart[0])
            ) {
              if (
                Number(arrayNumsOfDayEndProject[1]) >
                Number(arrayNumsOfDayStart[1])
              ) {
                flag += 1;
              } else if (
                Number(arrayNumsOfDayEndProject[1]) ==
                Number(arrayNumsOfDayStart[1])
              ) {
                if (
                  Number(arrayNumsOfDayEndProject[2]) >=
                  Number(arrayNumsOfDayStart[2])
                ) {
                  flag += 1;
                }
              }
            }

            if (flag == 2) {
              this.dataResults.push(project);
            }
          });
        } else {
          this.dataResults = this.dataResults.filter((test) => {
            let arrayNumsOfDayStart = test.dayStart
              .replace("年", " ")
              .replace("月", " ")
              .replace("日", "")
              .split(" ");

            let flag = 0;
            if (
              Number(arrayNumsOfDayStartProject[0]) <=
              Number(arrayNumsOfDayStart[0])
            ) {
              if (
                Number(arrayNumsOfDayStartProject[1]) <
                Number(arrayNumsOfDayStart[1])
              ) {
                flag += 1;
              } else if (
                Number(arrayNumsOfDayStartProject[1]) ==
                Number(arrayNumsOfDayStart[1])
              ) {
                if (
                  Number(arrayNumsOfDayStartProject[2]) <=
                  Number(arrayNumsOfDayStart[2])
                ) {
                  flag += 1;
                }
              }
            }
            if (
              Number(arrayNumsOfDayEndProject[0]) >=
              Number(arrayNumsOfDayStart[0])
            ) {
              if (
                Number(arrayNumsOfDayEndProject[1]) >
                Number(arrayNumsOfDayStart[1])
              ) {
                flag += 1;
              } else if (
                Number(arrayNumsOfDayEndProject[1]) ==
                Number(arrayNumsOfDayStart[1])
              ) {
                if (
                  Number(arrayNumsOfDayEndProject[2]) >=
                  Number(arrayNumsOfDayStart[2])
                ) {
                  flag += 1;
                }
              }
            }
            return flag == 2;
          });
        }
      }
    },

    // Lọc Project thông qua Day Delivery
    searchByDayEndProject() {
      if (
        this.dataUserFind.dayStartDelivery.length > 0 &&
        this.dataUserFind.dayEndDelivery.length > 0
      ) {
        let arrayNumsOfDayStartDelivery = this.dataUserFind.dayStartDelivery.split(
          "-"
        );

        let arrayNumsOfDayEndDelivery = this.dataUserFind.dayEndDelivery.split(
          "-"
        );

        if (this.dataResults.length === 0) {
          this.allDataProjects.map((project) => {
            let arrayNumsOfDayStart = project.dayLimited
              .replace("年", " ")
              .replace("月", " ")
              .replace("日", "")
              .split(" ");

            let flag = 0;
            if (
              Number(arrayNumsOfDayStartDelivery[0]) <=
              Number(arrayNumsOfDayStart[0])
            ) {
              if (
                Number(arrayNumsOfDayStartDelivery[1]) <
                Number(arrayNumsOfDayStart[1])
              ) {
                flag += 1;
              } else if (
                Number(arrayNumsOfDayStartDelivery[1]) ==
                Number(arrayNumsOfDayStart[1])
              ) {
                if (
                  Number(arrayNumsOfDayStartDelivery[2]) <=
                  Number(arrayNumsOfDayStart[2])
                ) {
                  flag += 1;
                }
              }
            }
            if (
              Number(arrayNumsOfDayEndDelivery[0]) >=
              Number(arrayNumsOfDayStart[0])
            ) {
              if (
                Number(arrayNumsOfDayEndDelivery[1]) >
                Number(arrayNumsOfDayStart[1])
              ) {
                flag += 1;
              } else if (
                Number(arrayNumsOfDayEndDelivery[1]) ==
                Number(arrayNumsOfDayStart[1])
              ) {
                if (
                  Number(arrayNumsOfDayEndDelivery[2]) >=
                  Number(arrayNumsOfDayStart[2])
                ) {
                  flag += 1;
                }
              }
            }

            if (flag == 2) {
              this.dataResults.push(project);
            }
          });
        } else {
          this.dataResults = this.dataResults.filter((test) => {
            let arrayNumsOfDayStart = test.dayLimited
              .replace("年", " ")
              .replace("月", " ")
              .replace("日", "")
              .split(" ");

            let flag = 0;
            if (
              Number(arrayNumsOfDayStartDelivery[0]) <=
              Number(arrayNumsOfDayStart[0])
            ) {
              if (
                Number(arrayNumsOfDayStartDelivery[1]) <
                Number(arrayNumsOfDayStart[1])
              ) {
                flag += 1;
              } else if (
                Number(arrayNumsOfDayStartDelivery[1]) ==
                Number(arrayNumsOfDayStart[1])
              ) {
                if (
                  Number(arrayNumsOfDayStartDelivery[2]) <=
                  Number(arrayNumsOfDayStart[2])
                ) {
                  flag += 1;
                }
              }
            }
            if (
              Number(arrayNumsOfDayEndDelivery[0]) >=
              Number(arrayNumsOfDayStart[0])
            ) {
              if (
                Number(arrayNumsOfDayEndDelivery[1]) >
                Number(arrayNumsOfDayStart[1])
              ) {
                flag += 1;
              } else if (
                Number(arrayNumsOfDayEndDelivery[1]) ==
                Number(arrayNumsOfDayStart[1])
              ) {
                if (
                  Number(arrayNumsOfDayEndDelivery[2]) >=
                  Number(arrayNumsOfDayStart[2])
                ) {
                  flag += 1;
                }
              }
            }
            return flag == 2;
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.search_problem {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.search_problem-form {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.form-header {
  font-size: 20px;
}

.form-inputs {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
}

.input-text {
  margin: 0 5px;
}

.form-inputs-input input {
  margin: 0 5px;
}

.submit-btn {
  position: absolute;
  top: 5px;
  right: 260px;
}
</style>
