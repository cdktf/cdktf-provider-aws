# `apprunnerDefaultAutoScalingConfigurationVersion` Submodule <a name="`apprunnerDefaultAutoScalingConfigurationVersion` Submodule" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerDefaultAutoScalingConfigurationVersion <a name="ApprunnerDefaultAutoScalingConfigurationVersion" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/apprunner_default_auto_scaling_configuration_version aws_apprunner_default_auto_scaling_configuration_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApprunnerDefaultAutoScalingConfigurationVersion(Construct Scope, string Id, ApprunnerDefaultAutoScalingConfigurationVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig">ApprunnerDefaultAutoScalingConfigurationVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig">ApprunnerDefaultAutoScalingConfigurationVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApprunnerDefaultAutoScalingConfigurationVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApprunnerDefaultAutoScalingConfigurationVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApprunnerDefaultAutoScalingConfigurationVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApprunnerDefaultAutoScalingConfigurationVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ApprunnerDefaultAutoScalingConfigurationVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApprunnerDefaultAutoScalingConfigurationVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApprunnerDefaultAutoScalingConfigurationVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApprunnerDefaultAutoScalingConfigurationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/apprunner_default_auto_scaling_configuration_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApprunnerDefaultAutoScalingConfigurationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.autoScalingConfigurationArnInput">AutoScalingConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.autoScalingConfigurationArn">AutoScalingConfigurationArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AutoScalingConfigurationArnInput`<sup>Optional</sup> <a name="AutoScalingConfigurationArnInput" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.autoScalingConfigurationArnInput"></a>

```csharp
public string AutoScalingConfigurationArnInput { get; }
```

- *Type:* string

---

##### `AutoScalingConfigurationArn`<sup>Required</sup> <a name="AutoScalingConfigurationArn" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.autoScalingConfigurationArn"></a>

```csharp
public string AutoScalingConfigurationArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerDefaultAutoScalingConfigurationVersionConfig <a name="ApprunnerDefaultAutoScalingConfigurationVersionConfig" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ApprunnerDefaultAutoScalingConfigurationVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutoScalingConfigurationArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.autoScalingConfigurationArn">AutoScalingConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/apprunner_default_auto_scaling_configuration_version#auto_scaling_configuration_arn ApprunnerDefaultAutoScalingConfigurationVersion#auto_scaling_configuration_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutoScalingConfigurationArn`<sup>Required</sup> <a name="AutoScalingConfigurationArn" id="@cdktf/provider-aws.apprunnerDefaultAutoScalingConfigurationVersion.ApprunnerDefaultAutoScalingConfigurationVersionConfig.property.autoScalingConfigurationArn"></a>

```csharp
public string AutoScalingConfigurationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.70.0/docs/resources/apprunner_default_auto_scaling_configuration_version#auto_scaling_configuration_arn ApprunnerDefaultAutoScalingConfigurationVersion#auto_scaling_configuration_arn}.

---



