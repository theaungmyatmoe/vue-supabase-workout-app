<script setup lang="ts">
import FormInput from "@/components/FormInput.vue";
import {Listbox, ListboxButton, ListboxOption, ListboxOptions,} from '@headlessui/vue'
import {CheckIcon, ChevronUpDownIcon, TrashIcon} from '@heroicons/vue/20/solid'
import {reactive} from "vue";
import {supabase} from "@/services/supabase";
import {uuid} from "@supabase/supabase-js/dist/module/lib/helpers";
import {TYPE, useToast} from "vue-toastification";

enum Workout {
  STRENGTH = 'Strength Trying',
  CARDIO = 'Cardio'
}

const workout_types: WorkoutType[] = $ref([
  {name: 'Select Workout'},
  {name: Workout.STRENGTH},
  {name: Workout.CARDIO},
])

const workout_name = $ref('')
const selected_workout_type = $ref<WorkoutType>(workout_types[0])

const cardio_types: WorkoutType[] = $ref([
  {name: 'Run'},
  {name: 'Walk'},
])
const selected_cardio_type: WorkoutType = $ref(cardio_types[0])

interface WorkoutType {
  name: string
}


interface Strength {
  exercise_name: string,
  sets: number,
  reps: number,
  weight: number,

  [key: string]: any
}

type CardioType = "Run" | "Walk"

interface Cardio {
  type: CardioType;
  distance: number;
  duration: number;
  pace: number;

  [key: string]: any
}

// check type
const isCardio = (exercise: Cardio | Strength): exercise is Cardio => {
  return 'type' in exercise;
}

type Exercise = Array<Strength | Cardio>

// initial value
const strength = $ref<Strength>({
  exercise_name: '',
  sets: 0,
  weight: 0,
  reps: 0,
  uid: uuid()
})

const cardio = $ref<Cardio>({
  type: "Run",
  duration: 0,
  distance: 0,
  pace: 0,
  uid: uuid()
});

let exercises = reactive([strength, cardio])

const addExercise = () => {
  if (selected_workout_type.name === Workout.STRENGTH) {
    const exercise: Strength = {
      reps: 0,
      weight: 0,
      sets: 0,
      exercise_name: '',
      uid: uuid()
    }
    exercises.push(exercise)
    return;
  }

  if (selected_workout_type.name === Workout.CARDIO) {
    const exercise: Cardio = {
      type: selected_cardio_type.name as CardioType,
      pace: 0,
      distance: 0,
      duration: 0
    }
    exercises.push(exercise)
    console.log(exercises)
    return;
  }

}

const deleteExercise = (uid: string) => {
  const idx = exercises.findIndex(exercise => exercise.uid === uid)
  exercises.splice(idx, 1)
}

const toast = useToast()
const createExercise = async () => {

  if (workout_name.length <= 0) {
    toast('Work Name must not be empty', {type: TYPE.ERROR})
    return;
  }

  const {data, error} = await supabase
      .from('workouts')
      .insert([
        {
          name: workout_name,
          type: selected_workout_type.name,
          exercises
        },
      ])
  if (error) toast(error.message, {
    type: TYPE.ERROR
  })
}


</script>

<template>
  <div class="bg-indigo-600 text-gray-50 mx-3 rounded-lg px-4 py-4  sm:max-w-lg sm:mx-auto md:max-w-3xl md:p-8">


    <h2 class="mb-8 text-lg font-medium sm:text-xl">Record Workout</h2>

    <form class="flex flex-col gap-y-6" @submit.prevent="createExercise">

      <!--       workout name -->
      <FormInput
          label="Workout Name"
          type="string"
          placeholder="e.g. Basket Ball"
          className="py-3"
          v-model="workout_name"
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
      <section
          v-if="selected_workout_type.name === Workout.CARDIO || selected_workout_type.name === Workout.STRENGTH"
      >
        <!--        strength training-->
        <div
            v-if="selected_workout_type.name === Workout.STRENGTH"
            v-for="(exercise,index) in exercises"
            :key="index"
        >
          <!--           type check -->
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
                class="transition-all duration-300 inline-flex gap-x-2 bg-red-600 text-white rounded-lg px-4 py-2.5 self-end hover:opacity-95"
                @click="deleteExercise(exercise.uid)"
            >
              Delete
              <TrashIcon class="h-6 w-6"/>
            </button>
          </div>
        </div>

        <!--        cardio -->

        <div
            v-if="selected_workout_type.name === Workout.CARDIO"
            v-for="(exercise,index) in exercises"
            :key="index"
        >
          <div
              class="flex flex-col gap-y-3 md:flex-row md:gap-x-4 md:items-center"
              v-if="isCardio(exercise)"
          >


            <!--    cardio type dropdown -->
            <Listbox v-model="selected_cardio_type">
              <div class="relative mt-2.5 md:min-w-[8rem]">
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

        <button
            class="mt-6 bg-indigo-800/80 px-4 py-3 rounded-lg hover:opacity-90"
            @click="addExercise"
        >Add Exercise
        </button>
      </section>

      <!--      Record workout -->
      <button type="submit" class="mt-2 md:mt-6 bg-indigo-800/80 px-4 py-3.5 rounded-lg hover:opacity-90">Record
        Workout
      </button>
    </form>
  </div>
</template>