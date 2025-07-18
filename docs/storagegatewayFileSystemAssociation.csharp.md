# `storagegatewayFileSystemAssociation` Submodule <a name="`storagegatewayFileSystemAssociation` Submodule" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayFileSystemAssociation <a name="StoragegatewayFileSystemAssociation" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association aws_storagegateway_file_system_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayFileSystemAssociation(Construct Scope, string Id, StoragegatewayFileSystemAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig">StoragegatewayFileSystemAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig">StoragegatewayFileSystemAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putCacheAttributes">PutCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetAuditDestinationArn">ResetAuditDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetCacheAttributes">ResetCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCacheAttributes` <a name="PutCacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putCacheAttributes"></a>

```csharp
private void PutCacheAttributes(StoragegatewayFileSystemAssociationCacheAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putCacheAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(StoragegatewayFileSystemAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts">StoragegatewayFileSystemAssociationTimeouts</a>

---

##### `ResetAuditDestinationArn` <a name="ResetAuditDestinationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetAuditDestinationArn"></a>

```csharp
private void ResetAuditDestinationArn()
```

##### `ResetCacheAttributes` <a name="ResetCacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetCacheAttributes"></a>

```csharp
private void ResetCacheAttributes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StoragegatewayFileSystemAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

StoragegatewayFileSystemAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

StoragegatewayFileSystemAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

StoragegatewayFileSystemAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

StoragegatewayFileSystemAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StoragegatewayFileSystemAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StoragegatewayFileSystemAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StoragegatewayFileSystemAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StoragegatewayFileSystemAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributes">CacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference">StoragegatewayFileSystemAssociationCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference">StoragegatewayFileSystemAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArnInput">AuditDestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributesInput">CacheAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArnInput">GatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArnInput">LocationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArn">AuditDestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArn">LocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CacheAttributes`<sup>Required</sup> <a name="CacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributes"></a>

```csharp
public StoragegatewayFileSystemAssociationCacheAttributesOutputReference CacheAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference">StoragegatewayFileSystemAssociationCacheAttributesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.timeouts"></a>

```csharp
public StoragegatewayFileSystemAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference">StoragegatewayFileSystemAssociationTimeoutsOutputReference</a>

---

##### `AuditDestinationArnInput`<sup>Optional</sup> <a name="AuditDestinationArnInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArnInput"></a>

```csharp
public string AuditDestinationArnInput { get; }
```

- *Type:* string

---

##### `CacheAttributesInput`<sup>Optional</sup> <a name="CacheAttributesInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.cacheAttributesInput"></a>

```csharp
public StoragegatewayFileSystemAssociationCacheAttributes CacheAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArnInput"></a>

```csharp
public string GatewayArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationArnInput`<sup>Optional</sup> <a name="LocationArnInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArnInput"></a>

```csharp
public string LocationArnInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `AuditDestinationArn`<sup>Required</sup> <a name="AuditDestinationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.auditDestinationArn"></a>

```csharp
public string AuditDestinationArn { get; }
```

- *Type:* string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.locationArn"></a>

```csharp
public string LocationArn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayFileSystemAssociationCacheAttributes <a name="StoragegatewayFileSystemAssociationCacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayFileSystemAssociationCacheAttributes {
    double CacheStaleTimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes.property.cacheStaleTimeoutInSeconds">CacheStaleTimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#cache_stale_timeout_in_seconds StoragegatewayFileSystemAssociation#cache_stale_timeout_in_seconds}. |

---

##### `CacheStaleTimeoutInSeconds`<sup>Optional</sup> <a name="CacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes.property.cacheStaleTimeoutInSeconds"></a>

```csharp
public double CacheStaleTimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#cache_stale_timeout_in_seconds StoragegatewayFileSystemAssociation#cache_stale_timeout_in_seconds}.

---

### StoragegatewayFileSystemAssociationConfig <a name="StoragegatewayFileSystemAssociationConfig" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayFileSystemAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GatewayArn,
    string LocationArn,
    string Password,
    string Username,
    string AuditDestinationArn = null,
    StoragegatewayFileSystemAssociationCacheAttributes CacheAttributes = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    StoragegatewayFileSystemAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.locationArn">LocationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#location_arn StoragegatewayFileSystemAssociation#location_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#password StoragegatewayFileSystemAssociation#password}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#username StoragegatewayFileSystemAssociation#username}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.auditDestinationArn">AuditDestinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.cacheAttributes">CacheAttributes</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a></code> | cache_attributes block. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#id StoragegatewayFileSystemAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#tags StoragegatewayFileSystemAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#tags_all StoragegatewayFileSystemAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts">StoragegatewayFileSystemAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#gateway_arn StoragegatewayFileSystemAssociation#gateway_arn}.

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.locationArn"></a>

```csharp
public string LocationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#location_arn StoragegatewayFileSystemAssociation#location_arn}.

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#password StoragegatewayFileSystemAssociation#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#username StoragegatewayFileSystemAssociation#username}.

---

##### `AuditDestinationArn`<sup>Optional</sup> <a name="AuditDestinationArn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.auditDestinationArn"></a>

```csharp
public string AuditDestinationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#audit_destination_arn StoragegatewayFileSystemAssociation#audit_destination_arn}.

---

##### `CacheAttributes`<sup>Optional</sup> <a name="CacheAttributes" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.cacheAttributes"></a>

```csharp
public StoragegatewayFileSystemAssociationCacheAttributes CacheAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

cache_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#cache_attributes StoragegatewayFileSystemAssociation#cache_attributes}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#id StoragegatewayFileSystemAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#region StoragegatewayFileSystemAssociation#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#tags StoragegatewayFileSystemAssociation#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#tags_all StoragegatewayFileSystemAssociation#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationConfig.property.timeouts"></a>

```csharp
public StoragegatewayFileSystemAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts">StoragegatewayFileSystemAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#timeouts StoragegatewayFileSystemAssociation#timeouts}

---

### StoragegatewayFileSystemAssociationTimeouts <a name="StoragegatewayFileSystemAssociationTimeouts" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayFileSystemAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#create StoragegatewayFileSystemAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#delete StoragegatewayFileSystemAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#update StoragegatewayFileSystemAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#create StoragegatewayFileSystemAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#delete StoragegatewayFileSystemAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/storagegateway_file_system_association#update StoragegatewayFileSystemAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayFileSystemAssociationCacheAttributesOutputReference <a name="StoragegatewayFileSystemAssociationCacheAttributesOutputReference" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayFileSystemAssociationCacheAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds">ResetCacheStaleTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacheStaleTimeoutInSeconds` <a name="ResetCacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.resetCacheStaleTimeoutInSeconds"></a>

```csharp
private void ResetCacheStaleTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput">CacheStaleTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">CacheStaleTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheStaleTimeoutInSecondsInput`<sup>Optional</sup> <a name="CacheStaleTimeoutInSecondsInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSecondsInput"></a>

```csharp
public double CacheStaleTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `CacheStaleTimeoutInSeconds`<sup>Required</sup> <a name="CacheStaleTimeoutInSeconds" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```csharp
public double CacheStaleTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributesOutputReference.property.internalValue"></a>

```csharp
public StoragegatewayFileSystemAssociationCacheAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationCacheAttributes">StoragegatewayFileSystemAssociationCacheAttributes</a>

---


### StoragegatewayFileSystemAssociationTimeoutsOutputReference <a name="StoragegatewayFileSystemAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new StoragegatewayFileSystemAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.storagegatewayFileSystemAssociation.StoragegatewayFileSystemAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



