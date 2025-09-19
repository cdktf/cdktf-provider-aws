# `cognitoLogDeliveryConfiguration` Submodule <a name="`cognitoLogDeliveryConfiguration` Submodule" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoLogDeliveryConfiguration <a name="CognitoLogDeliveryConfiguration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration aws_cognito_log_delivery_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoLogDeliveryConfiguration(Construct Scope, string Id, CognitoLogDeliveryConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig">CognitoLogDeliveryConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig">CognitoLogDeliveryConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.putLogConfigurations">PutLogConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.resetLogConfigurations">ResetLogConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfigurations` <a name="PutLogConfigurations" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.putLogConfigurations"></a>

```csharp
private void PutLogConfigurations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.putLogConfigurations.parameter.value"></a>

- *Type:* object

---

##### `ResetLogConfigurations` <a name="ResetLogConfigurations" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.resetLogConfigurations"></a>

```csharp
private void ResetLogConfigurations()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CognitoLogDeliveryConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoLogDeliveryConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoLogDeliveryConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoLogDeliveryConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CognitoLogDeliveryConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CognitoLogDeliveryConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoLogDeliveryConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoLogDeliveryConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CognitoLogDeliveryConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logConfigurations">LogConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList">CognitoLogDeliveryConfigurationLogConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logConfigurationsInput">LogConfigurationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LogConfigurations`<sup>Required</sup> <a name="LogConfigurations" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logConfigurations"></a>

```csharp
public CognitoLogDeliveryConfigurationLogConfigurationsList LogConfigurations { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList">CognitoLogDeliveryConfigurationLogConfigurationsList</a>

---

##### `LogConfigurationsInput`<sup>Optional</sup> <a name="LogConfigurationsInput" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logConfigurationsInput"></a>

```csharp
public object LogConfigurationsInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoLogDeliveryConfigurationConfig <a name="CognitoLogDeliveryConfigurationConfig" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoLogDeliveryConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string UserPoolId,
    object LogConfigurations = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#user_pool_id CognitoLogDeliveryConfiguration#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.logConfigurations">LogConfigurations</a></code> | <code>object</code> | log_configurations block. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#user_pool_id CognitoLogDeliveryConfiguration#user_pool_id}.

---

##### `LogConfigurations`<sup>Optional</sup> <a name="LogConfigurations" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.logConfigurations"></a>

```csharp
public object LogConfigurations { get; set; }
```

- *Type:* object

log_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#log_configurations CognitoLogDeliveryConfiguration#log_configurations}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#region CognitoLogDeliveryConfiguration#region}

---

### CognitoLogDeliveryConfigurationLogConfigurations <a name="CognitoLogDeliveryConfigurationLogConfigurations" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoLogDeliveryConfigurationLogConfigurations {
    string EventSource,
    string LogLevel,
    object CloudWatchLogsConfiguration = null,
    object FirehoseConfiguration = null,
    object S3Configuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.eventSource">EventSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#event_source CognitoLogDeliveryConfiguration#event_source}. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.logLevel">LogLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#log_level CognitoLogDeliveryConfiguration#log_level}. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.cloudWatchLogsConfiguration">CloudWatchLogsConfiguration</a></code> | <code>object</code> | cloud_watch_logs_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.firehoseConfiguration">FirehoseConfiguration</a></code> | <code>object</code> | firehose_configuration block. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.s3Configuration">S3Configuration</a></code> | <code>object</code> | s3_configuration block. |

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.eventSource"></a>

```csharp
public string EventSource { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#event_source CognitoLogDeliveryConfiguration#event_source}.

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#log_level CognitoLogDeliveryConfiguration#log_level}.

---

##### `CloudWatchLogsConfiguration`<sup>Optional</sup> <a name="CloudWatchLogsConfiguration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.cloudWatchLogsConfiguration"></a>

```csharp
public object CloudWatchLogsConfiguration { get; set; }
```

- *Type:* object

cloud_watch_logs_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#cloud_watch_logs_configuration CognitoLogDeliveryConfiguration#cloud_watch_logs_configuration}

---

##### `FirehoseConfiguration`<sup>Optional</sup> <a name="FirehoseConfiguration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.firehoseConfiguration"></a>

```csharp
public object FirehoseConfiguration { get; set; }
```

- *Type:* object

firehose_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#firehose_configuration CognitoLogDeliveryConfiguration#firehose_configuration}

---

##### `S3Configuration`<sup>Optional</sup> <a name="S3Configuration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.s3Configuration"></a>

```csharp
public object S3Configuration { get; set; }
```

- *Type:* object

s3_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#s3_configuration CognitoLogDeliveryConfiguration#s3_configuration}

---

### CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfiguration <a name="CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfiguration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfiguration {
    string LogGroupArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfiguration.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#log_group_arn CognitoLogDeliveryConfiguration#log_group_arn}. |

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfiguration.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#log_group_arn CognitoLogDeliveryConfiguration#log_group_arn}.

---

### CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration <a name="CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration {
    string StreamArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration.property.streamArn">StreamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#stream_arn CognitoLogDeliveryConfiguration#stream_arn}. |

---

##### `StreamArn`<sup>Optional</sup> <a name="StreamArn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration.property.streamArn"></a>

```csharp
public string StreamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#stream_arn CognitoLogDeliveryConfiguration#stream_arn}.

---

### CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration <a name="CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration {
    string BucketArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration.property.bucketArn">BucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#bucket_arn CognitoLogDeliveryConfiguration#bucket_arn}. |

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration.property.bucketArn"></a>

```csharp
public string BucketArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/cognito_log_delivery_configuration#bucket_arn CognitoLogDeliveryConfiguration#bucket_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList <a name="CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.get"></a>

```csharp
private CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference <a name="CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.resetLogGroupArn">ResetLogGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.resetLogGroupArn"></a>

```csharp
private void ResetLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.property.logGroupArnInput"></a>

```csharp
public string LogGroupArnInput { get; }
```

- *Type:* string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList <a name="CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.get"></a>

```csharp
private CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference <a name="CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resetStreamArn">ResetStreamArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStreamArn` <a name="ResetStreamArn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resetStreamArn"></a>

```csharp
private void ResetStreamArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArnInput">StreamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArn">StreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StreamArnInput`<sup>Optional</sup> <a name="StreamArnInput" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArnInput"></a>

```csharp
public string StreamArnInput { get; }
```

- *Type:* string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArn"></a>

```csharp
public string StreamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoLogDeliveryConfigurationLogConfigurationsList <a name="CognitoLogDeliveryConfigurationLogConfigurationsList" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoLogDeliveryConfigurationLogConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.get"></a>

```csharp
private CognitoLogDeliveryConfigurationLogConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoLogDeliveryConfigurationLogConfigurationsOutputReference <a name="CognitoLogDeliveryConfigurationLogConfigurationsOutputReference" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoLogDeliveryConfigurationLogConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putCloudWatchLogsConfiguration">PutCloudWatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putFirehoseConfiguration">PutFirehoseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putS3Configuration">PutS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetCloudWatchLogsConfiguration">ResetCloudWatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetFirehoseConfiguration">ResetFirehoseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetS3Configuration">ResetS3Configuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudWatchLogsConfiguration` <a name="PutCloudWatchLogsConfiguration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putCloudWatchLogsConfiguration"></a>

```csharp
private void PutCloudWatchLogsConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putCloudWatchLogsConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutFirehoseConfiguration` <a name="PutFirehoseConfiguration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putFirehoseConfiguration"></a>

```csharp
private void PutFirehoseConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putFirehoseConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutS3Configuration` <a name="PutS3Configuration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putS3Configuration"></a>

```csharp
private void PutS3Configuration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* object

---

##### `ResetCloudWatchLogsConfiguration` <a name="ResetCloudWatchLogsConfiguration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetCloudWatchLogsConfiguration"></a>

```csharp
private void ResetCloudWatchLogsConfiguration()
```

##### `ResetFirehoseConfiguration` <a name="ResetFirehoseConfiguration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetFirehoseConfiguration"></a>

```csharp
private void ResetFirehoseConfiguration()
```

##### `ResetS3Configuration` <a name="ResetS3Configuration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetS3Configuration"></a>

```csharp
private void ResetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudWatchLogsConfiguration">CloudWatchLogsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList">CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfiguration">FirehoseConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList">CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudWatchLogsConfigurationInput">CloudWatchLogsConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSourceInput">EventSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfigurationInput">FirehoseConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3ConfigurationInput">S3ConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSource">EventSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudWatchLogsConfiguration`<sup>Required</sup> <a name="CloudWatchLogsConfiguration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudWatchLogsConfiguration"></a>

```csharp
public CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList CloudWatchLogsConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList">CognitoLogDeliveryConfigurationLogConfigurationsCloudWatchLogsConfigurationList</a>

---

##### `FirehoseConfiguration`<sup>Required</sup> <a name="FirehoseConfiguration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfiguration"></a>

```csharp
public CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList FirehoseConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationList</a>

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3Configuration"></a>

```csharp
public CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList S3Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList">CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList</a>

---

##### `CloudWatchLogsConfigurationInput`<sup>Optional</sup> <a name="CloudWatchLogsConfigurationInput" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudWatchLogsConfigurationInput"></a>

```csharp
public object CloudWatchLogsConfigurationInput { get; }
```

- *Type:* object

---

##### `EventSourceInput`<sup>Optional</sup> <a name="EventSourceInput" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSourceInput"></a>

```csharp
public string EventSourceInput { get; }
```

- *Type:* string

---

##### `FirehoseConfigurationInput`<sup>Optional</sup> <a name="FirehoseConfigurationInput" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfigurationInput"></a>

```csharp
public object FirehoseConfigurationInput { get; }
```

- *Type:* object

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `S3ConfigurationInput`<sup>Optional</sup> <a name="S3ConfigurationInput" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3ConfigurationInput"></a>

```csharp
public object S3ConfigurationInput { get; }
```

- *Type:* object

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSource"></a>

```csharp
public string EventSource { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList <a name="CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.get"></a>

```csharp
private CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference <a name="CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resetBucketArn">ResetBucketArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketArn` <a name="ResetBucketArn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resetBucketArn"></a>

```csharp
private void ResetBucketArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArnInput"></a>

```csharp
public string BucketArnInput { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



