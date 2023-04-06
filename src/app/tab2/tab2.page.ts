import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, ]
})
export class Tab2Page {

  selectedTime?: string;
  private intervalId: any;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.checkAlarm();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  checkAlarm() {
    if (!this.selectedTime) {
      return;
    }

    const currentTime = new Date().toLocaleTimeString('en-US', {
      hour12: false,
    });
    const alarmTime = new Date(this.selectedTime).toLocaleTimeString('en-US', {
      hour12: false,
    });

    if (currentTime === alarmTime) {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alarma',
      message: 'La alarma se ha activado.',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
