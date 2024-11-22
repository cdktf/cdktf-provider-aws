# `elasticacheReservedCacheNode` Submodule <a name="`elasticacheReservedCacheNode` Submodule" id="@cdktf/provider-aws.elasticacheReservedCacheNode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheReservedCacheNode <a name="ElasticacheReservedCacheNode" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/elasticache_reserved_cache_node aws_elasticache_reserved_cache_node}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheReservedCacheNode(Construct Scope, string Id, ElasticacheReservedCacheNodeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig">ElasticacheReservedCacheNodeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig">ElasticacheReservedCacheNodeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetCacheNodeCount">ResetCacheNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.putTimeouts"></a>

```csharp
private void PutTimeouts(ElasticacheReservedCacheNodeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>

---

##### `ResetCacheNodeCount` <a name="ResetCacheNodeCount" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetCacheNodeCount"></a>

```csharp
private void ResetCacheNodeCount()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticacheReservedCacheNode resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheReservedCacheNode.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheReservedCacheNode.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheReservedCacheNode.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheReservedCacheNode.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ElasticacheReservedCacheNode resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticacheReservedCacheNode to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticacheReservedCacheNode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/elasticache_reserved_cache_node#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ElasticacheReservedCacheNode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeType">CacheNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fixedPrice">FixedPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.offeringType">OfferingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.productDescription">ProductDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.recurringCharges">RecurringCharges</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList">ElasticacheReservedCacheNodeRecurringChargesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference">ElasticacheReservedCacheNodeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.usagePrice">UsagePrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCountInput">CacheNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingIdInput">ReservedCacheNodesOfferingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCount">CacheNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingId">ReservedCacheNodesOfferingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CacheNodeType`<sup>Required</sup> <a name="CacheNodeType" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeType"></a>

```csharp
public string CacheNodeType { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `FixedPrice`<sup>Required</sup> <a name="FixedPrice" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.fixedPrice"></a>

```csharp
public double FixedPrice { get; }
```

- *Type:* double

---

##### `OfferingType`<sup>Required</sup> <a name="OfferingType" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.offeringType"></a>

```csharp
public string OfferingType { get; }
```

- *Type:* string

---

##### `ProductDescription`<sup>Required</sup> <a name="ProductDescription" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.productDescription"></a>

```csharp
public string ProductDescription { get; }
```

- *Type:* string

---

##### `RecurringCharges`<sup>Required</sup> <a name="RecurringCharges" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.recurringCharges"></a>

```csharp
public ElasticacheReservedCacheNodeRecurringChargesList RecurringCharges { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList">ElasticacheReservedCacheNodeRecurringChargesList</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeouts"></a>

```csharp
public ElasticacheReservedCacheNodeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference">ElasticacheReservedCacheNodeTimeoutsOutputReference</a>

---

##### `UsagePrice`<sup>Required</sup> <a name="UsagePrice" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.usagePrice"></a>

```csharp
public double UsagePrice { get; }
```

- *Type:* double

---

##### `CacheNodeCountInput`<sup>Optional</sup> <a name="CacheNodeCountInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCountInput"></a>

```csharp
public double CacheNodeCountInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ReservedCacheNodesOfferingIdInput`<sup>Optional</sup> <a name="ReservedCacheNodesOfferingIdInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingIdInput"></a>

```csharp
public string ReservedCacheNodesOfferingIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CacheNodeCount`<sup>Required</sup> <a name="CacheNodeCount" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.cacheNodeCount"></a>

```csharp
public double CacheNodeCount { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReservedCacheNodesOfferingId`<sup>Required</sup> <a name="ReservedCacheNodesOfferingId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.reservedCacheNodesOfferingId"></a>

```csharp
public string ReservedCacheNodesOfferingId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNode.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheReservedCacheNodeConfig <a name="ElasticacheReservedCacheNodeConfig" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheReservedCacheNodeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ReservedCacheNodesOfferingId,
    double CacheNodeCount = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ElasticacheReservedCacheNodeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.reservedCacheNodesOfferingId">ReservedCacheNodesOfferingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/elasticache_reserved_cache_node#reserved_cache_nodes_offering_id ElasticacheReservedCacheNode#reserved_cache_nodes_offering_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.cacheNodeCount">CacheNodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/elasticache_reserved_cache_node#cache_node_count ElasticacheReservedCacheNode#cache_node_count}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/elasticache_reserved_cache_node#id ElasticacheReservedCacheNode#id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/elasticache_reserved_cache_node#tags ElasticacheReservedCacheNode#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ReservedCacheNodesOfferingId`<sup>Required</sup> <a name="ReservedCacheNodesOfferingId" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.reservedCacheNodesOfferingId"></a>

```csharp
public string ReservedCacheNodesOfferingId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/elasticache_reserved_cache_node#reserved_cache_nodes_offering_id ElasticacheReservedCacheNode#reserved_cache_nodes_offering_id}.

---

##### `CacheNodeCount`<sup>Optional</sup> <a name="CacheNodeCount" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.cacheNodeCount"></a>

```csharp
public double CacheNodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/elasticache_reserved_cache_node#cache_node_count ElasticacheReservedCacheNode#cache_node_count}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/elasticache_reserved_cache_node#id ElasticacheReservedCacheNode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/elasticache_reserved_cache_node#tags ElasticacheReservedCacheNode#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeConfig.property.timeouts"></a>

```csharp
public ElasticacheReservedCacheNodeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts">ElasticacheReservedCacheNodeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/elasticache_reserved_cache_node#timeouts ElasticacheReservedCacheNode#timeouts}

---

### ElasticacheReservedCacheNodeRecurringCharges <a name="ElasticacheReservedCacheNodeRecurringCharges" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheReservedCacheNodeRecurringCharges {

};
```


### ElasticacheReservedCacheNodeTimeouts <a name="ElasticacheReservedCacheNodeTimeouts" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheReservedCacheNodeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/elasticache_reserved_cache_node#create ElasticacheReservedCacheNode#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/elasticache_reserved_cache_node#delete ElasticacheReservedCacheNode#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/elasticache_reserved_cache_node#update ElasticacheReservedCacheNode#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheReservedCacheNodeRecurringChargesList <a name="ElasticacheReservedCacheNodeRecurringChargesList" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheReservedCacheNodeRecurringChargesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.get"></a>

```csharp
private ElasticacheReservedCacheNodeRecurringChargesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ElasticacheReservedCacheNodeRecurringChargesOutputReference <a name="ElasticacheReservedCacheNodeRecurringChargesOutputReference" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheReservedCacheNodeRecurringChargesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeAmount">RecurringChargeAmount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeFrequency">RecurringChargeFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges">ElasticacheReservedCacheNodeRecurringCharges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecurringChargeAmount`<sup>Required</sup> <a name="RecurringChargeAmount" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeAmount"></a>

```csharp
public double RecurringChargeAmount { get; }
```

- *Type:* double

---

##### `RecurringChargeFrequency`<sup>Required</sup> <a name="RecurringChargeFrequency" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.recurringChargeFrequency"></a>

```csharp
public string RecurringChargeFrequency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringChargesOutputReference.property.internalValue"></a>

```csharp
public ElasticacheReservedCacheNodeRecurringCharges InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeRecurringCharges">ElasticacheReservedCacheNodeRecurringCharges</a>

---


### ElasticacheReservedCacheNodeTimeoutsOutputReference <a name="ElasticacheReservedCacheNodeTimeoutsOutputReference" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheReservedCacheNodeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticacheReservedCacheNode.ElasticacheReservedCacheNodeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



