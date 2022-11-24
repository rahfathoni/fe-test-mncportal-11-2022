<template>
  <!-- temporary hardcode image src -->
  <div
    class="fit row justify-center items-start content-start text-white q-py-md"
    style="background-color: #070d59"
  >
    <div class="col-9">
      <div class="fit row wrap justify-start items-start content-start">
        <div v-if="newsList && newsList.length >= 0" class="col-8 q-pr-sm imgBox">
          <q-img fit="fill" height="auto" src="@/assets/pic/Rectangle_55.png">
            <q-btn
              v-if="newsList[0].isMedia"
              class="absolute all-pointer-events"
              disable
              round
              color="red"
              style="top: 12px; left: 12px"
              size="lg"
            >
              <q-icon
                size="45px"
                :name="generateIcon(newsList[0].isMedia)"
                color="white"
              />
            </q-btn>
            <div class="absolute-bottom text-left transparent q-mx-md">
              <div class="row">
                <span
                  class="bg-red text-white q-pa-xs"
                  style="font-size: 15px"
                  >{{ newsList[0].category }}</span
                >
                <span
                  class="text-white q-pl-md q-pt-sm"
                  style="font-size: 12px"
                  >{{ newsList[0].date }}</span
                >
              </div>
              <div
                v-if="newsList[0].specialTag"
                class="row q-pt-sm"
                style="font-size: 14px; color: red"
              >
                {{ newsList[0].specialTag }}
              </div>
              <div class="row q-pt-sm" style="font-size: 22px">
                <b>{{ newsList[0].title }}</b>
              </div>
              <div class="row q-pt-sm" style="font-size: 16px">
                <b>{{ newsList[0].desc }}</b>
              </div>
            </div>
          </q-img>
        </div>
        <div v-if="newsList && newsList.length >= 1" class="col-4">
          <div class="fit row wrap justify-start items-start content-start">
            <div v-if="newsList && newsList.length >= 1" class="col-12 imgBox">
              <q-img src="../../../assets/pic/MaskGroup.png">
                <q-btn
                  v-if="newsList[1].isMedia"
                  class="absolute all-pointer-events"
                  disable
                  round
                  color="red"
                  style="top: 9px; left: 9px"
                  size="md"
                >
                  <q-icon
                    size="32px"
                    :name="generateIcon(newsList[1].isMedia)"
                    color="white"
                  />
                </q-btn>
                <div class="absolute-bottom text-left transparent q-mx-xs">
                  <div class="row">
                    <span
                      class="bg-red text-white q-pa-xs"
                      style="font-size: 15px"
                      >{{ newsList[1].category }}</span
                    >
                    <span
                      class="text-white q-pl-md q-pt-sm"
                      style="font-size: 12px"
                      >{{ newsList[1].date }}</span
                    >
                  </div>
                  <div
                    v-if="newsList[1].specialTag"
                    class="row q-pt-sm"
                    style="font-size: 14px; color: red"
                  >
                    {{ newsList[1].specialTag }}
                  </div>
                  <div class="row q-pt-sm" style="font-size: 18px">
                    <b>{{ newsList[1].title }}</b>
                  </div>
                </div>
              </q-img>
            </div>
            <div v-if="newsList && newsList.length >= 2" class="col-12 imgBox">
              <q-img
                class="q-mt-xs"
                src="../../../assets/pic/Rectangle_286.png"
              >
                <q-btn
                  v-if="newsList[2].isMedia"
                  class="absolute all-pointer-events"
                  disable
                  round
                  color="red"
                  style="top: 9px; left: 9px"
                  size="md"
                >
                  <q-icon
                    size="32px"
                    :name="generateIcon(newsList[2].isMedia)"
                    color="white"
                  />
                </q-btn>
                <div class="absolute-bottom text-left transparent q-mx-xs">
                  <div class="row">
                    <span
                      class="bg-red text-white q-pa-xs"
                      style="font-size: 15px"
                      >{{ newsList[2].category }}</span
                    >
                    <span
                      class="text-white q-pl-md q-pt-sm"
                      style="font-size: 12px"
                      >{{ newsList[2].date }}</span
                    >
                  </div>
                  <div
                    v-if="newsList[2].specialTag"
                    class="row q-pt-sm"
                    style="font-size: 14px; color: red"
                  >
                    {{ newsList[2].specialTag }}
                  </div>
                  <div class="row q-pt-sm" style="font-size: 18px">
                    <b>{{ newsList[2].title }}</b>
                  </div>
                </div>
              </q-img>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-9 q-pt-sm">
      <div class="fit row wrap justify-around items-start content-start">
        <div v-if="newsList && newsList.length >= 3" class="col-4 q-pr-sm imgBox">
          <q-img class="q-mt-xs" src="../../../assets/pic/Rectangle_287.png">
            <q-btn
              v-if="newsList[3].isMedia"
              class="absolute all-pointer-events"
              disable
              round
              color="red"
              style="top: 9px; left: 9px"
              size="md"
            >
              <q-icon
                size="32px"
                :name="generateIcon(newsList[3].isMedia)"
                color="white"
              />
            </q-btn>
            <div class="absolute-bottom text-left transparent q-mx-xs">
              <div class="row">
                <span
                  class="bg-red text-white q-pa-xs"
                  style="font-size: 15px"
                  >{{ newsList[3].category }}</span
                >
                <span
                  class="text-white q-pl-md q-pt-sm"
                  style="font-size: 12px"
                  >{{ newsList[3].date }}</span
                >
              </div>
              <div
                v-if="newsList[3].specialTag"
                class="row q-pt-sm"
                style="font-size: 14px; color: red"
              >
                {{ newsList[3].specialTag }}
              </div>
              <div class="row q-pt-sm" style="font-size: 18px">
                <b>{{ newsList[3].title }}</b>
              </div>
            </div>
          </q-img>
        </div>
        <div v-if="newsList && newsList.length >= 4" class="col-4 q-pr-sm imgBox">
          <q-img class="q-mt-xs" src="../../../assets/pic/Rectangle_288.png">
            <q-btn
              v-if="newsList[4].isMedia"
              class="absolute all-pointer-events"
              disable
              round
              color="red"
              style="top: 9px; left: 9px"
              size="md"
            >
              <q-icon
                size="32px"
                :name="generateIcon(newsList[4].isMedia)"
                color="white"
              />
            </q-btn>
            <div class="absolute-bottom text-left transparent q-mx-xs">
              <div class="row">
                <span
                  class="bg-red text-white q-pa-xs"
                  style="font-size: 15px"
                  >{{ newsList[4].category }}</span
                >
                <span
                  class="text-white q-pl-md q-pt-sm"
                  style="font-size: 12px"
                  >{{ newsList[4].date }}</span
                >
              </div>
              <div
                v-if="newsList[4].specialTag"
                class="row q-pt-sm"
                style="font-size: 14px; color: red"
              >
                {{ newsList[4].specialTag }}
              </div>
              <div class="row q-pt-sm" style="font-size: 18px">
                <b>{{ newsList[4].title }}</b>
              </div>
            </div>
          </q-img>
        </div>
        <div v-if="newsList && newsList.length >= 5" class="col-4 imgBox">
          <q-img class="q-mt-xs" src="../../../assets/pic/Rectangle_289.png">
            <q-btn
              v-if="newsList[5].isMedia"
              class="absolute all-pointer-events"
              disable
              round
              color="red"
              style="top: 9px; left: 9px"
              size="md"
            >
              <q-icon
                size="32px"
                :name="generateIcon(newsList[5].isMedia)"
                color="white"
              />
            </q-btn>
            <div class="absolute-bottom text-left transparent q-mx-xs">
              <div class="row">
                <span
                  class="bg-red text-white q-pa-xs"
                  style="font-size: 15px"
                  >{{ newsList[5].category }}</span
                >
                <span
                  class="text-white q-pl-md q-pt-sm"
                  style="font-size: 12px"
                  >{{ newsList[5].date }}</span
                >
              </div>
              <div
                v-if="newsList[5].specialTag"
                class="row q-pt-sm"
                style="font-size: 14px; color: red"
              >
                {{ newsList[5].specialTag }}
              </div>
              <div class="row q-pt-sm" style="font-size: 18px">
                <b>{{ newsList[5].title }}</b>
              </div>
            </div>
          </q-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'MainHomePage',
  setup () {
    const store = useStore()

    const newsList = computed(() => store.getters.getNews)

    const generateIcon = (media) => {
      if (media === 'video') {
        return 'play_circle'
      }
      if (media === 'picture') {
        return 'photo_camera'
      }
      return 'info'
    }

    return {
      newsList,
      generateIcon
    }
  }
}
</script>

<style>
.imgBox { /* now a container for the image */
  display: inline-block; /* shrink wrap to image */
  overflow: hidden; /* hide the excess */
}
.imgBox img {
  display: block; /* no whitespace */
  transition: .3s ease-in-out;
}
.imgBox:hover img {
  transform: scale(1.1);
  cursor: pointer;
}
</style>
