export interface AudioPlatforms {
  name: string;
  url: string;
  iconPath: string;
}

export interface WhereToListenProps {
  audioPlatforms: AudioPlatforms[];
  className?: string;
}

export interface WhereToListenContainerProps {
  className?: string;
}
