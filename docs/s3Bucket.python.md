# `s3Bucket` Submodule <a name="`s3Bucket` Submodule" id="@cdktf/provider-aws.s3Bucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Bucket <a name="S3Bucket" id="@cdktf/provider-aws.s3Bucket.S3Bucket"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket aws_s3_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3Bucket(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acceleration_status: str = None,
  acl: str = None,
  bucket: str = None,
  bucket_prefix: str = None,
  cors_rule: typing.Union[IResolvable, typing.List[S3BucketCorsRule]] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  grant: typing.Union[IResolvable, typing.List[S3BucketGrant]] = None,
  id: str = None,
  lifecycle_rule: typing.Union[IResolvable, typing.List[S3BucketLifecycleRule]] = None,
  logging: S3BucketLogging = None,
  object_lock_configuration: S3BucketObjectLockConfiguration = None,
  object_lock_enabled: typing.Union[bool, IResolvable] = None,
  policy: str = None,
  replication_configuration: S3BucketReplicationConfiguration = None,
  request_payer: str = None,
  server_side_encryption_configuration: S3BucketServerSideEncryptionConfiguration = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: S3BucketTimeouts = None,
  versioning: S3BucketVersioning = None,
  website: S3BucketWebsite = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.accelerationStatus">acceleration_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acceleration_status S3Bucket#acceleration_status}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.acl">acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acl S3Bucket#acl}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket S3Bucket#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.corsRule">cors_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#force_destroy S3Bucket#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.grant">grant</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>]]</code> | grant block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.lifecycleRule">lifecycle_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging">S3BucketLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.objectLockConfiguration">object_lock_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration">S3BucketObjectLockConfiguration</a></code> | object_lock_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.objectLockEnabled">object_lock_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#policy S3Bucket#policy}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration">S3BucketReplicationConfiguration</a></code> | replication_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.requestPayer">request_payer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#request_payer S3Bucket#request_payer}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration">S3BucketServerSideEncryptionConfiguration</a></code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags_all S3Bucket#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts">S3BucketTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.website">website</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | website block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acceleration_status`<sup>Optional</sup> <a name="acceleration_status" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.accelerationStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acceleration_status S3Bucket#acceleration_status}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.acl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acl S3Bucket#acl}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket S3Bucket#bucket}.

---

##### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.bucketPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}.

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.corsRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#cors_rule S3Bucket#cors_rule}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#force_destroy S3Bucket#force_destroy}.

---

##### `grant`<sup>Optional</sup> <a name="grant" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.grant"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>]]

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#grant S3Bucket#grant}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_rule`<sup>Optional</sup> <a name="lifecycle_rule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.lifecycleRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#lifecycle_rule S3Bucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging">S3BucketLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#logging S3Bucket#logging}

---

##### `object_lock_configuration`<sup>Optional</sup> <a name="object_lock_configuration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.objectLockConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration">S3BucketObjectLockConfiguration</a>

object_lock_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_configuration S3Bucket#object_lock_configuration}

---

##### `object_lock_enabled`<sup>Optional</sup> <a name="object_lock_enabled" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.objectLockEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#policy S3Bucket#policy}.

---

##### `replication_configuration`<sup>Optional</sup> <a name="replication_configuration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.replicationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration">S3BucketReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#replication_configuration S3Bucket#replication_configuration}

---

##### `request_payer`<sup>Optional</sup> <a name="request_payer" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.requestPayer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#request_payer S3Bucket#request_payer}.

---

##### `server_side_encryption_configuration`<sup>Optional</sup> <a name="server_side_encryption_configuration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.serverSideEncryptionConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration">S3BucketServerSideEncryptionConfiguration</a>

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#server_side_encryption_configuration S3Bucket#server_side_encryption_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags_all S3Bucket#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts">S3BucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#timeouts S3Bucket#timeouts}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.versioning"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#versioning S3Bucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-aws.s3Bucket.S3Bucket.Initializer.parameter.website"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#website S3Bucket#website}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putCorsRule">put_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putGrant">put_grant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putLifecycleRule">put_lifecycle_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putObjectLockConfiguration">put_object_lock_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putReplicationConfiguration">put_replication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putServerSideEncryptionConfiguration">put_server_side_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putVersioning">put_versioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.putWebsite">put_website</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetAccelerationStatus">reset_acceleration_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetAcl">reset_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetBucketPrefix">reset_bucket_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetCorsRule">reset_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetGrant">reset_grant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetLifecycleRule">reset_lifecycle_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetObjectLockConfiguration">reset_object_lock_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetObjectLockEnabled">reset_object_lock_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetReplicationConfiguration">reset_replication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetRequestPayer">reset_request_payer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetServerSideEncryptionConfiguration">reset_server_side_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetVersioning">reset_versioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.resetWebsite">reset_website</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3Bucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.s3Bucket.S3Bucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3Bucket.S3Bucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3Bucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.s3Bucket.S3Bucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.s3Bucket.S3Bucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.s3Bucket.S3Bucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.s3Bucket.S3Bucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3Bucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cors_rule` <a name="put_cors_rule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putCorsRule"></a>

```python
def put_cors_rule(
  value: typing.Union[IResolvable, typing.List[S3BucketCorsRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putCorsRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]

---

##### `put_grant` <a name="put_grant" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putGrant"></a>

```python
def put_grant(
  value: typing.Union[IResolvable, typing.List[S3BucketGrant]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putGrant.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>]]

---

##### `put_lifecycle_rule` <a name="put_lifecycle_rule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putLifecycleRule"></a>

```python
def put_lifecycle_rule(
  value: typing.Union[IResolvable, typing.List[S3BucketLifecycleRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putLifecycleRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]

---

##### `put_logging` <a name="put_logging" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putLogging"></a>

```python
def put_logging(
  target_bucket: str,
  target_prefix: str = None
) -> None
```

###### `target_bucket`<sup>Required</sup> <a name="target_bucket" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putLogging.parameter.targetBucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#target_bucket S3Bucket#target_bucket}.

---

###### `target_prefix`<sup>Optional</sup> <a name="target_prefix" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putLogging.parameter.targetPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#target_prefix S3Bucket#target_prefix}.

---

##### `put_object_lock_configuration` <a name="put_object_lock_configuration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putObjectLockConfiguration"></a>

```python
def put_object_lock_configuration(
  object_lock_enabled: str = None,
  rule: S3BucketObjectLockConfigurationRule = None
) -> None
```

###### `object_lock_enabled`<sup>Optional</sup> <a name="object_lock_enabled" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putObjectLockConfiguration.parameter.objectLockEnabled"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}.

---

###### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putObjectLockConfiguration.parameter.rule"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#rule S3Bucket#rule}

---

##### `put_replication_configuration` <a name="put_replication_configuration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putReplicationConfiguration"></a>

```python
def put_replication_configuration(
  role: str,
  rules: typing.Union[IResolvable, typing.List[S3BucketReplicationConfigurationRules]]
) -> None
```

###### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putReplicationConfiguration.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#role S3Bucket#role}.

---

###### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putReplicationConfiguration.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#rules S3Bucket#rules}

---

##### `put_server_side_encryption_configuration` <a name="put_server_side_encryption_configuration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putServerSideEncryptionConfiguration"></a>

```python
def put_server_side_encryption_configuration(
  rule: S3BucketServerSideEncryptionConfigurationRule
) -> None
```

###### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putServerSideEncryptionConfiguration.parameter.rule"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule">S3BucketServerSideEncryptionConfigurationRule</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#rule S3Bucket#rule}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#create S3Bucket#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#delete S3Bucket#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#read S3Bucket#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#update S3Bucket#update}.

---

##### `put_versioning` <a name="put_versioning" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putVersioning"></a>

```python
def put_versioning(
  enabled: typing.Union[bool, IResolvable] = None,
  mfa_delete: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putVersioning.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#enabled S3Bucket#enabled}.

---

###### `mfa_delete`<sup>Optional</sup> <a name="mfa_delete" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putVersioning.parameter.mfaDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#mfa_delete S3Bucket#mfa_delete}.

---

##### `put_website` <a name="put_website" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putWebsite"></a>

```python
def put_website(
  error_document: str = None,
  index_document: str = None,
  redirect_all_requests_to: str = None,
  routing_rules: str = None
) -> None
```

###### `error_document`<sup>Optional</sup> <a name="error_document" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putWebsite.parameter.errorDocument"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#error_document S3Bucket#error_document}.

---

###### `index_document`<sup>Optional</sup> <a name="index_document" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putWebsite.parameter.indexDocument"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#index_document S3Bucket#index_document}.

---

###### `redirect_all_requests_to`<sup>Optional</sup> <a name="redirect_all_requests_to" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putWebsite.parameter.redirectAllRequestsTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#redirect_all_requests_to S3Bucket#redirect_all_requests_to}.

---

###### `routing_rules`<sup>Optional</sup> <a name="routing_rules" id="@cdktf/provider-aws.s3Bucket.S3Bucket.putWebsite.parameter.routingRules"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#routing_rules S3Bucket#routing_rules}.

---

##### `reset_acceleration_status` <a name="reset_acceleration_status" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetAccelerationStatus"></a>

```python
def reset_acceleration_status() -> None
```

##### `reset_acl` <a name="reset_acl" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetAcl"></a>

```python
def reset_acl() -> None
```

##### `reset_bucket` <a name="reset_bucket" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_bucket_prefix` <a name="reset_bucket_prefix" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetBucketPrefix"></a>

```python
def reset_bucket_prefix() -> None
```

##### `reset_cors_rule` <a name="reset_cors_rule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetCorsRule"></a>

```python
def reset_cors_rule() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_grant` <a name="reset_grant" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetGrant"></a>

```python
def reset_grant() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lifecycle_rule` <a name="reset_lifecycle_rule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetLifecycleRule"></a>

```python
def reset_lifecycle_rule() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_object_lock_configuration` <a name="reset_object_lock_configuration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetObjectLockConfiguration"></a>

```python
def reset_object_lock_configuration() -> None
```

##### `reset_object_lock_enabled` <a name="reset_object_lock_enabled" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetObjectLockEnabled"></a>

```python
def reset_object_lock_enabled() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_replication_configuration` <a name="reset_replication_configuration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetReplicationConfiguration"></a>

```python
def reset_replication_configuration() -> None
```

##### `reset_request_payer` <a name="reset_request_payer" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetRequestPayer"></a>

```python
def reset_request_payer() -> None
```

##### `reset_server_side_encryption_configuration` <a name="reset_server_side_encryption_configuration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetServerSideEncryptionConfiguration"></a>

```python
def reset_server_side_encryption_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_versioning` <a name="reset_versioning" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetVersioning"></a>

```python
def reset_versioning() -> None
```

##### `reset_website` <a name="reset_website" id="@cdktf/provider-aws.s3Bucket.S3Bucket.resetWebsite"></a>

```python
def reset_website() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.s3Bucket.S3Bucket.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3Bucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3Bucket.S3Bucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.s3Bucket.S3Bucket.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3Bucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3Bucket.S3Bucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3Bucket.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3Bucket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3Bucket.S3Bucket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketDomainName">bucket_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketRegionalDomainName">bucket_regional_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.corsRule">cors_rule</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList">S3BucketCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.grant">grant</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList">S3BucketGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.lifecycleRule">lifecycle_rule</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList">S3BucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference">S3BucketLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockConfiguration">object_lock_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference">S3BucketObjectLockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference">S3BucketReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference">S3BucketServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference">S3BucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference">S3BucketVersioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.website">website</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference">S3BucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.websiteDomain">website_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.websiteEndpoint">website_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.accelerationStatusInput">acceleration_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.aclInput">acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketPrefixInput">bucket_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.corsRuleInput">cors_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.grantInput">grant_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.lifecycleRuleInput">lifecycle_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging">S3BucketLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockConfigurationInput">object_lock_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration">S3BucketObjectLockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockEnabledInput">object_lock_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.replicationConfigurationInput">replication_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration">S3BucketReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.requestPayerInput">request_payer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.serverSideEncryptionConfigurationInput">server_side_encryption_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration">S3BucketServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts">S3BucketTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.versioningInput">versioning_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.websiteInput">website_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.accelerationStatus">acceleration_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.acl">acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockEnabled">object_lock_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.requestPayer">request_payer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `bucket_domain_name`<sup>Required</sup> <a name="bucket_domain_name" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketDomainName"></a>

```python
bucket_domain_name: str
```

- *Type:* str

---

##### `bucket_regional_domain_name`<sup>Required</sup> <a name="bucket_regional_domain_name" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketRegionalDomainName"></a>

```python
bucket_regional_domain_name: str
```

- *Type:* str

---

##### `cors_rule`<sup>Required</sup> <a name="cors_rule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.corsRule"></a>

```python
cors_rule: S3BucketCorsRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList">S3BucketCorsRuleList</a>

---

##### `grant`<sup>Required</sup> <a name="grant" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.grant"></a>

```python
grant: S3BucketGrantList
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList">S3BucketGrantList</a>

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `lifecycle_rule`<sup>Required</sup> <a name="lifecycle_rule" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.lifecycleRule"></a>

```python
lifecycle_rule: S3BucketLifecycleRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList">S3BucketLifecycleRuleList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.logging"></a>

```python
logging: S3BucketLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference">S3BucketLoggingOutputReference</a>

---

##### `object_lock_configuration`<sup>Required</sup> <a name="object_lock_configuration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockConfiguration"></a>

```python
object_lock_configuration: S3BucketObjectLockConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference">S3BucketObjectLockConfigurationOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `replication_configuration`<sup>Required</sup> <a name="replication_configuration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.replicationConfiguration"></a>

```python
replication_configuration: S3BucketReplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference">S3BucketReplicationConfigurationOutputReference</a>

---

##### `server_side_encryption_configuration`<sup>Required</sup> <a name="server_side_encryption_configuration" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.serverSideEncryptionConfiguration"></a>

```python
server_side_encryption_configuration: S3BucketServerSideEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference">S3BucketServerSideEncryptionConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.timeouts"></a>

```python
timeouts: S3BucketTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference">S3BucketTimeoutsOutputReference</a>

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.versioning"></a>

```python
versioning: S3BucketVersioningOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference">S3BucketVersioningOutputReference</a>

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.website"></a>

```python
website: S3BucketWebsiteOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference">S3BucketWebsiteOutputReference</a>

---

##### `website_domain`<sup>Required</sup> <a name="website_domain" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.websiteDomain"></a>

```python
website_domain: str
```

- *Type:* str

---

##### `website_endpoint`<sup>Required</sup> <a name="website_endpoint" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.websiteEndpoint"></a>

```python
website_endpoint: str
```

- *Type:* str

---

##### `acceleration_status_input`<sup>Optional</sup> <a name="acceleration_status_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.accelerationStatusInput"></a>

```python
acceleration_status_input: str
```

- *Type:* str

---

##### `acl_input`<sup>Optional</sup> <a name="acl_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.aclInput"></a>

```python
acl_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket_prefix_input`<sup>Optional</sup> <a name="bucket_prefix_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketPrefixInput"></a>

```python
bucket_prefix_input: str
```

- *Type:* str

---

##### `cors_rule_input`<sup>Optional</sup> <a name="cors_rule_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.corsRuleInput"></a>

```python
cors_rule_input: typing.Union[IResolvable, typing.List[S3BucketCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grant_input`<sup>Optional</sup> <a name="grant_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.grantInput"></a>

```python
grant_input: typing.Union[IResolvable, typing.List[S3BucketGrant]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lifecycle_rule_input`<sup>Optional</sup> <a name="lifecycle_rule_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.lifecycleRuleInput"></a>

```python
lifecycle_rule_input: typing.Union[IResolvable, typing.List[S3BucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.loggingInput"></a>

```python
logging_input: S3BucketLogging
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging">S3BucketLogging</a>

---

##### `object_lock_configuration_input`<sup>Optional</sup> <a name="object_lock_configuration_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockConfigurationInput"></a>

```python
object_lock_configuration_input: S3BucketObjectLockConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration">S3BucketObjectLockConfiguration</a>

---

##### `object_lock_enabled_input`<sup>Optional</sup> <a name="object_lock_enabled_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockEnabledInput"></a>

```python
object_lock_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `replication_configuration_input`<sup>Optional</sup> <a name="replication_configuration_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.replicationConfigurationInput"></a>

```python
replication_configuration_input: S3BucketReplicationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration">S3BucketReplicationConfiguration</a>

---

##### `request_payer_input`<sup>Optional</sup> <a name="request_payer_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.requestPayerInput"></a>

```python
request_payer_input: str
```

- *Type:* str

---

##### `server_side_encryption_configuration_input`<sup>Optional</sup> <a name="server_side_encryption_configuration_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.serverSideEncryptionConfigurationInput"></a>

```python
server_side_encryption_configuration_input: S3BucketServerSideEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration">S3BucketServerSideEncryptionConfiguration</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[S3BucketTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts">S3BucketTimeouts</a>, cdktf.IResolvable]

---

##### `versioning_input`<sup>Optional</sup> <a name="versioning_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.versioningInput"></a>

```python
versioning_input: S3BucketVersioning
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

---

##### `website_input`<sup>Optional</sup> <a name="website_input" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.websiteInput"></a>

```python
website_input: S3BucketWebsite
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

---

##### `acceleration_status`<sup>Required</sup> <a name="acceleration_status" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.accelerationStatus"></a>

```python
acceleration_status: str
```

- *Type:* str

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.acl"></a>

```python
acl: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_prefix`<sup>Required</sup> <a name="bucket_prefix" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `object_lock_enabled`<sup>Required</sup> <a name="object_lock_enabled" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.objectLockEnabled"></a>

```python
object_lock_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `request_payer`<sup>Required</sup> <a name="request_payer" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.requestPayer"></a>

```python
request_payer: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3Bucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3Bucket.S3Bucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketConfig <a name="S3BucketConfig" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acceleration_status: str = None,
  acl: str = None,
  bucket: str = None,
  bucket_prefix: str = None,
  cors_rule: typing.Union[IResolvable, typing.List[S3BucketCorsRule]] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  grant: typing.Union[IResolvable, typing.List[S3BucketGrant]] = None,
  id: str = None,
  lifecycle_rule: typing.Union[IResolvable, typing.List[S3BucketLifecycleRule]] = None,
  logging: S3BucketLogging = None,
  object_lock_configuration: S3BucketObjectLockConfiguration = None,
  object_lock_enabled: typing.Union[bool, IResolvable] = None,
  policy: str = None,
  replication_configuration: S3BucketReplicationConfiguration = None,
  request_payer: str = None,
  server_side_encryption_configuration: S3BucketServerSideEncryptionConfiguration = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: S3BucketTimeouts = None,
  versioning: S3BucketVersioning = None,
  website: S3BucketWebsite = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.accelerationStatus">acceleration_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acceleration_status S3Bucket#acceleration_status}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.acl">acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acl S3Bucket#acl}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket S3Bucket#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.corsRule">cors_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#force_destroy S3Bucket#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.grant">grant</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>]]</code> | grant block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.lifecycleRule">lifecycle_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging">S3BucketLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.objectLockConfiguration">object_lock_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration">S3BucketObjectLockConfiguration</a></code> | object_lock_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.objectLockEnabled">object_lock_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#policy S3Bucket#policy}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration">S3BucketReplicationConfiguration</a></code> | replication_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.requestPayer">request_payer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#request_payer S3Bucket#request_payer}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.serverSideEncryptionConfiguration">server_side_encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration">S3BucketServerSideEncryptionConfiguration</a></code> | server_side_encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags_all S3Bucket#tags_all}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts">S3BucketTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.website">website</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | website block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acceleration_status`<sup>Optional</sup> <a name="acceleration_status" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.accelerationStatus"></a>

```python
acceleration_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acceleration_status S3Bucket#acceleration_status}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.acl"></a>

```python
acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#acl S3Bucket#acl}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket S3Bucket#bucket}.

---

##### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}.

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.corsRule"></a>

```python
cors_rule: typing.Union[IResolvable, typing.List[S3BucketCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#cors_rule S3Bucket#cors_rule}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#force_destroy S3Bucket#force_destroy}.

---

##### `grant`<sup>Optional</sup> <a name="grant" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.grant"></a>

```python
grant: typing.Union[IResolvable, typing.List[S3BucketGrant]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>]]

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#grant S3Bucket#grant}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_rule`<sup>Optional</sup> <a name="lifecycle_rule" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.lifecycleRule"></a>

```python
lifecycle_rule: typing.Union[IResolvable, typing.List[S3BucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#lifecycle_rule S3Bucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.logging"></a>

```python
logging: S3BucketLogging
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging">S3BucketLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#logging S3Bucket#logging}

---

##### `object_lock_configuration`<sup>Optional</sup> <a name="object_lock_configuration" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.objectLockConfiguration"></a>

```python
object_lock_configuration: S3BucketObjectLockConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration">S3BucketObjectLockConfiguration</a>

object_lock_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_configuration S3Bucket#object_lock_configuration}

---

##### `object_lock_enabled`<sup>Optional</sup> <a name="object_lock_enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.objectLockEnabled"></a>

```python
object_lock_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#policy S3Bucket#policy}.

---

##### `replication_configuration`<sup>Optional</sup> <a name="replication_configuration" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.replicationConfiguration"></a>

```python
replication_configuration: S3BucketReplicationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration">S3BucketReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#replication_configuration S3Bucket#replication_configuration}

---

##### `request_payer`<sup>Optional</sup> <a name="request_payer" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.requestPayer"></a>

```python
request_payer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#request_payer S3Bucket#request_payer}.

---

##### `server_side_encryption_configuration`<sup>Optional</sup> <a name="server_side_encryption_configuration" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.serverSideEncryptionConfiguration"></a>

```python
server_side_encryption_configuration: S3BucketServerSideEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration">S3BucketServerSideEncryptionConfiguration</a>

server_side_encryption_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#server_side_encryption_configuration S3Bucket#server_side_encryption_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags_all S3Bucket#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.timeouts"></a>

```python
timeouts: S3BucketTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts">S3BucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#timeouts S3Bucket#timeouts}

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.versioning"></a>

```python
versioning: S3BucketVersioning
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#versioning S3Bucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-aws.s3Bucket.S3BucketConfig.property.website"></a>

```python
website: S3BucketWebsite
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#website S3Bucket#website}

---

### S3BucketCorsRule <a name="S3BucketCorsRule" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketCorsRule(
  allowed_methods: typing.List[str],
  allowed_origins: typing.List[str],
  allowed_headers: typing.List[str] = None,
  expose_headers: typing.List[str] = None,
  max_age_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#allowed_methods S3Bucket#allowed_methods}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#allowed_origins S3Bucket#allowed_origins}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#allowed_headers S3Bucket#allowed_headers}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#expose_headers S3Bucket#expose_headers}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#max_age_seconds S3Bucket#max_age_seconds}. |

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#allowed_methods S3Bucket#allowed_methods}.

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#allowed_origins S3Bucket#allowed_origins}.

---

##### `allowed_headers`<sup>Optional</sup> <a name="allowed_headers" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#allowed_headers S3Bucket#allowed_headers}.

---

##### `expose_headers`<sup>Optional</sup> <a name="expose_headers" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#expose_headers S3Bucket#expose_headers}.

---

##### `max_age_seconds`<sup>Optional</sup> <a name="max_age_seconds" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRule.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#max_age_seconds S3Bucket#max_age_seconds}.

---

### S3BucketGrant <a name="S3BucketGrant" id="@cdktf/provider-aws.s3Bucket.S3BucketGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketGrant.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketGrant(
  permissions: typing.List[str],
  type: str,
  id: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#permissions S3Bucket#permissions}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#type S3Bucket#type}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#uri S3Bucket#uri}. |

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#permissions S3Bucket#permissions}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#type S3Bucket#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.s3Bucket.S3BucketGrant.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#uri S3Bucket#uri}.

---

### S3BucketLifecycleRule <a name="S3BucketLifecycleRule" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketLifecycleRule(
  enabled: typing.Union[bool, IResolvable],
  abort_incomplete_multipart_upload_days: typing.Union[int, float] = None,
  expiration: S3BucketLifecycleRuleExpiration = None,
  id: str = None,
  noncurrent_version_expiration: S3BucketLifecycleRuleNoncurrentVersionExpiration = None,
  noncurrent_version_transition: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleNoncurrentVersionTransition]] = None,
  prefix: str = None,
  tags: typing.Mapping[str] = None,
  transition: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleTransition]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#enabled S3Bucket#enabled}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.abortIncompleteMultipartUploadDays">abort_incomplete_multipart_upload_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a></code> | expiration block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.noncurrentVersionExpiration">noncurrent_version_expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a></code> | noncurrent_version_expiration block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.noncurrentVersionTransition">noncurrent_version_transition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>]]</code> | noncurrent_version_transition block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#prefix S3Bucket#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.transition">transition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>]]</code> | transition block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#enabled S3Bucket#enabled}.

---

##### `abort_incomplete_multipart_upload_days`<sup>Optional</sup> <a name="abort_incomplete_multipart_upload_days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.abortIncompleteMultipartUploadDays"></a>

```python
abort_incomplete_multipart_upload_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.expiration"></a>

```python
expiration: S3BucketLifecycleRuleExpiration
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>

expiration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#expiration S3Bucket#expiration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `noncurrent_version_expiration`<sup>Optional</sup> <a name="noncurrent_version_expiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.noncurrentVersionExpiration"></a>

```python
noncurrent_version_expiration: S3BucketLifecycleRuleNoncurrentVersionExpiration
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>

noncurrent_version_expiration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#noncurrent_version_expiration S3Bucket#noncurrent_version_expiration}

---

##### `noncurrent_version_transition`<sup>Optional</sup> <a name="noncurrent_version_transition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.noncurrentVersionTransition"></a>

```python
noncurrent_version_transition: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleNoncurrentVersionTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>]]

noncurrent_version_transition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#noncurrent_version_transition S3Bucket#noncurrent_version_transition}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#prefix S3Bucket#prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}.

---

##### `transition`<sup>Optional</sup> <a name="transition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule.property.transition"></a>

```python
transition: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>]]

transition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#transition S3Bucket#transition}

---

### S3BucketLifecycleRuleExpiration <a name="S3BucketLifecycleRuleExpiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketLifecycleRuleExpiration(
  date: str = None,
  days: typing.Union[int, float] = None,
  expired_object_delete_marker: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration.property.date">date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#date S3Bucket#date}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration.property.expiredObjectDeleteMarker">expired_object_delete_marker</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#expired_object_delete_marker S3Bucket#expired_object_delete_marker}. |

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration.property.date"></a>

```python
date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#date S3Bucket#date}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}.

---

##### `expired_object_delete_marker`<sup>Optional</sup> <a name="expired_object_delete_marker" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration.property.expiredObjectDeleteMarker"></a>

```python
expired_object_delete_marker: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#expired_object_delete_marker S3Bucket#expired_object_delete_marker}.

---

### S3BucketLifecycleRuleNoncurrentVersionExpiration <a name="S3BucketLifecycleRuleNoncurrentVersionExpiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration(
  days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}.

---

### S3BucketLifecycleRuleNoncurrentVersionTransition <a name="S3BucketLifecycleRuleNoncurrentVersionTransition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition(
  storage_class: str,
  days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition.property.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#storage_class S3Bucket#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}. |

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#storage_class S3Bucket#storage_class}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}.

---

### S3BucketLifecycleRuleTransition <a name="S3BucketLifecycleRuleTransition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketLifecycleRuleTransition(
  storage_class: str,
  date: str = None,
  days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition.property.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#storage_class S3Bucket#storage_class}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition.property.date">date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#date S3Bucket#date}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}. |

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#storage_class S3Bucket#storage_class}.

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition.property.date"></a>

```python
date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#date S3Bucket#date}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}.

---

### S3BucketLogging <a name="S3BucketLogging" id="@cdktf/provider-aws.s3Bucket.S3BucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketLogging(
  target_bucket: str,
  target_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging.property.targetBucket">target_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#target_bucket S3Bucket#target_bucket}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging.property.targetPrefix">target_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#target_prefix S3Bucket#target_prefix}. |

---

##### `target_bucket`<sup>Required</sup> <a name="target_bucket" id="@cdktf/provider-aws.s3Bucket.S3BucketLogging.property.targetBucket"></a>

```python
target_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#target_bucket S3Bucket#target_bucket}.

---

##### `target_prefix`<sup>Optional</sup> <a name="target_prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketLogging.property.targetPrefix"></a>

```python
target_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#target_prefix S3Bucket#target_prefix}.

---

### S3BucketObjectLockConfiguration <a name="S3BucketObjectLockConfiguration" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketObjectLockConfiguration(
  object_lock_enabled: str = None,
  rule: S3BucketObjectLockConfigurationRule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration.property.objectLockEnabled">object_lock_enabled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a></code> | rule block. |

---

##### `object_lock_enabled`<sup>Optional</sup> <a name="object_lock_enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration.property.objectLockEnabled"></a>

```python
object_lock_enabled: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#object_lock_enabled S3Bucket#object_lock_enabled}.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration.property.rule"></a>

```python
rule: S3BucketObjectLockConfigurationRule
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#rule S3Bucket#rule}

---

### S3BucketObjectLockConfigurationRule <a name="S3BucketObjectLockConfigurationRule" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketObjectLockConfigurationRule(
  default_retention: S3BucketObjectLockConfigurationRuleDefaultRetention
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule.property.defaultRetention">default_retention</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a></code> | default_retention block. |

---

##### `default_retention`<sup>Required</sup> <a name="default_retention" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule.property.defaultRetention"></a>

```python
default_retention: S3BucketObjectLockConfigurationRuleDefaultRetention
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

default_retention block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#default_retention S3Bucket#default_retention}

---

### S3BucketObjectLockConfigurationRuleDefaultRetention <a name="S3BucketObjectLockConfigurationRuleDefaultRetention" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention(
  mode: str,
  days: typing.Union[int, float] = None,
  years: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#mode S3Bucket#mode}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention.property.years">years</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#years S3Bucket#years}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#mode S3Bucket#mode}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}.

---

##### `years`<sup>Optional</sup> <a name="years" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention.property.years"></a>

```python
years: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#years S3Bucket#years}.

---

### S3BucketReplicationConfiguration <a name="S3BucketReplicationConfiguration" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfiguration(
  role: str,
  rules: typing.Union[IResolvable, typing.List[S3BucketReplicationConfigurationRules]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#role S3Bucket#role}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>]]</code> | rules block. |

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#role S3Bucket#role}.

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[S3BucketReplicationConfigurationRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#rules S3Bucket#rules}

---

### S3BucketReplicationConfigurationRules <a name="S3BucketReplicationConfigurationRules" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRules(
  destination: S3BucketReplicationConfigurationRulesDestination,
  status: str,
  delete_marker_replication_status: str = None,
  filter: S3BucketReplicationConfigurationRulesFilter = None,
  id: str = None,
  prefix: str = None,
  priority: typing.Union[int, float] = None,
  source_selection_criteria: S3BucketReplicationConfigurationRulesSourceSelectionCriteria = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination">S3BucketReplicationConfigurationRulesDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#status S3Bucket#status}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.deleteMarkerReplicationStatus">delete_marker_replication_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#delete_marker_replication_status S3Bucket#delete_marker_replication_status}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter">S3BucketReplicationConfigurationRulesFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#prefix S3Bucket#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#priority S3Bucket#priority}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.sourceSelectionCriteria">source_selection_criteria</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria">S3BucketReplicationConfigurationRulesSourceSelectionCriteria</a></code> | source_selection_criteria block. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.destination"></a>

```python
destination: S3BucketReplicationConfigurationRulesDestination
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination">S3BucketReplicationConfigurationRulesDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#destination S3Bucket#destination}

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#status S3Bucket#status}.

---

##### `delete_marker_replication_status`<sup>Optional</sup> <a name="delete_marker_replication_status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.deleteMarkerReplicationStatus"></a>

```python
delete_marker_replication_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#delete_marker_replication_status S3Bucket#delete_marker_replication_status}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.filter"></a>

```python
filter: S3BucketReplicationConfigurationRulesFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter">S3BucketReplicationConfigurationRulesFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#filter S3Bucket#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#prefix S3Bucket#prefix}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#priority S3Bucket#priority}.

---

##### `source_selection_criteria`<sup>Optional</sup> <a name="source_selection_criteria" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules.property.sourceSelectionCriteria"></a>

```python
source_selection_criteria: S3BucketReplicationConfigurationRulesSourceSelectionCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria">S3BucketReplicationConfigurationRulesSourceSelectionCriteria</a>

source_selection_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#source_selection_criteria S3Bucket#source_selection_criteria}

---

### S3BucketReplicationConfigurationRulesDestination <a name="S3BucketReplicationConfigurationRulesDestination" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesDestination(
  bucket: str,
  access_control_translation: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation = None,
  account_id: str = None,
  metrics: S3BucketReplicationConfigurationRulesDestinationMetrics = None,
  replica_kms_key_id: str = None,
  replication_time: S3BucketReplicationConfigurationRulesDestinationReplicationTime = None,
  storage_class: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket S3Bucket#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.accessControlTranslation">access_control_translation</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation</a></code> | access_control_translation block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#account_id S3Bucket#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics">S3BucketReplicationConfigurationRulesDestinationMetrics</a></code> | metrics block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.replicaKmsKeyId">replica_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#replica_kms_key_id S3Bucket#replica_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.replicationTime">replication_time</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime">S3BucketReplicationConfigurationRulesDestinationReplicationTime</a></code> | replication_time block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.storageClass">storage_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#storage_class S3Bucket#storage_class}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket S3Bucket#bucket}.

---

##### `access_control_translation`<sup>Optional</sup> <a name="access_control_translation" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.accessControlTranslation"></a>

```python
access_control_translation: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation</a>

access_control_translation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#access_control_translation S3Bucket#access_control_translation}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#account_id S3Bucket#account_id}.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.metrics"></a>

```python
metrics: S3BucketReplicationConfigurationRulesDestinationMetrics
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics">S3BucketReplicationConfigurationRulesDestinationMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#metrics S3Bucket#metrics}

---

##### `replica_kms_key_id`<sup>Optional</sup> <a name="replica_kms_key_id" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.replicaKmsKeyId"></a>

```python
replica_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#replica_kms_key_id S3Bucket#replica_kms_key_id}.

---

##### `replication_time`<sup>Optional</sup> <a name="replication_time" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.replicationTime"></a>

```python
replication_time: S3BucketReplicationConfigurationRulesDestinationReplicationTime
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime">S3BucketReplicationConfigurationRulesDestinationReplicationTime</a>

replication_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#replication_time S3Bucket#replication_time}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#storage_class S3Bucket#storage_class}.

---

### S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation <a name="S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation(
  owner: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#owner S3Bucket#owner}. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#owner S3Bucket#owner}.

---

### S3BucketReplicationConfigurationRulesDestinationMetrics <a name="S3BucketReplicationConfigurationRulesDestinationMetrics" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics(
  minutes: typing.Union[int, float] = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#minutes S3Bucket#minutes}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#status S3Bucket#status}. |

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#minutes S3Bucket#minutes}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#status S3Bucket#status}.

---

### S3BucketReplicationConfigurationRulesDestinationReplicationTime <a name="S3BucketReplicationConfigurationRulesDestinationReplicationTime" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime(
  minutes: typing.Union[int, float] = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#minutes S3Bucket#minutes}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#status S3Bucket#status}. |

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#minutes S3Bucket#minutes}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#status S3Bucket#status}.

---

### S3BucketReplicationConfigurationRulesFilter <a name="S3BucketReplicationConfigurationRulesFilter" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesFilter(
  prefix: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#prefix S3Bucket#prefix}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#prefix S3Bucket#prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}.

---

### S3BucketReplicationConfigurationRulesSourceSelectionCriteria <a name="S3BucketReplicationConfigurationRulesSourceSelectionCriteria" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria(
  sse_kms_encrypted_objects: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria.property.sseKmsEncryptedObjects">sse_kms_encrypted_objects</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | sse_kms_encrypted_objects block. |

---

##### `sse_kms_encrypted_objects`<sup>Optional</sup> <a name="sse_kms_encrypted_objects" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria.property.sseKmsEncryptedObjects"></a>

```python
sse_kms_encrypted_objects: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects</a>

sse_kms_encrypted_objects block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#sse_kms_encrypted_objects S3Bucket#sse_kms_encrypted_objects}

---

### S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects <a name="S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#enabled S3Bucket#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#enabled S3Bucket#enabled}.

---

### S3BucketServerSideEncryptionConfiguration <a name="S3BucketServerSideEncryptionConfiguration" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketServerSideEncryptionConfiguration(
  rule: S3BucketServerSideEncryptionConfigurationRule
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule">S3BucketServerSideEncryptionConfigurationRule</a></code> | rule block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration.property.rule"></a>

```python
rule: S3BucketServerSideEncryptionConfigurationRule
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule">S3BucketServerSideEncryptionConfigurationRule</a>

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#rule S3Bucket#rule}

---

### S3BucketServerSideEncryptionConfigurationRule <a name="S3BucketServerSideEncryptionConfigurationRule" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketServerSideEncryptionConfigurationRule(
  apply_server_side_encryption_by_default: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault,
  bucket_key_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule.property.applyServerSideEncryptionByDefault">apply_server_side_encryption_by_default</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault</a></code> | apply_server_side_encryption_by_default block. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule.property.bucketKeyEnabled">bucket_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket_key_enabled S3Bucket#bucket_key_enabled}. |

---

##### `apply_server_side_encryption_by_default`<sup>Required</sup> <a name="apply_server_side_encryption_by_default" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule.property.applyServerSideEncryptionByDefault"></a>

```python
apply_server_side_encryption_by_default: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault</a>

apply_server_side_encryption_by_default block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#apply_server_side_encryption_by_default S3Bucket#apply_server_side_encryption_by_default}

---

##### `bucket_key_enabled`<sup>Optional</sup> <a name="bucket_key_enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule.property.bucketKeyEnabled"></a>

```python
bucket_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket_key_enabled S3Bucket#bucket_key_enabled}.

---

### S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault <a name="S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault(
  sse_algorithm: str,
  kms_master_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault.property.sseAlgorithm">sse_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#sse_algorithm S3Bucket#sse_algorithm}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault.property.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#kms_master_key_id S3Bucket#kms_master_key_id}. |

---

##### `sse_algorithm`<sup>Required</sup> <a name="sse_algorithm" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault.property.sseAlgorithm"></a>

```python
sse_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#sse_algorithm S3Bucket#sse_algorithm}.

---

##### `kms_master_key_id`<sup>Optional</sup> <a name="kms_master_key_id" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault.property.kmsMasterKeyId"></a>

```python
kms_master_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#kms_master_key_id S3Bucket#kms_master_key_id}.

---

### S3BucketTimeouts <a name="S3BucketTimeouts" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#create S3Bucket#create}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#delete S3Bucket#delete}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#read S3Bucket#read}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#update S3Bucket#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#create S3Bucket#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#delete S3Bucket#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#read S3Bucket#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#update S3Bucket#update}.

---

### S3BucketVersioning <a name="S3BucketVersioning" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioning.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketVersioning(
  enabled: typing.Union[bool, IResolvable] = None,
  mfa_delete: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#enabled S3Bucket#enabled}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning.property.mfaDelete">mfa_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#mfa_delete S3Bucket#mfa_delete}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioning.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#enabled S3Bucket#enabled}.

---

##### `mfa_delete`<sup>Optional</sup> <a name="mfa_delete" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioning.property.mfaDelete"></a>

```python
mfa_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#mfa_delete S3Bucket#mfa_delete}.

---

### S3BucketWebsite <a name="S3BucketWebsite" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsite.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketWebsite(
  error_document: str = None,
  index_document: str = None,
  redirect_all_requests_to: str = None,
  routing_rules: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.errorDocument">error_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#error_document S3Bucket#error_document}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.indexDocument">index_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#index_document S3Bucket#index_document}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.redirectAllRequestsTo">redirect_all_requests_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#redirect_all_requests_to S3Bucket#redirect_all_requests_to}. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.routingRules">routing_rules</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#routing_rules S3Bucket#routing_rules}. |

---

##### `error_document`<sup>Optional</sup> <a name="error_document" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.errorDocument"></a>

```python
error_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#error_document S3Bucket#error_document}.

---

##### `index_document`<sup>Optional</sup> <a name="index_document" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.indexDocument"></a>

```python
index_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#index_document S3Bucket#index_document}.

---

##### `redirect_all_requests_to`<sup>Optional</sup> <a name="redirect_all_requests_to" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.redirectAllRequestsTo"></a>

```python
redirect_all_requests_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#redirect_all_requests_to S3Bucket#redirect_all_requests_to}.

---

##### `routing_rules`<sup>Optional</sup> <a name="routing_rules" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsite.property.routingRules"></a>

```python
routing_rules: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#routing_rules S3Bucket#routing_rules}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketCorsRuleList <a name="S3BucketCorsRuleList" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketCorsRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]

---


### S3BucketCorsRuleOutputReference <a name="S3BucketCorsRuleOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketCorsRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resetAllowedHeaders">reset_allowed_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resetExposeHeaders">reset_expose_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resetMaxAgeSeconds">reset_max_age_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_headers` <a name="reset_allowed_headers" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resetAllowedHeaders"></a>

```python
def reset_allowed_headers() -> None
```

##### `reset_expose_headers` <a name="reset_expose_headers" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resetExposeHeaders"></a>

```python
def reset_expose_headers() -> None
```

##### `reset_max_age_seconds` <a name="reset_max_age_seconds" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.resetMaxAgeSeconds"></a>

```python
def reset_max_age_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeadersInput">allowed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeadersInput">expose_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSecondsInput">max_age_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_headers_input`<sup>Optional</sup> <a name="allowed_headers_input" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeadersInput"></a>

```python
allowed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers_input`<sup>Optional</sup> <a name="expose_headers_input" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeadersInput"></a>

```python
expose_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_seconds_input`<sup>Optional</sup> <a name="max_age_seconds_input" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSecondsInput"></a>

```python
max_age_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers`<sup>Required</sup> <a name="expose_headers" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_seconds`<sup>Required</sup> <a name="max_age_seconds" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketCorsRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>, cdktf.IResolvable]

---


### S3BucketGrantList <a name="S3BucketGrantList" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketGrantList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketGrant]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>]]

---


### S3BucketGrantOutputReference <a name="S3BucketGrantOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketGrantOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketGrantOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketGrant, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketGrant">S3BucketGrant</a>, cdktf.IResolvable]

---


### S3BucketLifecycleRuleExpirationOutputReference <a name="S3BucketLifecycleRuleExpirationOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketLifecycleRuleExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDate">reset_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetExpiredObjectDeleteMarker">reset_expired_object_delete_marker</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date` <a name="reset_date" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDate"></a>

```python
def reset_date() -> None
```

##### `reset_days` <a name="reset_days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_expired_object_delete_marker` <a name="reset_expired_object_delete_marker" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetExpiredObjectDeleteMarker"></a>

```python
def reset_expired_object_delete_marker() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.dateInput">date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput">expired_object_delete_marker_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.date">date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarker">expired_object_delete_marker</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_input`<sup>Optional</sup> <a name="date_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.dateInput"></a>

```python
date_input: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expired_object_delete_marker_input`<sup>Optional</sup> <a name="expired_object_delete_marker_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput"></a>

```python
expired_object_delete_marker_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.date"></a>

```python
date: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expired_object_delete_marker`<sup>Required</sup> <a name="expired_object_delete_marker" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarker"></a>

```python
expired_object_delete_marker: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketLifecycleRuleExpiration
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>

---


### S3BucketLifecycleRuleList <a name="S3BucketLifecycleRuleList" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketLifecycleRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketLifecycleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]

---


### S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference <a name="S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resetDays">reset_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resetDays"></a>

```python
def reset_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketLifecycleRuleNoncurrentVersionExpiration
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>

---


### S3BucketLifecycleRuleNoncurrentVersionTransitionList <a name="S3BucketLifecycleRuleNoncurrentVersionTransitionList" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleNoncurrentVersionTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>]]

---


### S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference <a name="S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resetDays">reset_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.resetDays"></a>

```python
def reset_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketLifecycleRuleNoncurrentVersionTransition, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>, cdktf.IResolvable]

---


### S3BucketLifecycleRuleOutputReference <a name="S3BucketLifecycleRuleOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketLifecycleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration">put_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration">put_noncurrent_version_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionTransition">put_noncurrent_version_transition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putTransition">put_transition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetAbortIncompleteMultipartUploadDays">reset_abort_incomplete_multipart_upload_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration">reset_noncurrent_version_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetNoncurrentVersionTransition">reset_noncurrent_version_transition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetTransition">reset_transition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expiration` <a name="put_expiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration"></a>

```python
def put_expiration(
  date: str = None,
  days: typing.Union[int, float] = None,
  expired_object_delete_marker: typing.Union[bool, IResolvable] = None
) -> None
```

###### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration.parameter.date"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#date S3Bucket#date}.

---

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}.

---

###### `expired_object_delete_marker`<sup>Optional</sup> <a name="expired_object_delete_marker" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration.parameter.expiredObjectDeleteMarker"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#expired_object_delete_marker S3Bucket#expired_object_delete_marker}.

---

##### `put_noncurrent_version_expiration` <a name="put_noncurrent_version_expiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration"></a>

```python
def put_noncurrent_version_expiration(
  days: typing.Union[int, float] = None
) -> None
```

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}.

---

##### `put_noncurrent_version_transition` <a name="put_noncurrent_version_transition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionTransition"></a>

```python
def put_noncurrent_version_transition(
  value: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleNoncurrentVersionTransition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionTransition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>]]

---

##### `put_transition` <a name="put_transition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putTransition"></a>

```python
def put_transition(
  value: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleTransition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.putTransition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>]]

---

##### `reset_abort_incomplete_multipart_upload_days` <a name="reset_abort_incomplete_multipart_upload_days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetAbortIncompleteMultipartUploadDays"></a>

```python
def reset_abort_incomplete_multipart_upload_days() -> None
```

##### `reset_expiration` <a name="reset_expiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_noncurrent_version_expiration` <a name="reset_noncurrent_version_expiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration"></a>

```python
def reset_noncurrent_version_expiration() -> None
```

##### `reset_noncurrent_version_transition` <a name="reset_noncurrent_version_transition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetNoncurrentVersionTransition"></a>

```python
def reset_noncurrent_version_transition() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_transition` <a name="reset_transition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.resetTransition"></a>

```python
def reset_transition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference">S3BucketLifecycleRuleExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration">noncurrent_version_expiration</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference">S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionTransition">noncurrent_version_transition</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList">S3BucketLifecycleRuleNoncurrentVersionTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.transition">transition</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList">S3BucketLifecycleRuleTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDaysInput">abort_incomplete_multipart_upload_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expirationInput">expiration_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput">noncurrent_version_expiration_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionTransitionInput">noncurrent_version_transition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.transitionInput">transition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDays">abort_incomplete_multipart_upload_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expiration"></a>

```python
expiration: S3BucketLifecycleRuleExpirationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference">S3BucketLifecycleRuleExpirationOutputReference</a>

---

##### `noncurrent_version_expiration`<sup>Required</sup> <a name="noncurrent_version_expiration" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration"></a>

```python
noncurrent_version_expiration: S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference">S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference</a>

---

##### `noncurrent_version_transition`<sup>Required</sup> <a name="noncurrent_version_transition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionTransition"></a>

```python
noncurrent_version_transition: S3BucketLifecycleRuleNoncurrentVersionTransitionList
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransitionList">S3BucketLifecycleRuleNoncurrentVersionTransitionList</a>

---

##### `transition`<sup>Required</sup> <a name="transition" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.transition"></a>

```python
transition: S3BucketLifecycleRuleTransitionList
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList">S3BucketLifecycleRuleTransitionList</a>

---

##### `abort_incomplete_multipart_upload_days_input`<sup>Optional</sup> <a name="abort_incomplete_multipart_upload_days_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDaysInput"></a>

```python
abort_incomplete_multipart_upload_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expirationInput"></a>

```python
expiration_input: S3BucketLifecycleRuleExpiration
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `noncurrent_version_expiration_input`<sup>Optional</sup> <a name="noncurrent_version_expiration_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput"></a>

```python
noncurrent_version_expiration_input: S3BucketLifecycleRuleNoncurrentVersionExpiration
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>

---

##### `noncurrent_version_transition_input`<sup>Optional</sup> <a name="noncurrent_version_transition_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionTransitionInput"></a>

```python
noncurrent_version_transition_input: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleNoncurrentVersionTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionTransition">S3BucketLifecycleRuleNoncurrentVersionTransition</a>]]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transition_input`<sup>Optional</sup> <a name="transition_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.transitionInput"></a>

```python
transition_input: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>]]

---

##### `abort_incomplete_multipart_upload_days`<sup>Required</sup> <a name="abort_incomplete_multipart_upload_days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDays"></a>

```python
abort_incomplete_multipart_upload_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketLifecycleRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>, cdktf.IResolvable]

---


### S3BucketLifecycleRuleTransitionList <a name="S3BucketLifecycleRuleTransitionList" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketLifecycleRuleTransitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketLifecycleRuleTransitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleTransition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>]]

---


### S3BucketLifecycleRuleTransitionOutputReference <a name="S3BucketLifecycleRuleTransitionOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketLifecycleRuleTransitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.resetDate">reset_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.resetDays">reset_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date` <a name="reset_date" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.resetDate"></a>

```python
def reset_date() -> None
```

##### `reset_days` <a name="reset_days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.resetDays"></a>

```python
def reset_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.dateInput">date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.date">date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_input`<sup>Optional</sup> <a name="date_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.dateInput"></a>

```python
date_input: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.date"></a>

```python
date: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransitionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketLifecycleRuleTransition, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleTransition">S3BucketLifecycleRuleTransition</a>, cdktf.IResolvable]

---


### S3BucketLoggingOutputReference <a name="S3BucketLoggingOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.resetTargetPrefix">reset_target_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_prefix` <a name="reset_target_prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.resetTargetPrefix"></a>

```python
def reset_target_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetBucketInput">target_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefixInput">target_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetBucket">target_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefix">target_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging">S3BucketLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_bucket_input`<sup>Optional</sup> <a name="target_bucket_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetBucketInput"></a>

```python
target_bucket_input: str
```

- *Type:* str

---

##### `target_prefix_input`<sup>Optional</sup> <a name="target_prefix_input" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefixInput"></a>

```python
target_prefix_input: str
```

- *Type:* str

---

##### `target_bucket`<sup>Required</sup> <a name="target_bucket" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetBucket"></a>

```python
target_bucket: str
```

- *Type:* str

---

##### `target_prefix`<sup>Required</sup> <a name="target_prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefix"></a>

```python
target_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketLogging
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketLogging">S3BucketLogging</a>

---


### S3BucketObjectLockConfigurationOutputReference <a name="S3BucketObjectLockConfigurationOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketObjectLockConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.resetObjectLockEnabled">reset_object_lock_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.resetRule">reset_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.putRule"></a>

```python
def put_rule(
  default_retention: S3BucketObjectLockConfigurationRuleDefaultRetention
) -> None
```

###### `default_retention`<sup>Required</sup> <a name="default_retention" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.putRule.parameter.defaultRetention"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

default_retention block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#default_retention S3Bucket#default_retention}

---

##### `reset_object_lock_enabled` <a name="reset_object_lock_enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.resetObjectLockEnabled"></a>

```python
def reset_object_lock_enabled() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.resetRule"></a>

```python
def reset_rule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference">S3BucketObjectLockConfigurationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.objectLockEnabledInput">object_lock_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.ruleInput">rule_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.objectLockEnabled">object_lock_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration">S3BucketObjectLockConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.rule"></a>

```python
rule: S3BucketObjectLockConfigurationRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference">S3BucketObjectLockConfigurationRuleOutputReference</a>

---

##### `object_lock_enabled_input`<sup>Optional</sup> <a name="object_lock_enabled_input" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.objectLockEnabledInput"></a>

```python
object_lock_enabled_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.ruleInput"></a>

```python
rule_input: S3BucketObjectLockConfigurationRule
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

---

##### `object_lock_enabled`<sup>Required</sup> <a name="object_lock_enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.objectLockEnabled"></a>

```python
object_lock_enabled: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketObjectLockConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration">S3BucketObjectLockConfiguration</a>

---


### S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference <a name="S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetYears">reset_years</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_years` <a name="reset_years" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetYears"></a>

```python
def reset_years() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.yearsInput">years_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.years">years</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `years_input`<sup>Optional</sup> <a name="years_input" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.yearsInput"></a>

```python
years_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `years`<sup>Required</sup> <a name="years" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.years"></a>

```python
years: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketObjectLockConfigurationRuleDefaultRetention
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

---


### S3BucketObjectLockConfigurationRuleOutputReference <a name="S3BucketObjectLockConfigurationRuleOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.putDefaultRetention">put_default_retention</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default_retention` <a name="put_default_retention" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.putDefaultRetention"></a>

```python
def put_default_retention(
  mode: str,
  days: typing.Union[int, float] = None,
  years: typing.Union[int, float] = None
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.putDefaultRetention.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#mode S3Bucket#mode}.

---

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.putDefaultRetention.parameter.days"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#days S3Bucket#days}.

---

###### `years`<sup>Optional</sup> <a name="years" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.putDefaultRetention.parameter.years"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#years S3Bucket#years}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetention">default_retention</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference">S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetentionInput">default_retention_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_retention`<sup>Required</sup> <a name="default_retention" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetention"></a>

```python
default_retention: S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference">S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference</a>

---

##### `default_retention_input`<sup>Optional</sup> <a name="default_retention_input" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetentionInput"></a>

```python
default_retention_input: S3BucketObjectLockConfigurationRuleDefaultRetention
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRuleOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketObjectLockConfigurationRule
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

---


### S3BucketReplicationConfigurationOutputReference <a name="S3BucketReplicationConfigurationOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.putRules">put_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[S3BucketReplicationConfigurationRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList">S3BucketReplicationConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration">S3BucketReplicationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.rules"></a>

```python
rules: S3BucketReplicationConfigurationRulesList
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList">S3BucketReplicationConfigurationRulesList</a>

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[S3BucketReplicationConfigurationRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>]]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration">S3BucketReplicationConfiguration</a>

---


### S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference <a name="S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation</a>

---


### S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference <a name="S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics">S3BucketReplicationConfigurationRulesDestinationMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRulesDestinationMetrics
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics">S3BucketReplicationConfigurationRulesDestinationMetrics</a>

---


### S3BucketReplicationConfigurationRulesDestinationOutputReference <a name="S3BucketReplicationConfigurationRulesDestinationOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putAccessControlTranslation">put_access_control_translation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putMetrics">put_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putReplicationTime">put_replication_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetAccessControlTranslation">reset_access_control_translation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetMetrics">reset_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetReplicaKmsKeyId">reset_replica_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetReplicationTime">reset_replication_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetStorageClass">reset_storage_class</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_control_translation` <a name="put_access_control_translation" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putAccessControlTranslation"></a>

```python
def put_access_control_translation(
  owner: str
) -> None
```

###### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putAccessControlTranslation.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#owner S3Bucket#owner}.

---

##### `put_metrics` <a name="put_metrics" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putMetrics"></a>

```python
def put_metrics(
  minutes: typing.Union[int, float] = None,
  status: str = None
) -> None
```

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putMetrics.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#minutes S3Bucket#minutes}.

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putMetrics.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#status S3Bucket#status}.

---

##### `put_replication_time` <a name="put_replication_time" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putReplicationTime"></a>

```python
def put_replication_time(
  minutes: typing.Union[int, float] = None,
  status: str = None
) -> None
```

###### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putReplicationTime.parameter.minutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#minutes S3Bucket#minutes}.

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.putReplicationTime.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#status S3Bucket#status}.

---

##### `reset_access_control_translation` <a name="reset_access_control_translation" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetAccessControlTranslation"></a>

```python
def reset_access_control_translation() -> None
```

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_metrics` <a name="reset_metrics" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetMetrics"></a>

```python
def reset_metrics() -> None
```

##### `reset_replica_kms_key_id` <a name="reset_replica_kms_key_id" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetReplicaKmsKeyId"></a>

```python
def reset_replica_kms_key_id() -> None
```

##### `reset_replication_time` <a name="reset_replication_time" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetReplicationTime"></a>

```python
def reset_replication_time() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accessControlTranslation">access_control_translation</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference">S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicationTime">replication_time</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference">S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accessControlTranslationInput">access_control_translation_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.metricsInput">metrics_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics">S3BucketReplicationConfigurationRulesDestinationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicaKmsKeyIdInput">replica_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicationTimeInput">replication_time_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime">S3BucketReplicationConfigurationRulesDestinationReplicationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicaKmsKeyId">replica_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination">S3BucketReplicationConfigurationRulesDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_control_translation`<sup>Required</sup> <a name="access_control_translation" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accessControlTranslation"></a>

```python
access_control_translation: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslationOutputReference</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.metrics"></a>

```python
metrics: S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference">S3BucketReplicationConfigurationRulesDestinationMetricsOutputReference</a>

---

##### `replication_time`<sup>Required</sup> <a name="replication_time" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicationTime"></a>

```python
replication_time: S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference">S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference</a>

---

##### `access_control_translation_input`<sup>Optional</sup> <a name="access_control_translation_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accessControlTranslationInput"></a>

```python
access_control_translation_input: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.metricsInput"></a>

```python
metrics_input: S3BucketReplicationConfigurationRulesDestinationMetrics
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics">S3BucketReplicationConfigurationRulesDestinationMetrics</a>

---

##### `replica_kms_key_id_input`<sup>Optional</sup> <a name="replica_kms_key_id_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicaKmsKeyIdInput"></a>

```python
replica_kms_key_id_input: str
```

- *Type:* str

---

##### `replication_time_input`<sup>Optional</sup> <a name="replication_time_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicationTimeInput"></a>

```python
replication_time_input: S3BucketReplicationConfigurationRulesDestinationReplicationTime
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime">S3BucketReplicationConfigurationRulesDestinationReplicationTime</a>

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `replica_kms_key_id`<sup>Required</sup> <a name="replica_kms_key_id" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.replicaKmsKeyId"></a>

```python
replica_kms_key_id: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRulesDestination
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination">S3BucketReplicationConfigurationRulesDestination</a>

---


### S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference <a name="S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.resetMinutes">reset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_minutes` <a name="reset_minutes" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.resetMinutes"></a>

```python
def reset_minutes() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.minutesInput">minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.minutes">minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime">S3BucketReplicationConfigurationRulesDestinationReplicationTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minutes_input`<sup>Optional</sup> <a name="minutes_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.minutesInput"></a>

```python
minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.minutes"></a>

```python
minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTimeOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRulesDestinationReplicationTime
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime">S3BucketReplicationConfigurationRulesDestinationReplicationTime</a>

---


### S3BucketReplicationConfigurationRulesFilterOutputReference <a name="S3BucketReplicationConfigurationRulesFilterOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter">S3BucketReplicationConfigurationRulesFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRulesFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter">S3BucketReplicationConfigurationRulesFilter</a>

---


### S3BucketReplicationConfigurationRulesList <a name="S3BucketReplicationConfigurationRulesList" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketReplicationConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketReplicationConfigurationRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>]]

---


### S3BucketReplicationConfigurationRulesOutputReference <a name="S3BucketReplicationConfigurationRulesOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putSourceSelectionCriteria">put_source_selection_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetDeleteMarkerReplicationStatus">reset_delete_marker_replication_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetSourceSelectionCriteria">reset_source_selection_criteria</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putDestination"></a>

```python
def put_destination(
  bucket: str,
  access_control_translation: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation = None,
  account_id: str = None,
  metrics: S3BucketReplicationConfigurationRulesDestinationMetrics = None,
  replica_kms_key_id: str = None,
  replication_time: S3BucketReplicationConfigurationRulesDestinationReplicationTime = None,
  storage_class: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putDestination.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket S3Bucket#bucket}.

---

###### `access_control_translation`<sup>Optional</sup> <a name="access_control_translation" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putDestination.parameter.accessControlTranslation"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation">S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation</a>

access_control_translation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#access_control_translation S3Bucket#access_control_translation}

---

###### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putDestination.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#account_id S3Bucket#account_id}.

---

###### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putDestination.parameter.metrics"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationMetrics">S3BucketReplicationConfigurationRulesDestinationMetrics</a>

metrics block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#metrics S3Bucket#metrics}

---

###### `replica_kms_key_id`<sup>Optional</sup> <a name="replica_kms_key_id" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putDestination.parameter.replicaKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#replica_kms_key_id S3Bucket#replica_kms_key_id}.

---

###### `replication_time`<sup>Optional</sup> <a name="replication_time" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putDestination.parameter.replicationTime"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationReplicationTime">S3BucketReplicationConfigurationRulesDestinationReplicationTime</a>

replication_time block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#replication_time S3Bucket#replication_time}

---

###### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putDestination.parameter.storageClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#storage_class S3Bucket#storage_class}.

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putFilter"></a>

```python
def put_filter(
  prefix: str = None,
  tags: typing.Mapping[str] = None
) -> None
```

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putFilter.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#prefix S3Bucket#prefix}.

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putFilter.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#tags S3Bucket#tags}.

---

##### `put_source_selection_criteria` <a name="put_source_selection_criteria" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putSourceSelectionCriteria"></a>

```python
def put_source_selection_criteria(
  sse_kms_encrypted_objects: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects = None
) -> None
```

###### `sse_kms_encrypted_objects`<sup>Optional</sup> <a name="sse_kms_encrypted_objects" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.putSourceSelectionCriteria.parameter.sseKmsEncryptedObjects"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects</a>

sse_kms_encrypted_objects block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#sse_kms_encrypted_objects S3Bucket#sse_kms_encrypted_objects}

---

##### `reset_delete_marker_replication_status` <a name="reset_delete_marker_replication_status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetDeleteMarkerReplicationStatus"></a>

```python
def reset_delete_marker_replication_status() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_source_selection_criteria` <a name="reset_source_selection_criteria" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.resetSourceSelectionCriteria"></a>

```python
def reset_source_selection_criteria() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference">S3BucketReplicationConfigurationRulesDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference">S3BucketReplicationConfigurationRulesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.sourceSelectionCriteria">source_selection_criteria</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.deleteMarkerReplicationStatusInput">delete_marker_replication_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.destinationInput">destination_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination">S3BucketReplicationConfigurationRulesDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter">S3BucketReplicationConfigurationRulesFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.sourceSelectionCriteriaInput">source_selection_criteria_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria">S3BucketReplicationConfigurationRulesSourceSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.deleteMarkerReplicationStatus">delete_marker_replication_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.destination"></a>

```python
destination: S3BucketReplicationConfigurationRulesDestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestinationOutputReference">S3BucketReplicationConfigurationRulesDestinationOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.filter"></a>

```python
filter: S3BucketReplicationConfigurationRulesFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilterOutputReference">S3BucketReplicationConfigurationRulesFilterOutputReference</a>

---

##### `source_selection_criteria`<sup>Required</sup> <a name="source_selection_criteria" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.sourceSelectionCriteria"></a>

```python
source_selection_criteria: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference</a>

---

##### `delete_marker_replication_status_input`<sup>Optional</sup> <a name="delete_marker_replication_status_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.deleteMarkerReplicationStatusInput"></a>

```python
delete_marker_replication_status_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.destinationInput"></a>

```python
destination_input: S3BucketReplicationConfigurationRulesDestination
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesDestination">S3BucketReplicationConfigurationRulesDestination</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.filterInput"></a>

```python
filter_input: S3BucketReplicationConfigurationRulesFilter
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesFilter">S3BucketReplicationConfigurationRulesFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_selection_criteria_input`<sup>Optional</sup> <a name="source_selection_criteria_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.sourceSelectionCriteriaInput"></a>

```python
source_selection_criteria_input: S3BucketReplicationConfigurationRulesSourceSelectionCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria">S3BucketReplicationConfigurationRulesSourceSelectionCriteria</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `delete_marker_replication_status`<sup>Required</sup> <a name="delete_marker_replication_status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.deleteMarkerReplicationStatus"></a>

```python
delete_marker_replication_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketReplicationConfigurationRules, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRules">S3BucketReplicationConfigurationRules</a>, cdktf.IResolvable]

---


### S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference <a name="S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.putSseKmsEncryptedObjects">put_sse_kms_encrypted_objects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.resetSseKmsEncryptedObjects">reset_sse_kms_encrypted_objects</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sse_kms_encrypted_objects` <a name="put_sse_kms_encrypted_objects" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.putSseKmsEncryptedObjects"></a>

```python
def put_sse_kms_encrypted_objects(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.putSseKmsEncryptedObjects.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#enabled S3Bucket#enabled}.

---

##### `reset_sse_kms_encrypted_objects` <a name="reset_sse_kms_encrypted_objects" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.resetSseKmsEncryptedObjects"></a>

```python
def reset_sse_kms_encrypted_objects() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjects">sse_kms_encrypted_objects</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjectsInput">sse_kms_encrypted_objects_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria">S3BucketReplicationConfigurationRulesSourceSelectionCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sse_kms_encrypted_objects`<sup>Required</sup> <a name="sse_kms_encrypted_objects" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjects"></a>

```python
sse_kms_encrypted_objects: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference</a>

---

##### `sse_kms_encrypted_objects_input`<sup>Optional</sup> <a name="sse_kms_encrypted_objects_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjectsInput"></a>

```python
sse_kms_encrypted_objects_input: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRulesSourceSelectionCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteria">S3BucketReplicationConfigurationRulesSourceSelectionCriteria</a>

---


### S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference <a name="S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects">S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects</a>

---


### S3BucketServerSideEncryptionConfigurationOutputReference <a name="S3BucketServerSideEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.putRule">put_rule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.putRule"></a>

```python
def put_rule(
  apply_server_side_encryption_by_default: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault,
  bucket_key_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `apply_server_side_encryption_by_default`<sup>Required</sup> <a name="apply_server_side_encryption_by_default" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.putRule.parameter.applyServerSideEncryptionByDefault"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault</a>

apply_server_side_encryption_by_default block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#apply_server_side_encryption_by_default S3Bucket#apply_server_side_encryption_by_default}

---

###### `bucket_key_enabled`<sup>Optional</sup> <a name="bucket_key_enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.putRule.parameter.bucketKeyEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#bucket_key_enabled S3Bucket#bucket_key_enabled}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference">S3BucketServerSideEncryptionConfigurationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.ruleInput">rule_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule">S3BucketServerSideEncryptionConfigurationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration">S3BucketServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.rule"></a>

```python
rule: S3BucketServerSideEncryptionConfigurationRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference">S3BucketServerSideEncryptionConfigurationRuleOutputReference</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.ruleInput"></a>

```python
rule_input: S3BucketServerSideEncryptionConfigurationRule
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule">S3BucketServerSideEncryptionConfigurationRule</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketServerSideEncryptionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration">S3BucketServerSideEncryptionConfiguration</a>

---


### S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference <a name="S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.resetKmsMasterKeyId">reset_kms_master_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_master_key_id` <a name="reset_kms_master_key_id" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.resetKmsMasterKeyId"></a>

```python
def reset_kms_master_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyIdInput">kms_master_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.sseAlgorithmInput">sse_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm">sse_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_master_key_id_input`<sup>Optional</sup> <a name="kms_master_key_id_input" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyIdInput"></a>

```python
kms_master_key_id_input: str
```

- *Type:* str

---

##### `sse_algorithm_input`<sup>Optional</sup> <a name="sse_algorithm_input" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.sseAlgorithmInput"></a>

```python
sse_algorithm_input: str
```

- *Type:* str

---

##### `kms_master_key_id`<sup>Required</sup> <a name="kms_master_key_id" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId"></a>

```python
kms_master_key_id: str
```

- *Type:* str

---

##### `sse_algorithm`<sup>Required</sup> <a name="sse_algorithm" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm"></a>

```python
sse_algorithm: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault</a>

---


### S3BucketServerSideEncryptionConfigurationRuleOutputReference <a name="S3BucketServerSideEncryptionConfigurationRuleOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.putApplyServerSideEncryptionByDefault">put_apply_server_side_encryption_by_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.resetBucketKeyEnabled">reset_bucket_key_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_apply_server_side_encryption_by_default` <a name="put_apply_server_side_encryption_by_default" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.putApplyServerSideEncryptionByDefault"></a>

```python
def put_apply_server_side_encryption_by_default(
  sse_algorithm: str,
  kms_master_key_id: str = None
) -> None
```

###### `sse_algorithm`<sup>Required</sup> <a name="sse_algorithm" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.putApplyServerSideEncryptionByDefault.parameter.sseAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#sse_algorithm S3Bucket#sse_algorithm}.

---

###### `kms_master_key_id`<sup>Optional</sup> <a name="kms_master_key_id" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.putApplyServerSideEncryptionByDefault.parameter.kmsMasterKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket#kms_master_key_id S3Bucket#kms_master_key_id}.

---

##### `reset_bucket_key_enabled` <a name="reset_bucket_key_enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.resetBucketKeyEnabled"></a>

```python
def reset_bucket_key_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.applyServerSideEncryptionByDefault">apply_server_side_encryption_by_default</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.applyServerSideEncryptionByDefaultInput">apply_server_side_encryption_by_default_input</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.bucketKeyEnabledInput">bucket_key_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.bucketKeyEnabled">bucket_key_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule">S3BucketServerSideEncryptionConfigurationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_server_side_encryption_by_default`<sup>Required</sup> <a name="apply_server_side_encryption_by_default" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.applyServerSideEncryptionByDefault"></a>

```python
apply_server_side_encryption_by_default: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultOutputReference</a>

---

##### `apply_server_side_encryption_by_default_input`<sup>Optional</sup> <a name="apply_server_side_encryption_by_default_input" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.applyServerSideEncryptionByDefaultInput"></a>

```python
apply_server_side_encryption_by_default_input: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault">S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault</a>

---

##### `bucket_key_enabled_input`<sup>Optional</sup> <a name="bucket_key_enabled_input" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.bucketKeyEnabledInput"></a>

```python
bucket_key_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bucket_key_enabled`<sup>Required</sup> <a name="bucket_key_enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.bucketKeyEnabled"></a>

```python
bucket_key_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRuleOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketServerSideEncryptionConfigurationRule
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationRule">S3BucketServerSideEncryptionConfigurationRule</a>

---


### S3BucketTimeoutsOutputReference <a name="S3BucketTimeoutsOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts">S3BucketTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[S3BucketTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.s3Bucket.S3BucketTimeouts">S3BucketTimeouts</a>, cdktf.IResolvable]

---


### S3BucketVersioningOutputReference <a name="S3BucketVersioningOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketVersioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.resetMfaDelete">reset_mfa_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_mfa_delete` <a name="reset_mfa_delete" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.resetMfaDelete"></a>

```python
def reset_mfa_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.mfaDeleteInput">mfa_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.mfaDelete">mfa_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mfa_delete_input`<sup>Optional</sup> <a name="mfa_delete_input" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.mfaDeleteInput"></a>

```python
mfa_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mfa_delete`<sup>Required</sup> <a name="mfa_delete" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.mfaDelete"></a>

```python
mfa_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketVersioning
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

---


### S3BucketWebsiteOutputReference <a name="S3BucketWebsiteOutputReference" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import s3_bucket

s3Bucket.S3BucketWebsiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetErrorDocument">reset_error_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetIndexDocument">reset_index_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetRedirectAllRequestsTo">reset_redirect_all_requests_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetRoutingRules">reset_routing_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_error_document` <a name="reset_error_document" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetErrorDocument"></a>

```python
def reset_error_document() -> None
```

##### `reset_index_document` <a name="reset_index_document" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetIndexDocument"></a>

```python
def reset_index_document() -> None
```

##### `reset_redirect_all_requests_to` <a name="reset_redirect_all_requests_to" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetRedirectAllRequestsTo"></a>

```python
def reset_redirect_all_requests_to() -> None
```

##### `reset_routing_rules` <a name="reset_routing_rules" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.resetRoutingRules"></a>

```python
def reset_routing_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocumentInput">error_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocumentInput">index_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsToInput">redirect_all_requests_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.routingRulesInput">routing_rules_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocument">error_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocument">index_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsTo">redirect_all_requests_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.routingRules">routing_rules</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_document_input`<sup>Optional</sup> <a name="error_document_input" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocumentInput"></a>

```python
error_document_input: str
```

- *Type:* str

---

##### `index_document_input`<sup>Optional</sup> <a name="index_document_input" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocumentInput"></a>

```python
index_document_input: str
```

- *Type:* str

---

##### `redirect_all_requests_to_input`<sup>Optional</sup> <a name="redirect_all_requests_to_input" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsToInput"></a>

```python
redirect_all_requests_to_input: str
```

- *Type:* str

---

##### `routing_rules_input`<sup>Optional</sup> <a name="routing_rules_input" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.routingRulesInput"></a>

```python
routing_rules_input: str
```

- *Type:* str

---

##### `error_document`<sup>Required</sup> <a name="error_document" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocument"></a>

```python
error_document: str
```

- *Type:* str

---

##### `index_document`<sup>Required</sup> <a name="index_document" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocument"></a>

```python
index_document: str
```

- *Type:* str

---

##### `redirect_all_requests_to`<sup>Required</sup> <a name="redirect_all_requests_to" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsTo"></a>

```python
redirect_all_requests_to: str
```

- *Type:* str

---

##### `routing_rules`<sup>Required</sup> <a name="routing_rules" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.routingRules"></a>

```python
routing_rules: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketWebsite
```

- *Type:* <a href="#@cdktf/provider-aws.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

---



