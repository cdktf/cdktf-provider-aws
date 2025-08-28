# `sagemakerFeatureGroup` Submodule <a name="`sagemakerFeatureGroup` Submodule" id="@cdktf/provider-aws.sagemakerFeatureGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerFeatureGroup <a name="SagemakerFeatureGroup" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group aws_sagemaker_feature_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroup(Construct Scope, string Id, SagemakerFeatureGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig">SagemakerFeatureGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig">SagemakerFeatureGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putFeatureDefinition">PutFeatureDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig">PutOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig">PutOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putThroughputConfig">PutThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOfflineStoreConfig">ResetOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOnlineStoreConfig">ResetOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetThroughputConfig">ResetThroughputConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFeatureDefinition` <a name="PutFeatureDefinition" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putFeatureDefinition"></a>

```csharp
private void PutFeatureDefinition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putFeatureDefinition.parameter.value"></a>

- *Type:* object

---

##### `PutOfflineStoreConfig` <a name="PutOfflineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig"></a>

```csharp
private void PutOfflineStoreConfig(SagemakerFeatureGroupOfflineStoreConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOfflineStoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

---

##### `PutOnlineStoreConfig` <a name="PutOnlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig"></a>

```csharp
private void PutOnlineStoreConfig(SagemakerFeatureGroupOnlineStoreConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putOnlineStoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

---

##### `PutThroughputConfig` <a name="PutThroughputConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putThroughputConfig"></a>

```csharp
private void PutThroughputConfig(SagemakerFeatureGroupThroughputConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.putThroughputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOfflineStoreConfig` <a name="ResetOfflineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOfflineStoreConfig"></a>

```csharp
private void ResetOfflineStoreConfig()
```

##### `ResetOnlineStoreConfig` <a name="ResetOnlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetOnlineStoreConfig"></a>

```csharp
private void ResetOnlineStoreConfig()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetThroughputConfig` <a name="ResetThroughputConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.resetThroughputConfig"></a>

```csharp
private void ResetThroughputConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerFeatureGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerFeatureGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerFeatureGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerFeatureGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerFeatureGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SagemakerFeatureGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerFeatureGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerFeatureGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerFeatureGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinition">FeatureDefinition</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList">SagemakerFeatureGroupFeatureDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfig">OfflineStoreConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfig">OnlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfig">ThroughputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference">SagemakerFeatureGroupThroughputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureNameInput">EventTimeFeatureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinitionInput">FeatureDefinitionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupNameInput">FeatureGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfigInput">OfflineStoreConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfigInput">OnlineStoreConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureNameInput">RecordIdentifierFeatureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfigInput">ThroughputConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureName">EventTimeFeatureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupName">FeatureGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureName">RecordIdentifierFeatureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FeatureDefinition`<sup>Required</sup> <a name="FeatureDefinition" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinition"></a>

```csharp
public SagemakerFeatureGroupFeatureDefinitionList FeatureDefinition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList">SagemakerFeatureGroupFeatureDefinitionList</a>

---

##### `OfflineStoreConfig`<sup>Required</sup> <a name="OfflineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfig"></a>

```csharp
public SagemakerFeatureGroupOfflineStoreConfigOutputReference OfflineStoreConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigOutputReference</a>

---

##### `OnlineStoreConfig`<sup>Required</sup> <a name="OnlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfig"></a>

```csharp
public SagemakerFeatureGroupOnlineStoreConfigOutputReference OnlineStoreConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigOutputReference</a>

---

##### `ThroughputConfig`<sup>Required</sup> <a name="ThroughputConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfig"></a>

```csharp
public SagemakerFeatureGroupThroughputConfigOutputReference ThroughputConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference">SagemakerFeatureGroupThroughputConfigOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventTimeFeatureNameInput`<sup>Optional</sup> <a name="EventTimeFeatureNameInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureNameInput"></a>

```csharp
public string EventTimeFeatureNameInput { get; }
```

- *Type:* string

---

##### `FeatureDefinitionInput`<sup>Optional</sup> <a name="FeatureDefinitionInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureDefinitionInput"></a>

```csharp
public object FeatureDefinitionInput { get; }
```

- *Type:* object

---

##### `FeatureGroupNameInput`<sup>Optional</sup> <a name="FeatureGroupNameInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupNameInput"></a>

```csharp
public string FeatureGroupNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OfflineStoreConfigInput`<sup>Optional</sup> <a name="OfflineStoreConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.offlineStoreConfigInput"></a>

```csharp
public SagemakerFeatureGroupOfflineStoreConfig OfflineStoreConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

---

##### `OnlineStoreConfigInput`<sup>Optional</sup> <a name="OnlineStoreConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.onlineStoreConfigInput"></a>

```csharp
public SagemakerFeatureGroupOnlineStoreConfig OnlineStoreConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

---

##### `RecordIdentifierFeatureNameInput`<sup>Optional</sup> <a name="RecordIdentifierFeatureNameInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureNameInput"></a>

```csharp
public string RecordIdentifierFeatureNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ThroughputConfigInput`<sup>Optional</sup> <a name="ThroughputConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.throughputConfigInput"></a>

```csharp
public SagemakerFeatureGroupThroughputConfig ThroughputConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EventTimeFeatureName`<sup>Required</sup> <a name="EventTimeFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.eventTimeFeatureName"></a>

```csharp
public string EventTimeFeatureName { get; }
```

- *Type:* string

---

##### `FeatureGroupName`<sup>Required</sup> <a name="FeatureGroupName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.featureGroupName"></a>

```csharp
public string FeatureGroupName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RecordIdentifierFeatureName`<sup>Required</sup> <a name="RecordIdentifierFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.recordIdentifierFeatureName"></a>

```csharp
public string RecordIdentifierFeatureName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerFeatureGroupConfig <a name="SagemakerFeatureGroupConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EventTimeFeatureName,
    object FeatureDefinition,
    string FeatureGroupName,
    string RecordIdentifierFeatureName,
    string RoleArn,
    string Description = null,
    string Id = null,
    SagemakerFeatureGroupOfflineStoreConfig OfflineStoreConfig = null,
    SagemakerFeatureGroupOnlineStoreConfig OnlineStoreConfig = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    SagemakerFeatureGroupThroughputConfig ThroughputConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.eventTimeFeatureName">EventTimeFeatureName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureDefinition">FeatureDefinition</a></code> | <code>object</code> | feature_definition block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureGroupName">FeatureGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#feature_group_name SagemakerFeatureGroup#feature_group_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.recordIdentifierFeatureName">RecordIdentifierFeatureName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#role_arn SagemakerFeatureGroup#role_arn}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#description SagemakerFeatureGroup#description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#id SagemakerFeatureGroup#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.offlineStoreConfig">OfflineStoreConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a></code> | offline_store_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.onlineStoreConfig">OnlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a></code> | online_store_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#tags SagemakerFeatureGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#tags_all SagemakerFeatureGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.throughputConfig">ThroughputConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a></code> | throughput_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EventTimeFeatureName`<sup>Required</sup> <a name="EventTimeFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.eventTimeFeatureName"></a>

```csharp
public string EventTimeFeatureName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}.

---

##### `FeatureDefinition`<sup>Required</sup> <a name="FeatureDefinition" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureDefinition"></a>

```csharp
public object FeatureDefinition { get; set; }
```

- *Type:* object

feature_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#feature_definition SagemakerFeatureGroup#feature_definition}

---

##### `FeatureGroupName`<sup>Required</sup> <a name="FeatureGroupName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.featureGroupName"></a>

```csharp
public string FeatureGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#feature_group_name SagemakerFeatureGroup#feature_group_name}.

---

##### `RecordIdentifierFeatureName`<sup>Required</sup> <a name="RecordIdentifierFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.recordIdentifierFeatureName"></a>

```csharp
public string RecordIdentifierFeatureName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#role_arn SagemakerFeatureGroup#role_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#description SagemakerFeatureGroup#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#id SagemakerFeatureGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OfflineStoreConfig`<sup>Optional</sup> <a name="OfflineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.offlineStoreConfig"></a>

```csharp
public SagemakerFeatureGroupOfflineStoreConfig OfflineStoreConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

offline_store_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#offline_store_config SagemakerFeatureGroup#offline_store_config}

---

##### `OnlineStoreConfig`<sup>Optional</sup> <a name="OnlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.onlineStoreConfig"></a>

```csharp
public SagemakerFeatureGroupOnlineStoreConfig OnlineStoreConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

online_store_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#online_store_config SagemakerFeatureGroup#online_store_config}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#region SagemakerFeatureGroup#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#tags SagemakerFeatureGroup#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#tags_all SagemakerFeatureGroup#tags_all}.

---

##### `ThroughputConfig`<sup>Optional</sup> <a name="ThroughputConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupConfig.property.throughputConfig"></a>

```csharp
public SagemakerFeatureGroupThroughputConfig ThroughputConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a>

throughput_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#throughput_config SagemakerFeatureGroup#throughput_config}

---

### SagemakerFeatureGroupFeatureDefinition <a name="SagemakerFeatureGroupFeatureDefinition" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupFeatureDefinition {
    SagemakerFeatureGroupFeatureDefinitionCollectionConfig CollectionConfig = null,
    string CollectionType = null,
    string FeatureName = null,
    string FeatureType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.collectionConfig">CollectionConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfig</a></code> | collection_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.collectionType">CollectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#collection_type SagemakerFeatureGroup#collection_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.featureName">FeatureName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#feature_name SagemakerFeatureGroup#feature_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.featureType">FeatureType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#feature_type SagemakerFeatureGroup#feature_type}. |

---

##### `CollectionConfig`<sup>Optional</sup> <a name="CollectionConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.collectionConfig"></a>

```csharp
public SagemakerFeatureGroupFeatureDefinitionCollectionConfig CollectionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfig</a>

collection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#collection_config SagemakerFeatureGroup#collection_config}

---

##### `CollectionType`<sup>Optional</sup> <a name="CollectionType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.collectionType"></a>

```csharp
public string CollectionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#collection_type SagemakerFeatureGroup#collection_type}.

---

##### `FeatureName`<sup>Optional</sup> <a name="FeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.featureName"></a>

```csharp
public string FeatureName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#feature_name SagemakerFeatureGroup#feature_name}.

---

##### `FeatureType`<sup>Optional</sup> <a name="FeatureType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinition.property.featureType"></a>

```csharp
public string FeatureType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#feature_type SagemakerFeatureGroup#feature_type}.

---

### SagemakerFeatureGroupFeatureDefinitionCollectionConfig <a name="SagemakerFeatureGroupFeatureDefinitionCollectionConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupFeatureDefinitionCollectionConfig {
    SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig VectorConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig.property.vectorConfig">VectorConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig</a></code> | vector_config block. |

---

##### `VectorConfig`<sup>Optional</sup> <a name="VectorConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig.property.vectorConfig"></a>

```csharp
public SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig VectorConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig</a>

vector_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#vector_config SagemakerFeatureGroup#vector_config}

---

### SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig <a name="SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig {
    double Dimension = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig.property.dimension">Dimension</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#dimension SagemakerFeatureGroup#dimension}. |

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig.property.dimension"></a>

```csharp
public double Dimension { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#dimension SagemakerFeatureGroup#dimension}.

---

### SagemakerFeatureGroupOfflineStoreConfig <a name="SagemakerFeatureGroupOfflineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupOfflineStoreConfig {
    SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig S3StorageConfig,
    SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig DataCatalogConfig = null,
    object DisableGlueTableCreation = null,
    string TableFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.s3StorageConfig">S3StorageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a></code> | s3_storage_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.dataCatalogConfig">DataCatalogConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a></code> | data_catalog_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.disableGlueTableCreation">DisableGlueTableCreation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.tableFormat">TableFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#table_format SagemakerFeatureGroup#table_format}. |

---

##### `S3StorageConfig`<sup>Required</sup> <a name="S3StorageConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.s3StorageConfig"></a>

```csharp
public SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig S3StorageConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

s3_storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#s3_storage_config SagemakerFeatureGroup#s3_storage_config}

---

##### `DataCatalogConfig`<sup>Optional</sup> <a name="DataCatalogConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.dataCatalogConfig"></a>

```csharp
public SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig DataCatalogConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

data_catalog_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#data_catalog_config SagemakerFeatureGroup#data_catalog_config}

---

##### `DisableGlueTableCreation`<sup>Optional</sup> <a name="DisableGlueTableCreation" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.disableGlueTableCreation"></a>

```csharp
public object DisableGlueTableCreation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}.

---

##### `TableFormat`<sup>Optional</sup> <a name="TableFormat" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig.property.tableFormat"></a>

```csharp
public string TableFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#table_format SagemakerFeatureGroup#table_format}.

---

### SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig <a name="SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig {
    string Catalog = null,
    string Database = null,
    string TableName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.catalog">Catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#catalog SagemakerFeatureGroup#catalog}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#database SagemakerFeatureGroup#database}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#table_name SagemakerFeatureGroup#table_name}. |

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#catalog SagemakerFeatureGroup#catalog}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#database SagemakerFeatureGroup#database}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#table_name SagemakerFeatureGroup#table_name}.

---

### SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig <a name="SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig {
    string S3Uri,
    string KmsKeyId = null,
    string ResolvedOutputS3Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.s3Uri">S3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#s3_uri SagemakerFeatureGroup#s3_uri}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.resolvedOutputS3Uri">ResolvedOutputS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#resolved_output_s3_uri SagemakerFeatureGroup#resolved_output_s3_uri}. |

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#s3_uri SagemakerFeatureGroup#s3_uri}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}.

---

##### `ResolvedOutputS3Uri`<sup>Optional</sup> <a name="ResolvedOutputS3Uri" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig.property.resolvedOutputS3Uri"></a>

```csharp
public string ResolvedOutputS3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#resolved_output_s3_uri SagemakerFeatureGroup#resolved_output_s3_uri}.

---

### SagemakerFeatureGroupOnlineStoreConfig <a name="SagemakerFeatureGroupOnlineStoreConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupOnlineStoreConfig {
    object EnableOnlineStore = null,
    SagemakerFeatureGroupOnlineStoreConfigSecurityConfig SecurityConfig = null,
    string StorageType = null,
    SagemakerFeatureGroupOnlineStoreConfigTtlDuration TtlDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.enableOnlineStore">EnableOnlineStore</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#enable_online_store SagemakerFeatureGroup#enable_online_store}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.securityConfig">SecurityConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a></code> | security_config block. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.storageType">StorageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#storage_type SagemakerFeatureGroup#storage_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.ttlDuration">TtlDuration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a></code> | ttl_duration block. |

---

##### `EnableOnlineStore`<sup>Optional</sup> <a name="EnableOnlineStore" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.enableOnlineStore"></a>

```csharp
public object EnableOnlineStore { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#enable_online_store SagemakerFeatureGroup#enable_online_store}.

---

##### `SecurityConfig`<sup>Optional</sup> <a name="SecurityConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.securityConfig"></a>

```csharp
public SagemakerFeatureGroupOnlineStoreConfigSecurityConfig SecurityConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

security_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#security_config SagemakerFeatureGroup#security_config}

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#storage_type SagemakerFeatureGroup#storage_type}.

---

##### `TtlDuration`<sup>Optional</sup> <a name="TtlDuration" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig.property.ttlDuration"></a>

```csharp
public SagemakerFeatureGroupOnlineStoreConfigTtlDuration TtlDuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a>

ttl_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#ttl_duration SagemakerFeatureGroup#ttl_duration}

---

### SagemakerFeatureGroupOnlineStoreConfigSecurityConfig <a name="SagemakerFeatureGroupOnlineStoreConfigSecurityConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupOnlineStoreConfigSecurityConfig {
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}.

---

### SagemakerFeatureGroupOnlineStoreConfigTtlDuration <a name="SagemakerFeatureGroupOnlineStoreConfigTtlDuration" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupOnlineStoreConfigTtlDuration {
    string Unit = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.unit">Unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#unit SagemakerFeatureGroup#unit}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#value SagemakerFeatureGroup#value}. |

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#unit SagemakerFeatureGroup#unit}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#value SagemakerFeatureGroup#value}.

---

### SagemakerFeatureGroupThroughputConfig <a name="SagemakerFeatureGroupThroughputConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupThroughputConfig {
    double ProvisionedReadCapacityUnits = null,
    double ProvisionedWriteCapacityUnits = null,
    string ThroughputMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedReadCapacityUnits">ProvisionedReadCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#provisioned_read_capacity_units SagemakerFeatureGroup#provisioned_read_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedWriteCapacityUnits">ProvisionedWriteCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#provisioned_write_capacity_units SagemakerFeatureGroup#provisioned_write_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.throughputMode">ThroughputMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#throughput_mode SagemakerFeatureGroup#throughput_mode}. |

---

##### `ProvisionedReadCapacityUnits`<sup>Optional</sup> <a name="ProvisionedReadCapacityUnits" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedReadCapacityUnits"></a>

```csharp
public double ProvisionedReadCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#provisioned_read_capacity_units SagemakerFeatureGroup#provisioned_read_capacity_units}.

---

##### `ProvisionedWriteCapacityUnits`<sup>Optional</sup> <a name="ProvisionedWriteCapacityUnits" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.provisionedWriteCapacityUnits"></a>

```csharp
public double ProvisionedWriteCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#provisioned_write_capacity_units SagemakerFeatureGroup#provisioned_write_capacity_units}.

---

##### `ThroughputMode`<sup>Optional</sup> <a name="ThroughputMode" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig.property.throughputMode"></a>

```csharp
public string ThroughputMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/sagemaker_feature_group#throughput_mode SagemakerFeatureGroup#throughput_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference <a name="SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.putVectorConfig">PutVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.resetVectorConfig">ResetVectorConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVectorConfig` <a name="PutVectorConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.putVectorConfig"></a>

```csharp
private void PutVectorConfig(SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.putVectorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig</a>

---

##### `ResetVectorConfig` <a name="ResetVectorConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.resetVectorConfig"></a>

```csharp
private void ResetVectorConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.vectorConfig">VectorConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.vectorConfigInput">VectorConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VectorConfig`<sup>Required</sup> <a name="VectorConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.vectorConfig"></a>

```csharp
public SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference VectorConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference</a>

---

##### `VectorConfigInput`<sup>Optional</sup> <a name="VectorConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.vectorConfigInput"></a>

```csharp
public SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig VectorConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerFeatureGroupFeatureDefinitionCollectionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfig</a>

---


### SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference <a name="SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.resetDimension"></a>

```csharp
private void ResetDimension()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.dimension">Dimension</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.dimensionInput"></a>

```csharp
public double DimensionInput { get; }
```

- *Type:* double

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.dimension"></a>

```csharp
public double Dimension { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig</a>

---


### SagemakerFeatureGroupFeatureDefinitionList <a name="SagemakerFeatureGroupFeatureDefinitionList" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupFeatureDefinitionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.get"></a>

```csharp
private SagemakerFeatureGroupFeatureDefinitionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerFeatureGroupFeatureDefinitionOutputReference <a name="SagemakerFeatureGroupFeatureDefinitionOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupFeatureDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.putCollectionConfig">PutCollectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetCollectionConfig">ResetCollectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetCollectionType">ResetCollectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetFeatureName">ResetFeatureName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetFeatureType">ResetFeatureType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCollectionConfig` <a name="PutCollectionConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.putCollectionConfig"></a>

```csharp
private void PutCollectionConfig(SagemakerFeatureGroupFeatureDefinitionCollectionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.putCollectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfig</a>

---

##### `ResetCollectionConfig` <a name="ResetCollectionConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetCollectionConfig"></a>

```csharp
private void ResetCollectionConfig()
```

##### `ResetCollectionType` <a name="ResetCollectionType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetCollectionType"></a>

```csharp
private void ResetCollectionType()
```

##### `ResetFeatureName` <a name="ResetFeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetFeatureName"></a>

```csharp
private void ResetFeatureName()
```

##### `ResetFeatureType` <a name="ResetFeatureType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.resetFeatureType"></a>

```csharp
private void ResetFeatureType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionConfig">CollectionConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference">SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionConfigInput">CollectionConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionTypeInput">CollectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureNameInput">FeatureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureTypeInput">FeatureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionType">CollectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureName">FeatureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureType">FeatureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CollectionConfig`<sup>Required</sup> <a name="CollectionConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionConfig"></a>

```csharp
public SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference CollectionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference">SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference</a>

---

##### `CollectionConfigInput`<sup>Optional</sup> <a name="CollectionConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionConfigInput"></a>

```csharp
public SagemakerFeatureGroupFeatureDefinitionCollectionConfig CollectionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionCollectionConfig">SagemakerFeatureGroupFeatureDefinitionCollectionConfig</a>

---

##### `CollectionTypeInput`<sup>Optional</sup> <a name="CollectionTypeInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionTypeInput"></a>

```csharp
public string CollectionTypeInput { get; }
```

- *Type:* string

---

##### `FeatureNameInput`<sup>Optional</sup> <a name="FeatureNameInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureNameInput"></a>

```csharp
public string FeatureNameInput { get; }
```

- *Type:* string

---

##### `FeatureTypeInput`<sup>Optional</sup> <a name="FeatureTypeInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureTypeInput"></a>

```csharp
public string FeatureTypeInput { get; }
```

- *Type:* string

---

##### `CollectionType`<sup>Required</sup> <a name="CollectionType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.collectionType"></a>

```csharp
public string CollectionType { get; }
```

- *Type:* string

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureName"></a>

```csharp
public string FeatureName { get; }
```

- *Type:* string

---

##### `FeatureType`<sup>Required</sup> <a name="FeatureType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.featureType"></a>

```csharp
public string FeatureType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupFeatureDefinitionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference <a name="SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

---


### SagemakerFeatureGroupOfflineStoreConfigOutputReference <a name="SagemakerFeatureGroupOfflineStoreConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupOfflineStoreConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig">PutDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig">PutS3StorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDataCatalogConfig">ResetDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDisableGlueTableCreation">ResetDisableGlueTableCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetTableFormat">ResetTableFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataCatalogConfig` <a name="PutDataCatalogConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig"></a>

```csharp
private void PutDataCatalogConfig(SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putDataCatalogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

---

##### `PutS3StorageConfig` <a name="PutS3StorageConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig"></a>

```csharp
private void PutS3StorageConfig(SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.putS3StorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

---

##### `ResetDataCatalogConfig` <a name="ResetDataCatalogConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDataCatalogConfig"></a>

```csharp
private void ResetDataCatalogConfig()
```

##### `ResetDisableGlueTableCreation` <a name="ResetDisableGlueTableCreation" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetDisableGlueTableCreation"></a>

```csharp
private void ResetDisableGlueTableCreation()
```

##### `ResetTableFormat` <a name="ResetTableFormat" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.resetTableFormat"></a>

```csharp
private void ResetTableFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfig">DataCatalogConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfig">S3StorageConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfigInput">DataCatalogConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreationInput">DisableGlueTableCreationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfigInput">S3StorageConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormatInput">TableFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreation">DisableGlueTableCreation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormat">TableFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataCatalogConfig`<sup>Required</sup> <a name="DataCatalogConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfig"></a>

```csharp
public SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference DataCatalogConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference</a>

---

##### `S3StorageConfig`<sup>Required</sup> <a name="S3StorageConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfig"></a>

```csharp
public SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference S3StorageConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference</a>

---

##### `DataCatalogConfigInput`<sup>Optional</sup> <a name="DataCatalogConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.dataCatalogConfigInput"></a>

```csharp
public SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig DataCatalogConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig">SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig</a>

---

##### `DisableGlueTableCreationInput`<sup>Optional</sup> <a name="DisableGlueTableCreationInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreationInput"></a>

```csharp
public object DisableGlueTableCreationInput { get; }
```

- *Type:* object

---

##### `S3StorageConfigInput`<sup>Optional</sup> <a name="S3StorageConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.s3StorageConfigInput"></a>

```csharp
public SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig S3StorageConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

---

##### `TableFormatInput`<sup>Optional</sup> <a name="TableFormatInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormatInput"></a>

```csharp
public string TableFormatInput { get; }
```

- *Type:* string

---

##### `DisableGlueTableCreation`<sup>Required</sup> <a name="DisableGlueTableCreation" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.disableGlueTableCreation"></a>

```csharp
public object DisableGlueTableCreation { get; }
```

- *Type:* object

---

##### `TableFormat`<sup>Required</sup> <a name="TableFormat" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.tableFormat"></a>

```csharp
public string TableFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerFeatureGroupOfflineStoreConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfig">SagemakerFeatureGroupOfflineStoreConfig</a>

---


### SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference <a name="SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetResolvedOutputS3Uri">ResetResolvedOutputS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetResolvedOutputS3Uri` <a name="ResetResolvedOutputS3Uri" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.resetResolvedOutputS3Uri"></a>

```csharp
private void ResetResolvedOutputS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.resolvedOutputS3UriInput">ResolvedOutputS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.resolvedOutputS3Uri">ResolvedOutputS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ResolvedOutputS3UriInput`<sup>Optional</sup> <a name="ResolvedOutputS3UriInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.resolvedOutputS3UriInput"></a>

```csharp
public string ResolvedOutputS3UriInput { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `ResolvedOutputS3Uri`<sup>Required</sup> <a name="ResolvedOutputS3Uri" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.resolvedOutputS3Uri"></a>

```csharp
public string ResolvedOutputS3Uri { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig">SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig</a>

---


### SagemakerFeatureGroupOnlineStoreConfigOutputReference <a name="SagemakerFeatureGroupOnlineStoreConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupOnlineStoreConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putSecurityConfig">PutSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putTtlDuration">PutTtlDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetEnableOnlineStore">ResetEnableOnlineStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetSecurityConfig">ResetSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetTtlDuration">ResetTtlDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecurityConfig` <a name="PutSecurityConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putSecurityConfig"></a>

```csharp
private void PutSecurityConfig(SagemakerFeatureGroupOnlineStoreConfigSecurityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

---

##### `PutTtlDuration` <a name="PutTtlDuration" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putTtlDuration"></a>

```csharp
private void PutTtlDuration(SagemakerFeatureGroupOnlineStoreConfigTtlDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.putTtlDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a>

---

##### `ResetEnableOnlineStore` <a name="ResetEnableOnlineStore" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetEnableOnlineStore"></a>

```csharp
private void ResetEnableOnlineStore()
```

##### `ResetSecurityConfig` <a name="ResetSecurityConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetSecurityConfig"></a>

```csharp
private void ResetSecurityConfig()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

##### `ResetTtlDuration` <a name="ResetTtlDuration" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.resetTtlDuration"></a>

```csharp
private void ResetTtlDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfig">SecurityConfig</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDuration">TtlDuration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference">SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStoreInput">EnableOnlineStoreInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfigInput">SecurityConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDurationInput">TtlDurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStore">EnableOnlineStore</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityConfig`<sup>Required</sup> <a name="SecurityConfig" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfig"></a>

```csharp
public SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference SecurityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference">SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference</a>

---

##### `TtlDuration`<sup>Required</sup> <a name="TtlDuration" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDuration"></a>

```csharp
public SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference TtlDuration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference">SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference</a>

---

##### `EnableOnlineStoreInput`<sup>Optional</sup> <a name="EnableOnlineStoreInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStoreInput"></a>

```csharp
public object EnableOnlineStoreInput { get; }
```

- *Type:* object

---

##### `SecurityConfigInput`<sup>Optional</sup> <a name="SecurityConfigInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.securityConfigInput"></a>

```csharp
public SagemakerFeatureGroupOnlineStoreConfigSecurityConfig SecurityConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `TtlDurationInput`<sup>Optional</sup> <a name="TtlDurationInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.ttlDurationInput"></a>

```csharp
public SagemakerFeatureGroupOnlineStoreConfigTtlDuration TtlDurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a>

---

##### `EnableOnlineStore`<sup>Required</sup> <a name="EnableOnlineStore" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.enableOnlineStore"></a>

```csharp
public object EnableOnlineStore { get; }
```

- *Type:* object

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerFeatureGroupOnlineStoreConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfig">SagemakerFeatureGroupOnlineStoreConfig</a>

---


### SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference <a name="SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerFeatureGroupOnlineStoreConfigSecurityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigSecurityConfig">SagemakerFeatureGroupOnlineStoreConfigSecurityConfig</a>

---


### SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference <a name="SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference.property.internalValue"></a>

```csharp
public SagemakerFeatureGroupOnlineStoreConfigTtlDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupOnlineStoreConfigTtlDuration">SagemakerFeatureGroupOnlineStoreConfigTtlDuration</a>

---


### SagemakerFeatureGroupThroughputConfigOutputReference <a name="SagemakerFeatureGroupThroughputConfigOutputReference" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerFeatureGroupThroughputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedReadCapacityUnits">ResetProvisionedReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedWriteCapacityUnits">ResetProvisionedWriteCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetThroughputMode">ResetThroughputMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProvisionedReadCapacityUnits` <a name="ResetProvisionedReadCapacityUnits" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedReadCapacityUnits"></a>

```csharp
private void ResetProvisionedReadCapacityUnits()
```

##### `ResetProvisionedWriteCapacityUnits` <a name="ResetProvisionedWriteCapacityUnits" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetProvisionedWriteCapacityUnits"></a>

```csharp
private void ResetProvisionedWriteCapacityUnits()
```

##### `ResetThroughputMode` <a name="ResetThroughputMode" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.resetThroughputMode"></a>

```csharp
private void ResetThroughputMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnitsInput">ProvisionedReadCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnitsInput">ProvisionedWriteCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputModeInput">ThroughputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnits">ProvisionedReadCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnits">ProvisionedWriteCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputMode">ThroughputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProvisionedReadCapacityUnitsInput`<sup>Optional</sup> <a name="ProvisionedReadCapacityUnitsInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnitsInput"></a>

```csharp
public double ProvisionedReadCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `ProvisionedWriteCapacityUnitsInput`<sup>Optional</sup> <a name="ProvisionedWriteCapacityUnitsInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnitsInput"></a>

```csharp
public double ProvisionedWriteCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `ThroughputModeInput`<sup>Optional</sup> <a name="ThroughputModeInput" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputModeInput"></a>

```csharp
public string ThroughputModeInput { get; }
```

- *Type:* string

---

##### `ProvisionedReadCapacityUnits`<sup>Required</sup> <a name="ProvisionedReadCapacityUnits" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedReadCapacityUnits"></a>

```csharp
public double ProvisionedReadCapacityUnits { get; }
```

- *Type:* double

---

##### `ProvisionedWriteCapacityUnits`<sup>Required</sup> <a name="ProvisionedWriteCapacityUnits" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.provisionedWriteCapacityUnits"></a>

```csharp
public double ProvisionedWriteCapacityUnits { get; }
```

- *Type:* double

---

##### `ThroughputMode`<sup>Required</sup> <a name="ThroughputMode" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.throughputMode"></a>

```csharp
public string ThroughputMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfigOutputReference.property.internalValue"></a>

```csharp
public SagemakerFeatureGroupThroughputConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerFeatureGroup.SagemakerFeatureGroupThroughputConfig">SagemakerFeatureGroupThroughputConfig</a>

---



