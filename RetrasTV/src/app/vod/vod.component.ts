import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import IVods from "../models/IVods";

@Component({
  selector: "app-vod",
  templateUrl: "./vod.component.html",
  styleUrls: ["./vod.component.css"]
})
export class VodComponent implements OnInit {
  videos = [];
  constructor(private http: HttpClient) {}

  ngOnInit(){
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "aplication/json"
      })
    };
    this.http.get(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDUvJu0o6d3uBs2btHd0VWNH0qfM-I6YQY&channelId=UCnjeK3mWAL_RfAyMdYts9GA&order=date&part=snippet &type=video,id&maxResults=50",
      httpOptions
      )
      .subscribe( value => {
        
        // console.log(value)
        for (let i = 0; i < value.items.length; i++) {
          this.videos.push([
            "https://www.youtube.com/embed/" + value.items[i].id.videoId,
            value.items[i].snippet.title
          ])
          //console.log(value.items[i].id.videoId + " - " + value.items[i].snippet.title)
        }
        console.log(this.videos)
        
        
      });
  }

  // ngOnInit() {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json"
  //     })
  //   };
  //   this.http
  //     .get(
  //       // tslint:disable-next-line:max-line-length
  //       "https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCdsZA5bCTR6lDU4pce-ohxw&key=AIzaSyDUvJu0o6d3uBs2btHd0VWNH0qfM-I6YQY&fbclid=IwAR0DsTT813Qip1LRgyy3WXQkMD1pjaWmlQPDM1DyIiKtvjt91VyWrYbptSU",
  //       httpOptions
  //     )
  //     .subscribe((value: { data: IVods[] }) => {
  //       for (let i = 0; i < value.data.length; i++) {
  //         this.vods.push([
  //           value.data[i].snippet.title,
  //           value.data[i].snippet.description,
  //           value.data[i].snippet.publishedAt
  //         ]);
  //         console.log(this.vods[i]);
  //       }
  //     });
  // }

  
}
