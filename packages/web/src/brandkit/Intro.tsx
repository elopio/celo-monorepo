import * as React from 'react'
import { Text, View } from 'react-native'
import { brandStyles } from 'src/brandkit/common/constants'
import Page from 'src/brandkit/common/Page'
import { H1, H4 } from 'src/fonts/Fonts'
import { I18nProps, Trans, withNamespaces, NameSpaces } from 'src/i18n'
import InlineAnchor from 'src/shared/InlineAnchor'
import menuItems from 'src/shared/menu-items'
import { fonts, standardStyles } from 'src/styles'

export default React.memo(function Intro() {
  return (
    <Page
      sections={[
        {
          id: 'overview',
          children: <Overview />,
        },
      ]}
    />
  )
})

const Overview = withNamespaces(NameSpaces.brand)(function _Overview({ t }: I18nProps) {
  return (
    <View style={brandStyles.gap}>
      <H1>{t('home.title')}</H1>
      <H4 style={standardStyles.blockMarginBottomTablet}>{t('home.introduction')}</H4>
      <Text style={fonts.h5}>{t('home.useageTitle')}</Text>
      <Text style={fonts.p}>
        <Trans i18nKey="home.useageText">
          <InlineAnchor href={menuItems.CODE_OF_CONDUCT.link}>Code Of Conduct</InlineAnchor>
        </Trans>
      </Text>
    </View>
  )
})
