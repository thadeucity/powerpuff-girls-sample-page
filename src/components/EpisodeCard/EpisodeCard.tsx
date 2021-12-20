import React from 'react';
import { EpisodeProps } from '../../services/tvShows/tvMazeDTOs';
import { Image } from '../Image/Image';
import {
  CardContainer,
  EpisodeInfo,
  ImageContainer,
} from './EpisodeCard.styles';

interface EpisodeCardProps {
  episode: EpisodeProps;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({
  episode: { name, summary, image, season, number },
}) => (
  <CardContainer>
    <ImageContainer>
      <Image src={image?.medium} alt={`${name}-S${season}E${number}`} />
      <span>
        S{season}E{number}
      </span>
    </ImageContainer>
    <EpisodeInfo>
      <h2>{name}</h2>
      <p dangerouslySetInnerHTML={{ __html: summary }} />
    </EpisodeInfo>
  </CardContainer>
);
