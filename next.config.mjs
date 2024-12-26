const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config, {}) {
    // For individual SVG components
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })

    // For SVG sprites
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(css|scss)$/,
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'icon-[name]',
          },
        },
        'svgo-loader',
      ],
    })
    return config
  },
}

export default nextConfig
