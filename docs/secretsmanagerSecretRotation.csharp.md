# `secretsmanagerSecretRotation` Submodule <a name="`secretsmanagerSecretRotation` Submodule" id="@cdktf/provider-aws.secretsmanagerSecretRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecretRotation <a name="SecretsmanagerSecretRotation" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation aws_secretsmanager_secret_rotation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecretsmanagerSecretRotation(Construct Scope, string Id, SecretsmanagerSecretRotationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig">SecretsmanagerSecretRotationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig">SecretsmanagerSecretRotationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.putRotationRules">PutRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotateImmediately">ResetRotateImmediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotationLambdaArn">ResetRotationLambdaArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRotationRules` <a name="PutRotationRules" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.putRotationRules"></a>

```csharp
private void PutRotationRules(SecretsmanagerSecretRotationRotationRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.putRotationRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRotateImmediately` <a name="ResetRotateImmediately" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotateImmediately"></a>

```csharp
private void ResetRotateImmediately()
```

##### `ResetRotationLambdaArn` <a name="ResetRotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.resetRotationLambdaArn"></a>

```csharp
private void ResetRotationLambdaArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecretsmanagerSecretRotation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecretsmanagerSecretRotation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecretsmanagerSecretRotation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecretsmanagerSecretRotation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecretsmanagerSecretRotation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecretsmanagerSecretRotation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsmanagerSecretRotation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsmanagerSecretRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecretsmanagerSecretRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationEnabled">RotationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRules">RotationRules</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference">SecretsmanagerSecretRotationRotationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediatelyInput">RotateImmediatelyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArnInput">RotationLambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRulesInput">RotationRulesInput</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediately">RotateImmediately</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArn">RotationLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `RotationEnabled`<sup>Required</sup> <a name="RotationEnabled" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationEnabled"></a>

```csharp
public IResolvable RotationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RotationRules`<sup>Required</sup> <a name="RotationRules" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRules"></a>

```csharp
public SecretsmanagerSecretRotationRotationRulesOutputReference RotationRules { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference">SecretsmanagerSecretRotationRotationRulesOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RotateImmediatelyInput`<sup>Optional</sup> <a name="RotateImmediatelyInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediatelyInput"></a>

```csharp
public object RotateImmediatelyInput { get; }
```

- *Type:* object

---

##### `RotationLambdaArnInput`<sup>Optional</sup> <a name="RotationLambdaArnInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArnInput"></a>

```csharp
public string RotationLambdaArnInput { get; }
```

- *Type:* string

---

##### `RotationRulesInput`<sup>Optional</sup> <a name="RotationRulesInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationRulesInput"></a>

```csharp
public SecretsmanagerSecretRotationRotationRules RotationRulesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RotateImmediately`<sup>Required</sup> <a name="RotateImmediately" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotateImmediately"></a>

```csharp
public object RotateImmediately { get; }
```

- *Type:* object

---

##### `RotationLambdaArn`<sup>Required</sup> <a name="RotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.rotationLambdaArn"></a>

```csharp
public string RotationLambdaArn { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretRotationConfig <a name="SecretsmanagerSecretRotationConfig" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecretsmanagerSecretRotationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    SecretsmanagerSecretRotationRotationRules RotationRules,
    string SecretId,
    string Id = null,
    string Region = null,
    object RotateImmediately = null,
    string RotationLambdaArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationRules">RotationRules</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a></code> | rotation_rules block. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#secret_id SecretsmanagerSecretRotation#secret_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#id SecretsmanagerSecretRotation#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotateImmediately">RotateImmediately</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotate_immediately SecretsmanagerSecretRotation#rotate_immediately}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationLambdaArn">RotationLambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RotationRules`<sup>Required</sup> <a name="RotationRules" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationRules"></a>

```csharp
public SecretsmanagerSecretRotationRotationRules RotationRules { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

rotation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotation_rules SecretsmanagerSecretRotation#rotation_rules}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#secret_id SecretsmanagerSecretRotation#secret_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#id SecretsmanagerSecretRotation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#region SecretsmanagerSecretRotation#region}

---

##### `RotateImmediately`<sup>Optional</sup> <a name="RotateImmediately" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotateImmediately"></a>

```csharp
public object RotateImmediately { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotate_immediately SecretsmanagerSecretRotation#rotate_immediately}.

---

##### `RotationLambdaArn`<sup>Optional</sup> <a name="RotationLambdaArn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationConfig.property.rotationLambdaArn"></a>

```csharp
public string RotationLambdaArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}.

---

### SecretsmanagerSecretRotationRotationRules <a name="SecretsmanagerSecretRotationRotationRules" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecretsmanagerSecretRotationRotationRules {
    double AutomaticallyAfterDays = null,
    string Duration = null,
    string ScheduleExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.automaticallyAfterDays">AutomaticallyAfterDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#automatically_after_days SecretsmanagerSecretRotation#automatically_after_days}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#duration SecretsmanagerSecretRotation#duration}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#schedule_expression SecretsmanagerSecretRotation#schedule_expression}. |

---

##### `AutomaticallyAfterDays`<sup>Optional</sup> <a name="AutomaticallyAfterDays" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.automaticallyAfterDays"></a>

```csharp
public double AutomaticallyAfterDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#automatically_after_days SecretsmanagerSecretRotation#automatically_after_days}.

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#duration SecretsmanagerSecretRotation#duration}.

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/secretsmanager_secret_rotation#schedule_expression SecretsmanagerSecretRotation#schedule_expression}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerSecretRotationRotationRulesOutputReference <a name="SecretsmanagerSecretRotationRotationRulesOutputReference" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecretsmanagerSecretRotationRotationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetAutomaticallyAfterDays">ResetAutomaticallyAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutomaticallyAfterDays` <a name="ResetAutomaticallyAfterDays" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetAutomaticallyAfterDays"></a>

```csharp
private void ResetAutomaticallyAfterDays()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.resetScheduleExpression"></a>

```csharp
private void ResetScheduleExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDaysInput">AutomaticallyAfterDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDays">AutomaticallyAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutomaticallyAfterDaysInput`<sup>Optional</sup> <a name="AutomaticallyAfterDaysInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDaysInput"></a>

```csharp
public double AutomaticallyAfterDaysInput { get; }
```

- *Type:* double

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `AutomaticallyAfterDays`<sup>Required</sup> <a name="AutomaticallyAfterDays" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```csharp
public double AutomaticallyAfterDays { get; }
```

- *Type:* double

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRulesOutputReference.property.internalValue"></a>

```csharp
public SecretsmanagerSecretRotationRotationRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretRotation.SecretsmanagerSecretRotationRotationRules">SecretsmanagerSecretRotationRotationRules</a>

---



