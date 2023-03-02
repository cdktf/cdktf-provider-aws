# `fsxOpenzfsVolume` Submodule <a name="`fsxOpenzfsVolume` Submodule" id="@cdktf/provider-aws.fsxOpenzfsVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOpenzfsVolume <a name="FsxOpenzfsVolume" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume aws_fsx_openzfs_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOpenzfsVolume(Construct Scope, string Id, FsxOpenzfsVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig">FsxOpenzfsVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutNfsExports` <a name="PutNfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putNfsExports"></a>

```csharp
private void PutNfsExports(FsxOpenzfsVolumeNfsExports Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putNfsExports.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

---

##### `PutOriginSnapshot` <a name="PutOriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putOriginSnapshot"></a>

```csharp
private void PutOriginSnapshot(FsxOpenzfsVolumeOriginSnapshot Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putOriginSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts"></a>

```csharp
private void PutTimeouts(FsxOpenzfsVolumeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a>

---

##### `PutUserAndGroupQuotas` <a name="PutUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putUserAndGroupQuotas"></a>

```csharp
private void PutUserAndGroupQuotas(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.putUserAndGroupQuotas.parameter.value"></a>

- *Type:* object

---

##### `ResetCopyTagsToSnapshots` <a name="ResetCopyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetCopyTagsToSnapshots"></a>

```csharp
private void ResetCopyTagsToSnapshots()
```

##### `ResetDataCompressionType` <a name="ResetDataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetDataCompressionType"></a>

```csharp
private void ResetDataCompressionType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNfsExports` <a name="ResetNfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetNfsExports"></a>

```csharp
private void ResetNfsExports()
```

##### `ResetOriginSnapshot` <a name="ResetOriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetOriginSnapshot"></a>

```csharp
private void ResetOriginSnapshot()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetRecordSizeKib` <a name="ResetRecordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetRecordSizeKib"></a>

```csharp
private void ResetRecordSizeKib()
```

##### `ResetStorageCapacityQuotaGib` <a name="ResetStorageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityQuotaGib"></a>

```csharp
private void ResetStorageCapacityQuotaGib()
```

##### `ResetStorageCapacityReservationGib` <a name="ResetStorageCapacityReservationGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetStorageCapacityReservationGib"></a>

```csharp
private void ResetStorageCapacityReservationGib()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserAndGroupQuotas` <a name="ResetUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetUserAndGroupQuotas"></a>

```csharp
private void ResetUserAndGroupQuotas()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FsxOpenzfsVolume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FsxOpenzfsVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FsxOpenzfsVolume.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExports">NfsExports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference">FsxOpenzfsVolumeNfsExportsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshot">OriginSnapshot</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference">FsxOpenzfsVolumeOriginSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference">FsxOpenzfsVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotas">UserAndGroupQuotas</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList">FsxOpenzfsVolumeUserAndGroupQuotasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshotsInput">CopyTagsToSnapshotsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionTypeInput">DataCompressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExportsInput">NfsExportsInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshotInput">OriginSnapshotInput</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeIdInput">ParentVolumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKibInput">RecordSizeKibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGibInput">StorageCapacityQuotaGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGibInput">StorageCapacityReservationGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotasInput">UserAndGroupQuotasInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshots">CopyTagsToSnapshots</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionType">DataCompressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeId">ParentVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKib">RecordSizeKib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGib">StorageCapacityQuotaGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGib">StorageCapacityReservationGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `NfsExports`<sup>Required</sup> <a name="NfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExports"></a>

```csharp
public FsxOpenzfsVolumeNfsExportsOutputReference NfsExports { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference">FsxOpenzfsVolumeNfsExportsOutputReference</a>

---

##### `OriginSnapshot`<sup>Required</sup> <a name="OriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshot"></a>

```csharp
public FsxOpenzfsVolumeOriginSnapshotOutputReference OriginSnapshot { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference">FsxOpenzfsVolumeOriginSnapshotOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeouts"></a>

```csharp
public FsxOpenzfsVolumeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference">FsxOpenzfsVolumeTimeoutsOutputReference</a>

---

##### `UserAndGroupQuotas`<sup>Required</sup> <a name="UserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotas"></a>

```csharp
public FsxOpenzfsVolumeUserAndGroupQuotasList UserAndGroupQuotas { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList">FsxOpenzfsVolumeUserAndGroupQuotasList</a>

---

##### `CopyTagsToSnapshotsInput`<sup>Optional</sup> <a name="CopyTagsToSnapshotsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshotsInput"></a>

```csharp
public object CopyTagsToSnapshotsInput { get; }
```

- *Type:* object

---

##### `DataCompressionTypeInput`<sup>Optional</sup> <a name="DataCompressionTypeInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionTypeInput"></a>

```csharp
public string DataCompressionTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NfsExportsInput`<sup>Optional</sup> <a name="NfsExportsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.nfsExportsInput"></a>

```csharp
public FsxOpenzfsVolumeNfsExports NfsExportsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

---

##### `OriginSnapshotInput`<sup>Optional</sup> <a name="OriginSnapshotInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.originSnapshotInput"></a>

```csharp
public FsxOpenzfsVolumeOriginSnapshot OriginSnapshotInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

---

##### `ParentVolumeIdInput`<sup>Optional</sup> <a name="ParentVolumeIdInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeIdInput"></a>

```csharp
public string ParentVolumeIdInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `RecordSizeKibInput`<sup>Optional</sup> <a name="RecordSizeKibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKibInput"></a>

```csharp
public double RecordSizeKibInput { get; }
```

- *Type:* double

---

##### `StorageCapacityQuotaGibInput`<sup>Optional</sup> <a name="StorageCapacityQuotaGibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGibInput"></a>

```csharp
public double StorageCapacityQuotaGibInput { get; }
```

- *Type:* double

---

##### `StorageCapacityReservationGibInput`<sup>Optional</sup> <a name="StorageCapacityReservationGibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGibInput"></a>

```csharp
public double StorageCapacityReservationGibInput { get; }
```

- *Type:* double

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserAndGroupQuotasInput`<sup>Optional</sup> <a name="UserAndGroupQuotasInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.userAndGroupQuotasInput"></a>

```csharp
public object UserAndGroupQuotasInput { get; }
```

- *Type:* object

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `CopyTagsToSnapshots`<sup>Required</sup> <a name="CopyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.copyTagsToSnapshots"></a>

```csharp
public object CopyTagsToSnapshots { get; }
```

- *Type:* object

---

##### `DataCompressionType`<sup>Required</sup> <a name="DataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.dataCompressionType"></a>

```csharp
public string DataCompressionType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentVolumeId`<sup>Required</sup> <a name="ParentVolumeId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.parentVolumeId"></a>

```csharp
public string ParentVolumeId { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `RecordSizeKib`<sup>Required</sup> <a name="RecordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.recordSizeKib"></a>

```csharp
public double RecordSizeKib { get; }
```

- *Type:* double

---

##### `StorageCapacityQuotaGib`<sup>Required</sup> <a name="StorageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityQuotaGib"></a>

```csharp
public double StorageCapacityQuotaGib { get; }
```

- *Type:* double

---

##### `StorageCapacityReservationGib`<sup>Required</sup> <a name="StorageCapacityReservationGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.storageCapacityReservationGib"></a>

```csharp
public double StorageCapacityReservationGib { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOpenzfsVolumeConfig <a name="FsxOpenzfsVolumeConfig" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOpenzfsVolumeConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ParentVolumeId,
    object CopyTagsToSnapshots = null,
    string DataCompressionType = null,
    string Id = null,
    FsxOpenzfsVolumeNfsExports NfsExports = null,
    FsxOpenzfsVolumeOriginSnapshot OriginSnapshot = null,
    object ReadOnly = null,
    double RecordSizeKib = null,
    double StorageCapacityQuotaGib = null,
    double StorageCapacityReservationGib = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    FsxOpenzfsVolumeTimeouts Timeouts = null,
    object UserAndGroupQuotas = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#name FsxOpenzfsVolume#name}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.parentVolumeId">ParentVolumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#parent_volume_id FsxOpenzfsVolume#parent_volume_id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.copyTagsToSnapshots">CopyTagsToSnapshots</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dataCompressionType">DataCompressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#data_compression_type FsxOpenzfsVolume#data_compression_type}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.nfsExports">NfsExports</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | nfs_exports block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.originSnapshot">OriginSnapshot</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | origin_snapshot block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.readOnly">ReadOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#read_only FsxOpenzfsVolume#read_only}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.recordSizeKib">RecordSizeKib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#record_size_kib FsxOpenzfsVolume#record_size_kib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityQuotaGib">StorageCapacityQuotaGib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityReservationGib">StorageCapacityReservationGib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags FsxOpenzfsVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags_all FsxOpenzfsVolume#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.userAndGroupQuotas">UserAndGroupQuotas</a></code> | <code>object</code> | user_and_group_quotas block. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#volume_type FsxOpenzfsVolume#volume_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#name FsxOpenzfsVolume#name}.

---

##### `ParentVolumeId`<sup>Required</sup> <a name="ParentVolumeId" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.parentVolumeId"></a>

```csharp
public string ParentVolumeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#parent_volume_id FsxOpenzfsVolume#parent_volume_id}.

---

##### `CopyTagsToSnapshots`<sup>Optional</sup> <a name="CopyTagsToSnapshots" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.copyTagsToSnapshots"></a>

```csharp
public object CopyTagsToSnapshots { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_tags_to_snapshots FsxOpenzfsVolume#copy_tags_to_snapshots}.

---

##### `DataCompressionType`<sup>Optional</sup> <a name="DataCompressionType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.dataCompressionType"></a>

```csharp
public string DataCompressionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#data_compression_type FsxOpenzfsVolume#data_compression_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NfsExports`<sup>Optional</sup> <a name="NfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.nfsExports"></a>

```csharp
public FsxOpenzfsVolumeNfsExports NfsExports { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

nfs_exports block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#nfs_exports FsxOpenzfsVolume#nfs_exports}

---

##### `OriginSnapshot`<sup>Optional</sup> <a name="OriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.originSnapshot"></a>

```csharp
public FsxOpenzfsVolumeOriginSnapshot OriginSnapshot { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

origin_snapshot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#origin_snapshot FsxOpenzfsVolume#origin_snapshot}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#read_only FsxOpenzfsVolume#read_only}.

---

##### `RecordSizeKib`<sup>Optional</sup> <a name="RecordSizeKib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.recordSizeKib"></a>

```csharp
public double RecordSizeKib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#record_size_kib FsxOpenzfsVolume#record_size_kib}.

---

##### `StorageCapacityQuotaGib`<sup>Optional</sup> <a name="StorageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityQuotaGib"></a>

```csharp
public double StorageCapacityQuotaGib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}.

---

##### `StorageCapacityReservationGib`<sup>Optional</sup> <a name="StorageCapacityReservationGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.storageCapacityReservationGib"></a>

```csharp
public double StorageCapacityReservationGib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_reservation_gib FsxOpenzfsVolume#storage_capacity_reservation_gib}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags FsxOpenzfsVolume#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#tags_all FsxOpenzfsVolume#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.timeouts"></a>

```csharp
public FsxOpenzfsVolumeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts">FsxOpenzfsVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#timeouts FsxOpenzfsVolume#timeouts}

---

##### `UserAndGroupQuotas`<sup>Optional</sup> <a name="UserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.userAndGroupQuotas"></a>

```csharp
public object UserAndGroupQuotas { get; set; }
```

- *Type:* object

user_and_group_quotas block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#user_and_group_quotas FsxOpenzfsVolume#user_and_group_quotas}

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeConfig.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#volume_type FsxOpenzfsVolume#volume_type}.

---

### FsxOpenzfsVolumeNfsExports <a name="FsxOpenzfsVolumeNfsExports" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOpenzfsVolumeNfsExports {
    object ClientConfigurations
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports.property.clientConfigurations">ClientConfigurations</a></code> | <code>object</code> | client_configurations block. |

---

##### `ClientConfigurations`<sup>Required</sup> <a name="ClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports.property.clientConfigurations"></a>

```csharp
public object ClientConfigurations { get; set; }
```

- *Type:* object

client_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#client_configurations FsxOpenzfsVolume#client_configurations}

---

### FsxOpenzfsVolumeNfsExportsClientConfigurations <a name="FsxOpenzfsVolumeNfsExportsClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOpenzfsVolumeNfsExportsClientConfigurations {
    string Clients,
    string[] Options
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.clients">Clients</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#clients FsxOpenzfsVolume#clients}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.options">Options</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#options FsxOpenzfsVolume#options}. |

---

##### `Clients`<sup>Required</sup> <a name="Clients" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.clients"></a>

```csharp
public string Clients { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#clients FsxOpenzfsVolume#clients}.

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurations.property.options"></a>

```csharp
public string[] Options { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#options FsxOpenzfsVolume#options}.

---

### FsxOpenzfsVolumeOriginSnapshot <a name="FsxOpenzfsVolumeOriginSnapshot" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOpenzfsVolumeOriginSnapshot {
    string CopyStrategy,
    string SnapshotArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.copyStrategy">CopyStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_strategy FsxOpenzfsVolume#copy_strategy}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.snapshotArn">SnapshotArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#snapshot_arn FsxOpenzfsVolume#snapshot_arn}. |

---

##### `CopyStrategy`<sup>Required</sup> <a name="CopyStrategy" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.copyStrategy"></a>

```csharp
public string CopyStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#copy_strategy FsxOpenzfsVolume#copy_strategy}.

---

##### `SnapshotArn`<sup>Required</sup> <a name="SnapshotArn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot.property.snapshotArn"></a>

```csharp
public string SnapshotArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#snapshot_arn FsxOpenzfsVolume#snapshot_arn}.

---

### FsxOpenzfsVolumeTimeouts <a name="FsxOpenzfsVolumeTimeouts" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOpenzfsVolumeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#create FsxOpenzfsVolume#create}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#delete FsxOpenzfsVolume#delete}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#update FsxOpenzfsVolume#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#create FsxOpenzfsVolume#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#delete FsxOpenzfsVolume#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#update FsxOpenzfsVolume#update}.

---

### FsxOpenzfsVolumeUserAndGroupQuotas <a name="FsxOpenzfsVolumeUserAndGroupQuotas" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOpenzfsVolumeUserAndGroupQuotas {
    double Id,
    double StorageCapacityQuotaGib,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.id">Id</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.storageCapacityQuotaGib">StorageCapacityQuotaGib</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#type FsxOpenzfsVolume#type}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.id"></a>

```csharp
public double Id { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#id FsxOpenzfsVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageCapacityQuotaGib`<sup>Required</sup> <a name="StorageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.storageCapacityQuotaGib"></a>

```csharp
public double StorageCapacityQuotaGib { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#storage_capacity_quota_gib FsxOpenzfsVolume#storage_capacity_quota_gib}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotas.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_openzfs_volume#type FsxOpenzfsVolume#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOpenzfsVolumeNfsExportsClientConfigurationsList <a name="FsxOpenzfsVolumeNfsExportsClientConfigurationsList" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOpenzfsVolumeNfsExportsClientConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.get"></a>

```csharp
private FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference <a name="FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clientsInput">ClientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.optionsInput">OptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clients">Clients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.options">Options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientsInput`<sup>Optional</sup> <a name="ClientsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clientsInput"></a>

```csharp
public string ClientsInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.optionsInput"></a>

```csharp
public string[] OptionsInput { get; }
```

- *Type:* string[]

---

##### `Clients`<sup>Required</sup> <a name="Clients" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.clients"></a>

```csharp
public string Clients { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.options"></a>

```csharp
public string[] Options { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FsxOpenzfsVolumeNfsExportsOutputReference <a name="FsxOpenzfsVolumeNfsExportsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOpenzfsVolumeNfsExportsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientConfigurations` <a name="PutClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.putClientConfigurations"></a>

```csharp
private void PutClientConfigurations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.putClientConfigurations.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurations">ClientConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList">FsxOpenzfsVolumeNfsExportsClientConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurationsInput">ClientConfigurationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientConfigurations`<sup>Required</sup> <a name="ClientConfigurations" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurations"></a>

```csharp
public FsxOpenzfsVolumeNfsExportsClientConfigurationsList ClientConfigurations { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsClientConfigurationsList">FsxOpenzfsVolumeNfsExportsClientConfigurationsList</a>

---

##### `ClientConfigurationsInput`<sup>Optional</sup> <a name="ClientConfigurationsInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.clientConfigurationsInput"></a>

```csharp
public object ClientConfigurationsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExportsOutputReference.property.internalValue"></a>

```csharp
public FsxOpenzfsVolumeNfsExports InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeNfsExports">FsxOpenzfsVolumeNfsExports</a>

---


### FsxOpenzfsVolumeOriginSnapshotOutputReference <a name="FsxOpenzfsVolumeOriginSnapshotOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOpenzfsVolumeOriginSnapshotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategyInput">CopyStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArnInput">SnapshotArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategy">CopyStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArn">SnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CopyStrategyInput`<sup>Optional</sup> <a name="CopyStrategyInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategyInput"></a>

```csharp
public string CopyStrategyInput { get; }
```

- *Type:* string

---

##### `SnapshotArnInput`<sup>Optional</sup> <a name="SnapshotArnInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArnInput"></a>

```csharp
public string SnapshotArnInput { get; }
```

- *Type:* string

---

##### `CopyStrategy`<sup>Required</sup> <a name="CopyStrategy" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.copyStrategy"></a>

```csharp
public string CopyStrategy { get; }
```

- *Type:* string

---

##### `SnapshotArn`<sup>Required</sup> <a name="SnapshotArn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.snapshotArn"></a>

```csharp
public string SnapshotArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshotOutputReference.property.internalValue"></a>

```csharp
public FsxOpenzfsVolumeOriginSnapshot InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeOriginSnapshot">FsxOpenzfsVolumeOriginSnapshot</a>

---


### FsxOpenzfsVolumeTimeoutsOutputReference <a name="FsxOpenzfsVolumeTimeoutsOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOpenzfsVolumeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FsxOpenzfsVolumeUserAndGroupQuotasList <a name="FsxOpenzfsVolumeUserAndGroupQuotasList" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOpenzfsVolumeUserAndGroupQuotasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.get"></a>

```csharp
private FsxOpenzfsVolumeUserAndGroupQuotasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FsxOpenzfsVolumeUserAndGroupQuotasOutputReference <a name="FsxOpenzfsVolumeUserAndGroupQuotasOutputReference" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FsxOpenzfsVolumeUserAndGroupQuotasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.idInput">IdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGibInput">StorageCapacityQuotaGibInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGib">StorageCapacityQuotaGib</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.idInput"></a>

```csharp
public double IdInput { get; }
```

- *Type:* double

---

##### `StorageCapacityQuotaGibInput`<sup>Optional</sup> <a name="StorageCapacityQuotaGibInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGibInput"></a>

```csharp
public double StorageCapacityQuotaGibInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `StorageCapacityQuotaGib`<sup>Required</sup> <a name="StorageCapacityQuotaGib" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGib"></a>

```csharp
public double StorageCapacityQuotaGib { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fsxOpenzfsVolume.FsxOpenzfsVolumeUserAndGroupQuotasOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



