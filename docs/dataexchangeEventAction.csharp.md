# `dataexchangeEventAction` Submodule <a name="`dataexchangeEventAction` Submodule" id="@cdktf/provider-aws.dataexchangeEventAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataexchangeEventAction <a name="DataexchangeEventAction" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action aws_dataexchange_event_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventAction(Construct Scope, string Id, DataexchangeEventActionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig">DataexchangeEventActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig">DataexchangeEventActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.putEvent">PutEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.resetEvent">ResetEvent</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.putAction"></a>

```csharp
private void PutAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.putAction.parameter.value"></a>

- *Type:* object

---

##### `PutEvent` <a name="PutEvent" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.putEvent"></a>

```csharp
private void PutEvent(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.putEvent.parameter.value"></a>

- *Type:* object

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetEvent` <a name="ResetEvent" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.resetEvent"></a>

```csharp
private void ResetEvent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataexchangeEventAction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataexchangeEventAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataexchangeEventAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataexchangeEventAction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DataexchangeEventAction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataexchangeEventAction resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataexchangeEventAction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataexchangeEventAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataexchangeEventAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList">DataexchangeEventActionActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.event">Event</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList">DataexchangeEventActionEventList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.actionInput">ActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.eventInput">EventInput</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.action"></a>

```csharp
public DataexchangeEventActionActionList Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList">DataexchangeEventActionActionList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Event`<sup>Required</sup> <a name="Event" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.event"></a>

```csharp
public DataexchangeEventActionEventList Event { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList">DataexchangeEventActionEventList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.actionInput"></a>

```csharp
public object ActionInput { get; }
```

- *Type:* object

---

##### `EventInput`<sup>Optional</sup> <a name="EventInput" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.eventInput"></a>

```csharp
public object EventInput { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataexchangeEventActionAction <a name="DataexchangeEventActionAction" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionAction {
    object ExportRevisionToS3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction.property.exportRevisionToS3">ExportRevisionToS3</a></code> | <code>object</code> | export_revision_to_s3 block. |

---

##### `ExportRevisionToS3`<sup>Optional</sup> <a name="ExportRevisionToS3" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionAction.property.exportRevisionToS3"></a>

```csharp
public object ExportRevisionToS3 { get; set; }
```

- *Type:* object

export_revision_to_s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#export_revision_to_s3 DataexchangeEventAction#export_revision_to_s3}

---

### DataexchangeEventActionActionExportRevisionToS3 <a name="DataexchangeEventActionActionExportRevisionToS3" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionActionExportRevisionToS3 {
    object Encryption = null,
    object RevisionDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.encryption">Encryption</a></code> | <code>object</code> | encryption block. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.revisionDestination">RevisionDestination</a></code> | <code>object</code> | revision_destination block. |

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.encryption"></a>

```csharp
public object Encryption { get; set; }
```

- *Type:* object

encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#encryption DataexchangeEventAction#encryption}

---

##### `RevisionDestination`<sup>Optional</sup> <a name="RevisionDestination" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3.property.revisionDestination"></a>

```csharp
public object RevisionDestination { get; set; }
```

- *Type:* object

revision_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#revision_destination DataexchangeEventAction#revision_destination}

---

### DataexchangeEventActionActionExportRevisionToS3Encryption <a name="DataexchangeEventActionActionExportRevisionToS3Encryption" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionActionExportRevisionToS3Encryption {
    string KmsKeyArn = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#kms_key_arn DataexchangeEventAction#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#type DataexchangeEventAction#type}. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#kms_key_arn DataexchangeEventAction#kms_key_arn}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3Encryption.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#type DataexchangeEventAction#type}.

---

### DataexchangeEventActionActionExportRevisionToS3RevisionDestination <a name="DataexchangeEventActionActionExportRevisionToS3RevisionDestination" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionActionExportRevisionToS3RevisionDestination {
    string Bucket,
    string KeyPattern = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#bucket DataexchangeEventAction#bucket}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.keyPattern">KeyPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#key_pattern DataexchangeEventAction#key_pattern}. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#bucket DataexchangeEventAction#bucket}.

---

##### `KeyPattern`<sup>Optional</sup> <a name="KeyPattern" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestination.property.keyPattern"></a>

```csharp
public string KeyPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#key_pattern DataexchangeEventAction#key_pattern}.

---

### DataexchangeEventActionConfig <a name="DataexchangeEventActionConfig" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Action = null,
    object Event = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.action">Action</a></code> | <code>object</code> | action block. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.event">Event</a></code> | <code>object</code> | event block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.action"></a>

```csharp
public object Action { get; set; }
```

- *Type:* object

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#action DataexchangeEventAction#action}

---

##### `Event`<sup>Optional</sup> <a name="Event" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionConfig.property.event"></a>

```csharp
public object Event { get; set; }
```

- *Type:* object

event block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#event DataexchangeEventAction#event}

---

### DataexchangeEventActionEvent <a name="DataexchangeEventActionEvent" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionEvent {
    object RevisionPublished = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent.property.revisionPublished">RevisionPublished</a></code> | <code>object</code> | revision_published block. |

---

##### `RevisionPublished`<sup>Optional</sup> <a name="RevisionPublished" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEvent.property.revisionPublished"></a>

```csharp
public object RevisionPublished { get; set; }
```

- *Type:* object

revision_published block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#revision_published DataexchangeEventAction#revision_published}

---

### DataexchangeEventActionEventRevisionPublished <a name="DataexchangeEventActionEventRevisionPublished" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionEventRevisionPublished {
    string DataSetId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished.property.dataSetId">DataSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#data_set_id DataexchangeEventAction#data_set_id}. |

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublished.property.dataSetId"></a>

```csharp
public string DataSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_event_action#data_set_id DataexchangeEventAction#data_set_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataexchangeEventActionActionExportRevisionToS3EncryptionList <a name="DataexchangeEventActionActionExportRevisionToS3EncryptionList" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionActionExportRevisionToS3EncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.get"></a>

```csharp
private DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference <a name="DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataexchangeEventActionActionExportRevisionToS3List <a name="DataexchangeEventActionActionExportRevisionToS3List" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionActionExportRevisionToS3List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.get"></a>

```csharp
private DataexchangeEventActionActionExportRevisionToS3OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataexchangeEventActionActionExportRevisionToS3OutputReference <a name="DataexchangeEventActionActionExportRevisionToS3OutputReference" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionActionExportRevisionToS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination">PutRevisionDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetRevisionDestination">ResetRevisionDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryption` <a name="PutEncryption" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption"></a>

```csharp
private void PutEncryption(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putEncryption.parameter.value"></a>

- *Type:* object

---

##### `PutRevisionDestination` <a name="PutRevisionDestination" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination"></a>

```csharp
private void PutRevisionDestination(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.putRevisionDestination.parameter.value"></a>

- *Type:* object

---

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetRevisionDestination` <a name="ResetRevisionDestination" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.resetRevisionDestination"></a>

```csharp
private void ResetRevisionDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList">DataexchangeEventActionActionExportRevisionToS3EncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination">RevisionDestination</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList">DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestinationInput">RevisionDestinationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryption"></a>

```csharp
public DataexchangeEventActionActionExportRevisionToS3EncryptionList Encryption { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3EncryptionList">DataexchangeEventActionActionExportRevisionToS3EncryptionList</a>

---

##### `RevisionDestination`<sup>Required</sup> <a name="RevisionDestination" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestination"></a>

```csharp
public DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList RevisionDestination { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList">DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList</a>

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.encryptionInput"></a>

```csharp
public object EncryptionInput { get; }
```

- *Type:* object

---

##### `RevisionDestinationInput`<sup>Optional</sup> <a name="RevisionDestinationInput" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.revisionDestinationInput"></a>

```csharp
public object RevisionDestinationInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3OutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList <a name="DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.get"></a>

```csharp
private DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference <a name="DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetKeyPattern">ResetKeyPattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyPattern` <a name="ResetKeyPattern" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.resetKeyPattern"></a>

```csharp
private void ResetKeyPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPatternInput">KeyPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern">KeyPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `KeyPatternInput`<sup>Optional</sup> <a name="KeyPatternInput" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPatternInput"></a>

```csharp
public string KeyPatternInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `KeyPattern`<sup>Required</sup> <a name="KeyPattern" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.keyPattern"></a>

```csharp
public string KeyPattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3RevisionDestinationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataexchangeEventActionActionList <a name="DataexchangeEventActionActionList" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.get"></a>

```csharp
private DataexchangeEventActionActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataexchangeEventActionActionOutputReference <a name="DataexchangeEventActionActionOutputReference" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3">PutExportRevisionToS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resetExportRevisionToS3">ResetExportRevisionToS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExportRevisionToS3` <a name="PutExportRevisionToS3" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3"></a>

```csharp
private void PutExportRevisionToS3(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.putExportRevisionToS3.parameter.value"></a>

- *Type:* object

---

##### `ResetExportRevisionToS3` <a name="ResetExportRevisionToS3" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.resetExportRevisionToS3"></a>

```csharp
private void ResetExportRevisionToS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3">ExportRevisionToS3</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List">DataexchangeEventActionActionExportRevisionToS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3Input">ExportRevisionToS3Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExportRevisionToS3`<sup>Required</sup> <a name="ExportRevisionToS3" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3"></a>

```csharp
public DataexchangeEventActionActionExportRevisionToS3List ExportRevisionToS3 { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionExportRevisionToS3List">DataexchangeEventActionActionExportRevisionToS3List</a>

---

##### `ExportRevisionToS3Input`<sup>Optional</sup> <a name="ExportRevisionToS3Input" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.exportRevisionToS3Input"></a>

```csharp
public object ExportRevisionToS3Input { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataexchangeEventActionEventList <a name="DataexchangeEventActionEventList" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionEventList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.get"></a>

```csharp
private DataexchangeEventActionEventOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataexchangeEventActionEventOutputReference <a name="DataexchangeEventActionEventOutputReference" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionEventOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.putRevisionPublished">PutRevisionPublished</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resetRevisionPublished">ResetRevisionPublished</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRevisionPublished` <a name="PutRevisionPublished" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.putRevisionPublished"></a>

```csharp
private void PutRevisionPublished(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.putRevisionPublished.parameter.value"></a>

- *Type:* object

---

##### `ResetRevisionPublished` <a name="ResetRevisionPublished" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.resetRevisionPublished"></a>

```csharp
private void ResetRevisionPublished()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublished">RevisionPublished</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList">DataexchangeEventActionEventRevisionPublishedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublishedInput">RevisionPublishedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RevisionPublished`<sup>Required</sup> <a name="RevisionPublished" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublished"></a>

```csharp
public DataexchangeEventActionEventRevisionPublishedList RevisionPublished { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList">DataexchangeEventActionEventRevisionPublishedList</a>

---

##### `RevisionPublishedInput`<sup>Optional</sup> <a name="RevisionPublishedInput" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.revisionPublishedInput"></a>

```csharp
public object RevisionPublishedInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataexchangeEventActionEventRevisionPublishedList <a name="DataexchangeEventActionEventRevisionPublishedList" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionEventRevisionPublishedList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.get"></a>

```csharp
private DataexchangeEventActionEventRevisionPublishedOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataexchangeEventActionEventRevisionPublishedOutputReference <a name="DataexchangeEventActionEventRevisionPublishedOutputReference" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DataexchangeEventActionEventRevisionPublishedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetIdInput">DataSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId">DataSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSetIdInput`<sup>Optional</sup> <a name="DataSetIdInput" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetIdInput"></a>

```csharp
public string DataSetIdInput { get; }
```

- *Type:* string

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.dataSetId"></a>

```csharp
public string DataSetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataexchangeEventAction.DataexchangeEventActionEventRevisionPublishedOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



