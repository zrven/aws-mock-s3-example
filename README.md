# aws-mock-s3-example
Sample application that use localstack to test AWS services

## Prerequisites
- Docker desktop
- awscli client (install using brew, pip3 or visit https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
  
## Usage

```bash
git clone https://github.com/zrven/aws-mock-s3-example.git
cd aws-mock-s3-example
docker-compose up -d
aws configure --profile localstack
aws --profile localstack --endpoint-url=http://localhost:4566 s3api create-bucket --bucket demo-bucket
aws --profile localstack --endpoint-url=http://localhost:4566 s3api put-bucket-acl --bucket demo-bucket --acl public-read
curl -X POST http://localhost:4000/api/document -F file=@<image>
```

## Referenes
https://medium.com/swlh/how-to-mock-aws-services-in-local-development-e231852e8a0f

