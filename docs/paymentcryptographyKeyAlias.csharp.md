# `paymentcryptographyKeyAlias` Submodule <a name="`paymentcryptographyKeyAlias` Submodule" id="@cdktf/provider-aws.paymentcryptographyKeyAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaymentcryptographyKeyAlias <a name="PaymentcryptographyKeyAlias" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/paymentcryptography_key_alias aws_paymentcryptography_key_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PaymentcryptographyKeyAlias(Construct Scope, string Id, PaymentcryptographyKeyAliasConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig">PaymentcryptographyKeyAliasConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig">PaymentcryptographyKeyAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.resetKeyArn">ResetKeyArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetKeyArn` <a name="ResetKeyArn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.resetKeyArn"></a>

```csharp
private void ResetKeyArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PaymentcryptographyKeyAlias resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PaymentcryptographyKeyAlias.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PaymentcryptographyKeyAlias.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PaymentcryptographyKeyAlias.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

PaymentcryptographyKeyAlias.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PaymentcryptographyKeyAlias resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PaymentcryptographyKeyAlias to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PaymentcryptographyKeyAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/paymentcryptography_key_alias#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PaymentcryptographyKeyAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.aliasNameInput">AliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.keyArnInput">KeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.aliasName">AliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.keyArn">KeyArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AliasNameInput`<sup>Optional</sup> <a name="AliasNameInput" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.aliasNameInput"></a>

```csharp
public string AliasNameInput { get; }
```

- *Type:* string

---

##### `KeyArnInput`<sup>Optional</sup> <a name="KeyArnInput" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.keyArnInput"></a>

```csharp
public string KeyArnInput { get; }
```

- *Type:* string

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.aliasName"></a>

```csharp
public string AliasName { get; }
```

- *Type:* string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.keyArn"></a>

```csharp
public string KeyArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAlias.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PaymentcryptographyKeyAliasConfig <a name="PaymentcryptographyKeyAliasConfig" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new PaymentcryptographyKeyAliasConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AliasName,
    string KeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.aliasName">AliasName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/paymentcryptography_key_alias#alias_name PaymentcryptographyKeyAlias#alias_name}. |
| <code><a href="#@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.keyArn">KeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/paymentcryptography_key_alias#key_arn PaymentcryptographyKeyAlias#key_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.aliasName"></a>

```csharp
public string AliasName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/paymentcryptography_key_alias#alias_name PaymentcryptographyKeyAlias#alias_name}.

---

##### `KeyArn`<sup>Optional</sup> <a name="KeyArn" id="@cdktf/provider-aws.paymentcryptographyKeyAlias.PaymentcryptographyKeyAliasConfig.property.keyArn"></a>

```csharp
public string KeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/paymentcryptography_key_alias#key_arn PaymentcryptographyKeyAlias#key_arn}.

---



