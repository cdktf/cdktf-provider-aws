# `rdsCustomDbEngineVersion` Submodule <a name="`rdsCustomDbEngineVersion` Submodule" id="@cdktf/provider-aws.rdsCustomDbEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsCustomDbEngineVersion <a name="RdsCustomDbEngineVersion" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version aws_rds_custom_db_engine_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str,
  engine_version: str,
  database_installation_files_s3_bucket_name: str = None,
  database_installation_files_s3_prefix: str = None,
  description: str = None,
  filename: str = None,
  id: str = None,
  kms_key_id: str = None,
  manifest: str = None,
  manifest_hash: str = None,
  region: str = None,
  source_image_id: str = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: RdsCustomDbEngineVersionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3BucketName">database_installation_files_s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3Prefix">database_installation_files_s3_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#filename RdsCustomDbEngineVersion#filename}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#id RdsCustomDbEngineVersion#id}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.manifest">manifest</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.manifestHash">manifest_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#manifest_hash RdsCustomDbEngineVersion#manifest_hash}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.sourceImageId">source_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#source_image_id RdsCustomDbEngineVersion#source_image_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#tags_all RdsCustomDbEngineVersion#tags_all}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}.

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}.

---

##### `database_installation_files_s3_bucket_name`<sup>Optional</sup> <a name="database_installation_files_s3_bucket_name" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3BucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}.

---

##### `database_installation_files_s3_prefix`<sup>Optional</sup> <a name="database_installation_files_s3_prefix" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3Prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.filename"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#filename RdsCustomDbEngineVersion#filename}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#id RdsCustomDbEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}.

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.manifest"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}.

---

##### `manifest_hash`<sup>Optional</sup> <a name="manifest_hash" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.manifestHash"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#manifest_hash RdsCustomDbEngineVersion#manifest_hash}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#region RdsCustomDbEngineVersion#region}

---

##### `source_image_id`<sup>Optional</sup> <a name="source_image_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.sourceImageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#source_image_id RdsCustomDbEngineVersion#source_image_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#tags_all RdsCustomDbEngineVersion#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#timeouts RdsCustomDbEngineVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3BucketName">reset_database_installation_files_s3_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3Prefix">reset_database_installation_files_s3_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetFilename">reset_filename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifest">reset_manifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifestHash">reset_manifest_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetSourceImageId">reset_source_image_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#create RdsCustomDbEngineVersion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#delete RdsCustomDbEngineVersion#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#update RdsCustomDbEngineVersion#update}.

---

##### `reset_database_installation_files_s3_bucket_name` <a name="reset_database_installation_files_s3_bucket_name" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3BucketName"></a>

```python
def reset_database_installation_files_s3_bucket_name() -> None
```

##### `reset_database_installation_files_s3_prefix` <a name="reset_database_installation_files_s3_prefix" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3Prefix"></a>

```python
def reset_database_installation_files_s3_prefix() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_filename` <a name="reset_filename" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetFilename"></a>

```python
def reset_filename() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_manifest` <a name="reset_manifest" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifest"></a>

```python
def reset_manifest() -> None
```

##### `reset_manifest_hash` <a name="reset_manifest_hash" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifestHash"></a>

```python
def reset_manifest_hash() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_source_image_id` <a name="reset_source_image_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetSourceImageId"></a>

```python
def reset_source_image_id() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RdsCustomDbEngineVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RdsCustomDbEngineVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RdsCustomDbEngineVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RdsCustomDbEngineVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RdsCustomDbEngineVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dbParameterGroupFamily">db_parameter_group_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.majorEngineVersion">major_engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestComputed">manifest_computed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference">RdsCustomDbEngineVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketNameInput">database_installation_files_s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3PrefixInput">database_installation_files_s3_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineInput">engine_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestHashInput">manifest_hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestInput">manifest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceImageIdInput">source_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketName">database_installation_files_s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3Prefix">database_installation_files_s3_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifest">manifest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestHash">manifest_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceImageId">source_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `db_parameter_group_family`<sup>Required</sup> <a name="db_parameter_group_family" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dbParameterGroupFamily"></a>

```python
db_parameter_group_family: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `major_engine_version`<sup>Required</sup> <a name="major_engine_version" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.majorEngineVersion"></a>

```python
major_engine_version: str
```

- *Type:* str

---

##### `manifest_computed`<sup>Required</sup> <a name="manifest_computed" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestComputed"></a>

```python
manifest_computed: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.timeouts"></a>

```python
timeouts: RdsCustomDbEngineVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference">RdsCustomDbEngineVersionTimeoutsOutputReference</a>

---

##### `database_installation_files_s3_bucket_name_input`<sup>Optional</sup> <a name="database_installation_files_s3_bucket_name_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketNameInput"></a>

```python
database_installation_files_s3_bucket_name_input: str
```

- *Type:* str

---

##### `database_installation_files_s3_prefix_input`<sup>Optional</sup> <a name="database_installation_files_s3_prefix_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3PrefixInput"></a>

```python
database_installation_files_s3_prefix_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `engine_input`<sup>Optional</sup> <a name="engine_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineInput"></a>

```python
engine_input: str
```

- *Type:* str

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `manifest_hash_input`<sup>Optional</sup> <a name="manifest_hash_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestHashInput"></a>

```python
manifest_hash_input: str
```

- *Type:* str

---

##### `manifest_input`<sup>Optional</sup> <a name="manifest_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestInput"></a>

```python
manifest_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `source_image_id_input`<sup>Optional</sup> <a name="source_image_id_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceImageIdInput"></a>

```python
source_image_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RdsCustomDbEngineVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a>]

---

##### `database_installation_files_s3_bucket_name`<sup>Required</sup> <a name="database_installation_files_s3_bucket_name" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketName"></a>

```python
database_installation_files_s3_bucket_name: str
```

- *Type:* str

---

##### `database_installation_files_s3_prefix`<sup>Required</sup> <a name="database_installation_files_s3_prefix" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3Prefix"></a>

```python
database_installation_files_s3_prefix: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifest"></a>

```python
manifest: str
```

- *Type:* str

---

##### `manifest_hash`<sup>Required</sup> <a name="manifest_hash" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestHash"></a>

```python
manifest_hash: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `source_image_id`<sup>Required</sup> <a name="source_image_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceImageId"></a>

```python
source_image_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsCustomDbEngineVersionConfig <a name="RdsCustomDbEngineVersionConfig" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  engine: str,
  engine_version: str,
  database_installation_files_s3_bucket_name: str = None,
  database_installation_files_s3_prefix: str = None,
  description: str = None,
  filename: str = None,
  id: str = None,
  kms_key_id: str = None,
  manifest: str = None,
  manifest_hash: str = None,
  region: str = None,
  source_image_id: str = None,
  status: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: RdsCustomDbEngineVersionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engine">engine</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3BucketName">database_installation_files_s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3Prefix">database_installation_files_s3_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#filename RdsCustomDbEngineVersion#filename}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#id RdsCustomDbEngineVersion#id}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifest">manifest</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifestHash">manifest_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#manifest_hash RdsCustomDbEngineVersion#manifest_hash}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.sourceImageId">source_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#source_image_id RdsCustomDbEngineVersion#source_image_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#tags_all RdsCustomDbEngineVersion#tags_all}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engine"></a>

```python
engine: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}.

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}.

---

##### `database_installation_files_s3_bucket_name`<sup>Optional</sup> <a name="database_installation_files_s3_bucket_name" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3BucketName"></a>

```python
database_installation_files_s3_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}.

---

##### `database_installation_files_s3_prefix`<sup>Optional</sup> <a name="database_installation_files_s3_prefix" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3Prefix"></a>

```python
database_installation_files_s3_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#filename RdsCustomDbEngineVersion#filename}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#id RdsCustomDbEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}.

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifest"></a>

```python
manifest: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}.

---

##### `manifest_hash`<sup>Optional</sup> <a name="manifest_hash" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifestHash"></a>

```python
manifest_hash: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#manifest_hash RdsCustomDbEngineVersion#manifest_hash}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#region RdsCustomDbEngineVersion#region}

---

##### `source_image_id`<sup>Optional</sup> <a name="source_image_id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.sourceImageId"></a>

```python
source_image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#source_image_id RdsCustomDbEngineVersion#source_image_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#tags_all RdsCustomDbEngineVersion#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.timeouts"></a>

```python
timeouts: RdsCustomDbEngineVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#timeouts RdsCustomDbEngineVersion#timeouts}

---

### RdsCustomDbEngineVersionTimeouts <a name="RdsCustomDbEngineVersionTimeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#create RdsCustomDbEngineVersion#create}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#delete RdsCustomDbEngineVersion#delete}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#update RdsCustomDbEngineVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#create RdsCustomDbEngineVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#delete RdsCustomDbEngineVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/rds_custom_db_engine_version#update RdsCustomDbEngineVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsCustomDbEngineVersionTimeoutsOutputReference <a name="RdsCustomDbEngineVersionTimeoutsOutputReference" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import rds_custom_db_engine_version

rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RdsCustomDbEngineVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a>]

---



