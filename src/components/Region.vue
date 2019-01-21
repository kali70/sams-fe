<template>
    <page :header-boreder="false" v-if="isLoaded">
      <template slot="header">
          <h1>{{ this.region[0].name }}</h1>
      </template>
      <div>
        <ul class='tabel-header'>
          <li>
            <div>اسم الطالب</div>
            <div>الحالة الاجتماعية</div>
            <div>رقم الهاتف</div>
            <div>بريد الكتروني</div>
            <div>الرقم الوطني</div>
          </li>
        </ul>
        <ul>
          <li class="student-row" v-for="student in this.region[0].students" :key="student.id">
            <localized-link :to="`regions/${region_id}/student/${student.id}`">
              <div>
                {{ student.firs_name }} {{ student.last_name }}
              </div>
              <div>
                {{ student.martial_status }}
              </div>
              <div>
                {{ student.contact_number }}
              </div>
              <div>
                {{ student.email }}
              </div>
              <div>
                {{ student.nid }}
              </div>
          </localized-link>
          </li>
        </ul>
      </div>
    </page>
</template>

<script>
import { mapGetters } from 'vuex'
import Page from './Page'
import LocalizedLink from './LocalizedLink'
export default {
  data () {
    return {
      isLoaded: false,
      region_id: ''
    }
  },
  components: {
    Page,
    LocalizedLink
  },
  mounted () {
    console.log('Hello ', this.$route.params)
    this.$store.dispatch('regions/getRegionByID', this.$route.params.id).then(() => {
      console.log(this.region[0])
      this.isLoaded = true
      this.region_id = this.region[0].region_id
    })
  },
  computed: {
    ...mapGetters({
      region: 'region'
    })
  },
  methods: {
    studentPage (student) {
      console.log('student: ', student)
      this.$route.push({ name: 'Student', params: { student: student, s_id: student.id } })
    }
  }
}
</script>

<style lang='scss' scoped>
  ul {
    background: #FFFFFF;
    padding: 20px 0;
    list-style: none;
    .student-row {
      background: #f2f2f2;
      margin: 5px;
      padding: 15px;
      &:hover {
        background: #f2f2f2;
      }
      a {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &:hover {
          text-decoration: none;
        }
        div {
          align-items: center;
          width: 15%;
          color: #000000;
          text-align: center;
          &:first-child {
            text-align: right;
          }
        }
      }
    }
    .student-row:nth-child(even) {
      background: #ffffff;
    }
    &.tabel-header {
      padding: 10px 0px;
      width: 100%;
      margin: 0;
      li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px 52px;
        background: #f2f2f2;
      }
    }
  }
</style>
