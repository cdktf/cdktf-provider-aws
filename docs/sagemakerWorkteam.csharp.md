# `sagemakerWorkteam` Submodule <a name="`sagemakerWorkteam` Submodule" id="@cdktf/provider-aws.sagemakerWorkteam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerWorkteam <a name="SagemakerWorkteam" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam aws_sagemaker_workteam}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteam(Construct Scope, string Id, SagemakerWorkteamConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig">SagemakerWorkteamConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig">SagemakerWorkteamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinition">PutMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration">PutNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putWorkerAccessConfiguration">PutWorkerAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetNotificationConfiguration">ResetNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetWorkerAccessConfiguration">ResetWorkerAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetWorkforceName">ResetWorkforceName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMemberDefinition` <a name="PutMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinition"></a>

```csharp
private void PutMemberDefinition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinition.parameter.value"></a>

- *Type:* object

---

##### `PutNotificationConfiguration` <a name="PutNotificationConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration"></a>

```csharp
private void PutNotificationConfiguration(SagemakerWorkteamNotificationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

---

##### `PutWorkerAccessConfiguration` <a name="PutWorkerAccessConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putWorkerAccessConfiguration"></a>

```csharp
private void PutWorkerAccessConfiguration(SagemakerWorkteamWorkerAccessConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.putWorkerAccessConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration">SagemakerWorkteamWorkerAccessConfiguration</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotificationConfiguration` <a name="ResetNotificationConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetNotificationConfiguration"></a>

```csharp
private void ResetNotificationConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetWorkerAccessConfiguration` <a name="ResetWorkerAccessConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetWorkerAccessConfiguration"></a>

```csharp
private void ResetWorkerAccessConfiguration()
```

##### `ResetWorkforceName` <a name="ResetWorkforceName" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.resetWorkforceName"></a>

```csharp
private void ResetWorkforceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerWorkteam resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerWorkteam.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerWorkteam.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerWorkteam.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerWorkteam.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SagemakerWorkteam resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerWorkteam to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerWorkteam that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerWorkteam to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinition">MemberDefinition</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList">SagemakerWorkteamMemberDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfiguration">NotificationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference">SagemakerWorkteamNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.subdomain">Subdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workerAccessConfiguration">WorkerAccessConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference">SagemakerWorkteamWorkerAccessConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitionInput">MemberDefinitionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfigurationInput">NotificationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workerAccessConfigurationInput">WorkerAccessConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration">SagemakerWorkteamWorkerAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workforceNameInput">WorkforceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workteamNameInput">WorkteamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workforceName">WorkforceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workteamName">WorkteamName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `MemberDefinition`<sup>Required</sup> <a name="MemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinition"></a>

```csharp
public SagemakerWorkteamMemberDefinitionList MemberDefinition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList">SagemakerWorkteamMemberDefinitionList</a>

---

##### `NotificationConfiguration`<sup>Required</sup> <a name="NotificationConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfiguration"></a>

```csharp
public SagemakerWorkteamNotificationConfigurationOutputReference NotificationConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference">SagemakerWorkteamNotificationConfigurationOutputReference</a>

---

##### `Subdomain`<sup>Required</sup> <a name="Subdomain" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.subdomain"></a>

```csharp
public string Subdomain { get; }
```

- *Type:* string

---

##### `WorkerAccessConfiguration`<sup>Required</sup> <a name="WorkerAccessConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workerAccessConfiguration"></a>

```csharp
public SagemakerWorkteamWorkerAccessConfigurationOutputReference WorkerAccessConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference">SagemakerWorkteamWorkerAccessConfigurationOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemberDefinitionInput`<sup>Optional</sup> <a name="MemberDefinitionInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitionInput"></a>

```csharp
public object MemberDefinitionInput { get; }
```

- *Type:* object

---

##### `NotificationConfigurationInput`<sup>Optional</sup> <a name="NotificationConfigurationInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfigurationInput"></a>

```csharp
public SagemakerWorkteamNotificationConfiguration NotificationConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkerAccessConfigurationInput`<sup>Optional</sup> <a name="WorkerAccessConfigurationInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workerAccessConfigurationInput"></a>

```csharp
public SagemakerWorkteamWorkerAccessConfiguration WorkerAccessConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration">SagemakerWorkteamWorkerAccessConfiguration</a>

---

##### `WorkforceNameInput`<sup>Optional</sup> <a name="WorkforceNameInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workforceNameInput"></a>

```csharp
public string WorkforceNameInput { get; }
```

- *Type:* string

---

##### `WorkteamNameInput`<sup>Optional</sup> <a name="WorkteamNameInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workteamNameInput"></a>

```csharp
public string WorkteamNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkforceName`<sup>Required</sup> <a name="WorkforceName" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workforceName"></a>

```csharp
public string WorkforceName { get; }
```

- *Type:* string

---

##### `WorkteamName`<sup>Required</sup> <a name="WorkteamName" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.workteamName"></a>

```csharp
public string WorkteamName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteam.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerWorkteamConfig <a name="SagemakerWorkteamConfig" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description,
    object MemberDefinition,
    string WorkteamName,
    string Id = null,
    SagemakerWorkteamNotificationConfiguration NotificationConfiguration = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    SagemakerWorkteamWorkerAccessConfiguration WorkerAccessConfiguration = null,
    string WorkforceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#description SagemakerWorkteam#description}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.memberDefinition">MemberDefinition</a></code> | <code>object</code> | member_definition block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.workteamName">WorkteamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#workteam_name SagemakerWorkteam#workteam_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#id SagemakerWorkteam#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.notificationConfiguration">NotificationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | notification_configuration block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#tags SagemakerWorkteam#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#tags_all SagemakerWorkteam#tags_all}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.workerAccessConfiguration">WorkerAccessConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration">SagemakerWorkteamWorkerAccessConfiguration</a></code> | worker_access_configuration block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.workforceName">WorkforceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#workforce_name SagemakerWorkteam#workforce_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#description SagemakerWorkteam#description}.

---

##### `MemberDefinition`<sup>Required</sup> <a name="MemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.memberDefinition"></a>

```csharp
public object MemberDefinition { get; set; }
```

- *Type:* object

member_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#member_definition SagemakerWorkteam#member_definition}

---

##### `WorkteamName`<sup>Required</sup> <a name="WorkteamName" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.workteamName"></a>

```csharp
public string WorkteamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#workteam_name SagemakerWorkteam#workteam_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#id SagemakerWorkteam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationConfiguration`<sup>Optional</sup> <a name="NotificationConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.notificationConfiguration"></a>

```csharp
public SagemakerWorkteamNotificationConfiguration NotificationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

notification_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#notification_configuration SagemakerWorkteam#notification_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#region SagemakerWorkteam#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#tags SagemakerWorkteam#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#tags_all SagemakerWorkteam#tags_all}.

---

##### `WorkerAccessConfiguration`<sup>Optional</sup> <a name="WorkerAccessConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.workerAccessConfiguration"></a>

```csharp
public SagemakerWorkteamWorkerAccessConfiguration WorkerAccessConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration">SagemakerWorkteamWorkerAccessConfiguration</a>

worker_access_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#worker_access_configuration SagemakerWorkteam#worker_access_configuration}

---

##### `WorkforceName`<sup>Optional</sup> <a name="WorkforceName" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamConfig.property.workforceName"></a>

```csharp
public string WorkforceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#workforce_name SagemakerWorkteam#workforce_name}.

---

### SagemakerWorkteamMemberDefinition <a name="SagemakerWorkteamMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamMemberDefinition {
    SagemakerWorkteamMemberDefinitionCognitoMemberDefinition CognitoMemberDefinition = null,
    SagemakerWorkteamMemberDefinitionOidcMemberDefinition OidcMemberDefinition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition.property.cognitoMemberDefinition">CognitoMemberDefinition</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a></code> | cognito_member_definition block. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition.property.oidcMemberDefinition">OidcMemberDefinition</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a></code> | oidc_member_definition block. |

---

##### `CognitoMemberDefinition`<sup>Optional</sup> <a name="CognitoMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition.property.cognitoMemberDefinition"></a>

```csharp
public SagemakerWorkteamMemberDefinitionCognitoMemberDefinition CognitoMemberDefinition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a>

cognito_member_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#cognito_member_definition SagemakerWorkteam#cognito_member_definition}

---

##### `OidcMemberDefinition`<sup>Optional</sup> <a name="OidcMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinition.property.oidcMemberDefinition"></a>

```csharp
public SagemakerWorkteamMemberDefinitionOidcMemberDefinition OidcMemberDefinition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a>

oidc_member_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#oidc_member_definition SagemakerWorkteam#oidc_member_definition}

---

### SagemakerWorkteamMemberDefinitionCognitoMemberDefinition <a name="SagemakerWorkteamMemberDefinitionCognitoMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamMemberDefinitionCognitoMemberDefinition {
    string ClientId,
    string UserGroup,
    string UserPool
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#client_id SagemakerWorkteam#client_id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.userGroup">UserGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#user_group SagemakerWorkteam#user_group}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.userPool">UserPool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#user_pool SagemakerWorkteam#user_pool}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#client_id SagemakerWorkteam#client_id}.

---

##### `UserGroup`<sup>Required</sup> <a name="UserGroup" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.userGroup"></a>

```csharp
public string UserGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#user_group SagemakerWorkteam#user_group}.

---

##### `UserPool`<sup>Required</sup> <a name="UserPool" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.userPool"></a>

```csharp
public string UserPool { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#user_pool SagemakerWorkteam#user_pool}.

---

### SagemakerWorkteamMemberDefinitionOidcMemberDefinition <a name="SagemakerWorkteamMemberDefinitionOidcMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamMemberDefinitionOidcMemberDefinition {
    string[] Groups
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition.property.groups">Groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#groups SagemakerWorkteam#groups}. |

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#groups SagemakerWorkteam#groups}.

---

### SagemakerWorkteamNotificationConfiguration <a name="SagemakerWorkteamNotificationConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamNotificationConfiguration {
    string NotificationTopicArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#notification_topic_arn SagemakerWorkteam#notification_topic_arn}. |

---

##### `NotificationTopicArn`<sup>Optional</sup> <a name="NotificationTopicArn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.property.notificationTopicArn"></a>

```csharp
public string NotificationTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#notification_topic_arn SagemakerWorkteam#notification_topic_arn}.

---

### SagemakerWorkteamWorkerAccessConfiguration <a name="SagemakerWorkteamWorkerAccessConfiguration" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamWorkerAccessConfiguration {
    SagemakerWorkteamWorkerAccessConfigurationS3Presign S3Presign = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration.property.s3Presign">S3Presign</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign">SagemakerWorkteamWorkerAccessConfigurationS3Presign</a></code> | s3_presign block. |

---

##### `S3Presign`<sup>Optional</sup> <a name="S3Presign" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration.property.s3Presign"></a>

```csharp
public SagemakerWorkteamWorkerAccessConfigurationS3Presign S3Presign { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign">SagemakerWorkteamWorkerAccessConfigurationS3Presign</a>

s3_presign block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#s3_presign SagemakerWorkteam#s3_presign}

---

### SagemakerWorkteamWorkerAccessConfigurationS3Presign <a name="SagemakerWorkteamWorkerAccessConfigurationS3Presign" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamWorkerAccessConfigurationS3Presign {
    SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints IamPolicyConstraints = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign.property.iamPolicyConstraints">IamPolicyConstraints</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints</a></code> | iam_policy_constraints block. |

---

##### `IamPolicyConstraints`<sup>Optional</sup> <a name="IamPolicyConstraints" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign.property.iamPolicyConstraints"></a>

```csharp
public SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints IamPolicyConstraints { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints</a>

iam_policy_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#iam_policy_constraints SagemakerWorkteam#iam_policy_constraints}

---

### SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints <a name="SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints {
    string SourceIp = null,
    string VpcSourceIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints.property.sourceIp">SourceIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#source_ip SagemakerWorkteam#source_ip}. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints.property.vpcSourceIp">VpcSourceIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#vpc_source_ip SagemakerWorkteam#vpc_source_ip}. |

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints.property.sourceIp"></a>

```csharp
public string SourceIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#source_ip SagemakerWorkteam#source_ip}.

---

##### `VpcSourceIp`<sup>Optional</sup> <a name="VpcSourceIp" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints.property.vpcSourceIp"></a>

```csharp
public string VpcSourceIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_workteam#vpc_source_ip SagemakerWorkteam#vpc_source_ip}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference <a name="SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userGroupInput">UserGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userPoolInput">UserPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userGroup">UserGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userPool">UserPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `UserGroupInput`<sup>Optional</sup> <a name="UserGroupInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userGroupInput"></a>

```csharp
public string UserGroupInput { get; }
```

- *Type:* string

---

##### `UserPoolInput`<sup>Optional</sup> <a name="UserPoolInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userPoolInput"></a>

```csharp
public string UserPoolInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `UserGroup`<sup>Required</sup> <a name="UserGroup" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userGroup"></a>

```csharp
public string UserGroup { get; }
```

- *Type:* string

---

##### `UserPool`<sup>Required</sup> <a name="UserPool" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userPool"></a>

```csharp
public string UserPool { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.internalValue"></a>

```csharp
public SagemakerWorkteamMemberDefinitionCognitoMemberDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a>

---


### SagemakerWorkteamMemberDefinitionList <a name="SagemakerWorkteamMemberDefinitionList" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamMemberDefinitionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.get"></a>

```csharp
private SagemakerWorkteamMemberDefinitionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference <a name="SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.internalValue"></a>

```csharp
public SagemakerWorkteamMemberDefinitionOidcMemberDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a>

---


### SagemakerWorkteamMemberDefinitionOutputReference <a name="SagemakerWorkteamMemberDefinitionOutputReference" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamMemberDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putCognitoMemberDefinition">PutCognitoMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putOidcMemberDefinition">PutOidcMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resetCognitoMemberDefinition">ResetCognitoMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resetOidcMemberDefinition">ResetOidcMemberDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCognitoMemberDefinition` <a name="PutCognitoMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putCognitoMemberDefinition"></a>

```csharp
private void PutCognitoMemberDefinition(SagemakerWorkteamMemberDefinitionCognitoMemberDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putCognitoMemberDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a>

---

##### `PutOidcMemberDefinition` <a name="PutOidcMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putOidcMemberDefinition"></a>

```csharp
private void PutOidcMemberDefinition(SagemakerWorkteamMemberDefinitionOidcMemberDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putOidcMemberDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a>

---

##### `ResetCognitoMemberDefinition` <a name="ResetCognitoMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resetCognitoMemberDefinition"></a>

```csharp
private void ResetCognitoMemberDefinition()
```

##### `ResetOidcMemberDefinition` <a name="ResetOidcMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resetOidcMemberDefinition"></a>

```csharp
private void ResetOidcMemberDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.cognitoMemberDefinition">CognitoMemberDefinition</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.oidcMemberDefinition">OidcMemberDefinition</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.cognitoMemberDefinitionInput">CognitoMemberDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.oidcMemberDefinitionInput">OidcMemberDefinitionInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CognitoMemberDefinition`<sup>Required</sup> <a name="CognitoMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.cognitoMemberDefinition"></a>

```csharp
public SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference CognitoMemberDefinition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference</a>

---

##### `OidcMemberDefinition`<sup>Required</sup> <a name="OidcMemberDefinition" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.oidcMemberDefinition"></a>

```csharp
public SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference OidcMemberDefinition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference</a>

---

##### `CognitoMemberDefinitionInput`<sup>Optional</sup> <a name="CognitoMemberDefinitionInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.cognitoMemberDefinitionInput"></a>

```csharp
public SagemakerWorkteamMemberDefinitionCognitoMemberDefinition CognitoMemberDefinitionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a>

---

##### `OidcMemberDefinitionInput`<sup>Optional</sup> <a name="OidcMemberDefinitionInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.oidcMemberDefinitionInput"></a>

```csharp
public SagemakerWorkteamMemberDefinitionOidcMemberDefinition OidcMemberDefinitionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SagemakerWorkteamNotificationConfigurationOutputReference <a name="SagemakerWorkteamNotificationConfigurationOutputReference" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamNotificationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resetNotificationTopicArn">ResetNotificationTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotificationTopicArn` <a name="ResetNotificationTopicArn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resetNotificationTopicArn"></a>

```csharp
private void ResetNotificationTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArnInput">NotificationTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotificationTopicArnInput`<sup>Optional</sup> <a name="NotificationTopicArnInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArnInput"></a>

```csharp
public string NotificationTopicArnInput { get; }
```

- *Type:* string

---

##### `NotificationTopicArn`<sup>Required</sup> <a name="NotificationTopicArn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArn"></a>

```csharp
public string NotificationTopicArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.internalValue"></a>

```csharp
public SagemakerWorkteamNotificationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

---


### SagemakerWorkteamWorkerAccessConfigurationOutputReference <a name="SagemakerWorkteamWorkerAccessConfigurationOutputReference" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamWorkerAccessConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.putS3Presign">PutS3Presign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.resetS3Presign">ResetS3Presign</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Presign` <a name="PutS3Presign" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.putS3Presign"></a>

```csharp
private void PutS3Presign(SagemakerWorkteamWorkerAccessConfigurationS3Presign Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.putS3Presign.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign">SagemakerWorkteamWorkerAccessConfigurationS3Presign</a>

---

##### `ResetS3Presign` <a name="ResetS3Presign" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.resetS3Presign"></a>

```csharp
private void ResetS3Presign()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.s3Presign">S3Presign</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference">SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.s3PresignInput">S3PresignInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign">SagemakerWorkteamWorkerAccessConfigurationS3Presign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration">SagemakerWorkteamWorkerAccessConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Presign`<sup>Required</sup> <a name="S3Presign" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.s3Presign"></a>

```csharp
public SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference S3Presign { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference">SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference</a>

---

##### `S3PresignInput`<sup>Optional</sup> <a name="S3PresignInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.s3PresignInput"></a>

```csharp
public SagemakerWorkteamWorkerAccessConfigurationS3Presign S3PresignInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign">SagemakerWorkteamWorkerAccessConfigurationS3Presign</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationOutputReference.property.internalValue"></a>

```csharp
public SagemakerWorkteamWorkerAccessConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfiguration">SagemakerWorkteamWorkerAccessConfiguration</a>

---


### SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference <a name="SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.resetSourceIp">ResetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.resetVpcSourceIp">ResetVpcSourceIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.resetSourceIp"></a>

```csharp
private void ResetSourceIp()
```

##### `ResetVpcSourceIp` <a name="ResetVpcSourceIp" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.resetVpcSourceIp"></a>

```csharp
private void ResetVpcSourceIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.sourceIpInput">SourceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.vpcSourceIpInput">VpcSourceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.sourceIp">SourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.vpcSourceIp">VpcSourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.sourceIpInput"></a>

```csharp
public string SourceIpInput { get; }
```

- *Type:* string

---

##### `VpcSourceIpInput`<sup>Optional</sup> <a name="VpcSourceIpInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.vpcSourceIpInput"></a>

```csharp
public string VpcSourceIpInput { get; }
```

- *Type:* string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.sourceIp"></a>

```csharp
public string SourceIp { get; }
```

- *Type:* string

---

##### `VpcSourceIp`<sup>Required</sup> <a name="VpcSourceIp" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.vpcSourceIp"></a>

```csharp
public string VpcSourceIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference.property.internalValue"></a>

```csharp
public SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints</a>

---


### SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference <a name="SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.putIamPolicyConstraints">PutIamPolicyConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.resetIamPolicyConstraints">ResetIamPolicyConstraints</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIamPolicyConstraints` <a name="PutIamPolicyConstraints" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.putIamPolicyConstraints"></a>

```csharp
private void PutIamPolicyConstraints(SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.putIamPolicyConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints</a>

---

##### `ResetIamPolicyConstraints` <a name="ResetIamPolicyConstraints" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.resetIamPolicyConstraints"></a>

```csharp
private void ResetIamPolicyConstraints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.iamPolicyConstraints">IamPolicyConstraints</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.iamPolicyConstraintsInput">IamPolicyConstraintsInput</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign">SagemakerWorkteamWorkerAccessConfigurationS3Presign</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IamPolicyConstraints`<sup>Required</sup> <a name="IamPolicyConstraints" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.iamPolicyConstraints"></a>

```csharp
public SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference IamPolicyConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference</a>

---

##### `IamPolicyConstraintsInput`<sup>Optional</sup> <a name="IamPolicyConstraintsInput" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.iamPolicyConstraintsInput"></a>

```csharp
public SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints IamPolicyConstraintsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints">SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference.property.internalValue"></a>

```csharp
public SagemakerWorkteamWorkerAccessConfigurationS3Presign InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.sagemakerWorkteam.SagemakerWorkteamWorkerAccessConfigurationS3Presign">SagemakerWorkteamWorkerAccessConfigurationS3Presign</a>

---



