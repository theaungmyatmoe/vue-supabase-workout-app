<script setup lang="ts">
import FormInput from "@/components/FormInput.vue";
import {Listbox, ListboxButton, ListboxOption, ListboxOptions,} from '@headlessui/vue'
import {CheckIcon, ChevronUpDownIcon, TrashIcon} from '@heroicons/vue/20/solid'
import {watch, watchEffect} from "vue";


const workout_types: WorkoutType[] = $ref([
  {name: 'Select Workout'},
  {name: 'Strength Training'},
  {name: 'Cardio'},
])
const selected_workout_type = $ref<WorkoutType>(workout_types[0])

const cardio_types: WorkoutType[] = $ref([
  {name: 'Run'},
  {name: 'Walk'},
])
const selected_cardio_type: WorkoutType = $ref(cardio_types[0])


interface WorkoutType {
  name: string
}

const workout_name = $ref('')

interface Strength {
  exercise_name: string,
  sets: number,
  reps: number,
  weight: number
}

interface Cardio {
  type: 'Run' | 'Walk',
  distance: number,
  duration: number,
  pace: number
}

// check type
const isCardio = (exercise: Cardio | Strength): exercise is Cardio => {
  return 'type' in exercise;
}

let exercises = $ref<Strength[] | Cardio[]>([{
  exercise_name: '',
  reps: 0,
  sets: 0,
  weight: 0
}])

watchEffect(() => {
  if (selected_workout_type.name === 'Strength Training') {
    exercises = [{
      exercise_name: '',
      reps: 0,
      sets: 0,
      weight: 0
    }]
    return;
  }

  if (selected_workout_type.name === 'Cardio') {
    exercises = [{
      type: "Run",
      distance: 0,
      pace: 0,
      duration: 0
    }]
    return;
  }
})


</script>

<template>
  <div class="bg-indigo-600 text-gray-50 mx-3 rounded-lg px-4 py-4  sm:max-w-lg sm:mx-auto md:max-w-3xl md:p-8">


    <h2 class="mb-8 text-lg font-medium sm:text-xl">Record Workout</h2>

    <form class="flex flex-col gap-y-6">

      <FormInput
          label="Workout Name"
          type="string"
          placeholder="e.g. Basket Ball"
          v-model="workout_name"
          className="py-3"
      />
      <!--    workout type dropdown -->
      <div>
        <label class="block mb-3 text-sm font-medium text-gray-50"> Workout Type </label>
        <Listbox v-model="selected_workout_type">
          <div class="relative mt-1 z-10">
            <ListboxButton
                class="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-400 sm:text-sm"
            >
              <span class="text-black block truncate">{{ selected_workout_type.name }}</span>
              <span
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              >
                <ChevronUpDownIcon
                    class="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
              <ListboxOptions
                  class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                    v-slot="{ active, selected }"
                    v-for="person in workout_types"
                    :key="person.name"
                    :value="person"
                    as="template"
                >
                  <li
                      :class="[
                      active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-10 pr-4',
                    ]"
                  >
                    <span
                        :class="[
                        selected ? 'font-medium' : 'font-normal',
                        'block truncate',
                      ]"
                    >{{ person.name }}</span
                    >
                    <span
                        v-if="selected"
                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600"
                    >
                      <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>

      <!--      exercises -->
      <section>
        <!--        strength training-->
        <div
            v-if="selected_workout_type.name === 'Strength Training'"
            v-for="(exercise,index) in exercises"
            :key="index"
        >
          <div
              class="flex flex-col gap-y-3 md:gap-x-4 md:flex-row md:items-center"
              v-if="!isCardio(exercise)"
          >
            <FormInput
                class="col-span-2"
                placeholder="Exercise Name"
                v-model="exercise.exercise_name"
            />
            <FormInput
                placeholder="Sets"
                type="text"
                v-model="exercise.sets"
            />
            <FormInput
                placeholder="Reps"
                v-model="exercise.reps"
            />
            <FormInput
                placeholder="Weight (lb)"
                v-model="exercise.weight"
            />
            <button
                class="transition-all duration-300 inline-flex gap-x-2 bg-red-600 text-white rounded-lg px-4 py-2.5 self-end hover:opacity-95">
              Delete
              <TrashIcon class="h-6 w-6"/>
            </button>
          </div>
        </div>

        <!--        cardio -->
        <div
            v-if="selected_workout_type.name === 'Cardio'"
            v-for="(exercise,index) in exercises"
            :key="index"
        >
          <div
              class="flex flex-col gap-y-3 md:flex-row md:gap-x-4 md:items-center"
              v-if="isCardio(exercise)"

          >


            <!--    cardio type dropdown -->
            <div>
              <Listbox v-model="selected_cardio_type">
                <div class="relative mt-2.5">
                  <ListboxButton
                      class="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-400 sm:text-sm"
                  >
                    <span class="text-black block truncate">{{ selected_cardio_type.name }}</span>
                    <span
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                <ChevronUpDownIcon
                    class="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
              </span>
                  </ListboxButton>

                  <transition
                      leave-active-class="transition duration-100 ease-in"
                      leave-from-class="opacity-100"
                      leave-to-class="opacity-0"
                  >
                    <ListboxOptions
                        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                      <ListboxOption
                          v-slot="{ active, selected }"
                          v-for="person in cardio_types"
                          :key="person.name"
                          :value="person"
                          as="template"
                      >
                        <li
                            :class="[
                      active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-10 pr-4',
                    ]"
                        >
                    <span
                        :class="[
                        selected ? 'font-medium' : 'font-normal',
                        'block',
                      ]"
                    >{{ person.name }}</span
                    >
                          <span
                              v-if="selected"
                              class="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600"
                          >
                      <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                    </span>
                        </li>
                      </ListboxOption>
                    </ListboxOptions>
                  </transition>
                </div>
              </Listbox>
            </div>
            <FormInput
                placeholder="Distance"
                v-model="exercise.distance"
            />
            <FormInput
                placeholder="Duration"
                v-model="exercise.duration"
            />
            <FormInput
                placeholder="Pace"
                v-model="exercise.pace"
            />
            <button
                class="transition-all duration-300 inline-flex gap-x-2 bg-red-600 text-white rounded-lg px-4 py-2.5 self-end hover:opacity-95">
              Delete
              <TrashIcon class="h-6 w-6"/>
            </button>
          </div>

        </div>

        <button class="mt-6 bg-indigo-800/80 px-4 py-3 rounded-lg hover:opacity-90">Add Exercise</button>
      </section>

      <!--      Record workout -->
      <button class="mt-2 md:mt-6 bg-indigo-800/80 px-4 py-3.5 rounded-lg hover:opacity-90">Record Workout</button>
    </form>
  </div>
</template>