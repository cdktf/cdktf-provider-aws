# `lbTrustStoreRevocation` Submodule <a name="`lbTrustStoreRevocation` Submodule" id="@cdktf/provider-aws.lbTrustStoreRevocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbTrustStoreRevocation <a name="LbTrustStoreRevocation" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/lb_trust_store_revocation aws_lb_trust_store_revocation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTrustStoreRevocation(Construct Scope, string Id, LbTrustStoreRevocationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig">LbTrustStoreRevocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig">LbTrustStoreRevocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetRevocationsS3ObjectVersion">ResetRevocationsS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.putTimeouts"></a>

```csharp
private void PutTimeouts(LbTrustStoreRevocationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRevocationsS3ObjectVersion` <a name="ResetRevocationsS3ObjectVersion" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetRevocationsS3ObjectVersion"></a>

```csharp
private void ResetRevocationsS3ObjectVersion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LbTrustStoreRevocation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LbTrustStoreRevocation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LbTrustStoreRevocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LbTrustStoreRevocation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LbTrustStoreRevocation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LbTrustStoreRevocation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbTrustStoreRevocation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbTrustStoreRevocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/lb_trust_store_revocation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LbTrustStoreRevocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationId">RevocationId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference">LbTrustStoreRevocationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3BucketInput">RevocationsS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3KeyInput">RevocationsS3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3ObjectVersionInput">RevocationsS3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.trustStoreArnInput">TrustStoreArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3Bucket">RevocationsS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3Key">RevocationsS3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3ObjectVersion">RevocationsS3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.trustStoreArn">TrustStoreArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `RevocationId`<sup>Required</sup> <a name="RevocationId" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationId"></a>

```csharp
public double RevocationId { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.timeouts"></a>

```csharp
public LbTrustStoreRevocationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference">LbTrustStoreRevocationTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RevocationsS3BucketInput`<sup>Optional</sup> <a name="RevocationsS3BucketInput" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3BucketInput"></a>

```csharp
public string RevocationsS3BucketInput { get; }
```

- *Type:* string

---

##### `RevocationsS3KeyInput`<sup>Optional</sup> <a name="RevocationsS3KeyInput" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3KeyInput"></a>

```csharp
public string RevocationsS3KeyInput { get; }
```

- *Type:* string

---

##### `RevocationsS3ObjectVersionInput`<sup>Optional</sup> <a name="RevocationsS3ObjectVersionInput" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3ObjectVersionInput"></a>

```csharp
public string RevocationsS3ObjectVersionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrustStoreArnInput`<sup>Optional</sup> <a name="TrustStoreArnInput" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.trustStoreArnInput"></a>

```csharp
public string TrustStoreArnInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RevocationsS3Bucket`<sup>Required</sup> <a name="RevocationsS3Bucket" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3Bucket"></a>

```csharp
public string RevocationsS3Bucket { get; }
```

- *Type:* string

---

##### `RevocationsS3Key`<sup>Required</sup> <a name="RevocationsS3Key" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3Key"></a>

```csharp
public string RevocationsS3Key { get; }
```

- *Type:* string

---

##### `RevocationsS3ObjectVersion`<sup>Required</sup> <a name="RevocationsS3ObjectVersion" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.revocationsS3ObjectVersion"></a>

```csharp
public string RevocationsS3ObjectVersion { get; }
```

- *Type:* string

---

##### `TrustStoreArn`<sup>Required</sup> <a name="TrustStoreArn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.trustStoreArn"></a>

```csharp
public string TrustStoreArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbTrustStoreRevocationConfig <a name="LbTrustStoreRevocationConfig" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTrustStoreRevocationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RevocationsS3Bucket,
    string RevocationsS3Key,
    string TrustStoreArn,
    string Id = null,
    string RevocationsS3ObjectVersion = null,
    LbTrustStoreRevocationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3Bucket">RevocationsS3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/lb_trust_store_revocation#revocations_s3_bucket LbTrustStoreRevocation#revocations_s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3Key">RevocationsS3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/lb_trust_store_revocation#revocations_s3_key LbTrustStoreRevocation#revocations_s3_key}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.trustStoreArn">TrustStoreArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/lb_trust_store_revocation#trust_store_arn LbTrustStoreRevocation#trust_store_arn}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/lb_trust_store_revocation#id LbTrustStoreRevocation#id}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3ObjectVersion">RevocationsS3ObjectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/lb_trust_store_revocation#revocations_s3_object_version LbTrustStoreRevocation#revocations_s3_object_version}. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RevocationsS3Bucket`<sup>Required</sup> <a name="RevocationsS3Bucket" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3Bucket"></a>

```csharp
public string RevocationsS3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/lb_trust_store_revocation#revocations_s3_bucket LbTrustStoreRevocation#revocations_s3_bucket}.

---

##### `RevocationsS3Key`<sup>Required</sup> <a name="RevocationsS3Key" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3Key"></a>

```csharp
public string RevocationsS3Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/lb_trust_store_revocation#revocations_s3_key LbTrustStoreRevocation#revocations_s3_key}.

---

##### `TrustStoreArn`<sup>Required</sup> <a name="TrustStoreArn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.trustStoreArn"></a>

```csharp
public string TrustStoreArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/lb_trust_store_revocation#trust_store_arn LbTrustStoreRevocation#trust_store_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/lb_trust_store_revocation#id LbTrustStoreRevocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RevocationsS3ObjectVersion`<sup>Optional</sup> <a name="RevocationsS3ObjectVersion" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.revocationsS3ObjectVersion"></a>

```csharp
public string RevocationsS3ObjectVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/lb_trust_store_revocation#revocations_s3_object_version LbTrustStoreRevocation#revocations_s3_object_version}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationConfig.property.timeouts"></a>

```csharp
public LbTrustStoreRevocationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts">LbTrustStoreRevocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/lb_trust_store_revocation#timeouts LbTrustStoreRevocation#timeouts}

---

### LbTrustStoreRevocationTimeouts <a name="LbTrustStoreRevocationTimeouts" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTrustStoreRevocationTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/lb_trust_store_revocation#create LbTrustStoreRevocation#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/lb_trust_store_revocation#create LbTrustStoreRevocation#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbTrustStoreRevocationTimeoutsOutputReference <a name="LbTrustStoreRevocationTimeoutsOutputReference" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LbTrustStoreRevocationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lbTrustStoreRevocation.LbTrustStoreRevocationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



