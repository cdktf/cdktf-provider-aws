# `s3Object` Submodule <a name="`s3Object` Submodule" id="@cdktf/provider-aws.s3Object"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Object <a name="S3Object" id="@cdktf/provider-aws.s3Object.S3Object"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_object aws_s3_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Object.S3Object.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_object

s3Object.S3Object(
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
  acl: str = None,
  bucket_key_enabled: typing.Union[bool, IResolvable] = None,
  cache_control: str = None,
  content: str = None,
  content_base64: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  etag: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_id: str = None,
  metadata: typing.Mapping[str] = None,
  object_lock_legal_hold_status: str = None,
  object_lock_mode: str = None,
  object_lock_retain_until_date: str = None,
  server_side_encryption: str = None,
  source: str = None,
  source_hash: str = None,
  storage_class: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  website_redirect: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#bucket S3Object#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#key S3Object#key}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.acl">acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#acl S3Object#acl}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.bucketKeyEnabled">bucket_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.cacheControl">cache_control</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#cache_control S3Object#cache_control}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content S3Object#content}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentBase64">content_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_base64 S3Object#content_base64}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentDisposition">content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_disposition S3Object#content_disposition}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentEncoding">content_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_encoding S3Object#content_encoding}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentLanguage">content_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_language S3Object#content_language}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_type S3Object#content_type}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#etag S3Object#etag}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#force_destroy S3Object#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#id S3Object#id}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#kms_key_id S3Object#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#metadata S3Object#metadata}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.objectLockLegalHoldStatus">object_lock_legal_hold_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.objectLockMode">object_lock_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_mode S3Object#object_lock_mode}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.objectLockRetainUntilDate">object_lock_retain_until_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.serverSideEncryption">server_side_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#server_side_encryption S3Object#server_side_encryption}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#source S3Object#source}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.sourceHash">source_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#source_hash S3Object#source_hash}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#storage_class S3Object#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#tags S3Object#tags}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#tags_all S3Object#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.websiteRedirect">website_redirect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#website_redirect S3Object#website_redirect}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#bucket S3Object#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#key S3Object#key}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.acl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#acl S3Object#acl}.

---

##### `bucket_key_enabled`<sup>Optional</sup> <a name="bucket_key_enabled" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.bucketKeyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}.

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.cacheControl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#cache_control S3Object#cache_control}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content S3Object#content}.

---

##### `content_base64`<sup>Optional</sup> <a name="content_base64" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentBase64"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_base64 S3Object#content_base64}.

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentDisposition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_disposition S3Object#content_disposition}.

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentEncoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_encoding S3Object#content_encoding}.

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_language S3Object#content_language}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_type S3Object#content_type}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.etag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#etag S3Object#etag}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#force_destroy S3Object#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#id S3Object#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#kms_key_id S3Object#kms_key_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#metadata S3Object#metadata}.

---

##### `object_lock_legal_hold_status`<sup>Optional</sup> <a name="object_lock_legal_hold_status" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.objectLockLegalHoldStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}.

---

##### `object_lock_mode`<sup>Optional</sup> <a name="object_lock_mode" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.objectLockMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_mode S3Object#object_lock_mode}.

---

##### `object_lock_retain_until_date`<sup>Optional</sup> <a name="object_lock_retain_until_date" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.objectLockRetainUntilDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}.

---

##### `server_side_encryption`<sup>Optional</sup> <a name="server_side_encryption" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.serverSideEncryption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#server_side_encryption S3Object#server_side_encryption}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#source S3Object#source}.

---

##### `source_hash`<sup>Optional</sup> <a name="source_hash" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.sourceHash"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#source_hash S3Object#source_hash}.

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.storageClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#storage_class S3Object#storage_class}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#tags S3Object#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#tags_all S3Object#tags_all}.

---

##### `website_redirect`<sup>Optional</sup> <a name="website_redirect" id="@cdktf/provider-aws.s3Object.S3Object.Initializer.parameter.websiteRedirect"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#website_redirect S3Object#website_redirect}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetAcl">reset_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetBucketKeyEnabled">reset_bucket_key_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetCacheControl">reset_cache_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentBase64">reset_content_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentDisposition">reset_content_disposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentEncoding">reset_content_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentLanguage">reset_content_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetObjectLockLegalHoldStatus">reset_object_lock_legal_hold_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetObjectLockMode">reset_object_lock_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetObjectLockRetainUntilDate">reset_object_lock_retain_until_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetServerSideEncryption">reset_server_side_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetSourceHash">reset_source_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetStorageClass">reset_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.resetWebsiteRedirect">reset_website_redirect</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Object.S3Object.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3Object.S3Object.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3Object.S3Object.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Object.S3Object.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3Object.S3Object.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3Object.S3Object.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3Object.S3Object.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3Object.S3Object.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3Object.S3Object.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Object.S3Object.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Object.S3Object.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Object.S3Object.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_acl` <a name="reset_acl" id="@cdktf/provider-aws.s3Object.S3Object.resetAcl"></a>

```python
def reset_acl() -> None
```

##### `reset_bucket_key_enabled` <a name="reset_bucket_key_enabled" id="@cdktf/provider-aws.s3Object.S3Object.resetBucketKeyEnabled"></a>

```python
def reset_bucket_key_enabled() -> None
```

##### `reset_cache_control` <a name="reset_cache_control" id="@cdktf/provider-aws.s3Object.S3Object.resetCacheControl"></a>

```python
def reset_cache_control() -> None
```

##### `reset_content` <a name="reset_content" id="@cdktf/provider-aws.s3Object.S3Object.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_base64` <a name="reset_content_base64" id="@cdktf/provider-aws.s3Object.S3Object.resetContentBase64"></a>

```python
def reset_content_base64() -> None
```

##### `reset_content_disposition` <a name="reset_content_disposition" id="@cdktf/provider-aws.s3Object.S3Object.resetContentDisposition"></a>

```python
def reset_content_disposition() -> None
```

##### `reset_content_encoding` <a name="reset_content_encoding" id="@cdktf/provider-aws.s3Object.S3Object.resetContentEncoding"></a>

```python
def reset_content_encoding() -> None
```

##### `reset_content_language` <a name="reset_content_language" id="@cdktf/provider-aws.s3Object.S3Object.resetContentLanguage"></a>

```python
def reset_content_language() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-aws.s3Object.S3Object.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-aws.s3Object.S3Object.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-aws.s3Object.S3Object.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3Object.S3Object.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.s3Object.S3Object.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-aws.s3Object.S3Object.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_object_lock_legal_hold_status` <a name="reset_object_lock_legal_hold_status" id="@cdktf/provider-aws.s3Object.S3Object.resetObjectLockLegalHoldStatus"></a>

```python
def reset_object_lock_legal_hold_status() -> None
```

##### `reset_object_lock_mode` <a name="reset_object_lock_mode" id="@cdktf/provider-aws.s3Object.S3Object.resetObjectLockMode"></a>

```python
def reset_object_lock_mode() -> None
```

##### `reset_object_lock_retain_until_date` <a name="reset_object_lock_retain_until_date" id="@cdktf/provider-aws.s3Object.S3Object.resetObjectLockRetainUntilDate"></a>

```python
def reset_object_lock_retain_until_date() -> None
```

##### `reset_server_side_encryption` <a name="reset_server_side_encryption" id="@cdktf/provider-aws.s3Object.S3Object.resetServerSideEncryption"></a>

```python
def reset_server_side_encryption() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-aws.s3Object.S3Object.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_source_hash` <a name="reset_source_hash" id="@cdktf/provider-aws.s3Object.S3Object.resetSourceHash"></a>

```python
def reset_source_hash() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-aws.s3Object.S3Object.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.s3Object.S3Object.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.s3Object.S3Object.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_website_redirect` <a name="reset_website_redirect" id="@cdktf/provider-aws.s3Object.S3Object.resetWebsiteRedirect"></a>

```python
def reset_website_redirect() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3Object.S3Object.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_object

s3Object.S3Object.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3Object.S3Object.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_object

s3Object.S3Object.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_object

s3Object.S3Object.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3Object.S3Object.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.aclInput">acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabledInput">bucket_key_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.cacheControlInput">cache_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentBase64Input">content_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentDispositionInput">content_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentEncodingInput">content_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentLanguageInput">content_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatusInput">object_lock_legal_hold_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockModeInput">object_lock_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDateInput">object_lock_retain_until_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryptionInput">server_side_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.sourceHashInput">source_hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirectInput">website_redirect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.acl">acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabled">bucket_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.cacheControl">cache_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentBase64">content_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentDisposition">content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentEncoding">content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentLanguage">content_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatus">object_lock_legal_hold_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockMode">object_lock_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDate">object_lock_retain_until_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryption">server_side_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.sourceHash">source_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirect">website_redirect</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3Object.S3Object.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3Object.S3Object.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Object.S3Object.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3Object.S3Object.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3Object.S3Object.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3Object.S3Object.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3Object.S3Object.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3Object.S3Object.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3Object.S3Object.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3Object.S3Object.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3Object.S3Object.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3Object.S3Object.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Object.S3Object.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3Object.S3Object.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-aws.s3Object.S3Object.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `acl_input`<sup>Optional</sup> <a name="acl_input" id="@cdktf/provider-aws.s3Object.S3Object.property.aclInput"></a>

```python
acl_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3Object.S3Object.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket_key_enabled_input`<sup>Optional</sup> <a name="bucket_key_enabled_input" id="@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabledInput"></a>

```python
bucket_key_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_control_input`<sup>Optional</sup> <a name="cache_control_input" id="@cdktf/provider-aws.s3Object.S3Object.property.cacheControlInput"></a>

```python
cache_control_input: str
```

- *Type:* str

---

##### `content_base64_input`<sup>Optional</sup> <a name="content_base64_input" id="@cdktf/provider-aws.s3Object.S3Object.property.contentBase64Input"></a>

```python
content_base64_input: str
```

- *Type:* str

---

##### `content_disposition_input`<sup>Optional</sup> <a name="content_disposition_input" id="@cdktf/provider-aws.s3Object.S3Object.property.contentDispositionInput"></a>

```python
content_disposition_input: str
```

- *Type:* str

---

##### `content_encoding_input`<sup>Optional</sup> <a name="content_encoding_input" id="@cdktf/provider-aws.s3Object.S3Object.property.contentEncodingInput"></a>

```python
content_encoding_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-aws.s3Object.S3Object.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_language_input`<sup>Optional</sup> <a name="content_language_input" id="@cdktf/provider-aws.s3Object.S3Object.property.contentLanguageInput"></a>

```python
content_language_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-aws.s3Object.S3Object.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-aws.s3Object.S3Object.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-aws.s3Object.S3Object.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3Object.S3Object.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.s3Object.S3Object.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-aws.s3Object.S3Object.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `object_lock_legal_hold_status_input`<sup>Optional</sup> <a name="object_lock_legal_hold_status_input" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatusInput"></a>

```python
object_lock_legal_hold_status_input: str
```

- *Type:* str

---

##### `object_lock_mode_input`<sup>Optional</sup> <a name="object_lock_mode_input" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockModeInput"></a>

```python
object_lock_mode_input: str
```

- *Type:* str

---

##### `object_lock_retain_until_date_input`<sup>Optional</sup> <a name="object_lock_retain_until_date_input" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDateInput"></a>

```python
object_lock_retain_until_date_input: str
```

- *Type:* str

---

##### `server_side_encryption_input`<sup>Optional</sup> <a name="server_side_encryption_input" id="@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryptionInput"></a>

```python
server_side_encryption_input: str
```

- *Type:* str

---

##### `source_hash_input`<sup>Optional</sup> <a name="source_hash_input" id="@cdktf/provider-aws.s3Object.S3Object.property.sourceHashInput"></a>

```python
source_hash_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.s3Object.S3Object.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-aws.s3Object.S3Object.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.s3Object.S3Object.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.s3Object.S3Object.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `website_redirect_input`<sup>Optional</sup> <a name="website_redirect_input" id="@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirectInput"></a>

```python
website_redirect_input: str
```

- *Type:* str

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-aws.s3Object.S3Object.property.acl"></a>

```python
acl: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3Object.S3Object.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_key_enabled`<sup>Required</sup> <a name="bucket_key_enabled" id="@cdktf/provider-aws.s3Object.S3Object.property.bucketKeyEnabled"></a>

```python
bucket_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_control`<sup>Required</sup> <a name="cache_control" id="@cdktf/provider-aws.s3Object.S3Object.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-aws.s3Object.S3Object.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_base64`<sup>Required</sup> <a name="content_base64" id="@cdktf/provider-aws.s3Object.S3Object.property.contentBase64"></a>

```python
content_base64: str
```

- *Type:* str

---

##### `content_disposition`<sup>Required</sup> <a name="content_disposition" id="@cdktf/provider-aws.s3Object.S3Object.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

---

##### `content_encoding`<sup>Required</sup> <a name="content_encoding" id="@cdktf/provider-aws.s3Object.S3Object.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

---

##### `content_language`<sup>Required</sup> <a name="content_language" id="@cdktf/provider-aws.s3Object.S3Object.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-aws.s3Object.S3Object.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.s3Object.S3Object.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-aws.s3Object.S3Object.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3Object.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3Object.S3Object.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.s3Object.S3Object.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.s3Object.S3Object.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `object_lock_legal_hold_status`<sup>Required</sup> <a name="object_lock_legal_hold_status" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockLegalHoldStatus"></a>

```python
object_lock_legal_hold_status: str
```

- *Type:* str

---

##### `object_lock_mode`<sup>Required</sup> <a name="object_lock_mode" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockMode"></a>

```python
object_lock_mode: str
```

- *Type:* str

---

##### `object_lock_retain_until_date`<sup>Required</sup> <a name="object_lock_retain_until_date" id="@cdktf/provider-aws.s3Object.S3Object.property.objectLockRetainUntilDate"></a>

```python
object_lock_retain_until_date: str
```

- *Type:* str

---

##### `server_side_encryption`<sup>Required</sup> <a name="server_side_encryption" id="@cdktf/provider-aws.s3Object.S3Object.property.serverSideEncryption"></a>

```python
server_side_encryption: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.s3Object.S3Object.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_hash`<sup>Required</sup> <a name="source_hash" id="@cdktf/provider-aws.s3Object.S3Object.property.sourceHash"></a>

```python
source_hash: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-aws.s3Object.S3Object.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3Object.S3Object.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.s3Object.S3Object.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `website_redirect`<sup>Required</sup> <a name="website_redirect" id="@cdktf/provider-aws.s3Object.S3Object.property.websiteRedirect"></a>

```python
website_redirect: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3Object.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3Object.S3Object.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectConfig <a name="S3ObjectConfig" id="@cdktf/provider-aws.s3Object.S3ObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_object

s3Object.S3ObjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  key: str,
  acl: str = None,
  bucket_key_enabled: typing.Union[bool, IResolvable] = None,
  cache_control: str = None,
  content: str = None,
  content_base64: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  etag: str = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_id: str = None,
  metadata: typing.Mapping[str] = None,
  object_lock_legal_hold_status: str = None,
  object_lock_mode: str = None,
  object_lock_retain_until_date: str = None,
  server_side_encryption: str = None,
  source: str = None,
  source_hash: str = None,
  storage_class: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  website_redirect: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#bucket S3Object#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#key S3Object#key}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.acl">acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#acl S3Object#acl}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucketKeyEnabled">bucket_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.cacheControl">cache_control</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#cache_control S3Object#cache_control}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content S3Object#content}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentBase64">content_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_base64 S3Object#content_base64}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentDisposition">content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_disposition S3Object#content_disposition}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentEncoding">content_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_encoding S3Object#content_encoding}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentLanguage">content_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_language S3Object#content_language}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_type S3Object#content_type}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#etag S3Object#etag}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#force_destroy S3Object#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#id S3Object#id}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#kms_key_id S3Object#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#metadata S3Object#metadata}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockLegalHoldStatus">object_lock_legal_hold_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockMode">object_lock_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_mode S3Object#object_lock_mode}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate">object_lock_retain_until_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.serverSideEncryption">server_side_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#server_side_encryption S3Object#server_side_encryption}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#source S3Object#source}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.sourceHash">source_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#source_hash S3Object#source_hash}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#storage_class S3Object#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#tags S3Object#tags}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#tags_all S3Object#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3Object.S3ObjectConfig.property.websiteRedirect">website_redirect</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#website_redirect S3Object#website_redirect}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#bucket S3Object#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#key S3Object#key}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.acl"></a>

```python
acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#acl S3Object#acl}.

---

##### `bucket_key_enabled`<sup>Optional</sup> <a name="bucket_key_enabled" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.bucketKeyEnabled"></a>

```python
bucket_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#bucket_key_enabled S3Object#bucket_key_enabled}.

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#cache_control S3Object#cache_control}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content S3Object#content}.

---

##### `content_base64`<sup>Optional</sup> <a name="content_base64" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentBase64"></a>

```python
content_base64: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_base64 S3Object#content_base64}.

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_disposition S3Object#content_disposition}.

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_encoding S3Object#content_encoding}.

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_language S3Object#content_language}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#content_type S3Object#content_type}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#etag S3Object#etag}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#force_destroy S3Object#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#id S3Object#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#kms_key_id S3Object#kms_key_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#metadata S3Object#metadata}.

---

##### `object_lock_legal_hold_status`<sup>Optional</sup> <a name="object_lock_legal_hold_status" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockLegalHoldStatus"></a>

```python
object_lock_legal_hold_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_legal_hold_status S3Object#object_lock_legal_hold_status}.

---

##### `object_lock_mode`<sup>Optional</sup> <a name="object_lock_mode" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockMode"></a>

```python
object_lock_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_mode S3Object#object_lock_mode}.

---

##### `object_lock_retain_until_date`<sup>Optional</sup> <a name="object_lock_retain_until_date" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate"></a>

```python
object_lock_retain_until_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}.

---

##### `server_side_encryption`<sup>Optional</sup> <a name="server_side_encryption" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.serverSideEncryption"></a>

```python
server_side_encryption: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#server_side_encryption S3Object#server_side_encryption}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#source S3Object#source}.

---

##### `source_hash`<sup>Optional</sup> <a name="source_hash" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.sourceHash"></a>

```python
source_hash: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#source_hash S3Object#source_hash}.

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#storage_class S3Object#storage_class}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#tags S3Object#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#tags_all S3Object#tags_all}.

---

##### `website_redirect`<sup>Optional</sup> <a name="website_redirect" id="@cdktf/provider-aws.s3Object.S3ObjectConfig.property.websiteRedirect"></a>

```python
website_redirect: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_object#website_redirect S3Object#website_redirect}.

---



