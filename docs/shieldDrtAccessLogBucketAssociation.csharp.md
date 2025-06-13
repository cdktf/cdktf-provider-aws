# `shieldDrtAccessLogBucketAssociation` Submodule <a name="`shieldDrtAccessLogBucketAssociation` Submodule" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldDrtAccessLogBucketAssociation <a name="ShieldDrtAccessLogBucketAssociation" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/shield_drt_access_log_bucket_association aws_shield_drt_access_log_bucket_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ShieldDrtAccessLogBucketAssociation(Construct Scope, string Id, ShieldDrtAccessLogBucketAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig">ShieldDrtAccessLogBucketAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig">ShieldDrtAccessLogBucketAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(ShieldDrtAccessLogBucketAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a>

---

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ShieldDrtAccessLogBucketAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ShieldDrtAccessLogBucketAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ShieldDrtAccessLogBucketAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ShieldDrtAccessLogBucketAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ShieldDrtAccessLogBucketAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ShieldDrtAccessLogBucketAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ShieldDrtAccessLogBucketAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ShieldDrtAccessLogBucketAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/shield_drt_access_log_bucket_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ShieldDrtAccessLogBucketAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference">ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucketInput">LogBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationIdInput">RoleArnAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucket">LogBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationId">RoleArnAssociationId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeouts"></a>

```csharp
public ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference">ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference</a>

---

##### `LogBucketInput`<sup>Optional</sup> <a name="LogBucketInput" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucketInput"></a>

```csharp
public string LogBucketInput { get; }
```

- *Type:* string

---

##### `RoleArnAssociationIdInput`<sup>Optional</sup> <a name="RoleArnAssociationIdInput" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationIdInput"></a>

```csharp
public string RoleArnAssociationIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `LogBucket`<sup>Required</sup> <a name="LogBucket" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucket"></a>

```csharp
public string LogBucket { get; }
```

- *Type:* string

---

##### `RoleArnAssociationId`<sup>Required</sup> <a name="RoleArnAssociationId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationId"></a>

```csharp
public string RoleArnAssociationId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldDrtAccessLogBucketAssociationConfig <a name="ShieldDrtAccessLogBucketAssociationConfig" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ShieldDrtAccessLogBucketAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LogBucket,
    string RoleArnAssociationId,
    ShieldDrtAccessLogBucketAssociationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.logBucket">LogBucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/shield_drt_access_log_bucket_association#log_bucket ShieldDrtAccessLogBucketAssociation#log_bucket}. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.roleArnAssociationId">RoleArnAssociationId</a></code> | <code>string</code> | Unused. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LogBucket`<sup>Required</sup> <a name="LogBucket" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.logBucket"></a>

```csharp
public string LogBucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/shield_drt_access_log_bucket_association#log_bucket ShieldDrtAccessLogBucketAssociation#log_bucket}.

---

##### `RoleArnAssociationId`<sup>Required</sup> <a name="RoleArnAssociationId" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.roleArnAssociationId"></a>

```csharp
public string RoleArnAssociationId { get; set; }
```

- *Type:* string

Unused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/shield_drt_access_log_bucket_association#role_arn_association_id ShieldDrtAccessLogBucketAssociation#role_arn_association_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.timeouts"></a>

```csharp
public ShieldDrtAccessLogBucketAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/shield_drt_access_log_bucket_association#timeouts ShieldDrtAccessLogBucketAssociation#timeouts}

---

### ShieldDrtAccessLogBucketAssociationTimeouts <a name="ShieldDrtAccessLogBucketAssociationTimeouts" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ShieldDrtAccessLogBucketAssociationTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/shield_drt_access_log_bucket_association#create ShieldDrtAccessLogBucketAssociation#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/shield_drt_access_log_bucket_association#delete ShieldDrtAccessLogBucketAssociation#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference <a name="ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



