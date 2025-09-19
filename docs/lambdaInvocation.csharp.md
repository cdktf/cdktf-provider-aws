# `lambdaInvocation` Submodule <a name="`lambdaInvocation` Submodule" id="@cdktf/provider-aws.lambdaInvocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaInvocation <a name="LambdaInvocation" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation aws_lambda_invocation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaInvocation(Construct Scope, string Id, LambdaInvocationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig">LambdaInvocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig">LambdaInvocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetLifecycleScope">ResetLifecycleScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetQualifier">ResetQualifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetTerraformKey">ResetTerraformKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetTriggers">ResetTriggers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLifecycleScope` <a name="ResetLifecycleScope" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetLifecycleScope"></a>

```csharp
private void ResetLifecycleScope()
```

##### `ResetQualifier` <a name="ResetQualifier" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetQualifier"></a>

```csharp
private void ResetQualifier()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTerraformKey` <a name="ResetTerraformKey" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetTerraformKey"></a>

```csharp
private void ResetTerraformKey()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetTriggers"></a>

```csharp
private void ResetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LambdaInvocation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaInvocation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaInvocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaInvocation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LambdaInvocation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LambdaInvocation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaInvocation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaInvocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LambdaInvocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.result">Result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.inputInput">InputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.lifecycleScopeInput">LifecycleScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.qualifierInput">QualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformKeyInput">TerraformKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.triggersInput">TriggersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.input">Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.lifecycleScope">LifecycleScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.qualifier">Qualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformKey">TerraformKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.result"></a>

```csharp
public string Result { get; }
```

- *Type:* string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.inputInput"></a>

```csharp
public string InputInput { get; }
```

- *Type:* string

---

##### `LifecycleScopeInput`<sup>Optional</sup> <a name="LifecycleScopeInput" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.lifecycleScopeInput"></a>

```csharp
public string LifecycleScopeInput { get; }
```

- *Type:* string

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.qualifierInput"></a>

```csharp
public string QualifierInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TerraformKeyInput`<sup>Optional</sup> <a name="TerraformKeyInput" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformKeyInput"></a>

```csharp
public string TerraformKeyInput { get; }
```

- *Type:* string

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.triggersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TriggersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.input"></a>

```csharp
public string Input { get; }
```

- *Type:* string

---

##### `LifecycleScope`<sup>Required</sup> <a name="LifecycleScope" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.lifecycleScope"></a>

```csharp
public string LifecycleScope { get; }
```

- *Type:* string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.qualifier"></a>

```csharp
public string Qualifier { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TerraformKey`<sup>Required</sup> <a name="TerraformKey" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformKey"></a>

```csharp
public string TerraformKey { get; }
```

- *Type:* string

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaInvocationConfig <a name="LambdaInvocationConfig" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LambdaInvocationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FunctionName,
    string Input,
    string Id = null,
    string LifecycleScope = null,
    string Qualifier = null,
    string Region = null,
    string TerraformKey = null,
    System.Collections.Generic.IDictionary<string, string> Triggers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#function_name LambdaInvocation#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.input">Input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#input LambdaInvocation#input}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#id LambdaInvocation#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.lifecycleScope">LifecycleScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#lifecycle_scope LambdaInvocation#lifecycle_scope}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.qualifier">Qualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#qualifier LambdaInvocation#qualifier}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.terraformKey">TerraformKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#terraform_key LambdaInvocation#terraform_key}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.triggers">Triggers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#triggers LambdaInvocation#triggers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#function_name LambdaInvocation#function_name}.

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.input"></a>

```csharp
public string Input { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#input LambdaInvocation#input}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#id LambdaInvocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LifecycleScope`<sup>Optional</sup> <a name="LifecycleScope" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.lifecycleScope"></a>

```csharp
public string LifecycleScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#lifecycle_scope LambdaInvocation#lifecycle_scope}.

---

##### `Qualifier`<sup>Optional</sup> <a name="Qualifier" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.qualifier"></a>

```csharp
public string Qualifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#qualifier LambdaInvocation#qualifier}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#region LambdaInvocation#region}

---

##### `TerraformKey`<sup>Optional</sup> <a name="TerraformKey" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.terraformKey"></a>

```csharp
public string TerraformKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#terraform_key LambdaInvocation#terraform_key}.

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.triggers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Triggers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/lambda_invocation#triggers LambdaInvocation#triggers}.

---



