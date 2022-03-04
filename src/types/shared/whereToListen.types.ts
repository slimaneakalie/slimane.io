export interface AudioPlatform {
  name: string;
  url: string;
  iconPath: string;
  largeIconPath: string;
}

export interface WhereToListenProps {
  audioPlatforms: AudioPlatform[];
  className?: string;
}

export interface WhereToListenContainerProps {
  className?: string;
}
