# `vpclatticeServiceNetworkServiceAssociation` Submodule <a name="`vpclatticeServiceNetworkServiceAssociation` Submodule" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeServiceNetworkServiceAssociation <a name="VpclatticeServiceNetworkServiceAssociation" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association aws_vpclattice_service_network_service_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeServiceNetworkServiceAssociation(Construct Scope, string Id, VpclatticeServiceNetworkServiceAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig">VpclatticeServiceNetworkServiceAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig">VpclatticeServiceNetworkServiceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(VpclatticeServiceNetworkServiceAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts">VpclatticeServiceNetworkServiceAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpclatticeServiceNetworkServiceAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpclatticeServiceNetworkServiceAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpclatticeServiceNetworkServiceAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpclatticeServiceNetworkServiceAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpclatticeServiceNetworkServiceAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VpclatticeServiceNetworkServiceAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeServiceNetworkServiceAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeServiceNetworkServiceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VpclatticeServiceNetworkServiceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.customDomainName">CustomDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dnsEntry">DnsEntry</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList">VpclatticeServiceNetworkServiceAssociationDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference">VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifierInput">ServiceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifierInput">ServiceNetworkIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifier">ServiceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifier">ServiceNetworkIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CustomDomainName`<sup>Required</sup> <a name="CustomDomainName" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.customDomainName"></a>

```csharp
public string CustomDomainName { get; }
```

- *Type:* string

---

##### `DnsEntry`<sup>Required</sup> <a name="DnsEntry" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.dnsEntry"></a>

```csharp
public VpclatticeServiceNetworkServiceAssociationDnsEntryList DnsEntry { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList">VpclatticeServiceNetworkServiceAssociationDnsEntryList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.timeouts"></a>

```csharp
public VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference">VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ServiceIdentifierInput`<sup>Optional</sup> <a name="ServiceIdentifierInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifierInput"></a>

```csharp
public string ServiceIdentifierInput { get; }
```

- *Type:* string

---

##### `ServiceNetworkIdentifierInput`<sup>Optional</sup> <a name="ServiceNetworkIdentifierInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifierInput"></a>

```csharp
public string ServiceNetworkIdentifierInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceIdentifier`<sup>Required</sup> <a name="ServiceIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceIdentifier"></a>

```csharp
public string ServiceIdentifier { get; }
```

- *Type:* string

---

##### `ServiceNetworkIdentifier`<sup>Required</sup> <a name="ServiceNetworkIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifier"></a>

```csharp
public string ServiceNetworkIdentifier { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeServiceNetworkServiceAssociationConfig <a name="VpclatticeServiceNetworkServiceAssociationConfig" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeServiceNetworkServiceAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ServiceIdentifier,
    string ServiceNetworkIdentifier,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    VpclatticeServiceNetworkServiceAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceIdentifier">ServiceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#service_identifier VpclatticeServiceNetworkServiceAssociation#service_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceNetworkIdentifier">ServiceNetworkIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#service_network_identifier VpclatticeServiceNetworkServiceAssociation#service_network_identifier}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#id VpclatticeServiceNetworkServiceAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#tags VpclatticeServiceNetworkServiceAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#tags_all VpclatticeServiceNetworkServiceAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts">VpclatticeServiceNetworkServiceAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ServiceIdentifier`<sup>Required</sup> <a name="ServiceIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceIdentifier"></a>

```csharp
public string ServiceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#service_identifier VpclatticeServiceNetworkServiceAssociation#service_identifier}.

---

##### `ServiceNetworkIdentifier`<sup>Required</sup> <a name="ServiceNetworkIdentifier" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.serviceNetworkIdentifier"></a>

```csharp
public string ServiceNetworkIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#service_network_identifier VpclatticeServiceNetworkServiceAssociation#service_network_identifier}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#id VpclatticeServiceNetworkServiceAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#tags VpclatticeServiceNetworkServiceAssociation#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#tags_all VpclatticeServiceNetworkServiceAssociation#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationConfig.property.timeouts"></a>

```csharp
public VpclatticeServiceNetworkServiceAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts">VpclatticeServiceNetworkServiceAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#timeouts VpclatticeServiceNetworkServiceAssociation#timeouts}

---

### VpclatticeServiceNetworkServiceAssociationDnsEntry <a name="VpclatticeServiceNetworkServiceAssociationDnsEntry" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeServiceNetworkServiceAssociationDnsEntry {

};
```


### VpclatticeServiceNetworkServiceAssociationTimeouts <a name="VpclatticeServiceNetworkServiceAssociationTimeouts" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeServiceNetworkServiceAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#create VpclatticeServiceNetworkServiceAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#delete VpclatticeServiceNetworkServiceAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#update VpclatticeServiceNetworkServiceAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#create VpclatticeServiceNetworkServiceAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#delete VpclatticeServiceNetworkServiceAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/resources/vpclattice_service_network_service_association#update VpclatticeServiceNetworkServiceAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeServiceNetworkServiceAssociationDnsEntryList <a name="VpclatticeServiceNetworkServiceAssociationDnsEntryList" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeServiceNetworkServiceAssociationDnsEntryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.get"></a>

```csharp
private VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference <a name="VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.internalValue"></a>

```csharp
public VpclatticeServiceNetworkServiceAssociationDnsEntry InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationDnsEntry">VpclatticeServiceNetworkServiceAssociationDnsEntry</a>

---


### VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference <a name="VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpclatticeServiceNetworkServiceAssociation.VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



