import { AfterViewInit, Component, effect, ElementRef, signal, ViewChild } from '@angular/core';
import DonService from '../../services/don.service';

@Component({
    selector: 'app-don',
    templateUrl: './don.component.html',
    styleUrls: ['./don.component.scss'],
    standalone: false
})
export class DonComponent implements AfterViewInit  {
  protected readonly title = signal('donation');
  @ViewChild('videoPlayer') videoplayer!: ElementRef<HTMLVideoElement>;

  // @ViewChild('videoPlayer') water!: ElementRef<HTMLElement>;

  contributionPercent='0%'
  videoSource: string = 'inc1.mp4';
  isPlaying: boolean = false;

  total = 0;


  constructor() {
    window.addEventListener('storage', this.storageChangeHandler);
    this.total = parseInt(localStorage.getItem('totalExpected')??'1')
    const t = parseInt(localStorage.getItem('currentAmount')??'0')
    let percent = (t*100)/this.total;
    if(percent>100){
      percent=100
    }
    this.contributionPercent= percent+'%'
  }

  ngAfterViewInit() {
    // this.toggleVideoPlayPause()
  }

  // toggleVideoPlayPause(): void {
  //   const video = this.videoplayer.nativeElement;
  //     video.play().catch(error => {
  //       console.log( error);
  //     });
  //     console.log("vieo joue merde")

  // }

  premierLanc=false
  premierLancement(){
    const video = this.videoplayer.nativeElement;
    video.play()
    this.premierLanc = true
  }

  onVideoEnded(): void {
    const video = this.videoplayer.nativeElement;
    video.currentTime = 0;
    this.isPlaying = false;
    video.pause();
}

  onVideoStateChange(): void {
    const video = this.videoplayer.nativeElement;
    this.isPlaying = !video.paused;
  }


  private storageChangeHandler = (event: StorageEvent) => {
        // On vérifie que la clé changée est bien celle qui nous intéresse
        if (event.key === 'currentAmount' && event.newValue !== null) {
            const newAmount = parseInt(event.newValue, 10);
            let percent = (newAmount*100)/this.total;
            console.log('pourcentage ',percent)
            if(percent>100){
              percent=99
            }
            this.contributionPercent= percent+ '%'
            // this.toggleVideoPlayPause()
        }

        if (event.key === 'totalExpected' && event.newValue !== null) {
            const total = parseInt(event.newValue, 10);
            const t = parseInt(localStorage.getItem('currentAmount')??'0')
            let percent = (t*100)/total;
            if(percent>100){
              percent=100
            }
            this.contributionPercent= percent+'%'

            // this.toggleVideoPlayPause()
        }
    };

}
