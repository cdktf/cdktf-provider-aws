# `s3Object` Submodule <a name="`s3Object` Submodule" id="@cdktf/provider-aws.s3Object"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Object <a name="S3Object" id="@cdktf/provider-aws.s3Object.S3Object"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object aws_s3_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Object.S3Object.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object.S3Object;

S3Object.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .bucket(java.lang.String)
    .key(java.lang.String)
//  .acl(java.lang.String)
//  .bucketKeyEnabled(java.lang.Boolean)
//  .bucketKeyEnabled(IResolvable)
//  .cacheControl(java.lang.String)
//  .checksumAlgorithm(java.lang.String)
//  .content(java.lang.String)
//  .contentBase64(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .etag(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .objectLockLegalHoldStatus(java.lang.String)
//  .objectLockMode(java.lang.String)
//  .objectLockRetainUntilDate(java.lang.String)
//  .overrideProvider(S3ObjectOverrideProvider)
//  .serverSideEncryption(java.lang.String)
//  .source(java.lang.String)
//  .sourceHash(java.lang.String)
//  .storageClass(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .websiteRedirect(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#bucket S3Object#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#key S3Object#key}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#acl S3Object#acl}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#cache_control S3Object#cache_control}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.checksumAlgorithm">checksumAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#checksum_algorithm S3Object#checksum_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content S3Object#content}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentBase64">contentBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_base64 S3Object#content_base64}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_disposition S3Object#content_disposition}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_encoding S3Object#content_encoding}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_language S3Object#content_language}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_type S3Object#content_type}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#etag S3Object#etag}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#force_destroy S3Object#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#id S3Object#id}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#kms_key_id S3Object#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#metadata S3Object#metadata}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.objectLockLegalHoldStatus">objectLockLegalHoldStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.objectLockMode">objectLockMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.overrideProvider">overrideProvider</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a></code> | override_provider block. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#source S3Object#source}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.sourceHash">sourceHash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#source_hash S3Object#source_hash}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.storageClass">storageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#storage_class S3Object#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#tags S3Object#tags}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#tags_all S3Object#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#website_redirect S3Object#website_redirect}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#bucket S3Object#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#key S3Object#key}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.acl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#acl S3Object#acl}.

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.bucketKeyEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.cacheControl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#cache_control S3Object#cache_control}.

---

##### `checksumAlgorithm`<sup>Optional</sup> <a name="checksumAlgorithm" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.checksumAlgorithm"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#checksum_algorithm S3Object#checksum_algorithm}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.content"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content S3Object#content}.

---

##### `contentBase64`<sup>Optional</sup> <a name="contentBase64" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentBase64"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_base64 S3Object#content_base64}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentDisposition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_disposition S3Object#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentEncoding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_encoding S3Object#content_encoding}.

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentLanguage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_language S3Object#content_language}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_type S3Object#content_type}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#etag S3Object#etag}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#force_destroy S3Object#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#id S3Object#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#kms_key_id S3Object#kms_key_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#metadata S3Object#metadata}.

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="objectLockLegalHoldStatus" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.objectLockLegalHoldStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}.

---

##### `objectLockMode`<sup>Optional</sup> <a name="objectLockMode" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.objectLockMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}.

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.objectLockRetainUntilDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}.

---

##### `overrideProvider`<sup>Optional</sup> <a name="overrideProvider" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.overrideProvider"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a>

override_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#override_provider S3Object#override_provider}

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.serverSideEncryption"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#source S3Object#source}.

---

##### `sourceHash`<sup>Optional</sup> <a name="sourceHash" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.sourceHash"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#source_hash S3Object#source_hash}.

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.storageClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#storage_class S3Object#storage_class}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#tags S3Object#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#tags_all S3Object#tags_all}.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.websiteRedirect"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#website_redirect S3Object#website_redirect}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.putOverrideProvider">putOverrideProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetBucketKeyEnabled">resetBucketKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetChecksumAlgorithm">resetChecksumAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentBase64">resetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetObjectLockLegalHoldStatus">resetObjectLockLegalHoldStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetObjectLockMode">resetObjectLockMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetObjectLockRetainUntilDate">resetObjectLockRetainUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetOverrideProvider">resetOverrideProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetSourceHash">resetSourceHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetWebsiteRedirect">resetWebsiteRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Object.S3Object.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3Object.S3Object.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3Object.S3Object.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Object.S3Object.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3Object.S3Object.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3Object.S3Object.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3Object.S3Object.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.s3Object.S3Object.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3Object.S3Object.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3Object.S3Object.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.s3Object.S3Object.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3Object.S3Object.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.s3Object.S3Object.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.s3Object.S3Object.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3Object.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Object.S3Object.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Object.S3Object.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3Object.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.s3Object.S3Object.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3Object.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.s3Object.S3Object.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.s3Object.S3Object.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.s3Object.S3Object.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.s3Object.S3Object.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3Object.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOverrideProvider` <a name="putOverrideProvider" id="@cdktf/provider-aws.s3Object.S3Object.putOverrideProvider"></a>

```java
public void putOverrideProvider(S3ObjectOverrideProvider value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Object.S3Object.putOverrideProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a>

---

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-aws.s3Object.S3Object.resetAcl"></a>

```java
public void resetAcl()
```

##### `resetBucketKeyEnabled` <a name="resetBucketKeyEnabled" id="@cdktf/provider-aws.s3Object.S3Object.resetBucketKeyEnabled"></a>

```java
public void resetBucketKeyEnabled()
```

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-aws.s3Object.S3Object.resetCacheControl"></a>

```java
public void resetCacheControl()
```

##### `resetChecksumAlgorithm` <a name="resetChecksumAlgorithm" id="@cdktf/provider-aws.s3Object.S3Object.resetChecksumAlgorithm"></a>

```java
public void resetChecksumAlgorithm()
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-aws.s3Object.S3Object.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentBase64` <a name="resetContentBase64" id="@cdktf/provider-aws.s3Object.S3Object.resetContentBase64"></a>

```java
public void resetContentBase64()
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-aws.s3Object.S3Object.resetContentDisposition"></a>

```java
public void resetContentDisposition()
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-aws.s3Object.S3Object.resetContentEncoding"></a>

```java
public void resetContentEncoding()
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-aws.s3Object.S3Object.resetContentLanguage"></a>

```java
public void resetContentLanguage()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-aws.s3Object.S3Object.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-aws.s3Object.S3Object.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-aws.s3Object.S3Object.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3Object.S3Object.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.s3Object.S3Object.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-aws.s3Object.S3Object.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetObjectLockLegalHoldStatus` <a name="resetObjectLockLegalHoldStatus" id="@cdktf/provider-aws.s3Object.S3Object.resetObjectLockLegalHoldStatus"></a>

```java
public void resetObjectLockLegalHoldStatus()
```

##### `resetObjectLockMode` <a name="resetObjectLockMode" id="@cdktf/provider-aws.s3Object.S3Object.resetObjectLockMode"></a>

```java
public void resetObjectLockMode()
```

##### `resetObjectLockRetainUntilDate` <a name="resetObjectLockRetainUntilDate" id="@cdktf/provider-aws.s3Object.S3Object.resetObjectLockRetainUntilDate"></a>

```java
public void resetObjectLockRetainUntilDate()
```

##### `resetOverrideProvider` <a name="resetOverrideProvider" id="@cdktf/provider-aws.s3Object.S3Object.resetOverrideProvider"></a>

```java
public void resetOverrideProvider()
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-aws.s3Object.S3Object.resetServerSideEncryption"></a>

```java
public void resetServerSideEncryption()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-aws.s3Object.S3Object.resetSource"></a>

```java
public void resetSource()
```

##### `resetSourceHash` <a name="resetSourceHash" id="@cdktf/provider-aws.s3Object.S3Object.resetSourceHash"></a>

```java
public void resetSourceHash()
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-aws.s3Object.S3Object.resetStorageClass"></a>

```java
public void resetStorageClass()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.s3Object.S3Object.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.s3Object.S3Object.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetWebsiteRedirect` <a name="resetWebsiteRedirect" id="@cdktf/provider-aws.s3Object.S3Object.resetWebsiteRedirect"></a>

```java
public void resetWebsiteRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3Object.S3Object.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object.S3Object;

S3Object.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3Object.S3Object.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object.S3Object;

S3Object.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object.S3Object;

S3Object.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.s3Object.S3Object.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object.S3Object;

S3Object.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3Object.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3Object.S3Object.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.s3Object.S3Object.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3Object to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.s3Object.S3Object.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3Object that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Object.S3Object.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the S3Object to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.checksumCrc32">checksumCrc32</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.checksumCrc32C">checksumCrc32C</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.checksumSha1">checksumSha1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.checksumSha256">checksumSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.overrideProvider">overrideProvider</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference">S3ObjectOverrideProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.aclInput">aclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabledInput">bucketKeyEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.cacheControlInput">cacheControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.checksumAlgorithmInput">checksumAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentBase64Input">contentBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentDispositionInput">contentDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentEncodingInput">contentEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentLanguageInput">contentLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatusInput">objectLockLegalHoldStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockModeInput">objectLockModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDateInput">objectLockRetainUntilDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.overrideProviderInput">overrideProviderInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.sourceHashInput">sourceHashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirectInput">websiteRedirectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.acl">acl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.checksumAlgorithm">checksumAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentBase64">contentBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatus">objectLockLegalHoldStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockMode">objectLockMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.sourceHash">sourceHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3Object.S3Object.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3Object.S3Object.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Object.S3Object.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3Object.S3Object.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3Object.S3Object.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3Object.S3Object.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3Object.S3Object.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3Object.S3Object.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3Object.S3Object.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3Object.S3Object.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3Object.S3Object.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3Object.S3Object.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Object.S3Object.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3Object.S3Object.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.s3Object.S3Object.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `checksumCrc32`<sup>Required</sup> <a name="checksumCrc32" id="@cdktf/provider-aws.s3Object.S3Object.property.checksumCrc32"></a>

```java
public java.lang.String getChecksumCrc32();
```

- *Type:* java.lang.String

---

##### `checksumCrc32C`<sup>Required</sup> <a name="checksumCrc32C" id="@cdktf/provider-aws.s3Object.S3Object.property.checksumCrc32C"></a>

```java
public java.lang.String getChecksumCrc32C();
```

- *Type:* java.lang.String

---

##### `checksumSha1`<sup>Required</sup> <a name="checksumSha1" id="@cdktf/provider-aws.s3Object.S3Object.property.checksumSha1"></a>

```java
public java.lang.String getChecksumSha1();
```

- *Type:* java.lang.String

---

##### `checksumSha256`<sup>Required</sup> <a name="checksumSha256" id="@cdktf/provider-aws.s3Object.S3Object.property.checksumSha256"></a>

```java
public java.lang.String getChecksumSha256();
```

- *Type:* java.lang.String

---

##### `overrideProvider`<sup>Required</sup> <a name="overrideProvider" id="@cdktf/provider-aws.s3Object.S3Object.property.overrideProvider"></a>

```java
public S3ObjectOverrideProviderOutputReference getOverrideProvider();
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference">S3ObjectOverrideProviderOutputReference</a>

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-aws.s3Object.S3Object.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-aws.s3Object.S3Object.property.aclInput"></a>

```java
public java.lang.String getAclInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3Object.S3Object.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucketKeyEnabledInput`<sup>Optional</sup> <a name="bucketKeyEnabledInput" id="@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabledInput"></a>

```java
public java.lang.Object getBucketKeyEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-aws.s3Object.S3Object.property.cacheControlInput"></a>

```java
public java.lang.String getCacheControlInput();
```

- *Type:* java.lang.String

---

##### `checksumAlgorithmInput`<sup>Optional</sup> <a name="checksumAlgorithmInput" id="@cdktf/provider-aws.s3Object.S3Object.property.checksumAlgorithmInput"></a>

```java
public java.lang.String getChecksumAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `contentBase64Input`<sup>Optional</sup> <a name="contentBase64Input" id="@cdktf/provider-aws.s3Object.S3Object.property.contentBase64Input"></a>

```java
public java.lang.String getContentBase64Input();
```

- *Type:* java.lang.String

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-aws.s3Object.S3Object.property.contentDispositionInput"></a>

```java
public java.lang.String getContentDispositionInput();
```

- *Type:* java.lang.String

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-aws.s3Object.S3Object.property.contentEncodingInput"></a>

```java
public java.lang.String getContentEncodingInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-aws.s3Object.S3Object.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-aws.s3Object.S3Object.property.contentLanguageInput"></a>

```java
public java.lang.String getContentLanguageInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.s3Object.S3Object.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-aws.s3Object.S3Object.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-aws.s3Object.S3Object.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3Object.S3Object.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.s3Object.S3Object.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-aws.s3Object.S3Object.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `objectLockLegalHoldStatusInput`<sup>Optional</sup> <a name="objectLockLegalHoldStatusInput" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatusInput"></a>

```java
public java.lang.String getObjectLockLegalHoldStatusInput();
```

- *Type:* java.lang.String

---

##### `objectLockModeInput`<sup>Optional</sup> <a name="objectLockModeInput" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockModeInput"></a>

```java
public java.lang.String getObjectLockModeInput();
```

- *Type:* java.lang.String

---

##### `objectLockRetainUntilDateInput`<sup>Optional</sup> <a name="objectLockRetainUntilDateInput" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDateInput"></a>

```java
public java.lang.String getObjectLockRetainUntilDateInput();
```

- *Type:* java.lang.String

---

##### `overrideProviderInput`<sup>Optional</sup> <a name="overrideProviderInput" id="@cdktf/provider-aws.s3Object.S3Object.property.overrideProviderInput"></a>

```java
public S3ObjectOverrideProvider getOverrideProviderInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a>

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryptionInput"></a>

```java
public java.lang.String getServerSideEncryptionInput();
```

- *Type:* java.lang.String

---

##### `sourceHashInput`<sup>Optional</sup> <a name="sourceHashInput" id="@cdktf/provider-aws.s3Object.S3Object.property.sourceHashInput"></a>

```java
public java.lang.String getSourceHashInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.s3Object.S3Object.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-aws.s3Object.S3Object.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.s3Object.S3Object.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.s3Object.S3Object.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `websiteRedirectInput`<sup>Optional</sup> <a name="websiteRedirectInput" id="@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirectInput"></a>

```java
public java.lang.String getWebsiteRedirectInput();
```

- *Type:* java.lang.String

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-aws.s3Object.S3Object.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3Object.S3Object.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketKeyEnabled`<sup>Required</sup> <a name="bucketKeyEnabled" id="@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabled"></a>

```java
public java.lang.Object getBucketKeyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-aws.s3Object.S3Object.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

---

##### `checksumAlgorithm`<sup>Required</sup> <a name="checksumAlgorithm" id="@cdktf/provider-aws.s3Object.S3Object.property.checksumAlgorithm"></a>

```java
public java.lang.String getChecksumAlgorithm();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.s3Object.S3Object.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktf/provider-aws.s3Object.S3Object.property.contentBase64"></a>

```java
public java.lang.String getContentBase64();
```

- *Type:* java.lang.String

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-aws.s3Object.S3Object.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-aws.s3Object.S3Object.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-aws.s3Object.S3Object.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.s3Object.S3Object.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.s3Object.S3Object.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-aws.s3Object.S3Object.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3Object.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3Object.S3Object.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.s3Object.S3Object.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `objectLockLegalHoldStatus`<sup>Required</sup> <a name="objectLockLegalHoldStatus" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatus"></a>

```java
public java.lang.String getObjectLockLegalHoldStatus();
```

- *Type:* java.lang.String

---

##### `objectLockMode`<sup>Required</sup> <a name="objectLockMode" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockMode"></a>

```java
public java.lang.String getObjectLockMode();
```

- *Type:* java.lang.String

---

##### `objectLockRetainUntilDate`<sup>Required</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDate"></a>

```java
public java.lang.String getObjectLockRetainUntilDate();
```

- *Type:* java.lang.String

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryption"></a>

```java
public java.lang.String getServerSideEncryption();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.s3Object.S3Object.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sourceHash`<sup>Required</sup> <a name="sourceHash" id="@cdktf/provider-aws.s3Object.S3Object.property.sourceHash"></a>

```java
public java.lang.String getSourceHash();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-aws.s3Object.S3Object.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3Object.S3Object.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.s3Object.S3Object.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `websiteRedirect`<sup>Required</sup> <a name="websiteRedirect" id="@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirect"></a>

```java
public java.lang.String getWebsiteRedirect();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3Object.S3Object.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectConfig <a name="S3ObjectConfig" id="@cdktf/provider-aws.s3Object.S3ObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object.S3ObjectConfig;

S3ObjectConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .bucket(java.lang.String)
    .key(java.lang.String)
//  .acl(java.lang.String)
//  .bucketKeyEnabled(java.lang.Boolean)
//  .bucketKeyEnabled(IResolvable)
//  .cacheControl(java.lang.String)
//  .checksumAlgorithm(java.lang.String)
//  .content(java.lang.String)
//  .contentBase64(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .etag(java.lang.String)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .objectLockLegalHoldStatus(java.lang.String)
//  .objectLockMode(java.lang.String)
//  .objectLockRetainUntilDate(java.lang.String)
//  .overrideProvider(S3ObjectOverrideProvider)
//  .serverSideEncryption(java.lang.String)
//  .source(java.lang.String)
//  .sourceHash(java.lang.String)
//  .storageClass(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .websiteRedirect(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#bucket S3Object#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#key S3Object#key}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#acl S3Object#acl}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#cache_control S3Object#cache_control}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.checksumAlgorithm">checksumAlgorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#checksum_algorithm S3Object#checksum_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content S3Object#content}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentBase64">contentBase64</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_base64 S3Object#content_base64}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_disposition S3Object#content_disposition}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_encoding S3Object#content_encoding}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_language S3Object#content_language}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_type S3Object#content_type}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#etag S3Object#etag}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#force_destroy S3Object#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#id S3Object#id}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#kms_key_id S3Object#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#metadata S3Object#metadata}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockLegalHoldStatus">objectLockLegalHoldStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockMode">objectLockMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.overrideProvider">overrideProvider</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a></code> | override_provider block. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#source S3Object#source}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.sourceHash">sourceHash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#source_hash S3Object#source_hash}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#storage_class S3Object#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#tags S3Object#tags}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#tags_all S3Object#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#website_redirect S3Object#website_redirect}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#bucket S3Object#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#key S3Object#key}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#acl S3Object#acl}.

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucketKeyEnabled"></a>

```java
public java.lang.Object getBucketKeyEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#cache_control S3Object#cache_control}.

---

##### `checksumAlgorithm`<sup>Optional</sup> <a name="checksumAlgorithm" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.checksumAlgorithm"></a>

```java
public java.lang.String getChecksumAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#checksum_algorithm S3Object#checksum_algorithm}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content S3Object#content}.

---

##### `contentBase64`<sup>Optional</sup> <a name="contentBase64" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentBase64"></a>

```java
public java.lang.String getContentBase64();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_base64 S3Object#content_base64}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_disposition S3Object#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_encoding S3Object#content_encoding}.

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_language S3Object#content_language}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#content_type S3Object#content_type}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#etag S3Object#etag}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#force_destroy S3Object#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#id S3Object#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#kms_key_id S3Object#kms_key_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#metadata S3Object#metadata}.

---

##### `objectLockLegalHoldStatus`<sup>Optional</sup> <a name="objectLockLegalHoldStatus" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockLegalHoldStatus"></a>

```java
public java.lang.String getObjectLockLegalHoldStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}.

---

##### `objectLockMode`<sup>Optional</sup> <a name="objectLockMode" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockMode"></a>

```java
public java.lang.String getObjectLockMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}.

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate"></a>

```java
public java.lang.String getObjectLockRetainUntilDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}.

---

##### `overrideProvider`<sup>Optional</sup> <a name="overrideProvider" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.overrideProvider"></a>

```java
public S3ObjectOverrideProvider getOverrideProvider();
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a>

override_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#override_provider S3Object#override_provider}

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.serverSideEncryption"></a>

```java
public java.lang.String getServerSideEncryption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#source S3Object#source}.

---

##### `sourceHash`<sup>Optional</sup> <a name="sourceHash" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.sourceHash"></a>

```java
public java.lang.String getSourceHash();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#source_hash S3Object#source_hash}.

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#storage_class S3Object#storage_class}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#tags S3Object#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#tags_all S3Object#tags_all}.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.websiteRedirect"></a>

```java
public java.lang.String getWebsiteRedirect();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#website_redirect S3Object#website_redirect}.

---

### S3ObjectOverrideProvider <a name="S3ObjectOverrideProvider" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object.S3ObjectOverrideProvider;

S3ObjectOverrideProvider.builder()
//  .defaultTags(S3ObjectOverrideProviderDefaultTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider.property.defaultTags">defaultTags</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a></code> | default_tags block. |

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider.property.defaultTags"></a>

```java
public S3ObjectOverrideProviderDefaultTags getDefaultTags();
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a>

default_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#default_tags S3Object#default_tags}

---

### S3ObjectOverrideProviderDefaultTags <a name="S3ObjectOverrideProviderDefaultTags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object.S3ObjectOverrideProviderDefaultTags;

S3ObjectOverrideProviderDefaultTags.builder()
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#tags S3Object#tags}. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/s3_object#tags S3Object#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ObjectOverrideProviderDefaultTagsOutputReference <a name="S3ObjectOverrideProviderDefaultTagsOutputReference" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object.S3ObjectOverrideProviderDefaultTagsOutputReference;

new S3ObjectOverrideProviderDefaultTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference.property.internalValue"></a>

```java
public S3ObjectOverrideProviderDefaultTags getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a>

---


### S3ObjectOverrideProviderOutputReference <a name="S3ObjectOverrideProviderOutputReference" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_object.S3ObjectOverrideProviderOutputReference;

new S3ObjectOverrideProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.putDefaultTags">putDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.resetDefaultTags">resetDefaultTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultTags` <a name="putDefaultTags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.putDefaultTags"></a>

```java
public void putDefaultTags(S3ObjectOverrideProviderDefaultTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.putDefaultTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a>

---

##### `resetDefaultTags` <a name="resetDefaultTags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.resetDefaultTags"></a>

```java
public void resetDefaultTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.defaultTags">defaultTags</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference">S3ObjectOverrideProviderDefaultTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.defaultTagsInput">defaultTagsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultTags`<sup>Required</sup> <a name="defaultTags" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.defaultTags"></a>

```java
public S3ObjectOverrideProviderDefaultTagsOutputReference getDefaultTags();
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTagsOutputReference">S3ObjectOverrideProviderDefaultTagsOutputReference</a>

---

##### `defaultTagsInput`<sup>Optional</sup> <a name="defaultTagsInput" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.defaultTagsInput"></a>

```java
public S3ObjectOverrideProviderDefaultTags getDefaultTagsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderDefaultTags">S3ObjectOverrideProviderDefaultTags</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3Object.S3ObjectOverrideProviderOutputReference.property.internalValue"></a>

```java
public S3ObjectOverrideProvider getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3Object.S3ObjectOverrideProvider">S3ObjectOverrideProvider</a>

---



