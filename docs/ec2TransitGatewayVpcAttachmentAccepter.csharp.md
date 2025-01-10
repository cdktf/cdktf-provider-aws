# `ec2TransitGatewayVpcAttachmentAccepter` Submodule <a name="`ec2TransitGatewayVpcAttachmentAccepter` Submodule" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayVpcAttachmentAccepter <a name="Ec2TransitGatewayVpcAttachmentAccepter" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter aws_ec2_transit_gateway_vpc_attachment_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2TransitGatewayVpcAttachmentAccepter(Construct Scope, string Id, Ec2TransitGatewayVpcAttachmentAccepterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig">Ec2TransitGatewayVpcAttachmentAccepterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig">Ec2TransitGatewayVpcAttachmentAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTransitGatewayDefaultRouteTableAssociation">ResetTransitGatewayDefaultRouteTableAssociation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTransitGatewayDefaultRouteTablePropagation">ResetTransitGatewayDefaultRouteTablePropagation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTransitGatewayDefaultRouteTableAssociation` <a name="ResetTransitGatewayDefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTransitGatewayDefaultRouteTableAssociation"></a>

```csharp
private void ResetTransitGatewayDefaultRouteTableAssociation()
```

##### `ResetTransitGatewayDefaultRouteTablePropagation` <a name="ResetTransitGatewayDefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.resetTransitGatewayDefaultRouteTablePropagation"></a>

```csharp
private void ResetTransitGatewayDefaultRouteTablePropagation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2TransitGatewayVpcAttachmentAccepter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TransitGatewayVpcAttachmentAccepter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TransitGatewayVpcAttachmentAccepter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TransitGatewayVpcAttachmentAccepter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2TransitGatewayVpcAttachmentAccepter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Ec2TransitGatewayVpcAttachmentAccepter resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayVpcAttachmentAccepter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayVpcAttachmentAccepter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayVpcAttachmentAccepter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.applianceModeSupport">ApplianceModeSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.dnsSupport">DnsSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.ipv6Support">Ipv6Support</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.securityGroupReferencingSupport">SecurityGroupReferencingSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.vpcOwnerId">VpcOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayAttachmentIdInput">TransitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTableAssociationInput">TransitGatewayDefaultRouteTableAssociationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTablePropagationInput">TransitGatewayDefaultRouteTablePropagationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTableAssociation">TransitGatewayDefaultRouteTableAssociation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTablePropagation">TransitGatewayDefaultRouteTablePropagation</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplianceModeSupport`<sup>Required</sup> <a name="ApplianceModeSupport" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.applianceModeSupport"></a>

```csharp
public string ApplianceModeSupport { get; }
```

- *Type:* string

---

##### `DnsSupport`<sup>Required</sup> <a name="DnsSupport" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.dnsSupport"></a>

```csharp
public string DnsSupport { get; }
```

- *Type:* string

---

##### `Ipv6Support`<sup>Required</sup> <a name="Ipv6Support" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.ipv6Support"></a>

```csharp
public string Ipv6Support { get; }
```

- *Type:* string

---

##### `SecurityGroupReferencingSupport`<sup>Required</sup> <a name="SecurityGroupReferencingSupport" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.securityGroupReferencingSupport"></a>

```csharp
public string SecurityGroupReferencingSupport { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `VpcOwnerId`<sup>Required</sup> <a name="VpcOwnerId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.vpcOwnerId"></a>

```csharp
public string VpcOwnerId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransitGatewayAttachmentIdInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayAttachmentIdInput"></a>

```csharp
public string TransitGatewayAttachmentIdInput { get; }
```

- *Type:* string

---

##### `TransitGatewayDefaultRouteTableAssociationInput`<sup>Optional</sup> <a name="TransitGatewayDefaultRouteTableAssociationInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTableAssociationInput"></a>

```csharp
public object TransitGatewayDefaultRouteTableAssociationInput { get; }
```

- *Type:* object

---

##### `TransitGatewayDefaultRouteTablePropagationInput`<sup>Optional</sup> <a name="TransitGatewayDefaultRouteTablePropagationInput" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTablePropagationInput"></a>

```csharp
public object TransitGatewayDefaultRouteTablePropagationInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `TransitGatewayDefaultRouteTableAssociation`<sup>Required</sup> <a name="TransitGatewayDefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTableAssociation"></a>

```csharp
public object TransitGatewayDefaultRouteTableAssociation { get; }
```

- *Type:* object

---

##### `TransitGatewayDefaultRouteTablePropagation`<sup>Required</sup> <a name="TransitGatewayDefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.transitGatewayDefaultRouteTablePropagation"></a>

```csharp
public object TransitGatewayDefaultRouteTablePropagation { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayVpcAttachmentAccepterConfig <a name="Ec2TransitGatewayVpcAttachmentAccepterConfig" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2TransitGatewayVpcAttachmentAccepterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string TransitGatewayAttachmentId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    object TransitGatewayDefaultRouteTableAssociation = null,
    object TransitGatewayDefaultRouteTablePropagation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_attachment_id Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#id Ec2TransitGatewayVpcAttachmentAccepter#id}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#tags Ec2TransitGatewayVpcAttachmentAccepter#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#tags_all Ec2TransitGatewayVpcAttachmentAccepter#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayDefaultRouteTableAssociation">TransitGatewayDefaultRouteTableAssociation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_association}. |
| <code><a href="#@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayDefaultRouteTablePropagation">TransitGatewayDefaultRouteTablePropagation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_propagation}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_attachment_id Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_attachment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#id Ec2TransitGatewayVpcAttachmentAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#tags Ec2TransitGatewayVpcAttachmentAccepter#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#tags_all Ec2TransitGatewayVpcAttachmentAccepter#tags_all}.

---

##### `TransitGatewayDefaultRouteTableAssociation`<sup>Optional</sup> <a name="TransitGatewayDefaultRouteTableAssociation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayDefaultRouteTableAssociation"></a>

```csharp
public object TransitGatewayDefaultRouteTableAssociation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_association}.

---

##### `TransitGatewayDefaultRouteTablePropagation`<sup>Optional</sup> <a name="TransitGatewayDefaultRouteTablePropagation" id="@cdktf/provider-aws.ec2TransitGatewayVpcAttachmentAccepter.Ec2TransitGatewayVpcAttachmentAccepterConfig.property.transitGatewayDefaultRouteTablePropagation"></a>

```csharp
public object TransitGatewayDefaultRouteTablePropagation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_propagation}.

---



