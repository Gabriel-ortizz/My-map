import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from "components/LinkWrapper"

import * as S from './styles'

const PageTemplate = () => (
  <S.Content>
   <LinkWrapper href="/">
<CloseOutline  size={32}/>
   </LinkWrapper>

   <S.Heading>My Trips</S.Heading>

   <S.Body>
    <p>
   Hey everyone, this is site where i put all the places that i went
   </p>
   </S.Body>
  </S.Content>
)

export default PageTemplate 