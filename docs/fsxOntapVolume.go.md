# `fsxOntapVolume` Submodule <a name="`fsxOntapVolume` Submodule" id="@cdktf/provider-aws.fsxOntapVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOntapVolume <a name="FsxOntapVolume" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume aws_fsx_ontap_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

fsxontapvolume.NewFsxOntapVolume(scope Construct, id *string, config FsxOntapVolumeConfig) FsxOntapVolume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig">FsxOntapVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig">FsxOntapVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putAggregateConfiguration">PutAggregateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putSnaplockConfiguration">PutSnaplockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTieringPolicy">PutTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetAggregateConfiguration">ResetAggregateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetBypassSnaplockEnterpriseRetention">ResetBypassSnaplockEnterpriseRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetCopyTagsToBackups">ResetCopyTagsToBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetFinalBackupTags">ResetFinalBackupTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetJunctionPath">ResetJunctionPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetOntapVolumeType">ResetOntapVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSecurityStyle">ResetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSizeInBytes">ResetSizeInBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSizeInMegabytes">ResetSizeInMegabytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSkipFinalBackup">ResetSkipFinalBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSnaplockConfiguration">ResetSnaplockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSnapshotPolicy">ResetSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetStorageEfficiencyEnabled">ResetStorageEfficiencyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTieringPolicy">ResetTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetVolumeStyle">ResetVolumeStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAggregateConfiguration` <a name="PutAggregateConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putAggregateConfiguration"></a>

```go
func PutAggregateConfiguration(value FsxOntapVolumeAggregateConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putAggregateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfiguration">FsxOntapVolumeAggregateConfiguration</a>

---

##### `PutSnaplockConfiguration` <a name="PutSnaplockConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putSnaplockConfiguration"></a>

```go
func PutSnaplockConfiguration(value FsxOntapVolumeSnaplockConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putSnaplockConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a>

---

##### `PutTieringPolicy` <a name="PutTieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTieringPolicy"></a>

```go
func PutTieringPolicy(value FsxOntapVolumeTieringPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTieringPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTimeouts"></a>

```go
func PutTimeouts(value FsxOntapVolumeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>

---

##### `ResetAggregateConfiguration` <a name="ResetAggregateConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetAggregateConfiguration"></a>

```go
func ResetAggregateConfiguration()
```

##### `ResetBypassSnaplockEnterpriseRetention` <a name="ResetBypassSnaplockEnterpriseRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetBypassSnaplockEnterpriseRetention"></a>

```go
func ResetBypassSnaplockEnterpriseRetention()
```

##### `ResetCopyTagsToBackups` <a name="ResetCopyTagsToBackups" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetCopyTagsToBackups"></a>

```go
func ResetCopyTagsToBackups()
```

##### `ResetFinalBackupTags` <a name="ResetFinalBackupTags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetFinalBackupTags"></a>

```go
func ResetFinalBackupTags()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetId"></a>

```go
func ResetId()
```

##### `ResetJunctionPath` <a name="ResetJunctionPath" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetJunctionPath"></a>

```go
func ResetJunctionPath()
```

##### `ResetOntapVolumeType` <a name="ResetOntapVolumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetOntapVolumeType"></a>

```go
func ResetOntapVolumeType()
```

##### `ResetSecurityStyle` <a name="ResetSecurityStyle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSecurityStyle"></a>

```go
func ResetSecurityStyle()
```

##### `ResetSizeInBytes` <a name="ResetSizeInBytes" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSizeInBytes"></a>

```go
func ResetSizeInBytes()
```

##### `ResetSizeInMegabytes` <a name="ResetSizeInMegabytes" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSizeInMegabytes"></a>

```go
func ResetSizeInMegabytes()
```

##### `ResetSkipFinalBackup` <a name="ResetSkipFinalBackup" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSkipFinalBackup"></a>

```go
func ResetSkipFinalBackup()
```

##### `ResetSnaplockConfiguration` <a name="ResetSnaplockConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSnaplockConfiguration"></a>

```go
func ResetSnaplockConfiguration()
```

##### `ResetSnapshotPolicy` <a name="ResetSnapshotPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetSnapshotPolicy"></a>

```go
func ResetSnapshotPolicy()
```

##### `ResetStorageEfficiencyEnabled` <a name="ResetStorageEfficiencyEnabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetStorageEfficiencyEnabled"></a>

```go
func ResetStorageEfficiencyEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTieringPolicy` <a name="ResetTieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTieringPolicy"></a>

```go
func ResetTieringPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVolumeStyle` <a name="ResetVolumeStyle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetVolumeStyle"></a>

```go
func ResetVolumeStyle()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.resetVolumeType"></a>

```go
func ResetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FsxOntapVolume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

fsxontapvolume.FsxOntapVolume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

fsxontapvolume.FsxOntapVolume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

fsxontapvolume.FsxOntapVolume_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

fsxontapvolume.FsxOntapVolume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FsxOntapVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FsxOntapVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FsxOntapVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FsxOntapVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.aggregateConfiguration">AggregateConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference">FsxOntapVolumeAggregateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.flexcacheEndpointType">FlexcacheEndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snaplockConfiguration">SnaplockConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference">FsxOntapVolumeSnaplockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicy">TieringPolicy</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference">FsxOntapVolumeTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference">FsxOntapVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.aggregateConfigurationInput">AggregateConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfiguration">FsxOntapVolumeAggregateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.bypassSnaplockEnterpriseRetentionInput">BypassSnaplockEnterpriseRetentionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.copyTagsToBackupsInput">CopyTagsToBackupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.finalBackupTagsInput">FinalBackupTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPathInput">JunctionPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.ontapVolumeTypeInput">OntapVolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyleInput">SecurityStyleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInBytesInput">SizeInBytesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytesInput">SizeInMegabytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.skipFinalBackupInput">SkipFinalBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snaplockConfigurationInput">SnaplockConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snapshotPolicyInput">SnapshotPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabledInput">StorageEfficiencyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineIdInput">StorageVirtualMachineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicyInput">TieringPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeStyleInput">VolumeStyleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.bypassSnaplockEnterpriseRetention">BypassSnaplockEnterpriseRetention</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.finalBackupTags">FinalBackupTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPath">JunctionPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.ontapVolumeType">OntapVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyle">SecurityStyle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInBytes">SizeInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytes">SizeInMegabytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.skipFinalBackup">SkipFinalBackup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snapshotPolicy">SnapshotPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabled">StorageEfficiencyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineId">StorageVirtualMachineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeStyle">VolumeStyle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AggregateConfiguration`<sup>Required</sup> <a name="AggregateConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.aggregateConfiguration"></a>

```go
func AggregateConfiguration() FsxOntapVolumeAggregateConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference">FsxOntapVolumeAggregateConfigurationOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `FlexcacheEndpointType`<sup>Required</sup> <a name="FlexcacheEndpointType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.flexcacheEndpointType"></a>

```go
func FlexcacheEndpointType() *string
```

- *Type:* *string

---

##### `SnaplockConfiguration`<sup>Required</sup> <a name="SnaplockConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snaplockConfiguration"></a>

```go
func SnaplockConfiguration() FsxOntapVolumeSnaplockConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference">FsxOntapVolumeSnaplockConfigurationOutputReference</a>

---

##### `TieringPolicy`<sup>Required</sup> <a name="TieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicy"></a>

```go
func TieringPolicy() FsxOntapVolumeTieringPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference">FsxOntapVolumeTieringPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeouts"></a>

```go
func Timeouts() FsxOntapVolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference">FsxOntapVolumeTimeoutsOutputReference</a>

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `AggregateConfigurationInput`<sup>Optional</sup> <a name="AggregateConfigurationInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.aggregateConfigurationInput"></a>

```go
func AggregateConfigurationInput() FsxOntapVolumeAggregateConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfiguration">FsxOntapVolumeAggregateConfiguration</a>

---

##### `BypassSnaplockEnterpriseRetentionInput`<sup>Optional</sup> <a name="BypassSnaplockEnterpriseRetentionInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.bypassSnaplockEnterpriseRetentionInput"></a>

```go
func BypassSnaplockEnterpriseRetentionInput() interface{}
```

- *Type:* interface{}

---

##### `CopyTagsToBackupsInput`<sup>Optional</sup> <a name="CopyTagsToBackupsInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.copyTagsToBackupsInput"></a>

```go
func CopyTagsToBackupsInput() interface{}
```

- *Type:* interface{}

---

##### `FinalBackupTagsInput`<sup>Optional</sup> <a name="FinalBackupTagsInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.finalBackupTagsInput"></a>

```go
func FinalBackupTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JunctionPathInput`<sup>Optional</sup> <a name="JunctionPathInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPathInput"></a>

```go
func JunctionPathInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OntapVolumeTypeInput`<sup>Optional</sup> <a name="OntapVolumeTypeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.ontapVolumeTypeInput"></a>

```go
func OntapVolumeTypeInput() *string
```

- *Type:* *string

---

##### `SecurityStyleInput`<sup>Optional</sup> <a name="SecurityStyleInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyleInput"></a>

```go
func SecurityStyleInput() *string
```

- *Type:* *string

---

##### `SizeInBytesInput`<sup>Optional</sup> <a name="SizeInBytesInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInBytesInput"></a>

```go
func SizeInBytesInput() *string
```

- *Type:* *string

---

##### `SizeInMegabytesInput`<sup>Optional</sup> <a name="SizeInMegabytesInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytesInput"></a>

```go
func SizeInMegabytesInput() *f64
```

- *Type:* *f64

---

##### `SkipFinalBackupInput`<sup>Optional</sup> <a name="SkipFinalBackupInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.skipFinalBackupInput"></a>

```go
func SkipFinalBackupInput() interface{}
```

- *Type:* interface{}

---

##### `SnaplockConfigurationInput`<sup>Optional</sup> <a name="SnaplockConfigurationInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snaplockConfigurationInput"></a>

```go
func SnaplockConfigurationInput() FsxOntapVolumeSnaplockConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a>

---

##### `SnapshotPolicyInput`<sup>Optional</sup> <a name="SnapshotPolicyInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snapshotPolicyInput"></a>

```go
func SnapshotPolicyInput() *string
```

- *Type:* *string

---

##### `StorageEfficiencyEnabledInput`<sup>Optional</sup> <a name="StorageEfficiencyEnabledInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabledInput"></a>

```go
func StorageEfficiencyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StorageVirtualMachineIdInput`<sup>Optional</sup> <a name="StorageVirtualMachineIdInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineIdInput"></a>

```go
func StorageVirtualMachineIdInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TieringPolicyInput`<sup>Optional</sup> <a name="TieringPolicyInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tieringPolicyInput"></a>

```go
func TieringPolicyInput() FsxOntapVolumeTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeStyleInput`<sup>Optional</sup> <a name="VolumeStyleInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeStyleInput"></a>

```go
func VolumeStyleInput() *string
```

- *Type:* *string

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `BypassSnaplockEnterpriseRetention`<sup>Required</sup> <a name="BypassSnaplockEnterpriseRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.bypassSnaplockEnterpriseRetention"></a>

```go
func BypassSnaplockEnterpriseRetention() interface{}
```

- *Type:* interface{}

---

##### `CopyTagsToBackups`<sup>Required</sup> <a name="CopyTagsToBackups" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.copyTagsToBackups"></a>

```go
func CopyTagsToBackups() interface{}
```

- *Type:* interface{}

---

##### `FinalBackupTags`<sup>Required</sup> <a name="FinalBackupTags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.finalBackupTags"></a>

```go
func FinalBackupTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JunctionPath`<sup>Required</sup> <a name="JunctionPath" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.junctionPath"></a>

```go
func JunctionPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OntapVolumeType`<sup>Required</sup> <a name="OntapVolumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.ontapVolumeType"></a>

```go
func OntapVolumeType() *string
```

- *Type:* *string

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.securityStyle"></a>

```go
func SecurityStyle() *string
```

- *Type:* *string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInBytes"></a>

```go
func SizeInBytes() *string
```

- *Type:* *string

---

##### `SizeInMegabytes`<sup>Required</sup> <a name="SizeInMegabytes" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytes"></a>

```go
func SizeInMegabytes() *f64
```

- *Type:* *f64

---

##### `SkipFinalBackup`<sup>Required</sup> <a name="SkipFinalBackup" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.skipFinalBackup"></a>

```go
func SkipFinalBackup() interface{}
```

- *Type:* interface{}

---

##### `SnapshotPolicy`<sup>Required</sup> <a name="SnapshotPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.snapshotPolicy"></a>

```go
func SnapshotPolicy() *string
```

- *Type:* *string

---

##### `StorageEfficiencyEnabled`<sup>Required</sup> <a name="StorageEfficiencyEnabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabled"></a>

```go
func StorageEfficiencyEnabled() interface{}
```

- *Type:* interface{}

---

##### `StorageVirtualMachineId`<sup>Required</sup> <a name="StorageVirtualMachineId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineId"></a>

```go
func StorageVirtualMachineId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VolumeStyle`<sup>Required</sup> <a name="VolumeStyle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeStyle"></a>

```go
func VolumeStyle() *string
```

- *Type:* *string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOntapVolumeAggregateConfiguration <a name="FsxOntapVolumeAggregateConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

&fsxontapvolume.FsxOntapVolumeAggregateConfiguration {
	Aggregates: *[]*string,
	ConstituentsPerAggregate: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfiguration.property.aggregates">Aggregates</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#aggregates FsxOntapVolume#aggregates}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfiguration.property.constituentsPerAggregate">ConstituentsPerAggregate</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#constituents_per_aggregate FsxOntapVolume#constituents_per_aggregate}. |

---

##### `Aggregates`<sup>Optional</sup> <a name="Aggregates" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfiguration.property.aggregates"></a>

```go
Aggregates *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#aggregates FsxOntapVolume#aggregates}.

---

##### `ConstituentsPerAggregate`<sup>Optional</sup> <a name="ConstituentsPerAggregate" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfiguration.property.constituentsPerAggregate"></a>

```go
ConstituentsPerAggregate *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#constituents_per_aggregate FsxOntapVolume#constituents_per_aggregate}.

---

### FsxOntapVolumeConfig <a name="FsxOntapVolumeConfig" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

&fsxontapvolume.FsxOntapVolumeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	StorageVirtualMachineId: *string,
	AggregateConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws/v19.fsxOntapVolume.FsxOntapVolumeAggregateConfiguration,
	BypassSnaplockEnterpriseRetention: interface{},
	CopyTagsToBackups: interface{},
	FinalBackupTags: *map[string]*string,
	Id: *string,
	JunctionPath: *string,
	OntapVolumeType: *string,
	SecurityStyle: *string,
	SizeInBytes: *string,
	SizeInMegabytes: *f64,
	SkipFinalBackup: interface{},
	SnaplockConfiguration: github.com/cdktf/cdktf-provider-aws-go/aws/v19.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration,
	SnapshotPolicy: *string,
	StorageEfficiencyEnabled: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TieringPolicy: github.com/cdktf/cdktf-provider-aws-go/aws/v19.fsxOntapVolume.FsxOntapVolumeTieringPolicy,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws/v19.fsxOntapVolume.FsxOntapVolumeTimeouts,
	VolumeStyle: *string,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageVirtualMachineId">StorageVirtualMachineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.aggregateConfiguration">AggregateConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfiguration">FsxOntapVolumeAggregateConfiguration</a></code> | aggregate_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.bypassSnaplockEnterpriseRetention">BypassSnaplockEnterpriseRetention</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#bypass_snaplock_enterprise_retention FsxOntapVolume#bypass_snaplock_enterprise_retention}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.copyTagsToBackups">CopyTagsToBackups</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#copy_tags_to_backups FsxOntapVolume#copy_tags_to_backups}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.finalBackupTags">FinalBackupTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#final_backup_tags FsxOntapVolume#final_backup_tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#id FsxOntapVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.junctionPath">JunctionPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.ontapVolumeType">OntapVolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#ontap_volume_type FsxOntapVolume#ontap_volume_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.securityStyle">SecurityStyle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#security_style FsxOntapVolume#security_style}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.sizeInBytes">SizeInBytes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#size_in_bytes FsxOntapVolume#size_in_bytes}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.sizeInMegabytes">SizeInMegabytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.skipFinalBackup">SkipFinalBackup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#skip_final_backup FsxOntapVolume#skip_final_backup}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.snaplockConfiguration">SnaplockConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a></code> | snaplock_configuration block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.snapshotPolicy">SnapshotPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#snapshot_policy FsxOntapVolume#snapshot_policy}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageEfficiencyEnabled">StorageEfficiencyEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#tags FsxOntapVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tieringPolicy">TieringPolicy</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.volumeStyle">VolumeStyle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#volume_style FsxOntapVolume#volume_style}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}.

---

##### `StorageVirtualMachineId`<sup>Required</sup> <a name="StorageVirtualMachineId" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageVirtualMachineId"></a>

```go
StorageVirtualMachineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}.

---

##### `AggregateConfiguration`<sup>Optional</sup> <a name="AggregateConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.aggregateConfiguration"></a>

```go
AggregateConfiguration FsxOntapVolumeAggregateConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfiguration">FsxOntapVolumeAggregateConfiguration</a>

aggregate_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#aggregate_configuration FsxOntapVolume#aggregate_configuration}

---

##### `BypassSnaplockEnterpriseRetention`<sup>Optional</sup> <a name="BypassSnaplockEnterpriseRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.bypassSnaplockEnterpriseRetention"></a>

```go
BypassSnaplockEnterpriseRetention interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#bypass_snaplock_enterprise_retention FsxOntapVolume#bypass_snaplock_enterprise_retention}.

---

##### `CopyTagsToBackups`<sup>Optional</sup> <a name="CopyTagsToBackups" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.copyTagsToBackups"></a>

```go
CopyTagsToBackups interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#copy_tags_to_backups FsxOntapVolume#copy_tags_to_backups}.

---

##### `FinalBackupTags`<sup>Optional</sup> <a name="FinalBackupTags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.finalBackupTags"></a>

```go
FinalBackupTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#final_backup_tags FsxOntapVolume#final_backup_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#id FsxOntapVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JunctionPath`<sup>Optional</sup> <a name="JunctionPath" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.junctionPath"></a>

```go
JunctionPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}.

---

##### `OntapVolumeType`<sup>Optional</sup> <a name="OntapVolumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.ontapVolumeType"></a>

```go
OntapVolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#ontap_volume_type FsxOntapVolume#ontap_volume_type}.

---

##### `SecurityStyle`<sup>Optional</sup> <a name="SecurityStyle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.securityStyle"></a>

```go
SecurityStyle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#security_style FsxOntapVolume#security_style}.

---

##### `SizeInBytes`<sup>Optional</sup> <a name="SizeInBytes" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.sizeInBytes"></a>

```go
SizeInBytes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#size_in_bytes FsxOntapVolume#size_in_bytes}.

---

##### `SizeInMegabytes`<sup>Optional</sup> <a name="SizeInMegabytes" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.sizeInMegabytes"></a>

```go
SizeInMegabytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}.

---

##### `SkipFinalBackup`<sup>Optional</sup> <a name="SkipFinalBackup" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.skipFinalBackup"></a>

```go
SkipFinalBackup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#skip_final_backup FsxOntapVolume#skip_final_backup}.

---

##### `SnaplockConfiguration`<sup>Optional</sup> <a name="SnaplockConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.snaplockConfiguration"></a>

```go
SnaplockConfiguration FsxOntapVolumeSnaplockConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a>

snaplock_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#snaplock_configuration FsxOntapVolume#snaplock_configuration}

---

##### `SnapshotPolicy`<sup>Optional</sup> <a name="SnapshotPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.snapshotPolicy"></a>

```go
SnapshotPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#snapshot_policy FsxOntapVolume#snapshot_policy}.

---

##### `StorageEfficiencyEnabled`<sup>Optional</sup> <a name="StorageEfficiencyEnabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.storageEfficiencyEnabled"></a>

```go
StorageEfficiencyEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#tags FsxOntapVolume#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}.

---

##### `TieringPolicy`<sup>Optional</sup> <a name="TieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.tieringPolicy"></a>

```go
TieringPolicy FsxOntapVolumeTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#tiering_policy FsxOntapVolume#tiering_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.timeouts"></a>

```go
Timeouts FsxOntapVolumeTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#timeouts FsxOntapVolume#timeouts}

---

##### `VolumeStyle`<sup>Optional</sup> <a name="VolumeStyle" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.volumeStyle"></a>

```go
VolumeStyle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#volume_style FsxOntapVolume#volume_style}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeConfig.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}.

---

### FsxOntapVolumeSnaplockConfiguration <a name="FsxOntapVolumeSnaplockConfiguration" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

&fsxontapvolume.FsxOntapVolumeSnaplockConfiguration {
	SnaplockType: *string,
	AuditLogVolume: interface{},
	AutocommitPeriod: github.com/cdktf/cdktf-provider-aws-go/aws/v19.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod,
	PrivilegedDelete: *string,
	RetentionPeriod: github.com/cdktf/cdktf-provider-aws-go/aws/v19.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod,
	VolumeAppendModeEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.snaplockType">SnaplockType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#snaplock_type FsxOntapVolume#snaplock_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.auditLogVolume">AuditLogVolume</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#audit_log_volume FsxOntapVolume#audit_log_volume}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.autocommitPeriod">AutocommitPeriod</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod">FsxOntapVolumeSnaplockConfigurationAutocommitPeriod</a></code> | autocommit_period block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.privilegedDelete">PrivilegedDelete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#privileged_delete FsxOntapVolume#privileged_delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.retentionPeriod">RetentionPeriod</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod">FsxOntapVolumeSnaplockConfigurationRetentionPeriod</a></code> | retention_period block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.volumeAppendModeEnabled">VolumeAppendModeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#volume_append_mode_enabled FsxOntapVolume#volume_append_mode_enabled}. |

---

##### `SnaplockType`<sup>Required</sup> <a name="SnaplockType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.snaplockType"></a>

```go
SnaplockType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#snaplock_type FsxOntapVolume#snaplock_type}.

---

##### `AuditLogVolume`<sup>Optional</sup> <a name="AuditLogVolume" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.auditLogVolume"></a>

```go
AuditLogVolume interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#audit_log_volume FsxOntapVolume#audit_log_volume}.

---

##### `AutocommitPeriod`<sup>Optional</sup> <a name="AutocommitPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.autocommitPeriod"></a>

```go
AutocommitPeriod FsxOntapVolumeSnaplockConfigurationAutocommitPeriod
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod">FsxOntapVolumeSnaplockConfigurationAutocommitPeriod</a>

autocommit_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#autocommit_period FsxOntapVolume#autocommit_period}

---

##### `PrivilegedDelete`<sup>Optional</sup> <a name="PrivilegedDelete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.privilegedDelete"></a>

```go
PrivilegedDelete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#privileged_delete FsxOntapVolume#privileged_delete}.

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.retentionPeriod"></a>

```go
RetentionPeriod FsxOntapVolumeSnaplockConfigurationRetentionPeriod
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod">FsxOntapVolumeSnaplockConfigurationRetentionPeriod</a>

retention_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#retention_period FsxOntapVolume#retention_period}

---

##### `VolumeAppendModeEnabled`<sup>Optional</sup> <a name="VolumeAppendModeEnabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration.property.volumeAppendModeEnabled"></a>

```go
VolumeAppendModeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#volume_append_mode_enabled FsxOntapVolume#volume_append_mode_enabled}.

---

### FsxOntapVolumeSnaplockConfigurationAutocommitPeriod <a name="FsxOntapVolumeSnaplockConfigurationAutocommitPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

&fsxontapvolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod {
	Type: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}.

---

### FsxOntapVolumeSnaplockConfigurationRetentionPeriod <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

&fsxontapvolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod {
	DefaultRetention: github.com/cdktf/cdktf-provider-aws-go/aws/v19.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention,
	MaximumRetention: github.com/cdktf/cdktf-provider-aws-go/aws/v19.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention,
	MinimumRetention: github.com/cdktf/cdktf-provider-aws-go/aws/v19.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod.property.defaultRetention">DefaultRetention</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | default_retention block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod.property.maximumRetention">MaximumRetention</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | maximum_retention block. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod.property.minimumRetention">MinimumRetention</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | minimum_retention block. |

---

##### `DefaultRetention`<sup>Optional</sup> <a name="DefaultRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod.property.defaultRetention"></a>

```go
DefaultRetention FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention</a>

default_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#default_retention FsxOntapVolume#default_retention}

---

##### `MaximumRetention`<sup>Optional</sup> <a name="MaximumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod.property.maximumRetention"></a>

```go
MaximumRetention FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention</a>

maximum_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#maximum_retention FsxOntapVolume#maximum_retention}

---

##### `MinimumRetention`<sup>Optional</sup> <a name="MinimumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod.property.minimumRetention"></a>

```go
MinimumRetention FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention</a>

minimum_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#minimum_retention FsxOntapVolume#minimum_retention}

---

### FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

&fsxontapvolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention {
	Type: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}.

---

### FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

&fsxontapvolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention {
	Type: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}.

---

### FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

&fsxontapvolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention {
	Type: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#type FsxOntapVolume#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#value FsxOntapVolume#value}.

---

### FsxOntapVolumeTieringPolicy <a name="FsxOntapVolumeTieringPolicy" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

&fsxontapvolume.FsxOntapVolumeTieringPolicy {
	CoolingPeriod: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.coolingPeriod">CoolingPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#cooling_period FsxOntapVolume#cooling_period}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}. |

---

##### `CoolingPeriod`<sup>Optional</sup> <a name="CoolingPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.coolingPeriod"></a>

```go
CoolingPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#cooling_period FsxOntapVolume#cooling_period}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}.

---

### FsxOntapVolumeTimeouts <a name="FsxOntapVolumeTimeouts" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

&fsxontapvolume.FsxOntapVolumeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#create FsxOntapVolume#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#delete FsxOntapVolume#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#update FsxOntapVolume#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#create FsxOntapVolume#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#delete FsxOntapVolume#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/fsx_ontap_volume#update FsxOntapVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOntapVolumeAggregateConfigurationOutputReference <a name="FsxOntapVolumeAggregateConfigurationOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

fsxontapvolume.NewFsxOntapVolumeAggregateConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOntapVolumeAggregateConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.resetAggregates">ResetAggregates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.resetConstituentsPerAggregate">ResetConstituentsPerAggregate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregates` <a name="ResetAggregates" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.resetAggregates"></a>

```go
func ResetAggregates()
```

##### `ResetConstituentsPerAggregate` <a name="ResetConstituentsPerAggregate" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.resetConstituentsPerAggregate"></a>

```go
func ResetConstituentsPerAggregate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.totalConstituents">TotalConstituents</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.aggregatesInput">AggregatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.constituentsPerAggregateInput">ConstituentsPerAggregateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.aggregates">Aggregates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.constituentsPerAggregate">ConstituentsPerAggregate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfiguration">FsxOntapVolumeAggregateConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TotalConstituents`<sup>Required</sup> <a name="TotalConstituents" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.totalConstituents"></a>

```go
func TotalConstituents() *f64
```

- *Type:* *f64

---

##### `AggregatesInput`<sup>Optional</sup> <a name="AggregatesInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.aggregatesInput"></a>

```go
func AggregatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConstituentsPerAggregateInput`<sup>Optional</sup> <a name="ConstituentsPerAggregateInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.constituentsPerAggregateInput"></a>

```go
func ConstituentsPerAggregateInput() *f64
```

- *Type:* *f64

---

##### `Aggregates`<sup>Required</sup> <a name="Aggregates" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.aggregates"></a>

```go
func Aggregates() *[]*string
```

- *Type:* *[]*string

---

##### `ConstituentsPerAggregate`<sup>Required</sup> <a name="ConstituentsPerAggregate" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.constituentsPerAggregate"></a>

```go
func ConstituentsPerAggregate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapVolumeAggregateConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeAggregateConfiguration">FsxOntapVolumeAggregateConfiguration</a>

---


### FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference <a name="FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

fsxontapvolume.NewFsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod">FsxOntapVolumeSnaplockConfigurationAutocommitPeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapVolumeSnaplockConfigurationAutocommitPeriod
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod">FsxOntapVolumeSnaplockConfigurationAutocommitPeriod</a>

---


### FsxOntapVolumeSnaplockConfigurationOutputReference <a name="FsxOntapVolumeSnaplockConfigurationOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

fsxontapvolume.NewFsxOntapVolumeSnaplockConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOntapVolumeSnaplockConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.putAutocommitPeriod">PutAutocommitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.putRetentionPeriod">PutRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetAuditLogVolume">ResetAuditLogVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetAutocommitPeriod">ResetAutocommitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetPrivilegedDelete">ResetPrivilegedDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetVolumeAppendModeEnabled">ResetVolumeAppendModeEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutocommitPeriod` <a name="PutAutocommitPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.putAutocommitPeriod"></a>

```go
func PutAutocommitPeriod(value FsxOntapVolumeSnaplockConfigurationAutocommitPeriod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.putAutocommitPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod">FsxOntapVolumeSnaplockConfigurationAutocommitPeriod</a>

---

##### `PutRetentionPeriod` <a name="PutRetentionPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.putRetentionPeriod"></a>

```go
func PutRetentionPeriod(value FsxOntapVolumeSnaplockConfigurationRetentionPeriod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.putRetentionPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod">FsxOntapVolumeSnaplockConfigurationRetentionPeriod</a>

---

##### `ResetAuditLogVolume` <a name="ResetAuditLogVolume" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetAuditLogVolume"></a>

```go
func ResetAuditLogVolume()
```

##### `ResetAutocommitPeriod` <a name="ResetAutocommitPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetAutocommitPeriod"></a>

```go
func ResetAutocommitPeriod()
```

##### `ResetPrivilegedDelete` <a name="ResetPrivilegedDelete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetPrivilegedDelete"></a>

```go
func ResetPrivilegedDelete()
```

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetRetentionPeriod"></a>

```go
func ResetRetentionPeriod()
```

##### `ResetVolumeAppendModeEnabled` <a name="ResetVolumeAppendModeEnabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.resetVolumeAppendModeEnabled"></a>

```go
func ResetVolumeAppendModeEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.autocommitPeriod">AutocommitPeriod</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference">FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.retentionPeriod">RetentionPeriod</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.auditLogVolumeInput">AuditLogVolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.autocommitPeriodInput">AutocommitPeriodInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod">FsxOntapVolumeSnaplockConfigurationAutocommitPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.privilegedDeleteInput">PrivilegedDeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod">FsxOntapVolumeSnaplockConfigurationRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.snaplockTypeInput">SnaplockTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.volumeAppendModeEnabledInput">VolumeAppendModeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.auditLogVolume">AuditLogVolume</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.privilegedDelete">PrivilegedDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.snaplockType">SnaplockType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled">VolumeAppendModeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutocommitPeriod`<sup>Required</sup> <a name="AutocommitPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.autocommitPeriod"></a>

```go
func AutocommitPeriod() FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference">FsxOntapVolumeSnaplockConfigurationAutocommitPeriodOutputReference</a>

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.retentionPeriod"></a>

```go
func RetentionPeriod() FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference</a>

---

##### `AuditLogVolumeInput`<sup>Optional</sup> <a name="AuditLogVolumeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.auditLogVolumeInput"></a>

```go
func AuditLogVolumeInput() interface{}
```

- *Type:* interface{}

---

##### `AutocommitPeriodInput`<sup>Optional</sup> <a name="AutocommitPeriodInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.autocommitPeriodInput"></a>

```go
func AutocommitPeriodInput() FsxOntapVolumeSnaplockConfigurationAutocommitPeriod
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationAutocommitPeriod">FsxOntapVolumeSnaplockConfigurationAutocommitPeriod</a>

---

##### `PrivilegedDeleteInput`<sup>Optional</sup> <a name="PrivilegedDeleteInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.privilegedDeleteInput"></a>

```go
func PrivilegedDeleteInput() *string
```

- *Type:* *string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.retentionPeriodInput"></a>

```go
func RetentionPeriodInput() FsxOntapVolumeSnaplockConfigurationRetentionPeriod
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod">FsxOntapVolumeSnaplockConfigurationRetentionPeriod</a>

---

##### `SnaplockTypeInput`<sup>Optional</sup> <a name="SnaplockTypeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.snaplockTypeInput"></a>

```go
func SnaplockTypeInput() *string
```

- *Type:* *string

---

##### `VolumeAppendModeEnabledInput`<sup>Optional</sup> <a name="VolumeAppendModeEnabledInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.volumeAppendModeEnabledInput"></a>

```go
func VolumeAppendModeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AuditLogVolume`<sup>Required</sup> <a name="AuditLogVolume" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.auditLogVolume"></a>

```go
func AuditLogVolume() interface{}
```

- *Type:* interface{}

---

##### `PrivilegedDelete`<sup>Required</sup> <a name="PrivilegedDelete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.privilegedDelete"></a>

```go
func PrivilegedDelete() *string
```

- *Type:* *string

---

##### `SnaplockType`<sup>Required</sup> <a name="SnaplockType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.snaplockType"></a>

```go
func SnaplockType() *string
```

- *Type:* *string

---

##### `VolumeAppendModeEnabled`<sup>Required</sup> <a name="VolumeAppendModeEnabled" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled"></a>

```go
func VolumeAppendModeEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapVolumeSnaplockConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfiguration">FsxOntapVolumeSnaplockConfiguration</a>

---


### FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

fsxontapvolume.NewFsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---


### FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

fsxontapvolume.NewFsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---


### FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

fsxontapvolume.NewFsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---


### FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference <a name="FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

fsxontapvolume.NewFsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention">PutDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention">PutMaximumRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention">PutMinimumRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resetDefaultRetention">ResetDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resetMaximumRetention">ResetMaximumRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resetMinimumRetention">ResetMinimumRetention</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultRetention` <a name="PutDefaultRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention"></a>

```go
func PutDefaultRetention(value FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putDefaultRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---

##### `PutMaximumRetention` <a name="PutMaximumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention"></a>

```go
func PutMaximumRetention(value FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putMaximumRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---

##### `PutMinimumRetention` <a name="PutMinimumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention"></a>

```go
func PutMinimumRetention(value FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.putMinimumRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---

##### `ResetDefaultRetention` <a name="ResetDefaultRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resetDefaultRetention"></a>

```go
func ResetDefaultRetention()
```

##### `ResetMaximumRetention` <a name="ResetMaximumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resetMaximumRetention"></a>

```go
func ResetMaximumRetention()
```

##### `ResetMinimumRetention` <a name="ResetMinimumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.resetMinimumRetention"></a>

```go
func ResetMinimumRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention">DefaultRetention</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention">MaximumRetention</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention">MinimumRetention</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetentionInput">DefaultRetentionInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetentionInput">MaximumRetentionInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetentionInput">MinimumRetentionInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod">FsxOntapVolumeSnaplockConfigurationRetentionPeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultRetention`<sup>Required</sup> <a name="DefaultRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention"></a>

```go
func DefaultRetention() FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a>

---

##### `MaximumRetention`<sup>Required</sup> <a name="MaximumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention"></a>

```go
func MaximumRetention() FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a>

---

##### `MinimumRetention`<sup>Required</sup> <a name="MinimumRetention" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention"></a>

```go
func MinimumRetention() FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a>

---

##### `DefaultRetentionInput`<sup>Optional</sup> <a name="DefaultRetentionInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetentionInput"></a>

```go
func DefaultRetentionInput() FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---

##### `MaximumRetentionInput`<sup>Optional</sup> <a name="MaximumRetentionInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetentionInput"></a>

```go
func MaximumRetentionInput() FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---

##### `MinimumRetentionInput`<sup>Optional</sup> <a name="MinimumRetentionInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetentionInput"></a>

```go
func MinimumRetentionInput() FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention">FsxOntapVolumeSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapVolumeSnaplockConfigurationRetentionPeriod
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeSnaplockConfigurationRetentionPeriod">FsxOntapVolumeSnaplockConfigurationRetentionPeriod</a>

---


### FsxOntapVolumeTieringPolicyOutputReference <a name="FsxOntapVolumeTieringPolicyOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

fsxontapvolume.NewFsxOntapVolumeTieringPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOntapVolumeTieringPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetCoolingPeriod">ResetCoolingPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoolingPeriod` <a name="ResetCoolingPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetCoolingPeriod"></a>

```go
func ResetCoolingPeriod()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriodInput">CoolingPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriod">CoolingPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoolingPeriodInput`<sup>Optional</sup> <a name="CoolingPeriodInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriodInput"></a>

```go
func CoolingPeriodInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CoolingPeriod`<sup>Required</sup> <a name="CoolingPeriod" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriod"></a>

```go
func CoolingPeriod() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOntapVolumeTieringPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

---


### FsxOntapVolumeTimeoutsOutputReference <a name="FsxOntapVolumeTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v19/fsxontapvolume"

fsxontapvolume.NewFsxOntapVolumeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOntapVolumeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



