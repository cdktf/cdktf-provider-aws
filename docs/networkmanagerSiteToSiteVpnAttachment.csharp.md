# `networkmanagerSiteToSiteVpnAttachment` Submodule <a name="`networkmanagerSiteToSiteVpnAttachment` Submodule" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerSiteToSiteVpnAttachment <a name="NetworkmanagerSiteToSiteVpnAttachment" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment aws_networkmanager_site_to_site_vpn_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkmanagerSiteToSiteVpnAttachment(Construct Scope, string Id, NetworkmanagerSiteToSiteVpnAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig">NetworkmanagerSiteToSiteVpnAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig">NetworkmanagerSiteToSiteVpnAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkmanagerSiteToSiteVpnAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkmanagerSiteToSiteVpnAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkmanagerSiteToSiteVpnAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkmanagerSiteToSiteVpnAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkmanagerSiteToSiteVpnAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

NetworkmanagerSiteToSiteVpnAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkmanagerSiteToSiteVpnAttachment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerSiteToSiteVpnAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerSiteToSiteVpnAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkmanagerSiteToSiteVpnAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentType">AttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.edgeLocation">EdgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.ownerAccountId">OwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.segmentName">SegmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference">NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkIdInput">CoreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArnInput">VpnConnectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArn">VpnConnectionArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentPolicyRuleNumber"></a>

```csharp
public double AttachmentPolicyRuleNumber { get; }
```

- *Type:* double

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentType"></a>

```csharp
public string AttachmentType { get; }
```

- *Type:* string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; }
```

- *Type:* string

---

##### `EdgeLocation`<sup>Required</sup> <a name="EdgeLocation" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.edgeLocation"></a>

```csharp
public string EdgeLocation { get; }
```

- *Type:* string

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.ownerAccountId"></a>

```csharp
public string OwnerAccountId { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.segmentName"></a>

```csharp
public string SegmentName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.timeouts"></a>

```csharp
public NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference">NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference</a>

---

##### `CoreNetworkIdInput`<sup>Optional</sup> <a name="CoreNetworkIdInput" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkIdInput"></a>

```csharp
public string CoreNetworkIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpnConnectionArnInput`<sup>Optional</sup> <a name="VpnConnectionArnInput" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArnInput"></a>

```csharp
public string VpnConnectionArnInput { get; }
```

- *Type:* string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpnConnectionArn`<sup>Required</sup> <a name="VpnConnectionArn" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArn"></a>

```csharp
public string VpnConnectionArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerSiteToSiteVpnAttachmentConfig <a name="NetworkmanagerSiteToSiteVpnAttachmentConfig" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkmanagerSiteToSiteVpnAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CoreNetworkId,
    string VpnConnectionArn,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    NetworkmanagerSiteToSiteVpnAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#core_network_id NetworkmanagerSiteToSiteVpnAttachment#core_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.vpnConnectionArn">VpnConnectionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#vpn_connection_arn NetworkmanagerSiteToSiteVpnAttachment#vpn_connection_arn}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#id NetworkmanagerSiteToSiteVpnAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags NetworkmanagerSiteToSiteVpnAttachment#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags_all NetworkmanagerSiteToSiteVpnAttachment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#core_network_id NetworkmanagerSiteToSiteVpnAttachment#core_network_id}.

---

##### `VpnConnectionArn`<sup>Required</sup> <a name="VpnConnectionArn" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.vpnConnectionArn"></a>

```csharp
public string VpnConnectionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#vpn_connection_arn NetworkmanagerSiteToSiteVpnAttachment#vpn_connection_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#id NetworkmanagerSiteToSiteVpnAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags NetworkmanagerSiteToSiteVpnAttachment#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags_all NetworkmanagerSiteToSiteVpnAttachment#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.timeouts"></a>

```csharp
public NetworkmanagerSiteToSiteVpnAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#timeouts NetworkmanagerSiteToSiteVpnAttachment#timeouts}

---

### NetworkmanagerSiteToSiteVpnAttachmentTimeouts <a name="NetworkmanagerSiteToSiteVpnAttachmentTimeouts" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkmanagerSiteToSiteVpnAttachmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#create NetworkmanagerSiteToSiteVpnAttachment#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#delete NetworkmanagerSiteToSiteVpnAttachment#delete}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#update NetworkmanagerSiteToSiteVpnAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#create NetworkmanagerSiteToSiteVpnAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#delete NetworkmanagerSiteToSiteVpnAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/networkmanager_site_to_site_vpn_attachment#update NetworkmanagerSiteToSiteVpnAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference <a name="NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



