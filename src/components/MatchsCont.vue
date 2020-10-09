<template>
    <div class="contentList">
        <el-row style="margin-left: -10px; margin-right: -10px;">
            <el-col :span="4" style="padding-left: 10px; padding-right: 10px;">
                <div class="grid-content bg-purple">
                    <div class="contentListLeft">
                        <ul>
                            <li
                                v-for="(item,index) in nameList"
                                :class="{'on':index == nowChoose}"
                                :key="index"
                                @click="filterMatch(index)"
                                v-if="item.id.indexOf(type)>-1"
                            >{{item.name}}</li>
                        </ul>
                        <!-- <div>
              <img src="../assets/img/weixin.jpg" alt="">
              <p>关注公众号80爱看球</p>
                        </div>-->
                        <div>
                            <img src="../assets/img/down.jpg" alt />
                            <p>关注公众号</p>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="20" style="padding-left: 10px; padding-right: 10px;">
                <div class="grid-content bg-purple-light">
                    <div class="contentListRight">
                        <el-table
                            v-for="(macths,i) in macthList"
                            :data="macths.matches"
                            :key="i"
                            style="width: 100%"
                        >
                            <el-table-column :label="macths.dateStr">
                                <el-table-column width="120" prop="playTime" label align="center"></el-table-column>
                                <el-table-column width="140" align="center">
                                    <template slot-scope="scope">
                                        <span>{{ scope.row.game }}{{scope.row.rotation|filterRotation}}</span>
                                        <!-- <span>{{ scope.row }}</span> -->
                                    </template>
                                </el-table-column>
                                <el-table-column width="450" align="center">
                                    <template slot-scope="scope">
                                        <span
                                            style="display: inline-block; text-align: right; width: 200px; vertical-align: middle;"
                                        >
                                            <span
                                                style="vertical-align: middle;"
                                            >{{scope.row.masterTeamName}}</span>
                                            <img
                                                :src="scope.row.masterTeamLink&&scope.row.masterTeamLink.indexOf('zhibo8_default')>-1?defaultTeamImg:(configData.baseUrl+scope.row.masterTeamLink)"
                                                width="30px"
                                                :onerror="defaultTeamImg"
                                                alt
                                                style="vertical-align: middle; margin-left: 10px;"
                                            />
                                        </span>
                                        <span
                                            style="display: inline-block; width: 20px; vertical-align: middle; text-align: center;"
                                        >VS</span>
                                        <span
                                            style="display: inline-block; text-align: left; width: 200px; vertical-align: middle;"
                                        >
                                            <img
                                                :src="scope.row.guestTeamLink&&scope.row.guestTeamLink.indexOf('zhibo8_default')>-1?defaultTeamImg:configData.baseUrl+scope.row.guestTeamLink"
                                                width="30px"
                                                :onerror="defaultTeamImg"
                                                alt
                                                style="vertical-align: middle; margin-right: 10px;"
                                            />
                                            <span
                                                style="vertical-align: middle;"
                                            >{{scope.row.guestTeamName}}</span>
                                        </span>
                                    </template>
                                </el-table-column>
                                <el-table-column width="120" align="center">
                                    <template slot-scope="scope">
                                        <button
                                            type="button"
                                            @click="goLive(scope.row.id)"
                                            class="el-button el-button--text"
                                        >
                                            <span>视频直播</span>
                                        </button>
                                    </template>
                                </el-table-column>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        props: {
            macthList: {
                default: [],
                type: Array
            },
            deleteAllChoose: {
                default: false,
                type: Boolean
            },
            nameList: {
                default: [],
                type: Array
            },
            type: {
                default: "0",
                type: String
            }
        },
        name: "matchsCont",
        data() {
            return {
                nowChoose: "-1", // 当前选择的联赛
                defaultTeamImg: 'this.src="' + require('../assets/img/defaultTeamImg.png') + '"'
            };
        },
        methods: {
            filterMatch(index) {
                this.nowChoose = index;
                this.$emit("changeMatchList", this.nameList[index].name);
            },
            goLive(id) {
                const { href } = this.$router.resolve({
                    name: "live",
                    query: {
                        matchID: id
                    }
                });
                window.open(href, "_blank");
            }
        },
        filters: {
            filterRotation(name) {
                if (name) {
                    return name;
                }
                return "";
            }
        },
        watch: {
            deleteAllChoose(now, old) {
                console.log(now);
                if (now) {
                    this.nowChoose = "-1";
                }
            }
        }
    };
</script>
<style scoped>
    .contentListLeft div {
        margin-bottom: 10px;
        line-height: 1.5;
    }
    .contentListLeft img {
        width: 100%;
    }
</style>
