# `s3ObjectCopy` Submodule <a name="`s3ObjectCopy` Submodule" id="@cdktf/provider-aws.s3ObjectCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ObjectCopy <a name="S3ObjectCopy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy aws_s3_object_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_object_copy

s3ObjectCopy.S3ObjectCopy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  key: str,
  source: str,
  acl: str = None,
  bucket_key_enabled: typing.Union[bool, IResolvable] = None,
  cache_control: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  copy_if_match: str = None,
  copy_if_modified_since: str = None,
  copy_if_none_match: str = None,
  copy_if_unmodified_since: str = None,
  customer_algorithm: str = None,
  customer_key: str = None,
  customer_key_md5: str = None,
  expected_bucket_owner: str = None,
  expected_source_bucket_owner: str = None,
  expires: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  grant: typing.Union[IResolvable, typing.List[S3ObjectCopyGrant]] = None,
  id: str = None,
  kms_encryption_context: str = None,
  kms_key_id: str = None,
  metadata: typing.Mapping[str] = None,
  metadata_directive: str = None,
  object_lock_legal_hold_status: str = None,
  object_lock_mode: str = None,
  object_lock_retain_until_date: str = None,
  request_payer: str = None,
  server_side_encryption: str = None,
  source_customer_algorithm: str = None,
  source_customer_key: str = None,
  source_customer_key_md5: str = None,
  storage_class: str = None,
  tagging_directive: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  website_redirect: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket S3ObjectCopy#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#key S3ObjectCopy#key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source S3ObjectCopy#source}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.acl">acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#acl S3ObjectCopy#acl}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.bucketKeyEnabled">bucket_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.cacheControl">cache_control</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#cache_control S3ObjectCopy#cache_control}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentDisposition">content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentEncoding">content_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentLanguage">content_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_language S3ObjectCopy#content_language}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_type S3ObjectCopy#content_type}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfMatch">copy_if_match</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfModifiedSince">copy_if_modified_since</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfNoneMatch">copy_if_none_match</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfUnmodifiedSince">copy_if_unmodified_since</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.customerAlgorithm">customer_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_algorithm S3ObjectCopy#customer_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.customerKey">customer_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key S3ObjectCopy#customer_key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.customerKeyMd5">customer_key_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key_md5 S3ObjectCopy#customer_key_md5}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expectedSourceBucketOwner">expected_source_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expires">expires</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expires S3ObjectCopy#expires}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.grant">grant</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>]]</code> | grant block. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.kmsEncryptionContext">kms_encryption_context</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_encryption_context S3ObjectCopy#kms_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_key_id S3ObjectCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata S3ObjectCopy#metadata}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadataDirective">metadata_directive</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockLegalHoldStatus">object_lock_legal_hold_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockMode">object_lock_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockRetainUntilDate">object_lock_retain_until_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.requestPayer">request_payer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#request_payer S3ObjectCopy#request_payer}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryption">server_side_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerAlgorithm">source_customer_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKey">source_customer_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKeyMd5">source_customer_key_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#storage_class S3ObjectCopy#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.taggingDirective">tagging_directive</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags S3ObjectCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags_all S3ObjectCopy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.websiteRedirect">website_redirect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket S3ObjectCopy#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#key S3ObjectCopy#key}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source S3ObjectCopy#source}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.acl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#acl S3ObjectCopy#acl}.

---

##### `bucket_key_enabled`<sup>Optional</sup> <a name="bucket_key_enabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.bucketKeyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}.

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.cacheControl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#cache_control S3ObjectCopy#cache_control}.

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentDisposition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}.

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentEncoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}.

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_language S3ObjectCopy#content_language}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_type S3ObjectCopy#content_type}.

---

##### `copy_if_match`<sup>Optional</sup> <a name="copy_if_match" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfMatch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}.

---

##### `copy_if_modified_since`<sup>Optional</sup> <a name="copy_if_modified_since" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfModifiedSince"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}.

---

##### `copy_if_none_match`<sup>Optional</sup> <a name="copy_if_none_match" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfNoneMatch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}.

---

##### `copy_if_unmodified_since`<sup>Optional</sup> <a name="copy_if_unmodified_since" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfUnmodifiedSince"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}.

---

##### `customer_algorithm`<sup>Optional</sup> <a name="customer_algorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.customerAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_algorithm S3ObjectCopy#customer_algorithm}.

---

##### `customer_key`<sup>Optional</sup> <a name="customer_key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.customerKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key S3ObjectCopy#customer_key}.

---

##### `customer_key_md5`<sup>Optional</sup> <a name="customer_key_md5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.customerKeyMd5"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key_md5 S3ObjectCopy#customer_key_md5}.

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expectedBucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}.

---

##### `expected_source_bucket_owner`<sup>Optional</sup> <a name="expected_source_bucket_owner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expectedSourceBucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}.

---

##### `expires`<sup>Optional</sup> <a name="expires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expires"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expires S3ObjectCopy#expires}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}.

---

##### `grant`<sup>Optional</sup> <a name="grant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.grant"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>]]

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#grant S3ObjectCopy#grant}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_encryption_context`<sup>Optional</sup> <a name="kms_encryption_context" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.kmsEncryptionContext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_encryption_context S3ObjectCopy#kms_encryption_context}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_key_id S3ObjectCopy#kms_key_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata S3ObjectCopy#metadata}.

---

##### `metadata_directive`<sup>Optional</sup> <a name="metadata_directive" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadataDirective"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}.

---

##### `object_lock_legal_hold_status`<sup>Optional</sup> <a name="object_lock_legal_hold_status" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockLegalHoldStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}.

---

##### `object_lock_mode`<sup>Optional</sup> <a name="object_lock_mode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}.

---

##### `object_lock_retain_until_date`<sup>Optional</sup> <a name="object_lock_retain_until_date" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockRetainUntilDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}.

---

##### `request_payer`<sup>Optional</sup> <a name="request_payer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.requestPayer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#request_payer S3ObjectCopy#request_payer}.

---

##### `server_side_encryption`<sup>Optional</sup> <a name="server_side_encryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}.

---

##### `source_customer_algorithm`<sup>Optional</sup> <a name="source_customer_algorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}.

---

##### `source_customer_key`<sup>Optional</sup> <a name="source_customer_key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}.

---

##### `source_customer_key_md5`<sup>Optional</sup> <a name="source_customer_key_md5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKeyMd5"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}.

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.storageClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#storage_class S3ObjectCopy#storage_class}.

---

##### `tagging_directive`<sup>Optional</sup> <a name="tagging_directive" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.taggingDirective"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags S3ObjectCopy#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags_all S3ObjectCopy#tags_all}.

---

##### `website_redirect`<sup>Optional</sup> <a name="website_redirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.websiteRedirect"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.putGrant">put_grant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetAcl">reset_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetBucketKeyEnabled">reset_bucket_key_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCacheControl">reset_cache_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentDisposition">reset_content_disposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentEncoding">reset_content_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentLanguage">reset_content_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch">reset_copy_if_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince">reset_copy_if_modified_since</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch">reset_copy_if_none_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince">reset_copy_if_unmodified_since</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerAlgorithm">reset_customer_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKey">reset_customer_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKeyMd5">reset_customer_key_md5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedBucketOwner">reset_expected_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedSourceBucketOwner">reset_expected_source_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpires">reset_expires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetGrant">reset_grant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsEncryptionContext">reset_kms_encryption_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective">reset_metadata_directive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHoldStatus">reset_object_lock_legal_hold_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode">reset_object_lock_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate">reset_object_lock_retain_until_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetRequestPayer">reset_request_payer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption">reset_server_side_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm">reset_source_customer_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey">reset_source_customer_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5">reset_source_customer_key_md5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetStorageClass">reset_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective">reset_tagging_directive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect">reset_website_redirect</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_grant` <a name="put_grant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.putGrant"></a>

```python
def put_grant(
  value: typing.Union[IResolvable, typing.List[S3ObjectCopyGrant]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.putGrant.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>]]

---

##### `reset_acl` <a name="reset_acl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetAcl"></a>

```python
def reset_acl() -> None
```

##### `reset_bucket_key_enabled` <a name="reset_bucket_key_enabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetBucketKeyEnabled"></a>

```python
def reset_bucket_key_enabled() -> None
```

##### `reset_cache_control` <a name="reset_cache_control" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCacheControl"></a>

```python
def reset_cache_control() -> None
```

##### `reset_content_disposition` <a name="reset_content_disposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentDisposition"></a>

```python
def reset_content_disposition() -> None
```

##### `reset_content_encoding` <a name="reset_content_encoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentEncoding"></a>

```python
def reset_content_encoding() -> None
```

##### `reset_content_language` <a name="reset_content_language" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentLanguage"></a>

```python
def reset_content_language() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_copy_if_match` <a name="reset_copy_if_match" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch"></a>

```python
def reset_copy_if_match() -> None
```

##### `reset_copy_if_modified_since` <a name="reset_copy_if_modified_since" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince"></a>

```python
def reset_copy_if_modified_since() -> None
```

##### `reset_copy_if_none_match` <a name="reset_copy_if_none_match" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch"></a>

```python
def reset_copy_if_none_match() -> None
```

##### `reset_copy_if_unmodified_since` <a name="reset_copy_if_unmodified_since" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince"></a>

```python
def reset_copy_if_unmodified_since() -> None
```

##### `reset_customer_algorithm` <a name="reset_customer_algorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerAlgorithm"></a>

```python
def reset_customer_algorithm() -> None
```

##### `reset_customer_key` <a name="reset_customer_key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKey"></a>

```python
def reset_customer_key() -> None
```

##### `reset_customer_key_md5` <a name="reset_customer_key_md5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKeyMd5"></a>

```python
def reset_customer_key_md5() -> None
```

##### `reset_expected_bucket_owner` <a name="reset_expected_bucket_owner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedBucketOwner"></a>

```python
def reset_expected_bucket_owner() -> None
```

##### `reset_expected_source_bucket_owner` <a name="reset_expected_source_bucket_owner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedSourceBucketOwner"></a>

```python
def reset_expected_source_bucket_owner() -> None
```

##### `reset_expires` <a name="reset_expires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpires"></a>

```python
def reset_expires() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_grant` <a name="reset_grant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetGrant"></a>

```python
def reset_grant() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_encryption_context` <a name="reset_kms_encryption_context" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsEncryptionContext"></a>

```python
def reset_kms_encryption_context() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_metadata_directive` <a name="reset_metadata_directive" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective"></a>

```python
def reset_metadata_directive() -> None
```

##### `reset_object_lock_legal_hold_status` <a name="reset_object_lock_legal_hold_status" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHoldStatus"></a>

```python
def reset_object_lock_legal_hold_status() -> None
```

##### `reset_object_lock_mode` <a name="reset_object_lock_mode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode"></a>

```python
def reset_object_lock_mode() -> None
```

##### `reset_object_lock_retain_until_date` <a name="reset_object_lock_retain_until_date" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate"></a>

```python
def reset_object_lock_retain_until_date() -> None
```

##### `reset_request_payer` <a name="reset_request_payer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetRequestPayer"></a>

```python
def reset_request_payer() -> None
```

##### `reset_server_side_encryption` <a name="reset_server_side_encryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption"></a>

```python
def reset_server_side_encryption() -> None
```

##### `reset_source_customer_algorithm` <a name="reset_source_customer_algorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm"></a>

```python
def reset_source_customer_algorithm() -> None
```

##### `reset_source_customer_key` <a name="reset_source_customer_key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey"></a>

```python
def reset_source_customer_key() -> None
```

##### `reset_source_customer_key_md5` <a name="reset_source_customer_key_md5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5"></a>

```python
def reset_source_customer_key_md5() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```

##### `reset_tagging_directive` <a name="reset_tagging_directive" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective"></a>

```python
def reset_tagging_directive() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_website_redirect` <a name="reset_website_redirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect"></a>

```python
def reset_website_redirect() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_object_copy

s3ObjectCopy.S3ObjectCopy.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_object_copy

s3ObjectCopy.S3ObjectCopy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_object_copy

s3ObjectCopy.S3ObjectCopy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grant">grant</a></code> | <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList">S3ObjectCopyGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestCharged">request_charged</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceVersionId">source_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.aclInput">acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabledInput">bucket_key_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput">cache_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput">content_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput">content_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput">content_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput">copy_if_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput">copy_if_modified_since_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput">copy_if_none_match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput">copy_if_unmodified_since_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithmInput">customer_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyInput">customer_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5Input">customer_key_md5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwnerInput">expected_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwnerInput">expected_source_bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiresInput">expires_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grantInput">grant_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContextInput">kms_encryption_context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput">metadata_directive_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatusInput">object_lock_legal_hold_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput">object_lock_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput">object_lock_retain_until_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayerInput">request_payer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput">server_side_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput">source_customer_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput">source_customer_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input">source_customer_key_md5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput">tagging_directive_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput">website_redirect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.acl">acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabled">bucket_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControl">cache_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDisposition">content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncoding">content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguage">content_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch">copy_if_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince">copy_if_modified_since</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch">copy_if_none_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince">copy_if_unmodified_since</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithm">customer_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKey">customer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5">customer_key_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwner">expected_source_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expires">expires</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContext">kms_encryption_context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirective">metadata_directive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatus">object_lock_legal_hold_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockMode">object_lock_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate">object_lock_retain_until_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayer">request_payer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption">server_side_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm">source_customer_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey">source_customer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5">source_customer_key_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirective">tagging_directive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect">website_redirect</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `grant`<sup>Required</sup> <a name="grant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grant"></a>

```python
grant: S3ObjectCopyGrantList
```

- *Type:* <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList">S3ObjectCopyGrantList</a>

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `request_charged`<sup>Required</sup> <a name="request_charged" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestCharged"></a>

```python
request_charged: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `source_version_id`<sup>Required</sup> <a name="source_version_id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceVersionId"></a>

```python
source_version_id: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `acl_input`<sup>Optional</sup> <a name="acl_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.aclInput"></a>

```python
acl_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket_key_enabled_input`<sup>Optional</sup> <a name="bucket_key_enabled_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabledInput"></a>

```python
bucket_key_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_control_input`<sup>Optional</sup> <a name="cache_control_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput"></a>

```python
cache_control_input: str
```

- *Type:* str

---

##### `content_disposition_input`<sup>Optional</sup> <a name="content_disposition_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput"></a>

```python
content_disposition_input: str
```

- *Type:* str

---

##### `content_encoding_input`<sup>Optional</sup> <a name="content_encoding_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput"></a>

```python
content_encoding_input: str
```

- *Type:* str

---

##### `content_language_input`<sup>Optional</sup> <a name="content_language_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput"></a>

```python
content_language_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `copy_if_match_input`<sup>Optional</sup> <a name="copy_if_match_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput"></a>

```python
copy_if_match_input: str
```

- *Type:* str

---

##### `copy_if_modified_since_input`<sup>Optional</sup> <a name="copy_if_modified_since_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput"></a>

```python
copy_if_modified_since_input: str
```

- *Type:* str

---

##### `copy_if_none_match_input`<sup>Optional</sup> <a name="copy_if_none_match_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput"></a>

```python
copy_if_none_match_input: str
```

- *Type:* str

---

##### `copy_if_unmodified_since_input`<sup>Optional</sup> <a name="copy_if_unmodified_since_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput"></a>

```python
copy_if_unmodified_since_input: str
```

- *Type:* str

---

##### `customer_algorithm_input`<sup>Optional</sup> <a name="customer_algorithm_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithmInput"></a>

```python
customer_algorithm_input: str
```

- *Type:* str

---

##### `customer_key_input`<sup>Optional</sup> <a name="customer_key_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyInput"></a>

```python
customer_key_input: str
```

- *Type:* str

---

##### `customer_key_md5_input`<sup>Optional</sup> <a name="customer_key_md5_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5Input"></a>

```python
customer_key_md5_input: str
```

- *Type:* str

---

##### `expected_bucket_owner_input`<sup>Optional</sup> <a name="expected_bucket_owner_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwnerInput"></a>

```python
expected_bucket_owner_input: str
```

- *Type:* str

---

##### `expected_source_bucket_owner_input`<sup>Optional</sup> <a name="expected_source_bucket_owner_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwnerInput"></a>

```python
expected_source_bucket_owner_input: str
```

- *Type:* str

---

##### `expires_input`<sup>Optional</sup> <a name="expires_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiresInput"></a>

```python
expires_input: str
```

- *Type:* str

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grant_input`<sup>Optional</sup> <a name="grant_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grantInput"></a>

```python
grant_input: typing.Union[IResolvable, typing.List[S3ObjectCopyGrant]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `kms_encryption_context_input`<sup>Optional</sup> <a name="kms_encryption_context_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContextInput"></a>

```python
kms_encryption_context_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `metadata_directive_input`<sup>Optional</sup> <a name="metadata_directive_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput"></a>

```python
metadata_directive_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `object_lock_legal_hold_status_input`<sup>Optional</sup> <a name="object_lock_legal_hold_status_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatusInput"></a>

```python
object_lock_legal_hold_status_input: str
```

- *Type:* str

---

##### `object_lock_mode_input`<sup>Optional</sup> <a name="object_lock_mode_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput"></a>

```python
object_lock_mode_input: str
```

- *Type:* str

---

##### `object_lock_retain_until_date_input`<sup>Optional</sup> <a name="object_lock_retain_until_date_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput"></a>

```python
object_lock_retain_until_date_input: str
```

- *Type:* str

---

##### `request_payer_input`<sup>Optional</sup> <a name="request_payer_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayerInput"></a>

```python
request_payer_input: str
```

- *Type:* str

---

##### `server_side_encryption_input`<sup>Optional</sup> <a name="server_side_encryption_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput"></a>

```python
server_side_encryption_input: str
```

- *Type:* str

---

##### `source_customer_algorithm_input`<sup>Optional</sup> <a name="source_customer_algorithm_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput"></a>

```python
source_customer_algorithm_input: str
```

- *Type:* str

---

##### `source_customer_key_input`<sup>Optional</sup> <a name="source_customer_key_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput"></a>

```python
source_customer_key_input: str
```

- *Type:* str

---

##### `source_customer_key_md5_input`<sup>Optional</sup> <a name="source_customer_key_md5_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input"></a>

```python
source_customer_key_md5_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `tagging_directive_input`<sup>Optional</sup> <a name="tagging_directive_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput"></a>

```python
tagging_directive_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `website_redirect_input`<sup>Optional</sup> <a name="website_redirect_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput"></a>

```python
website_redirect_input: str
```

- *Type:* str

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.acl"></a>

```python
acl: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_key_enabled`<sup>Required</sup> <a name="bucket_key_enabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabled"></a>

```python
bucket_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_control`<sup>Required</sup> <a name="cache_control" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

---

##### `content_disposition`<sup>Required</sup> <a name="content_disposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

---

##### `content_encoding`<sup>Required</sup> <a name="content_encoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

---

##### `content_language`<sup>Required</sup> <a name="content_language" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `copy_if_match`<sup>Required</sup> <a name="copy_if_match" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch"></a>

```python
copy_if_match: str
```

- *Type:* str

---

##### `copy_if_modified_since`<sup>Required</sup> <a name="copy_if_modified_since" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince"></a>

```python
copy_if_modified_since: str
```

- *Type:* str

---

##### `copy_if_none_match`<sup>Required</sup> <a name="copy_if_none_match" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch"></a>

```python
copy_if_none_match: str
```

- *Type:* str

---

##### `copy_if_unmodified_since`<sup>Required</sup> <a name="copy_if_unmodified_since" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince"></a>

```python
copy_if_unmodified_since: str
```

- *Type:* str

---

##### `customer_algorithm`<sup>Required</sup> <a name="customer_algorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithm"></a>

```python
customer_algorithm: str
```

- *Type:* str

---

##### `customer_key`<sup>Required</sup> <a name="customer_key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKey"></a>

```python
customer_key: str
```

- *Type:* str

---

##### `customer_key_md5`<sup>Required</sup> <a name="customer_key_md5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5"></a>

```python
customer_key_md5: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `expected_source_bucket_owner`<sup>Required</sup> <a name="expected_source_bucket_owner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwner"></a>

```python
expected_source_bucket_owner: str
```

- *Type:* str

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expires"></a>

```python
expires: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `kms_encryption_context`<sup>Required</sup> <a name="kms_encryption_context" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContext"></a>

```python
kms_encryption_context: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `metadata_directive`<sup>Required</sup> <a name="metadata_directive" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirective"></a>

```python
metadata_directive: str
```

- *Type:* str

---

##### `object_lock_legal_hold_status`<sup>Required</sup> <a name="object_lock_legal_hold_status" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatus"></a>

```python
object_lock_legal_hold_status: str
```

- *Type:* str

---

##### `object_lock_mode`<sup>Required</sup> <a name="object_lock_mode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockMode"></a>

```python
object_lock_mode: str
```

- *Type:* str

---

##### `object_lock_retain_until_date`<sup>Required</sup> <a name="object_lock_retain_until_date" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate"></a>

```python
object_lock_retain_until_date: str
```

- *Type:* str

---

##### `request_payer`<sup>Required</sup> <a name="request_payer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayer"></a>

```python
request_payer: str
```

- *Type:* str

---

##### `server_side_encryption`<sup>Required</sup> <a name="server_side_encryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption"></a>

```python
server_side_encryption: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_customer_algorithm`<sup>Required</sup> <a name="source_customer_algorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm"></a>

```python
source_customer_algorithm: str
```

- *Type:* str

---

##### `source_customer_key`<sup>Required</sup> <a name="source_customer_key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey"></a>

```python
source_customer_key: str
```

- *Type:* str

---

##### `source_customer_key_md5`<sup>Required</sup> <a name="source_customer_key_md5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5"></a>

```python
source_customer_key_md5: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `tagging_directive`<sup>Required</sup> <a name="tagging_directive" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirective"></a>

```python
tagging_directive: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `website_redirect`<sup>Required</sup> <a name="website_redirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect"></a>

```python
website_redirect: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectCopyConfig <a name="S3ObjectCopyConfig" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_object_copy

s3ObjectCopy.S3ObjectCopyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  key: str,
  source: str,
  acl: str = None,
  bucket_key_enabled: typing.Union[bool, IResolvable] = None,
  cache_control: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  copy_if_match: str = None,
  copy_if_modified_since: str = None,
  copy_if_none_match: str = None,
  copy_if_unmodified_since: str = None,
  customer_algorithm: str = None,
  customer_key: str = None,
  customer_key_md5: str = None,
  expected_bucket_owner: str = None,
  expected_source_bucket_owner: str = None,
  expires: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  grant: typing.Union[IResolvable, typing.List[S3ObjectCopyGrant]] = None,
  id: str = None,
  kms_encryption_context: str = None,
  kms_key_id: str = None,
  metadata: typing.Mapping[str] = None,
  metadata_directive: str = None,
  object_lock_legal_hold_status: str = None,
  object_lock_mode: str = None,
  object_lock_retain_until_date: str = None,
  request_payer: str = None,
  server_side_encryption: str = None,
  source_customer_algorithm: str = None,
  source_customer_key: str = None,
  source_customer_key_md5: str = None,
  storage_class: str = None,
  tagging_directive: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  website_redirect: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket S3ObjectCopy#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#key S3ObjectCopy#key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source S3ObjectCopy#source}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.acl">acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#acl S3ObjectCopy#acl}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucketKeyEnabled">bucket_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl">cache_control</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#cache_control S3ObjectCopy#cache_control}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition">content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding">content_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage">content_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_language S3ObjectCopy#content_language}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_type S3ObjectCopy#content_type}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch">copy_if_match</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince">copy_if_modified_since</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch">copy_if_none_match</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince">copy_if_unmodified_since</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerAlgorithm">customer_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_algorithm S3ObjectCopy#customer_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKey">customer_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key S3ObjectCopy#customer_key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKeyMd5">customer_key_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key_md5 S3ObjectCopy#customer_key_md5}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedSourceBucketOwner">expected_source_bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expires">expires</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expires S3ObjectCopy#expires}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.grant">grant</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>]]</code> | grant block. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsEncryptionContext">kms_encryption_context</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_encryption_context S3ObjectCopy#kms_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_key_id S3ObjectCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata S3ObjectCopy#metadata}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective">metadata_directive</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHoldStatus">object_lock_legal_hold_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode">object_lock_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate">object_lock_retain_until_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.requestPayer">request_payer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#request_payer S3ObjectCopy#request_payer}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption">server_side_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm">source_customer_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey">source_customer_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5">source_customer_key_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#storage_class S3ObjectCopy#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective">tagging_directive</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags S3ObjectCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags_all S3ObjectCopy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect">website_redirect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket S3ObjectCopy#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#key S3ObjectCopy#key}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source S3ObjectCopy#source}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.acl"></a>

```python
acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#acl S3ObjectCopy#acl}.

---

##### `bucket_key_enabled`<sup>Optional</sup> <a name="bucket_key_enabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucketKeyEnabled"></a>

```python
bucket_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}.

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#cache_control S3ObjectCopy#cache_control}.

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}.

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}.

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_language S3ObjectCopy#content_language}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_type S3ObjectCopy#content_type}.

---

##### `copy_if_match`<sup>Optional</sup> <a name="copy_if_match" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch"></a>

```python
copy_if_match: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}.

---

##### `copy_if_modified_since`<sup>Optional</sup> <a name="copy_if_modified_since" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince"></a>

```python
copy_if_modified_since: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}.

---

##### `copy_if_none_match`<sup>Optional</sup> <a name="copy_if_none_match" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch"></a>

```python
copy_if_none_match: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}.

---

##### `copy_if_unmodified_since`<sup>Optional</sup> <a name="copy_if_unmodified_since" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince"></a>

```python
copy_if_unmodified_since: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}.

---

##### `customer_algorithm`<sup>Optional</sup> <a name="customer_algorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerAlgorithm"></a>

```python
customer_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_algorithm S3ObjectCopy#customer_algorithm}.

---

##### `customer_key`<sup>Optional</sup> <a name="customer_key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKey"></a>

```python
customer_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key S3ObjectCopy#customer_key}.

---

##### `customer_key_md5`<sup>Optional</sup> <a name="customer_key_md5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKeyMd5"></a>

```python
customer_key_md5: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key_md5 S3ObjectCopy#customer_key_md5}.

---

##### `expected_bucket_owner`<sup>Optional</sup> <a name="expected_bucket_owner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}.

---

##### `expected_source_bucket_owner`<sup>Optional</sup> <a name="expected_source_bucket_owner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedSourceBucketOwner"></a>

```python
expected_source_bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}.

---

##### `expires`<sup>Optional</sup> <a name="expires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expires"></a>

```python
expires: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expires S3ObjectCopy#expires}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}.

---

##### `grant`<sup>Optional</sup> <a name="grant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.grant"></a>

```python
grant: typing.Union[IResolvable, typing.List[S3ObjectCopyGrant]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>]]

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#grant S3ObjectCopy#grant}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_encryption_context`<sup>Optional</sup> <a name="kms_encryption_context" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsEncryptionContext"></a>

```python
kms_encryption_context: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_encryption_context S3ObjectCopy#kms_encryption_context}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_key_id S3ObjectCopy#kms_key_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata S3ObjectCopy#metadata}.

---

##### `metadata_directive`<sup>Optional</sup> <a name="metadata_directive" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective"></a>

```python
metadata_directive: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}.

---

##### `object_lock_legal_hold_status`<sup>Optional</sup> <a name="object_lock_legal_hold_status" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHoldStatus"></a>

```python
object_lock_legal_hold_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}.

---

##### `object_lock_mode`<sup>Optional</sup> <a name="object_lock_mode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode"></a>

```python
object_lock_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}.

---

##### `object_lock_retain_until_date`<sup>Optional</sup> <a name="object_lock_retain_until_date" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate"></a>

```python
object_lock_retain_until_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}.

---

##### `request_payer`<sup>Optional</sup> <a name="request_payer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.requestPayer"></a>

```python
request_payer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#request_payer S3ObjectCopy#request_payer}.

---

##### `server_side_encryption`<sup>Optional</sup> <a name="server_side_encryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption"></a>

```python
server_side_encryption: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}.

---

##### `source_customer_algorithm`<sup>Optional</sup> <a name="source_customer_algorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm"></a>

```python
source_customer_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}.

---

##### `source_customer_key`<sup>Optional</sup> <a name="source_customer_key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey"></a>

```python
source_customer_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}.

---

##### `source_customer_key_md5`<sup>Optional</sup> <a name="source_customer_key_md5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5"></a>

```python
source_customer_key_md5: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}.

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#storage_class S3ObjectCopy#storage_class}.

---

##### `tagging_directive`<sup>Optional</sup> <a name="tagging_directive" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective"></a>

```python
tagging_directive: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags S3ObjectCopy#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags_all S3ObjectCopy#tags_all}.

---

##### `website_redirect`<sup>Optional</sup> <a name="website_redirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect"></a>

```python
website_redirect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}.

---

### S3ObjectCopyGrant <a name="S3ObjectCopyGrant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_object_copy

s3ObjectCopy.S3ObjectCopyGrant(
  permissions: typing.List[str],
  type: str,
  email: str = None,
  id: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#permissions S3ObjectCopy#permissions}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#type S3ObjectCopy#type}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#email S3ObjectCopy#email}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#uri S3ObjectCopy#uri}. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#permissions S3ObjectCopy#permissions}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#type S3ObjectCopy#type}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#email S3ObjectCopy#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#uri S3ObjectCopy#uri}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ObjectCopyGrantList <a name="S3ObjectCopyGrantList" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_object_copy

s3ObjectCopy.S3ObjectCopyGrantList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3ObjectCopyGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3ObjectCopyGrant]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>]]

---


### S3ObjectCopyGrantOutputReference <a name="S3ObjectCopyGrantOutputReference" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_object_copy

s3ObjectCopy.S3ObjectCopyGrantOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3ObjectCopyGrant, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>, cdktf.IResolvable]

---



