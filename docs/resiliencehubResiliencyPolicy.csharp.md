# `resiliencehubResiliencyPolicy` Submodule <a name="`resiliencehubResiliencyPolicy` Submodule" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResiliencehubResiliencyPolicy <a name="ResiliencehubResiliencyPolicy" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy aws_resiliencehub_resiliency_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ResiliencehubResiliencyPolicy(Construct Scope, string Id, ResiliencehubResiliencyPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig">ResiliencehubResiliencyPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig">ResiliencehubResiliencyPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetDataLocationConstraint">ResetDataLocationConstraint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicy` <a name="PutPolicy" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy"></a>

```csharp
private void PutPolicy(ResiliencehubResiliencyPolicyPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(ResiliencehubResiliencyPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts">ResiliencehubResiliencyPolicyTimeouts</a>

---

##### `ResetDataLocationConstraint` <a name="ResetDataLocationConstraint" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetDataLocationConstraint"></a>

```csharp
private void ResetDataLocationConstraint()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResiliencehubResiliencyPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ResiliencehubResiliencyPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ResiliencehubResiliencyPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ResiliencehubResiliencyPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ResiliencehubResiliencyPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ResiliencehubResiliencyPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResiliencehubResiliencyPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResiliencehubResiliencyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ResiliencehubResiliencyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.estimatedCostTier">EstimatedCostTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference">ResiliencehubResiliencyPolicyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference">ResiliencehubResiliencyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraintInput">DataLocationConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyInput">PolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraint">DataLocationConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tier">Tier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EstimatedCostTier`<sup>Required</sup> <a name="EstimatedCostTier" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.estimatedCostTier"></a>

```csharp
public string EstimatedCostTier { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policy"></a>

```csharp
public ResiliencehubResiliencyPolicyPolicyOutputReference Policy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference">ResiliencehubResiliencyPolicyPolicyOutputReference</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.timeouts"></a>

```csharp
public ResiliencehubResiliencyPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference">ResiliencehubResiliencyPolicyTimeoutsOutputReference</a>

---

##### `DataLocationConstraintInput`<sup>Optional</sup> <a name="DataLocationConstraintInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraintInput"></a>

```csharp
public string DataLocationConstraintInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.policyInput"></a>

```csharp
public object PolicyInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DataLocationConstraint`<sup>Required</sup> <a name="DataLocationConstraint" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.dataLocationConstraint"></a>

```csharp
public string DataLocationConstraint { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResiliencehubResiliencyPolicyConfig <a name="ResiliencehubResiliencyPolicyConfig" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ResiliencehubResiliencyPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Tier,
    string DataLocationConstraint = null,
    string Description = null,
    ResiliencehubResiliencyPolicyPolicy Policy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ResiliencehubResiliencyPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.name">Name</a></code> | <code>string</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tier">Tier</a></code> | <code>string</code> | The tier for the resiliency policy, ranging from the highest severity (MissionCritical) to lowest (NonCritical). |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dataLocationConstraint">DataLocationConstraint</a></code> | <code>string</code> | Specifies a high-level geographical location constraint for where resilience policy data can be stored. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.description">Description</a></code> | <code>string</code> | The description for the policy. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policy">Policy</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a></code> | policy block. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts">ResiliencehubResiliencyPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#name ResiliencehubResiliencyPolicy#name}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

The tier for the resiliency policy, ranging from the highest severity (MissionCritical) to lowest (NonCritical).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#tier ResiliencehubResiliencyPolicy#tier}

---

##### `DataLocationConstraint`<sup>Optional</sup> <a name="DataLocationConstraint" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.dataLocationConstraint"></a>

```csharp
public string DataLocationConstraint { get; set; }
```

- *Type:* string

Specifies a high-level geographical location constraint for where resilience policy data can be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#data_location_constraint ResiliencehubResiliencyPolicy#data_location_constraint}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#description ResiliencehubResiliencyPolicy#description}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.policy"></a>

```csharp
public ResiliencehubResiliencyPolicyPolicy Policy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy">ResiliencehubResiliencyPolicyPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#policy ResiliencehubResiliencyPolicy#policy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#tags ResiliencehubResiliencyPolicy#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyConfig.property.timeouts"></a>

```csharp
public ResiliencehubResiliencyPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts">ResiliencehubResiliencyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#timeouts ResiliencehubResiliencyPolicy#timeouts}

---

### ResiliencehubResiliencyPolicyPolicy <a name="ResiliencehubResiliencyPolicyPolicy" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ResiliencehubResiliencyPolicyPolicy {
    ResiliencehubResiliencyPolicyPolicyAz Az,
    ResiliencehubResiliencyPolicyPolicyHardware Hardware,
    ResiliencehubResiliencyPolicyPolicySoftware SoftwareAttribute,
    ResiliencehubResiliencyPolicyPolicyRegion Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.az">Az</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a></code> | az block. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.hardware">Hardware</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a></code> | hardware block. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.softwareAttribute">SoftwareAttribute</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a></code> | software block. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.region">Region</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a></code> | region block. |

---

##### `Az`<sup>Required</sup> <a name="Az" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.az"></a>

```csharp
public ResiliencehubResiliencyPolicyPolicyAz Az { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

az block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#az ResiliencehubResiliencyPolicy#az}

---

##### `Hardware`<sup>Required</sup> <a name="Hardware" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.hardware"></a>

```csharp
public ResiliencehubResiliencyPolicyPolicyHardware Hardware { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

hardware block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#hardware ResiliencehubResiliencyPolicy#hardware}

---

##### `SoftwareAttribute`<sup>Required</sup> <a name="SoftwareAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.softwareAttribute"></a>

```csharp
public ResiliencehubResiliencyPolicyPolicySoftware SoftwareAttribute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

software block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#software ResiliencehubResiliencyPolicy#software}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicy.property.region"></a>

```csharp
public ResiliencehubResiliencyPolicyPolicyRegion Region { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#region ResiliencehubResiliencyPolicy#region}

---

### ResiliencehubResiliencyPolicyPolicyAz <a name="ResiliencehubResiliencyPolicyPolicyAz" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ResiliencehubResiliencyPolicyPolicyAz {
    string Rpo,
    string Rto
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rpo">Rpo</a></code> | <code>string</code> | Recovery Point Objective (RPO) as a Go duration. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rto">Rto</a></code> | <code>string</code> | Recovery Time Objective (RTO) as a Go duration. |

---

##### `Rpo`<sup>Required</sup> <a name="Rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rpo"></a>

```csharp
public string Rpo { get; set; }
```

- *Type:* string

Recovery Point Objective (RPO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}

---

##### `Rto`<sup>Required</sup> <a name="Rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz.property.rto"></a>

```csharp
public string Rto { get; set; }
```

- *Type:* string

Recovery Time Objective (RTO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}

---

### ResiliencehubResiliencyPolicyPolicyHardware <a name="ResiliencehubResiliencyPolicyPolicyHardware" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ResiliencehubResiliencyPolicyPolicyHardware {
    string Rpo,
    string Rto
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rpo">Rpo</a></code> | <code>string</code> | Recovery Point Objective (RPO) as a Go duration. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rto">Rto</a></code> | <code>string</code> | Recovery Time Objective (RTO) as a Go duration. |

---

##### `Rpo`<sup>Required</sup> <a name="Rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rpo"></a>

```csharp
public string Rpo { get; set; }
```

- *Type:* string

Recovery Point Objective (RPO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}

---

##### `Rto`<sup>Required</sup> <a name="Rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware.property.rto"></a>

```csharp
public string Rto { get; set; }
```

- *Type:* string

Recovery Time Objective (RTO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}

---

### ResiliencehubResiliencyPolicyPolicyRegion <a name="ResiliencehubResiliencyPolicyPolicyRegion" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ResiliencehubResiliencyPolicyPolicyRegion {
    string Rpo = null,
    string Rto = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rpo">Rpo</a></code> | <code>string</code> | Recovery Point Objective (RPO) as a Go duration. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rto">Rto</a></code> | <code>string</code> | Recovery Time Objective (RTO) as a Go duration. |

---

##### `Rpo`<sup>Optional</sup> <a name="Rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rpo"></a>

```csharp
public string Rpo { get; set; }
```

- *Type:* string

Recovery Point Objective (RPO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}

---

##### `Rto`<sup>Optional</sup> <a name="Rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion.property.rto"></a>

```csharp
public string Rto { get; set; }
```

- *Type:* string

Recovery Time Objective (RTO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}

---

### ResiliencehubResiliencyPolicyPolicySoftware <a name="ResiliencehubResiliencyPolicyPolicySoftware" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ResiliencehubResiliencyPolicyPolicySoftware {
    string Rpo,
    string Rto
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rpo">Rpo</a></code> | <code>string</code> | Recovery Point Objective (RPO) as a Go duration. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rto">Rto</a></code> | <code>string</code> | Recovery Time Objective (RTO) as a Go duration. |

---

##### `Rpo`<sup>Required</sup> <a name="Rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rpo"></a>

```csharp
public string Rpo { get; set; }
```

- *Type:* string

Recovery Point Objective (RPO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#rpo ResiliencehubResiliencyPolicy#rpo}

---

##### `Rto`<sup>Required</sup> <a name="Rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware.property.rto"></a>

```csharp
public string Rto { get; set; }
```

- *Type:* string

Recovery Time Objective (RTO) as a Go duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#rto ResiliencehubResiliencyPolicy#rto}

---

### ResiliencehubResiliencyPolicyTimeouts <a name="ResiliencehubResiliencyPolicyTimeouts" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ResiliencehubResiliencyPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#create ResiliencehubResiliencyPolicy#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#delete ResiliencehubResiliencyPolicy#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/resiliencehub_resiliency_policy#update ResiliencehubResiliencyPolicy#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ResiliencehubResiliencyPolicyPolicyAzOutputReference <a name="ResiliencehubResiliencyPolicyPolicyAzOutputReference" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ResiliencehubResiliencyPolicyPolicyAzOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInput">RpoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInput">RtoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpo">Rpo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rto">Rto</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RpoInput`<sup>Optional</sup> <a name="RpoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpoInput"></a>

```csharp
public string RpoInput { get; }
```

- *Type:* string

---

##### `RtoInput`<sup>Optional</sup> <a name="RtoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rtoInput"></a>

```csharp
public string RtoInput { get; }
```

- *Type:* string

---

##### `Rpo`<sup>Required</sup> <a name="Rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rpo"></a>

```csharp
public string Rpo { get; }
```

- *Type:* string

---

##### `Rto`<sup>Required</sup> <a name="Rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.rto"></a>

```csharp
public string Rto { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResiliencehubResiliencyPolicyPolicyHardwareOutputReference <a name="ResiliencehubResiliencyPolicyPolicyHardwareOutputReference" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ResiliencehubResiliencyPolicyPolicyHardwareOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInput">RpoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInput">RtoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpo">Rpo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rto">Rto</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RpoInput`<sup>Optional</sup> <a name="RpoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpoInput"></a>

```csharp
public string RpoInput { get; }
```

- *Type:* string

---

##### `RtoInput`<sup>Optional</sup> <a name="RtoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rtoInput"></a>

```csharp
public string RtoInput { get; }
```

- *Type:* string

---

##### `Rpo`<sup>Required</sup> <a name="Rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rpo"></a>

```csharp
public string Rpo { get; }
```

- *Type:* string

---

##### `Rto`<sup>Required</sup> <a name="Rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.rto"></a>

```csharp
public string Rto { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResiliencehubResiliencyPolicyPolicyOutputReference <a name="ResiliencehubResiliencyPolicyPolicyOutputReference" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ResiliencehubResiliencyPolicyPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz">PutAz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware">PutHardware</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion">PutRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute">PutSoftwareAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAz` <a name="PutAz" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz"></a>

```csharp
private void PutAz(ResiliencehubResiliencyPolicyPolicyAz Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putAz.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAz">ResiliencehubResiliencyPolicyPolicyAz</a>

---

##### `PutHardware` <a name="PutHardware" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware"></a>

```csharp
private void PutHardware(ResiliencehubResiliencyPolicyPolicyHardware Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putHardware.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardware">ResiliencehubResiliencyPolicyPolicyHardware</a>

---

##### `PutRegion` <a name="PutRegion" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion"></a>

```csharp
private void PutRegion(ResiliencehubResiliencyPolicyPolicyRegion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putRegion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegion">ResiliencehubResiliencyPolicyPolicyRegion</a>

---

##### `PutSoftwareAttribute` <a name="PutSoftwareAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute"></a>

```csharp
private void PutSoftwareAttribute(ResiliencehubResiliencyPolicyPolicySoftware Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.putSoftwareAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftware">ResiliencehubResiliencyPolicyPolicySoftware</a>

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.az">Az</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference">ResiliencehubResiliencyPolicyPolicyAzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardware">Hardware</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference">ResiliencehubResiliencyPolicyPolicyHardwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.region">Region</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference">ResiliencehubResiliencyPolicyPolicyRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttribute">SoftwareAttribute</a></code> | <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference">ResiliencehubResiliencyPolicyPolicySoftwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.azInput">AzInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardwareInput">HardwareInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.regionInput">RegionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttributeInput">SoftwareAttributeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Az`<sup>Required</sup> <a name="Az" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.az"></a>

```csharp
public ResiliencehubResiliencyPolicyPolicyAzOutputReference Az { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyAzOutputReference">ResiliencehubResiliencyPolicyPolicyAzOutputReference</a>

---

##### `Hardware`<sup>Required</sup> <a name="Hardware" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardware"></a>

```csharp
public ResiliencehubResiliencyPolicyPolicyHardwareOutputReference Hardware { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyHardwareOutputReference">ResiliencehubResiliencyPolicyPolicyHardwareOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.region"></a>

```csharp
public ResiliencehubResiliencyPolicyPolicyRegionOutputReference Region { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference">ResiliencehubResiliencyPolicyPolicyRegionOutputReference</a>

---

##### `SoftwareAttribute`<sup>Required</sup> <a name="SoftwareAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttribute"></a>

```csharp
public ResiliencehubResiliencyPolicyPolicySoftwareOutputReference SoftwareAttribute { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference">ResiliencehubResiliencyPolicyPolicySoftwareOutputReference</a>

---

##### `AzInput`<sup>Optional</sup> <a name="AzInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.azInput"></a>

```csharp
public object AzInput { get; }
```

- *Type:* object

---

##### `HardwareInput`<sup>Optional</sup> <a name="HardwareInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.hardwareInput"></a>

```csharp
public object HardwareInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.regionInput"></a>

```csharp
public object RegionInput { get; }
```

- *Type:* object

---

##### `SoftwareAttributeInput`<sup>Optional</sup> <a name="SoftwareAttributeInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.softwareAttributeInput"></a>

```csharp
public object SoftwareAttributeInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResiliencehubResiliencyPolicyPolicyRegionOutputReference <a name="ResiliencehubResiliencyPolicyPolicyRegionOutputReference" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ResiliencehubResiliencyPolicyPolicyRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRpo">ResetRpo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRto">ResetRto</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRpo` <a name="ResetRpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRpo"></a>

```csharp
private void ResetRpo()
```

##### `ResetRto` <a name="ResetRto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.resetRto"></a>

```csharp
private void ResetRto()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInput">RpoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInput">RtoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpo">Rpo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rto">Rto</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RpoInput`<sup>Optional</sup> <a name="RpoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpoInput"></a>

```csharp
public string RpoInput { get; }
```

- *Type:* string

---

##### `RtoInput`<sup>Optional</sup> <a name="RtoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rtoInput"></a>

```csharp
public string RtoInput { get; }
```

- *Type:* string

---

##### `Rpo`<sup>Required</sup> <a name="Rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rpo"></a>

```csharp
public string Rpo { get; }
```

- *Type:* string

---

##### `Rto`<sup>Required</sup> <a name="Rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.rto"></a>

```csharp
public string Rto { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicyRegionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResiliencehubResiliencyPolicyPolicySoftwareOutputReference <a name="ResiliencehubResiliencyPolicyPolicySoftwareOutputReference" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ResiliencehubResiliencyPolicyPolicySoftwareOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInput">RpoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInput">RtoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpo">Rpo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rto">Rto</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RpoInput`<sup>Optional</sup> <a name="RpoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpoInput"></a>

```csharp
public string RpoInput { get; }
```

- *Type:* string

---

##### `RtoInput`<sup>Optional</sup> <a name="RtoInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rtoInput"></a>

```csharp
public string RtoInput { get; }
```

- *Type:* string

---

##### `Rpo`<sup>Required</sup> <a name="Rpo" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rpo"></a>

```csharp
public string Rpo { get; }
```

- *Type:* string

---

##### `Rto`<sup>Required</sup> <a name="Rto" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.rto"></a>

```csharp
public string Rto { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyPolicySoftwareOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ResiliencehubResiliencyPolicyTimeoutsOutputReference <a name="ResiliencehubResiliencyPolicyTimeoutsOutputReference" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ResiliencehubResiliencyPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.resiliencehubResiliencyPolicy.ResiliencehubResiliencyPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



