# `globalacceleratorCustomRoutingAccelerator` Submodule <a name="`globalacceleratorCustomRoutingAccelerator` Submodule" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorCustomRoutingAccelerator <a name="GlobalacceleratorCustomRoutingAccelerator" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator aws_globalaccelerator_custom_routing_accelerator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingAccelerator(Construct Scope, string Id, GlobalacceleratorCustomRoutingAcceleratorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig">GlobalacceleratorCustomRoutingAcceleratorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig">GlobalacceleratorCustomRoutingAcceleratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetIpAddresses">ResetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.putAttributes"></a>

```csharp
private void PutAttributes(GlobalacceleratorCustomRoutingAcceleratorAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes">GlobalacceleratorCustomRoutingAcceleratorAttributes</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.putTimeouts"></a>

```csharp
private void PutTimeouts(GlobalacceleratorCustomRoutingAcceleratorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts">GlobalacceleratorCustomRoutingAcceleratorTimeouts</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAddresses` <a name="ResetIpAddresses" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetIpAddresses"></a>

```csharp
private void ResetIpAddresses()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GlobalacceleratorCustomRoutingAccelerator resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorCustomRoutingAccelerator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorCustomRoutingAccelerator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorCustomRoutingAccelerator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorCustomRoutingAccelerator.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GlobalacceleratorCustomRoutingAccelerator resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalacceleratorCustomRoutingAccelerator to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalacceleratorCustomRoutingAccelerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorCustomRoutingAccelerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference">GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipSets">IpSets</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList">GlobalacceleratorCustomRoutingAcceleratorIpSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference">GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.attributesInput">AttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes">GlobalacceleratorCustomRoutingAcceleratorAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddressesInput">IpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.attributes"></a>

```csharp
public GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference Attributes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference">GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `IpSets`<sup>Required</sup> <a name="IpSets" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipSets"></a>

```csharp
public GlobalacceleratorCustomRoutingAcceleratorIpSetsList IpSets { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList">GlobalacceleratorCustomRoutingAcceleratorIpSetsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.timeouts"></a>

```csharp
public GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference">GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.attributesInput"></a>

```csharp
public GlobalacceleratorCustomRoutingAcceleratorAttributes AttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes">GlobalacceleratorCustomRoutingAcceleratorAttributes</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddressesInput"></a>

```csharp
public string[] IpAddressesInput { get; }
```

- *Type:* string[]

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAccelerator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorCustomRoutingAcceleratorAttributes <a name="GlobalacceleratorCustomRoutingAcceleratorAttributes" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingAcceleratorAttributes {
    object FlowLogsEnabled = null,
    string FlowLogsS3Bucket = null,
    string FlowLogsS3Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes.property.flowLogsEnabled">FlowLogsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#flow_logs_enabled GlobalacceleratorCustomRoutingAccelerator#flow_logs_enabled}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes.property.flowLogsS3Bucket">FlowLogsS3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#flow_logs_s3_bucket GlobalacceleratorCustomRoutingAccelerator#flow_logs_s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes.property.flowLogsS3Prefix">FlowLogsS3Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#flow_logs_s3_prefix GlobalacceleratorCustomRoutingAccelerator#flow_logs_s3_prefix}. |

---

##### `FlowLogsEnabled`<sup>Optional</sup> <a name="FlowLogsEnabled" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes.property.flowLogsEnabled"></a>

```csharp
public object FlowLogsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#flow_logs_enabled GlobalacceleratorCustomRoutingAccelerator#flow_logs_enabled}.

---

##### `FlowLogsS3Bucket`<sup>Optional</sup> <a name="FlowLogsS3Bucket" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes.property.flowLogsS3Bucket"></a>

```csharp
public string FlowLogsS3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#flow_logs_s3_bucket GlobalacceleratorCustomRoutingAccelerator#flow_logs_s3_bucket}.

---

##### `FlowLogsS3Prefix`<sup>Optional</sup> <a name="FlowLogsS3Prefix" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes.property.flowLogsS3Prefix"></a>

```csharp
public string FlowLogsS3Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#flow_logs_s3_prefix GlobalacceleratorCustomRoutingAccelerator#flow_logs_s3_prefix}.

---

### GlobalacceleratorCustomRoutingAcceleratorConfig <a name="GlobalacceleratorCustomRoutingAcceleratorConfig" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingAcceleratorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    GlobalacceleratorCustomRoutingAcceleratorAttributes Attributes = null,
    object Enabled = null,
    string Id = null,
    string[] IpAddresses = null,
    string IpAddressType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    GlobalacceleratorCustomRoutingAcceleratorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#name GlobalacceleratorCustomRoutingAccelerator#name}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes">GlobalacceleratorCustomRoutingAcceleratorAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#enabled GlobalacceleratorCustomRoutingAccelerator#enabled}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#id GlobalacceleratorCustomRoutingAccelerator#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#ip_addresses GlobalacceleratorCustomRoutingAccelerator#ip_addresses}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#ip_address_type GlobalacceleratorCustomRoutingAccelerator#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#tags GlobalacceleratorCustomRoutingAccelerator#tags}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#tags_all GlobalacceleratorCustomRoutingAccelerator#tags_all}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts">GlobalacceleratorCustomRoutingAcceleratorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#name GlobalacceleratorCustomRoutingAccelerator#name}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.attributes"></a>

```csharp
public GlobalacceleratorCustomRoutingAcceleratorAttributes Attributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes">GlobalacceleratorCustomRoutingAcceleratorAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#attributes GlobalacceleratorCustomRoutingAccelerator#attributes}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#enabled GlobalacceleratorCustomRoutingAccelerator#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#id GlobalacceleratorCustomRoutingAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddresses`<sup>Optional</sup> <a name="IpAddresses" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#ip_addresses GlobalacceleratorCustomRoutingAccelerator#ip_addresses}.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#ip_address_type GlobalacceleratorCustomRoutingAccelerator#ip_address_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#tags GlobalacceleratorCustomRoutingAccelerator#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#tags_all GlobalacceleratorCustomRoutingAccelerator#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorConfig.property.timeouts"></a>

```csharp
public GlobalacceleratorCustomRoutingAcceleratorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts">GlobalacceleratorCustomRoutingAcceleratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#timeouts GlobalacceleratorCustomRoutingAccelerator#timeouts}

---

### GlobalacceleratorCustomRoutingAcceleratorIpSets <a name="GlobalacceleratorCustomRoutingAcceleratorIpSets" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingAcceleratorIpSets {

};
```


### GlobalacceleratorCustomRoutingAcceleratorTimeouts <a name="GlobalacceleratorCustomRoutingAcceleratorTimeouts" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingAcceleratorTimeouts {
    string Create = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#create GlobalacceleratorCustomRoutingAccelerator#create}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#update GlobalacceleratorCustomRoutingAccelerator#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#create GlobalacceleratorCustomRoutingAccelerator#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/globalaccelerator_custom_routing_accelerator#update GlobalacceleratorCustomRoutingAccelerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference <a name="GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resetFlowLogsEnabled">ResetFlowLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resetFlowLogsS3Bucket">ResetFlowLogsS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resetFlowLogsS3Prefix">ResetFlowLogsS3Prefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFlowLogsEnabled` <a name="ResetFlowLogsEnabled" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resetFlowLogsEnabled"></a>

```csharp
private void ResetFlowLogsEnabled()
```

##### `ResetFlowLogsS3Bucket` <a name="ResetFlowLogsS3Bucket" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resetFlowLogsS3Bucket"></a>

```csharp
private void ResetFlowLogsS3Bucket()
```

##### `ResetFlowLogsS3Prefix` <a name="ResetFlowLogsS3Prefix" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resetFlowLogsS3Prefix"></a>

```csharp
private void ResetFlowLogsS3Prefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsEnabledInput">FlowLogsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3BucketInput">FlowLogsS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3PrefixInput">FlowLogsS3PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsEnabled">FlowLogsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Bucket">FlowLogsS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Prefix">FlowLogsS3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes">GlobalacceleratorCustomRoutingAcceleratorAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FlowLogsEnabledInput`<sup>Optional</sup> <a name="FlowLogsEnabledInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsEnabledInput"></a>

```csharp
public object FlowLogsEnabledInput { get; }
```

- *Type:* object

---

##### `FlowLogsS3BucketInput`<sup>Optional</sup> <a name="FlowLogsS3BucketInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3BucketInput"></a>

```csharp
public string FlowLogsS3BucketInput { get; }
```

- *Type:* string

---

##### `FlowLogsS3PrefixInput`<sup>Optional</sup> <a name="FlowLogsS3PrefixInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3PrefixInput"></a>

```csharp
public string FlowLogsS3PrefixInput { get; }
```

- *Type:* string

---

##### `FlowLogsEnabled`<sup>Required</sup> <a name="FlowLogsEnabled" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsEnabled"></a>

```csharp
public object FlowLogsEnabled { get; }
```

- *Type:* object

---

##### `FlowLogsS3Bucket`<sup>Required</sup> <a name="FlowLogsS3Bucket" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Bucket"></a>

```csharp
public string FlowLogsS3Bucket { get; }
```

- *Type:* string

---

##### `FlowLogsS3Prefix`<sup>Required</sup> <a name="FlowLogsS3Prefix" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Prefix"></a>

```csharp
public string FlowLogsS3Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.internalValue"></a>

```csharp
public GlobalacceleratorCustomRoutingAcceleratorAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorAttributes">GlobalacceleratorCustomRoutingAcceleratorAttributes</a>

---


### GlobalacceleratorCustomRoutingAcceleratorIpSetsList <a name="GlobalacceleratorCustomRoutingAcceleratorIpSetsList" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingAcceleratorIpSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.get"></a>

```csharp
private GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference <a name="GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipFamily">IpFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSets">GlobalacceleratorCustomRoutingAcceleratorIpSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `IpFamily`<sup>Required</sup> <a name="IpFamily" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipFamily"></a>

```csharp
public string IpFamily { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.internalValue"></a>

```csharp
public GlobalacceleratorCustomRoutingAcceleratorIpSets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorIpSets">GlobalacceleratorCustomRoutingAcceleratorIpSets</a>

---


### GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference <a name="GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCustomRoutingAccelerator.GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



