import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { YoutubeSearchService } from 'src/app/services/youtube-search-service';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {

  constructor(
    private youtubeService: YoutubeSearchService, 
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar){ }

  videos: any[any];
  searchText = null;
  filterSearch;
  typeSearch = 1;
  title = 'Pesquisar vídeos/canais no youtube';
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  searchVideo()
  {
    this.videos = [];
    this.isLoading$.next(true);
    this.youtubeService.pesquisar(this.searchText, this.typeSearch).subscribe(result =>
      {
        if (result && result.length > 0)
          this.videos = result;
        else
        {
          this._snackBar.open("Nenhum resultado encontrado!!", "Fechar", {
            duration: 4000,
            panelClass: ['custom-snackbar']
          });
        }
        this.isLoading$.next(false);
      })
    // this.videos = [{"id":"QETexVf8Gz8","title":"NVIDIA RTX In 2020 - STILL Not Worth It?","description":"NVIDIA's RTX technologies like ray tracing and DLSS have been included into more games but has performance been improved enough? We've spent ..."},{"id":"IQZoeRv1xeg","title":"Battlefield V: Ultra RTX Realism - 2080 Ti Gameplay (No HUD)","description":"RTX at 2K 60fps is unbelievable. 2080 Ti Gameplay. This video is sponsored by NVIDIA. Experience the unparalleled gaming performance of NVIDIA GeForce ..."},{"id":"WhAs_SNRQnc","title":"RTX um ano e meio depois: chegou a hora das tecnologias Nvidia decolarem?","description":"Artigo completo: RTX um ano e meio depois: chegou a hora das tecnologias Nvidia decolarem? Em agosto de 2018 o lançamento das novas placas da NVIDIA ..."},{"id":"43jDNZEHJ5g","title":"MINECRAFT Como Você NUNCA Viu! | Gameplay com Ray Tracing RTX... Impressionante!!!","description":"Vídeo gameplay do jogo Minecraft na versão com suporte a Ray Tracing via NVIDIA RTX. Bilômetro, baixe GRÁTIS e economize ..."},{"id":"3OUbLaIe1eE","title":"RTX 2060 aguenta mesmo Ray Tracing?","description":"Recentemente publicamos um artigo sobre o amadurecimento do ecossistema das RTXs da Nvidia, e uma curiosidade surgiu: como anda a RTX 2060?"},{"id":"UavboWlhmWw","title":"GeForce GTX 980 Ti vs GTX 1070 &amp; RTX 2060, The 2020 Revisit, 36 Game Benchmark","description":"Support us on Patreon https://www.patreon.com/hardwareunboxed Merch: http://crowdmade.com/hardwareunboxed GeForce RTX 2070 Super ..."},{"id":"9_XDlIxAkFs","title":"Was RTX a big scam? – Performance &amp; image quality analysis","description":"Grab the Volta XL magnetic charging cable on Amazon at https://lmg.gg/amazonvoltaxl or their main website at https://www.voltacharger.com Setup your game ..."},{"id":"eh_mbAYhfaM","title":"Performance e mudança visual do Ray Tracing em Battlefield V! RTX 2080 Ti e 2080 testadas","description":"Artigo completo: https://adrenaline.uol.com.br/2018/11/14/57227/diferenca-visual-e-de-performance-do-ray-tracing-rodando-nas-rtx-2080-ti-e-2080/ Com as ..."},{"id":"AdTxrggo8e8","title":"Minecraft RTX - RTX On/Off Gameplay","description":"RTX is coming to Minecraft. Take a look at this direct-feed, RTX On gameplay and witness this classic world in a whole new light. Subscribe to GeForce!"},{"id":"6WzrBM3SZpM","title":"Minecraft rtx Oficial,mas eu demoli o mapa e não podia! Desculpa Nvidia","description":"Minecraft rtx Oficial,mas eu demoli o mapa e não podia! Desculpa Nvidia, tirando as piadas, eu amo essa marca Nvidia ! Obg pelo convite para textar ..."}];
  }

  clear()
  {
    this.searchText = null;
    this.videos = [];
  }
}
