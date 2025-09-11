# `networkfirewallFirewallTransitGatewayAttachmentAccepter` Submodule <a name="`networkfirewallFirewallTransitGatewayAttachmentAccepter` Submodule" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallFirewallTransitGatewayAttachmentAccepter <a name="NetworkfirewallFirewallTransitGatewayAttachmentAccepter" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter aws_networkfirewall_firewall_transit_gateway_attachment_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallTransitGatewayAttachmentAccepter(Construct Scope, string Id, NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig">NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig">NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts</a>

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkfirewallFirewallTransitGatewayAttachmentAccepter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkfirewallFirewallTransitGatewayAttachmentAccepter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkfirewallFirewallTransitGatewayAttachmentAccepter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkfirewallFirewallTransitGatewayAttachmentAccepter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkfirewallFirewallTransitGatewayAttachmentAccepter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkfirewallFirewallTransitGatewayAttachmentAccepter resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkfirewallFirewallTransitGatewayAttachmentAccepter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkfirewallFirewallTransitGatewayAttachmentAccepter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkfirewallFirewallTransitGatewayAttachmentAccepter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.transitGatewayAttachmentIdInput">TransitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.timeouts"></a>

```csharp
public NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransitGatewayAttachmentIdInput" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.transitGatewayAttachmentIdInput"></a>

```csharp
public string TransitGatewayAttachmentIdInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig <a name="NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string TransitGatewayAttachmentId,
    string Region = null,
    NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#transit_gateway_attachment_id NetworkfirewallFirewallTransitGatewayAttachmentAccepter#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#transit_gateway_attachment_id NetworkfirewallFirewallTransitGatewayAttachmentAccepter#transit_gateway_attachment_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#region NetworkfirewallFirewallTransitGatewayAttachmentAccepter#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterConfig.property.timeouts"></a>

```csharp
public NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts">NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#timeouts NetworkfirewallFirewallTransitGatewayAttachmentAccepter#timeouts}

---

### NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts <a name="NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#create NetworkfirewallFirewallTransitGatewayAttachmentAccepter#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/networkfirewall_firewall_transit_gateway_attachment_accepter#delete NetworkfirewallFirewallTransitGatewayAttachmentAccepter#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference <a name="NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkfirewallFirewallTransitGatewayAttachmentAccepter.NetworkfirewallFirewallTransitGatewayAttachmentAccepterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



