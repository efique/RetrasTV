import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import IClips from "../models/IClips";
import IToken from "../models/IToken";

@Component({
  selector: "app-clips",
  templateUrl: "./clips.component.html",
  styleUrls: ["./clips.component.css"]
})
export class ClipsComponent implements OnInit {
  clips = [];
  token
  constructor(private http: HttpClient) {}

  ngOnInit() {


    this.http.post(
      "https://id.twitch.tv/oauth2/token?client_id=tvzmv9pqdb75jezxq3epy0plkkgd19&client_secret=5ql7hzop3ayl7t8l8gv420xrki0562&grant_type=client_credentials", ""
    ).subscribe( (value: IToken) => {

      this.token = value.access_token;
      console.log(this.token);

      this.http
      .get(
        "https://api.twitch.tv/helix/clips?broadcaster_id=441022939&first=6",
        httpOptions
      )
      .subscribe((value: { data: IClips[] }) => {
        for (let i = 0; i < value.data.length; i++) {
          this.clips.push([
            value.data[i].embed_url + "&autoplay=false",
            value.data[i].title,
            value.data[i].creator_name
          ]);
          console.log(this.clips[i]);
        }
      });
    });

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "client-id": "tvzmv9pqdb75jezxq3epy0plkkgd19",
        // "Authorization": this.token,
        "Authorization": "Bearer prhzw17xw5b7mfp7w80fadbjccdbt0"
      })
    };


  }

  getClips(httpOptions){

  }

}
