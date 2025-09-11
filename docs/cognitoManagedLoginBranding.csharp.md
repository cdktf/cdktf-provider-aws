# `cognitoManagedLoginBranding` Submodule <a name="`cognitoManagedLoginBranding` Submodule" id="@cdktf/provider-aws.cognitoManagedLoginBranding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoManagedLoginBranding <a name="CognitoManagedLoginBranding" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding aws_cognito_managed_login_branding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoManagedLoginBranding(Construct Scope, string Id, CognitoManagedLoginBrandingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig">CognitoManagedLoginBrandingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig">CognitoManagedLoginBrandingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.putAsset">PutAsset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetAsset">ResetAsset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetUseCognitoProvidedValues">ResetUseCognitoProvidedValues</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAsset` <a name="PutAsset" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.putAsset"></a>

```csharp
private void PutAsset(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.putAsset.parameter.value"></a>

- *Type:* object

---

##### `ResetAsset` <a name="ResetAsset" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetAsset"></a>

```csharp
private void ResetAsset()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetUseCognitoProvidedValues` <a name="ResetUseCognitoProvidedValues" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetUseCognitoProvidedValues"></a>

```csharp
private void ResetUseCognitoProvidedValues()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CognitoManagedLoginBranding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoManagedLoginBranding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoManagedLoginBranding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoManagedLoginBranding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoManagedLoginBranding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CognitoManagedLoginBranding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoManagedLoginBranding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoManagedLoginBranding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CognitoManagedLoginBranding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.asset">Asset</a></code> | <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList">CognitoManagedLoginBrandingAssetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.managedLoginBrandingId">ManagedLoginBrandingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settingsAll">SettingsAll</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assetInput">AssetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settingsInput">SettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValuesInput">UseCognitoProvidedValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settings">Settings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValues">UseCognitoProvidedValues</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Asset`<sup>Required</sup> <a name="Asset" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.asset"></a>

```csharp
public CognitoManagedLoginBrandingAssetList Asset { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList">CognitoManagedLoginBrandingAssetList</a>

---

##### `ManagedLoginBrandingId`<sup>Required</sup> <a name="ManagedLoginBrandingId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.managedLoginBrandingId"></a>

```csharp
public string ManagedLoginBrandingId { get; }
```

- *Type:* string

---

##### `SettingsAll`<sup>Required</sup> <a name="SettingsAll" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settingsAll"></a>

```csharp
public string SettingsAll { get; }
```

- *Type:* string

---

##### `AssetInput`<sup>Optional</sup> <a name="AssetInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assetInput"></a>

```csharp
public object AssetInput { get; }
```

- *Type:* object

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settingsInput"></a>

```csharp
public string SettingsInput { get; }
```

- *Type:* string

---

##### `UseCognitoProvidedValuesInput`<sup>Optional</sup> <a name="UseCognitoProvidedValuesInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValuesInput"></a>

```csharp
public object UseCognitoProvidedValuesInput { get; }
```

- *Type:* object

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settings"></a>

```csharp
public string Settings { get; }
```

- *Type:* string

---

##### `UseCognitoProvidedValues`<sup>Required</sup> <a name="UseCognitoProvidedValues" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValues"></a>

```csharp
public object UseCognitoProvidedValues { get; }
```

- *Type:* object

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoManagedLoginBrandingAsset <a name="CognitoManagedLoginBrandingAsset" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoManagedLoginBrandingAsset {
    string Category,
    string ColorMode,
    string Extension,
    string Bytes = null,
    string ResourceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#category CognitoManagedLoginBranding#category}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.colorMode">ColorMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#color_mode CognitoManagedLoginBranding#color_mode}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.extension">Extension</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#extension CognitoManagedLoginBranding#extension}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.bytes">Bytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#bytes CognitoManagedLoginBranding#bytes}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#resource_id CognitoManagedLoginBranding#resource_id}. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#category CognitoManagedLoginBranding#category}.

---

##### `ColorMode`<sup>Required</sup> <a name="ColorMode" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.colorMode"></a>

```csharp
public string ColorMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#color_mode CognitoManagedLoginBranding#color_mode}.

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.extension"></a>

```csharp
public string Extension { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#extension CognitoManagedLoginBranding#extension}.

---

##### `Bytes`<sup>Optional</sup> <a name="Bytes" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.bytes"></a>

```csharp
public string Bytes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#bytes CognitoManagedLoginBranding#bytes}.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAsset.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#resource_id CognitoManagedLoginBranding#resource_id}.

---

### CognitoManagedLoginBrandingConfig <a name="CognitoManagedLoginBrandingConfig" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoManagedLoginBrandingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClientId,
    string UserPoolId,
    object Asset = null,
    string Region = null,
    string Settings = null,
    object UseCognitoProvidedValues = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#client_id CognitoManagedLoginBranding#client_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#user_pool_id CognitoManagedLoginBranding#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.asset">Asset</a></code> | <code>object</code> | asset block. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.settings">Settings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#settings CognitoManagedLoginBranding#settings}. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.useCognitoProvidedValues">UseCognitoProvidedValues</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CognitoManagedLoginBranding#use_cognito_provided_values}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#client_id CognitoManagedLoginBranding#client_id}.

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#user_pool_id CognitoManagedLoginBranding#user_pool_id}.

---

##### `Asset`<sup>Optional</sup> <a name="Asset" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.asset"></a>

```csharp
public object Asset { get; set; }
```

- *Type:* object

asset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#asset CognitoManagedLoginBranding#asset}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#region CognitoManagedLoginBranding#region}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.settings"></a>

```csharp
public string Settings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#settings CognitoManagedLoginBranding#settings}.

---

##### `UseCognitoProvidedValues`<sup>Optional</sup> <a name="UseCognitoProvidedValues" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.useCognitoProvidedValues"></a>

```csharp
public object UseCognitoProvidedValues { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CognitoManagedLoginBranding#use_cognito_provided_values}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoManagedLoginBrandingAssetList <a name="CognitoManagedLoginBrandingAssetList" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoManagedLoginBrandingAssetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.get"></a>

```csharp
private CognitoManagedLoginBrandingAssetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoManagedLoginBrandingAssetOutputReference <a name="CognitoManagedLoginBrandingAssetOutputReference" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoManagedLoginBrandingAssetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.resetBytes">ResetBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBytes` <a name="ResetBytes" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.resetBytes"></a>

```csharp
private void ResetBytes()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.resetResourceId"></a>

```csharp
private void ResetResourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.bytesInput">BytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.colorModeInput">ColorModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.extensionInput">ExtensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.bytes">Bytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.colorMode">ColorMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.extension">Extension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BytesInput`<sup>Optional</sup> <a name="BytesInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.bytesInput"></a>

```csharp
public string BytesInput { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `ColorModeInput`<sup>Optional</sup> <a name="ColorModeInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.colorModeInput"></a>

```csharp
public string ColorModeInput { get; }
```

- *Type:* string

---

##### `ExtensionInput`<sup>Optional</sup> <a name="ExtensionInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.extensionInput"></a>

```csharp
public string ExtensionInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `Bytes`<sup>Required</sup> <a name="Bytes" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.bytes"></a>

```csharp
public string Bytes { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `ColorMode`<sup>Required</sup> <a name="ColorMode" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.colorMode"></a>

```csharp
public string ColorMode { get; }
```

- *Type:* string

---

##### `Extension`<sup>Required</sup> <a name="Extension" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.extension"></a>

```csharp
public string Extension { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



