<template>
  <div>
    <v-tabs
      v-model="active"
      @change="refreshAll()"
      color="cyan"
      slider-color="yellow"
      style="border:solid 1px black" >
      <v-tab ripple >
        <span class="font-weight-bold text-capitalize" >Example</span>
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <dv-data-list :data="data" ref="dataList" />
        </v-card>
      </v-tab-item>
      <v-tab ripple >
        <span class="font-weight-bold text-capitalize" >Template</span>
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-btn
            :color="copiado ? 'green' : 'white'"
            :dark="copiado ? true : false"
            small
            absolute
            top
            right
            fab
            v-clipboard:copy="codeTemplate"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          >
            <v-icon>file_copy</v-icon>
          </v-btn>
          <codemirror
            ref="cmTemplateE1"
            :value="codeTemplate" 
            :options="cmOptions" />
        </v-card>
      </v-tab-item>
      <v-tab ripple >
        <span class="font-weight-bold text-capitalize" >Script</span>
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-btn
            :color="copiado ? 'green' : 'white'"
            :dark="copiado ? true : false"
            small
            absolute
            top
            right
            fab
            v-clipboard:copy="codeScript"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          >
            <v-icon>file_copy</v-icon>
          </v-btn>
          <codemirror
            ref="cmScriptE1"
            :value="codeScript" 
            :options="cmOptions" />
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script>
import dedent from 'dedent'
export default {
  data () {
    return {
      data: [{ items: [], title: 'Fotos' }],
      copiado: false,
      cmOptions: {
        tabSize: 4,
        mode: 'text/x-vue',
        theme: 'monokai',
        lineNumbers: true,
        line: true
      },
      active: null,
      codeTemplate: dedent` <template>
  <v-card flat>
    <dv-data-list :data="data" ref="dataList" />
  </v-card>
<\/template>`,
      codeScript: dedent` <script>
  export default {
    data () {
      return {
        data: [{ items: [], title: 'Fotos' }]
      }
    },
    created () {
      this.llenarDatos()
    },
    methods: {
      llenarDatos() {
        fetch('https://jsonplaceholder.typicode.com/photos')
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            const top6 = myJson.filter(obj => (obj.id < 7))
            top6.forEach(obj => {
              obj.nombre = obj.title
              obj.descripcion = \`<v-spacer /><img src="\${obj.url}" height="50px" />\`
            })
            this.data[0].items = [ ...top6 ]
            this.$refs.dataList.inicializar()
          });
      }
    }
  }
<\/script>`
    }
  },
  created () {
    this.llenarDatos()
  },
  methods: {
    async refreshAll () {
      await this.$sleep(150)
      this.$refs.cmTemplateE1.refresh()
      this.$refs.cmScriptE1.refresh()
    },
    async onCopy () {
      this.copiado = true
      await this.$sleep(1500)
      this.copiado = false
    },
    async onError () {
      alert('Failed to copy texts')
    },
    llenarDatos() {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          const top6 = myJson.filter(obj => (obj.id < 57 && obj.albumId === 2))
          top6.forEach(obj => {
            obj.nombre = obj.title,
            obj.descripcion = `<v-spacer /><img src="${obj.url}" height="50px" />`
          })
          this.data[0].items = [ ...top6 ]
          this.$refs.dataList.inicializar()
        });
    }
  }
}
</script>