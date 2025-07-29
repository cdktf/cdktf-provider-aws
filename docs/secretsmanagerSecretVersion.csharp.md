# `secretsmanagerSecretVersion` Submodule <a name="`secretsmanagerSecretVersion` Submodule" id="@cdktf/provider-aws.secretsmanagerSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecretVersion <a name="SecretsmanagerSecretVersion" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version aws_secretsmanager_secret_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecretsmanagerSecretVersion(Construct Scope, string Id, SecretsmanagerSecretVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig">SecretsmanagerSecretVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig">SecretsmanagerSecretVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretBinary">ResetSecretBinary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretString">ResetSecretString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretStringWo">ResetSecretStringWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretStringWoVersion">ResetSecretStringWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetVersionStages">ResetVersionStages</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecretBinary` <a name="ResetSecretBinary" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretBinary"></a>

```csharp
private void ResetSecretBinary()
```

##### `ResetSecretString` <a name="ResetSecretString" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretString"></a>

```csharp
private void ResetSecretString()
```

##### `ResetSecretStringWo` <a name="ResetSecretStringWo" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretStringWo"></a>

```csharp
private void ResetSecretStringWo()
```

##### `ResetSecretStringWoVersion` <a name="ResetSecretStringWoVersion" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretStringWoVersion"></a>

```csharp
private void ResetSecretStringWoVersion()
```

##### `ResetVersionStages` <a name="ResetVersionStages" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetVersionStages"></a>

```csharp
private void ResetVersionStages()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecretsmanagerSecretVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecretsmanagerSecretVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecretsmanagerSecretVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecretsmanagerSecretVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecretsmanagerSecretVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecretsmanagerSecretVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsmanagerSecretVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsmanagerSecretVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecretsmanagerSecretVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.hasSecretStringWo">HasSecretStringWo</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinaryInput">SecretBinaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringInput">SecretStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoInput">SecretStringWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoVersionInput">SecretStringWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStagesInput">VersionStagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinary">SecretBinary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretString">SecretString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWo">SecretStringWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoVersion">SecretStringWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStages">VersionStages</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HasSecretStringWo`<sup>Required</sup> <a name="HasSecretStringWo" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.hasSecretStringWo"></a>

```csharp
public IResolvable HasSecretStringWo { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecretBinaryInput`<sup>Optional</sup> <a name="SecretBinaryInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinaryInput"></a>

```csharp
public string SecretBinaryInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `SecretStringInput`<sup>Optional</sup> <a name="SecretStringInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringInput"></a>

```csharp
public string SecretStringInput { get; }
```

- *Type:* string

---

##### `SecretStringWoInput`<sup>Optional</sup> <a name="SecretStringWoInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoInput"></a>

```csharp
public string SecretStringWoInput { get; }
```

- *Type:* string

---

##### `SecretStringWoVersionInput`<sup>Optional</sup> <a name="SecretStringWoVersionInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoVersionInput"></a>

```csharp
public double SecretStringWoVersionInput { get; }
```

- *Type:* double

---

##### `VersionStagesInput`<sup>Optional</sup> <a name="VersionStagesInput" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStagesInput"></a>

```csharp
public string[] VersionStagesInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecretBinary`<sup>Required</sup> <a name="SecretBinary" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinary"></a>

```csharp
public string SecretBinary { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `SecretString`<sup>Required</sup> <a name="SecretString" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretString"></a>

```csharp
public string SecretString { get; }
```

- *Type:* string

---

##### `SecretStringWo`<sup>Required</sup> <a name="SecretStringWo" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWo"></a>

```csharp
public string SecretStringWo { get; }
```

- *Type:* string

---

##### `SecretStringWoVersion`<sup>Required</sup> <a name="SecretStringWoVersion" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoVersion"></a>

```csharp
public double SecretStringWoVersion { get; }
```

- *Type:* double

---

##### `VersionStages`<sup>Required</sup> <a name="VersionStages" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStages"></a>

```csharp
public string[] VersionStages { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretVersionConfig <a name="SecretsmanagerSecretVersionConfig" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecretsmanagerSecretVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SecretId,
    string Id = null,
    string Region = null,
    string SecretBinary = null,
    string SecretString = null,
    string SecretStringWo = null,
    double SecretStringWoVersion = null,
    string[] VersionStages = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretId">SecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#secret_id SecretsmanagerSecretVersion#secret_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#id SecretsmanagerSecretVersion#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretBinary">SecretBinary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#secret_binary SecretsmanagerSecretVersion#secret_binary}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretString">SecretString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#secret_string SecretsmanagerSecretVersion#secret_string}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretStringWo">SecretStringWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#secret_string_wo SecretsmanagerSecretVersion#secret_string_wo}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretStringWoVersion">SecretStringWoVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#secret_string_wo_version SecretsmanagerSecretVersion#secret_string_wo_version}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.versionStages">VersionStages</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#version_stages SecretsmanagerSecretVersion#version_stages}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#secret_id SecretsmanagerSecretVersion#secret_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#id SecretsmanagerSecretVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#region SecretsmanagerSecretVersion#region}

---

##### `SecretBinary`<sup>Optional</sup> <a name="SecretBinary" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretBinary"></a>

```csharp
public string SecretBinary { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#secret_binary SecretsmanagerSecretVersion#secret_binary}.

---

##### `SecretString`<sup>Optional</sup> <a name="SecretString" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretString"></a>

```csharp
public string SecretString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#secret_string SecretsmanagerSecretVersion#secret_string}.

---

##### `SecretStringWo`<sup>Optional</sup> <a name="SecretStringWo" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretStringWo"></a>

```csharp
public string SecretStringWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#secret_string_wo SecretsmanagerSecretVersion#secret_string_wo}.

---

##### `SecretStringWoVersion`<sup>Optional</sup> <a name="SecretStringWoVersion" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretStringWoVersion"></a>

```csharp
public double SecretStringWoVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#secret_string_wo_version SecretsmanagerSecretVersion#secret_string_wo_version}.

---

##### `VersionStages`<sup>Optional</sup> <a name="VersionStages" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.versionStages"></a>

```csharp
public string[] VersionStages { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/secretsmanager_secret_version#version_stages SecretsmanagerSecretVersion#version_stages}.

---



