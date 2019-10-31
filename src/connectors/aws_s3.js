import AWS from 'aws-sdk';
require('dotenv').config()

const credentials = {
   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
   secretAccessKey: process.env.AWS_SECRET_KEY,
}

const s3Server = process.env.AWS_S3_SERVER || 'http://localhost:4572';
const bucketName = process.env.AWS_BUCKET_NAME

const s3client = new AWS.S3({
   credentials,
   endpoint: s3Server,
   s3ForcePathStyle: true
})

exports.uploadFile = (data, fileName) => {
   let extn = fileName.split('.').pop();
   var contentType = "jpeg"
   if (extn == 'png' || extn == 'jpg' || extn == 'jpeg' || extn == 'gif') 
     contentType = "image/" + extn;
   console.log(contentType);
   return new Promise((resolve, reject) => {
      s3client.upload(
         {
            Bucket: bucketName,
            Key: fileName,
            Body: data,
            ContentType: contentType,
            ACL: 'public-read',
         },
         (err, data) => {
            if (err) return reject(err)
            resolve(data)
         },
      )
   })
}
