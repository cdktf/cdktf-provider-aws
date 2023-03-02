# `storagegatewayCachedIscsiVolume` Submodule <a name="`storagegatewayCachedIscsiVolume` Submodule" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayCachedIscsiVolume <a name="StoragegatewayCachedIscsiVolume" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume aws_storagegateway_cached_iscsi_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_cached_iscsi_volume.StoragegatewayCachedIscsiVolume;

StoragegatewayCachedIscsiVolume.Builder.create(Construct scope, java.lang.String id)
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
    .gatewayArn(java.lang.String)
    .networkInterfaceId(java.lang.String)
    .targetName(java.lang.String)
    .volumeSizeInBytes(java.lang.Number)
//  .id(java.lang.String)
//  .kmsEncrypted(java.lang.Boolean)
//  .kmsEncrypted(IResolvable)
//  .kmsKey(java.lang.String)
//  .snapshotId(java.lang.String)
//  .sourceVolumeArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#gateway_arn StoragegatewayCachedIscsiVolume#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#network_interface_id StoragegatewayCachedIscsiVolume#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.targetName">targetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#target_name StoragegatewayCachedIscsiVolume#target_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.volumeSizeInBytes">volumeSizeInBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#volume_size_in_bytes StoragegatewayCachedIscsiVolume#volume_size_in_bytes}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#id StoragegatewayCachedIscsiVolume#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_encrypted StoragegatewayCachedIscsiVolume#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_key StoragegatewayCachedIscsiVolume#kms_key}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#snapshot_id StoragegatewayCachedIscsiVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.sourceVolumeArn">sourceVolumeArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#source_volume_arn StoragegatewayCachedIscsiVolume#source_volume_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags StoragegatewayCachedIscsiVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags_all StoragegatewayCachedIscsiVolume#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.gatewayArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#gateway_arn StoragegatewayCachedIscsiVolume#gateway_arn}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.networkInterfaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#network_interface_id StoragegatewayCachedIscsiVolume#network_interface_id}.

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.targetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#target_name StoragegatewayCachedIscsiVolume#target_name}.

---

##### `volumeSizeInBytes`<sup>Required</sup> <a name="volumeSizeInBytes" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.volumeSizeInBytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#volume_size_in_bytes StoragegatewayCachedIscsiVolume#volume_size_in_bytes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#id StoragegatewayCachedIscsiVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.kmsEncrypted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_encrypted StoragegatewayCachedIscsiVolume#kms_encrypted}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_key StoragegatewayCachedIscsiVolume#kms_key}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.snapshotId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#snapshot_id StoragegatewayCachedIscsiVolume#snapshot_id}.

---

##### `sourceVolumeArn`<sup>Optional</sup> <a name="sourceVolumeArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.sourceVolumeArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#source_volume_arn StoragegatewayCachedIscsiVolume#source_volume_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags StoragegatewayCachedIscsiVolume#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags_all StoragegatewayCachedIscsiVolume#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsEncrypted">resetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSourceVolumeArn">resetSourceVolumeArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetId"></a>

```java
public void resetId()
```

##### `resetKmsEncrypted` <a name="resetKmsEncrypted" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsEncrypted"></a>

```java
public void resetKmsEncrypted()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetSourceVolumeArn` <a name="resetSourceVolumeArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetSourceVolumeArn"></a>

```java
public void resetSourceVolumeArn()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_cached_iscsi_volume.StoragegatewayCachedIscsiVolume;

StoragegatewayCachedIscsiVolume.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_cached_iscsi_volume.StoragegatewayCachedIscsiVolume;

StoragegatewayCachedIscsiVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_cached_iscsi_volume.StoragegatewayCachedIscsiVolume;

StoragegatewayCachedIscsiVolume.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.chapEnabled">chapEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lunNumber">lunNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfacePort">networkInterfacePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeArn">volumeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArnInput">gatewayArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncryptedInput">kmsEncryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArnInput">sourceVolumeArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetNameInput">targetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytesInput">volumeSizeInBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArn">sourceVolumeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetName">targetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytes">volumeSizeInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `chapEnabled`<sup>Required</sup> <a name="chapEnabled" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.chapEnabled"></a>

```java
public IResolvable getChapEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lunNumber`<sup>Required</sup> <a name="lunNumber" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.lunNumber"></a>

```java
public java.lang.Number getLunNumber();
```

- *Type:* java.lang.Number

---

##### `networkInterfacePort`<sup>Required</sup> <a name="networkInterfacePort" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfacePort"></a>

```java
public java.lang.Number getNetworkInterfacePort();
```

- *Type:* java.lang.Number

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

---

##### `volumeArn`<sup>Required</sup> <a name="volumeArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeArn"></a>

```java
public java.lang.String getVolumeArn();
```

- *Type:* java.lang.String

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArnInput"></a>

```java
public java.lang.String getGatewayArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsEncryptedInput`<sup>Optional</sup> <a name="kmsEncryptedInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncryptedInput"></a>

```java
public java.lang.Object getKmsEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `sourceVolumeArnInput`<sup>Optional</sup> <a name="sourceVolumeArnInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArnInput"></a>

```java
public java.lang.String getSourceVolumeArnInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetNameInput`<sup>Optional</sup> <a name="targetNameInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetNameInput"></a>

```java
public java.lang.String getTargetNameInput();
```

- *Type:* java.lang.String

---

##### `volumeSizeInBytesInput`<sup>Optional</sup> <a name="volumeSizeInBytesInput" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytesInput"></a>

```java
public java.lang.Number getVolumeSizeInBytesInput();
```

- *Type:* java.lang.Number

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsEncrypted`<sup>Required</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsEncrypted"></a>

```java
public java.lang.Object getKmsEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `sourceVolumeArn`<sup>Required</sup> <a name="sourceVolumeArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.sourceVolumeArn"></a>

```java
public java.lang.String getSourceVolumeArn();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

---

##### `volumeSizeInBytes`<sup>Required</sup> <a name="volumeSizeInBytes" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.volumeSizeInBytes"></a>

```java
public java.lang.Number getVolumeSizeInBytes();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayCachedIscsiVolumeConfig <a name="StoragegatewayCachedIscsiVolumeConfig" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_cached_iscsi_volume.StoragegatewayCachedIscsiVolumeConfig;

StoragegatewayCachedIscsiVolumeConfig.builder()
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
    .gatewayArn(java.lang.String)
    .networkInterfaceId(java.lang.String)
    .targetName(java.lang.String)
    .volumeSizeInBytes(java.lang.Number)
//  .id(java.lang.String)
//  .kmsEncrypted(java.lang.Boolean)
//  .kmsEncrypted(IResolvable)
//  .kmsKey(java.lang.String)
//  .snapshotId(java.lang.String)
//  .sourceVolumeArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#gateway_arn StoragegatewayCachedIscsiVolume#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#network_interface_id StoragegatewayCachedIscsiVolume#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.targetName">targetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#target_name StoragegatewayCachedIscsiVolume#target_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.volumeSizeInBytes">volumeSizeInBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#volume_size_in_bytes StoragegatewayCachedIscsiVolume#volume_size_in_bytes}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#id StoragegatewayCachedIscsiVolume#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_encrypted StoragegatewayCachedIscsiVolume#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_key StoragegatewayCachedIscsiVolume#kms_key}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#snapshot_id StoragegatewayCachedIscsiVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.sourceVolumeArn">sourceVolumeArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#source_volume_arn StoragegatewayCachedIscsiVolume#source_volume_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags StoragegatewayCachedIscsiVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags_all StoragegatewayCachedIscsiVolume#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#gateway_arn StoragegatewayCachedIscsiVolume#gateway_arn}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#network_interface_id StoragegatewayCachedIscsiVolume#network_interface_id}.

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#target_name StoragegatewayCachedIscsiVolume#target_name}.

---

##### `volumeSizeInBytes`<sup>Required</sup> <a name="volumeSizeInBytes" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.volumeSizeInBytes"></a>

```java
public java.lang.Number getVolumeSizeInBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#volume_size_in_bytes StoragegatewayCachedIscsiVolume#volume_size_in_bytes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#id StoragegatewayCachedIscsiVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsEncrypted"></a>

```java
public java.lang.Object getKmsEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_encrypted StoragegatewayCachedIscsiVolume#kms_encrypted}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#kms_key StoragegatewayCachedIscsiVolume#kms_key}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#snapshot_id StoragegatewayCachedIscsiVolume#snapshot_id}.

---

##### `sourceVolumeArn`<sup>Optional</sup> <a name="sourceVolumeArn" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.sourceVolumeArn"></a>

```java
public java.lang.String getSourceVolumeArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#source_volume_arn StoragegatewayCachedIscsiVolume#source_volume_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags StoragegatewayCachedIscsiVolume#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayCachedIscsiVolume.StoragegatewayCachedIscsiVolumeConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cached_iscsi_volume#tags_all StoragegatewayCachedIscsiVolume#tags_all}.

---



