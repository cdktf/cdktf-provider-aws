# `rdsClusterSnapshotCopy` Submodule <a name="`rdsClusterSnapshotCopy` Submodule" id="@cdktf/provider-aws.rdsClusterSnapshotCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsClusterSnapshotCopy <a name="RdsClusterSnapshotCopy" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy aws_rds_cluster_snapshot_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterSnapshotCopy(Construct Scope, string Id, RdsClusterSnapshotCopyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig">RdsClusterSnapshotCopyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig">RdsClusterSnapshotCopyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetCopyTags">ResetCopyTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetDestinationRegion">ResetDestinationRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetPresignedUrl">ResetPresignedUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetSharedAccounts">ResetSharedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.putTimeouts"></a>

```csharp
private void PutTimeouts(RdsClusterSnapshotCopyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts">RdsClusterSnapshotCopyTimeouts</a>

---

##### `ResetCopyTags` <a name="ResetCopyTags" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetCopyTags"></a>

```csharp
private void ResetCopyTags()
```

##### `ResetDestinationRegion` <a name="ResetDestinationRegion" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetDestinationRegion"></a>

```csharp
private void ResetDestinationRegion()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetPresignedUrl` <a name="ResetPresignedUrl" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetPresignedUrl"></a>

```csharp
private void ResetPresignedUrl()
```

##### `ResetSharedAccounts` <a name="ResetSharedAccounts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetSharedAccounts"></a>

```csharp
private void ResetSharedAccounts()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RdsClusterSnapshotCopy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RdsClusterSnapshotCopy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RdsClusterSnapshotCopy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RdsClusterSnapshotCopy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

RdsClusterSnapshotCopy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RdsClusterSnapshotCopy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RdsClusterSnapshotCopy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RdsClusterSnapshotCopy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RdsClusterSnapshotCopy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.dbClusterSnapshotArn">DbClusterSnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.snapshotType">SnapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.storageEncrypted">StorageEncrypted</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference">RdsClusterSnapshotCopyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.copyTagsInput">CopyTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.destinationRegionInput">DestinationRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.presignedUrlInput">PresignedUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sharedAccountsInput">SharedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sourceDbClusterSnapshotIdentifierInput">SourceDbClusterSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.targetDbClusterSnapshotIdentifierInput">TargetDbClusterSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.copyTags">CopyTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.destinationRegion">DestinationRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.presignedUrl">PresignedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sharedAccounts">SharedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sourceDbClusterSnapshotIdentifier">SourceDbClusterSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.targetDbClusterSnapshotIdentifier">TargetDbClusterSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; }
```

- *Type:* double

---

##### `DbClusterSnapshotArn`<sup>Required</sup> <a name="DbClusterSnapshotArn" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.dbClusterSnapshotArn"></a>

```csharp
public string DbClusterSnapshotArn { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `SnapshotType`<sup>Required</sup> <a name="SnapshotType" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.snapshotType"></a>

```csharp
public string SnapshotType { get; }
```

- *Type:* string

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.storageEncrypted"></a>

```csharp
public IResolvable StorageEncrypted { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.timeouts"></a>

```csharp
public RdsClusterSnapshotCopyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference">RdsClusterSnapshotCopyTimeoutsOutputReference</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `CopyTagsInput`<sup>Optional</sup> <a name="CopyTagsInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.copyTagsInput"></a>

```csharp
public object CopyTagsInput { get; }
```

- *Type:* object

---

##### `DestinationRegionInput`<sup>Optional</sup> <a name="DestinationRegionInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.destinationRegionInput"></a>

```csharp
public string DestinationRegionInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `PresignedUrlInput`<sup>Optional</sup> <a name="PresignedUrlInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.presignedUrlInput"></a>

```csharp
public string PresignedUrlInput { get; }
```

- *Type:* string

---

##### `SharedAccountsInput`<sup>Optional</sup> <a name="SharedAccountsInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sharedAccountsInput"></a>

```csharp
public string[] SharedAccountsInput { get; }
```

- *Type:* string[]

---

##### `SourceDbClusterSnapshotIdentifierInput`<sup>Optional</sup> <a name="SourceDbClusterSnapshotIdentifierInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sourceDbClusterSnapshotIdentifierInput"></a>

```csharp
public string SourceDbClusterSnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetDbClusterSnapshotIdentifierInput`<sup>Optional</sup> <a name="TargetDbClusterSnapshotIdentifierInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.targetDbClusterSnapshotIdentifierInput"></a>

```csharp
public string TargetDbClusterSnapshotIdentifierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CopyTags`<sup>Required</sup> <a name="CopyTags" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.copyTags"></a>

```csharp
public object CopyTags { get; }
```

- *Type:* object

---

##### `DestinationRegion`<sup>Required</sup> <a name="DestinationRegion" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.destinationRegion"></a>

```csharp
public string DestinationRegion { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `PresignedUrl`<sup>Required</sup> <a name="PresignedUrl" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.presignedUrl"></a>

```csharp
public string PresignedUrl { get; }
```

- *Type:* string

---

##### `SharedAccounts`<sup>Required</sup> <a name="SharedAccounts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sharedAccounts"></a>

```csharp
public string[] SharedAccounts { get; }
```

- *Type:* string[]

---

##### `SourceDbClusterSnapshotIdentifier`<sup>Required</sup> <a name="SourceDbClusterSnapshotIdentifier" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.sourceDbClusterSnapshotIdentifier"></a>

```csharp
public string SourceDbClusterSnapshotIdentifier { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetDbClusterSnapshotIdentifier`<sup>Required</sup> <a name="TargetDbClusterSnapshotIdentifier" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.targetDbClusterSnapshotIdentifier"></a>

```csharp
public string TargetDbClusterSnapshotIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsClusterSnapshotCopyConfig <a name="RdsClusterSnapshotCopyConfig" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterSnapshotCopyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SourceDbClusterSnapshotIdentifier,
    string TargetDbClusterSnapshotIdentifier,
    object CopyTags = null,
    string DestinationRegion = null,
    string KmsKeyId = null,
    string PresignedUrl = null,
    string[] SharedAccounts = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    RdsClusterSnapshotCopyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.sourceDbClusterSnapshotIdentifier">SourceDbClusterSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#source_db_cluster_snapshot_identifier RdsClusterSnapshotCopy#source_db_cluster_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.targetDbClusterSnapshotIdentifier">TargetDbClusterSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#target_db_cluster_snapshot_identifier RdsClusterSnapshotCopy#target_db_cluster_snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.copyTags">CopyTags</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#copy_tags RdsClusterSnapshotCopy#copy_tags}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.destinationRegion">DestinationRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#destination_region RdsClusterSnapshotCopy#destination_region}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#kms_key_id RdsClusterSnapshotCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.presignedUrl">PresignedUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#presigned_url RdsClusterSnapshotCopy#presigned_url}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.sharedAccounts">SharedAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#shared_accounts RdsClusterSnapshotCopy#shared_accounts}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#tags RdsClusterSnapshotCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts">RdsClusterSnapshotCopyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SourceDbClusterSnapshotIdentifier`<sup>Required</sup> <a name="SourceDbClusterSnapshotIdentifier" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.sourceDbClusterSnapshotIdentifier"></a>

```csharp
public string SourceDbClusterSnapshotIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#source_db_cluster_snapshot_identifier RdsClusterSnapshotCopy#source_db_cluster_snapshot_identifier}.

---

##### `TargetDbClusterSnapshotIdentifier`<sup>Required</sup> <a name="TargetDbClusterSnapshotIdentifier" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.targetDbClusterSnapshotIdentifier"></a>

```csharp
public string TargetDbClusterSnapshotIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#target_db_cluster_snapshot_identifier RdsClusterSnapshotCopy#target_db_cluster_snapshot_identifier}.

---

##### `CopyTags`<sup>Optional</sup> <a name="CopyTags" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.copyTags"></a>

```csharp
public object CopyTags { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#copy_tags RdsClusterSnapshotCopy#copy_tags}.

---

##### `DestinationRegion`<sup>Optional</sup> <a name="DestinationRegion" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.destinationRegion"></a>

```csharp
public string DestinationRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#destination_region RdsClusterSnapshotCopy#destination_region}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#kms_key_id RdsClusterSnapshotCopy#kms_key_id}.

---

##### `PresignedUrl`<sup>Optional</sup> <a name="PresignedUrl" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.presignedUrl"></a>

```csharp
public string PresignedUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#presigned_url RdsClusterSnapshotCopy#presigned_url}.

---

##### `SharedAccounts`<sup>Optional</sup> <a name="SharedAccounts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.sharedAccounts"></a>

```csharp
public string[] SharedAccounts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#shared_accounts RdsClusterSnapshotCopy#shared_accounts}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#tags RdsClusterSnapshotCopy#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyConfig.property.timeouts"></a>

```csharp
public RdsClusterSnapshotCopyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts">RdsClusterSnapshotCopyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#timeouts RdsClusterSnapshotCopy#timeouts}

---

### RdsClusterSnapshotCopyTimeouts <a name="RdsClusterSnapshotCopyTimeouts" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterSnapshotCopyTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/rds_cluster_snapshot_copy#create RdsClusterSnapshotCopy#create}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsClusterSnapshotCopyTimeoutsOutputReference <a name="RdsClusterSnapshotCopyTimeoutsOutputReference" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new RdsClusterSnapshotCopyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.rdsClusterSnapshotCopy.RdsClusterSnapshotCopyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



