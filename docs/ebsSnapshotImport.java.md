# `ebsSnapshotImport` Submodule <a name="`ebsSnapshotImport` Submodule" id="@cdktf/provider-aws.ebsSnapshotImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EbsSnapshotImport <a name="EbsSnapshotImport" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import aws_ebs_snapshot_import}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_import.EbsSnapshotImport;

EbsSnapshotImport.Builder.create(Construct scope, java.lang.String id)
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
    .diskContainer(EbsSnapshotImportDiskContainer)
//  .clientData(EbsSnapshotImportClientData)
//  .description(java.lang.String)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .permanentRestore(java.lang.Boolean)
//  .permanentRestore(IResolvable)
//  .roleName(java.lang.String)
//  .storageTier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .temporaryRestoreDays(java.lang.Number)
//  .timeouts(EbsSnapshotImportTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.diskContainer">diskContainer</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | disk_container block. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.clientData">clientData</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | client_data block. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#id EbsSnapshotImport#id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.permanentRestore">permanentRestore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.storageTier">storageTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags EbsSnapshotImport#tags}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.temporaryRestoreDays">temporaryRestoreDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `diskContainer`<sup>Required</sup> <a name="diskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.diskContainer"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

disk_container block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#disk_container EbsSnapshotImport#disk_container}

---

##### `clientData`<sup>Optional</sup> <a name="clientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.clientData"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

client_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#client_data EbsSnapshotImport#client_data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.encrypted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#id EbsSnapshotImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}.

---

##### `permanentRestore`<sup>Optional</sup> <a name="permanentRestore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.permanentRestore"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}.

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.storageTier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags EbsSnapshotImport#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}.

---

##### `temporaryRestoreDays`<sup>Optional</sup> <a name="temporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.temporaryRestoreDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#timeouts EbsSnapshotImport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData">putClientData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer">putDiskContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetClientData">resetClientData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetPermanentRestore">resetPermanentRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetStorageTier">resetStorageTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTemporaryRestoreDays">resetTemporaryRestoreDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putClientData` <a name="putClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData"></a>

```java
public void putClientData(EbsSnapshotImportClientData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putClientData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

---

##### `putDiskContainer` <a name="putDiskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer"></a>

```java
public void putDiskContainer(EbsSnapshotImportDiskContainer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putDiskContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts"></a>

```java
public void putTimeouts(EbsSnapshotImportTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a>

---

##### `resetClientData` <a name="resetClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetClientData"></a>

```java
public void resetClientData()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetPermanentRestore` <a name="resetPermanentRestore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetPermanentRestore"></a>

```java
public void resetPermanentRestore()
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetRoleName"></a>

```java
public void resetRoleName()
```

##### `resetStorageTier` <a name="resetStorageTier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetStorageTier"></a>

```java
public void resetStorageTier()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTemporaryRestoreDays` <a name="resetTemporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTemporaryRestoreDays"></a>

```java
public void resetTemporaryRestoreDays()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_import.EbsSnapshotImport;

EbsSnapshotImport.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_import.EbsSnapshotImport;

EbsSnapshotImport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_import.EbsSnapshotImport;

EbsSnapshotImport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientData">clientData</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference">EbsSnapshotImportClientDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dataEncryptionKeyId">dataEncryptionKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainer">diskContainer</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference">EbsSnapshotImportDiskContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerAlias">ownerAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference">EbsSnapshotImportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientDataInput">clientDataInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainerInput">diskContainerInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestoreInput">permanentRestoreInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTierInput">storageTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDaysInput">temporaryRestoreDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestore">permanentRestore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDays">temporaryRestoreDays</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `clientData`<sup>Required</sup> <a name="clientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientData"></a>

```java
public EbsSnapshotImportClientDataOutputReference getClientData();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference">EbsSnapshotImportClientDataOutputReference</a>

---

##### `dataEncryptionKeyId`<sup>Required</sup> <a name="dataEncryptionKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.dataEncryptionKeyId"></a>

```java
public java.lang.String getDataEncryptionKeyId();
```

- *Type:* java.lang.String

---

##### `diskContainer`<sup>Required</sup> <a name="diskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainer"></a>

```java
public EbsSnapshotImportDiskContainerOutputReference getDiskContainer();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference">EbsSnapshotImportDiskContainerOutputReference</a>

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

---

##### `ownerAlias`<sup>Required</sup> <a name="ownerAlias" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerAlias"></a>

```java
public java.lang.String getOwnerAlias();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeouts"></a>

```java
public EbsSnapshotImportTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference">EbsSnapshotImportTimeoutsOutputReference</a>

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `clientDataInput`<sup>Optional</sup> <a name="clientDataInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.clientDataInput"></a>

```java
public EbsSnapshotImportClientData getClientDataInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `diskContainerInput`<sup>Optional</sup> <a name="diskContainerInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.diskContainerInput"></a>

```java
public EbsSnapshotImportDiskContainer getDiskContainerInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `permanentRestoreInput`<sup>Optional</sup> <a name="permanentRestoreInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestoreInput"></a>

```java
public java.lang.Object getPermanentRestoreInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `storageTierInput`<sup>Optional</sup> <a name="storageTierInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTierInput"></a>

```java
public java.lang.String getStorageTierInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `temporaryRestoreDaysInput`<sup>Optional</sup> <a name="temporaryRestoreDaysInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDaysInput"></a>

```java
public java.lang.Number getTemporaryRestoreDaysInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `permanentRestore`<sup>Required</sup> <a name="permanentRestore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.permanentRestore"></a>

```java
public java.lang.Object getPermanentRestore();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `storageTier`<sup>Required</sup> <a name="storageTier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `temporaryRestoreDays`<sup>Required</sup> <a name="temporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.temporaryRestoreDays"></a>

```java
public java.lang.Number getTemporaryRestoreDays();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EbsSnapshotImportClientData <a name="EbsSnapshotImportClientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_import.EbsSnapshotImportClientData;

EbsSnapshotImportClientData.builder()
//  .comment(java.lang.String)
//  .uploadEnd(java.lang.String)
//  .uploadSize(java.lang.Number)
//  .uploadStart(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#comment EbsSnapshotImport#comment}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadEnd">uploadEnd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_end EbsSnapshotImport#upload_end}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadSize">uploadSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_size EbsSnapshotImport#upload_size}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadStart">uploadStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_start EbsSnapshotImport#upload_start}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#comment EbsSnapshotImport#comment}.

---

##### `uploadEnd`<sup>Optional</sup> <a name="uploadEnd" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadEnd"></a>

```java
public java.lang.String getUploadEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_end EbsSnapshotImport#upload_end}.

---

##### `uploadSize`<sup>Optional</sup> <a name="uploadSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadSize"></a>

```java
public java.lang.Number getUploadSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_size EbsSnapshotImport#upload_size}.

---

##### `uploadStart`<sup>Optional</sup> <a name="uploadStart" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData.property.uploadStart"></a>

```java
public java.lang.String getUploadStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#upload_start EbsSnapshotImport#upload_start}.

---

### EbsSnapshotImportConfig <a name="EbsSnapshotImportConfig" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_import.EbsSnapshotImportConfig;

EbsSnapshotImportConfig.builder()
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
    .diskContainer(EbsSnapshotImportDiskContainer)
//  .clientData(EbsSnapshotImportClientData)
//  .description(java.lang.String)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .permanentRestore(java.lang.Boolean)
//  .permanentRestore(IResolvable)
//  .roleName(java.lang.String)
//  .storageTier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .temporaryRestoreDays(java.lang.Number)
//  .timeouts(EbsSnapshotImportTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.diskContainer">diskContainer</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | disk_container block. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.clientData">clientData</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | client_data block. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#id EbsSnapshotImport#id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.permanentRestore">permanentRestore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags EbsSnapshotImport#tags}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.temporaryRestoreDays">temporaryRestoreDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `diskContainer`<sup>Required</sup> <a name="diskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.diskContainer"></a>

```java
public EbsSnapshotImportDiskContainer getDiskContainer();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

disk_container block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#disk_container EbsSnapshotImport#disk_container}

---

##### `clientData`<sup>Optional</sup> <a name="clientData" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.clientData"></a>

```java
public EbsSnapshotImportClientData getClientData();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

client_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#client_data EbsSnapshotImport#client_data}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#encrypted EbsSnapshotImport#encrypted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#id EbsSnapshotImport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#kms_key_id EbsSnapshotImport#kms_key_id}.

---

##### `permanentRestore`<sup>Optional</sup> <a name="permanentRestore" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.permanentRestore"></a>

```java
public java.lang.Object getPermanentRestore();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#permanent_restore EbsSnapshotImport#permanent_restore}.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#role_name EbsSnapshotImport#role_name}.

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#storage_tier EbsSnapshotImport#storage_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags EbsSnapshotImport#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#tags_all EbsSnapshotImport#tags_all}.

---

##### `temporaryRestoreDays`<sup>Optional</sup> <a name="temporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.temporaryRestoreDays"></a>

```java
public java.lang.Number getTemporaryRestoreDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#temporary_restore_days EbsSnapshotImport#temporary_restore_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportConfig.property.timeouts"></a>

```java
public EbsSnapshotImportTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#timeouts EbsSnapshotImport#timeouts}

---

### EbsSnapshotImportDiskContainer <a name="EbsSnapshotImportDiskContainer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_import.EbsSnapshotImportDiskContainer;

EbsSnapshotImportDiskContainer.builder()
    .format(java.lang.String)
//  .description(java.lang.String)
//  .url(java.lang.String)
//  .userBucket(EbsSnapshotImportDiskContainerUserBucket)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#format EbsSnapshotImport#format}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#url EbsSnapshotImport#url}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.userBucket">userBucket</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a></code> | user_bucket block. |

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#format EbsSnapshotImport#format}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#description EbsSnapshotImport#description}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#url EbsSnapshotImport#url}.

---

##### `userBucket`<sup>Optional</sup> <a name="userBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer.property.userBucket"></a>

```java
public EbsSnapshotImportDiskContainerUserBucket getUserBucket();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

user_bucket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#user_bucket EbsSnapshotImport#user_bucket}

---

### EbsSnapshotImportDiskContainerUserBucket <a name="EbsSnapshotImportDiskContainerUserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_import.EbsSnapshotImportDiskContainerUserBucket;

EbsSnapshotImportDiskContainerUserBucket.builder()
    .s3Bucket(java.lang.String)
    .s3Key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_bucket EbsSnapshotImport#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_key EbsSnapshotImport#s3_key}. |

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_bucket EbsSnapshotImport#s3_bucket}.

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#s3_key EbsSnapshotImport#s3_key}.

---

### EbsSnapshotImportTimeouts <a name="EbsSnapshotImportTimeouts" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_import.EbsSnapshotImportTimeouts;

EbsSnapshotImportTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#create EbsSnapshotImport#create}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#delete EbsSnapshotImport#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#create EbsSnapshotImport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_import#delete EbsSnapshotImport#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EbsSnapshotImportClientDataOutputReference <a name="EbsSnapshotImportClientDataOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_import.EbsSnapshotImportClientDataOutputReference;

new EbsSnapshotImportClientDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadEnd">resetUploadEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadSize">resetUploadSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadStart">resetUploadStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetUploadEnd` <a name="resetUploadEnd" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadEnd"></a>

```java
public void resetUploadEnd()
```

##### `resetUploadSize` <a name="resetUploadSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadSize"></a>

```java
public void resetUploadSize()
```

##### `resetUploadStart` <a name="resetUploadStart" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.resetUploadStart"></a>

```java
public void resetUploadStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEndInput">uploadEndInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSizeInput">uploadSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStartInput">uploadStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEnd">uploadEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSize">uploadSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStart">uploadStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `uploadEndInput`<sup>Optional</sup> <a name="uploadEndInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEndInput"></a>

```java
public java.lang.String getUploadEndInput();
```

- *Type:* java.lang.String

---

##### `uploadSizeInput`<sup>Optional</sup> <a name="uploadSizeInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSizeInput"></a>

```java
public java.lang.Number getUploadSizeInput();
```

- *Type:* java.lang.Number

---

##### `uploadStartInput`<sup>Optional</sup> <a name="uploadStartInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStartInput"></a>

```java
public java.lang.String getUploadStartInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `uploadEnd`<sup>Required</sup> <a name="uploadEnd" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadEnd"></a>

```java
public java.lang.String getUploadEnd();
```

- *Type:* java.lang.String

---

##### `uploadSize`<sup>Required</sup> <a name="uploadSize" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadSize"></a>

```java
public java.lang.Number getUploadSize();
```

- *Type:* java.lang.Number

---

##### `uploadStart`<sup>Required</sup> <a name="uploadStart" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.uploadStart"></a>

```java
public java.lang.String getUploadStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientDataOutputReference.property.internalValue"></a>

```java
public EbsSnapshotImportClientData getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportClientData">EbsSnapshotImportClientData</a>

---


### EbsSnapshotImportDiskContainerOutputReference <a name="EbsSnapshotImportDiskContainerOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_import.EbsSnapshotImportDiskContainerOutputReference;

new EbsSnapshotImportDiskContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket">putUserBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUserBucket">resetUserBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUserBucket` <a name="putUserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket"></a>

```java
public void putUserBucket(EbsSnapshotImportDiskContainerUserBucket value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.putUserBucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUserBucket` <a name="resetUserBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.resetUserBucket"></a>

```java
public void resetUserBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucket">userBucket</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference">EbsSnapshotImportDiskContainerUserBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucketInput">userBucketInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `userBucket`<sup>Required</sup> <a name="userBucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucket"></a>

```java
public EbsSnapshotImportDiskContainerUserBucketOutputReference getUserBucket();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference">EbsSnapshotImportDiskContainerUserBucketOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `userBucketInput`<sup>Optional</sup> <a name="userBucketInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.userBucketInput"></a>

```java
public EbsSnapshotImportDiskContainerUserBucket getUserBucketInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerOutputReference.property.internalValue"></a>

```java
public EbsSnapshotImportDiskContainer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainer">EbsSnapshotImportDiskContainer</a>

---


### EbsSnapshotImportDiskContainerUserBucketOutputReference <a name="EbsSnapshotImportDiskContainerUserBucketOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_import.EbsSnapshotImportDiskContainerUserBucketOutputReference;

new EbsSnapshotImportDiskContainerUserBucketOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3KeyInput"></a>

```java
public java.lang.String getS3KeyInput();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucketOutputReference.property.internalValue"></a>

```java
public EbsSnapshotImportDiskContainerUserBucket getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportDiskContainerUserBucket">EbsSnapshotImportDiskContainerUserBucket</a>

---


### EbsSnapshotImportTimeoutsOutputReference <a name="EbsSnapshotImportTimeoutsOutputReference" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_import.EbsSnapshotImportTimeoutsOutputReference;

new EbsSnapshotImportTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotImport.EbsSnapshotImportTimeouts">EbsSnapshotImportTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



