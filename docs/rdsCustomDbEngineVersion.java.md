# `rdsCustomDbEngineVersion` Submodule <a name="`rdsCustomDbEngineVersion` Submodule" id="@cdktf/provider-aws.rdsCustomDbEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsCustomDbEngineVersion <a name="RdsCustomDbEngineVersion" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version aws_rds_custom_db_engine_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_custom_db_engine_version.RdsCustomDbEngineVersion;

RdsCustomDbEngineVersion.Builder.create(Construct scope, java.lang.String id)
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
    .engine(java.lang.String)
    .engineVersion(java.lang.String)
//  .databaseInstallationFilesS3BucketName(java.lang.String)
//  .databaseInstallationFilesS3Prefix(java.lang.String)
//  .description(java.lang.String)
//  .filename(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .manifest(java.lang.String)
//  .manifestHash(java.lang.String)
//  .sourceImageId(java.lang.String)
//  .status(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RdsCustomDbEngineVersionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3BucketName">databaseInstallationFilesS3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3Prefix">databaseInstallationFilesS3Prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.filename">filename</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#filename RdsCustomDbEngineVersion#filename}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#id RdsCustomDbEngineVersion#id}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.manifest">manifest</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.manifestHash">manifestHash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#manifest_hash RdsCustomDbEngineVersion#manifest_hash}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.sourceImageId">sourceImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#source_image_id RdsCustomDbEngineVersion#source_image_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#tags_all RdsCustomDbEngineVersion#tags_all}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}.

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.engineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}.

---

##### `databaseInstallationFilesS3BucketName`<sup>Optional</sup> <a name="databaseInstallationFilesS3BucketName" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3BucketName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}.

---

##### `databaseInstallationFilesS3Prefix`<sup>Optional</sup> <a name="databaseInstallationFilesS3Prefix" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.databaseInstallationFilesS3Prefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.filename"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#filename RdsCustomDbEngineVersion#filename}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#id RdsCustomDbEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}.

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.manifest"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}.

---

##### `manifestHash`<sup>Optional</sup> <a name="manifestHash" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.manifestHash"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#manifest_hash RdsCustomDbEngineVersion#manifest_hash}.

---

##### `sourceImageId`<sup>Optional</sup> <a name="sourceImageId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.sourceImageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#source_image_id RdsCustomDbEngineVersion#source_image_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#tags_all RdsCustomDbEngineVersion#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#timeouts RdsCustomDbEngineVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3BucketName">resetDatabaseInstallationFilesS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3Prefix">resetDatabaseInstallationFilesS3Prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifest">resetManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifestHash">resetManifestHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetSourceImageId">resetSourceImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTimeouts"></a>

```java
public void putTimeouts(RdsCustomDbEngineVersionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a>

---

##### `resetDatabaseInstallationFilesS3BucketName` <a name="resetDatabaseInstallationFilesS3BucketName" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3BucketName"></a>

```java
public void resetDatabaseInstallationFilesS3BucketName()
```

##### `resetDatabaseInstallationFilesS3Prefix` <a name="resetDatabaseInstallationFilesS3Prefix" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3Prefix"></a>

```java
public void resetDatabaseInstallationFilesS3Prefix()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFilename` <a name="resetFilename" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetFilename"></a>

```java
public void resetFilename()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetManifest` <a name="resetManifest" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifest"></a>

```java
public void resetManifest()
```

##### `resetManifestHash` <a name="resetManifestHash" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifestHash"></a>

```java
public void resetManifestHash()
```

##### `resetSourceImageId` <a name="resetSourceImageId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetSourceImageId"></a>

```java
public void resetSourceImageId()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RdsCustomDbEngineVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_custom_db_engine_version.RdsCustomDbEngineVersion;

RdsCustomDbEngineVersion.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_custom_db_engine_version.RdsCustomDbEngineVersion;

RdsCustomDbEngineVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_custom_db_engine_version.RdsCustomDbEngineVersion;

RdsCustomDbEngineVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_custom_db_engine_version.RdsCustomDbEngineVersion;

RdsCustomDbEngineVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RdsCustomDbEngineVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RdsCustomDbEngineVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RdsCustomDbEngineVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RdsCustomDbEngineVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RdsCustomDbEngineVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dbParameterGroupFamily">dbParameterGroupFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.majorEngineVersion">majorEngineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestComputed">manifestComputed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference">RdsCustomDbEngineVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketNameInput">databaseInstallationFilesS3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3PrefixInput">databaseInstallationFilesS3PrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersionInput">engineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.filenameInput">filenameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestHashInput">manifestHashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestInput">manifestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceImageIdInput">sourceImageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketName">databaseInstallationFilesS3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3Prefix">databaseInstallationFilesS3Prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.filename">filename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifest">manifest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestHash">manifestHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceImageId">sourceImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dbParameterGroupFamily`<sup>Required</sup> <a name="dbParameterGroupFamily" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dbParameterGroupFamily"></a>

```java
public java.lang.String getDbParameterGroupFamily();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `majorEngineVersion`<sup>Required</sup> <a name="majorEngineVersion" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.majorEngineVersion"></a>

```java
public java.lang.String getMajorEngineVersion();
```

- *Type:* java.lang.String

---

##### `manifestComputed`<sup>Required</sup> <a name="manifestComputed" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestComputed"></a>

```java
public java.lang.String getManifestComputed();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.timeouts"></a>

```java
public RdsCustomDbEngineVersionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference">RdsCustomDbEngineVersionTimeoutsOutputReference</a>

---

##### `databaseInstallationFilesS3BucketNameInput`<sup>Optional</sup> <a name="databaseInstallationFilesS3BucketNameInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketNameInput"></a>

```java
public java.lang.String getDatabaseInstallationFilesS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `databaseInstallationFilesS3PrefixInput`<sup>Optional</sup> <a name="databaseInstallationFilesS3PrefixInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3PrefixInput"></a>

```java
public java.lang.String getDatabaseInstallationFilesS3PrefixInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `engineVersionInput`<sup>Optional</sup> <a name="engineVersionInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersionInput"></a>

```java
public java.lang.String getEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.filenameInput"></a>

```java
public java.lang.String getFilenameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `manifestHashInput`<sup>Optional</sup> <a name="manifestHashInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestHashInput"></a>

```java
public java.lang.String getManifestHashInput();
```

- *Type:* java.lang.String

---

##### `manifestInput`<sup>Optional</sup> <a name="manifestInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestInput"></a>

```java
public java.lang.String getManifestInput();
```

- *Type:* java.lang.String

---

##### `sourceImageIdInput`<sup>Optional</sup> <a name="sourceImageIdInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceImageIdInput"></a>

```java
public java.lang.String getSourceImageIdInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a>

---

##### `databaseInstallationFilesS3BucketName`<sup>Required</sup> <a name="databaseInstallationFilesS3BucketName" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketName"></a>

```java
public java.lang.String getDatabaseInstallationFilesS3BucketName();
```

- *Type:* java.lang.String

---

##### `databaseInstallationFilesS3Prefix`<sup>Required</sup> <a name="databaseInstallationFilesS3Prefix" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3Prefix"></a>

```java
public java.lang.String getDatabaseInstallationFilesS3Prefix();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifest"></a>

```java
public java.lang.String getManifest();
```

- *Type:* java.lang.String

---

##### `manifestHash`<sup>Required</sup> <a name="manifestHash" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestHash"></a>

```java
public java.lang.String getManifestHash();
```

- *Type:* java.lang.String

---

##### `sourceImageId`<sup>Required</sup> <a name="sourceImageId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceImageId"></a>

```java
public java.lang.String getSourceImageId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RdsCustomDbEngineVersionConfig <a name="RdsCustomDbEngineVersionConfig" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_custom_db_engine_version.RdsCustomDbEngineVersionConfig;

RdsCustomDbEngineVersionConfig.builder()
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
    .engine(java.lang.String)
    .engineVersion(java.lang.String)
//  .databaseInstallationFilesS3BucketName(java.lang.String)
//  .databaseInstallationFilesS3Prefix(java.lang.String)
//  .description(java.lang.String)
//  .filename(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .manifest(java.lang.String)
//  .manifestHash(java.lang.String)
//  .sourceImageId(java.lang.String)
//  .status(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RdsCustomDbEngineVersionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3BucketName">databaseInstallationFilesS3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3Prefix">databaseInstallationFilesS3Prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.filename">filename</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#filename RdsCustomDbEngineVersion#filename}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#id RdsCustomDbEngineVersion#id}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifest">manifest</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifestHash">manifestHash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#manifest_hash RdsCustomDbEngineVersion#manifest_hash}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.sourceImageId">sourceImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#source_image_id RdsCustomDbEngineVersion#source_image_id}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#tags_all RdsCustomDbEngineVersion#tags_all}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}.

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}.

---

##### `databaseInstallationFilesS3BucketName`<sup>Optional</sup> <a name="databaseInstallationFilesS3BucketName" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3BucketName"></a>

```java
public java.lang.String getDatabaseInstallationFilesS3BucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}.

---

##### `databaseInstallationFilesS3Prefix`<sup>Optional</sup> <a name="databaseInstallationFilesS3Prefix" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3Prefix"></a>

```java
public java.lang.String getDatabaseInstallationFilesS3Prefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.filename"></a>

```java
public java.lang.String getFilename();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#filename RdsCustomDbEngineVersion#filename}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#id RdsCustomDbEngineVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}.

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifest"></a>

```java
public java.lang.String getManifest();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}.

---

##### `manifestHash`<sup>Optional</sup> <a name="manifestHash" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifestHash"></a>

```java
public java.lang.String getManifestHash();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#manifest_hash RdsCustomDbEngineVersion#manifest_hash}.

---

##### `sourceImageId`<sup>Optional</sup> <a name="sourceImageId" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.sourceImageId"></a>

```java
public java.lang.String getSourceImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#source_image_id RdsCustomDbEngineVersion#source_image_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#tags_all RdsCustomDbEngineVersion#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.timeouts"></a>

```java
public RdsCustomDbEngineVersionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#timeouts RdsCustomDbEngineVersion#timeouts}

---

### RdsCustomDbEngineVersionTimeouts <a name="RdsCustomDbEngineVersionTimeouts" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_custom_db_engine_version.RdsCustomDbEngineVersionTimeouts;

RdsCustomDbEngineVersionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#create RdsCustomDbEngineVersion#create}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#delete RdsCustomDbEngineVersion#delete}. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#update RdsCustomDbEngineVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#create RdsCustomDbEngineVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#delete RdsCustomDbEngineVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/rds_custom_db_engine_version#update RdsCustomDbEngineVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsCustomDbEngineVersionTimeoutsOutputReference <a name="RdsCustomDbEngineVersionTimeoutsOutputReference" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.rds_custom_db_engine_version.RdsCustomDbEngineVersionTimeoutsOutputReference;

new RdsCustomDbEngineVersionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTimeouts">RdsCustomDbEngineVersionTimeouts</a>

---



