# `ebsSnapshotCopy` Submodule <a name="`ebsSnapshotCopy` Submodule" id="@cdktf/provider-aws.ebsSnapshotCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EbsSnapshotCopy <a name="EbsSnapshotCopy" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy aws_ebs_snapshot_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_copy.EbsSnapshotCopy;

EbsSnapshotCopy.Builder.create(Construct scope, java.lang.String id)
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
    .sourceRegion(java.lang.String)
    .sourceSnapshotId(java.lang.String)
//  .description(java.lang.String)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .permanentRestore(java.lang.Boolean)
//  .permanentRestore(IResolvable)
//  .storageTier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .temporaryRestoreDays(java.lang.Number)
//  .timeouts(EbsSnapshotCopyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#source_region EbsSnapshotCopy#source_region}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.sourceSnapshotId">sourceSnapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#source_snapshot_id EbsSnapshotCopy#source_snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#description EbsSnapshotCopy#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#encrypted EbsSnapshotCopy#encrypted}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#id EbsSnapshotCopy#id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#kms_key_id EbsSnapshotCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.permanentRestore">permanentRestore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#permanent_restore EbsSnapshotCopy#permanent_restore}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.storageTier">storageTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#storage_tier EbsSnapshotCopy#storage_tier}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#tags EbsSnapshotCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#tags_all EbsSnapshotCopy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.temporaryRestoreDays">temporaryRestoreDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#temporary_restore_days EbsSnapshotCopy#temporary_restore_days}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.sourceRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#source_region EbsSnapshotCopy#source_region}.

---

##### `sourceSnapshotId`<sup>Required</sup> <a name="sourceSnapshotId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.sourceSnapshotId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#source_snapshot_id EbsSnapshotCopy#source_snapshot_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#description EbsSnapshotCopy#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.encrypted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#encrypted EbsSnapshotCopy#encrypted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#id EbsSnapshotCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#kms_key_id EbsSnapshotCopy#kms_key_id}.

---

##### `permanentRestore`<sup>Optional</sup> <a name="permanentRestore" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.permanentRestore"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#permanent_restore EbsSnapshotCopy#permanent_restore}.

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.storageTier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#storage_tier EbsSnapshotCopy#storage_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#tags EbsSnapshotCopy#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#tags_all EbsSnapshotCopy#tags_all}.

---

##### `temporaryRestoreDays`<sup>Optional</sup> <a name="temporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.temporaryRestoreDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#temporary_restore_days EbsSnapshotCopy#temporary_restore_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#timeouts EbsSnapshotCopy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetEncrypted">resetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetPermanentRestore">resetPermanentRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetStorageTier">resetStorageTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTemporaryRestoreDays">resetTemporaryRestoreDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.putTimeouts"></a>

```java
public void putTimeouts(EbsSnapshotCopyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncrypted` <a name="resetEncrypted" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetEncrypted"></a>

```java
public void resetEncrypted()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetPermanentRestore` <a name="resetPermanentRestore" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetPermanentRestore"></a>

```java
public void resetPermanentRestore()
```

##### `resetStorageTier` <a name="resetStorageTier" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetStorageTier"></a>

```java
public void resetStorageTier()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTemporaryRestoreDays` <a name="resetTemporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTemporaryRestoreDays"></a>

```java
public void resetTemporaryRestoreDays()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_copy.EbsSnapshotCopy;

EbsSnapshotCopy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_copy.EbsSnapshotCopy;

EbsSnapshotCopy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_copy.EbsSnapshotCopy;

EbsSnapshotCopy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.dataEncryptionKeyId">dataEncryptionKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.outpostArn">outpostArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.ownerAlias">ownerAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference">EbsSnapshotCopyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.encryptedInput">encryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.permanentRestoreInput">permanentRestoreInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceRegionInput">sourceRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceSnapshotIdInput">sourceSnapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.storageTierInput">storageTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.temporaryRestoreDaysInput">temporaryRestoreDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.permanentRestore">permanentRestore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceSnapshotId">sourceSnapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.temporaryRestoreDays">temporaryRestoreDays</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dataEncryptionKeyId`<sup>Required</sup> <a name="dataEncryptionKeyId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.dataEncryptionKeyId"></a>

```java
public java.lang.String getDataEncryptionKeyId();
```

- *Type:* java.lang.String

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.outpostArn"></a>

```java
public java.lang.String getOutpostArn();
```

- *Type:* java.lang.String

---

##### `ownerAlias`<sup>Required</sup> <a name="ownerAlias" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.ownerAlias"></a>

```java
public java.lang.String getOwnerAlias();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.timeouts"></a>

```java
public EbsSnapshotCopyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference">EbsSnapshotCopyTimeoutsOutputReference</a>

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `encryptedInput`<sup>Optional</sup> <a name="encryptedInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.encryptedInput"></a>

```java
public java.lang.Object getEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `permanentRestoreInput`<sup>Optional</sup> <a name="permanentRestoreInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.permanentRestoreInput"></a>

```java
public java.lang.Object getPermanentRestoreInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceRegionInput`<sup>Optional</sup> <a name="sourceRegionInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceRegionInput"></a>

```java
public java.lang.String getSourceRegionInput();
```

- *Type:* java.lang.String

---

##### `sourceSnapshotIdInput`<sup>Optional</sup> <a name="sourceSnapshotIdInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceSnapshotIdInput"></a>

```java
public java.lang.String getSourceSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `storageTierInput`<sup>Optional</sup> <a name="storageTierInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.storageTierInput"></a>

```java
public java.lang.String getStorageTierInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `temporaryRestoreDaysInput`<sup>Optional</sup> <a name="temporaryRestoreDaysInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.temporaryRestoreDaysInput"></a>

```java
public java.lang.Number getTemporaryRestoreDaysInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `permanentRestore`<sup>Required</sup> <a name="permanentRestore" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.permanentRestore"></a>

```java
public java.lang.Object getPermanentRestore();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceRegion"></a>

```java
public java.lang.String getSourceRegion();
```

- *Type:* java.lang.String

---

##### `sourceSnapshotId`<sup>Required</sup> <a name="sourceSnapshotId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceSnapshotId"></a>

```java
public java.lang.String getSourceSnapshotId();
```

- *Type:* java.lang.String

---

##### `storageTier`<sup>Required</sup> <a name="storageTier" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `temporaryRestoreDays`<sup>Required</sup> <a name="temporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.temporaryRestoreDays"></a>

```java
public java.lang.Number getTemporaryRestoreDays();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EbsSnapshotCopyConfig <a name="EbsSnapshotCopyConfig" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_copy.EbsSnapshotCopyConfig;

EbsSnapshotCopyConfig.builder()
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
    .sourceRegion(java.lang.String)
    .sourceSnapshotId(java.lang.String)
//  .description(java.lang.String)
//  .encrypted(java.lang.Boolean)
//  .encrypted(IResolvable)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .permanentRestore(java.lang.Boolean)
//  .permanentRestore(IResolvable)
//  .storageTier(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .temporaryRestoreDays(java.lang.Number)
//  .timeouts(EbsSnapshotCopyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.sourceRegion">sourceRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#source_region EbsSnapshotCopy#source_region}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.sourceSnapshotId">sourceSnapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#source_snapshot_id EbsSnapshotCopy#source_snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#description EbsSnapshotCopy#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.encrypted">encrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#encrypted EbsSnapshotCopy#encrypted}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#id EbsSnapshotCopy#id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#kms_key_id EbsSnapshotCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.permanentRestore">permanentRestore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#permanent_restore EbsSnapshotCopy#permanent_restore}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.storageTier">storageTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#storage_tier EbsSnapshotCopy#storage_tier}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#tags EbsSnapshotCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#tags_all EbsSnapshotCopy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.temporaryRestoreDays">temporaryRestoreDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#temporary_restore_days EbsSnapshotCopy#temporary_restore_days}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `sourceRegion`<sup>Required</sup> <a name="sourceRegion" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.sourceRegion"></a>

```java
public java.lang.String getSourceRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#source_region EbsSnapshotCopy#source_region}.

---

##### `sourceSnapshotId`<sup>Required</sup> <a name="sourceSnapshotId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.sourceSnapshotId"></a>

```java
public java.lang.String getSourceSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#source_snapshot_id EbsSnapshotCopy#source_snapshot_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#description EbsSnapshotCopy#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.encrypted"></a>

```java
public java.lang.Object getEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#encrypted EbsSnapshotCopy#encrypted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#id EbsSnapshotCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#kms_key_id EbsSnapshotCopy#kms_key_id}.

---

##### `permanentRestore`<sup>Optional</sup> <a name="permanentRestore" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.permanentRestore"></a>

```java
public java.lang.Object getPermanentRestore();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#permanent_restore EbsSnapshotCopy#permanent_restore}.

---

##### `storageTier`<sup>Optional</sup> <a name="storageTier" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.storageTier"></a>

```java
public java.lang.String getStorageTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#storage_tier EbsSnapshotCopy#storage_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#tags EbsSnapshotCopy#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#tags_all EbsSnapshotCopy#tags_all}.

---

##### `temporaryRestoreDays`<sup>Optional</sup> <a name="temporaryRestoreDays" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.temporaryRestoreDays"></a>

```java
public java.lang.Number getTemporaryRestoreDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#temporary_restore_days EbsSnapshotCopy#temporary_restore_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.timeouts"></a>

```java
public EbsSnapshotCopyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#timeouts EbsSnapshotCopy#timeouts}

---

### EbsSnapshotCopyTimeouts <a name="EbsSnapshotCopyTimeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_copy.EbsSnapshotCopyTimeouts;

EbsSnapshotCopyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#create EbsSnapshotCopy#create}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#delete EbsSnapshotCopy#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#create EbsSnapshotCopy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot_copy#delete EbsSnapshotCopy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EbsSnapshotCopyTimeoutsOutputReference <a name="EbsSnapshotCopyTimeoutsOutputReference" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ebs_snapshot_copy.EbsSnapshotCopyTimeoutsOutputReference;

new EbsSnapshotCopyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



