# `s3ObjectCopy` Submodule <a name="`s3ObjectCopy` Submodule" id="@cdktf/provider-aws.s3ObjectCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ObjectCopy <a name="S3ObjectCopy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy aws_s3_object_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object_copy.S3ObjectCopy;

S3ObjectCopy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .bucket(java.lang.String)
    .key(java.lang.String)
    .source(java.lang.String)
//  .acl(java.lang.String)
//  .bucketKeyEnabled(java.lang.Boolean)
//  .bucketKeyEnabled(IResolvable)
//  .cacheControl(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .copyIfMatch(java.lang.String)
//  .copyIfModifiedSince(java.lang.String)
//  .copyIfNoneMatch(java.lang.String)
//  .copyIfUnmodifiedSince(java.lang.String)
//  .customerAlgorithm(java.lang.String)
//  .customerKey(java.lang.String)
//  .customerKeyMd5(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
//  .expectedSourceBucketOwner(java.lang.String)
//  .expires(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .grant(IResolvable)
//  .grant(java.util.List<S3ObjectCopyGrant>)
//  .id(java.lang.String)
//  .kmsEncryptionContext(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .metadataDirective(java.lang.String)
//  .objectLockLegalHoldStatus(java.lang.String)
//  .objectLockMode(java.lang.String)
//  .objectLockRetainUntilDate(java.lang.String)
//  .requestPayer(java.lang.String)
//  .serverSideEncryption(java.lang.String)
//  .sourceCustomerAlgorithm(java.lang.String)
//  .sourceCustomerKey(java.lang.String)
//  .sourceCustomerKeyMd5(java.lang.String)
//  .storageClass(java.lang.String)
//  .taggingDirective(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .websiteRedirect(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket S3ObjectCopy#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#key S3ObjectCopy#key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source S3ObjectCopy#source}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#acl S3ObjectCopy#acl}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#cache_control S3ObjectCopy#cache_control}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_language S3ObjectCopy#content_language}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_type S3ObjectCopy#content_type}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfMatch">copyIfMatch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfModifiedSince">copyIfModifiedSince</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfNoneMatch">copyIfNoneMatch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfUnmodifiedSince">copyIfUnmodifiedSince</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.customerAlgorithm">customerAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_algorithm S3ObjectCopy#customer_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.customerKey">customerKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key S3ObjectCopy#customer_key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.customerKeyMd5">customerKeyMd5</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key_md5 S3ObjectCopy#customer_key_md5}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expectedSourceBucketOwner">expectedSourceBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expires">expires</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expires S3ObjectCopy#expires}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.grant">grant</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>></code> | grant block. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.kmsEncryptionContext">kmsEncryptionContext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_encryption_context S3ObjectCopy#kms_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_key_id S3ObjectCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata S3ObjectCopy#metadata}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadataDirective">metadataDirective</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockLegalHoldStatus">objectLockLegalHoldStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockMode">objectLockMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.requestPayer">requestPayer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#request_payer S3ObjectCopy#request_payer}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerAlgorithm">sourceCustomerAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKey">sourceCustomerKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKeyMd5">sourceCustomerKeyMd5</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.storageClass">storageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#storage_class S3ObjectCopy#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.taggingDirective">taggingDirective</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags S3ObjectCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags_all S3ObjectCopy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket S3ObjectCopy#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#key S3ObjectCopy#key}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source S3ObjectCopy#source}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.acl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#acl S3ObjectCopy#acl}.

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.bucketKeyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.cacheControl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#cache_control S3ObjectCopy#cache_control}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentDisposition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentEncoding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}.

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentLanguage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_language S3ObjectCopy#content_language}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_type S3ObjectCopy#content_type}.

---

##### `copyIfMatch`<sup>Optional</sup> <a name="copyIfMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfMatch"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}.

---

##### `copyIfModifiedSince`<sup>Optional</sup> <a name="copyIfModifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfModifiedSince"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}.

---

##### `copyIfNoneMatch`<sup>Optional</sup> <a name="copyIfNoneMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfNoneMatch"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}.

---

##### `copyIfUnmodifiedSince`<sup>Optional</sup> <a name="copyIfUnmodifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.copyIfUnmodifiedSince"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}.

---

##### `customerAlgorithm`<sup>Optional</sup> <a name="customerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.customerAlgorithm"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_algorithm S3ObjectCopy#customer_algorithm}.

---

##### `customerKey`<sup>Optional</sup> <a name="customerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.customerKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key S3ObjectCopy#customer_key}.

---

##### `customerKeyMd5`<sup>Optional</sup> <a name="customerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.customerKeyMd5"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key_md5 S3ObjectCopy#customer_key_md5}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expectedBucketOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}.

---

##### `expectedSourceBucketOwner`<sup>Optional</sup> <a name="expectedSourceBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expectedSourceBucketOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}.

---

##### `expires`<sup>Optional</sup> <a name="expires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.expires"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expires S3ObjectCopy#expires}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}.

---

##### `grant`<sup>Optional</sup> <a name="grant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.grant"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>>

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#grant S3ObjectCopy#grant}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsEncryptionContext`<sup>Optional</sup> <a name="kmsEncryptionContext" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.kmsEncryptionContext"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_encryption_context S3ObjectCopy#kms_encryption_context}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_key_id S3ObjectCopy#kms_key_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata S3ObjectCopy#metadata}.

---

##### `metadataDirective`<sup>Optional</sup> <a name="metadataDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.metadataDirective"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}.

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="objectLockLegalHoldStatus" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockLegalHoldStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}.

---

##### `objectLockMode`<sup>Optional</sup> <a name="objectLockMode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}.

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.objectLockRetainUntilDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}.

---

##### `requestPayer`<sup>Optional</sup> <a name="requestPayer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.requestPayer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#request_payer S3ObjectCopy#request_payer}.

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.serverSideEncryption"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}.

---

##### `sourceCustomerAlgorithm`<sup>Optional</sup> <a name="sourceCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerAlgorithm"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}.

---

##### `sourceCustomerKey`<sup>Optional</sup> <a name="sourceCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}.

---

##### `sourceCustomerKeyMd5`<sup>Optional</sup> <a name="sourceCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.sourceCustomerKeyMd5"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}.

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.storageClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#storage_class S3ObjectCopy#storage_class}.

---

##### `taggingDirective`<sup>Optional</sup> <a name="taggingDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.taggingDirective"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags S3ObjectCopy#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags_all S3ObjectCopy#tags_all}.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.websiteRedirect"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.putGrant">putGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetBucketKeyEnabled">resetBucketKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch">resetCopyIfMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince">resetCopyIfModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch">resetCopyIfNoneMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince">resetCopyIfUnmodifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerAlgorithm">resetCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKey">resetCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKeyMd5">resetCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedSourceBucketOwner">resetExpectedSourceBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpires">resetExpires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetGrant">resetGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsEncryptionContext">resetKmsEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective">resetMetadataDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHoldStatus">resetObjectLockLegalHoldStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode">resetObjectLockMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate">resetObjectLockRetainUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetRequestPayer">resetRequestPayer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm">resetSourceCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey">resetSourceCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5">resetSourceCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective">resetTaggingDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect">resetWebsiteRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putGrant` <a name="putGrant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.putGrant"></a>

```java
public void putGrant(IResolvable OR java.util.List<S3ObjectCopyGrant> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.putGrant.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>>

---

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetAcl"></a>

```java
public void resetAcl()
```

##### `resetBucketKeyEnabled` <a name="resetBucketKeyEnabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetBucketKeyEnabled"></a>

```java
public void resetBucketKeyEnabled()
```

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCacheControl"></a>

```java
public void resetCacheControl()
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentDisposition"></a>

```java
public void resetContentDisposition()
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentEncoding"></a>

```java
public void resetContentEncoding()
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentLanguage"></a>

```java
public void resetContentLanguage()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetCopyIfMatch` <a name="resetCopyIfMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch"></a>

```java
public void resetCopyIfMatch()
```

##### `resetCopyIfModifiedSince` <a name="resetCopyIfModifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince"></a>

```java
public void resetCopyIfModifiedSince()
```

##### `resetCopyIfNoneMatch` <a name="resetCopyIfNoneMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch"></a>

```java
public void resetCopyIfNoneMatch()
```

##### `resetCopyIfUnmodifiedSince` <a name="resetCopyIfUnmodifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince"></a>

```java
public void resetCopyIfUnmodifiedSince()
```

##### `resetCustomerAlgorithm` <a name="resetCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerAlgorithm"></a>

```java
public void resetCustomerAlgorithm()
```

##### `resetCustomerKey` <a name="resetCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKey"></a>

```java
public void resetCustomerKey()
```

##### `resetCustomerKeyMd5` <a name="resetCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetCustomerKeyMd5"></a>

```java
public void resetCustomerKeyMd5()
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```

##### `resetExpectedSourceBucketOwner` <a name="resetExpectedSourceBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpectedSourceBucketOwner"></a>

```java
public void resetExpectedSourceBucketOwner()
```

##### `resetExpires` <a name="resetExpires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetExpires"></a>

```java
public void resetExpires()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetGrant` <a name="resetGrant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetGrant"></a>

```java
public void resetGrant()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetId"></a>

```java
public void resetId()
```

##### `resetKmsEncryptionContext` <a name="resetKmsEncryptionContext" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsEncryptionContext"></a>

```java
public void resetKmsEncryptionContext()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMetadataDirective` <a name="resetMetadataDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective"></a>

```java
public void resetMetadataDirective()
```

##### `resetObjectLockLegalHoldStatus` <a name="resetObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHoldStatus"></a>

```java
public void resetObjectLockLegalHoldStatus()
```

##### `resetObjectLockMode` <a name="resetObjectLockMode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode"></a>

```java
public void resetObjectLockMode()
```

##### `resetObjectLockRetainUntilDate` <a name="resetObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate"></a>

```java
public void resetObjectLockRetainUntilDate()
```

##### `resetRequestPayer` <a name="resetRequestPayer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetRequestPayer"></a>

```java
public void resetRequestPayer()
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption"></a>

```java
public void resetServerSideEncryption()
```

##### `resetSourceCustomerAlgorithm` <a name="resetSourceCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm"></a>

```java
public void resetSourceCustomerAlgorithm()
```

##### `resetSourceCustomerKey` <a name="resetSourceCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey"></a>

```java
public void resetSourceCustomerKey()
```

##### `resetSourceCustomerKeyMd5` <a name="resetSourceCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5"></a>

```java
public void resetSourceCustomerKeyMd5()
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetStorageClass"></a>

```java
public void resetStorageClass()
```

##### `resetTaggingDirective` <a name="resetTaggingDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective"></a>

```java
public void resetTaggingDirective()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetWebsiteRedirect` <a name="resetWebsiteRedirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect"></a>

```java
public void resetWebsiteRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object_copy.S3ObjectCopy;

S3ObjectCopy.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object_copy.S3ObjectCopy;

S3ObjectCopy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object_copy.S3ObjectCopy;

S3ObjectCopy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiration">expiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grant">grant</a></code> | <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList">S3ObjectCopyGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestCharged">requestCharged</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceVersionId">sourceVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.aclInput">aclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabledInput">bucketKeyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput">cacheControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput">contentDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput">contentEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput">contentLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput">copyIfMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput">copyIfModifiedSinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput">copyIfNoneMatchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput">copyIfUnmodifiedSinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithmInput">customerAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyInput">customerKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5Input">customerKeyMd5Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwnerInput">expectedSourceBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiresInput">expiresInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grantInput">grantInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContextInput">kmsEncryptionContextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput">metadataDirectiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatusInput">objectLockLegalHoldStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput">objectLockModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput">objectLockRetainUntilDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayerInput">requestPayerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput">sourceCustomerAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput">sourceCustomerKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input">sourceCustomerKeyMd5Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput">taggingDirectiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput">websiteRedirectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.acl">acl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch">copyIfMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince">copyIfModifiedSince</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch">copyIfNoneMatch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince">copyIfUnmodifiedSince</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithm">customerAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKey">customerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5">customerKeyMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwner">expectedSourceBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expires">expires</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContext">kmsEncryptionContext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirective">metadataDirective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatus">objectLockLegalHoldStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockMode">objectLockMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayer">requestPayer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm">sourceCustomerAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey">sourceCustomerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5">sourceCustomerKeyMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirective">taggingDirective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

---

##### `grant`<sup>Required</sup> <a name="grant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grant"></a>

```java
public S3ObjectCopyGrantList getGrant();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList">S3ObjectCopyGrantList</a>

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `requestCharged`<sup>Required</sup> <a name="requestCharged" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestCharged"></a>

```java
public IResolvable getRequestCharged();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sourceVersionId`<sup>Required</sup> <a name="sourceVersionId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceVersionId"></a>

```java
public java.lang.String getSourceVersionId();
```

- *Type:* java.lang.String

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.aclInput"></a>

```java
public java.lang.String getAclInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucketKeyEnabledInput`<sup>Optional</sup> <a name="bucketKeyEnabledInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabledInput"></a>

```java
public java.lang.Object getBucketKeyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput"></a>

```java
public java.lang.String getCacheControlInput();
```

- *Type:* java.lang.String

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput"></a>

```java
public java.lang.String getContentDispositionInput();
```

- *Type:* java.lang.String

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput"></a>

```java
public java.lang.String getContentEncodingInput();
```

- *Type:* java.lang.String

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput"></a>

```java
public java.lang.String getContentLanguageInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `copyIfMatchInput`<sup>Optional</sup> <a name="copyIfMatchInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput"></a>

```java
public java.lang.String getCopyIfMatchInput();
```

- *Type:* java.lang.String

---

##### `copyIfModifiedSinceInput`<sup>Optional</sup> <a name="copyIfModifiedSinceInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput"></a>

```java
public java.lang.String getCopyIfModifiedSinceInput();
```

- *Type:* java.lang.String

---

##### `copyIfNoneMatchInput`<sup>Optional</sup> <a name="copyIfNoneMatchInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput"></a>

```java
public java.lang.String getCopyIfNoneMatchInput();
```

- *Type:* java.lang.String

---

##### `copyIfUnmodifiedSinceInput`<sup>Optional</sup> <a name="copyIfUnmodifiedSinceInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput"></a>

```java
public java.lang.String getCopyIfUnmodifiedSinceInput();
```

- *Type:* java.lang.String

---

##### `customerAlgorithmInput`<sup>Optional</sup> <a name="customerAlgorithmInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithmInput"></a>

```java
public java.lang.String getCustomerAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `customerKeyInput`<sup>Optional</sup> <a name="customerKeyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyInput"></a>

```java
public java.lang.String getCustomerKeyInput();
```

- *Type:* java.lang.String

---

##### `customerKeyMd5Input`<sup>Optional</sup> <a name="customerKeyMd5Input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5Input"></a>

```java
public java.lang.String getCustomerKeyMd5Input();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `expectedSourceBucketOwnerInput`<sup>Optional</sup> <a name="expectedSourceBucketOwnerInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwnerInput"></a>

```java
public java.lang.String getExpectedSourceBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `expiresInput`<sup>Optional</sup> <a name="expiresInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expiresInput"></a>

```java
public java.lang.String getExpiresInput();
```

- *Type:* java.lang.String

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `grantInput`<sup>Optional</sup> <a name="grantInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.grantInput"></a>

```java
public java.lang.Object getGrantInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsEncryptionContextInput`<sup>Optional</sup> <a name="kmsEncryptionContextInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContextInput"></a>

```java
public java.lang.String getKmsEncryptionContextInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `metadataDirectiveInput`<sup>Optional</sup> <a name="metadataDirectiveInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput"></a>

```java
public java.lang.String getMetadataDirectiveInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `objectLockLegalHoldStatusInput`<sup>Optional</sup> <a name="objectLockLegalHoldStatusInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatusInput"></a>

```java
public java.lang.String getObjectLockLegalHoldStatusInput();
```

- *Type:* java.lang.String

---

##### `objectLockModeInput`<sup>Optional</sup> <a name="objectLockModeInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput"></a>

```java
public java.lang.String getObjectLockModeInput();
```

- *Type:* java.lang.String

---

##### `objectLockRetainUntilDateInput`<sup>Optional</sup> <a name="objectLockRetainUntilDateInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput"></a>

```java
public java.lang.String getObjectLockRetainUntilDateInput();
```

- *Type:* java.lang.String

---

##### `requestPayerInput`<sup>Optional</sup> <a name="requestPayerInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayerInput"></a>

```java
public java.lang.String getRequestPayerInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput"></a>

```java
public java.lang.String getServerSideEncryptionInput();
```

- *Type:* java.lang.String

---

##### `sourceCustomerAlgorithmInput`<sup>Optional</sup> <a name="sourceCustomerAlgorithmInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput"></a>

```java
public java.lang.String getSourceCustomerAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `sourceCustomerKeyInput`<sup>Optional</sup> <a name="sourceCustomerKeyInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput"></a>

```java
public java.lang.String getSourceCustomerKeyInput();
```

- *Type:* java.lang.String

---

##### `sourceCustomerKeyMd5Input`<sup>Optional</sup> <a name="sourceCustomerKeyMd5Input" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input"></a>

```java
public java.lang.String getSourceCustomerKeyMd5Input();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `taggingDirectiveInput`<sup>Optional</sup> <a name="taggingDirectiveInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput"></a>

```java
public java.lang.String getTaggingDirectiveInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `websiteRedirectInput`<sup>Optional</sup> <a name="websiteRedirectInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput"></a>

```java
public java.lang.String getWebsiteRedirectInput();
```

- *Type:* java.lang.String

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketKeyEnabled`<sup>Required</sup> <a name="bucketKeyEnabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.bucketKeyEnabled"></a>

```java
public java.lang.Object getBucketKeyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `copyIfMatch`<sup>Required</sup> <a name="copyIfMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch"></a>

```java
public java.lang.String getCopyIfMatch();
```

- *Type:* java.lang.String

---

##### `copyIfModifiedSince`<sup>Required</sup> <a name="copyIfModifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince"></a>

```java
public java.lang.String getCopyIfModifiedSince();
```

- *Type:* java.lang.String

---

##### `copyIfNoneMatch`<sup>Required</sup> <a name="copyIfNoneMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch"></a>

```java
public java.lang.String getCopyIfNoneMatch();
```

- *Type:* java.lang.String

---

##### `copyIfUnmodifiedSince`<sup>Required</sup> <a name="copyIfUnmodifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince"></a>

```java
public java.lang.String getCopyIfUnmodifiedSince();
```

- *Type:* java.lang.String

---

##### `customerAlgorithm`<sup>Required</sup> <a name="customerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerAlgorithm"></a>

```java
public java.lang.String getCustomerAlgorithm();
```

- *Type:* java.lang.String

---

##### `customerKey`<sup>Required</sup> <a name="customerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKey"></a>

```java
public java.lang.String getCustomerKey();
```

- *Type:* java.lang.String

---

##### `customerKeyMd5`<sup>Required</sup> <a name="customerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.customerKeyMd5"></a>

```java
public java.lang.String getCustomerKeyMd5();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `expectedSourceBucketOwner`<sup>Required</sup> <a name="expectedSourceBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expectedSourceBucketOwner"></a>

```java
public java.lang.String getExpectedSourceBucketOwner();
```

- *Type:* java.lang.String

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.expires"></a>

```java
public java.lang.String getExpires();
```

- *Type:* java.lang.String

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `kmsEncryptionContext`<sup>Required</sup> <a name="kmsEncryptionContext" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsEncryptionContext"></a>

```java
public java.lang.String getKmsEncryptionContext();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `metadataDirective`<sup>Required</sup> <a name="metadataDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.metadataDirective"></a>

```java
public java.lang.String getMetadataDirective();
```

- *Type:* java.lang.String

---

##### `objectLockLegalHoldStatus`<sup>Required</sup> <a name="objectLockLegalHoldStatus" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldStatus"></a>

```java
public java.lang.String getObjectLockLegalHoldStatus();
```

- *Type:* java.lang.String

---

##### `objectLockMode`<sup>Required</sup> <a name="objectLockMode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockMode"></a>

```java
public java.lang.String getObjectLockMode();
```

- *Type:* java.lang.String

---

##### `objectLockRetainUntilDate`<sup>Required</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate"></a>

```java
public java.lang.String getObjectLockRetainUntilDate();
```

- *Type:* java.lang.String

---

##### `requestPayer`<sup>Required</sup> <a name="requestPayer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.requestPayer"></a>

```java
public java.lang.String getRequestPayer();
```

- *Type:* java.lang.String

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption"></a>

```java
public java.lang.String getServerSideEncryption();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sourceCustomerAlgorithm`<sup>Required</sup> <a name="sourceCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm"></a>

```java
public java.lang.String getSourceCustomerAlgorithm();
```

- *Type:* java.lang.String

---

##### `sourceCustomerKey`<sup>Required</sup> <a name="sourceCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey"></a>

```java
public java.lang.String getSourceCustomerKey();
```

- *Type:* java.lang.String

---

##### `sourceCustomerKeyMd5`<sup>Required</sup> <a name="sourceCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5"></a>

```java
public java.lang.String getSourceCustomerKeyMd5();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `taggingDirective`<sup>Required</sup> <a name="taggingDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.taggingDirective"></a>

```java
public java.lang.String getTaggingDirective();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `websiteRedirect`<sup>Required</sup> <a name="websiteRedirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect"></a>

```java
public java.lang.String getWebsiteRedirect();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectCopyConfig <a name="S3ObjectCopyConfig" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object_copy.S3ObjectCopyConfig;

S3ObjectCopyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .bucket(java.lang.String)
    .key(java.lang.String)
    .source(java.lang.String)
//  .acl(java.lang.String)
//  .bucketKeyEnabled(java.lang.Boolean)
//  .bucketKeyEnabled(IResolvable)
//  .cacheControl(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .copyIfMatch(java.lang.String)
//  .copyIfModifiedSince(java.lang.String)
//  .copyIfNoneMatch(java.lang.String)
//  .copyIfUnmodifiedSince(java.lang.String)
//  .customerAlgorithm(java.lang.String)
//  .customerKey(java.lang.String)
//  .customerKeyMd5(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
//  .expectedSourceBucketOwner(java.lang.String)
//  .expires(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .grant(IResolvable)
//  .grant(java.util.List<S3ObjectCopyGrant>)
//  .id(java.lang.String)
//  .kmsEncryptionContext(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .metadataDirective(java.lang.String)
//  .objectLockLegalHoldStatus(java.lang.String)
//  .objectLockMode(java.lang.String)
//  .objectLockRetainUntilDate(java.lang.String)
//  .requestPayer(java.lang.String)
//  .serverSideEncryption(java.lang.String)
//  .sourceCustomerAlgorithm(java.lang.String)
//  .sourceCustomerKey(java.lang.String)
//  .sourceCustomerKeyMd5(java.lang.String)
//  .storageClass(java.lang.String)
//  .taggingDirective(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .websiteRedirect(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket S3ObjectCopy#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#key S3ObjectCopy#key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source S3ObjectCopy#source}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#acl S3ObjectCopy#acl}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#cache_control S3ObjectCopy#cache_control}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_language S3ObjectCopy#content_language}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_type S3ObjectCopy#content_type}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch">copyIfMatch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince">copyIfModifiedSince</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch">copyIfNoneMatch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince">copyIfUnmodifiedSince</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerAlgorithm">customerAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_algorithm S3ObjectCopy#customer_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKey">customerKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key S3ObjectCopy#customer_key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKeyMd5">customerKeyMd5</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key_md5 S3ObjectCopy#customer_key_md5}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedSourceBucketOwner">expectedSourceBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expires">expires</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expires S3ObjectCopy#expires}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.grant">grant</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>></code> | grant block. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsEncryptionContext">kmsEncryptionContext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_encryption_context S3ObjectCopy#kms_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_key_id S3ObjectCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata S3ObjectCopy#metadata}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective">metadataDirective</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHoldStatus">objectLockLegalHoldStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode">objectLockMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.requestPayer">requestPayer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#request_payer S3ObjectCopy#request_payer}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm">sourceCustomerAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey">sourceCustomerKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5">sourceCustomerKeyMd5</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#storage_class S3ObjectCopy#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective">taggingDirective</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags S3ObjectCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags_all S3ObjectCopy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket S3ObjectCopy#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#key S3ObjectCopy#key}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source S3ObjectCopy#source}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#acl S3ObjectCopy#acl}.

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.bucketKeyEnabled"></a>

```java
public java.lang.Object getBucketKeyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#bucket_key_enabled S3ObjectCopy#bucket_key_enabled}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#cache_control S3ObjectCopy#cache_control}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}.

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_language S3ObjectCopy#content_language}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#content_type S3ObjectCopy#content_type}.

---

##### `copyIfMatch`<sup>Optional</sup> <a name="copyIfMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch"></a>

```java
public java.lang.String getCopyIfMatch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}.

---

##### `copyIfModifiedSince`<sup>Optional</sup> <a name="copyIfModifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince"></a>

```java
public java.lang.String getCopyIfModifiedSince();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}.

---

##### `copyIfNoneMatch`<sup>Optional</sup> <a name="copyIfNoneMatch" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch"></a>

```java
public java.lang.String getCopyIfNoneMatch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}.

---

##### `copyIfUnmodifiedSince`<sup>Optional</sup> <a name="copyIfUnmodifiedSince" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince"></a>

```java
public java.lang.String getCopyIfUnmodifiedSince();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}.

---

##### `customerAlgorithm`<sup>Optional</sup> <a name="customerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerAlgorithm"></a>

```java
public java.lang.String getCustomerAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_algorithm S3ObjectCopy#customer_algorithm}.

---

##### `customerKey`<sup>Optional</sup> <a name="customerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKey"></a>

```java
public java.lang.String getCustomerKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key S3ObjectCopy#customer_key}.

---

##### `customerKeyMd5`<sup>Optional</sup> <a name="customerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.customerKeyMd5"></a>

```java
public java.lang.String getCustomerKeyMd5();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#customer_key_md5 S3ObjectCopy#customer_key_md5}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_bucket_owner S3ObjectCopy#expected_bucket_owner}.

---

##### `expectedSourceBucketOwner`<sup>Optional</sup> <a name="expectedSourceBucketOwner" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expectedSourceBucketOwner"></a>

```java
public java.lang.String getExpectedSourceBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expected_source_bucket_owner S3ObjectCopy#expected_source_bucket_owner}.

---

##### `expires`<sup>Optional</sup> <a name="expires" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.expires"></a>

```java
public java.lang.String getExpires();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#expires S3ObjectCopy#expires}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}.

---

##### `grant`<sup>Optional</sup> <a name="grant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.grant"></a>

```java
public java.lang.Object getGrant();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>>

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#grant S3ObjectCopy#grant}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsEncryptionContext`<sup>Optional</sup> <a name="kmsEncryptionContext" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsEncryptionContext"></a>

```java
public java.lang.String getKmsEncryptionContext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_encryption_context S3ObjectCopy#kms_encryption_context}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#kms_key_id S3ObjectCopy#kms_key_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata S3ObjectCopy#metadata}.

---

##### `metadataDirective`<sup>Optional</sup> <a name="metadataDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective"></a>

```java
public java.lang.String getMetadataDirective();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}.

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="objectLockLegalHoldStatus" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHoldStatus"></a>

```java
public java.lang.String getObjectLockLegalHoldStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_legal_hold_status S3ObjectCopy#object_lock_legal_hold_status}.

---

##### `objectLockMode`<sup>Optional</sup> <a name="objectLockMode" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode"></a>

```java
public java.lang.String getObjectLockMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}.

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate"></a>

```java
public java.lang.String getObjectLockRetainUntilDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}.

---

##### `requestPayer`<sup>Optional</sup> <a name="requestPayer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.requestPayer"></a>

```java
public java.lang.String getRequestPayer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#request_payer S3ObjectCopy#request_payer}.

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption"></a>

```java
public java.lang.String getServerSideEncryption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}.

---

##### `sourceCustomerAlgorithm`<sup>Optional</sup> <a name="sourceCustomerAlgorithm" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm"></a>

```java
public java.lang.String getSourceCustomerAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}.

---

##### `sourceCustomerKey`<sup>Optional</sup> <a name="sourceCustomerKey" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey"></a>

```java
public java.lang.String getSourceCustomerKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}.

---

##### `sourceCustomerKeyMd5`<sup>Optional</sup> <a name="sourceCustomerKeyMd5" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5"></a>

```java
public java.lang.String getSourceCustomerKeyMd5();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}.

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#storage_class S3ObjectCopy#storage_class}.

---

##### `taggingDirective`<sup>Optional</sup> <a name="taggingDirective" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective"></a>

```java
public java.lang.String getTaggingDirective();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags S3ObjectCopy#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#tags_all S3ObjectCopy#tags_all}.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect"></a>

```java
public java.lang.String getWebsiteRedirect();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}.

---

### S3ObjectCopyGrant <a name="S3ObjectCopyGrant" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object_copy.S3ObjectCopyGrant;

S3ObjectCopyGrant.builder()
    .permissions(java.util.List<java.lang.String>)
    .type(java.lang.String)
//  .email(java.lang.String)
//  .id(java.lang.String)
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#permissions S3ObjectCopy#permissions}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#type S3ObjectCopy#type}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#email S3ObjectCopy#email}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#uri S3ObjectCopy#uri}. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#permissions S3ObjectCopy#permissions}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#type S3ObjectCopy#type}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#email S3ObjectCopy#email}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#id S3ObjectCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object_copy#uri S3ObjectCopy#uri}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ObjectCopyGrantList <a name="S3ObjectCopyGrantList" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object_copy.S3ObjectCopyGrantList;

new S3ObjectCopyGrantList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.get"></a>

```java
public S3ObjectCopyGrantOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a>>

---


### S3ObjectCopyGrantOutputReference <a name="S3ObjectCopyGrantOutputReference" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object_copy.S3ObjectCopyGrantOutputReference;

new S3ObjectCopyGrantOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetEmail"></a>

```java
public void resetEmail()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissionsInput"></a>

```java
public java.util.List<java.lang.String> getPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrantOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ObjectCopy.S3ObjectCopyGrant">S3ObjectCopyGrant</a> OR com.hashicorp.cdktf.IResolvable

---



