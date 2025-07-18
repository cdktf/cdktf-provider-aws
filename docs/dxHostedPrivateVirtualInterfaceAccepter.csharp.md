# `dxHostedPrivateVirtualInterfaceAccepter` Submodule <a name="`dxHostedPrivateVirtualInterfaceAccepter` Submodule" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxHostedPrivateVirtualInterfaceAccepter <a name="DxHostedPrivateVirtualInterfaceAccepter" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter aws_dx_hosted_private_virtual_interface_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxHostedPrivateVirtualInterfaceAccepter(Construct Scope, string Id, DxHostedPrivateVirtualInterfaceAccepterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig">DxHostedPrivateVirtualInterfaceAccepterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig">DxHostedPrivateVirtualInterfaceAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetDxGatewayId">ResetDxGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetVpnGatewayId">ResetVpnGatewayId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.putTimeouts"></a>

```csharp
private void PutTimeouts(DxHostedPrivateVirtualInterfaceAccepterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts">DxHostedPrivateVirtualInterfaceAccepterTimeouts</a>

---

##### `ResetDxGatewayId` <a name="ResetDxGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetDxGatewayId"></a>

```csharp
private void ResetDxGatewayId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpnGatewayId` <a name="ResetVpnGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.resetVpnGatewayId"></a>

```csharp
private void ResetVpnGatewayId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DxHostedPrivateVirtualInterfaceAccepter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxHostedPrivateVirtualInterfaceAccepter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxHostedPrivateVirtualInterfaceAccepter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxHostedPrivateVirtualInterfaceAccepter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DxHostedPrivateVirtualInterfaceAccepter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DxHostedPrivateVirtualInterfaceAccepter resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DxHostedPrivateVirtualInterfaceAccepter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DxHostedPrivateVirtualInterfaceAccepter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DxHostedPrivateVirtualInterfaceAccepter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dxGatewayIdInput">DxGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.virtualInterfaceIdInput">VirtualInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.vpnGatewayIdInput">VpnGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dxGatewayId">DxGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.vpnGatewayId">VpnGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.timeouts"></a>

```csharp
public DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference">DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference</a>

---

##### `DxGatewayIdInput`<sup>Optional</sup> <a name="DxGatewayIdInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dxGatewayIdInput"></a>

```csharp
public string DxGatewayIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualInterfaceIdInput`<sup>Optional</sup> <a name="VirtualInterfaceIdInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.virtualInterfaceIdInput"></a>

```csharp
public string VirtualInterfaceIdInput { get; }
```

- *Type:* string

---

##### `VpnGatewayIdInput`<sup>Optional</sup> <a name="VpnGatewayIdInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.vpnGatewayIdInput"></a>

```csharp
public string VpnGatewayIdInput { get; }
```

- *Type:* string

---

##### `DxGatewayId`<sup>Required</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.dxGatewayId"></a>

```csharp
public string DxGatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.virtualInterfaceId"></a>

```csharp
public string VirtualInterfaceId { get; }
```

- *Type:* string

---

##### `VpnGatewayId`<sup>Required</sup> <a name="VpnGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.vpnGatewayId"></a>

```csharp
public string VpnGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxHostedPrivateVirtualInterfaceAccepterConfig <a name="DxHostedPrivateVirtualInterfaceAccepterConfig" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxHostedPrivateVirtualInterfaceAccepterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string VirtualInterfaceId,
    string DxGatewayId = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DxHostedPrivateVirtualInterfaceAccepterTimeouts Timeouts = null,
    string VpnGatewayId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#virtual_interface_id DxHostedPrivateVirtualInterfaceAccepter#virtual_interface_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.dxGatewayId">DxGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#dx_gateway_id DxHostedPrivateVirtualInterfaceAccepter#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#id DxHostedPrivateVirtualInterfaceAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#tags DxHostedPrivateVirtualInterfaceAccepter#tags}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#tags_all DxHostedPrivateVirtualInterfaceAccepter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts">DxHostedPrivateVirtualInterfaceAccepterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.vpnGatewayId">VpnGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#vpn_gateway_id DxHostedPrivateVirtualInterfaceAccepter#vpn_gateway_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.virtualInterfaceId"></a>

```csharp
public string VirtualInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#virtual_interface_id DxHostedPrivateVirtualInterfaceAccepter#virtual_interface_id}.

---

##### `DxGatewayId`<sup>Optional</sup> <a name="DxGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.dxGatewayId"></a>

```csharp
public string DxGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#dx_gateway_id DxHostedPrivateVirtualInterfaceAccepter#dx_gateway_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#id DxHostedPrivateVirtualInterfaceAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#region DxHostedPrivateVirtualInterfaceAccepter#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#tags DxHostedPrivateVirtualInterfaceAccepter#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#tags_all DxHostedPrivateVirtualInterfaceAccepter#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.timeouts"></a>

```csharp
public DxHostedPrivateVirtualInterfaceAccepterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts">DxHostedPrivateVirtualInterfaceAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#timeouts DxHostedPrivateVirtualInterfaceAccepter#timeouts}

---

##### `VpnGatewayId`<sup>Optional</sup> <a name="VpnGatewayId" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterConfig.property.vpnGatewayId"></a>

```csharp
public string VpnGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#vpn_gateway_id DxHostedPrivateVirtualInterfaceAccepter#vpn_gateway_id}.

---

### DxHostedPrivateVirtualInterfaceAccepterTimeouts <a name="DxHostedPrivateVirtualInterfaceAccepterTimeouts" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxHostedPrivateVirtualInterfaceAccepterTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#create DxHostedPrivateVirtualInterfaceAccepter#create}. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#delete DxHostedPrivateVirtualInterfaceAccepter#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#create DxHostedPrivateVirtualInterfaceAccepter#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dx_hosted_private_virtual_interface_accepter#delete DxHostedPrivateVirtualInterfaceAccepter#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference <a name="DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dxHostedPrivateVirtualInterfaceAccepter.DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



