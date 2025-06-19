# `storagegatewayStoredIscsiVolume` Submodule <a name="`storagegatewayStoredIscsiVolume` Submodule" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayStoredIscsiVolume <a name="StoragegatewayStoredIscsiVolume" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume aws_storagegateway_stored_iscsi_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayStoredIscsiVolume(Construct Scope, string Id, StoragegatewayStoredIscsiVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig">StoragegatewayStoredIscsiVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig">StoragegatewayStoredIscsiVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetKmsEncrypted">ResetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsEncrypted` <a name="ResetKmsEncrypted" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetKmsEncrypted"></a>

```csharp
private void ResetKmsEncrypted()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StoragegatewayStoredIscsiVolume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

StoragegatewayStoredIscsiVolume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

StoragegatewayStoredIscsiVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

StoragegatewayStoredIscsiVolume.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

StoragegatewayStoredIscsiVolume.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StoragegatewayStoredIscsiVolume resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StoragegatewayStoredIscsiVolume to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StoragegatewayStoredIscsiVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StoragegatewayStoredIscsiVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.chapEnabled">ChapEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.lunNumber">LunNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfacePort">NetworkInterfacePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetArn">TargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeAttachmentStatus">VolumeAttachmentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeSizeInBytes">VolumeSizeInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeStatus">VolumeStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.diskIdInput">DiskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.gatewayArnInput">GatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsEncryptedInput">KmsEncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.preserveExistingDataInput">PreserveExistingDataInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetNameInput">TargetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.diskId">DiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsEncrypted">KmsEncrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.preserveExistingData">PreserveExistingData</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetName">TargetName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ChapEnabled`<sup>Required</sup> <a name="ChapEnabled" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.chapEnabled"></a>

```csharp
public IResolvable ChapEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LunNumber`<sup>Required</sup> <a name="LunNumber" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.lunNumber"></a>

```csharp
public double LunNumber { get; }
```

- *Type:* double

---

##### `NetworkInterfacePort`<sup>Required</sup> <a name="NetworkInterfacePort" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfacePort"></a>

```csharp
public double NetworkInterfacePort { get; }
```

- *Type:* double

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetArn"></a>

```csharp
public string TargetArn { get; }
```

- *Type:* string

---

##### `VolumeAttachmentStatus`<sup>Required</sup> <a name="VolumeAttachmentStatus" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeAttachmentStatus"></a>

```csharp
public string VolumeAttachmentStatus { get; }
```

- *Type:* string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `VolumeSizeInBytes`<sup>Required</sup> <a name="VolumeSizeInBytes" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeSizeInBytes"></a>

```csharp
public double VolumeSizeInBytes { get; }
```

- *Type:* double

---

##### `VolumeStatus`<sup>Required</sup> <a name="VolumeStatus" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeStatus"></a>

```csharp
public string VolumeStatus { get; }
```

- *Type:* string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `DiskIdInput`<sup>Optional</sup> <a name="DiskIdInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.diskIdInput"></a>

```csharp
public string DiskIdInput { get; }
```

- *Type:* string

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.gatewayArnInput"></a>

```csharp
public string GatewayArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsEncryptedInput`<sup>Optional</sup> <a name="KmsEncryptedInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsEncryptedInput"></a>

```csharp
public object KmsEncryptedInput { get; }
```

- *Type:* object

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `PreserveExistingDataInput`<sup>Optional</sup> <a name="PreserveExistingDataInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.preserveExistingDataInput"></a>

```csharp
public object PreserveExistingDataInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetNameInput`<sup>Optional</sup> <a name="TargetNameInput" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetNameInput"></a>

```csharp
public string TargetNameInput { get; }
```

- *Type:* string

---

##### `DiskId`<sup>Required</sup> <a name="DiskId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.diskId"></a>

```csharp
public string DiskId { get; }
```

- *Type:* string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsEncrypted`<sup>Required</sup> <a name="KmsEncrypted" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsEncrypted"></a>

```csharp
public object KmsEncrypted { get; }
```

- *Type:* object

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `PreserveExistingData`<sup>Required</sup> <a name="PreserveExistingData" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.preserveExistingData"></a>

```csharp
public object PreserveExistingData { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.targetName"></a>

```csharp
public string TargetName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayStoredIscsiVolumeConfig <a name="StoragegatewayStoredIscsiVolumeConfig" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayStoredIscsiVolumeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DiskId,
    string GatewayArn,
    string NetworkInterfaceId,
    object PreserveExistingData,
    string TargetName,
    string Id = null,
    object KmsEncrypted = null,
    string KmsKey = null,
    string Region = null,
    string SnapshotId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.diskId">DiskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#disk_id StoragegatewayStoredIscsiVolume#disk_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#gateway_arn StoragegatewayStoredIscsiVolume#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#network_interface_id StoragegatewayStoredIscsiVolume#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.preserveExistingData">PreserveExistingData</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#preserve_existing_data StoragegatewayStoredIscsiVolume#preserve_existing_data}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.targetName">TargetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#target_name StoragegatewayStoredIscsiVolume#target_name}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#id StoragegatewayStoredIscsiVolume#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.kmsEncrypted">KmsEncrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#kms_encrypted StoragegatewayStoredIscsiVolume#kms_encrypted}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#kms_key StoragegatewayStoredIscsiVolume#kms_key}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.snapshotId">SnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#snapshot_id StoragegatewayStoredIscsiVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#tags StoragegatewayStoredIscsiVolume#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#tags_all StoragegatewayStoredIscsiVolume#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DiskId`<sup>Required</sup> <a name="DiskId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.diskId"></a>

```csharp
public string DiskId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#disk_id StoragegatewayStoredIscsiVolume#disk_id}.

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#gateway_arn StoragegatewayStoredIscsiVolume#gateway_arn}.

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#network_interface_id StoragegatewayStoredIscsiVolume#network_interface_id}.

---

##### `PreserveExistingData`<sup>Required</sup> <a name="PreserveExistingData" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.preserveExistingData"></a>

```csharp
public object PreserveExistingData { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#preserve_existing_data StoragegatewayStoredIscsiVolume#preserve_existing_data}.

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.targetName"></a>

```csharp
public string TargetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#target_name StoragegatewayStoredIscsiVolume#target_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#id StoragegatewayStoredIscsiVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsEncrypted`<sup>Optional</sup> <a name="KmsEncrypted" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.kmsEncrypted"></a>

```csharp
public object KmsEncrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#kms_encrypted StoragegatewayStoredIscsiVolume#kms_encrypted}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#kms_key StoragegatewayStoredIscsiVolume#kms_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#region StoragegatewayStoredIscsiVolume#region}

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#snapshot_id StoragegatewayStoredIscsiVolume#snapshot_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#tags StoragegatewayStoredIscsiVolume#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.storagegatewayStoredIscsiVolume.StoragegatewayStoredIscsiVolumeConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/storagegateway_stored_iscsi_volume#tags_all StoragegatewayStoredIscsiVolume#tags_all}.

---



