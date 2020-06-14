# Get started with Internet of Things on Amazon Web Services, Google Cloud Platform, and Azure

This repository serves to provide minimal examples of how to get started with IoT (the software end) in the big three cloud platforms.

They will mostly clean, simplify and adapt existing examples. They aim for clarity and brevity, rather than upfronting any concepts and "extras". It's assumed you want to get going and that you have a direction.

## Prerequisites

- Account with one or more of the cloud providers
- You are signed in with your provider of choice
- You have any relevant privileges to setup and destroy needed cloud resources
- You run MacOs or Linux, or are able to adapt shell commands to your own system
- You have a recent version of Node installed, preferably Node 12 or later

## Cloud solutions

The same pattern will work for all three platforms:

- Step into the respective folder of your cloud (`aws` or whichever it may be).
- Export variables from `vars.sh`.
- Run `setup.sh` — the safest way is to do them command by command, as you will sometimes need to provide values derived from running certain commands.
- A Node example to simulate pushing events is provided for each platform. Step into the example folder and run `npm install` or `yarn install` to install dependencies locally, then run the example with `npm start` or `yarn start`.
- When you are done, destroy the project resources with `teardown.sh`.

### Amazon Web Services

Description.

### Google Cloud Platform

Description.

### Azure

Microsoft has created an excellent set of guides and code to get you started with the IoT basics. I am providing adapted versions of those. For original resources, see the references below.

The example is a very slightly cleaned and adapted version based on [https://docs.microsoft.com/sv-se/azure/iot-hub/quickstart-send-telemetry-node](https://docs.microsoft.com/sv-se/azure/iot-hub/quickstart-send-telemetry-node). Please look at the Node package supplied there, in case you want more quickstarts of this kind.

Running the example should give you the possibility to write messages to the IoT Hub, and then to read them as they occur in a second application. AFAIK there is no simple visual (GUI) way of just verifying that messages are coming in.

#### References

- **Reference IoT Hub**: [https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-using-cli](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-using-cli)
- **Reference telemetry**: [https://docs.microsoft.com/sv-se/azure/iot-hub/quickstart-send-telemetry-node](https://docs.microsoft.com/sv-se/azure/iot-hub/quickstart-send-telemetry-node)
