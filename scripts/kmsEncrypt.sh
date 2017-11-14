# sls encrypt -n VARIABLE_NAME -v myvalue [-k keyId]
# xxx should be replace with the plain text
# dev-encryption-master-key
# arn:aws:kms:ap-southeast-2:378790162356:key/0c39b1f4-0c09-4a1e-b957-e39f865b4f0a
sls encrypt -n password -v Passwordplaintext -k  0c39b1f4-0c09-4a1e-b957-e39f865b4f0a
# gmsPasswordplaintext should be replaced with the original password