import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import IClips from "../models/IClips";

@Component({
  selector: "app-clips",
  templateUrl: "./clips.component.html",
  styleUrls: ["./clips.component.css"]
})
export class ClipsComponent implements OnInit {
  clips: string[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "client-id": "v495cr8bd4ij2trdgeidujks3ec420"
      })
    };
    this.http
      .get(
        "https://api.twitch.tv/helix/clips?broadcaster_id=441022939",
        httpOptions
      )
      .subscribe((value: IClips[]) => {
        for (let i = 0; i < value.data.length; i++) {
          this.clips.push(value.data[i].embed_url);
          console.log(this.clips[i]);
        }
      });
  }
}
