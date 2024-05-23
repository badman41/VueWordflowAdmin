<script setup lang="ts"></script>

<template>
  <div class="list row">
    <div class="col-md-4">
      <h4>Event</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentEventIndex }"
          v-for="(event, index) in events"
          :key="index"
          @click="setActiveEvent(event, index)"
        >
          {{ event.name }}
        </li>
      </ul>
    </div>
    <div class="col-md-2 d-flex justify-content-center m-auto" v-if="currentEvent">
      <i class="bi bi-arrow-right"></i>
    </div>
    <div class="col-md-4" v-if="currentEvent">
      <h4>Action</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentActionIndex }"
          v-for="(action, index) in actions"
          :key="index"
          @click="setActiveAction(action, index)"
        >
          {{ action.name }}
        </li>
      </ul>
    </div>

    <div class="col-md-12 mt-2">
      <h4>Event selected</h4>
      <div class="d-flex event-selected">
        <div v-if="currentEvent" class="item-selected">
          <div>
            <label
              ><strong>{{ currentEvent.description }}</strong></label
            >
          </div>
        </div>
        <div class="icon" v-if="currentAction"><i class="bi bi-arrow-right"></i></div>
        <div v-if="currentAction" class="item-selected">
          <div>
            <label
              ><strong>{{ currentAction.description }}</strong></label
            >
          </div>

          <!-- <a class="badge badge-warning" :href="'/tutorials/' + currentEvent.id"> Edit </a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventApi from '../apis/eventApi'

export default {
  name: 'events-list',
  data() {
    return {
      events: [],
      actions: [],
      currentEvent: null,
      currentAction: null,
      currentEventIndex: -1,
      currentActionIndex: -1,
      title: '',
      eventConfig: { eventId: '', actionId: '' }
    }
  },
  methods: {
    retrieveEvents() {
      // eventApi
      //   .getAll()
      //   .then((response) => {
      //     console.log('response: ', response)
      //     this.events = response.data
      //     console.log(response.data)
      //   })
      //   .catch((e) => {
      //     console.log(e)
      //   })
      this.events = [
        { id: 1, name: 'event1', description: 'event1' },
        { id: 2, name: 'event2', description: 'event2' }
      ]
      console.log('this.events: ', this.events)
    },

    retrieveActions() {
      // eventApi
      //   .getAll()
      //   .then((response) => {
      //     console.log('response: ', response)
      //     this.events = response.data
      //     console.log(response.data)
      //   })
      //   .catch((e) => {
      //     console.log(e)
      //   })
      this.actions = [
        { id: 1, name: 'action1', description: 'action1' },
        { id: 2, name: 'action2', description: 'action2' }
      ]
    },

    setActiveEvent(event, index) {
      this.currentEvent = event
      this.currentEventIndex = index
      this.eventConfig.eventId = event.id
    },

    setActiveAction(action, index) {
      this.currentAction = action
      this.currentActionIndex = index
      this.eventConfig.actionId = action.id
    }
  },
  mounted() {
    this.retrieveEvents()
    this.retrieveActions()
  }
}
</script>
