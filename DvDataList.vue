<template>
  <v-layout class="dv-data-list ma-2" >
    <v-flex
      md12
      sm12
      xs12
      class="px-2" >
      <v-tabs
        v-model="active"
        fixed-tabs
        show-arrows
        slider-color="yellow"
        style="min-height:50px" >
        <template v-for="group in data" >
          <v-tab
            ripple
            :key="data.indexOf(group)"
            class="dv-data-list__v-tab" >
            {{ group.title ? group.title : `tabTitle${data.indexOf(group)}` }}
          </v-tab>
          <v-tab-item
            class="dv-data-list__v-tab-item"
            :key="data.indexOf(group)" >
            <v-card flat >
              <v-layout v-if="group.descripcion != null" >
                <v-flex>
                  <span v-html="group.descripcion" />
                </v-flex>
              </v-layout>
              <v-layout row wrap >
                <v-flex md6 sm6 xs12 class="pb-0 " >
                  <v-chip
                    v-if="group.allItems === true"
                    label
                    color="orange darken-4"
                    small
                    text-color="white" >
                    <strong>Todas</strong>
                  </v-chip>
                  <v-chip
                    v-else
                    label
                    color="grey lighten-1"
                    text-color="white"
                    small
                    @click="group.changeAllItems(entorno, true)"
                    @keyup.enter="group.changeAllItems(entorno, true)" >
                    <strong>Todas</strong>
                  </v-chip>
                  <v-chip
                    v-if="group.allItems === false"
                    label
                    small
                    color="orange darken-4"
                    text-color="white" >
                    <strong>Importantes</strong>
                  </v-chip>
                  <v-chip
                    v-else
                    label
                    color="grey lighten-1"
                    text-color="white"
                    small
                    @click="group.changeAllItems(entorno, false)"
                    @keyup.enter="group.changeAllItems(entorno, false)" >
                    <strong>Importantes </strong>
                  </v-chip>
                </v-flex>
                <v-flex md6 sm6 xs12 class="pt-0 " >
                  <v-text-field
                    v-model="group.textoBusqueda"
                    label="Buscar"
                    height="20"
                    prepend-icon="search"
                    @keyup="group.buscar(entorno)" />
                </v-flex>
              </v-layout>
              <div>
                <v-layout
                  v-for="item in group.itemsFiltered"
                  :key="item.nombre"
                  :style="'background:' + colorProp(item, group.itemsFiltered)"
                  row
                  wrap >
                  <v-flex
                    md4
                    sm4
                    xs6
                    pb-1 >
                    <strong style="font-size:12px" > Nombre </strong>
                    <br>
                    <strong style="color:#B71C1C;" >
                      {{ item.nombre ? item.nombre : `prop${group.itemsFiltered.indexOf(item)}` }}
                    </strong>
                  </v-flex>
                  <v-flex
                    md4
                    sm4
                    xs6
                    pb-1
                    v-if="item.default != null" >
                    <strong style="font-size:12px" > Default </strong>
                    <br>
                    <strong style="color:#1B5E20" >
                      {{ item.default }}
                    </strong>
                  </v-flex>
                  <v-flex
                    md4
                    sm4
                    xs12
                    pb-1
                    v-if="item.tipo != null" >
                    <strong style="font-size:12px" > Tipo </strong>
                    <br>
                    <strong style="color:#01579B" >
                      {{ item.tipo }}
                    </strong>
                  </v-flex>
                  <v-flex
                    pt-0
                    md12
                    sm12
                    xs12 >
                    <span v-html="item.descripcion" />
                  </v-flex>
                </v-layout>
              </div>
            </v-card>
          </v-tab-item>
        </template>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'DvDataList',
  props: {
    data: {
      type: Array,
      default: () => { return [] }
    },
  },
  data () {
    return {
      active: null,
      entorno: null,
      mainId: '0000'
    }
  },
  created () {
    this.mainId = this.setMainId()
    this.entorno = this
    this.inicializar()
  },
  methods: {
    inicializar () {
      this.data.forEach((group) => {
        group.items = [ ...(group.items != null ? group.items : [])  ]
        group.textoBusqueda = ''
        group.allItems = true
        group.itemsFiltered = [ ...group.items ]
        group.buscar = function (me) {
          this.textoBusqueda = this.textoBusqueda ? this.textoBusqueda.trim() : null
          let baseItems = [...this.items]
          if (!this.allItems) {
            baseItems = [ ...this.items.filter(obj => (obj.important)) ]
          }
          if (this.textoBusqueda == null || this.textoBusqueda === '') {
            this.itemsFiltered = []
            this.itemsFiltered = [...baseItems]
          } else {
            this.itemsFiltered = []
            this.itemsFiltered = baseItems.filter(element =>
              element.nombre.toUpperCase().includes(this.textoBusqueda.toUpperCase()) ||
              element.descripcion.toUpperCase().includes(this.textoBusqueda.toUpperCase())
            )
          }
          me.$forceUpdate()
        }
        group.changeAllItems = function (me, value) {
          this.allItems = value
          let baseItems = [...this.items]
          if (!this.allItems) {
            baseItems = [ ...this.items.filter(obj => (obj.important)) ]
          }
          this.itemsFiltered = [ ...baseItems ]
          me.$forceUpdate()
        }
      })
      this.$forceUpdate()
    },
    colorProp (item, group) {
      let index = group.indexOf(item)
      if (index % 2 === 0) {
        return '#EDE7F6'
      } else {
        return '#F9FBE7'
      }
    },
    setMainId () {
      const randomNum = parseInt(Math.random() * (9999 - 1) + 1)
      let strRandom = randomNum.toString()
      if (strRandom.length === 3) {
        strRandom = '0' + strRandom
      } else if (strRandom.length === 2) {
        strRandom = '00' + strRandom
      } else if (strRandom.length === 1) {
        strRandom = '000' + strRandom
      }
      return strRandom
    }
  }
}
</script>
<style>
.dv-data-list__v-tab a {
  font-weight: bold;
  text-transform: capitalize;
}
.dv-data-list__v-chips {
  padding: 0;
}
</style>