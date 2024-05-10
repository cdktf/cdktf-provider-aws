# `bedrockagentAgent` Submodule <a name="`bedrockagentAgent` Submodule" id="@cdktf/provider-aws.bedrockagentAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentAgent <a name="BedrockagentAgent" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent aws_bedrockagent_agent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentAgent(Construct Scope, string Id, BedrockagentAgentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig">BedrockagentAgentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig">BedrockagentAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putPromptOverrideConfiguration">PutPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetCustomerEncryptionKeyArn">ResetCustomerEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetIdleSessionTtlInSeconds">ResetIdleSessionTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetInstruction">ResetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetPrepareAgent">ResetPrepareAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetPromptOverrideConfiguration">ResetPromptOverrideConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPromptOverrideConfiguration` <a name="PutPromptOverrideConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putPromptOverrideConfiguration"></a>

```csharp
private void PutPromptOverrideConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putPromptOverrideConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putTimeouts"></a>

```csharp
private void PutTimeouts(BedrockagentAgentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a>

---

##### `ResetCustomerEncryptionKeyArn` <a name="ResetCustomerEncryptionKeyArn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetCustomerEncryptionKeyArn"></a>

```csharp
private void ResetCustomerEncryptionKeyArn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIdleSessionTtlInSeconds` <a name="ResetIdleSessionTtlInSeconds" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetIdleSessionTtlInSeconds"></a>

```csharp
private void ResetIdleSessionTtlInSeconds()
```

##### `ResetInstruction` <a name="ResetInstruction" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetInstruction"></a>

```csharp
private void ResetInstruction()
```

##### `ResetPrepareAgent` <a name="ResetPrepareAgent" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetPrepareAgent"></a>

```csharp
private void ResetPrepareAgent()
```

##### `ResetPromptOverrideConfiguration` <a name="ResetPromptOverrideConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetPromptOverrideConfiguration"></a>

```csharp
private void ResetPromptOverrideConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentAgent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentAgent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentAgent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentAgent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentAgent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BedrockagentAgent resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentAgent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentArn">AgentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentVersion">AgentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.promptOverrideConfiguration">PromptOverrideConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList">BedrockagentAgentPromptOverrideConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference">BedrockagentAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentNameInput">AgentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentResourceRoleArnInput">AgentResourceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.customerEncryptionKeyArnInput">CustomerEncryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.foundationModelInput">FoundationModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.idleSessionTtlInSecondsInput">IdleSessionTtlInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.instructionInput">InstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.prepareAgentInput">PrepareAgentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.promptOverrideConfigurationInput">PromptOverrideConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentName">AgentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentResourceRoleArn">AgentResourceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.customerEncryptionKeyArn">CustomerEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.foundationModel">FoundationModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.idleSessionTtlInSeconds">IdleSessionTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.instruction">Instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.prepareAgent">PrepareAgent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AgentArn`<sup>Required</sup> <a name="AgentArn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentArn"></a>

```csharp
public string AgentArn { get; }
```

- *Type:* string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentVersion"></a>

```csharp
public string AgentVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PromptOverrideConfiguration`<sup>Required</sup> <a name="PromptOverrideConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.promptOverrideConfiguration"></a>

```csharp
public BedrockagentAgentPromptOverrideConfigurationList PromptOverrideConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList">BedrockagentAgentPromptOverrideConfigurationList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.timeouts"></a>

```csharp
public BedrockagentAgentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference">BedrockagentAgentTimeoutsOutputReference</a>

---

##### `AgentNameInput`<sup>Optional</sup> <a name="AgentNameInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentNameInput"></a>

```csharp
public string AgentNameInput { get; }
```

- *Type:* string

---

##### `AgentResourceRoleArnInput`<sup>Optional</sup> <a name="AgentResourceRoleArnInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentResourceRoleArnInput"></a>

```csharp
public string AgentResourceRoleArnInput { get; }
```

- *Type:* string

---

##### `CustomerEncryptionKeyArnInput`<sup>Optional</sup> <a name="CustomerEncryptionKeyArnInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.customerEncryptionKeyArnInput"></a>

```csharp
public string CustomerEncryptionKeyArnInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FoundationModelInput`<sup>Optional</sup> <a name="FoundationModelInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.foundationModelInput"></a>

```csharp
public string FoundationModelInput { get; }
```

- *Type:* string

---

##### `IdleSessionTtlInSecondsInput`<sup>Optional</sup> <a name="IdleSessionTtlInSecondsInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.idleSessionTtlInSecondsInput"></a>

```csharp
public double IdleSessionTtlInSecondsInput { get; }
```

- *Type:* double

---

##### `InstructionInput`<sup>Optional</sup> <a name="InstructionInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.instructionInput"></a>

```csharp
public string InstructionInput { get; }
```

- *Type:* string

---

##### `PrepareAgentInput`<sup>Optional</sup> <a name="PrepareAgentInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.prepareAgentInput"></a>

```csharp
public object PrepareAgentInput { get; }
```

- *Type:* object

---

##### `PromptOverrideConfigurationInput`<sup>Optional</sup> <a name="PromptOverrideConfigurationInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.promptOverrideConfigurationInput"></a>

```csharp
public object PromptOverrideConfigurationInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AgentName`<sup>Required</sup> <a name="AgentName" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentName"></a>

```csharp
public string AgentName { get; }
```

- *Type:* string

---

##### `AgentResourceRoleArn`<sup>Required</sup> <a name="AgentResourceRoleArn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.agentResourceRoleArn"></a>

```csharp
public string AgentResourceRoleArn { get; }
```

- *Type:* string

---

##### `CustomerEncryptionKeyArn`<sup>Required</sup> <a name="CustomerEncryptionKeyArn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.customerEncryptionKeyArn"></a>

```csharp
public string CustomerEncryptionKeyArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FoundationModel`<sup>Required</sup> <a name="FoundationModel" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.foundationModel"></a>

```csharp
public string FoundationModel { get; }
```

- *Type:* string

---

##### `IdleSessionTtlInSeconds`<sup>Required</sup> <a name="IdleSessionTtlInSeconds" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.idleSessionTtlInSeconds"></a>

```csharp
public double IdleSessionTtlInSeconds { get; }
```

- *Type:* double

---

##### `Instruction`<sup>Required</sup> <a name="Instruction" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.instruction"></a>

```csharp
public string Instruction { get; }
```

- *Type:* string

---

##### `PrepareAgent`<sup>Required</sup> <a name="PrepareAgent" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.prepareAgent"></a>

```csharp
public object PrepareAgent { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentAgentConfig <a name="BedrockagentAgentConfig" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentAgentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AgentName,
    string AgentResourceRoleArn,
    string FoundationModel,
    string CustomerEncryptionKeyArn = null,
    string Description = null,
    double IdleSessionTtlInSeconds = null,
    string Instruction = null,
    object PrepareAgent = null,
    object PromptOverrideConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    BedrockagentAgentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentName">AgentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#agent_name BedrockagentAgent#agent_name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentResourceRoleArn">AgentResourceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#agent_resource_role_arn BedrockagentAgent#agent_resource_role_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.foundationModel">FoundationModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#foundation_model BedrockagentAgent#foundation_model}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.customerEncryptionKeyArn">CustomerEncryptionKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#customer_encryption_key_arn BedrockagentAgent#customer_encryption_key_arn}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#description BedrockagentAgent#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.idleSessionTtlInSeconds">IdleSessionTtlInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#idle_session_ttl_in_seconds BedrockagentAgent#idle_session_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.instruction">Instruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#instruction BedrockagentAgent#instruction}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.prepareAgent">PrepareAgent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#prepare_agent BedrockagentAgent#prepare_agent}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.promptOverrideConfiguration">PromptOverrideConfiguration</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#prompt_override_configuration BedrockagentAgent#prompt_override_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#tags BedrockagentAgent#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AgentName`<sup>Required</sup> <a name="AgentName" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentName"></a>

```csharp
public string AgentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#agent_name BedrockagentAgent#agent_name}.

---

##### `AgentResourceRoleArn`<sup>Required</sup> <a name="AgentResourceRoleArn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.agentResourceRoleArn"></a>

```csharp
public string AgentResourceRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#agent_resource_role_arn BedrockagentAgent#agent_resource_role_arn}.

---

##### `FoundationModel`<sup>Required</sup> <a name="FoundationModel" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.foundationModel"></a>

```csharp
public string FoundationModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#foundation_model BedrockagentAgent#foundation_model}.

---

##### `CustomerEncryptionKeyArn`<sup>Optional</sup> <a name="CustomerEncryptionKeyArn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.customerEncryptionKeyArn"></a>

```csharp
public string CustomerEncryptionKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#customer_encryption_key_arn BedrockagentAgent#customer_encryption_key_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#description BedrockagentAgent#description}.

---

##### `IdleSessionTtlInSeconds`<sup>Optional</sup> <a name="IdleSessionTtlInSeconds" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.idleSessionTtlInSeconds"></a>

```csharp
public double IdleSessionTtlInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#idle_session_ttl_in_seconds BedrockagentAgent#idle_session_ttl_in_seconds}.

---

##### `Instruction`<sup>Optional</sup> <a name="Instruction" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.instruction"></a>

```csharp
public string Instruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#instruction BedrockagentAgent#instruction}.

---

##### `PrepareAgent`<sup>Optional</sup> <a name="PrepareAgent" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.prepareAgent"></a>

```csharp
public object PrepareAgent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#prepare_agent BedrockagentAgent#prepare_agent}.

---

##### `PromptOverrideConfiguration`<sup>Optional</sup> <a name="PromptOverrideConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.promptOverrideConfiguration"></a>

```csharp
public object PromptOverrideConfiguration { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#prompt_override_configuration BedrockagentAgent#prompt_override_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#tags BedrockagentAgent#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentConfig.property.timeouts"></a>

```csharp
public BedrockagentAgentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts">BedrockagentAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#timeouts BedrockagentAgent#timeouts}

---

### BedrockagentAgentPromptOverrideConfiguration <a name="BedrockagentAgentPromptOverrideConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentAgentPromptOverrideConfiguration {
    string OverrideLambda = null,
    object PromptConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration.property.overrideLambda">OverrideLambda</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#override_lambda BedrockagentAgent#override_lambda}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration.property.promptConfigurations">PromptConfigurations</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#prompt_configurations BedrockagentAgent#prompt_configurations}. |

---

##### `OverrideLambda`<sup>Optional</sup> <a name="OverrideLambda" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration.property.overrideLambda"></a>

```csharp
public string OverrideLambda { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#override_lambda BedrockagentAgent#override_lambda}.

---

##### `PromptConfigurations`<sup>Optional</sup> <a name="PromptConfigurations" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfiguration.property.promptConfigurations"></a>

```csharp
public object PromptConfigurations { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#prompt_configurations BedrockagentAgent#prompt_configurations}.

---

### BedrockagentAgentPromptOverrideConfigurationPromptConfigurations <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurations" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentAgentPromptOverrideConfigurationPromptConfigurations {
    string BasePromptTemplate = null,
    object InferenceConfiguration = null,
    string ParserMode = null,
    string PromptCreationMode = null,
    string PromptState = null,
    string PromptType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate">BasePromptTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#base_prompt_template BedrockagentAgent#base_prompt_template}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration">InferenceConfiguration</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#inference_configuration BedrockagentAgent#inference_configuration}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode">ParserMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#parser_mode BedrockagentAgent#parser_mode}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode">PromptCreationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#prompt_creation_mode BedrockagentAgent#prompt_creation_mode}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptState">PromptState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#prompt_state BedrockagentAgent#prompt_state}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptType">PromptType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#prompt_type BedrockagentAgent#prompt_type}. |

---

##### `BasePromptTemplate`<sup>Optional</sup> <a name="BasePromptTemplate" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.basePromptTemplate"></a>

```csharp
public string BasePromptTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#base_prompt_template BedrockagentAgent#base_prompt_template}.

---

##### `InferenceConfiguration`<sup>Optional</sup> <a name="InferenceConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.inferenceConfiguration"></a>

```csharp
public object InferenceConfiguration { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#inference_configuration BedrockagentAgent#inference_configuration}.

---

##### `ParserMode`<sup>Optional</sup> <a name="ParserMode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.parserMode"></a>

```csharp
public string ParserMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#parser_mode BedrockagentAgent#parser_mode}.

---

##### `PromptCreationMode`<sup>Optional</sup> <a name="PromptCreationMode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptCreationMode"></a>

```csharp
public string PromptCreationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#prompt_creation_mode BedrockagentAgent#prompt_creation_mode}.

---

##### `PromptState`<sup>Optional</sup> <a name="PromptState" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptState"></a>

```csharp
public string PromptState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#prompt_state BedrockagentAgent#prompt_state}.

---

##### `PromptType`<sup>Optional</sup> <a name="PromptType" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurations.property.promptType"></a>

```csharp
public string PromptType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#prompt_type BedrockagentAgent#prompt_type}.

---

### BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration {
    double MaxLength = null,
    string[] StopSequences = null,
    double Temperature = null,
    double TopK = null,
    double TopP = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maxLength">MaxLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#max_length BedrockagentAgent#max_length}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences">StopSequences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#stop_sequences BedrockagentAgent#stop_sequences}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature">Temperature</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#temperature BedrockagentAgent#temperature}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK">TopK</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#top_k BedrockagentAgent#top_k}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP">TopP</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#top_p BedrockagentAgent#top_p}. |

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.maxLength"></a>

```csharp
public double MaxLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#max_length BedrockagentAgent#max_length}.

---

##### `StopSequences`<sup>Optional</sup> <a name="StopSequences" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.stopSequences"></a>

```csharp
public string[] StopSequences { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#stop_sequences BedrockagentAgent#stop_sequences}.

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.temperature"></a>

```csharp
public double Temperature { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#temperature BedrockagentAgent#temperature}.

---

##### `TopK`<sup>Optional</sup> <a name="TopK" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topK"></a>

```csharp
public double TopK { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#top_k BedrockagentAgent#top_k}.

---

##### `TopP`<sup>Optional</sup> <a name="TopP" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfiguration.property.topP"></a>

```csharp
public double TopP { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#top_p BedrockagentAgent#top_p}.

---

### BedrockagentAgentTimeouts <a name="BedrockagentAgentTimeouts" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentAgentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#create BedrockagentAgent#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#delete BedrockagentAgent#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/resources/bedrockagent_agent#update BedrockagentAgent#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentAgentPromptOverrideConfigurationList <a name="BedrockagentAgentPromptOverrideConfigurationList" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentAgentPromptOverrideConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.get"></a>

```csharp
private BedrockagentAgentPromptOverrideConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockagentAgentPromptOverrideConfigurationOutputReference <a name="BedrockagentAgentPromptOverrideConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentAgentPromptOverrideConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations">PutPromptConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda">ResetOverrideLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations">ResetPromptConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPromptConfigurations` <a name="PutPromptConfigurations" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations"></a>

```csharp
private void PutPromptConfigurations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.putPromptConfigurations.parameter.value"></a>

- *Type:* object

---

##### `ResetOverrideLambda` <a name="ResetOverrideLambda" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resetOverrideLambda"></a>

```csharp
private void ResetOverrideLambda()
```

##### `ResetPromptConfigurations` <a name="ResetPromptConfigurations" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.resetPromptConfigurations"></a>

```csharp
private void ResetPromptConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations">PromptConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput">OverrideLambdaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput">PromptConfigurationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.overrideLambda">OverrideLambda</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PromptConfigurations`<sup>Required</sup> <a name="PromptConfigurations" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.promptConfigurations"></a>

```csharp
public BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList PromptConfigurations { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList</a>

---

##### `OverrideLambdaInput`<sup>Optional</sup> <a name="OverrideLambdaInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.overrideLambdaInput"></a>

```csharp
public string OverrideLambdaInput { get; }
```

- *Type:* string

---

##### `PromptConfigurationsInput`<sup>Optional</sup> <a name="PromptConfigurationsInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.promptConfigurationsInput"></a>

```csharp
public object PromptConfigurationsInput { get; }
```

- *Type:* object

---

##### `OverrideLambda`<sup>Required</sup> <a name="OverrideLambda" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.overrideLambda"></a>

```csharp
public string OverrideLambda { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.get"></a>

```csharp
private BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences">ResetStopSequences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK">ResetTopK</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP">ResetTopP</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetMaxLength"></a>

```csharp
private void ResetMaxLength()
```

##### `ResetStopSequences` <a name="ResetStopSequences" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetStopSequences"></a>

```csharp
private void ResetStopSequences()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTemperature"></a>

```csharp
private void ResetTemperature()
```

##### `ResetTopK` <a name="ResetTopK" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopK"></a>

```csharp
private void ResetTopK()
```

##### `ResetTopP` <a name="ResetTopP" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.resetTopP"></a>

```csharp
private void ResetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maxLengthInput">MaxLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput">StopSequencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput">TopKInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput">TopPInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maxLength">MaxLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences">StopSequences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK">TopK</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP">TopP</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maxLengthInput"></a>

```csharp
public double MaxLengthInput { get; }
```

- *Type:* double

---

##### `StopSequencesInput`<sup>Optional</sup> <a name="StopSequencesInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequencesInput"></a>

```csharp
public string[] StopSequencesInput { get; }
```

- *Type:* string[]

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperatureInput"></a>

```csharp
public double TemperatureInput { get; }
```

- *Type:* double

---

##### `TopKInput`<sup>Optional</sup> <a name="TopKInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topKInput"></a>

```csharp
public double TopKInput { get; }
```

- *Type:* double

---

##### `TopPInput`<sup>Optional</sup> <a name="TopPInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topPInput"></a>

```csharp
public double TopPInput { get; }
```

- *Type:* double

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.maxLength"></a>

```csharp
public double MaxLength { get; }
```

- *Type:* double

---

##### `StopSequences`<sup>Required</sup> <a name="StopSequences" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.stopSequences"></a>

```csharp
public string[] StopSequences { get; }
```

- *Type:* string[]

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `TopK`<sup>Required</sup> <a name="TopK" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topK"></a>

```csharp
public double TopK { get; }
```

- *Type:* double

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.topP"></a>

```csharp
public double TopP { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.get"></a>

```csharp
private BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference <a name="BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration">PutInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate">ResetBasePromptTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration">ResetInferenceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode">ResetParserMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode">ResetPromptCreationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState">ResetPromptState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType">ResetPromptType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInferenceConfiguration` <a name="PutInferenceConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration"></a>

```csharp
private void PutInferenceConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.putInferenceConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetBasePromptTemplate` <a name="ResetBasePromptTemplate" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetBasePromptTemplate"></a>

```csharp
private void ResetBasePromptTemplate()
```

##### `ResetInferenceConfiguration` <a name="ResetInferenceConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetInferenceConfiguration"></a>

```csharp
private void ResetInferenceConfiguration()
```

##### `ResetParserMode` <a name="ResetParserMode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetParserMode"></a>

```csharp
private void ResetParserMode()
```

##### `ResetPromptCreationMode` <a name="ResetPromptCreationMode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptCreationMode"></a>

```csharp
private void ResetPromptCreationMode()
```

##### `ResetPromptState` <a name="ResetPromptState" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptState"></a>

```csharp
private void ResetPromptState()
```

##### `ResetPromptType` <a name="ResetPromptType" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.resetPromptType"></a>

```csharp
private void ResetPromptType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration">InferenceConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput">BasePromptTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput">InferenceConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput">ParserModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput">PromptCreationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput">PromptStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput">PromptTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate">BasePromptTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode">ParserMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode">PromptCreationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState">PromptState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType">PromptType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InferenceConfiguration`<sup>Required</sup> <a name="InferenceConfiguration" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfiguration"></a>

```csharp
public BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList InferenceConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList">BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsInferenceConfigurationList</a>

---

##### `BasePromptTemplateInput`<sup>Optional</sup> <a name="BasePromptTemplateInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplateInput"></a>

```csharp
public string BasePromptTemplateInput { get; }
```

- *Type:* string

---

##### `InferenceConfigurationInput`<sup>Optional</sup> <a name="InferenceConfigurationInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.inferenceConfigurationInput"></a>

```csharp
public object InferenceConfigurationInput { get; }
```

- *Type:* object

---

##### `ParserModeInput`<sup>Optional</sup> <a name="ParserModeInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserModeInput"></a>

```csharp
public string ParserModeInput { get; }
```

- *Type:* string

---

##### `PromptCreationModeInput`<sup>Optional</sup> <a name="PromptCreationModeInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationModeInput"></a>

```csharp
public string PromptCreationModeInput { get; }
```

- *Type:* string

---

##### `PromptStateInput`<sup>Optional</sup> <a name="PromptStateInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptStateInput"></a>

```csharp
public string PromptStateInput { get; }
```

- *Type:* string

---

##### `PromptTypeInput`<sup>Optional</sup> <a name="PromptTypeInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptTypeInput"></a>

```csharp
public string PromptTypeInput { get; }
```

- *Type:* string

---

##### `BasePromptTemplate`<sup>Required</sup> <a name="BasePromptTemplate" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.basePromptTemplate"></a>

```csharp
public string BasePromptTemplate { get; }
```

- *Type:* string

---

##### `ParserMode`<sup>Required</sup> <a name="ParserMode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.parserMode"></a>

```csharp
public string ParserMode { get; }
```

- *Type:* string

---

##### `PromptCreationMode`<sup>Required</sup> <a name="PromptCreationMode" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptCreationMode"></a>

```csharp
public string PromptCreationMode { get; }
```

- *Type:* string

---

##### `PromptState`<sup>Required</sup> <a name="PromptState" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptState"></a>

```csharp
public string PromptState { get; }
```

- *Type:* string

---

##### `PromptType`<sup>Required</sup> <a name="PromptType" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.promptType"></a>

```csharp
public string PromptType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentPromptOverrideConfigurationPromptConfigurationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BedrockagentAgentTimeoutsOutputReference <a name="BedrockagentAgentTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentAgentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentAgent.BedrockagentAgentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



