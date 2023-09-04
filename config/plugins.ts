module.exports = ({ env }) => ({
  // ...
  'drag-drop-content-types': {
    enabled: true
  },
  'publisher': {
		enabled: true
	},
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('S3_ACCESS_KEY_ID'),
        secretAccessKey: env('S3_ACCESS_SECRET'),
        endpoint: env('S3_ENDPOINT'),
        region: env('S3_REGION'),
        s3BucketEndpoint: true,
        s3ForcePathStyle: true,
        params: {
          Bucket: env('S3_BUCKET'),
        },
      },
    },
  },
  // ...
});