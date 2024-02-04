export type Feed = {
  id: string;
  caption: string | null; // O texto na legenda da mídia. Não retornável para mídias em álbuns.
  is_shared_to_feed: boolean | null; // Somente para Reels. true indica que o reel pode aparecer nas abas Feed e Reels. false indica que o reel pode aparecer apenas na aba Reels.
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'; // O tipo de mídia. Pode ser IMAGE, VIDEO ou CAROUSEL_ALBUM.
  media_url: string; // O URL da mídia.
  permalink: string; // A URL permanente da mídia. Será omitida se a mídia contiver material protegido por direitos autorais ou tiver sido sinalizada como violação desses direitos.
  username: string; // O nome de usuário do proprietário da mídia.
  children: { // Obtenha a lista de mídias do álbum. Disponível somente em mídias de CAROUSEL_ALBUM.
    data: Feed[];
  };
};
