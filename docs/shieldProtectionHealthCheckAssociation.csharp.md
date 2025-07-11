# `shieldProtectionHealthCheckAssociation` Submodule <a name="`shieldProtectionHealthCheckAssociation` Submodule" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProtectionHealthCheckAssociation <a name="ShieldProtectionHealthCheckAssociation" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/shield_protection_health_check_association aws_shield_protection_health_check_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ShieldProtectionHealthCheckAssociation(Construct Scope, string Id, ShieldProtectionHealthCheckAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig">ShieldProtectionHealthCheckAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig">ShieldProtectionHealthCheckAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ShieldProtectionHealthCheckAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ShieldProtectionHealthCheckAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ShieldProtectionHealthCheckAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ShieldProtectionHealthCheckAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ShieldProtectionHealthCheckAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ShieldProtectionHealthCheckAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ShieldProtectionHealthCheckAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ShieldProtectionHealthCheckAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/shield_protection_health_check_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ShieldProtectionHealthCheckAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.healthCheckArnInput">HealthCheckArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.shieldProtectionIdInput">ShieldProtectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.healthCheckArn">HealthCheckArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.shieldProtectionId">ShieldProtectionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `HealthCheckArnInput`<sup>Optional</sup> <a name="HealthCheckArnInput" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.healthCheckArnInput"></a>

```csharp
public string HealthCheckArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ShieldProtectionIdInput`<sup>Optional</sup> <a name="ShieldProtectionIdInput" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.shieldProtectionIdInput"></a>

```csharp
public string ShieldProtectionIdInput { get; }
```

- *Type:* string

---

##### `HealthCheckArn`<sup>Required</sup> <a name="HealthCheckArn" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.healthCheckArn"></a>

```csharp
public string HealthCheckArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ShieldProtectionId`<sup>Required</sup> <a name="ShieldProtectionId" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.shieldProtectionId"></a>

```csharp
public string ShieldProtectionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProtectionHealthCheckAssociationConfig <a name="ShieldProtectionHealthCheckAssociationConfig" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ShieldProtectionHealthCheckAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string HealthCheckArn,
    string ShieldProtectionId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.healthCheckArn">HealthCheckArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/shield_protection_health_check_association#health_check_arn ShieldProtectionHealthCheckAssociation#health_check_arn}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.shieldProtectionId">ShieldProtectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/shield_protection_health_check_association#shield_protection_id ShieldProtectionHealthCheckAssociation#shield_protection_id}. |
| <code><a href="#@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/shield_protection_health_check_association#id ShieldProtectionHealthCheckAssociation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `HealthCheckArn`<sup>Required</sup> <a name="HealthCheckArn" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.healthCheckArn"></a>

```csharp
public string HealthCheckArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/shield_protection_health_check_association#health_check_arn ShieldProtectionHealthCheckAssociation#health_check_arn}.

---

##### `ShieldProtectionId`<sup>Required</sup> <a name="ShieldProtectionId" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.shieldProtectionId"></a>

```csharp
public string ShieldProtectionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/shield_protection_health_check_association#shield_protection_id ShieldProtectionHealthCheckAssociation#shield_protection_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.shieldProtectionHealthCheckAssociation.ShieldProtectionHealthCheckAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/shield_protection_health_check_association#id ShieldProtectionHealthCheckAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



