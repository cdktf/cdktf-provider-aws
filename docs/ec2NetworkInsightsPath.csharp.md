# `ec2NetworkInsightsPath` Submodule <a name="`ec2NetworkInsightsPath` Submodule" id="@cdktf/provider-aws.ec2NetworkInsightsPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInsightsPath <a name="Ec2NetworkInsightsPath" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path aws_ec2_network_insights_path}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPath(Construct Scope, string Id, Ec2NetworkInsightsPathConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig">Ec2NetworkInsightsPathConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig">Ec2NetworkInsightsPathConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtDestination">PutFilterAtDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtSource">PutFilterAtSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationIp">ResetDestinationIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationPort">ResetDestinationPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetFilterAtDestination">ResetFilterAtDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetFilterAtSource">ResetFilterAtSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetSourceIp">ResetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilterAtDestination` <a name="PutFilterAtDestination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtDestination"></a>

```csharp
private void PutFilterAtDestination(Ec2NetworkInsightsPathFilterAtDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination">Ec2NetworkInsightsPathFilterAtDestination</a>

---

##### `PutFilterAtSource` <a name="PutFilterAtSource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtSource"></a>

```csharp
private void PutFilterAtSource(Ec2NetworkInsightsPathFilterAtSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.putFilterAtSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource">Ec2NetworkInsightsPathFilterAtSource</a>

---

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestination"></a>

```csharp
private void ResetDestination()
```

##### `ResetDestinationIp` <a name="ResetDestinationIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationIp"></a>

```csharp
private void ResetDestinationIp()
```

##### `ResetDestinationPort` <a name="ResetDestinationPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationPort"></a>

```csharp
private void ResetDestinationPort()
```

##### `ResetFilterAtDestination` <a name="ResetFilterAtDestination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetFilterAtDestination"></a>

```csharp
private void ResetFilterAtDestination()
```

##### `ResetFilterAtSource` <a name="ResetFilterAtSource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetFilterAtSource"></a>

```csharp
private void ResetFilterAtSource()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetSourceIp"></a>

```csharp
private void ResetSourceIp()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2NetworkInsightsPath resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2NetworkInsightsPath.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2NetworkInsightsPath.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2NetworkInsightsPath.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2NetworkInsightsPath.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Ec2NetworkInsightsPath resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2NetworkInsightsPath to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2NetworkInsightsPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Ec2NetworkInsightsPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationArn">DestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtDestination">FilterAtDestination</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference">Ec2NetworkInsightsPathFilterAtDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtSource">FilterAtSource</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference">Ec2NetworkInsightsPathFilterAtSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceArn">SourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIpInput">DestinationIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPortInput">DestinationPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtDestinationInput">FilterAtDestinationInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination">Ec2NetworkInsightsPathFilterAtDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtSourceInput">FilterAtSourceInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource">Ec2NetworkInsightsPathFilterAtSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIpInput">SourceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIp">DestinationIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPort">DestinationPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIp">SourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationArn"></a>

```csharp
public string DestinationArn { get; }
```

- *Type:* string

---

##### `FilterAtDestination`<sup>Required</sup> <a name="FilterAtDestination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtDestination"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtDestinationOutputReference FilterAtDestination { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference">Ec2NetworkInsightsPathFilterAtDestinationOutputReference</a>

---

##### `FilterAtSource`<sup>Required</sup> <a name="FilterAtSource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtSource"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtSourceOutputReference FilterAtSource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference">Ec2NetworkInsightsPathFilterAtSourceOutputReference</a>

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceArn"></a>

```csharp
public string SourceArn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `DestinationIpInput`<sup>Optional</sup> <a name="DestinationIpInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIpInput"></a>

```csharp
public string DestinationIpInput { get; }
```

- *Type:* string

---

##### `DestinationPortInput`<sup>Optional</sup> <a name="DestinationPortInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPortInput"></a>

```csharp
public double DestinationPortInput { get; }
```

- *Type:* double

---

##### `FilterAtDestinationInput`<sup>Optional</sup> <a name="FilterAtDestinationInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtDestinationInput"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtDestination FilterAtDestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination">Ec2NetworkInsightsPathFilterAtDestination</a>

---

##### `FilterAtSourceInput`<sup>Optional</sup> <a name="FilterAtSourceInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.filterAtSourceInput"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtSource FilterAtSourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource">Ec2NetworkInsightsPathFilterAtSource</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIpInput"></a>

```csharp
public string SourceIpInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `DestinationIp`<sup>Required</sup> <a name="DestinationIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIp"></a>

```csharp
public string DestinationIp { get; }
```

- *Type:* string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPort"></a>

```csharp
public double DestinationPort { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIp"></a>

```csharp
public string SourceIp { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInsightsPathConfig <a name="Ec2NetworkInsightsPathConfig" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPathConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Protocol,
    string Source,
    string Destination = null,
    string DestinationIp = null,
    double DestinationPort = null,
    Ec2NetworkInsightsPathFilterAtDestination FilterAtDestination = null,
    Ec2NetworkInsightsPathFilterAtSource FilterAtSource = null,
    string Id = null,
    string SourceIp = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationIp">DestinationIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationPort">DestinationPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.filterAtDestination">FilterAtDestination</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination">Ec2NetworkInsightsPathFilterAtDestination</a></code> | filter_at_destination block. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.filterAtSource">FilterAtSource</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource">Ec2NetworkInsightsPathFilterAtSource</a></code> | filter_at_source block. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.sourceIp">SourceIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}.

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}.

---

##### `DestinationIp`<sup>Optional</sup> <a name="DestinationIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationIp"></a>

```csharp
public string DestinationIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}.

---

##### `DestinationPort`<sup>Optional</sup> <a name="DestinationPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationPort"></a>

```csharp
public double DestinationPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}.

---

##### `FilterAtDestination`<sup>Optional</sup> <a name="FilterAtDestination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.filterAtDestination"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtDestination FilterAtDestination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination">Ec2NetworkInsightsPathFilterAtDestination</a>

filter_at_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#filter_at_destination Ec2NetworkInsightsPath#filter_at_destination}

---

##### `FilterAtSource`<sup>Optional</sup> <a name="FilterAtSource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.filterAtSource"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtSource FilterAtSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource">Ec2NetworkInsightsPathFilterAtSource</a>

filter_at_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#filter_at_source Ec2NetworkInsightsPath#filter_at_source}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.sourceIp"></a>

```csharp
public string SourceIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}.

---

### Ec2NetworkInsightsPathFilterAtDestination <a name="Ec2NetworkInsightsPathFilterAtDestination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPathFilterAtDestination {
    string DestinationAddress = null,
    Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange DestinationPortRange = null,
    string SourceAddress = null,
    Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange SourcePortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#destination_address Ec2NetworkInsightsPath#destination_address}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.sourceAddress">SourceAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#source_address Ec2NetworkInsightsPath#source_address}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange</a></code> | source_port_range block. |

---

##### `DestinationAddress`<sup>Optional</sup> <a name="DestinationAddress" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#destination_address Ec2NetworkInsightsPath#destination_address}.

---

##### `DestinationPortRange`<sup>Optional</sup> <a name="DestinationPortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.destinationPortRange"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange DestinationPortRange { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#destination_port_range Ec2NetworkInsightsPath#destination_port_range}

---

##### `SourceAddress`<sup>Optional</sup> <a name="SourceAddress" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.sourceAddress"></a>

```csharp
public string SourceAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#source_address Ec2NetworkInsightsPath#source_address}.

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination.property.sourcePortRange"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange SourcePortRange { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#source_port_range Ec2NetworkInsightsPath#source_port_range}

---

### Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange <a name="Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange {
    double FromPort = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}.

---

### Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange <a name="Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange {
    double FromPort = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}.

---

### Ec2NetworkInsightsPathFilterAtSource <a name="Ec2NetworkInsightsPathFilterAtSource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPathFilterAtSource {
    string DestinationAddress = null,
    Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange DestinationPortRange = null,
    string SourceAddress = null,
    Ec2NetworkInsightsPathFilterAtSourceSourcePortRange SourcePortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#destination_address Ec2NetworkInsightsPath#destination_address}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.sourceAddress">SourceAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#source_address Ec2NetworkInsightsPath#source_address}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange">Ec2NetworkInsightsPathFilterAtSourceSourcePortRange</a></code> | source_port_range block. |

---

##### `DestinationAddress`<sup>Optional</sup> <a name="DestinationAddress" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#destination_address Ec2NetworkInsightsPath#destination_address}.

---

##### `DestinationPortRange`<sup>Optional</sup> <a name="DestinationPortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.destinationPortRange"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange DestinationPortRange { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#destination_port_range Ec2NetworkInsightsPath#destination_port_range}

---

##### `SourceAddress`<sup>Optional</sup> <a name="SourceAddress" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.sourceAddress"></a>

```csharp
public string SourceAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#source_address Ec2NetworkInsightsPath#source_address}.

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource.property.sourcePortRange"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtSourceSourcePortRange SourcePortRange { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange">Ec2NetworkInsightsPathFilterAtSourceSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#source_port_range Ec2NetworkInsightsPath#source_port_range}

---

### Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange <a name="Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange {
    double FromPort = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}.

---

### Ec2NetworkInsightsPathFilterAtSourceSourcePortRange <a name="Ec2NetworkInsightsPathFilterAtSourceSourcePortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPathFilterAtSourceSourcePortRange {
    double FromPort = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#from_port Ec2NetworkInsightsPath#from_port}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/ec2_network_insights_path#to_port Ec2NetworkInsightsPath#to_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference <a name="Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.internalValue"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a>

---


### Ec2NetworkInsightsPathFilterAtDestinationOutputReference <a name="Ec2NetworkInsightsPathFilterAtDestinationOutputReference" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPathFilterAtDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.putDestinationPortRange">PutDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetDestinationAddress">ResetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetDestinationPortRange">ResetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetSourceAddress">ResetSourceAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationPortRange` <a name="PutDestinationPortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.putDestinationPortRange"></a>

```csharp
private void PutDestinationPortRange(Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a>

---

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.putSourcePortRange"></a>

```csharp
private void PutSourcePortRange(Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange</a>

---

##### `ResetDestinationAddress` <a name="ResetDestinationAddress" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetDestinationAddress"></a>

```csharp
private void ResetDestinationAddress()
```

##### `ResetDestinationPortRange` <a name="ResetDestinationPortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetDestinationPortRange"></a>

```csharp
private void ResetDestinationPortRange()
```

##### `ResetSourceAddress` <a name="ResetSourceAddress" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetSourceAddress"></a>

```csharp
private void ResetSourceAddress()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.resetSourcePortRange"></a>

```csharp
private void ResetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationAddressInput">DestinationAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationPortRangeInput">DestinationPortRangeInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourceAddressInput">SourceAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourceAddress">SourceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination">Ec2NetworkInsightsPathFilterAtDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationPortRange"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference DestinationPortRange { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference</a>

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourcePortRange"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference SourcePortRange { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference</a>

---

##### `DestinationAddressInput`<sup>Optional</sup> <a name="DestinationAddressInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationAddressInput"></a>

```csharp
public string DestinationAddressInput { get; }
```

- *Type:* string

---

##### `DestinationPortRangeInput`<sup>Optional</sup> <a name="DestinationPortRangeInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationPortRangeInput"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange DestinationPortRangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange">Ec2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a>

---

##### `SourceAddressInput`<sup>Optional</sup> <a name="SourceAddressInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourceAddressInput"></a>

```csharp
public string SourceAddressInput { get; }
```

- *Type:* string

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourcePortRangeInput"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange SourcePortRangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange</a>

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; }
```

- *Type:* string

---

##### `SourceAddress`<sup>Required</sup> <a name="SourceAddress" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourceAddress"></a>

```csharp
public string SourceAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationOutputReference.property.internalValue"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestination">Ec2NetworkInsightsPathFilterAtDestination</a>

---


### Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference <a name="Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.internalValue"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange">Ec2NetworkInsightsPathFilterAtDestinationSourcePortRange</a>

---


### Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference <a name="Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.internalValue"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange</a>

---


### Ec2NetworkInsightsPathFilterAtSourceOutputReference <a name="Ec2NetworkInsightsPathFilterAtSourceOutputReference" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPathFilterAtSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.putDestinationPortRange">PutDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetDestinationAddress">ResetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetDestinationPortRange">ResetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetSourceAddress">ResetSourceAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationPortRange` <a name="PutDestinationPortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.putDestinationPortRange"></a>

```csharp
private void PutDestinationPortRange(Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange</a>

---

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.putSourcePortRange"></a>

```csharp
private void PutSourcePortRange(Ec2NetworkInsightsPathFilterAtSourceSourcePortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange">Ec2NetworkInsightsPathFilterAtSourceSourcePortRange</a>

---

##### `ResetDestinationAddress` <a name="ResetDestinationAddress" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetDestinationAddress"></a>

```csharp
private void ResetDestinationAddress()
```

##### `ResetDestinationPortRange` <a name="ResetDestinationPortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetDestinationPortRange"></a>

```csharp
private void ResetDestinationPortRange()
```

##### `ResetSourceAddress` <a name="ResetSourceAddress" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetSourceAddress"></a>

```csharp
private void ResetSourceAddress()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.resetSourcePortRange"></a>

```csharp
private void ResetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference">Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationAddressInput">DestinationAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationPortRangeInput">DestinationPortRangeInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourceAddressInput">SourceAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange">Ec2NetworkInsightsPathFilterAtSourceSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourceAddress">SourceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource">Ec2NetworkInsightsPathFilterAtSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationPortRange"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference DestinationPortRange { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference</a>

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourcePortRange"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference SourcePortRange { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference">Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference</a>

---

##### `DestinationAddressInput`<sup>Optional</sup> <a name="DestinationAddressInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationAddressInput"></a>

```csharp
public string DestinationAddressInput { get; }
```

- *Type:* string

---

##### `DestinationPortRangeInput`<sup>Optional</sup> <a name="DestinationPortRangeInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationPortRangeInput"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange DestinationPortRangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange">Ec2NetworkInsightsPathFilterAtSourceDestinationPortRange</a>

---

##### `SourceAddressInput`<sup>Optional</sup> <a name="SourceAddressInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourceAddressInput"></a>

```csharp
public string SourceAddressInput { get; }
```

- *Type:* string

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourcePortRangeInput"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtSourceSourcePortRange SourcePortRangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange">Ec2NetworkInsightsPathFilterAtSourceSourcePortRange</a>

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; }
```

- *Type:* string

---

##### `SourceAddress`<sup>Required</sup> <a name="SourceAddress" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.sourceAddress"></a>

```csharp
public string SourceAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceOutputReference.property.internalValue"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSource">Ec2NetworkInsightsPathFilterAtSource</a>

---


### Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference <a name="Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange">Ec2NetworkInsightsPathFilterAtSourceSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.internalValue"></a>

```csharp
public Ec2NetworkInsightsPathFilterAtSourceSourcePortRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathFilterAtSourceSourcePortRange">Ec2NetworkInsightsPathFilterAtSourceSourcePortRange</a>

---



