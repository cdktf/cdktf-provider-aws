# `fsxDataRepositoryAssociation` Submodule <a name="`fsxDataRepositoryAssociation` Submodule" id="@cdktf/provider-aws.fsxDataRepositoryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxDataRepositoryAssociation <a name="FsxDataRepositoryAssociation" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association aws_fsx_data_repository_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_data_repository_association.FsxDataRepositoryAssociation;

FsxDataRepositoryAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .dataRepositoryPath(java.lang.String)
    .fileSystemId(java.lang.String)
    .fileSystemPath(java.lang.String)
//  .batchImportMetaDataOnCreate(java.lang.Boolean)
//  .batchImportMetaDataOnCreate(IResolvable)
//  .deleteDataInFilesystem(java.lang.Boolean)
//  .deleteDataInFilesystem(IResolvable)
//  .id(java.lang.String)
//  .importedFileChunkSize(java.lang.Number)
//  .s3(FsxDataRepositoryAssociationS3)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FsxDataRepositoryAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.dataRepositoryPath">dataRepositoryPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#data_repository_path FsxDataRepositoryAssociation#data_repository_path}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_id FsxDataRepositoryAssociation#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.fileSystemPath">fileSystemPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_path FsxDataRepositoryAssociation#file_system_path}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.batchImportMetaDataOnCreate">batchImportMetaDataOnCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#batch_import_meta_data_on_create FsxDataRepositoryAssociation#batch_import_meta_data_on_create}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.deleteDataInFilesystem">deleteDataInFilesystem</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete_data_in_filesystem FsxDataRepositoryAssociation#delete_data_in_filesystem}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#id FsxDataRepositoryAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.importedFileChunkSize">importedFileChunkSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#imported_file_chunk_size FsxDataRepositoryAssociation#imported_file_chunk_size}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags FsxDataRepositoryAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags_all FsxDataRepositoryAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataRepositoryPath`<sup>Required</sup> <a name="dataRepositoryPath" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.dataRepositoryPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#data_repository_path FsxDataRepositoryAssociation#data_repository_path}.

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.fileSystemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_id FsxDataRepositoryAssociation#file_system_id}.

---

##### `fileSystemPath`<sup>Required</sup> <a name="fileSystemPath" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.fileSystemPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_path FsxDataRepositoryAssociation#file_system_path}.

---

##### `batchImportMetaDataOnCreate`<sup>Optional</sup> <a name="batchImportMetaDataOnCreate" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.batchImportMetaDataOnCreate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#batch_import_meta_data_on_create FsxDataRepositoryAssociation#batch_import_meta_data_on_create}.

---

##### `deleteDataInFilesystem`<sup>Optional</sup> <a name="deleteDataInFilesystem" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.deleteDataInFilesystem"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete_data_in_filesystem FsxDataRepositoryAssociation#delete_data_in_filesystem}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#id FsxDataRepositoryAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importedFileChunkSize`<sup>Optional</sup> <a name="importedFileChunkSize" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.importedFileChunkSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#imported_file_chunk_size FsxDataRepositoryAssociation#imported_file_chunk_size}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.s3"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#s3 FsxDataRepositoryAssociation#s3}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags FsxDataRepositoryAssociation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags_all FsxDataRepositoryAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#timeouts FsxDataRepositoryAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetBatchImportMetaDataOnCreate">resetBatchImportMetaDataOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetDeleteDataInFilesystem">resetDeleteDataInFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetImportedFileChunkSize">resetImportedFileChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putS3` <a name="putS3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3"></a>

```java
public void putS3(FsxDataRepositoryAssociationS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTimeouts"></a>

```java
public void putTimeouts(FsxDataRepositoryAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a>

---

##### `resetBatchImportMetaDataOnCreate` <a name="resetBatchImportMetaDataOnCreate" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetBatchImportMetaDataOnCreate"></a>

```java
public void resetBatchImportMetaDataOnCreate()
```

##### `resetDeleteDataInFilesystem` <a name="resetDeleteDataInFilesystem" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetDeleteDataInFilesystem"></a>

```java
public void resetDeleteDataInFilesystem()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetImportedFileChunkSize` <a name="resetImportedFileChunkSize" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetImportedFileChunkSize"></a>

```java
public void resetImportedFileChunkSize()
```

##### `resetS3` <a name="resetS3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetS3"></a>

```java
public void resetS3()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_data_repository_association.FsxDataRepositoryAssociation;

FsxDataRepositoryAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_data_repository_association.FsxDataRepositoryAssociation;

FsxDataRepositoryAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_data_repository_association.FsxDataRepositoryAssociation;

FsxDataRepositoryAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.associationId">associationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference">FsxDataRepositoryAssociationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference">FsxDataRepositoryAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreateInput">batchImportMetaDataOnCreateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPathInput">dataRepositoryPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystemInput">deleteDataInFilesystemInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPathInput">fileSystemPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSizeInput">importedFileChunkSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreate">batchImportMetaDataOnCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPath">dataRepositoryPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystem">deleteDataInFilesystem</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPath">fileSystemPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSize">importedFileChunkSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.associationId"></a>

```java
public java.lang.String getAssociationId();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3"></a>

```java
public FsxDataRepositoryAssociationS3OutputReference getS3();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference">FsxDataRepositoryAssociationS3OutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeouts"></a>

```java
public FsxDataRepositoryAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference">FsxDataRepositoryAssociationTimeoutsOutputReference</a>

---

##### `batchImportMetaDataOnCreateInput`<sup>Optional</sup> <a name="batchImportMetaDataOnCreateInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreateInput"></a>

```java
public java.lang.Object getBatchImportMetaDataOnCreateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataRepositoryPathInput`<sup>Optional</sup> <a name="dataRepositoryPathInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPathInput"></a>

```java
public java.lang.String getDataRepositoryPathInput();
```

- *Type:* java.lang.String

---

##### `deleteDataInFilesystemInput`<sup>Optional</sup> <a name="deleteDataInFilesystemInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystemInput"></a>

```java
public java.lang.Object getDeleteDataInFilesystemInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemIdInput"></a>

```java
public java.lang.String getFileSystemIdInput();
```

- *Type:* java.lang.String

---

##### `fileSystemPathInput`<sup>Optional</sup> <a name="fileSystemPathInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPathInput"></a>

```java
public java.lang.String getFileSystemPathInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importedFileChunkSizeInput`<sup>Optional</sup> <a name="importedFileChunkSizeInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSizeInput"></a>

```java
public java.lang.Number getImportedFileChunkSizeInput();
```

- *Type:* java.lang.Number

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3Input"></a>

```java
public FsxDataRepositoryAssociationS3 getS3Input();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `batchImportMetaDataOnCreate`<sup>Required</sup> <a name="batchImportMetaDataOnCreate" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreate"></a>

```java
public java.lang.Object getBatchImportMetaDataOnCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataRepositoryPath`<sup>Required</sup> <a name="dataRepositoryPath" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPath"></a>

```java
public java.lang.String getDataRepositoryPath();
```

- *Type:* java.lang.String

---

##### `deleteDataInFilesystem`<sup>Required</sup> <a name="deleteDataInFilesystem" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystem"></a>

```java
public java.lang.Object getDeleteDataInFilesystem();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `fileSystemPath`<sup>Required</sup> <a name="fileSystemPath" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPath"></a>

```java
public java.lang.String getFileSystemPath();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importedFileChunkSize`<sup>Required</sup> <a name="importedFileChunkSize" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSize"></a>

```java
public java.lang.Number getImportedFileChunkSize();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FsxDataRepositoryAssociationConfig <a name="FsxDataRepositoryAssociationConfig" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_data_repository_association.FsxDataRepositoryAssociationConfig;

FsxDataRepositoryAssociationConfig.builder()
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
    .dataRepositoryPath(java.lang.String)
    .fileSystemId(java.lang.String)
    .fileSystemPath(java.lang.String)
//  .batchImportMetaDataOnCreate(java.lang.Boolean)
//  .batchImportMetaDataOnCreate(IResolvable)
//  .deleteDataInFilesystem(java.lang.Boolean)
//  .deleteDataInFilesystem(IResolvable)
//  .id(java.lang.String)
//  .importedFileChunkSize(java.lang.Number)
//  .s3(FsxDataRepositoryAssociationS3)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(FsxDataRepositoryAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dataRepositoryPath">dataRepositoryPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#data_repository_path FsxDataRepositoryAssociation#data_repository_path}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_id FsxDataRepositoryAssociation#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemPath">fileSystemPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_path FsxDataRepositoryAssociation#file_system_path}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.batchImportMetaDataOnCreate">batchImportMetaDataOnCreate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#batch_import_meta_data_on_create FsxDataRepositoryAssociation#batch_import_meta_data_on_create}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.deleteDataInFilesystem">deleteDataInFilesystem</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete_data_in_filesystem FsxDataRepositoryAssociation#delete_data_in_filesystem}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#id FsxDataRepositoryAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.importedFileChunkSize">importedFileChunkSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#imported_file_chunk_size FsxDataRepositoryAssociation#imported_file_chunk_size}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags FsxDataRepositoryAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags_all FsxDataRepositoryAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataRepositoryPath`<sup>Required</sup> <a name="dataRepositoryPath" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dataRepositoryPath"></a>

```java
public java.lang.String getDataRepositoryPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#data_repository_path FsxDataRepositoryAssociation#data_repository_path}.

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_id FsxDataRepositoryAssociation#file_system_id}.

---

##### `fileSystemPath`<sup>Required</sup> <a name="fileSystemPath" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemPath"></a>

```java
public java.lang.String getFileSystemPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#file_system_path FsxDataRepositoryAssociation#file_system_path}.

---

##### `batchImportMetaDataOnCreate`<sup>Optional</sup> <a name="batchImportMetaDataOnCreate" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.batchImportMetaDataOnCreate"></a>

```java
public java.lang.Object getBatchImportMetaDataOnCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#batch_import_meta_data_on_create FsxDataRepositoryAssociation#batch_import_meta_data_on_create}.

---

##### `deleteDataInFilesystem`<sup>Optional</sup> <a name="deleteDataInFilesystem" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.deleteDataInFilesystem"></a>

```java
public java.lang.Object getDeleteDataInFilesystem();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete_data_in_filesystem FsxDataRepositoryAssociation#delete_data_in_filesystem}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#id FsxDataRepositoryAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importedFileChunkSize`<sup>Optional</sup> <a name="importedFileChunkSize" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.importedFileChunkSize"></a>

```java
public java.lang.Number getImportedFileChunkSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#imported_file_chunk_size FsxDataRepositoryAssociation#imported_file_chunk_size}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.s3"></a>

```java
public FsxDataRepositoryAssociationS3 getS3();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#s3 FsxDataRepositoryAssociation#s3}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags FsxDataRepositoryAssociation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#tags_all FsxDataRepositoryAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.timeouts"></a>

```java
public FsxDataRepositoryAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#timeouts FsxDataRepositoryAssociation#timeouts}

---

### FsxDataRepositoryAssociationS3 <a name="FsxDataRepositoryAssociationS3" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_data_repository_association.FsxDataRepositoryAssociationS3;

FsxDataRepositoryAssociationS3.builder()
//  .autoExportPolicy(FsxDataRepositoryAssociationS3AutoExportPolicy)
//  .autoImportPolicy(FsxDataRepositoryAssociationS3AutoImportPolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoExportPolicy">autoExportPolicy</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | auto_export_policy block. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoImportPolicy">autoImportPolicy</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | auto_import_policy block. |

---

##### `autoExportPolicy`<sup>Optional</sup> <a name="autoExportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoExportPolicy"></a>

```java
public FsxDataRepositoryAssociationS3AutoExportPolicy getAutoExportPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

auto_export_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#auto_export_policy FsxDataRepositoryAssociation#auto_export_policy}

---

##### `autoImportPolicy`<sup>Optional</sup> <a name="autoImportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoImportPolicy"></a>

```java
public FsxDataRepositoryAssociationS3AutoImportPolicy getAutoImportPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

auto_import_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#auto_import_policy FsxDataRepositoryAssociation#auto_import_policy}

---

### FsxDataRepositoryAssociationS3AutoExportPolicy <a name="FsxDataRepositoryAssociationS3AutoExportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_data_repository_association.FsxDataRepositoryAssociationS3AutoExportPolicy;

FsxDataRepositoryAssociationS3AutoExportPolicy.builder()
//  .events(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}. |

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}.

---

### FsxDataRepositoryAssociationS3AutoImportPolicy <a name="FsxDataRepositoryAssociationS3AutoImportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_data_repository_association.FsxDataRepositoryAssociationS3AutoImportPolicy;

FsxDataRepositoryAssociationS3AutoImportPolicy.builder()
//  .events(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}. |

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}.

---

### FsxDataRepositoryAssociationTimeouts <a name="FsxDataRepositoryAssociationTimeouts" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_data_repository_association.FsxDataRepositoryAssociationTimeouts;

FsxDataRepositoryAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#create FsxDataRepositoryAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete FsxDataRepositoryAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#update FsxDataRepositoryAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#create FsxDataRepositoryAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#delete FsxDataRepositoryAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_data_repository_association#update FsxDataRepositoryAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference <a name="FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_data_repository_association.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference;

new FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resetEvents">resetEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvents` <a name="resetEvents" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resetEvents"></a>

```java
public void resetEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.internalValue"></a>

```java
public FsxDataRepositoryAssociationS3AutoExportPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

---


### FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference <a name="FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_data_repository_association.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference;

new FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resetEvents">resetEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvents` <a name="resetEvents" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resetEvents"></a>

```java
public void resetEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.eventsInput">eventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.eventsInput"></a>

```java
public java.util.List<java.lang.String> getEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.internalValue"></a>

```java
public FsxDataRepositoryAssociationS3AutoImportPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

---


### FsxDataRepositoryAssociationS3OutputReference <a name="FsxDataRepositoryAssociationS3OutputReference" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_data_repository_association.FsxDataRepositoryAssociationS3OutputReference;

new FsxDataRepositoryAssociationS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoExportPolicy">putAutoExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoImportPolicy">putAutoImportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoExportPolicy">resetAutoExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoImportPolicy">resetAutoImportPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoExportPolicy` <a name="putAutoExportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoExportPolicy"></a>

```java
public void putAutoExportPolicy(FsxDataRepositoryAssociationS3AutoExportPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoExportPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

---

##### `putAutoImportPolicy` <a name="putAutoImportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoImportPolicy"></a>

```java
public void putAutoImportPolicy(FsxDataRepositoryAssociationS3AutoImportPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoImportPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

---

##### `resetAutoExportPolicy` <a name="resetAutoExportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoExportPolicy"></a>

```java
public void resetAutoExportPolicy()
```

##### `resetAutoImportPolicy` <a name="resetAutoImportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoImportPolicy"></a>

```java
public void resetAutoImportPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicy">autoExportPolicy</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicy">autoImportPolicy</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicyInput">autoExportPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicyInput">autoImportPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoExportPolicy`<sup>Required</sup> <a name="autoExportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicy"></a>

```java
public FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference getAutoExportPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference</a>

---

##### `autoImportPolicy`<sup>Required</sup> <a name="autoImportPolicy" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicy"></a>

```java
public FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference getAutoImportPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference</a>

---

##### `autoExportPolicyInput`<sup>Optional</sup> <a name="autoExportPolicyInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicyInput"></a>

```java
public FsxDataRepositoryAssociationS3AutoExportPolicy getAutoExportPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

---

##### `autoImportPolicyInput`<sup>Optional</sup> <a name="autoImportPolicyInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicyInput"></a>

```java
public FsxDataRepositoryAssociationS3AutoImportPolicy getAutoImportPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.internalValue"></a>

```java
public FsxDataRepositoryAssociationS3 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

---


### FsxDataRepositoryAssociationTimeoutsOutputReference <a name="FsxDataRepositoryAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.fsx_data_repository_association.FsxDataRepositoryAssociationTimeoutsOutputReference;

new FsxDataRepositoryAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



