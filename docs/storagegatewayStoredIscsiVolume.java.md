# `storagegatewayStoredIscsiVolume` Submodule <a name="`storagegatewayStoredIscsiVolume` Submodule" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayStoredIscsiVolume <a name="StoragegatewayStoredIscsiVolume" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume aws_storagegateway_stored_iscsi_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_stored_iscsi_volume.StoragegatewayStoredIscsiVolume;

StoragegatewayStoredIscsiVolume.Builder.create(Construct scope, java.lang.String id)
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
    .diskId(java.lang.String)
    .gatewayArn(java.lang.String)
    .networkInterfaceId(java.lang.String)
    .preserveExistingData(java.lang.Boolean)
    .preserveExistingData(IResolvable)
    .targetName(java.lang.String)
//  .id(java.lang.String)
//  .kmsEncrypted(java.lang.Boolean)
//  .kmsEncrypted(IResolvable)
//  .kmsKey(java.lang.String)
//  .snapshotId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.diskId">diskId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#disk_id StoragegatewayStoredIscsiVolume#disk_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#gateway_arn StoragegatewayStoredIscsiVolume#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#network_interface_id StoragegatewayStoredIscsiVolume#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.preserveExistingData">preserveExistingData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#preserve_existing_data StoragegatewayStoredIscsiVolume#preserve_existing_data}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.targetName">targetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#target_name StoragegatewayStoredIscsiVolume#target_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#id StoragegatewayStoredIscsiVolume#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#kms_encrypted StoragegatewayStoredIscsiVolume#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#kms_key StoragegatewayStoredIscsiVolume#kms_key}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#snapshot_id StoragegatewayStoredIscsiVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#tags StoragegatewayStoredIscsiVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#tags_all StoragegatewayStoredIscsiVolume#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `diskId`<sup>Required</sup> <a name="diskId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.diskId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#disk_id StoragegatewayStoredIscsiVolume#disk_id}.

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.gatewayArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#gateway_arn StoragegatewayStoredIscsiVolume#gateway_arn}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.networkInterfaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#network_interface_id StoragegatewayStoredIscsiVolume#network_interface_id}.

---

##### `preserveExistingData`<sup>Required</sup> <a name="preserveExistingData" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.preserveExistingData"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#preserve_existing_data StoragegatewayStoredIscsiVolume#preserve_existing_data}.

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.targetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#target_name StoragegatewayStoredIscsiVolume#target_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#id StoragegatewayStoredIscsiVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.kmsEncrypted"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#kms_encrypted StoragegatewayStoredIscsiVolume#kms_encrypted}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.kmsKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#kms_key StoragegatewayStoredIscsiVolume#kms_key}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.snapshotId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#snapshot_id StoragegatewayStoredIscsiVolume#snapshot_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#tags StoragegatewayStoredIscsiVolume#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#tags_all StoragegatewayStoredIscsiVolume#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetKmsEncrypted">resetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetKmsKey">resetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetId"></a>

```java
public void resetId()
```

##### `resetKmsEncrypted` <a name="resetKmsEncrypted" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetKmsEncrypted"></a>

```java
public void resetKmsEncrypted()
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetKmsKey"></a>

```java
public void resetKmsKey()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_stored_iscsi_volume.StoragegatewayStoredIscsiVolume;

StoragegatewayStoredIscsiVolume.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_stored_iscsi_volume.StoragegatewayStoredIscsiVolume;

StoragegatewayStoredIscsiVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_stored_iscsi_volume.StoragegatewayStoredIscsiVolume;

StoragegatewayStoredIscsiVolume.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.chapEnabled">chapEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.lunNumber">lunNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfacePort">networkInterfacePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetArn">targetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeAttachmentStatus">volumeAttachmentStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeSizeInBytes">volumeSizeInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeStatus">volumeStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.diskIdInput">diskIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.gatewayArnInput">gatewayArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsEncryptedInput">kmsEncryptedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.preserveExistingDataInput">preserveExistingDataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetNameInput">targetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.diskId">diskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.preserveExistingData">preserveExistingData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetName">targetName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `chapEnabled`<sup>Required</sup> <a name="chapEnabled" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.chapEnabled"></a>

```java
public IResolvable getChapEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lunNumber`<sup>Required</sup> <a name="lunNumber" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.lunNumber"></a>

```java
public java.lang.Number getLunNumber();
```

- *Type:* java.lang.Number

---

##### `networkInterfacePort`<sup>Required</sup> <a name="networkInterfacePort" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfacePort"></a>

```java
public java.lang.Number getNetworkInterfacePort();
```

- *Type:* java.lang.Number

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetArn"></a>

```java
public java.lang.String getTargetArn();
```

- *Type:* java.lang.String

---

##### `volumeAttachmentStatus`<sup>Required</sup> <a name="volumeAttachmentStatus" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeAttachmentStatus"></a>

```java
public java.lang.String getVolumeAttachmentStatus();
```

- *Type:* java.lang.String

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `volumeSizeInBytes`<sup>Required</sup> <a name="volumeSizeInBytes" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeSizeInBytes"></a>

```java
public java.lang.Number getVolumeSizeInBytes();
```

- *Type:* java.lang.Number

---

##### `volumeStatus`<sup>Required</sup> <a name="volumeStatus" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeStatus"></a>

```java
public java.lang.String getVolumeStatus();
```

- *Type:* java.lang.String

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `diskIdInput`<sup>Optional</sup> <a name="diskIdInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.diskIdInput"></a>

```java
public java.lang.String getDiskIdInput();
```

- *Type:* java.lang.String

---

##### `gatewayArnInput`<sup>Optional</sup> <a name="gatewayArnInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.gatewayArnInput"></a>

```java
public java.lang.String getGatewayArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsEncryptedInput`<sup>Optional</sup> <a name="kmsEncryptedInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsEncryptedInput"></a>

```java
public java.lang.Object getKmsEncryptedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `preserveExistingDataInput`<sup>Optional</sup> <a name="preserveExistingDataInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.preserveExistingDataInput"></a>

```java
public java.lang.Object getPreserveExistingDataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetNameInput`<sup>Optional</sup> <a name="targetNameInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetNameInput"></a>

```java
public java.lang.String getTargetNameInput();
```

- *Type:* java.lang.String

---

##### `diskId`<sup>Required</sup> <a name="diskId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.diskId"></a>

```java
public java.lang.String getDiskId();
```

- *Type:* java.lang.String

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsEncrypted`<sup>Required</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsEncrypted"></a>

```java
public java.lang.Object getKmsEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `preserveExistingData`<sup>Required</sup> <a name="preserveExistingData" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.preserveExistingData"></a>

```java
public java.lang.Object getPreserveExistingData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayStoredIscsiVolumeConfig <a name="StoragegatewayStoredIscsiVolumeConfig" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.storagegateway_stored_iscsi_volume.StoragegatewayStoredIscsiVolumeConfig;

StoragegatewayStoredIscsiVolumeConfig.builder()
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
    .diskId(java.lang.String)
    .gatewayArn(java.lang.String)
    .networkInterfaceId(java.lang.String)
    .preserveExistingData(java.lang.Boolean)
    .preserveExistingData(IResolvable)
    .targetName(java.lang.String)
//  .id(java.lang.String)
//  .kmsEncrypted(java.lang.Boolean)
//  .kmsEncrypted(IResolvable)
//  .kmsKey(java.lang.String)
//  .snapshotId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.diskId">diskId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#disk_id StoragegatewayStoredIscsiVolume#disk_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.gatewayArn">gatewayArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#gateway_arn StoragegatewayStoredIscsiVolume#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#network_interface_id StoragegatewayStoredIscsiVolume#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.preserveExistingData">preserveExistingData</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#preserve_existing_data StoragegatewayStoredIscsiVolume#preserve_existing_data}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.targetName">targetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#target_name StoragegatewayStoredIscsiVolume#target_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#id StoragegatewayStoredIscsiVolume#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.kmsEncrypted">kmsEncrypted</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#kms_encrypted StoragegatewayStoredIscsiVolume#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#kms_key StoragegatewayStoredIscsiVolume#kms_key}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#snapshot_id StoragegatewayStoredIscsiVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#tags StoragegatewayStoredIscsiVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#tags_all StoragegatewayStoredIscsiVolume#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `diskId`<sup>Required</sup> <a name="diskId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.diskId"></a>

```java
public java.lang.String getDiskId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#disk_id StoragegatewayStoredIscsiVolume#disk_id}.

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.gatewayArn"></a>

```java
public java.lang.String getGatewayArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#gateway_arn StoragegatewayStoredIscsiVolume#gateway_arn}.

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#network_interface_id StoragegatewayStoredIscsiVolume#network_interface_id}.

---

##### `preserveExistingData`<sup>Required</sup> <a name="preserveExistingData" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.preserveExistingData"></a>

```java
public java.lang.Object getPreserveExistingData();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#preserve_existing_data StoragegatewayStoredIscsiVolume#preserve_existing_data}.

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.targetName"></a>

```java
public java.lang.String getTargetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#target_name StoragegatewayStoredIscsiVolume#target_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#id StoragegatewayStoredIscsiVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsEncrypted`<sup>Optional</sup> <a name="kmsEncrypted" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.kmsEncrypted"></a>

```java
public java.lang.Object getKmsEncrypted();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#kms_encrypted StoragegatewayStoredIscsiVolume#kms_encrypted}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#kms_key StoragegatewayStoredIscsiVolume#kms_key}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#snapshot_id StoragegatewayStoredIscsiVolume#snapshot_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#tags StoragegatewayStoredIscsiVolume#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_stored_iscsi_volume#tags_all StoragegatewayStoredIscsiVolume#tags_all}.

---



