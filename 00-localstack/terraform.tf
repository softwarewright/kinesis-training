provider "aws" {
  access_key                  = "mock_access_key"
  region                      = "us-west-2"

  endpoints {
    kinesis        = "http://localhost:4568"
  }
}

resource "aws_kinesis_stream" "local_stream" {
    name = "localstack_stream"
    shard_count = 1
    retention_period = 80   
}