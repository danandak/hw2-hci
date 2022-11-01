<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" :icon="filter"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon slot="icon-only" :icon="funnel"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>KOLAM</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <!-- CARD 1 START -->
      <ion-card color="dark">
        <ion-grid class="ion-no-padding">
          <ion-row>
            <ion-col size="auto">
              <ion-card-header>
                <ion-card-title class="card-title-primary"
                  ><strong>Alpha</strong></ion-card-title
                >
              </ion-card-header>
            </ion-col>
            <ion-col> </ion-col>
            <ion-col size="auto">
              <ion-card-header>
                <ion-text color="dark">
                  <ion-card-title class="card-title-secondary card-green"
                    ><strong>Aktif</strong></ion-card-title
                  >
                </ion-text>
              </ion-card-header>
            </ion-col>
          </ion-row>

          <ion-row class="ion-no-padding">
            <ion-col>
              <ion-card-content class="card-content">
                <hr style="background-color: black; height: 2px" />
                <ion-icon :icon="calendarClearOutline"></ion-icon>
                <span class="card-content-text"> 01-09-2022</span> <br />
                <ion-icon :icon="calendarOutline"></ion-icon>
                <span class="card-content-text"> 90 hari</span> <br />
                <ion-icon :icon="fishOutline"></ion-icon>
                <span class="card-content-text"> 200 ekor</span> <br />
              </ion-card-content>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
      <!-- CARD 1 END -->

      <!-- CARD 2 START -->
      <ion-card color="dark">
        <ion-grid class="ion-no-padding">
          <ion-row>
            <ion-col size="auto">
              <ion-card-header>
                <ion-card-title class="card-title-primary"
                  ><strong>Beta</strong></ion-card-title
                >
              </ion-card-header>
            </ion-col>
            <ion-col> </ion-col>
            <ion-col size="auto">
              <ion-card-header>
                <ion-text color="dark">
                  <ion-card-title class="card-title-secondary card-red"
                    ><strong>Tidak Aktif</strong></ion-card-title
                  >
                </ion-text>
              </ion-card-header>
            </ion-col>
          </ion-row>

          <ion-row class="ion-no-padding">
            <ion-col>
              <ion-card-content class="card-content">
                <hr style="background-color: black; height: 2px" />
                <ion-icon :icon="calendarClearOutline"></ion-icon>
                <span class="card-content-text"> 01-09-2022</span> <br />
                <ion-icon :icon="calendarOutline"></ion-icon>
                <span class="card-content-text"> 90 hari</span> <br />
                <ion-icon :icon="fishOutline"></ion-icon>
                <span class="card-content-text"> 200 ekor</span> <br />
              </ion-card-content>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
      <!-- CARD 2 END -->

      <!-- CARD 3 START -->
      <ion-card color="dark">
        <ion-grid class="ion-no-padding">
          <ion-row>
            <ion-col size="auto">
              <ion-card-header>
                <ion-card-title class="card-title-primary"
                  ><strong>Charlie</strong></ion-card-title
                >
              </ion-card-header>
            </ion-col>
            <ion-col> </ion-col>
            <ion-col size="auto">
              <ion-card-header>
                <ion-text color="dark">
                  <ion-card-title class="card-title-secondary card-green"
                    ><strong>Aktif</strong></ion-card-title
                  >
                </ion-text>
              </ion-card-header>
            </ion-col>
          </ion-row>

          <ion-row class="ion-no-padding">
            <ion-col>
              <ion-card-content class="card-content">
                <hr style="background-color: black; height: 2px" />
                <ion-icon :icon="calendarClearOutline"></ion-icon>
                <span class="card-content-text"> 01-09-2022</span> <br />
                <ion-icon :icon="calendarOutline"></ion-icon>
                <span class="card-content-text"> 90 hari</span> <br />
                <ion-icon :icon="fishOutline"></ion-icon>
                <span class="card-content-text"> 200 ekor</span> <br />
              </ion-card-content>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
      <!-- CARD 3 END -->

      <!-- CARD 4 START -->
      <ion-card color="dark">
        <ion-grid class="ion-no-padding">
          <ion-row>
            <ion-col size="auto">
              <ion-card-header>
                <ion-card-title class="card-title-primary"
                  ><strong>Delta</strong></ion-card-title
                >
              </ion-card-header>
            </ion-col>
            <ion-col> </ion-col>
            <ion-col size="auto">
              <ion-card-header>
                <ion-text color="dark">
                  <ion-card-title class="card-title-secondary card-green"
                    ><strong>Aktif</strong></ion-card-title
                  >
                </ion-text>
              </ion-card-header>
            </ion-col>
          </ion-row>

          <ion-row class="ion-no-padding">
            <ion-col>
              <ion-card-content class="card-content">
                <hr style="background-color: black; height: 2px" />
                <ion-icon :icon="calendarClearOutline"></ion-icon>
                <span class="card-content-text"> 01-09-2022</span> <br />
                <ion-icon :icon="calendarOutline"></ion-icon>
                <span class="card-content-text"> 90 hari</span> <br />
                <ion-icon :icon="fishOutline"></ion-icon>
                <span class="card-content-text"> 200 ekor</span> <br />
              </ion-card-content>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
      <!-- CARD 4 END -->

      <!-- CARD 5 START -->
      <ion-card color="dark">
        <ion-grid class="ion-no-padding">
          <ion-row>
            <ion-col size="auto">
              <ion-card-header>
                <ion-card-title class="card-title-primary"
                  ><strong>Epsilon</strong></ion-card-title
                >
              </ion-card-header>
            </ion-col>
            <ion-col> </ion-col>
            <ion-col size="auto">
              <ion-card-header>
                <ion-text color="dark">
                  <ion-card-title class="card-title-secondary card-green"
                    ><strong>Aktif</strong></ion-card-title
                  >
                </ion-text>
              </ion-card-header>
            </ion-col>
          </ion-row>

          <ion-row class="ion-no-padding">
            <ion-col>
              <ion-card-content class="card-content">
                <hr style="background-color: black; height: 2px" />
                <ion-icon :icon="calendarClearOutline"></ion-icon>
                <span class="card-content-text"> 01-09-2022</span> <br />
                <ion-icon :icon="calendarOutline"></ion-icon>
                <span class="card-content-text"> 90 hari</span> <br />
                <ion-icon :icon="fishOutline"></ion-icon>
                <span class="card-content-text"> 200 ekor</span> <br />
              </ion-card-content>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
      <!-- CARD 5 END -->

      <!-- FLOATING BUTTON START -->
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <!-- FLOATING BUTTON END -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  // IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import {
  personCircle,
  search,
  calendarClearOutline,
  calendarOutline,
  fishOutline,
  homeOutline,
  add,
  funnel,
  filter
} from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageSecond",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
  },
  setup() {
    return {
      personCircle,
      search,
      calendarClearOutline,
      calendarOutline,
      fishOutline,
      homeOutline,
      add,
      funnel,
      filter
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

/* custom css */
ion-card-header {
  padding-bottom: 0;
}

.card-title-primary {
  padding: 10px 0;
  font-size: 12px;
}

.card-title-secondary {
  padding: 0.5rem;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 12px;
}

.card-green {
  background-color: green;
}

.card-red {
  background-color: crimson;
}

ion-card-content {
  padding-top: 0;
}

.card-content-text {
  font-size: 10px;
}

ion-card {
  border-radius: 17px;
}

hr {
  margin: 2px 0 5px 0;
  /* margin: 3px 0; */
}

.card-content-text {
  font-size: 12px;
  /* font-weight: bolder; */
}
</style>
