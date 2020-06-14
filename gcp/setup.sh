# Reference: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/iot
# Reference: https://cloud.google.com/community/tutorials/iot-core-quickstart

# Enable Cloud IOT APIs
gcloud services enable cloudiot.googleapis.com

# Get Google's example code
git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git
cd nodejs-docs-samples/iot/
npm --prefix ./scripts install

# Create Pub/Sub: topic and subscription
gcloud pubsub topics create $GCP_TOPIC_NAME

gcloud pubsub subscriptions create $GCP_SUBSCRIPTION_NAME \
  --topic=$GCP_TOPIC_NAME

# Run helper script
node scripts/iam.js $GCP_TOPIC_NAME

# Create a registry
gcloud iot registries create "your-registry-id" \
  --project=<your-project-id> \
  --region=us-central1 \
  --event-notification-config=topic=projects/<your-project-id>/topics/<pubsub-topic-name>

# Use the generate_keys.sh script to generate your signing keys:
./scripts/generate_keys.sh

# Create a device.
gcloud iot devices create my-node-device \
  --project=my-iot-project \
  --region=us-central1 \
  --registry=my-registry \
  --public-key path=rsa_cert.pem,type=rs256