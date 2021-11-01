import React, { useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { ImageProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'

type Props = {
  name: string
  text: string
  photo: ImageProps
  id: number
}

const ReviewCard = ({ id, name, photo, text }: Props) => {
  useEffect(() => {
    const texts = document.querySelectorAll('p.description')

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList[
          entry.target.scrollHeight > entry.contentRect.height + 25
            ? 'add'
            : 'remove'
        ]('truncated')
      }
    })

    texts.forEach((text) => observer.observe(text))
  })

  return (
    <S.Card>
      <S.User>
        <S.Image>
          <source srcSet={getImageUrl(photo.url) + '?webp'} type="image/webp" />
          <source srcSet={getImageUrl(photo.url)} type="image/jpg" />
          <img
            src={getImageUrl(photo.url)}
            loading="lazy"
            alt={photo.alternativeText}
          />
        </S.Image>
        <S.Name>{name}</S.Name>
      </S.User>
      <S.Text>
        <input type="checkbox" id={`review-${id}`} />
        <p className="description">{text}</p>
        <label className="label-more" htmlFor={`review-${id}`}>
          Ver tudo
        </label>
      </S.Text>
    </S.Card>
  )
}

export default ReviewCard
