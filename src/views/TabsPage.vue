<template>
	<ion-page>
			<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar slot="bottom">
					<ion-tab-button tab="home" href="/tabs/home">
					<ion-icon :icon="home" />
					<!-- <ion-label>Home</ion-label> -->
					</ion-tab-button>
					
					<ion-tab-button tab="page2" href="/tabs/kolam">
					<ion-icon :icon="grid" />
					<!-- <ion-label>Tab 2</ion-label> -->
					</ion-tab-button>
			</ion-tab-bar>
			</ion-tabs>
	</ion-page>
</template>
	
	<script lang="ts">
	import { defineComponent } from 'vue';
	import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
	import { grid, home } from 'ionicons/icons';
	
	export default defineComponent({
		name: 'TabsPage',
		components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
		setup() {
			return {
				home,
				grid
			}
		}
	});
	</script>  