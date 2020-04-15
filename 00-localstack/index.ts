import { Kinesis } from "aws-sdk";

const kinesis = new Kinesis({
    endpoint: 'http://localhost:4568',
    region: 'us-west-2'
});

const main = async () => {
    const kinesisStreams = await kinesis.listStreams().promise()
    console.log("Stream Lists: ", kinesisStreams);

    const description = await kinesis.describeStream({
        StreamName: kinesisStreams.StreamNames[0]
    }).promise();

    console.log("Stream Description: ", description);

    // const result = await kinesis.putRecord({
    //     Data: Buffer.from("abcd3"),
    //     PartitionKey: '123',
    //     StreamName: kinesisStreams.StreamNames[0]
    // }).promise();

    // console.log("Kinesis Put Result: ", result)
    
    // kinesis.stat
}

main();

