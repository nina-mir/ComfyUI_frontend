import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import { t } from '../../i18n/translations'
import ServerlessCustomerProofSection from './ServerlessCustomerProofSection.vue'

describe('ServerlessCustomerProofSection', () => {
  it('hides customer proof and creative apps by default', () => {
    render(ServerlessCustomerProofSection, { props: { locale: 'en' } })

    expect(
      screen.queryByText(
        t('platform.serverlessCaseStudy.quote', {}, { locale: 'en' })
      )
    ).toBeNull()
    expect(
      screen.queryByRole('heading', {
        name: t('platform.serverlessApps.heading', {}, { locale: 'en' })
      })
    ).toBeNull()
  })

  it('can reveal the staged sections', () => {
    render(ServerlessCustomerProofSection, {
      props: {
        locale: 'en',
        showCreativeApps: true,
        showCustomerProof: true
      }
    })

    expect(
      screen.getByRole('heading', {
        name: t('platform.serverlessApps.heading', {}, { locale: 'en' })
      })
    ).toBeTruthy()
    expect(
      screen.getByText(
        t('platform.serverlessCaseStudy.quote', {}, { locale: 'en' })
      )
    ).toBeTruthy()
    expect(
      screen.getByRole('link', {
        name: t('platform.serverlessCaseStudy.linkLabel', {}, { locale: 'en' })
      })
    ).toHaveAttribute('href', '/customers/svedka-silverside/')
  })
})
