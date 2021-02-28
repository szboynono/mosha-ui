# Message

Just a message

## Basic usage

Mosha exposes a global function `$MMessage({...options})` for the message.
The message will slide in from the top and disappear after 5 seconds once called.

<MessageDemo mode="basic" />

```ts
<template>
  <m-button @click="showMsgDefault" type="primary">Default</m-button>
  <m-button @click="showMsgInfo" type="primary">Info</m-button>
  <m-button @click="showMsgSuccess" type="success">Success</m-button>
  <m-button @click="showMsgWarning" type="warning">Warning</m-button>
  <m-button @click="showMsgDanger" type="danger">Danger</m-button>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'demo',
  methods: {
    showMsgDefault() {
      this.$MMessage({message: 'This is some dummy message here',})
    },
    showMsgInfo() {
      this.$MMessage({message: 'This is some dummy message here', type: 'info'})
    },
    showMsgSuccess() {
      this.$MMessage({message: 'This is some dummy message here', type: 'success'})
    },
    showMsgWarning() {
      this.$MMessage({message: 'This is some dummy message here', type: 'warning'})
    },
    showMsgDanger() {
      this.$MMessage({message: 'This is some dummy message here', type: 'danger'})
    },
  },
}
```

## Closable

Give the user the ablity to close the message

<MessageDemo mode="closable" />

```ts
<template>
  <m-button @click="showMsgDefault" type="primary">Default</m-button>
  <m-button @click="showMsgInfo" type="primary">Info</m-button>
  <m-button @click="showMsgSuccess" type="success">Success</m-button>
  <m-button @click="showMsgWarning" type="warning">Warning</m-button>
  <m-button @click="showMsgDanger" type="danger">Danger</m-button>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'demo',
  methods: {
    showMsgDefault() {
      this.$MMessage({message: 'This is some dummy message here', closable: true})
    },
    showMsgInfo() {
      this.$MMessage({message: 'This is some dummy message here', type: 'info', closable: true})
    },
    showMsgSuccess() {
      this.$MMessage({message: 'This is some dummy message here', type: 'success', closable: true})
    },
    showMsgWarning() {
      this.$MMessage({message: 'This is some dummy message here', type: 'warning', closable: true})
    },
    showMsgDanger() {
      this.$MMessage({message: 'This is some dummy message here', type: 'danger', closable: true})
    },
  },
}
```

## Timeout

Override the default timeout by specify an `timeout: <time in ms: number>` property in the options 

<MessageDemo mode="timeout" />

```ts
<template>
  <m-button @click="showMsgTimeout" type="primary">10s timeout</m-button>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'demo',
  methods: {
    showMsgTimeout() {
      this.$MMessage({message: 'This is some dummy message here', timeout: 10000})
    },
  },
}
```

## onClose handler

You can pass a function to have it called right after the message disappears

<MessageDemo mode="onClose"/>

```ts
<template>
  <m-button @click="showMsgOnClose" type="primary">Alert after message</m-button>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'demo',
  methods: {
    showMsgOnClose() {
      this.$MMessage({message: 'This is some dummy message here', onClose: () => { alert('Hi There!') }})
    },
  },
}
```