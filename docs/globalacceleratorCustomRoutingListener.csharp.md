# `globalacceleratorCustomRoutingListener` Submodule <a name="`globalacceleratorCustomRoutingListener` Submodule" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorCustomRoutingListener <a name="GlobalacceleratorCustomRoutingListener" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener aws_globalaccelerator_custom_routing_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingListener(Construct Scope, string Id, GlobalacceleratorCustomRoutingListenerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig">GlobalacceleratorCustomRoutingListenerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig">GlobalacceleratorCustomRoutingListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPortRange` <a name="PutPortRange" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putPortRange"></a>

```csharp
private void PutPortRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putPortRange.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putTimeouts"></a>

```csharp
private void PutTimeouts(GlobalacceleratorCustomRoutingListenerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GlobalacceleratorCustomRoutingListener resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorCustomRoutingListener.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorCustomRoutingListener.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorCustomRoutingListener.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorCustomRoutingListener.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GlobalacceleratorCustomRoutingListener resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalacceleratorCustomRoutingListener to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalacceleratorCustomRoutingListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorCustomRoutingListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRange">PortRange</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList">GlobalacceleratorCustomRoutingListenerPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference">GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArnInput">AcceleratorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRangeInput">PortRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArn">AcceleratorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRange"></a>

```csharp
public GlobalacceleratorCustomRoutingListenerPortRangeList PortRange { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList">GlobalacceleratorCustomRoutingListenerPortRangeList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeouts"></a>

```csharp
public GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference">GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference</a>

---

##### `AcceleratorArnInput`<sup>Optional</sup> <a name="AcceleratorArnInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArnInput"></a>

```csharp
public string AcceleratorArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.portRangeInput"></a>

```csharp
public object PortRangeInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AcceleratorArn`<sup>Required</sup> <a name="AcceleratorArn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.acceleratorArn"></a>

```csharp
public string AcceleratorArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListener.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorCustomRoutingListenerConfig <a name="GlobalacceleratorCustomRoutingListenerConfig" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingListenerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AcceleratorArn,
    object PortRange,
    string Id = null,
    GlobalacceleratorCustomRoutingListenerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.acceleratorArn">AcceleratorArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#accelerator_arn GlobalacceleratorCustomRoutingListener#accelerator_arn}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.portRange">PortRange</a></code> | <code>object</code> | port_range block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#id GlobalacceleratorCustomRoutingListener#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AcceleratorArn`<sup>Required</sup> <a name="AcceleratorArn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.acceleratorArn"></a>

```csharp
public string AcceleratorArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#accelerator_arn GlobalacceleratorCustomRoutingListener#accelerator_arn}.

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.portRange"></a>

```csharp
public object PortRange { get; set; }
```

- *Type:* object

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#port_range GlobalacceleratorCustomRoutingListener#port_range}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#id GlobalacceleratorCustomRoutingListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerConfig.property.timeouts"></a>

```csharp
public GlobalacceleratorCustomRoutingListenerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts">GlobalacceleratorCustomRoutingListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#timeouts GlobalacceleratorCustomRoutingListener#timeouts}

---

### GlobalacceleratorCustomRoutingListenerPortRange <a name="GlobalacceleratorCustomRoutingListenerPortRange" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingListenerPortRange {
    double FromPort = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.fromPort">FromPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#from_port GlobalacceleratorCustomRoutingListener#from_port}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.toPort">ToPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#to_port GlobalacceleratorCustomRoutingListener#to_port}. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#from_port GlobalacceleratorCustomRoutingListener#from_port}.

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRange.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#to_port GlobalacceleratorCustomRoutingListener#to_port}.

---

### GlobalacceleratorCustomRoutingListenerTimeouts <a name="GlobalacceleratorCustomRoutingListenerTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingListenerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#create GlobalacceleratorCustomRoutingListener#create}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#delete GlobalacceleratorCustomRoutingListener#delete}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#update GlobalacceleratorCustomRoutingListener#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#create GlobalacceleratorCustomRoutingListener#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#delete GlobalacceleratorCustomRoutingListener#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/globalaccelerator_custom_routing_listener#update GlobalacceleratorCustomRoutingListener#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorCustomRoutingListenerPortRangeList <a name="GlobalacceleratorCustomRoutingListenerPortRangeList" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingListenerPortRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.get"></a>

```csharp
private GlobalacceleratorCustomRoutingListenerPortRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlobalacceleratorCustomRoutingListenerPortRangeOutputReference <a name="GlobalacceleratorCustomRoutingListenerPortRangeOutputReference" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingListenerPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerPortRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference <a name="GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingListener.GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



