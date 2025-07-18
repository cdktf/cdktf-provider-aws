# `batchComputeEnvironment` Submodule <a name="`batchComputeEnvironment` Submodule" id="@cdktf/provider-aws.batchComputeEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchComputeEnvironment <a name="BatchComputeEnvironment" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment aws_batch_compute_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchComputeEnvironment(Construct Scope, string Id, BatchComputeEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig">BatchComputeEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig">BatchComputeEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources">PutComputeResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration">PutEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetComputeResources">ResetComputeResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetEksConfiguration">ResetEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetServiceRole">ResetServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComputeResources` <a name="PutComputeResources" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources"></a>

```csharp
private void PutComputeResources(BatchComputeEnvironmentComputeResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putComputeResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

---

##### `PutEksConfiguration` <a name="PutEksConfiguration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration"></a>

```csharp
private void PutEksConfiguration(BatchComputeEnvironmentEksConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putEksConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy"></a>

```csharp
private void PutUpdatePolicy(BatchComputeEnvironmentUpdatePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

---

##### `ResetComputeResources` <a name="ResetComputeResources" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetComputeResources"></a>

```csharp
private void ResetComputeResources()
```

##### `ResetEksConfiguration` <a name="ResetEksConfiguration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetEksConfiguration"></a>

```csharp
private void ResetEksConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServiceRole` <a name="ResetServiceRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetServiceRole"></a>

```csharp
private void ResetServiceRole()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.resetUpdatePolicy"></a>

```csharp
private void ResetUpdatePolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BatchComputeEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BatchComputeEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BatchComputeEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BatchComputeEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BatchComputeEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BatchComputeEnvironment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BatchComputeEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BatchComputeEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BatchComputeEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.computeResources">ComputeResources</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference">BatchComputeEnvironmentComputeResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.ecsClusterArn">EcsClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfiguration">EksConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference">BatchComputeEnvironmentEksConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference">BatchComputeEnvironmentUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.computeResourcesInput">ComputeResourcesInput</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfigurationInput">EksConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRoleInput">ServiceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRole">ServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ComputeResources`<sup>Required</sup> <a name="ComputeResources" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.computeResources"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesOutputReference ComputeResources { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference">BatchComputeEnvironmentComputeResourcesOutputReference</a>

---

##### `EcsClusterArn`<sup>Required</sup> <a name="EcsClusterArn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.ecsClusterArn"></a>

```csharp
public string EcsClusterArn { get; }
```

- *Type:* string

---

##### `EksConfiguration`<sup>Required</sup> <a name="EksConfiguration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfiguration"></a>

```csharp
public BatchComputeEnvironmentEksConfigurationOutputReference EksConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference">BatchComputeEnvironmentEksConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicy"></a>

```csharp
public BatchComputeEnvironmentUpdatePolicyOutputReference UpdatePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference">BatchComputeEnvironmentUpdatePolicyOutputReference</a>

---

##### `ComputeResourcesInput`<sup>Optional</sup> <a name="ComputeResourcesInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.computeResourcesInput"></a>

```csharp
public BatchComputeEnvironmentComputeResources ComputeResourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

---

##### `EksConfigurationInput`<sup>Optional</sup> <a name="EksConfigurationInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.eksConfigurationInput"></a>

```csharp
public BatchComputeEnvironmentEksConfiguration EksConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceRoleInput`<sup>Optional</sup> <a name="ServiceRoleInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRoleInput"></a>

```csharp
public string ServiceRoleInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.updatePolicyInput"></a>

```csharp
public BatchComputeEnvironmentUpdatePolicy UpdatePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.serviceRole"></a>

```csharp
public string ServiceRole { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchComputeEnvironmentComputeResources <a name="BatchComputeEnvironmentComputeResources" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchComputeEnvironmentComputeResources {
    double MaxVcpus,
    string[] Subnets,
    string Type,
    string AllocationStrategy = null,
    double BidPercentage = null,
    double DesiredVcpus = null,
    object Ec2Configuration = null,
    string Ec2KeyPair = null,
    string ImageId = null,
    string InstanceRole = null,
    string[] InstanceType = null,
    BatchComputeEnvironmentComputeResourcesLaunchTemplate LaunchTemplate = null,
    double MinVcpus = null,
    string PlacementGroup = null,
    string[] SecurityGroupIds = null,
    string SpotIamFleetRole = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.maxVcpus">MaxVcpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#max_vcpus BatchComputeEnvironment#max_vcpus}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#allocation_strategy BatchComputeEnvironment#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.bidPercentage">BidPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#bid_percentage BatchComputeEnvironment#bid_percentage}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.desiredVcpus">DesiredVcpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#desired_vcpus BatchComputeEnvironment#desired_vcpus}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2Configuration">Ec2Configuration</a></code> | <code>object</code> | ec2_configuration block. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2KeyPair">Ec2KeyPair</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#ec2_key_pair BatchComputeEnvironment#ec2_key_pair}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.imageId">ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#image_id BatchComputeEnvironment#image_id}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceRole">InstanceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#instance_role BatchComputeEnvironment#instance_role}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceType">InstanceType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#instance_type BatchComputeEnvironment#instance_type}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.minVcpus">MinVcpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#min_vcpus BatchComputeEnvironment#min_vcpus}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.placementGroup">PlacementGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#placement_group BatchComputeEnvironment#placement_group}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#security_group_ids BatchComputeEnvironment#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.spotIamFleetRole">SpotIamFleetRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}. |

---

##### `MaxVcpus`<sup>Required</sup> <a name="MaxVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.maxVcpus"></a>

```csharp
public double MaxVcpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#max_vcpus BatchComputeEnvironment#max_vcpus}.

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#subnets BatchComputeEnvironment#subnets}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}.

---

##### `AllocationStrategy`<sup>Optional</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#allocation_strategy BatchComputeEnvironment#allocation_strategy}.

---

##### `BidPercentage`<sup>Optional</sup> <a name="BidPercentage" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.bidPercentage"></a>

```csharp
public double BidPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#bid_percentage BatchComputeEnvironment#bid_percentage}.

---

##### `DesiredVcpus`<sup>Optional</sup> <a name="DesiredVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.desiredVcpus"></a>

```csharp
public double DesiredVcpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#desired_vcpus BatchComputeEnvironment#desired_vcpus}.

---

##### `Ec2Configuration`<sup>Optional</sup> <a name="Ec2Configuration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2Configuration"></a>

```csharp
public object Ec2Configuration { get; set; }
```

- *Type:* object

ec2_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#ec2_configuration BatchComputeEnvironment#ec2_configuration}

---

##### `Ec2KeyPair`<sup>Optional</sup> <a name="Ec2KeyPair" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.ec2KeyPair"></a>

```csharp
public string Ec2KeyPair { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#ec2_key_pair BatchComputeEnvironment#ec2_key_pair}.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#image_id BatchComputeEnvironment#image_id}.

---

##### `InstanceRole`<sup>Optional</sup> <a name="InstanceRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceRole"></a>

```csharp
public string InstanceRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#instance_role BatchComputeEnvironment#instance_role}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.instanceType"></a>

```csharp
public string[] InstanceType { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#instance_type BatchComputeEnvironment#instance_type}.

---

##### `LaunchTemplate`<sup>Optional</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.launchTemplate"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesLaunchTemplate LaunchTemplate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#launch_template BatchComputeEnvironment#launch_template}

---

##### `MinVcpus`<sup>Optional</sup> <a name="MinVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.minVcpus"></a>

```csharp
public double MinVcpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#min_vcpus BatchComputeEnvironment#min_vcpus}.

---

##### `PlacementGroup`<sup>Optional</sup> <a name="PlacementGroup" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.placementGroup"></a>

```csharp
public string PlacementGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#placement_group BatchComputeEnvironment#placement_group}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#security_group_ids BatchComputeEnvironment#security_group_ids}.

---

##### `SpotIamFleetRole`<sup>Optional</sup> <a name="SpotIamFleetRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.spotIamFleetRole"></a>

```csharp
public string SpotIamFleetRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}.

---

### BatchComputeEnvironmentComputeResourcesEc2Configuration <a name="BatchComputeEnvironmentComputeResourcesEc2Configuration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchComputeEnvironmentComputeResourcesEc2Configuration {
    string ImageIdOverride = null,
    string ImageType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageIdOverride">ImageIdOverride</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#image_id_override BatchComputeEnvironment#image_id_override}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageType">ImageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#image_type BatchComputeEnvironment#image_type}. |

---

##### `ImageIdOverride`<sup>Optional</sup> <a name="ImageIdOverride" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageIdOverride"></a>

```csharp
public string ImageIdOverride { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#image_id_override BatchComputeEnvironment#image_id_override}.

---

##### `ImageType`<sup>Optional</sup> <a name="ImageType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2Configuration.property.imageType"></a>

```csharp
public string ImageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#image_type BatchComputeEnvironment#image_type}.

---

### BatchComputeEnvironmentComputeResourcesLaunchTemplate <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplate" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchComputeEnvironmentComputeResourcesLaunchTemplate {
    string LaunchTemplateId = null,
    string LaunchTemplateName = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}. |

---

##### `LaunchTemplateId`<sup>Optional</sup> <a name="LaunchTemplateId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#launch_template_id BatchComputeEnvironment#launch_template_id}.

---

##### `LaunchTemplateName`<sup>Optional</sup> <a name="LaunchTemplateName" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#launch_template_name BatchComputeEnvironment#launch_template_name}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#version BatchComputeEnvironment#version}.

---

### BatchComputeEnvironmentConfig <a name="BatchComputeEnvironmentConfig" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchComputeEnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Type,
    BatchComputeEnvironmentComputeResources ComputeResources = null,
    BatchComputeEnvironmentEksConfiguration EksConfiguration = null,
    string Id = null,
    string Name = null,
    string NamePrefix = null,
    string Region = null,
    string ServiceRole = null,
    string State = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    BatchComputeEnvironmentUpdatePolicy UpdatePolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeResources">ComputeResources</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | compute_resources block. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.eksConfiguration">EksConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | eks_configuration block. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#id BatchComputeEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#name BatchComputeEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#name_prefix BatchComputeEnvironment#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.serviceRole">ServiceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#tags_all BatchComputeEnvironment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | update_policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#type BatchComputeEnvironment#type}.

---

##### `ComputeResources`<sup>Optional</sup> <a name="ComputeResources" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.computeResources"></a>

```csharp
public BatchComputeEnvironmentComputeResources ComputeResources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

compute_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#compute_resources BatchComputeEnvironment#compute_resources}

---

##### `EksConfiguration`<sup>Optional</sup> <a name="EksConfiguration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.eksConfiguration"></a>

```csharp
public BatchComputeEnvironmentEksConfiguration EksConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

eks_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#eks_configuration BatchComputeEnvironment#eks_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#id BatchComputeEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#name BatchComputeEnvironment#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#name_prefix BatchComputeEnvironment#name_prefix}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#region BatchComputeEnvironment#region}

---

##### `ServiceRole`<sup>Optional</sup> <a name="ServiceRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.serviceRole"></a>

```csharp
public string ServiceRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#service_role BatchComputeEnvironment#service_role}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#state BatchComputeEnvironment#state}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#tags BatchComputeEnvironment#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#tags_all BatchComputeEnvironment#tags_all}.

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentConfig.property.updatePolicy"></a>

```csharp
public BatchComputeEnvironmentUpdatePolicy UpdatePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#update_policy BatchComputeEnvironment#update_policy}

---

### BatchComputeEnvironmentEksConfiguration <a name="BatchComputeEnvironmentEksConfiguration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchComputeEnvironmentEksConfiguration {
    string EksClusterArn,
    string KubernetesNamespace
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.eksClusterArn">EksClusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#eks_cluster_arn BatchComputeEnvironment#eks_cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#kubernetes_namespace BatchComputeEnvironment#kubernetes_namespace}. |

---

##### `EksClusterArn`<sup>Required</sup> <a name="EksClusterArn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.eksClusterArn"></a>

```csharp
public string EksClusterArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#eks_cluster_arn BatchComputeEnvironment#eks_cluster_arn}.

---

##### `KubernetesNamespace`<sup>Required</sup> <a name="KubernetesNamespace" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration.property.kubernetesNamespace"></a>

```csharp
public string KubernetesNamespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#kubernetes_namespace BatchComputeEnvironment#kubernetes_namespace}.

---

### BatchComputeEnvironmentUpdatePolicy <a name="BatchComputeEnvironmentUpdatePolicy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchComputeEnvironmentUpdatePolicy {
    double JobExecutionTimeoutMinutes,
    object TerminateJobsOnUpdate
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.jobExecutionTimeoutMinutes">JobExecutionTimeoutMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#job_execution_timeout_minutes BatchComputeEnvironment#job_execution_timeout_minutes}. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.terminateJobsOnUpdate">TerminateJobsOnUpdate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#terminate_jobs_on_update BatchComputeEnvironment#terminate_jobs_on_update}. |

---

##### `JobExecutionTimeoutMinutes`<sup>Required</sup> <a name="JobExecutionTimeoutMinutes" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.jobExecutionTimeoutMinutes"></a>

```csharp
public double JobExecutionTimeoutMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#job_execution_timeout_minutes BatchComputeEnvironment#job_execution_timeout_minutes}.

---

##### `TerminateJobsOnUpdate`<sup>Required</sup> <a name="TerminateJobsOnUpdate" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy.property.terminateJobsOnUpdate"></a>

```csharp
public object TerminateJobsOnUpdate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/batch_compute_environment#terminate_jobs_on_update BatchComputeEnvironment#terminate_jobs_on_update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchComputeEnvironmentComputeResourcesEc2ConfigurationList <a name="BatchComputeEnvironmentComputeResourcesEc2ConfigurationList" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchComputeEnvironmentComputeResourcesEc2ConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get"></a>

```csharp
private BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference <a name="BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageIdOverride">ResetImageIdOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageType">ResetImageType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageIdOverride` <a name="ResetImageIdOverride" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageIdOverride"></a>

```csharp
private void ResetImageIdOverride()
```

##### `ResetImageType` <a name="ResetImageType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.resetImageType"></a>

```csharp
private void ResetImageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverrideInput">ImageIdOverrideInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageTypeInput">ImageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverride">ImageIdOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageType">ImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageIdOverrideInput`<sup>Optional</sup> <a name="ImageIdOverrideInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverrideInput"></a>

```csharp
public string ImageIdOverrideInput { get; }
```

- *Type:* string

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageTypeInput"></a>

```csharp
public string ImageTypeInput { get; }
```

- *Type:* string

---

##### `ImageIdOverride`<sup>Required</sup> <a name="ImageIdOverride" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageIdOverride"></a>

```csharp
public string ImageIdOverride { get; }
```

- *Type:* string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.imageType"></a>

```csharp
public string ImageType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference <a name="BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateId">ResetLaunchTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateName">ResetLaunchTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLaunchTemplateId` <a name="ResetLaunchTemplateId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateId"></a>

```csharp
private void ResetLaunchTemplateId()
```

##### `ResetLaunchTemplateName` <a name="ResetLaunchTemplateName" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetLaunchTemplateName"></a>

```csharp
private void ResetLaunchTemplateName()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateIdInput">LaunchTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateNameInput">LaunchTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchTemplateIdInput`<sup>Optional</sup> <a name="LaunchTemplateIdInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateIdInput"></a>

```csharp
public string LaunchTemplateIdInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateNameInput`<sup>Optional</sup> <a name="LaunchTemplateNameInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateNameInput"></a>

```csharp
public string LaunchTemplateNameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateId"></a>

```csharp
public string LaunchTemplateId { get; }
```

- *Type:* string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.launchTemplateName"></a>

```csharp
public string LaunchTemplateName { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference.property.internalValue"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesLaunchTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---


### BatchComputeEnvironmentComputeResourcesOutputReference <a name="BatchComputeEnvironmentComputeResourcesOutputReference" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchComputeEnvironmentComputeResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putEc2Configuration">PutEc2Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate">PutLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetAllocationStrategy">ResetAllocationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetBidPercentage">ResetBidPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetDesiredVcpus">ResetDesiredVcpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2Configuration">ResetEc2Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2KeyPair">ResetEc2KeyPair</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceRole">ResetInstanceRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetLaunchTemplate">ResetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMinVcpus">ResetMinVcpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetPlacementGroup">ResetPlacementGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSpotIamFleetRole">ResetSpotIamFleetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEc2Configuration` <a name="PutEc2Configuration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putEc2Configuration"></a>

```csharp
private void PutEc2Configuration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putEc2Configuration.parameter.value"></a>

- *Type:* object

---

##### `PutLaunchTemplate` <a name="PutLaunchTemplate" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate"></a>

```csharp
private void PutLaunchTemplate(BatchComputeEnvironmentComputeResourcesLaunchTemplate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---

##### `ResetAllocationStrategy` <a name="ResetAllocationStrategy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetAllocationStrategy"></a>

```csharp
private void ResetAllocationStrategy()
```

##### `ResetBidPercentage` <a name="ResetBidPercentage" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetBidPercentage"></a>

```csharp
private void ResetBidPercentage()
```

##### `ResetDesiredVcpus` <a name="ResetDesiredVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetDesiredVcpus"></a>

```csharp
private void ResetDesiredVcpus()
```

##### `ResetEc2Configuration` <a name="ResetEc2Configuration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2Configuration"></a>

```csharp
private void ResetEc2Configuration()
```

##### `ResetEc2KeyPair` <a name="ResetEc2KeyPair" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetEc2KeyPair"></a>

```csharp
private void ResetEc2KeyPair()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetImageId"></a>

```csharp
private void ResetImageId()
```

##### `ResetInstanceRole` <a name="ResetInstanceRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceRole"></a>

```csharp
private void ResetInstanceRole()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetLaunchTemplate` <a name="ResetLaunchTemplate" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetLaunchTemplate"></a>

```csharp
private void ResetLaunchTemplate()
```

##### `ResetMinVcpus` <a name="ResetMinVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetMinVcpus"></a>

```csharp
private void ResetMinVcpus()
```

##### `ResetPlacementGroup` <a name="ResetPlacementGroup" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetPlacementGroup"></a>

```csharp
private void ResetPlacementGroup()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSpotIamFleetRole` <a name="ResetSpotIamFleetRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetSpotIamFleetRole"></a>

```csharp
private void ResetSpotIamFleetRole()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2Configuration">Ec2Configuration</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList">BatchComputeEnvironmentComputeResourcesEc2ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference">BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentageInput">BidPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredVcpusInput">DesiredVcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2ConfigurationInput">Ec2ConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPairInput">Ec2KeyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRoleInput">InstanceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplateInput">LaunchTemplateInput</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxVcpusInput">MaxVcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minVcpusInput">MinVcpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroupInput">PlacementGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRoleInput">SpotIamFleetRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentage">BidPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredVcpus">DesiredVcpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPair">Ec2KeyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRole">InstanceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceType">InstanceType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxVcpus">MaxVcpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minVcpus">MinVcpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroup">PlacementGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRole">SpotIamFleetRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ec2Configuration`<sup>Required</sup> <a name="Ec2Configuration" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2Configuration"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesEc2ConfigurationList Ec2Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesEc2ConfigurationList">BatchComputeEnvironmentComputeResourcesEc2ConfigurationList</a>

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplate"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference LaunchTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference">BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference</a>

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategyInput"></a>

```csharp
public string AllocationStrategyInput { get; }
```

- *Type:* string

---

##### `BidPercentageInput`<sup>Optional</sup> <a name="BidPercentageInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentageInput"></a>

```csharp
public double BidPercentageInput { get; }
```

- *Type:* double

---

##### `DesiredVcpusInput`<sup>Optional</sup> <a name="DesiredVcpusInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredVcpusInput"></a>

```csharp
public double DesiredVcpusInput { get; }
```

- *Type:* double

---

##### `Ec2ConfigurationInput`<sup>Optional</sup> <a name="Ec2ConfigurationInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2ConfigurationInput"></a>

```csharp
public object Ec2ConfigurationInput { get; }
```

- *Type:* object

---

##### `Ec2KeyPairInput`<sup>Optional</sup> <a name="Ec2KeyPairInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPairInput"></a>

```csharp
public string Ec2KeyPairInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `InstanceRoleInput`<sup>Optional</sup> <a name="InstanceRoleInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRoleInput"></a>

```csharp
public string InstanceRoleInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceTypeInput"></a>

```csharp
public string[] InstanceTypeInput { get; }
```

- *Type:* string[]

---

##### `LaunchTemplateInput`<sup>Optional</sup> <a name="LaunchTemplateInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.launchTemplateInput"></a>

```csharp
public BatchComputeEnvironmentComputeResourcesLaunchTemplate LaunchTemplateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesLaunchTemplate">BatchComputeEnvironmentComputeResourcesLaunchTemplate</a>

---

##### `MaxVcpusInput`<sup>Optional</sup> <a name="MaxVcpusInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxVcpusInput"></a>

```csharp
public double MaxVcpusInput { get; }
```

- *Type:* double

---

##### `MinVcpusInput`<sup>Optional</sup> <a name="MinVcpusInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minVcpusInput"></a>

```csharp
public double MinVcpusInput { get; }
```

- *Type:* double

---

##### `PlacementGroupInput`<sup>Optional</sup> <a name="PlacementGroupInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroupInput"></a>

```csharp
public string PlacementGroupInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SpotIamFleetRoleInput`<sup>Optional</sup> <a name="SpotIamFleetRoleInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRoleInput"></a>

```csharp
public string SpotIamFleetRoleInput { get; }
```

- *Type:* string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; }
```

- *Type:* string

---

##### `BidPercentage`<sup>Required</sup> <a name="BidPercentage" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.bidPercentage"></a>

```csharp
public double BidPercentage { get; }
```

- *Type:* double

---

##### `DesiredVcpus`<sup>Required</sup> <a name="DesiredVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.desiredVcpus"></a>

```csharp
public double DesiredVcpus { get; }
```

- *Type:* double

---

##### `Ec2KeyPair`<sup>Required</sup> <a name="Ec2KeyPair" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.ec2KeyPair"></a>

```csharp
public string Ec2KeyPair { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `InstanceRole`<sup>Required</sup> <a name="InstanceRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceRole"></a>

```csharp
public string InstanceRole { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.instanceType"></a>

```csharp
public string[] InstanceType { get; }
```

- *Type:* string[]

---

##### `MaxVcpus`<sup>Required</sup> <a name="MaxVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.maxVcpus"></a>

```csharp
public double MaxVcpus { get; }
```

- *Type:* double

---

##### `MinVcpus`<sup>Required</sup> <a name="MinVcpus" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.minVcpus"></a>

```csharp
public double MinVcpus { get; }
```

- *Type:* double

---

##### `PlacementGroup`<sup>Required</sup> <a name="PlacementGroup" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.placementGroup"></a>

```csharp
public string PlacementGroup { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SpotIamFleetRole`<sup>Required</sup> <a name="SpotIamFleetRole" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.spotIamFleetRole"></a>

```csharp
public string SpotIamFleetRole { get; }
```

- *Type:* string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResourcesOutputReference.property.internalValue"></a>

```csharp
public BatchComputeEnvironmentComputeResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentComputeResources">BatchComputeEnvironmentComputeResources</a>

---


### BatchComputeEnvironmentEksConfigurationOutputReference <a name="BatchComputeEnvironmentEksConfigurationOutputReference" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchComputeEnvironmentEksConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArnInput">EksClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespaceInput">KubernetesNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArn">EksClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EksClusterArnInput`<sup>Optional</sup> <a name="EksClusterArnInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArnInput"></a>

```csharp
public string EksClusterArnInput { get; }
```

- *Type:* string

---

##### `KubernetesNamespaceInput`<sup>Optional</sup> <a name="KubernetesNamespaceInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespaceInput"></a>

```csharp
public string KubernetesNamespaceInput { get; }
```

- *Type:* string

---

##### `EksClusterArn`<sup>Required</sup> <a name="EksClusterArn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.eksClusterArn"></a>

```csharp
public string EksClusterArn { get; }
```

- *Type:* string

---

##### `KubernetesNamespace`<sup>Required</sup> <a name="KubernetesNamespace" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.kubernetesNamespace"></a>

```csharp
public string KubernetesNamespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfigurationOutputReference.property.internalValue"></a>

```csharp
public BatchComputeEnvironmentEksConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentEksConfiguration">BatchComputeEnvironmentEksConfiguration</a>

---


### BatchComputeEnvironmentUpdatePolicyOutputReference <a name="BatchComputeEnvironmentUpdatePolicyOutputReference" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BatchComputeEnvironmentUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutesInput">JobExecutionTimeoutMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdateInput">TerminateJobsOnUpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes">JobExecutionTimeoutMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate">TerminateJobsOnUpdate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JobExecutionTimeoutMinutesInput`<sup>Optional</sup> <a name="JobExecutionTimeoutMinutesInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutesInput"></a>

```csharp
public double JobExecutionTimeoutMinutesInput { get; }
```

- *Type:* double

---

##### `TerminateJobsOnUpdateInput`<sup>Optional</sup> <a name="TerminateJobsOnUpdateInput" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdateInput"></a>

```csharp
public object TerminateJobsOnUpdateInput { get; }
```

- *Type:* object

---

##### `JobExecutionTimeoutMinutes`<sup>Required</sup> <a name="JobExecutionTimeoutMinutes" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.jobExecutionTimeoutMinutes"></a>

```csharp
public double JobExecutionTimeoutMinutes { get; }
```

- *Type:* double

---

##### `TerminateJobsOnUpdate`<sup>Required</sup> <a name="TerminateJobsOnUpdate" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.terminateJobsOnUpdate"></a>

```csharp
public object TerminateJobsOnUpdate { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public BatchComputeEnvironmentUpdatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.batchComputeEnvironment.BatchComputeEnvironmentUpdatePolicy">BatchComputeEnvironmentUpdatePolicy</a>

---



