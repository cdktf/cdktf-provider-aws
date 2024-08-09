# `bedrockCustomModel` Submodule <a name="`bedrockCustomModel` Submodule" id="@cdktf/provider-aws.bedrockCustomModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockCustomModel <a name="BedrockCustomModel" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model aws_bedrock_custom_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModel(Construct Scope, string Id, BedrockCustomModelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig">BedrockCustomModelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig">BedrockCustomModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putOutputDataConfig">PutOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putTrainingDataConfig">PutTrainingDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putValidationDataConfig">PutValidationDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetCustomizationType">ResetCustomizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetCustomModelKmsKeyId">ResetCustomModelKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetOutputDataConfig">ResetOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetTrainingDataConfig">ResetTrainingDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetValidationDataConfig">ResetValidationDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOutputDataConfig` <a name="PutOutputDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putOutputDataConfig"></a>

```csharp
private void PutOutputDataConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putOutputDataConfig.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putTimeouts"></a>

```csharp
private void PutTimeouts(BedrockCustomModelTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts">BedrockCustomModelTimeouts</a>

---

##### `PutTrainingDataConfig` <a name="PutTrainingDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putTrainingDataConfig"></a>

```csharp
private void PutTrainingDataConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putTrainingDataConfig.parameter.value"></a>

- *Type:* object

---

##### `PutValidationDataConfig` <a name="PutValidationDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putValidationDataConfig"></a>

```csharp
private void PutValidationDataConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putValidationDataConfig.parameter.value"></a>

- *Type:* object

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putVpcConfig"></a>

```csharp
private void PutVpcConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.putVpcConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomizationType` <a name="ResetCustomizationType" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetCustomizationType"></a>

```csharp
private void ResetCustomizationType()
```

##### `ResetCustomModelKmsKeyId` <a name="ResetCustomModelKmsKeyId" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetCustomModelKmsKeyId"></a>

```csharp
private void ResetCustomModelKmsKeyId()
```

##### `ResetOutputDataConfig` <a name="ResetOutputDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetOutputDataConfig"></a>

```csharp
private void ResetOutputDataConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrainingDataConfig` <a name="ResetTrainingDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetTrainingDataConfig"></a>

```csharp
private void ResetTrainingDataConfig()
```

##### `ResetValidationDataConfig` <a name="ResetValidationDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetValidationDataConfig"></a>

```csharp
private void ResetValidationDataConfig()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockCustomModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockCustomModel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockCustomModel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockCustomModel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockCustomModel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BedrockCustomModel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockCustomModel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockCustomModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BedrockCustomModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelArn">CustomModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobArn">JobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobStatus">JobStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.outputDataConfig">OutputDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList">BedrockCustomModelOutputDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference">BedrockCustomModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.trainingDataConfig">TrainingDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList">BedrockCustomModelTrainingDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.trainingMetrics">TrainingMetrics</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList">BedrockCustomModelTrainingMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.validationDataConfig">ValidationDataConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList">BedrockCustomModelValidationDataConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.validationMetrics">ValidationMetrics</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList">BedrockCustomModelValidationMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList">BedrockCustomModelVpcConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.baseModelIdentifierInput">BaseModelIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customizationTypeInput">CustomizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelKmsKeyIdInput">CustomModelKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelNameInput">CustomModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.hyperparametersInput">HyperparametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobNameInput">JobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.outputDataConfigInput">OutputDataConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.trainingDataConfigInput">TrainingDataConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.validationDataConfigInput">ValidationDataConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.vpcConfigInput">VpcConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.baseModelIdentifier">BaseModelIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customizationType">CustomizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelKmsKeyId">CustomModelKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelName">CustomModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.hyperparameters">Hyperparameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobName">JobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomModelArn`<sup>Required</sup> <a name="CustomModelArn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelArn"></a>

```csharp
public string CustomModelArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobArn`<sup>Required</sup> <a name="JobArn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobArn"></a>

```csharp
public string JobArn { get; }
```

- *Type:* string

---

##### `JobStatus`<sup>Required</sup> <a name="JobStatus" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobStatus"></a>

```csharp
public string JobStatus { get; }
```

- *Type:* string

---

##### `OutputDataConfig`<sup>Required</sup> <a name="OutputDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.outputDataConfig"></a>

```csharp
public BedrockCustomModelOutputDataConfigList OutputDataConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList">BedrockCustomModelOutputDataConfigList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.timeouts"></a>

```csharp
public BedrockCustomModelTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference">BedrockCustomModelTimeoutsOutputReference</a>

---

##### `TrainingDataConfig`<sup>Required</sup> <a name="TrainingDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.trainingDataConfig"></a>

```csharp
public BedrockCustomModelTrainingDataConfigList TrainingDataConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList">BedrockCustomModelTrainingDataConfigList</a>

---

##### `TrainingMetrics`<sup>Required</sup> <a name="TrainingMetrics" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.trainingMetrics"></a>

```csharp
public BedrockCustomModelTrainingMetricsList TrainingMetrics { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList">BedrockCustomModelTrainingMetricsList</a>

---

##### `ValidationDataConfig`<sup>Required</sup> <a name="ValidationDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.validationDataConfig"></a>

```csharp
public BedrockCustomModelValidationDataConfigList ValidationDataConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList">BedrockCustomModelValidationDataConfigList</a>

---

##### `ValidationMetrics`<sup>Required</sup> <a name="ValidationMetrics" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.validationMetrics"></a>

```csharp
public BedrockCustomModelValidationMetricsList ValidationMetrics { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList">BedrockCustomModelValidationMetricsList</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.vpcConfig"></a>

```csharp
public BedrockCustomModelVpcConfigList VpcConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList">BedrockCustomModelVpcConfigList</a>

---

##### `BaseModelIdentifierInput`<sup>Optional</sup> <a name="BaseModelIdentifierInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.baseModelIdentifierInput"></a>

```csharp
public string BaseModelIdentifierInput { get; }
```

- *Type:* string

---

##### `CustomizationTypeInput`<sup>Optional</sup> <a name="CustomizationTypeInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customizationTypeInput"></a>

```csharp
public string CustomizationTypeInput { get; }
```

- *Type:* string

---

##### `CustomModelKmsKeyIdInput`<sup>Optional</sup> <a name="CustomModelKmsKeyIdInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelKmsKeyIdInput"></a>

```csharp
public string CustomModelKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `CustomModelNameInput`<sup>Optional</sup> <a name="CustomModelNameInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelNameInput"></a>

```csharp
public string CustomModelNameInput { get; }
```

- *Type:* string

---

##### `HyperparametersInput`<sup>Optional</sup> <a name="HyperparametersInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.hyperparametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HyperparametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobNameInput"></a>

```csharp
public string JobNameInput { get; }
```

- *Type:* string

---

##### `OutputDataConfigInput`<sup>Optional</sup> <a name="OutputDataConfigInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.outputDataConfigInput"></a>

```csharp
public object OutputDataConfigInput { get; }
```

- *Type:* object

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TrainingDataConfigInput`<sup>Optional</sup> <a name="TrainingDataConfigInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.trainingDataConfigInput"></a>

```csharp
public object TrainingDataConfigInput { get; }
```

- *Type:* object

---

##### `ValidationDataConfigInput`<sup>Optional</sup> <a name="ValidationDataConfigInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.validationDataConfigInput"></a>

```csharp
public object ValidationDataConfigInput { get; }
```

- *Type:* object

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.vpcConfigInput"></a>

```csharp
public object VpcConfigInput { get; }
```

- *Type:* object

---

##### `BaseModelIdentifier`<sup>Required</sup> <a name="BaseModelIdentifier" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.baseModelIdentifier"></a>

```csharp
public string BaseModelIdentifier { get; }
```

- *Type:* string

---

##### `CustomizationType`<sup>Required</sup> <a name="CustomizationType" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customizationType"></a>

```csharp
public string CustomizationType { get; }
```

- *Type:* string

---

##### `CustomModelKmsKeyId`<sup>Required</sup> <a name="CustomModelKmsKeyId" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelKmsKeyId"></a>

```csharp
public string CustomModelKmsKeyId { get; }
```

- *Type:* string

---

##### `CustomModelName`<sup>Required</sup> <a name="CustomModelName" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.customModelName"></a>

```csharp
public string CustomModelName { get; }
```

- *Type:* string

---

##### `Hyperparameters`<sup>Required</sup> <a name="Hyperparameters" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.hyperparameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Hyperparameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.jobName"></a>

```csharp
public string JobName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockCustomModelConfig <a name="BedrockCustomModelConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BaseModelIdentifier,
    string CustomModelName,
    System.Collections.Generic.IDictionary<string, string> Hyperparameters,
    string JobName,
    string RoleArn,
    string CustomizationType = null,
    string CustomModelKmsKeyId = null,
    object OutputDataConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    BedrockCustomModelTimeouts Timeouts = null,
    object TrainingDataConfig = null,
    object ValidationDataConfig = null,
    object VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.baseModelIdentifier">BaseModelIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#base_model_identifier BedrockCustomModel#base_model_identifier}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.customModelName">CustomModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#custom_model_name BedrockCustomModel#custom_model_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.hyperparameters">Hyperparameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#hyperparameters BedrockCustomModel#hyperparameters}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.jobName">JobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#job_name BedrockCustomModel#job_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#role_arn BedrockCustomModel#role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.customizationType">CustomizationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#customization_type BedrockCustomModel#customization_type}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.customModelKmsKeyId">CustomModelKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#custom_model_kms_key_id BedrockCustomModel#custom_model_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.outputDataConfig">OutputDataConfig</a></code> | <code>object</code> | output_data_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#tags BedrockCustomModel#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts">BedrockCustomModelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.trainingDataConfig">TrainingDataConfig</a></code> | <code>object</code> | training_data_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.validationDataConfig">ValidationDataConfig</a></code> | <code>object</code> | validation_data_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.vpcConfig">VpcConfig</a></code> | <code>object</code> | vpc_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BaseModelIdentifier`<sup>Required</sup> <a name="BaseModelIdentifier" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.baseModelIdentifier"></a>

```csharp
public string BaseModelIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#base_model_identifier BedrockCustomModel#base_model_identifier}.

---

##### `CustomModelName`<sup>Required</sup> <a name="CustomModelName" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.customModelName"></a>

```csharp
public string CustomModelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#custom_model_name BedrockCustomModel#custom_model_name}.

---

##### `Hyperparameters`<sup>Required</sup> <a name="Hyperparameters" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.hyperparameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Hyperparameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#hyperparameters BedrockCustomModel#hyperparameters}.

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.jobName"></a>

```csharp
public string JobName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#job_name BedrockCustomModel#job_name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#role_arn BedrockCustomModel#role_arn}.

---

##### `CustomizationType`<sup>Optional</sup> <a name="CustomizationType" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.customizationType"></a>

```csharp
public string CustomizationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#customization_type BedrockCustomModel#customization_type}.

---

##### `CustomModelKmsKeyId`<sup>Optional</sup> <a name="CustomModelKmsKeyId" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.customModelKmsKeyId"></a>

```csharp
public string CustomModelKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#custom_model_kms_key_id BedrockCustomModel#custom_model_kms_key_id}.

---

##### `OutputDataConfig`<sup>Optional</sup> <a name="OutputDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.outputDataConfig"></a>

```csharp
public object OutputDataConfig { get; set; }
```

- *Type:* object

output_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#output_data_config BedrockCustomModel#output_data_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#tags BedrockCustomModel#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.timeouts"></a>

```csharp
public BedrockCustomModelTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts">BedrockCustomModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#timeouts BedrockCustomModel#timeouts}

---

##### `TrainingDataConfig`<sup>Optional</sup> <a name="TrainingDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.trainingDataConfig"></a>

```csharp
public object TrainingDataConfig { get; set; }
```

- *Type:* object

training_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#training_data_config BedrockCustomModel#training_data_config}

---

##### `ValidationDataConfig`<sup>Optional</sup> <a name="ValidationDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.validationDataConfig"></a>

```csharp
public object ValidationDataConfig { get; set; }
```

- *Type:* object

validation_data_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#validation_data_config BedrockCustomModel#validation_data_config}

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelConfig.property.vpcConfig"></a>

```csharp
public object VpcConfig { get; set; }
```

- *Type:* object

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#vpc_config BedrockCustomModel#vpc_config}

---

### BedrockCustomModelOutputDataConfig <a name="BedrockCustomModelOutputDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelOutputDataConfig {
    string S3Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig.property.s3Uri">S3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}. |

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfig.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}.

---

### BedrockCustomModelTimeouts <a name="BedrockCustomModelTimeouts" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#create BedrockCustomModel#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#delete BedrockCustomModel#delete}

---

### BedrockCustomModelTrainingDataConfig <a name="BedrockCustomModelTrainingDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelTrainingDataConfig {
    string S3Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig.property.s3Uri">S3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}. |

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfig.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}.

---

### BedrockCustomModelTrainingMetrics <a name="BedrockCustomModelTrainingMetrics" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelTrainingMetrics {

};
```


### BedrockCustomModelValidationDataConfig <a name="BedrockCustomModelValidationDataConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelValidationDataConfig {
    object Validator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig.property.validator">Validator</a></code> | <code>object</code> | validator block. |

---

##### `Validator`<sup>Optional</sup> <a name="Validator" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfig.property.validator"></a>

```csharp
public object Validator { get; set; }
```

- *Type:* object

validator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#validator BedrockCustomModel#validator}

---

### BedrockCustomModelValidationDataConfigValidator <a name="BedrockCustomModelValidationDataConfigValidator" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelValidationDataConfigValidator {
    string S3Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator.property.s3Uri">S3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}. |

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidator.property.s3Uri"></a>

```csharp
public string S3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}.

---

### BedrockCustomModelValidationMetrics <a name="BedrockCustomModelValidationMetrics" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelValidationMetrics {

};
```


### BedrockCustomModelVpcConfig <a name="BedrockCustomModelVpcConfig" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelVpcConfig {
    string[] SecurityGroupIds,
    string[] SubnetIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#security_group_ids BedrockCustomModel#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#subnet_ids BedrockCustomModel#subnet_ids}. |

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#security_group_ids BedrockCustomModel#security_group_ids}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/bedrock_custom_model#subnet_ids BedrockCustomModel#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockCustomModelOutputDataConfigList <a name="BedrockCustomModelOutputDataConfigList" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelOutputDataConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.get"></a>

```csharp
private BedrockCustomModelOutputDataConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockCustomModelOutputDataConfigOutputReference <a name="BedrockCustomModelOutputDataConfigOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelOutputDataConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelOutputDataConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockCustomModelTimeoutsOutputReference <a name="BedrockCustomModelTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockCustomModelTrainingDataConfigList <a name="BedrockCustomModelTrainingDataConfigList" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelTrainingDataConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.get"></a>

```csharp
private BedrockCustomModelTrainingDataConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockCustomModelTrainingDataConfigOutputReference <a name="BedrockCustomModelTrainingDataConfigOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelTrainingDataConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingDataConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockCustomModelTrainingMetricsList <a name="BedrockCustomModelTrainingMetricsList" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelTrainingMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.get"></a>

```csharp
private BedrockCustomModelTrainingMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockCustomModelTrainingMetricsOutputReference <a name="BedrockCustomModelTrainingMetricsOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelTrainingMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.trainingLoss">TrainingLoss</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetrics">BedrockCustomModelTrainingMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrainingLoss`<sup>Required</sup> <a name="TrainingLoss" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.trainingLoss"></a>

```csharp
public double TrainingLoss { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetricsOutputReference.property.internalValue"></a>

```csharp
public BedrockCustomModelTrainingMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelTrainingMetrics">BedrockCustomModelTrainingMetrics</a>

---


### BedrockCustomModelValidationDataConfigList <a name="BedrockCustomModelValidationDataConfigList" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelValidationDataConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.get"></a>

```csharp
private BedrockCustomModelValidationDataConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockCustomModelValidationDataConfigOutputReference <a name="BedrockCustomModelValidationDataConfigOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelValidationDataConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.putValidator">PutValidator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.resetValidator">ResetValidator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValidator` <a name="PutValidator" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.putValidator"></a>

```csharp
private void PutValidator(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.putValidator.parameter.value"></a>

- *Type:* object

---

##### `ResetValidator` <a name="ResetValidator" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.resetValidator"></a>

```csharp
private void ResetValidator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.validator">Validator</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList">BedrockCustomModelValidationDataConfigValidatorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.validatorInput">ValidatorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Validator`<sup>Required</sup> <a name="Validator" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.validator"></a>

```csharp
public BedrockCustomModelValidationDataConfigValidatorList Validator { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList">BedrockCustomModelValidationDataConfigValidatorList</a>

---

##### `ValidatorInput`<sup>Optional</sup> <a name="ValidatorInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.validatorInput"></a>

```csharp
public object ValidatorInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockCustomModelValidationDataConfigValidatorList <a name="BedrockCustomModelValidationDataConfigValidatorList" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelValidationDataConfigValidatorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.get"></a>

```csharp
private BedrockCustomModelValidationDataConfigValidatorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockCustomModelValidationDataConfigValidatorOutputReference <a name="BedrockCustomModelValidationDataConfigValidatorOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelValidationDataConfigValidatorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.s3UriInput"></a>

```csharp
public string S3UriInput { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationDataConfigValidatorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockCustomModelValidationMetricsList <a name="BedrockCustomModelValidationMetricsList" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelValidationMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.get"></a>

```csharp
private BedrockCustomModelValidationMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockCustomModelValidationMetricsOutputReference <a name="BedrockCustomModelValidationMetricsOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelValidationMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.validationLoss">ValidationLoss</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetrics">BedrockCustomModelValidationMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValidationLoss`<sup>Required</sup> <a name="ValidationLoss" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.validationLoss"></a>

```csharp
public double ValidationLoss { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetricsOutputReference.property.internalValue"></a>

```csharp
public BedrockCustomModelValidationMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelValidationMetrics">BedrockCustomModelValidationMetrics</a>

---


### BedrockCustomModelVpcConfigList <a name="BedrockCustomModelVpcConfigList" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelVpcConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.get"></a>

```csharp
private BedrockCustomModelVpcConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockCustomModelVpcConfigOutputReference <a name="BedrockCustomModelVpcConfigOutputReference" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockCustomModelVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockCustomModel.BedrockCustomModelVpcConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



