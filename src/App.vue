<template>
  <div id="app">
    <p class="decode-result">Last result: <b>{{ result }}</b></p>
    <template v-if="noStreamApiSupport">
      <label class="v-btn-photo">
        <QrcodeCapture @decode="onDecode"/>
        <span class="v-btn">Scan</span>
      </label>
    </template>
    <template v-else>
      <button
        class="v-btn"
        @click.prevent="handleClick"
      >Scan</button>
      <div
        v-show="opened"
        class="v-modal"
      >
        <QrcodeDropZone
          class="v-modal__container"
          @decode="onDecode"
        >
          <QrcodeStream
            @init="onInit"
            @decode="onDecode"
          />
        </QrcodeDropZone>
      </div>
    </template>
  </div>
</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

const fields = document.querySelectorAll('.js-qrcode-info')

export default {
  name: 'app',
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
  },
  data: () => ({
    result: '',
    noStreamApiSupport: false,
    opened: false
  }),
  watch: {
    result (newValue) {
      Array
        .prototype
        .forEach
        .call(fields, field => {
          field.value = newValue
        })
    }
  },
  methods: {
    handleClick () {
      this.opened = true
    },
    onDecode (result) {
      this.opened = false
      this.result = result
    },
    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'StreamApiNotSupportedError') {
          this.noStreamApiSupport = true
        }
      }
    }
  }
}
</script>

<style lang="scss">

.v-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &__container,
  .qrcode-stream,
  .qrcode-stream__inner-wrapper,
  .qrcode-stream__pause-frame,
  .qrcode-stream__camera {
    width: 100%;
    height: 100%;
  }

  .qrcode-stream__camera,
  .qrcode-stream__pause-frame {
    object-fit: cover;
  }
}

.v-btn-photo {
  display: inline-block;
  vertical-align: top;

  input {
    display: none;
  }
}

.v-btn {
  display: inline-block;
  vertical-align: top;
  outline: 0 !important;
  padding: 12px 24px;
  margin: 0;
  border: 0;
  border-radius: 3px;
  background: #cecece;
  cursor: pointer;
}

</style>
