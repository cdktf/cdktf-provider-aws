# `bedrockProvisionedModelThroughput` Submodule <a name="`bedrockProvisionedModelThroughput` Submodule" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockProvisionedModelThroughput <a name="BedrockProvisionedModelThroughput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/bedrock_provisioned_model_throughput aws_bedrock_provisioned_model_throughput}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockProvisionedModelThroughput(Construct Scope, string Id, BedrockProvisionedModelThroughputConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig">BedrockProvisionedModelThroughputConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig">BedrockProvisionedModelThroughputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetCommitmentDuration">ResetCommitmentDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.putTimeouts"></a>

```csharp
private void PutTimeouts(BedrockProvisionedModelThroughputTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>

---

##### `ResetCommitmentDuration` <a name="ResetCommitmentDuration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetCommitmentDuration"></a>

```csharp
private void ResetCommitmentDuration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockProvisionedModelThroughput resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockProvisionedModelThroughput.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockProvisionedModelThroughput.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockProvisionedModelThroughput.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockProvisionedModelThroughput.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BedrockProvisionedModelThroughput resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockProvisionedModelThroughput to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockProvisionedModelThroughput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/bedrock_provisioned_model_throughput#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BedrockProvisionedModelThroughput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelArn">ProvisionedModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference">BedrockProvisionedModelThroughputTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDurationInput">CommitmentDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArnInput">ModelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnitsInput">ModelUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelNameInput">ProvisionedModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDuration">CommitmentDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArn">ModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnits">ModelUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelName">ProvisionedModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProvisionedModelArn`<sup>Required</sup> <a name="ProvisionedModelArn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelArn"></a>

```csharp
public string ProvisionedModelArn { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeouts"></a>

```csharp
public BedrockProvisionedModelThroughputTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference">BedrockProvisionedModelThroughputTimeoutsOutputReference</a>

---

##### `CommitmentDurationInput`<sup>Optional</sup> <a name="CommitmentDurationInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDurationInput"></a>

```csharp
public string CommitmentDurationInput { get; }
```

- *Type:* string

---

##### `ModelArnInput`<sup>Optional</sup> <a name="ModelArnInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArnInput"></a>

```csharp
public string ModelArnInput { get; }
```

- *Type:* string

---

##### `ModelUnitsInput`<sup>Optional</sup> <a name="ModelUnitsInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnitsInput"></a>

```csharp
public double ModelUnitsInput { get; }
```

- *Type:* double

---

##### `ProvisionedModelNameInput`<sup>Optional</sup> <a name="ProvisionedModelNameInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelNameInput"></a>

```csharp
public string ProvisionedModelNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CommitmentDuration`<sup>Required</sup> <a name="CommitmentDuration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.commitmentDuration"></a>

```csharp
public string CommitmentDuration { get; }
```

- *Type:* string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelArn"></a>

```csharp
public string ModelArn { get; }
```

- *Type:* string

---

##### `ModelUnits`<sup>Required</sup> <a name="ModelUnits" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.modelUnits"></a>

```csharp
public double ModelUnits { get; }
```

- *Type:* double

---

##### `ProvisionedModelName`<sup>Required</sup> <a name="ProvisionedModelName" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.provisionedModelName"></a>

```csharp
public string ProvisionedModelName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughput.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockProvisionedModelThroughputConfig <a name="BedrockProvisionedModelThroughputConfig" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockProvisionedModelThroughputConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ModelArn,
    double ModelUnits,
    string ProvisionedModelName,
    string CommitmentDuration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    BedrockProvisionedModelThroughputTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelArn">ModelArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelUnits">ModelUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisionedModelName">ProvisionedModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.commitmentDuration">CommitmentDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelArn"></a>

```csharp
public string ModelArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}.

---

##### `ModelUnits`<sup>Required</sup> <a name="ModelUnits" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.modelUnits"></a>

```csharp
public double ModelUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}.

---

##### `ProvisionedModelName`<sup>Required</sup> <a name="ProvisionedModelName" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.provisionedModelName"></a>

```csharp
public string ProvisionedModelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}.

---

##### `CommitmentDuration`<sup>Optional</sup> <a name="CommitmentDuration" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.commitmentDuration"></a>

```csharp
public string CommitmentDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputConfig.property.timeouts"></a>

```csharp
public BedrockProvisionedModelThroughputTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts">BedrockProvisionedModelThroughputTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/bedrock_provisioned_model_throughput#timeouts BedrockProvisionedModelThroughput#timeouts}

---

### BedrockProvisionedModelThroughputTimeouts <a name="BedrockProvisionedModelThroughputTimeouts" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockProvisionedModelThroughputTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/bedrock_provisioned_model_throughput#create BedrockProvisionedModelThroughput#create}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockProvisionedModelThroughputTimeoutsOutputReference <a name="BedrockProvisionedModelThroughputTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockProvisionedModelThroughputTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockProvisionedModelThroughput.BedrockProvisionedModelThroughputTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



