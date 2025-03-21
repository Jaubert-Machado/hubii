import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
    compiler: {
        styledComponents: true,
    },
}

const withNextIntl = createNextIntlPlugin('./src/configs/request.ts')
export default withNextIntl(nextConfig)
