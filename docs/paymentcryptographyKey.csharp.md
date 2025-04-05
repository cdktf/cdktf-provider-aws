# `paymentcryptographyKey` Submodule <a name="`paymentcryptographyKey` Submodule" id="@cdktf/provider-aws.paymentcryptographyKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaymentcryptographyKey <a name="PaymentcryptographyKey" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key aws_paymentcryptography_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PaymentcryptographyKey(Construct Scope, string Id, PaymentcryptographyKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig">PaymentcryptographyKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig">PaymentcryptographyKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putKeyAttributes">PutKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetDeletionWindowInDays">ResetDeletionWindowInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyAttributes">ResetKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyCheckValueAlgorithm">ResetKeyCheckValueAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKeyAttributes` <a name="PutKeyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putKeyAttributes"></a>

```csharp
private void PutKeyAttributes(PaymentcryptographyKeyKeyAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putKeyAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putTimeouts"></a>

```csharp
private void PutTimeouts(PaymentcryptographyKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a>

---

##### `ResetDeletionWindowInDays` <a name="ResetDeletionWindowInDays" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetDeletionWindowInDays"></a>

```csharp
private void ResetDeletionWindowInDays()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetKeyAttributes` <a name="ResetKeyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyAttributes"></a>

```csharp
private void ResetKeyAttributes()
```

##### `ResetKeyCheckValueAlgorithm` <a name="ResetKeyCheckValueAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetKeyCheckValueAlgorithm"></a>

```csharp
private void ResetKeyCheckValueAlgorithm()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PaymentcryptographyKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PaymentcryptographyKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PaymentcryptographyKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PaymentcryptographyKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PaymentcryptographyKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PaymentcryptographyKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PaymentcryptographyKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PaymentcryptographyKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PaymentcryptographyKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributes">KeyAttributes</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference">PaymentcryptographyKeyKeyAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValue">KeyCheckValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyOrigin">KeyOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyState">KeyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference">PaymentcryptographyKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDaysInput">DeletionWindowInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportableInput">ExportableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributesInput">KeyAttributesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithmInput">KeyCheckValueAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDays">DeletionWindowInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportable">Exportable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithm">KeyCheckValueAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyAttributes`<sup>Required</sup> <a name="KeyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributes"></a>

```csharp
public PaymentcryptographyKeyKeyAttributesOutputReference KeyAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference">PaymentcryptographyKeyKeyAttributesOutputReference</a>

---

##### `KeyCheckValue`<sup>Required</sup> <a name="KeyCheckValue" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValue"></a>

```csharp
public string KeyCheckValue { get; }
```

- *Type:* string

---

##### `KeyOrigin`<sup>Required</sup> <a name="KeyOrigin" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyOrigin"></a>

```csharp
public string KeyOrigin { get; }
```

- *Type:* string

---

##### `KeyState`<sup>Required</sup> <a name="KeyState" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyState"></a>

```csharp
public string KeyState { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeouts"></a>

```csharp
public PaymentcryptographyKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference">PaymentcryptographyKeyTimeoutsOutputReference</a>

---

##### `DeletionWindowInDaysInput`<sup>Optional</sup> <a name="DeletionWindowInDaysInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDaysInput"></a>

```csharp
public double DeletionWindowInDaysInput { get; }
```

- *Type:* double

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ExportableInput`<sup>Optional</sup> <a name="ExportableInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportableInput"></a>

```csharp
public object ExportableInput { get; }
```

- *Type:* object

---

##### `KeyAttributesInput`<sup>Optional</sup> <a name="KeyAttributesInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyAttributesInput"></a>

```csharp
public object KeyAttributesInput { get; }
```

- *Type:* object

---

##### `KeyCheckValueAlgorithmInput`<sup>Optional</sup> <a name="KeyCheckValueAlgorithmInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithmInput"></a>

```csharp
public string KeyCheckValueAlgorithmInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeletionWindowInDays`<sup>Required</sup> <a name="DeletionWindowInDays" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.deletionWindowInDays"></a>

```csharp
public double DeletionWindowInDays { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Exportable`<sup>Required</sup> <a name="Exportable" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.exportable"></a>

```csharp
public object Exportable { get; }
```

- *Type:* object

---

##### `KeyCheckValueAlgorithm`<sup>Required</sup> <a name="KeyCheckValueAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.keyCheckValueAlgorithm"></a>

```csharp
public string KeyCheckValueAlgorithm { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PaymentcryptographyKeyConfig <a name="PaymentcryptographyKeyConfig" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PaymentcryptographyKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Exportable,
    double DeletionWindowInDays = null,
    object Enabled = null,
    PaymentcryptographyKeyKeyAttributes KeyAttributes = null,
    string KeyCheckValueAlgorithm = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    PaymentcryptographyKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.exportable">Exportable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#exportable PaymentcryptographyKey#exportable}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.deletionWindowInDays">DeletionWindowInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#deletion_window_in_days PaymentcryptographyKey#deletion_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#enabled PaymentcryptographyKey#enabled}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyAttributes">KeyAttributes</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a></code> | key_attributes block. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyCheckValueAlgorithm">KeyCheckValueAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#key_check_value_algorithm PaymentcryptographyKey#key_check_value_algorithm}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#tags PaymentcryptographyKey#tags}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Exportable`<sup>Required</sup> <a name="Exportable" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.exportable"></a>

```csharp
public object Exportable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#exportable PaymentcryptographyKey#exportable}.

---

##### `DeletionWindowInDays`<sup>Optional</sup> <a name="DeletionWindowInDays" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.deletionWindowInDays"></a>

```csharp
public double DeletionWindowInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#deletion_window_in_days PaymentcryptographyKey#deletion_window_in_days}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#enabled PaymentcryptographyKey#enabled}.

---

##### `KeyAttributes`<sup>Optional</sup> <a name="KeyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyAttributes"></a>

```csharp
public PaymentcryptographyKeyKeyAttributes KeyAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes">PaymentcryptographyKeyKeyAttributes</a>

key_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#key_attributes PaymentcryptographyKey#key_attributes}

---

##### `KeyCheckValueAlgorithm`<sup>Optional</sup> <a name="KeyCheckValueAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.keyCheckValueAlgorithm"></a>

```csharp
public string KeyCheckValueAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#key_check_value_algorithm PaymentcryptographyKey#key_check_value_algorithm}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#tags PaymentcryptographyKey#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyConfig.property.timeouts"></a>

```csharp
public PaymentcryptographyKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts">PaymentcryptographyKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#timeouts PaymentcryptographyKey#timeouts}

---

### PaymentcryptographyKeyKeyAttributes <a name="PaymentcryptographyKeyKeyAttributes" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PaymentcryptographyKeyKeyAttributes {
    string KeyAlgorithm,
    string KeyClass,
    string KeyUsage,
    PaymentcryptographyKeyKeyAttributesKeyModesOfUse KeyModesOfUse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#key_algorithm PaymentcryptographyKey#key_algorithm}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyClass">KeyClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#key_class PaymentcryptographyKey#key_class}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyUsage">KeyUsage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#key_usage PaymentcryptographyKey#key_usage}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyModesOfUse">KeyModesOfUse</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a></code> | key_modes_of_use block. |

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#key_algorithm PaymentcryptographyKey#key_algorithm}.

---

##### `KeyClass`<sup>Required</sup> <a name="KeyClass" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyClass"></a>

```csharp
public string KeyClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#key_class PaymentcryptographyKey#key_class}.

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyUsage"></a>

```csharp
public string KeyUsage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#key_usage PaymentcryptographyKey#key_usage}.

---

##### `KeyModesOfUse`<sup>Optional</sup> <a name="KeyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributes.property.keyModesOfUse"></a>

```csharp
public PaymentcryptographyKeyKeyAttributesKeyModesOfUse KeyModesOfUse { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>

key_modes_of_use block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#key_modes_of_use PaymentcryptographyKey#key_modes_of_use}

---

### PaymentcryptographyKeyKeyAttributesKeyModesOfUse <a name="PaymentcryptographyKeyKeyAttributesKeyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PaymentcryptographyKeyKeyAttributesKeyModesOfUse {
    object Decrypt = null,
    object DeriveKey = null,
    object Encrypt = null,
    object Generate = null,
    object NoRestrictions = null,
    object Sign = null,
    object Unwrap = null,
    object Verify = null,
    object Wrap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.decrypt">Decrypt</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#decrypt PaymentcryptographyKey#decrypt}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.deriveKey">DeriveKey</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#derive_key PaymentcryptographyKey#derive_key}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.encrypt">Encrypt</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#encrypt PaymentcryptographyKey#encrypt}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.generate">Generate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#generate PaymentcryptographyKey#generate}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.noRestrictions">NoRestrictions</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#no_restrictions PaymentcryptographyKey#no_restrictions}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.sign">Sign</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#sign PaymentcryptographyKey#sign}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.unwrap">Unwrap</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#unwrap PaymentcryptographyKey#unwrap}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.verify">Verify</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#verify PaymentcryptographyKey#verify}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.wrap">Wrap</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#wrap PaymentcryptographyKey#wrap}. |

---

##### `Decrypt`<sup>Optional</sup> <a name="Decrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.decrypt"></a>

```csharp
public object Decrypt { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#decrypt PaymentcryptographyKey#decrypt}.

---

##### `DeriveKey`<sup>Optional</sup> <a name="DeriveKey" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.deriveKey"></a>

```csharp
public object DeriveKey { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#derive_key PaymentcryptographyKey#derive_key}.

---

##### `Encrypt`<sup>Optional</sup> <a name="Encrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.encrypt"></a>

```csharp
public object Encrypt { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#encrypt PaymentcryptographyKey#encrypt}.

---

##### `Generate`<sup>Optional</sup> <a name="Generate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.generate"></a>

```csharp
public object Generate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#generate PaymentcryptographyKey#generate}.

---

##### `NoRestrictions`<sup>Optional</sup> <a name="NoRestrictions" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.noRestrictions"></a>

```csharp
public object NoRestrictions { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#no_restrictions PaymentcryptographyKey#no_restrictions}.

---

##### `Sign`<sup>Optional</sup> <a name="Sign" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.sign"></a>

```csharp
public object Sign { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#sign PaymentcryptographyKey#sign}.

---

##### `Unwrap`<sup>Optional</sup> <a name="Unwrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.unwrap"></a>

```csharp
public object Unwrap { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#unwrap PaymentcryptographyKey#unwrap}.

---

##### `Verify`<sup>Optional</sup> <a name="Verify" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.verify"></a>

```csharp
public object Verify { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#verify PaymentcryptographyKey#verify}.

---

##### `Wrap`<sup>Optional</sup> <a name="Wrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse.property.wrap"></a>

```csharp
public object Wrap { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#wrap PaymentcryptographyKey#wrap}.

---

### PaymentcryptographyKeyTimeouts <a name="PaymentcryptographyKeyTimeouts" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PaymentcryptographyKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#create PaymentcryptographyKey#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#delete PaymentcryptographyKey#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/paymentcryptography_key#update PaymentcryptographyKey#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference <a name="PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDecrypt">ResetDecrypt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDeriveKey">ResetDeriveKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetEncrypt">ResetEncrypt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetGenerate">ResetGenerate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetNoRestrictions">ResetNoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetSign">ResetSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetUnwrap">ResetUnwrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetVerify">ResetVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetWrap">ResetWrap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDecrypt` <a name="ResetDecrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDecrypt"></a>

```csharp
private void ResetDecrypt()
```

##### `ResetDeriveKey` <a name="ResetDeriveKey" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetDeriveKey"></a>

```csharp
private void ResetDeriveKey()
```

##### `ResetEncrypt` <a name="ResetEncrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetEncrypt"></a>

```csharp
private void ResetEncrypt()
```

##### `ResetGenerate` <a name="ResetGenerate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetGenerate"></a>

```csharp
private void ResetGenerate()
```

##### `ResetNoRestrictions` <a name="ResetNoRestrictions" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetNoRestrictions"></a>

```csharp
private void ResetNoRestrictions()
```

##### `ResetSign` <a name="ResetSign" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetSign"></a>

```csharp
private void ResetSign()
```

##### `ResetUnwrap` <a name="ResetUnwrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetUnwrap"></a>

```csharp
private void ResetUnwrap()
```

##### `ResetVerify` <a name="ResetVerify" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetVerify"></a>

```csharp
private void ResetVerify()
```

##### `ResetWrap` <a name="ResetWrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.resetWrap"></a>

```csharp
private void ResetWrap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decryptInput">DecryptInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKeyInput">DeriveKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encryptInput">EncryptInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generateInput">GenerateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictionsInput">NoRestrictionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.signInput">SignInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrapInput">UnwrapInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verifyInput">VerifyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrapInput">WrapInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decrypt">Decrypt</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKey">DeriveKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encrypt">Encrypt</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generate">Generate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictions">NoRestrictions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.sign">Sign</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrap">Unwrap</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verify">Verify</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrap">Wrap</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DecryptInput`<sup>Optional</sup> <a name="DecryptInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decryptInput"></a>

```csharp
public object DecryptInput { get; }
```

- *Type:* object

---

##### `DeriveKeyInput`<sup>Optional</sup> <a name="DeriveKeyInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKeyInput"></a>

```csharp
public object DeriveKeyInput { get; }
```

- *Type:* object

---

##### `EncryptInput`<sup>Optional</sup> <a name="EncryptInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encryptInput"></a>

```csharp
public object EncryptInput { get; }
```

- *Type:* object

---

##### `GenerateInput`<sup>Optional</sup> <a name="GenerateInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generateInput"></a>

```csharp
public object GenerateInput { get; }
```

- *Type:* object

---

##### `NoRestrictionsInput`<sup>Optional</sup> <a name="NoRestrictionsInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictionsInput"></a>

```csharp
public object NoRestrictionsInput { get; }
```

- *Type:* object

---

##### `SignInput`<sup>Optional</sup> <a name="SignInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.signInput"></a>

```csharp
public object SignInput { get; }
```

- *Type:* object

---

##### `UnwrapInput`<sup>Optional</sup> <a name="UnwrapInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrapInput"></a>

```csharp
public object UnwrapInput { get; }
```

- *Type:* object

---

##### `VerifyInput`<sup>Optional</sup> <a name="VerifyInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verifyInput"></a>

```csharp
public object VerifyInput { get; }
```

- *Type:* object

---

##### `WrapInput`<sup>Optional</sup> <a name="WrapInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrapInput"></a>

```csharp
public object WrapInput { get; }
```

- *Type:* object

---

##### `Decrypt`<sup>Required</sup> <a name="Decrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.decrypt"></a>

```csharp
public object Decrypt { get; }
```

- *Type:* object

---

##### `DeriveKey`<sup>Required</sup> <a name="DeriveKey" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.deriveKey"></a>

```csharp
public object DeriveKey { get; }
```

- *Type:* object

---

##### `Encrypt`<sup>Required</sup> <a name="Encrypt" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.encrypt"></a>

```csharp
public object Encrypt { get; }
```

- *Type:* object

---

##### `Generate`<sup>Required</sup> <a name="Generate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.generate"></a>

```csharp
public object Generate { get; }
```

- *Type:* object

---

##### `NoRestrictions`<sup>Required</sup> <a name="NoRestrictions" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.noRestrictions"></a>

```csharp
public object NoRestrictions { get; }
```

- *Type:* object

---

##### `Sign`<sup>Required</sup> <a name="Sign" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.sign"></a>

```csharp
public object Sign { get; }
```

- *Type:* object

---

##### `Unwrap`<sup>Required</sup> <a name="Unwrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.unwrap"></a>

```csharp
public object Unwrap { get; }
```

- *Type:* object

---

##### `Verify`<sup>Required</sup> <a name="Verify" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.verify"></a>

```csharp
public object Verify { get; }
```

- *Type:* object

---

##### `Wrap`<sup>Required</sup> <a name="Wrap" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.wrap"></a>

```csharp
public object Wrap { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PaymentcryptographyKeyKeyAttributesOutputReference <a name="PaymentcryptographyKeyKeyAttributesOutputReference" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PaymentcryptographyKeyKeyAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse">PutKeyModesOfUse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resetKeyModesOfUse">ResetKeyModesOfUse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKeyModesOfUse` <a name="PutKeyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse"></a>

```csharp
private void PutKeyModesOfUse(PaymentcryptographyKeyKeyAttributesKeyModesOfUse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.putKeyModesOfUse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUse">PaymentcryptographyKeyKeyAttributesKeyModesOfUse</a>

---

##### `ResetKeyModesOfUse` <a name="ResetKeyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.resetKeyModesOfUse"></a>

```csharp
private void ResetKeyModesOfUse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUse">KeyModesOfUse</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference">PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClassInput">KeyClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUseInput">KeyModesOfUseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsageInput">KeyUsageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClass">KeyClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsage">KeyUsage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyModesOfUse`<sup>Required</sup> <a name="KeyModesOfUse" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUse"></a>

```csharp
public PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference KeyModesOfUse { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference">PaymentcryptographyKeyKeyAttributesKeyModesOfUseOutputReference</a>

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithmInput"></a>

```csharp
public string KeyAlgorithmInput { get; }
```

- *Type:* string

---

##### `KeyClassInput`<sup>Optional</sup> <a name="KeyClassInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClassInput"></a>

```csharp
public string KeyClassInput { get; }
```

- *Type:* string

---

##### `KeyModesOfUseInput`<sup>Optional</sup> <a name="KeyModesOfUseInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyModesOfUseInput"></a>

```csharp
public object KeyModesOfUseInput { get; }
```

- *Type:* object

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsageInput"></a>

```csharp
public string KeyUsageInput { get; }
```

- *Type:* string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; }
```

- *Type:* string

---

##### `KeyClass`<sup>Required</sup> <a name="KeyClass" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyClass"></a>

```csharp
public string KeyClass { get; }
```

- *Type:* string

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.keyUsage"></a>

```csharp
public string KeyUsage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyKeyAttributesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PaymentcryptographyKeyTimeoutsOutputReference <a name="PaymentcryptographyKeyTimeoutsOutputReference" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PaymentcryptographyKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.paymentcryptographyKey.PaymentcryptographyKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



