# `shieldProactiveEngagement` Submodule <a name="`shieldProactiveEngagement` Submodule" id="@cdktf/provider-aws.shieldProactiveEngagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProactiveEngagement <a name="ShieldProactiveEngagement" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/shield_proactive_engagement aws_shield_proactive_engagement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ShieldProactiveEngagement(Construct Scope, string Id, ShieldProactiveEngagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig">ShieldProactiveEngagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig">ShieldProactiveEngagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContact">PutEmergencyContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetEmergencyContact">ResetEmergencyContact</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEmergencyContact` <a name="PutEmergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContact"></a>

```csharp
private void PutEmergencyContact(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContact.parameter.value"></a>

- *Type:* object

---

##### `ResetEmergencyContact` <a name="ResetEmergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.resetEmergencyContact"></a>

```csharp
private void ResetEmergencyContact()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ShieldProactiveEngagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ShieldProactiveEngagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ShieldProactiveEngagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ShieldProactiveEngagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ShieldProactiveEngagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ShieldProactiveEngagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ShieldProactiveEngagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ShieldProactiveEngagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/shield_proactive_engagement#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ShieldProactiveEngagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContact">EmergencyContact</a></code> | <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList">ShieldProactiveEngagementEmergencyContactList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactInput">EmergencyContactInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EmergencyContact`<sup>Required</sup> <a name="EmergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContact"></a>

```csharp
public ShieldProactiveEngagementEmergencyContactList EmergencyContact { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList">ShieldProactiveEngagementEmergencyContactList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `EmergencyContactInput`<sup>Optional</sup> <a name="EmergencyContactInput" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactInput"></a>

```csharp
public object EmergencyContactInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProactiveEngagementConfig <a name="ShieldProactiveEngagementConfig" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ShieldProactiveEngagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Enabled,
    object EmergencyContact = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/shield_proactive_engagement#enabled ShieldProactiveEngagement#enabled}. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.emergencyContact">EmergencyContact</a></code> | <code>object</code> | emergency_contact block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/shield_proactive_engagement#enabled ShieldProactiveEngagement#enabled}.

---

##### `EmergencyContact`<sup>Optional</sup> <a name="EmergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.emergencyContact"></a>

```csharp
public object EmergencyContact { get; set; }
```

- *Type:* object

emergency_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/shield_proactive_engagement#emergency_contact ShieldProactiveEngagement#emergency_contact}

---

### ShieldProactiveEngagementEmergencyContact <a name="ShieldProactiveEngagementEmergencyContact" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ShieldProactiveEngagementEmergencyContact {
    string EmailAddress,
    string ContactNotes = null,
    string PhoneNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.emailAddress">EmailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/shield_proactive_engagement#email_address ShieldProactiveEngagement#email_address}. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.contactNotes">ContactNotes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/shield_proactive_engagement#contact_notes ShieldProactiveEngagement#contact_notes}. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/shield_proactive_engagement#phone_number ShieldProactiveEngagement#phone_number}. |

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/shield_proactive_engagement#email_address ShieldProactiveEngagement#email_address}.

---

##### `ContactNotes`<sup>Optional</sup> <a name="ContactNotes" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.contactNotes"></a>

```csharp
public string ContactNotes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/shield_proactive_engagement#contact_notes ShieldProactiveEngagement#contact_notes}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContact.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/shield_proactive_engagement#phone_number ShieldProactiveEngagement#phone_number}.

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldProactiveEngagementEmergencyContactList <a name="ShieldProactiveEngagementEmergencyContactList" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ShieldProactiveEngagementEmergencyContactList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.get"></a>

```csharp
private ShieldProactiveEngagementEmergencyContactOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ShieldProactiveEngagementEmergencyContactOutputReference <a name="ShieldProactiveEngagementEmergencyContactOutputReference" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ShieldProactiveEngagementEmergencyContactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetContactNotes">ResetContactNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContactNotes` <a name="ResetContactNotes" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetContactNotes"></a>

```csharp
private void ResetContactNotes()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotesInput">ContactNotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotes">ContactNotes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContactNotesInput`<sup>Optional</sup> <a name="ContactNotesInput" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotesInput"></a>

```csharp
public string ContactNotesInput { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `ContactNotes`<sup>Required</sup> <a name="ContactNotes" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.contactNotes"></a>

```csharp
public string ContactNotes { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



