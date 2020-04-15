# Kinesis

## Kinesis Streams

Collect/process large streams data records

- Read data from a stream 
- Process records
    - Send to a dashboard
    - Generate an alert
    - Dynamically change price
    - Dynamically change advertising

- Scenarios
    - Fast log and data feed intake and processing
    - Realtime metrics and reporting 
    - Realtime data analytics
    - Complex stream processing

- Benefits
    - Real-time aggregation of data
    - Loading the aggregate data into a data warehose
    - Durability and Elasticity
    - Parallel Streams

- Methods to load/get data
    - Kinesis Producer Library (KPL)
    - Kinesis Client Library (KCL)
    - Kinesis Agent
    - Kinesis API

### Core Concepts - Shards

- What is a shard
    - Uniquely identified group of data records in a stream
    - Single shard capacity
        - 1MB/sec data input
        - 2MB/sec data output
        - 5 transactions/sec for reads
        - 1000 records/sec for writes
    - You can create multiple shards in a stream
    - Resharing
        - Shard split
        - Shard merge
- What is a record?
    - Unit of data stored in a stream
    - A record consists of
        - Partition key
        - Sequence Number
        - Data block

- Partition Key
    - Group data by shard
    - Which shard data belongs to
    - Partition key is specified by the application
- Sequence number
    - Unique id for records inserted into a shard 
    - Ids the data blob
    - Assigned with a producer calls PutRecord or PutRecords operations to add data to a stream
    






## Kinesis Analytics

process streaming data

## Kinesis Firehose

Load streaming data into things like Redshift