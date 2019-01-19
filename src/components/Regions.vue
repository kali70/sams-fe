<template>
    <page :header-boreder="false">
      <template slot="header">
          <h1>{{$t('our_regions')}}</h1>
      </template>
      <div>
        <ul>
          <li class="region-row" v-for="region in this.regions" :key="region.region_id">
            <localized-link :to="`regions/${region.region_id}`">
              <div>
                {{ regionsNames[region.name] }}
              </div>
              <div>
                {{ region.created_at }}
              </div>
              <div>
                {{ region.updated_at }}
              </div>
              <div>
                {{ region.contact_number }}
              </div>
            </localized-link>
          </li>
        </ul>
      </div>
    </page>
</template>
<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import Page from './Page'
import LocalizedLink from './LocalizedLink'
export default {
  data () {
    return {
      regionsNames: {
        'Europ': 'الساحة الاوربية',
        'Arabia and South Africa': 'العربية و الافريقية',
        'Aisa and Australia': 'الاسيوية و الاسترالية',
        'Britain and Ireland': 'البريطانية و الايرلندية',
        'USA and Canada': 'امريكا الشمالية',
        'Turkish and Cyprus Greek': 'التركية و القبرصية'
      }
    }
  },
  components: {
    Page,
    LocalizedLink
  },
  created () {
    this.$store.dispatch('regions/getRegions').then(() => {
      this.regions.forEach(region => {
        region.created_at = moment(region.created_at).format('YYYY-MM-DD')
        region.updated_at = moment(region.updated_at).format('YYYY-MM-DD')
        console.log('dsipatched: ', region)
      })
    })
  },
  mounted () {
    console.log('Hello')
  },
  computed: {
    ...mapGetters({
      regions: 'regions'
    })
  },
  methods: {
    clicked (region) {
      console.log(region)
    }
  }
}
</script>

<style lang='scss' scoped>
  ul {
    background: #3399ff;
    padding: 20px;
    list-style: none;
    .region-row {
      background: #cce5ff;
      margin: 5px;
      padding: 15px;
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
        }
      }
    }
  }
</style>
