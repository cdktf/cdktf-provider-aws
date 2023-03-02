# `fsxOpenzfsVolume` Submodule <a name="`fsxOpenzfsVolume` Submodule" id="@cdktf/provider-aws.fsxOpenzfsVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOpenzfsVolume <a name="FsxOpenzfsVolume" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume aws_fsx_openzfs_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

fsxopenzfsvolume.NewFsxOpenzfsVolume(scope Construct, id *string, config FsxOpenzfsVolumeConfig) FsxOpenzfsVolume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig">FsxOpenzfsVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig">FsxOpenzfsVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putNfsExports">PutNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putOriginSnapshot">PutOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putUserAndGroupQuotas">PutUserAndGroupQuotas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetCopyTagsToSnapshots">ResetCopyTagsToSnapshots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetDataCompressionType">ResetDataCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetNfsExports">ResetNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOriginSnapshot">ResetOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetRecordSizeKib">ResetRecordSizeKib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityQuotaGib">ResetStorageCapacityQuotaGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityReservationGib">ResetStorageCapacityReservationGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetUserAndGroupQuotas">ResetUserAndGroupQuotas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutNfsExports` <a name="PutNfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putNfsExports"></a>

```go
func PutNfsExports(value FsxOpenzfsVolumeNfsExports)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putNfsExports.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

---

##### `PutOriginSnapshot` <a name="PutOriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putOriginSnapshot"></a>

```go
func PutOriginSnapshot(value FsxOpenzfsVolumeOriginSnapshot)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putOriginSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts"></a>

```go
func PutTimeouts(value FsxOpenzfsVolumeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a>

---

##### `PutUserAndGroupQuotas` <a name="PutUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putUserAndGroupQuotas"></a>

```go
func PutUserAndGroupQuotas(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putUserAndGroupQuotas.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCopyTagsToSnapshots` <a name="ResetCopyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetCopyTagsToSnapshots"></a>

```go
func ResetCopyTagsToSnapshots()
```

##### `ResetDataCompressionType` <a name="ResetDataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetDataCompressionType"></a>

```go
func ResetDataCompressionType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetId"></a>

```go
func ResetId()
```

##### `ResetNfsExports` <a name="ResetNfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetNfsExports"></a>

```go
func ResetNfsExports()
```

##### `ResetOriginSnapshot` <a name="ResetOriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOriginSnapshot"></a>

```go
func ResetOriginSnapshot()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetReadOnly"></a>

```go
func ResetReadOnly()
```

##### `ResetRecordSizeKib` <a name="ResetRecordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetRecordSizeKib"></a>

```go
func ResetRecordSizeKib()
```

##### `ResetStorageCapacityQuotaGib` <a name="ResetStorageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityQuotaGib"></a>

```go
func ResetStorageCapacityQuotaGib()
```

##### `ResetStorageCapacityReservationGib` <a name="ResetStorageCapacityReservationGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityReservationGib"></a>

```go
func ResetStorageCapacityReservationGib()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserAndGroupQuotas` <a name="ResetUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetUserAndGroupQuotas"></a>

```go
func ResetUserAndGroupQuotas()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetVolumeType"></a>

```go
func ResetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

fsxopenzfsvolume.FsxOpenzfsVolume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

fsxopenzfsvolume.FsxOpenzfsVolume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

fsxopenzfsvolume.FsxOpenzfsVolume_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExports">NfsExports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference">FsxOpenzfsVolumeNfsExportsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshot">OriginSnapshot</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference">FsxOpenzfsVolumeOriginSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference">FsxOpenzfsVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotas">UserAndGroupQuotas</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList">FsxOpenzfsVolumeUserAndGroupQuotasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshotsInput">CopyTagsToSnapshotsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionTypeInput">DataCompressionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExportsInput">NfsExportsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshotInput">OriginSnapshotInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeIdInput">ParentVolumeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKibInput">RecordSizeKibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGibInput">StorageCapacityQuotaGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGibInput">StorageCapacityReservationGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotasInput">UserAndGroupQuotasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshots">CopyTagsToSnapshots</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionType">DataCompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeId">ParentVolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKib">RecordSizeKib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGib">StorageCapacityQuotaGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGib">StorageCapacityReservationGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `NfsExports`<sup>Required</sup> <a name="NfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExports"></a>

```go
func NfsExports() FsxOpenzfsVolumeNfsExportsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference">FsxOpenzfsVolumeNfsExportsOutputReference</a>

---

##### `OriginSnapshot`<sup>Required</sup> <a name="OriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshot"></a>

```go
func OriginSnapshot() FsxOpenzfsVolumeOriginSnapshotOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference">FsxOpenzfsVolumeOriginSnapshotOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeouts"></a>

```go
func Timeouts() FsxOpenzfsVolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference">FsxOpenzfsVolumeTimeoutsOutputReference</a>

---

##### `UserAndGroupQuotas`<sup>Required</sup> <a name="UserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotas"></a>

```go
func UserAndGroupQuotas() FsxOpenzfsVolumeUserAndGroupQuotasList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList">FsxOpenzfsVolumeUserAndGroupQuotasList</a>

---

##### `CopyTagsToSnapshotsInput`<sup>Optional</sup> <a name="CopyTagsToSnapshotsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshotsInput"></a>

```go
func CopyTagsToSnapshotsInput() interface{}
```

- *Type:* interface{}

---

##### `DataCompressionTypeInput`<sup>Optional</sup> <a name="DataCompressionTypeInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionTypeInput"></a>

```go
func DataCompressionTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NfsExportsInput`<sup>Optional</sup> <a name="NfsExportsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExportsInput"></a>

```go
func NfsExportsInput() FsxOpenzfsVolumeNfsExports
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

---

##### `OriginSnapshotInput`<sup>Optional</sup> <a name="OriginSnapshotInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshotInput"></a>

```go
func OriginSnapshotInput() FsxOpenzfsVolumeOriginSnapshot
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

---

##### `ParentVolumeIdInput`<sup>Optional</sup> <a name="ParentVolumeIdInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeIdInput"></a>

```go
func ParentVolumeIdInput() *string
```

- *Type:* *string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `RecordSizeKibInput`<sup>Optional</sup> <a name="RecordSizeKibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKibInput"></a>

```go
func RecordSizeKibInput() *f64
```

- *Type:* *f64

---

##### `StorageCapacityQuotaGibInput`<sup>Optional</sup> <a name="StorageCapacityQuotaGibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGibInput"></a>

```go
func StorageCapacityQuotaGibInput() *f64
```

- *Type:* *f64

---

##### `StorageCapacityReservationGibInput`<sup>Optional</sup> <a name="StorageCapacityReservationGibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGibInput"></a>

```go
func StorageCapacityReservationGibInput() *f64
```

- *Type:* *f64

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserAndGroupQuotasInput`<sup>Optional</sup> <a name="UserAndGroupQuotasInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotasInput"></a>

```go
func UserAndGroupQuotasInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `CopyTagsToSnapshots`<sup>Required</sup> <a name="CopyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshots"></a>

```go
func CopyTagsToSnapshots() interface{}
```

- *Type:* interface{}

---

##### `DataCompressionType`<sup>Required</sup> <a name="DataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionType"></a>

```go
func DataCompressionType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentVolumeId`<sup>Required</sup> <a name="ParentVolumeId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeId"></a>

```go
func ParentVolumeId() *string
```

- *Type:* *string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `RecordSizeKib`<sup>Required</sup> <a name="RecordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKib"></a>

```go
func RecordSizeKib() *f64
```

- *Type:* *f64

---

##### `StorageCapacityQuotaGib`<sup>Required</sup> <a name="StorageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGib"></a>

```go
func StorageCapacityQuotaGib() *f64
```

- *Type:* *f64

---

##### `StorageCapacityReservationGib`<sup>Required</sup> <a name="StorageCapacityReservationGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGib"></a>

```go
func StorageCapacityReservationGib() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOpenzfsVolumeConfig <a name="FsxOpenzfsVolumeConfig" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

&fsxopenzfsvolume.FsxOpenzfsVolumeConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ParentVolumeId: *string,
	CopyTagsToSnapshots: interface{},
	DataCompressionType: *string,
	Id: *string,
	NfsExports: github.com/cdktf/cdktf-provider-aws-go/aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports,
	OriginSnapshot: github.com/cdktf/cdktf-provider-aws-go/aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot,
	ReadOnly: interface{},
	RecordSizeKib: *f64,
	StorageCapacityQuotaGib: *f64,
	StorageCapacityReservationGib: *f64,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts,
	UserAndGroupQuotas: interface{},
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#name FsxOpenzfsVolume#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.parentVolumeId">ParentVolumeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#parent_volume_id FsxOpenzfsVolume#parent_volume_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.copyTagsToSnapshots">CopyTagsToSnapshots</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dataCompressionType">DataCompressionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#data_compression_type FsxOpenzfsVolume#data_compression_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.nfsExports">NfsExports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | nfs_exports block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.originSnapshot">OriginSnapshot</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | origin_snapshot block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#read_only FsxOpenzfsVolume#read_only}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.recordSizeKib">RecordSizeKib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#record_size_kib FsxOpenzfsVolume#record_size_kib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityQuotaGib">StorageCapacityQuotaGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityReservationGib">StorageCapacityReservationGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags FsxOpenzfsVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags_all FsxOpenzfsVolume#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.userAndGroupQuotas">UserAndGroupQuotas</a></code> | <code>interface{}</code> | user_and_group_quotas block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#volume_type FsxOpenzfsVolume#volume_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#name FsxOpenzfsVolume#name}.

---

##### `ParentVolumeId`<sup>Required</sup> <a name="ParentVolumeId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.parentVolumeId"></a>

```go
ParentVolumeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#parent_volume_id FsxOpenzfsVolume#parent_volume_id}.

---

##### `CopyTagsToSnapshots`<sup>Optional</sup> <a name="CopyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.copyTagsToSnapshots"></a>

```go
CopyTagsToSnapshots interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}.

---

##### `DataCompressionType`<sup>Optional</sup> <a name="DataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dataCompressionType"></a>

```go
DataCompressionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#data_compression_type FsxOpenzfsVolume#data_compression_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NfsExports`<sup>Optional</sup> <a name="NfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.nfsExports"></a>

```go
NfsExports FsxOpenzfsVolumeNfsExports
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

nfs_exports block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#nfs_exports FsxOpenzfsVolume#nfs_exports}

---

##### `OriginSnapshot`<sup>Optional</sup> <a name="OriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.originSnapshot"></a>

```go
OriginSnapshot FsxOpenzfsVolumeOriginSnapshot
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

origin_snapshot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#origin_snapshot FsxOpenzfsVolume#origin_snapshot}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#read_only FsxOpenzfsVolume#read_only}.

---

##### `RecordSizeKib`<sup>Optional</sup> <a name="RecordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.recordSizeKib"></a>

```go
RecordSizeKib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#record_size_kib FsxOpenzfsVolume#record_size_kib}.

---

##### `StorageCapacityQuotaGib`<sup>Optional</sup> <a name="StorageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityQuotaGib"></a>

```go
StorageCapacityQuotaGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}.

---

##### `StorageCapacityReservationGib`<sup>Optional</sup> <a name="StorageCapacityReservationGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityReservationGib"></a>

```go
StorageCapacityReservationGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags FsxOpenzfsVolume#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags_all FsxOpenzfsVolume#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.timeouts"></a>

```go
Timeouts FsxOpenzfsVolumeTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#timeouts FsxOpenzfsVolume#timeouts}

---

##### `UserAndGroupQuotas`<sup>Optional</sup> <a name="UserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.userAndGroupQuotas"></a>

```go
UserAndGroupQuotas interface{}
```

- *Type:* interface{}

user_and_group_quotas block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#user_and_group_quotas FsxOpenzfsVolume#user_and_group_quotas}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#volume_type FsxOpenzfsVolume#volume_type}.

---

### FsxOpenzfsVolumeNfsExports <a name="FsxOpenzfsVolumeNfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

&fsxopenzfsvolume.FsxOpenzfsVolumeNfsExports {
	ClientConfigurations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports.property.clientConfigurations">ClientConfigurations</a></code> | <code>interface{}</code> | client_configurations block. |

---

##### `ClientConfigurations`<sup>Required</sup> <a name="ClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports.property.clientConfigurations"></a>

```go
ClientConfigurations interface{}
```

- *Type:* interface{}

client_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#client_configurations FsxOpenzfsVolume#client_configurations}

---

### FsxOpenzfsVolumeNfsExportsClientConfigurations <a name="FsxOpenzfsVolumeNfsExportsClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

&fsxopenzfsvolume.FsxOpenzfsVolumeNfsExportsClientConfigurations {
	Clients: *string,
	Options: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.clients">Clients</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#clients FsxOpenzfsVolume#clients}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.options">Options</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#options FsxOpenzfsVolume#options}. |

---

##### `Clients`<sup>Required</sup> <a name="Clients" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.clients"></a>

```go
Clients *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#clients FsxOpenzfsVolume#clients}.

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.options"></a>

```go
Options *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#options FsxOpenzfsVolume#options}.

---

### FsxOpenzfsVolumeOriginSnapshot <a name="FsxOpenzfsVolumeOriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

&fsxopenzfsvolume.FsxOpenzfsVolumeOriginSnapshot {
	CopyStrategy: *string,
	SnapshotArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.copyStrategy">CopyStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_strategy FsxOpenzfsVolume#copy_strategy}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.snapshotArn">SnapshotArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#snapshot_arn FsxOpenzfsVolume#snapshot_arn}. |

---

##### `CopyStrategy`<sup>Required</sup> <a name="CopyStrategy" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.copyStrategy"></a>

```go
CopyStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_strategy FsxOpenzfsVolume#copy_strategy}.

---

##### `SnapshotArn`<sup>Required</sup> <a name="SnapshotArn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.snapshotArn"></a>

```go
SnapshotArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#snapshot_arn FsxOpenzfsVolume#snapshot_arn}.

---

### FsxOpenzfsVolumeTimeouts <a name="FsxOpenzfsVolumeTimeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

&fsxopenzfsvolume.FsxOpenzfsVolumeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#create FsxOpenzfsVolume#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#delete FsxOpenzfsVolume#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#update FsxOpenzfsVolume#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#create FsxOpenzfsVolume#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#delete FsxOpenzfsVolume#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#update FsxOpenzfsVolume#update}.

---

### FsxOpenzfsVolumeUserAndGroupQuotas <a name="FsxOpenzfsVolumeUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

&fsxopenzfsvolume.FsxOpenzfsVolumeUserAndGroupQuotas {
	Id: *f64,
	StorageCapacityQuotaGib: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.id">Id</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.storageCapacityQuotaGib">StorageCapacityQuotaGib</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#type FsxOpenzfsVolume#type}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.id"></a>

```go
Id *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageCapacityQuotaGib`<sup>Required</sup> <a name="StorageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.storageCapacityQuotaGib"></a>

```go
StorageCapacityQuotaGib *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#type FsxOpenzfsVolume#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOpenzfsVolumeNfsExportsClientConfigurationsList <a name="FsxOpenzfsVolumeNfsExportsClientConfigurationsList" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

fsxopenzfsvolume.NewFsxOpenzfsVolumeNfsExportsClientConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxOpenzfsVolumeNfsExportsClientConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.get"></a>

```go
func Get(index *f64) FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference <a name="FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

fsxopenzfsvolume.NewFsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clientsInput">ClientsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.optionsInput">OptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clients">Clients</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.options">Options</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientsInput`<sup>Optional</sup> <a name="ClientsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clientsInput"></a>

```go
func ClientsInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.optionsInput"></a>

```go
func OptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Clients`<sup>Required</sup> <a name="Clients" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clients"></a>

```go
func Clients() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.options"></a>

```go
func Options() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxOpenzfsVolumeNfsExportsOutputReference <a name="FsxOpenzfsVolumeNfsExportsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

fsxopenzfsvolume.NewFsxOpenzfsVolumeNfsExportsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOpenzfsVolumeNfsExportsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.putClientConfigurations">PutClientConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientConfigurations` <a name="PutClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.putClientConfigurations"></a>

```go
func PutClientConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.putClientConfigurations.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurations">ClientConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList">FsxOpenzfsVolumeNfsExportsClientConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurationsInput">ClientConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientConfigurations`<sup>Required</sup> <a name="ClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurations"></a>

```go
func ClientConfigurations() FsxOpenzfsVolumeNfsExportsClientConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList">FsxOpenzfsVolumeNfsExportsClientConfigurationsList</a>

---

##### `ClientConfigurationsInput`<sup>Optional</sup> <a name="ClientConfigurationsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurationsInput"></a>

```go
func ClientConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOpenzfsVolumeNfsExports
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

---


### FsxOpenzfsVolumeOriginSnapshotOutputReference <a name="FsxOpenzfsVolumeOriginSnapshotOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

fsxopenzfsvolume.NewFsxOpenzfsVolumeOriginSnapshotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOpenzfsVolumeOriginSnapshotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategyInput">CopyStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArnInput">SnapshotArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategy">CopyStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArn">SnapshotArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CopyStrategyInput`<sup>Optional</sup> <a name="CopyStrategyInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategyInput"></a>

```go
func CopyStrategyInput() *string
```

- *Type:* *string

---

##### `SnapshotArnInput`<sup>Optional</sup> <a name="SnapshotArnInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArnInput"></a>

```go
func SnapshotArnInput() *string
```

- *Type:* *string

---

##### `CopyStrategy`<sup>Required</sup> <a name="CopyStrategy" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategy"></a>

```go
func CopyStrategy() *string
```

- *Type:* *string

---

##### `SnapshotArn`<sup>Required</sup> <a name="SnapshotArn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArn"></a>

```go
func SnapshotArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.internalValue"></a>

```go
func InternalValue() FsxOpenzfsVolumeOriginSnapshot
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

---


### FsxOpenzfsVolumeTimeoutsOutputReference <a name="FsxOpenzfsVolumeTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

fsxopenzfsvolume.NewFsxOpenzfsVolumeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FsxOpenzfsVolumeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxOpenzfsVolumeUserAndGroupQuotasList <a name="FsxOpenzfsVolumeUserAndGroupQuotasList" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

fsxopenzfsvolume.NewFsxOpenzfsVolumeUserAndGroupQuotasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FsxOpenzfsVolumeUserAndGroupQuotasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.get"></a>

```go
func Get(index *f64) FsxOpenzfsVolumeUserAndGroupQuotasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FsxOpenzfsVolumeUserAndGroupQuotasOutputReference <a name="FsxOpenzfsVolumeUserAndGroupQuotasOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fsxopenzfsvolume"

fsxopenzfsvolume.NewFsxOpenzfsVolumeUserAndGroupQuotasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FsxOpenzfsVolumeUserAndGroupQuotasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.idInput">IdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGibInput">StorageCapacityQuotaGibInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGib">StorageCapacityQuotaGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.idInput"></a>

```go
func IdInput() *f64
```

- *Type:* *f64

---

##### `StorageCapacityQuotaGibInput`<sup>Optional</sup> <a name="StorageCapacityQuotaGibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGibInput"></a>

```go
func StorageCapacityQuotaGibInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `StorageCapacityQuotaGib`<sup>Required</sup> <a name="StorageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGib"></a>

```go
func StorageCapacityQuotaGib() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



