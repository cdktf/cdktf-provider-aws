# `ssmcontactsRotation` Submodule <a name="`ssmcontactsRotation` Submodule" id="@cdktf/provider-aws.ssmcontactsRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsRotation <a name="SsmcontactsRotation" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation aws_ssmcontacts_rotation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotation(Construct Scope, string Id, SsmcontactsRotationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig">SsmcontactsRotationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig">SsmcontactsRotationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.putRecurrence">PutRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetRecurrence">ResetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRecurrence` <a name="PutRecurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.putRecurrence"></a>

```csharp
private void PutRecurrence(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.putRecurrence.parameter.value"></a>

- *Type:* object

---

##### `ResetRecurrence` <a name="ResetRecurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetRecurrence"></a>

```csharp
private void ResetRecurrence()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SsmcontactsRotation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmcontactsRotation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmcontactsRotation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmcontactsRotation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SsmcontactsRotation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SsmcontactsRotation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmcontactsRotation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmcontactsRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SsmcontactsRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.recurrence">Recurrence</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList">SsmcontactsRotationRecurrenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.contactIdsInput">ContactIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.recurrenceInput">RecurrenceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneIdInput">TimeZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.contactIds">ContactIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneId">TimeZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.recurrence"></a>

```csharp
public SsmcontactsRotationRecurrenceList Recurrence { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList">SsmcontactsRotationRecurrenceList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ContactIdsInput`<sup>Optional</sup> <a name="ContactIdsInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.contactIdsInput"></a>

```csharp
public string[] ContactIdsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.recurrenceInput"></a>

```csharp
public object RecurrenceInput { get; }
```

- *Type:* object

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeZoneIdInput`<sup>Optional</sup> <a name="TimeZoneIdInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneIdInput"></a>

```csharp
public string TimeZoneIdInput { get; }
```

- *Type:* string

---

##### `ContactIds`<sup>Required</sup> <a name="ContactIds" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.contactIds"></a>

```csharp
public string[] ContactIds { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeZoneId`<sup>Required</sup> <a name="TimeZoneId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneId"></a>

```csharp
public string TimeZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsRotationConfig <a name="SsmcontactsRotationConfig" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] ContactIds,
    string Name,
    string TimeZoneId,
    object Recurrence = null,
    string StartTime = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.contactIds">ContactIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#contact_ids SsmcontactsRotation#contact_ids}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#name SsmcontactsRotation#name}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.timeZoneId">TimeZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#time_zone_id SsmcontactsRotation#time_zone_id}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.recurrence">Recurrence</a></code> | <code>object</code> | recurrence block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#start_time SsmcontactsRotation#start_time}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContactIds`<sup>Required</sup> <a name="ContactIds" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.contactIds"></a>

```csharp
public string[] ContactIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#contact_ids SsmcontactsRotation#contact_ids}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#name SsmcontactsRotation#name}.

---

##### `TimeZoneId`<sup>Required</sup> <a name="TimeZoneId" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.timeZoneId"></a>

```csharp
public string TimeZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#time_zone_id SsmcontactsRotation#time_zone_id}.

---

##### `Recurrence`<sup>Optional</sup> <a name="Recurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.recurrence"></a>

```csharp
public object Recurrence { get; set; }
```

- *Type:* object

recurrence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#recurrence SsmcontactsRotation#recurrence}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#start_time SsmcontactsRotation#start_time}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}.

---

### SsmcontactsRotationRecurrence <a name="SsmcontactsRotationRecurrence" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrence {
    double NumberOfOnCalls,
    double RecurrenceMultiplier,
    object DailySettings = null,
    object MonthlySettings = null,
    object ShiftCoverages = null,
    object WeeklySettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.numberOfOnCalls">NumberOfOnCalls</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#number_of_on_calls SsmcontactsRotation#number_of_on_calls}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.recurrenceMultiplier">RecurrenceMultiplier</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#recurrence_multiplier SsmcontactsRotation#recurrence_multiplier}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.dailySettings">DailySettings</a></code> | <code>object</code> | daily_settings block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.monthlySettings">MonthlySettings</a></code> | <code>object</code> | monthly_settings block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.shiftCoverages">ShiftCoverages</a></code> | <code>object</code> | shift_coverages block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.weeklySettings">WeeklySettings</a></code> | <code>object</code> | weekly_settings block. |

---

##### `NumberOfOnCalls`<sup>Required</sup> <a name="NumberOfOnCalls" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.numberOfOnCalls"></a>

```csharp
public double NumberOfOnCalls { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#number_of_on_calls SsmcontactsRotation#number_of_on_calls}.

---

##### `RecurrenceMultiplier`<sup>Required</sup> <a name="RecurrenceMultiplier" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.recurrenceMultiplier"></a>

```csharp
public double RecurrenceMultiplier { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#recurrence_multiplier SsmcontactsRotation#recurrence_multiplier}.

---

##### `DailySettings`<sup>Optional</sup> <a name="DailySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.dailySettings"></a>

```csharp
public object DailySettings { get; set; }
```

- *Type:* object

daily_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#daily_settings SsmcontactsRotation#daily_settings}

---

##### `MonthlySettings`<sup>Optional</sup> <a name="MonthlySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.monthlySettings"></a>

```csharp
public object MonthlySettings { get; set; }
```

- *Type:* object

monthly_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#monthly_settings SsmcontactsRotation#monthly_settings}

---

##### `ShiftCoverages`<sup>Optional</sup> <a name="ShiftCoverages" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.shiftCoverages"></a>

```csharp
public object ShiftCoverages { get; set; }
```

- *Type:* object

shift_coverages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#shift_coverages SsmcontactsRotation#shift_coverages}

---

##### `WeeklySettings`<sup>Optional</sup> <a name="WeeklySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.weeklySettings"></a>

```csharp
public object WeeklySettings { get; set; }
```

- *Type:* object

weekly_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#weekly_settings SsmcontactsRotation#weekly_settings}

---

### SsmcontactsRotationRecurrenceDailySettings <a name="SsmcontactsRotationRecurrenceDailySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceDailySettings {
    double HourOfDay,
    double MinuteOfHour
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}. |

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}.

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettings.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}.

---

### SsmcontactsRotationRecurrenceMonthlySettings <a name="SsmcontactsRotationRecurrenceMonthlySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceMonthlySettings {
    double DayOfMonth,
    object HandOffTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.dayOfMonth">DayOfMonth</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#day_of_month SsmcontactsRotation#day_of_month}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.handOffTime">HandOffTime</a></code> | <code>object</code> | hand_off_time block. |

---

##### `DayOfMonth`<sup>Required</sup> <a name="DayOfMonth" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.dayOfMonth"></a>

```csharp
public double DayOfMonth { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#day_of_month SsmcontactsRotation#day_of_month}.

---

##### `HandOffTime`<sup>Optional</sup> <a name="HandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.handOffTime"></a>

```csharp
public object HandOffTime { get; set; }
```

- *Type:* object

hand_off_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#hand_off_time SsmcontactsRotation#hand_off_time}

---

### SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime <a name="SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime {
    double HourOfDay,
    double MinuteOfHour
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}. |

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}.

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTime.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}.

---

### SsmcontactsRotationRecurrenceShiftCoverages <a name="SsmcontactsRotationRecurrenceShiftCoverages" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceShiftCoverages {
    string MapBlockKey,
    object CoverageTimes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.mapBlockKey">MapBlockKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#map_block_key SsmcontactsRotation#map_block_key}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.coverageTimes">CoverageTimes</a></code> | <code>object</code> | coverage_times block. |

---

##### `MapBlockKey`<sup>Required</sup> <a name="MapBlockKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.mapBlockKey"></a>

```csharp
public string MapBlockKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#map_block_key SsmcontactsRotation#map_block_key}.

---

##### `CoverageTimes`<sup>Optional</sup> <a name="CoverageTimes" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.coverageTimes"></a>

```csharp
public object CoverageTimes { get; set; }
```

- *Type:* object

coverage_times block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#coverage_times SsmcontactsRotation#coverage_times}

---

### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes {
    object End = null,
    object Start = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.end">End</a></code> | <code>object</code> | end block. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.start">Start</a></code> | <code>object</code> | start block. |

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.end"></a>

```csharp
public object End { get; set; }
```

- *Type:* object

end block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#end SsmcontactsRotation#end}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.start"></a>

```csharp
public object Start { get; set; }
```

- *Type:* object

start block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#start SsmcontactsRotation#start}

---

### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd {
    double HourOfDay,
    double MinuteOfHour
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}. |

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}.

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEnd.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}.

---

### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart {
    double HourOfDay,
    double MinuteOfHour
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}. |

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}.

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStart.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}.

---

### SsmcontactsRotationRecurrenceWeeklySettings <a name="SsmcontactsRotationRecurrenceWeeklySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceWeeklySettings {
    string DayOfWeek,
    object HandOffTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#day_of_week SsmcontactsRotation#day_of_week}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.handOffTime">HandOffTime</a></code> | <code>object</code> | hand_off_time block. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#day_of_week SsmcontactsRotation#day_of_week}.

---

##### `HandOffTime`<sup>Optional</sup> <a name="HandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.handOffTime"></a>

```csharp
public object HandOffTime { get; set; }
```

- *Type:* object

hand_off_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#hand_off_time SsmcontactsRotation#hand_off_time}

---

### SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime <a name="SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime {
    double HourOfDay,
    double MinuteOfHour
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}. |

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#hour_of_day SsmcontactsRotation#hour_of_day}.

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTime.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/ssmcontacts_rotation#minute_of_hour SsmcontactsRotation#minute_of_hour}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsRotationRecurrenceDailySettingsList <a name="SsmcontactsRotationRecurrenceDailySettingsList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceDailySettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.get"></a>

```csharp
private SsmcontactsRotationRecurrenceDailySettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceDailySettingsOutputReference <a name="SsmcontactsRotationRecurrenceDailySettingsOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceDailySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDayInput">HourOfDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHourInput">MinuteOfHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HourOfDayInput`<sup>Optional</sup> <a name="HourOfDayInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDayInput"></a>

```csharp
public double HourOfDayInput { get; }
```

- *Type:* double

---

##### `MinuteOfHourInput`<sup>Optional</sup> <a name="MinuteOfHourInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHourInput"></a>

```csharp
public double MinuteOfHourInput { get; }
```

- *Type:* double

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceList <a name="SsmcontactsRotationRecurrenceList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.get"></a>

```csharp
private SsmcontactsRotationRecurrenceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList <a name="SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get"></a>

```csharp
private SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference <a name="SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDayInput">HourOfDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHourInput">MinuteOfHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HourOfDayInput`<sup>Optional</sup> <a name="HourOfDayInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDayInput"></a>

```csharp
public double HourOfDayInput { get; }
```

- *Type:* double

---

##### `MinuteOfHourInput`<sup>Optional</sup> <a name="MinuteOfHourInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHourInput"></a>

```csharp
public double MinuteOfHourInput { get; }
```

- *Type:* double

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceMonthlySettingsList <a name="SsmcontactsRotationRecurrenceMonthlySettingsList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceMonthlySettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.get"></a>

```csharp
private SsmcontactsRotationRecurrenceMonthlySettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceMonthlySettingsOutputReference <a name="SsmcontactsRotationRecurrenceMonthlySettingsOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceMonthlySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.putHandOffTime">PutHandOffTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resetHandOffTime">ResetHandOffTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHandOffTime` <a name="PutHandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.putHandOffTime"></a>

```csharp
private void PutHandOffTime(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.putHandOffTime.parameter.value"></a>

- *Type:* object

---

##### `ResetHandOffTime` <a name="ResetHandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resetHandOffTime"></a>

```csharp
private void ResetHandOffTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime">HandOffTime</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonthInput">DayOfMonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTimeInput">HandOffTimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth">DayOfMonth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HandOffTime`<sup>Required</sup> <a name="HandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime"></a>

```csharp
public SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList HandOffTime { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList">SsmcontactsRotationRecurrenceMonthlySettingsHandOffTimeList</a>

---

##### `DayOfMonthInput`<sup>Optional</sup> <a name="DayOfMonthInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonthInput"></a>

```csharp
public double DayOfMonthInput { get; }
```

- *Type:* double

---

##### `HandOffTimeInput`<sup>Optional</sup> <a name="HandOffTimeInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTimeInput"></a>

```csharp
public object HandOffTimeInput { get; }
```

- *Type:* object

---

##### `DayOfMonth`<sup>Required</sup> <a name="DayOfMonth" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth"></a>

```csharp
public double DayOfMonth { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceOutputReference <a name="SsmcontactsRotationRecurrenceOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putDailySettings">PutDailySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putMonthlySettings">PutMonthlySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putShiftCoverages">PutShiftCoverages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putWeeklySettings">PutWeeklySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetDailySettings">ResetDailySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetMonthlySettings">ResetMonthlySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetShiftCoverages">ResetShiftCoverages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetWeeklySettings">ResetWeeklySettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDailySettings` <a name="PutDailySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putDailySettings"></a>

```csharp
private void PutDailySettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putDailySettings.parameter.value"></a>

- *Type:* object

---

##### `PutMonthlySettings` <a name="PutMonthlySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putMonthlySettings"></a>

```csharp
private void PutMonthlySettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putMonthlySettings.parameter.value"></a>

- *Type:* object

---

##### `PutShiftCoverages` <a name="PutShiftCoverages" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putShiftCoverages"></a>

```csharp
private void PutShiftCoverages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putShiftCoverages.parameter.value"></a>

- *Type:* object

---

##### `PutWeeklySettings` <a name="PutWeeklySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putWeeklySettings"></a>

```csharp
private void PutWeeklySettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putWeeklySettings.parameter.value"></a>

- *Type:* object

---

##### `ResetDailySettings` <a name="ResetDailySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetDailySettings"></a>

```csharp
private void ResetDailySettings()
```

##### `ResetMonthlySettings` <a name="ResetMonthlySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetMonthlySettings"></a>

```csharp
private void ResetMonthlySettings()
```

##### `ResetShiftCoverages` <a name="ResetShiftCoverages" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetShiftCoverages"></a>

```csharp
private void ResetShiftCoverages()
```

##### `ResetWeeklySettings` <a name="ResetWeeklySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetWeeklySettings"></a>

```csharp
private void ResetWeeklySettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettings">DailySettings</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList">SsmcontactsRotationRecurrenceDailySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettings">MonthlySettings</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList">SsmcontactsRotationRecurrenceMonthlySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages">ShiftCoverages</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList">SsmcontactsRotationRecurrenceShiftCoveragesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettings">WeeklySettings</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList">SsmcontactsRotationRecurrenceWeeklySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettingsInput">DailySettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettingsInput">MonthlySettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCallsInput">NumberOfOnCallsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplierInput">RecurrenceMultiplierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoveragesInput">ShiftCoveragesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettingsInput">WeeklySettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls">NumberOfOnCalls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier">RecurrenceMultiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DailySettings`<sup>Required</sup> <a name="DailySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettings"></a>

```csharp
public SsmcontactsRotationRecurrenceDailySettingsList DailySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceDailySettingsList">SsmcontactsRotationRecurrenceDailySettingsList</a>

---

##### `MonthlySettings`<sup>Required</sup> <a name="MonthlySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettings"></a>

```csharp
public SsmcontactsRotationRecurrenceMonthlySettingsList MonthlySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList">SsmcontactsRotationRecurrenceMonthlySettingsList</a>

---

##### `ShiftCoverages`<sup>Required</sup> <a name="ShiftCoverages" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages"></a>

```csharp
public SsmcontactsRotationRecurrenceShiftCoveragesList ShiftCoverages { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList">SsmcontactsRotationRecurrenceShiftCoveragesList</a>

---

##### `WeeklySettings`<sup>Required</sup> <a name="WeeklySettings" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettings"></a>

```csharp
public SsmcontactsRotationRecurrenceWeeklySettingsList WeeklySettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList">SsmcontactsRotationRecurrenceWeeklySettingsList</a>

---

##### `DailySettingsInput`<sup>Optional</sup> <a name="DailySettingsInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettingsInput"></a>

```csharp
public object DailySettingsInput { get; }
```

- *Type:* object

---

##### `MonthlySettingsInput`<sup>Optional</sup> <a name="MonthlySettingsInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettingsInput"></a>

```csharp
public object MonthlySettingsInput { get; }
```

- *Type:* object

---

##### `NumberOfOnCallsInput`<sup>Optional</sup> <a name="NumberOfOnCallsInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCallsInput"></a>

```csharp
public double NumberOfOnCallsInput { get; }
```

- *Type:* double

---

##### `RecurrenceMultiplierInput`<sup>Optional</sup> <a name="RecurrenceMultiplierInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplierInput"></a>

```csharp
public double RecurrenceMultiplierInput { get; }
```

- *Type:* double

---

##### `ShiftCoveragesInput`<sup>Optional</sup> <a name="ShiftCoveragesInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoveragesInput"></a>

```csharp
public object ShiftCoveragesInput { get; }
```

- *Type:* object

---

##### `WeeklySettingsInput`<sup>Optional</sup> <a name="WeeklySettingsInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettingsInput"></a>

```csharp
public object WeeklySettingsInput { get; }
```

- *Type:* object

---

##### `NumberOfOnCalls`<sup>Required</sup> <a name="NumberOfOnCalls" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls"></a>

```csharp
public double NumberOfOnCalls { get; }
```

- *Type:* double

---

##### `RecurrenceMultiplier`<sup>Required</sup> <a name="RecurrenceMultiplier" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier"></a>

```csharp
public double RecurrenceMultiplier { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get"></a>

```csharp
private SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDayInput">HourOfDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHourInput">MinuteOfHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HourOfDayInput`<sup>Optional</sup> <a name="HourOfDayInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDayInput"></a>

```csharp
public double HourOfDayInput { get; }
```

- *Type:* double

---

##### `MinuteOfHourInput`<sup>Optional</sup> <a name="MinuteOfHourInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHourInput"></a>

```csharp
public double MinuteOfHourInput { get; }
```

- *Type:* double

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get"></a>

```csharp
private SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putEnd">PutEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putStart">PutStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetStart">ResetStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnd` <a name="PutEnd" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putEnd"></a>

```csharp
private void PutEnd(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putEnd.parameter.value"></a>

- *Type:* object

---

##### `PutStart` <a name="PutStart" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putStart"></a>

```csharp
private void PutStart(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.putStart.parameter.value"></a>

- *Type:* object

---

##### `ResetEnd` <a name="ResetEnd" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetEnd"></a>

```csharp
private void ResetEnd()
```

##### `ResetStart` <a name="ResetStart" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetStart"></a>

```csharp
private void ResetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.end">End</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.start">Start</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.endInput">EndInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.startInput">StartInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.end"></a>

```csharp
public SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList End { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesEndList</a>

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.start"></a>

```csharp
public SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList Start { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList</a>

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.endInput"></a>

```csharp
public object EndInput { get; }
```

- *Type:* object

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.startInput"></a>

```csharp
public object StartInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get"></a>

```csharp
private SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDayInput">HourOfDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHourInput">MinuteOfHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HourOfDayInput`<sup>Optional</sup> <a name="HourOfDayInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDayInput"></a>

```csharp
public double HourOfDayInput { get; }
```

- *Type:* double

---

##### `MinuteOfHourInput`<sup>Optional</sup> <a name="MinuteOfHourInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHourInput"></a>

```csharp
public double MinuteOfHourInput { get; }
```

- *Type:* double

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesStartOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceShiftCoveragesList <a name="SsmcontactsRotationRecurrenceShiftCoveragesList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceShiftCoveragesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.get"></a>

```csharp
private SsmcontactsRotationRecurrenceShiftCoveragesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceShiftCoveragesOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceShiftCoveragesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.putCoverageTimes">PutCoverageTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resetCoverageTimes">ResetCoverageTimes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCoverageTimes` <a name="PutCoverageTimes" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.putCoverageTimes"></a>

```csharp
private void PutCoverageTimes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.putCoverageTimes.parameter.value"></a>

- *Type:* object

---

##### `ResetCoverageTimes` <a name="ResetCoverageTimes" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resetCoverageTimes"></a>

```csharp
private void ResetCoverageTimes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes">CoverageTimes</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimesInput">CoverageTimesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKeyInput">MapBlockKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKey">MapBlockKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoverageTimes`<sup>Required</sup> <a name="CoverageTimes" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes"></a>

```csharp
public SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList CoverageTimes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a>

---

##### `CoverageTimesInput`<sup>Optional</sup> <a name="CoverageTimesInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimesInput"></a>

```csharp
public object CoverageTimesInput { get; }
```

- *Type:* object

---

##### `MapBlockKeyInput`<sup>Optional</sup> <a name="MapBlockKeyInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKeyInput"></a>

```csharp
public string MapBlockKeyInput { get; }
```

- *Type:* string

---

##### `MapBlockKey`<sup>Required</sup> <a name="MapBlockKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.mapBlockKey"></a>

```csharp
public string MapBlockKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList <a name="SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get"></a>

```csharp
private SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference <a name="SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDayInput">HourOfDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHourInput">MinuteOfHourInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHour">MinuteOfHour</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HourOfDayInput`<sup>Optional</sup> <a name="HourOfDayInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDayInput"></a>

```csharp
public double HourOfDayInput { get; }
```

- *Type:* double

---

##### `MinuteOfHourInput`<sup>Optional</sup> <a name="MinuteOfHourInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHourInput"></a>

```csharp
public double MinuteOfHourInput { get; }
```

- *Type:* double

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `MinuteOfHour`<sup>Required</sup> <a name="MinuteOfHour" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.minuteOfHour"></a>

```csharp
public double MinuteOfHour { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceWeeklySettingsList <a name="SsmcontactsRotationRecurrenceWeeklySettingsList" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceWeeklySettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.get"></a>

```csharp
private SsmcontactsRotationRecurrenceWeeklySettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SsmcontactsRotationRecurrenceWeeklySettingsOutputReference <a name="SsmcontactsRotationRecurrenceWeeklySettingsOutputReference" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SsmcontactsRotationRecurrenceWeeklySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.putHandOffTime">PutHandOffTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resetHandOffTime">ResetHandOffTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHandOffTime` <a name="PutHandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.putHandOffTime"></a>

```csharp
private void PutHandOffTime(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.putHandOffTime.parameter.value"></a>

- *Type:* object

---

##### `ResetHandOffTime` <a name="ResetHandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resetHandOffTime"></a>

```csharp
private void ResetHandOffTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime">HandOffTime</a></code> | <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTimeInput">HandOffTimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HandOffTime`<sup>Required</sup> <a name="HandOffTime" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime"></a>

```csharp
public SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList HandOffTime { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList">SsmcontactsRotationRecurrenceWeeklySettingsHandOffTimeList</a>

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `HandOffTimeInput`<sup>Optional</sup> <a name="HandOffTimeInput" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTimeInput"></a>

```csharp
public object HandOffTimeInput { get; }
```

- *Type:* object

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



