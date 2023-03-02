# `lexIntent` Submodule <a name="`lexIntent` Submodule" id="@cdktf/provider-aws.lexIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexIntent <a name="LexIntent" id="@cdktf/provider-aws.lexIntent.LexIntent"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_intent aws_lex_intent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntent(Construct Scope, string Id, LexIntentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig">LexIntentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lexIntent.LexIntent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig">LexIntentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putConclusionStatement">PutConclusionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putConfirmationPrompt">PutConfirmationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putDialogCodeHook">PutDialogCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putFollowUpPrompt">PutFollowUpPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putFulfillmentActivity">PutFulfillmentActivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putRejectionStatement">PutRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putSlot">PutSlot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetConclusionStatement">ResetConclusionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetConfirmationPrompt">ResetConfirmationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetCreateVersion">ResetCreateVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetDialogCodeHook">ResetDialogCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetFollowUpPrompt">ResetFollowUpPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetParentIntentSignature">ResetParentIntentSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetRejectionStatement">ResetRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetSampleUtterances">ResetSampleUtterances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetSlot">ResetSlot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lexIntent.LexIntent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lexIntent.LexIntent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lexIntent.LexIntent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lexIntent.LexIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lexIntent.LexIntent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lexIntent.LexIntent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lexIntent.LexIntent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutConclusionStatement` <a name="PutConclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.putConclusionStatement"></a>

```csharp
private void PutConclusionStatement(LexIntentConclusionStatement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntent.putConclusionStatement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

---

##### `PutConfirmationPrompt` <a name="PutConfirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.putConfirmationPrompt"></a>

```csharp
private void PutConfirmationPrompt(LexIntentConfirmationPrompt Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntent.putConfirmationPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

---

##### `PutDialogCodeHook` <a name="PutDialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntent.putDialogCodeHook"></a>

```csharp
private void PutDialogCodeHook(LexIntentDialogCodeHook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntent.putDialogCodeHook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

---

##### `PutFollowUpPrompt` <a name="PutFollowUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.putFollowUpPrompt"></a>

```csharp
private void PutFollowUpPrompt(LexIntentFollowUpPrompt Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntent.putFollowUpPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

---

##### `PutFulfillmentActivity` <a name="PutFulfillmentActivity" id="@cdktf/provider-aws.lexIntent.LexIntent.putFulfillmentActivity"></a>

```csharp
private void PutFulfillmentActivity(LexIntentFulfillmentActivity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntent.putFulfillmentActivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

---

##### `PutRejectionStatement` <a name="PutRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.putRejectionStatement"></a>

```csharp
private void PutRejectionStatement(LexIntentRejectionStatement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntent.putRejectionStatement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

---

##### `PutSlot` <a name="PutSlot" id="@cdktf/provider-aws.lexIntent.LexIntent.putSlot"></a>

```csharp
private void PutSlot(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntent.putSlot.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.lexIntent.LexIntent.putTimeouts"></a>

```csharp
private void PutTimeouts(LexIntentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a>

---

##### `ResetConclusionStatement` <a name="ResetConclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.resetConclusionStatement"></a>

```csharp
private void ResetConclusionStatement()
```

##### `ResetConfirmationPrompt` <a name="ResetConfirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.resetConfirmationPrompt"></a>

```csharp
private void ResetConfirmationPrompt()
```

##### `ResetCreateVersion` <a name="ResetCreateVersion" id="@cdktf/provider-aws.lexIntent.LexIntent.resetCreateVersion"></a>

```csharp
private void ResetCreateVersion()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.lexIntent.LexIntent.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDialogCodeHook` <a name="ResetDialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntent.resetDialogCodeHook"></a>

```csharp
private void ResetDialogCodeHook()
```

##### `ResetFollowUpPrompt` <a name="ResetFollowUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.resetFollowUpPrompt"></a>

```csharp
private void ResetFollowUpPrompt()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lexIntent.LexIntent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParentIntentSignature` <a name="ResetParentIntentSignature" id="@cdktf/provider-aws.lexIntent.LexIntent.resetParentIntentSignature"></a>

```csharp
private void ResetParentIntentSignature()
```

##### `ResetRejectionStatement` <a name="ResetRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.resetRejectionStatement"></a>

```csharp
private void ResetRejectionStatement()
```

##### `ResetSampleUtterances` <a name="ResetSampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntent.resetSampleUtterances"></a>

```csharp
private void ResetSampleUtterances()
```

##### `ResetSlot` <a name="ResetSlot" id="@cdktf/provider-aws.lexIntent.LexIntent.resetSlot"></a>

```csharp
private void ResetSlot()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.lexIntent.LexIntent.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lexIntent.LexIntent.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LexIntent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lexIntent.LexIntent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LexIntent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LexIntent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lexIntent.LexIntent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.checksum">Checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatement">ConclusionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference">LexIntentConclusionStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPrompt">ConfirmationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference">LexIntentConfirmationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHook">DialogCodeHook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference">LexIntentDialogCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPrompt">FollowUpPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference">LexIntentFollowUpPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivity">FulfillmentActivity</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference">LexIntentFulfillmentActivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatement">RejectionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference">LexIntentRejectionStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.slot">Slot</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList">LexIntentSlotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference">LexIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatementInput">ConclusionStatementInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPromptInput">ConfirmationPromptInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.createVersionInput">CreateVersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHookInput">DialogCodeHookInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPromptInput">FollowUpPromptInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivityInput">FulfillmentActivityInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignatureInput">ParentIntentSignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatementInput">RejectionStatementInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterancesInput">SampleUtterancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.slotInput">SlotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.createVersion">CreateVersion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignature">ParentIntentSignature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterances">SampleUtterances</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lexIntent.LexIntent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lexIntent.LexIntent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lexIntent.LexIntent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lexIntent.LexIntent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lexIntent.LexIntent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lexIntent.LexIntent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lexIntent.LexIntent.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lexIntent.LexIntent.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lexIntent.LexIntent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lexIntent.LexIntent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lexIntent.LexIntent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lexIntent.LexIntent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lexIntent.LexIntent.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lexIntent.LexIntent.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="@cdktf/provider-aws.lexIntent.LexIntent.property.checksum"></a>

```csharp
public string Checksum { get; }
```

- *Type:* string

---

##### `ConclusionStatement`<sup>Required</sup> <a name="ConclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatement"></a>

```csharp
public LexIntentConclusionStatementOutputReference ConclusionStatement { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference">LexIntentConclusionStatementOutputReference</a>

---

##### `ConfirmationPrompt`<sup>Required</sup> <a name="ConfirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPrompt"></a>

```csharp
public LexIntentConfirmationPromptOutputReference ConfirmationPrompt { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference">LexIntentConfirmationPromptOutputReference</a>

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.lexIntent.LexIntent.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `DialogCodeHook`<sup>Required</sup> <a name="DialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHook"></a>

```csharp
public LexIntentDialogCodeHookOutputReference DialogCodeHook { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference">LexIntentDialogCodeHookOutputReference</a>

---

##### `FollowUpPrompt`<sup>Required</sup> <a name="FollowUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPrompt"></a>

```csharp
public LexIntentFollowUpPromptOutputReference FollowUpPrompt { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference">LexIntentFollowUpPromptOutputReference</a>

---

##### `FulfillmentActivity`<sup>Required</sup> <a name="FulfillmentActivity" id="@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivity"></a>

```csharp
public LexIntentFulfillmentActivityOutputReference FulfillmentActivity { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference">LexIntentFulfillmentActivityOutputReference</a>

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktf/provider-aws.lexIntent.LexIntent.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `RejectionStatement`<sup>Required</sup> <a name="RejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatement"></a>

```csharp
public LexIntentRejectionStatementOutputReference RejectionStatement { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference">LexIntentRejectionStatementOutputReference</a>

---

##### `Slot`<sup>Required</sup> <a name="Slot" id="@cdktf/provider-aws.lexIntent.LexIntent.property.slot"></a>

```csharp
public LexIntentSlotList Slot { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList">LexIntentSlotList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.lexIntent.LexIntent.property.timeouts"></a>

```csharp
public LexIntentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference">LexIntentTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.lexIntent.LexIntent.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `ConclusionStatementInput`<sup>Optional</sup> <a name="ConclusionStatementInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.conclusionStatementInput"></a>

```csharp
public LexIntentConclusionStatement ConclusionStatementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

---

##### `ConfirmationPromptInput`<sup>Optional</sup> <a name="ConfirmationPromptInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.confirmationPromptInput"></a>

```csharp
public LexIntentConfirmationPrompt ConfirmationPromptInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

---

##### `CreateVersionInput`<sup>Optional</sup> <a name="CreateVersionInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.createVersionInput"></a>

```csharp
public object CreateVersionInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DialogCodeHookInput`<sup>Optional</sup> <a name="DialogCodeHookInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.dialogCodeHookInput"></a>

```csharp
public LexIntentDialogCodeHook DialogCodeHookInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

---

##### `FollowUpPromptInput`<sup>Optional</sup> <a name="FollowUpPromptInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.followUpPromptInput"></a>

```csharp
public LexIntentFollowUpPrompt FollowUpPromptInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

---

##### `FulfillmentActivityInput`<sup>Optional</sup> <a name="FulfillmentActivityInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.fulfillmentActivityInput"></a>

```csharp
public LexIntentFulfillmentActivity FulfillmentActivityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentIntentSignatureInput`<sup>Optional</sup> <a name="ParentIntentSignatureInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignatureInput"></a>

```csharp
public string ParentIntentSignatureInput { get; }
```

- *Type:* string

---

##### `RejectionStatementInput`<sup>Optional</sup> <a name="RejectionStatementInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.rejectionStatementInput"></a>

```csharp
public LexIntentRejectionStatement RejectionStatementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

---

##### `SampleUtterancesInput`<sup>Optional</sup> <a name="SampleUtterancesInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterancesInput"></a>

```csharp
public string[] SampleUtterancesInput { get; }
```

- *Type:* string[]

---

##### `SlotInput`<sup>Optional</sup> <a name="SlotInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.slotInput"></a>

```csharp
public object SlotInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.lexIntent.LexIntent.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CreateVersion`<sup>Required</sup> <a name="CreateVersion" id="@cdktf/provider-aws.lexIntent.LexIntent.property.createVersion"></a>

```csharp
public object CreateVersion { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.lexIntent.LexIntent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lexIntent.LexIntent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lexIntent.LexIntent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentIntentSignature`<sup>Required</sup> <a name="ParentIntentSignature" id="@cdktf/provider-aws.lexIntent.LexIntent.property.parentIntentSignature"></a>

```csharp
public string ParentIntentSignature { get; }
```

- *Type:* string

---

##### `SampleUtterances`<sup>Required</sup> <a name="SampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntent.property.sampleUtterances"></a>

```csharp
public string[] SampleUtterances { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lexIntent.LexIntent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LexIntentConclusionStatement <a name="LexIntentConclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentConclusionStatement {
    object Message,
    string ResponseCard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.message">Message</a></code> | <code>object</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.responseCard">ResponseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.message"></a>

```csharp
public object Message { get; set; }
```

- *Type:* object

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `ResponseCard`<sup>Optional</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement.property.responseCard"></a>

```csharp
public string ResponseCard { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentConclusionStatementMessage <a name="LexIntentConclusionStatementMessage" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentConclusionStatementMessage {
    string Content,
    string ContentType,
    double GroupNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.groupNumber">GroupNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `GroupNumber`<sup>Optional</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessage.property.groupNumber"></a>

```csharp
public double GroupNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentConfig <a name="LexIntentConfig" id="@cdktf/provider-aws.lexIntent.LexIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    LexIntentFulfillmentActivity FulfillmentActivity,
    string Name,
    LexIntentConclusionStatement ConclusionStatement = null,
    LexIntentConfirmationPrompt ConfirmationPrompt = null,
    object CreateVersion = null,
    string Description = null,
    LexIntentDialogCodeHook DialogCodeHook = null,
    LexIntentFollowUpPrompt FollowUpPrompt = null,
    string Id = null,
    string ParentIntentSignature = null,
    LexIntentRejectionStatement RejectionStatement = null,
    string[] SampleUtterances = null,
    object Slot = null,
    LexIntentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.fulfillmentActivity">FulfillmentActivity</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | fulfillment_activity block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.conclusionStatement">ConclusionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | conclusion_statement block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.confirmationPrompt">ConfirmationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | confirmation_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.createVersion">CreateVersion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create_version LexIntent#create_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dialogCodeHook">DialogCodeHook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | dialog_code_hook block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.followUpPrompt">FollowUpPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | follow_up_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#id LexIntent#id}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.parentIntentSignature">ParentIntentSignature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.rejectionStatement">RejectionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | rejection_statement block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.sampleUtterances">SampleUtterances</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.slot">Slot</a></code> | <code>object</code> | slot block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FulfillmentActivity`<sup>Required</sup> <a name="FulfillmentActivity" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.fulfillmentActivity"></a>

```csharp
public LexIntentFulfillmentActivity FulfillmentActivity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

fulfillment_activity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#fulfillment_activity LexIntent#fulfillment_activity}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}.

---

##### `ConclusionStatement`<sup>Optional</sup> <a name="ConclusionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.conclusionStatement"></a>

```csharp
public LexIntentConclusionStatement ConclusionStatement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

conclusion_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#conclusion_statement LexIntent#conclusion_statement}

---

##### `ConfirmationPrompt`<sup>Optional</sup> <a name="ConfirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.confirmationPrompt"></a>

```csharp
public LexIntentConfirmationPrompt ConfirmationPrompt { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

confirmation_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#confirmation_prompt LexIntent#confirmation_prompt}

---

##### `CreateVersion`<sup>Optional</sup> <a name="CreateVersion" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.createVersion"></a>

```csharp
public object CreateVersion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create_version LexIntent#create_version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}.

---

##### `DialogCodeHook`<sup>Optional</sup> <a name="DialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.dialogCodeHook"></a>

```csharp
public LexIntentDialogCodeHook DialogCodeHook { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

dialog_code_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#dialog_code_hook LexIntent#dialog_code_hook}

---

##### `FollowUpPrompt`<sup>Optional</sup> <a name="FollowUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.followUpPrompt"></a>

```csharp
public LexIntentFollowUpPrompt FollowUpPrompt { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

follow_up_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#follow_up_prompt LexIntent#follow_up_prompt}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#id LexIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ParentIntentSignature`<sup>Optional</sup> <a name="ParentIntentSignature" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.parentIntentSignature"></a>

```csharp
public string ParentIntentSignature { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}.

---

##### `RejectionStatement`<sup>Optional</sup> <a name="RejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.rejectionStatement"></a>

```csharp
public LexIntentRejectionStatement RejectionStatement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

rejection_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#rejection_statement LexIntent#rejection_statement}

---

##### `SampleUtterances`<sup>Optional</sup> <a name="SampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.sampleUtterances"></a>

```csharp
public string[] SampleUtterances { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}.

---

##### `Slot`<sup>Optional</sup> <a name="Slot" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.slot"></a>

```csharp
public object Slot { get; set; }
```

- *Type:* object

slot block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot LexIntent#slot}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.lexIntent.LexIntentConfig.property.timeouts"></a>

```csharp
public LexIntentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#timeouts LexIntent#timeouts}

---

### LexIntentConfirmationPrompt <a name="LexIntentConfirmationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentConfirmationPrompt {
    double MaxAttempts,
    object Message,
    string ResponseCard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.message">Message</a></code> | <code>object</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.responseCard">ResponseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}.

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.message"></a>

```csharp
public object Message { get; set; }
```

- *Type:* object

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `ResponseCard`<sup>Optional</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt.property.responseCard"></a>

```csharp
public string ResponseCard { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentConfirmationPromptMessage <a name="LexIntentConfirmationPromptMessage" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentConfirmationPromptMessage {
    string Content,
    string ContentType,
    double GroupNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.groupNumber">GroupNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `GroupNumber`<sup>Optional</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessage.property.groupNumber"></a>

```csharp
public double GroupNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentDialogCodeHook <a name="LexIntentDialogCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentDialogCodeHook {
    string MessageVersion,
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.messageVersion">MessageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}. |

---

##### `MessageVersion`<sup>Required</sup> <a name="MessageVersion" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.messageVersion"></a>

```csharp
public string MessageVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}.

---

### LexIntentFollowUpPrompt <a name="LexIntentFollowUpPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFollowUpPrompt {
    LexIntentFollowUpPromptPrompt Prompt,
    LexIntentFollowUpPromptRejectionStatement RejectionStatement
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.prompt">Prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a></code> | prompt block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.rejectionStatement">RejectionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a></code> | rejection_statement block. |

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.prompt"></a>

```csharp
public LexIntentFollowUpPromptPrompt Prompt { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#prompt LexIntent#prompt}

---

##### `RejectionStatement`<sup>Required</sup> <a name="RejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt.property.rejectionStatement"></a>

```csharp
public LexIntentFollowUpPromptRejectionStatement RejectionStatement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

rejection_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#rejection_statement LexIntent#rejection_statement}

---

### LexIntentFollowUpPromptPrompt <a name="LexIntentFollowUpPromptPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFollowUpPromptPrompt {
    double MaxAttempts,
    object Message,
    string ResponseCard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.message">Message</a></code> | <code>object</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.responseCard">ResponseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}.

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.message"></a>

```csharp
public object Message { get; set; }
```

- *Type:* object

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `ResponseCard`<sup>Optional</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt.property.responseCard"></a>

```csharp
public string ResponseCard { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentFollowUpPromptPromptMessage <a name="LexIntentFollowUpPromptPromptMessage" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFollowUpPromptPromptMessage {
    string Content,
    string ContentType,
    double GroupNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.groupNumber">GroupNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `GroupNumber`<sup>Optional</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessage.property.groupNumber"></a>

```csharp
public double GroupNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentFollowUpPromptRejectionStatement <a name="LexIntentFollowUpPromptRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFollowUpPromptRejectionStatement {
    object Message,
    string ResponseCard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.message">Message</a></code> | <code>object</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.responseCard">ResponseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.message"></a>

```csharp
public object Message { get; set; }
```

- *Type:* object

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `ResponseCard`<sup>Optional</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.responseCard"></a>

```csharp
public string ResponseCard { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentFollowUpPromptRejectionStatementMessage <a name="LexIntentFollowUpPromptRejectionStatementMessage" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFollowUpPromptRejectionStatementMessage {
    string Content,
    string ContentType,
    double GroupNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.groupNumber">GroupNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `GroupNumber`<sup>Optional</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.groupNumber"></a>

```csharp
public double GroupNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentFulfillmentActivity <a name="LexIntentFulfillmentActivity" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFulfillmentActivity {
    string Type,
    LexIntentFulfillmentActivityCodeHook CodeHook = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#type LexIntent#type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.codeHook">CodeHook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a></code> | code_hook block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#type LexIntent#type}.

---

##### `CodeHook`<sup>Optional</sup> <a name="CodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity.property.codeHook"></a>

```csharp
public LexIntentFulfillmentActivityCodeHook CodeHook { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

code_hook block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#code_hook LexIntent#code_hook}

---

### LexIntentFulfillmentActivityCodeHook <a name="LexIntentFulfillmentActivityCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFulfillmentActivityCodeHook {
    string MessageVersion,
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.messageVersion">MessageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}. |

---

##### `MessageVersion`<sup>Required</sup> <a name="MessageVersion" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.messageVersion"></a>

```csharp
public string MessageVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message_version LexIntent#message_version}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#uri LexIntent#uri}.

---

### LexIntentRejectionStatement <a name="LexIntentRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentRejectionStatement {
    object Message,
    string ResponseCard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.message">Message</a></code> | <code>object</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.responseCard">ResponseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.message"></a>

```csharp
public object Message { get; set; }
```

- *Type:* object

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `ResponseCard`<sup>Optional</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement.property.responseCard"></a>

```csharp
public string ResponseCard { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentRejectionStatementMessage <a name="LexIntentRejectionStatementMessage" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentRejectionStatementMessage {
    string Content,
    string ContentType,
    double GroupNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.groupNumber">GroupNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `GroupNumber`<sup>Optional</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessage.property.groupNumber"></a>

```csharp
public double GroupNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentSlot <a name="LexIntentSlot" id="@cdktf/provider-aws.lexIntent.LexIntentSlot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentSlot {
    string Name,
    string SlotConstraint,
    string SlotType,
    string Description = null,
    double Priority = null,
    string ResponseCard = null,
    string[] SampleUtterances = null,
    string SlotTypeVersion = null,
    LexIntentSlotValueElicitationPrompt ValueElicitationPrompt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotConstraint">SlotConstraint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_constraint LexIntent#slot_constraint}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotType">SlotType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type LexIntent#slot_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#priority LexIntent#priority}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.responseCard">ResponseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.sampleUtterances">SampleUtterances</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotTypeVersion">SlotTypeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type_version LexIntent#slot_type_version}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlot.property.valueElicitationPrompt">ValueElicitationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a></code> | value_elicitation_prompt block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#name LexIntent#name}.

---

##### `SlotConstraint`<sup>Required</sup> <a name="SlotConstraint" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotConstraint"></a>

```csharp
public string SlotConstraint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_constraint LexIntent#slot_constraint}.

---

##### `SlotType`<sup>Required</sup> <a name="SlotType" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotType"></a>

```csharp
public string SlotType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type LexIntent#slot_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#description LexIntent#description}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#priority LexIntent#priority}.

---

##### `ResponseCard`<sup>Optional</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.responseCard"></a>

```csharp
public string ResponseCard { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

##### `SampleUtterances`<sup>Optional</sup> <a name="SampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.sampleUtterances"></a>

```csharp
public string[] SampleUtterances { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#sample_utterances LexIntent#sample_utterances}.

---

##### `SlotTypeVersion`<sup>Optional</sup> <a name="SlotTypeVersion" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.slotTypeVersion"></a>

```csharp
public string SlotTypeVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#slot_type_version LexIntent#slot_type_version}.

---

##### `ValueElicitationPrompt`<sup>Optional</sup> <a name="ValueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlot.property.valueElicitationPrompt"></a>

```csharp
public LexIntentSlotValueElicitationPrompt ValueElicitationPrompt { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

value_elicitation_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#value_elicitation_prompt LexIntent#value_elicitation_prompt}

---

### LexIntentSlotValueElicitationPrompt <a name="LexIntentSlotValueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentSlotValueElicitationPrompt {
    double MaxAttempts,
    object Message,
    string ResponseCard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.message">Message</a></code> | <code>object</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.responseCard">ResponseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}. |

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#max_attempts LexIntent#max_attempts}.

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.message"></a>

```csharp
public object Message { get; set; }
```

- *Type:* object

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#message LexIntent#message}

---

##### `ResponseCard`<sup>Optional</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt.property.responseCard"></a>

```csharp
public string ResponseCard { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentSlotValueElicitationPromptMessage <a name="LexIntentSlotValueElicitationPromptMessage" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentSlotValueElicitationPromptMessage {
    string Content,
    string ContentType,
    double GroupNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.groupNumber">GroupNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content LexIntent#content}.

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#content_type LexIntent#content_type}.

---

##### `GroupNumber`<sup>Optional</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.groupNumber"></a>

```csharp
public double GroupNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentTimeouts <a name="LexIntentTimeouts" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create LexIntent#create}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#delete LexIntent#delete}. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#update LexIntent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#create LexIntent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#delete LexIntent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.lexIntent.LexIntentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_intent#update LexIntent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LexIntentConclusionStatementMessageList <a name="LexIntentConclusionStatementMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentConclusionStatementMessageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.get"></a>

```csharp
private LexIntentConclusionStatementMessageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexIntentConclusionStatementMessageOutputReference <a name="LexIntentConclusionStatementMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentConclusionStatementMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resetGroupNumber">ResetGroupNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupNumber` <a name="ResetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.resetGroupNumber"></a>

```csharp
private void ResetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumberInput">GroupNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumber">GroupNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `GroupNumberInput`<sup>Optional</sup> <a name="GroupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumberInput"></a>

```csharp
public double GroupNumberInput { get; }
```

- *Type:* double

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `GroupNumber`<sup>Required</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumber"></a>

```csharp
public double GroupNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexIntentConclusionStatementOutputReference <a name="LexIntentConclusionStatementOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentConclusionStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.putMessage">PutMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resetResponseCard">ResetResponseCard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessage` <a name="PutMessage" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.putMessage"></a>

```csharp
private void PutMessage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* object

---

##### `ResetResponseCard` <a name="ResetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.resetResponseCard"></a>

```csharp
private void ResetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.message">Message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList">LexIntentConclusionStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.messageInput">MessageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCardInput">ResponseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCard">ResponseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.message"></a>

```csharp
public LexIntentConclusionStatementMessageList Message { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementMessageList">LexIntentConclusionStatementMessageList</a>

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.messageInput"></a>

```csharp
public object MessageInput { get; }
```

- *Type:* object

---

##### `ResponseCardInput`<sup>Optional</sup> <a name="ResponseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCardInput"></a>

```csharp
public string ResponseCardInput { get; }
```

- *Type:* string

---

##### `ResponseCard`<sup>Required</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCard"></a>

```csharp
public string ResponseCard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConclusionStatementOutputReference.property.internalValue"></a>

```csharp
public LexIntentConclusionStatement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

---


### LexIntentConfirmationPromptMessageList <a name="LexIntentConfirmationPromptMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentConfirmationPromptMessageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.get"></a>

```csharp
private LexIntentConfirmationPromptMessageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexIntentConfirmationPromptMessageOutputReference <a name="LexIntentConfirmationPromptMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentConfirmationPromptMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resetGroupNumber">ResetGroupNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupNumber` <a name="ResetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resetGroupNumber"></a>

```csharp
private void ResetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumberInput">GroupNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumber">GroupNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `GroupNumberInput`<sup>Optional</sup> <a name="GroupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumberInput"></a>

```csharp
public double GroupNumberInput { get; }
```

- *Type:* double

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `GroupNumber`<sup>Required</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumber"></a>

```csharp
public double GroupNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexIntentConfirmationPromptOutputReference <a name="LexIntentConfirmationPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentConfirmationPromptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.putMessage">PutMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resetResponseCard">ResetResponseCard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessage` <a name="PutMessage" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.putMessage"></a>

```csharp
private void PutMessage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* object

---

##### `ResetResponseCard` <a name="ResetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.resetResponseCard"></a>

```csharp
private void ResetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.message">Message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList">LexIntentConfirmationPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttemptsInput">MaxAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.messageInput">MessageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCardInput">ResponseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCard">ResponseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.message"></a>

```csharp
public LexIntentConfirmationPromptMessageList Message { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptMessageList">LexIntentConfirmationPromptMessageList</a>

---

##### `MaxAttemptsInput`<sup>Optional</sup> <a name="MaxAttemptsInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttemptsInput"></a>

```csharp
public double MaxAttemptsInput { get; }
```

- *Type:* double

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.messageInput"></a>

```csharp
public object MessageInput { get; }
```

- *Type:* object

---

##### `ResponseCardInput`<sup>Optional</sup> <a name="ResponseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCardInput"></a>

```csharp
public string ResponseCardInput { get; }
```

- *Type:* string

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; }
```

- *Type:* double

---

##### `ResponseCard`<sup>Required</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCard"></a>

```csharp
public string ResponseCard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentConfirmationPromptOutputReference.property.internalValue"></a>

```csharp
public LexIntentConfirmationPrompt InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

---


### LexIntentDialogCodeHookOutputReference <a name="LexIntentDialogCodeHookOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentDialogCodeHookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersionInput">MessageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersion">MessageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageVersionInput`<sup>Optional</sup> <a name="MessageVersionInput" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersionInput"></a>

```csharp
public string MessageVersionInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `MessageVersion`<sup>Required</sup> <a name="MessageVersion" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersion"></a>

```csharp
public string MessageVersion { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHookOutputReference.property.internalValue"></a>

```csharp
public LexIntentDialogCodeHook InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

---


### LexIntentFollowUpPromptOutputReference <a name="LexIntentFollowUpPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFollowUpPromptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt">PutPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement">PutRejectionStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrompt` <a name="PutPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt"></a>

```csharp
private void PutPrompt(LexIntentFollowUpPromptPrompt Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

---

##### `PutRejectionStatement` <a name="PutRejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement"></a>

```csharp
private void PutRejectionStatement(LexIntentFollowUpPromptRejectionStatement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.prompt">Prompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference">LexIntentFollowUpPromptPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatement">RejectionStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference">LexIntentFollowUpPromptRejectionStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.promptInput">PromptInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatementInput">RejectionStatementInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.prompt"></a>

```csharp
public LexIntentFollowUpPromptPromptOutputReference Prompt { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference">LexIntentFollowUpPromptPromptOutputReference</a>

---

##### `RejectionStatement`<sup>Required</sup> <a name="RejectionStatement" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatement"></a>

```csharp
public LexIntentFollowUpPromptRejectionStatementOutputReference RejectionStatement { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference">LexIntentFollowUpPromptRejectionStatementOutputReference</a>

---

##### `PromptInput`<sup>Optional</sup> <a name="PromptInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.promptInput"></a>

```csharp
public LexIntentFollowUpPromptPrompt PromptInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

---

##### `RejectionStatementInput`<sup>Optional</sup> <a name="RejectionStatementInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatementInput"></a>

```csharp
public LexIntentFollowUpPromptRejectionStatement RejectionStatementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptOutputReference.property.internalValue"></a>

```csharp
public LexIntentFollowUpPrompt InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

---


### LexIntentFollowUpPromptPromptMessageList <a name="LexIntentFollowUpPromptPromptMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFollowUpPromptPromptMessageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.get"></a>

```csharp
private LexIntentFollowUpPromptPromptMessageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexIntentFollowUpPromptPromptMessageOutputReference <a name="LexIntentFollowUpPromptPromptMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFollowUpPromptPromptMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resetGroupNumber">ResetGroupNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupNumber` <a name="ResetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resetGroupNumber"></a>

```csharp
private void ResetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumberInput">GroupNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumber">GroupNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `GroupNumberInput`<sup>Optional</sup> <a name="GroupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumberInput"></a>

```csharp
public double GroupNumberInput { get; }
```

- *Type:* double

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `GroupNumber`<sup>Required</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumber"></a>

```csharp
public double GroupNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexIntentFollowUpPromptPromptOutputReference <a name="LexIntentFollowUpPromptPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFollowUpPromptPromptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.putMessage">PutMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resetResponseCard">ResetResponseCard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessage` <a name="PutMessage" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.putMessage"></a>

```csharp
private void PutMessage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* object

---

##### `ResetResponseCard` <a name="ResetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resetResponseCard"></a>

```csharp
private void ResetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.message">Message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList">LexIntentFollowUpPromptPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttemptsInput">MaxAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.messageInput">MessageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCardInput">ResponseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCard">ResponseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.message"></a>

```csharp
public LexIntentFollowUpPromptPromptMessageList Message { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptMessageList">LexIntentFollowUpPromptPromptMessageList</a>

---

##### `MaxAttemptsInput`<sup>Optional</sup> <a name="MaxAttemptsInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttemptsInput"></a>

```csharp
public double MaxAttemptsInput { get; }
```

- *Type:* double

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.messageInput"></a>

```csharp
public object MessageInput { get; }
```

- *Type:* object

---

##### `ResponseCardInput`<sup>Optional</sup> <a name="ResponseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCardInput"></a>

```csharp
public string ResponseCardInput { get; }
```

- *Type:* string

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; }
```

- *Type:* double

---

##### `ResponseCard`<sup>Required</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCard"></a>

```csharp
public string ResponseCard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.internalValue"></a>

```csharp
public LexIntentFollowUpPromptPrompt InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

---


### LexIntentFollowUpPromptRejectionStatementMessageList <a name="LexIntentFollowUpPromptRejectionStatementMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFollowUpPromptRejectionStatementMessageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.get"></a>

```csharp
private LexIntentFollowUpPromptRejectionStatementMessageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexIntentFollowUpPromptRejectionStatementMessageOutputReference <a name="LexIntentFollowUpPromptRejectionStatementMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFollowUpPromptRejectionStatementMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resetGroupNumber">ResetGroupNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupNumber` <a name="ResetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resetGroupNumber"></a>

```csharp
private void ResetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumberInput">GroupNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumber">GroupNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `GroupNumberInput`<sup>Optional</sup> <a name="GroupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumberInput"></a>

```csharp
public double GroupNumberInput { get; }
```

- *Type:* double

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `GroupNumber`<sup>Required</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumber"></a>

```csharp
public double GroupNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexIntentFollowUpPromptRejectionStatementOutputReference <a name="LexIntentFollowUpPromptRejectionStatementOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFollowUpPromptRejectionStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.putMessage">PutMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resetResponseCard">ResetResponseCard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessage` <a name="PutMessage" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.putMessage"></a>

```csharp
private void PutMessage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* object

---

##### `ResetResponseCard` <a name="ResetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resetResponseCard"></a>

```csharp
private void ResetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.message">Message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList">LexIntentFollowUpPromptRejectionStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.messageInput">MessageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCardInput">ResponseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCard">ResponseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.message"></a>

```csharp
public LexIntentFollowUpPromptRejectionStatementMessageList Message { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList">LexIntentFollowUpPromptRejectionStatementMessageList</a>

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.messageInput"></a>

```csharp
public object MessageInput { get; }
```

- *Type:* object

---

##### `ResponseCardInput`<sup>Optional</sup> <a name="ResponseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCardInput"></a>

```csharp
public string ResponseCardInput { get; }
```

- *Type:* string

---

##### `ResponseCard`<sup>Required</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCard"></a>

```csharp
public string ResponseCard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.internalValue"></a>

```csharp
public LexIntentFollowUpPromptRejectionStatement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

---


### LexIntentFulfillmentActivityCodeHookOutputReference <a name="LexIntentFulfillmentActivityCodeHookOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFulfillmentActivityCodeHookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersionInput">MessageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersion">MessageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageVersionInput`<sup>Optional</sup> <a name="MessageVersionInput" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersionInput"></a>

```csharp
public string MessageVersionInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `MessageVersion`<sup>Required</sup> <a name="MessageVersion" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersion"></a>

```csharp
public string MessageVersion { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.internalValue"></a>

```csharp
public LexIntentFulfillmentActivityCodeHook InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

---


### LexIntentFulfillmentActivityOutputReference <a name="LexIntentFulfillmentActivityOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentFulfillmentActivityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook">PutCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resetCodeHook">ResetCodeHook</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeHook` <a name="PutCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook"></a>

```csharp
private void PutCodeHook(LexIntentFulfillmentActivityCodeHook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

---

##### `ResetCodeHook` <a name="ResetCodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.resetCodeHook"></a>

```csharp
private void ResetCodeHook()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHook">CodeHook</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference">LexIntentFulfillmentActivityCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHookInput">CodeHookInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeHook`<sup>Required</sup> <a name="CodeHook" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHook"></a>

```csharp
public LexIntentFulfillmentActivityCodeHookOutputReference CodeHook { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference">LexIntentFulfillmentActivityCodeHookOutputReference</a>

---

##### `CodeHookInput`<sup>Optional</sup> <a name="CodeHookInput" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHookInput"></a>

```csharp
public LexIntentFulfillmentActivityCodeHook CodeHookInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivityOutputReference.property.internalValue"></a>

```csharp
public LexIntentFulfillmentActivity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

---


### LexIntentRejectionStatementMessageList <a name="LexIntentRejectionStatementMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentRejectionStatementMessageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.get"></a>

```csharp
private LexIntentRejectionStatementMessageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexIntentRejectionStatementMessageOutputReference <a name="LexIntentRejectionStatementMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentRejectionStatementMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resetGroupNumber">ResetGroupNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupNumber` <a name="ResetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.resetGroupNumber"></a>

```csharp
private void ResetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumberInput">GroupNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumber">GroupNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `GroupNumberInput`<sup>Optional</sup> <a name="GroupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumberInput"></a>

```csharp
public double GroupNumberInput { get; }
```

- *Type:* double

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `GroupNumber`<sup>Required</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumber"></a>

```csharp
public double GroupNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexIntentRejectionStatementOutputReference <a name="LexIntentRejectionStatementOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentRejectionStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.putMessage">PutMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resetResponseCard">ResetResponseCard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessage` <a name="PutMessage" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.putMessage"></a>

```csharp
private void PutMessage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* object

---

##### `ResetResponseCard` <a name="ResetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.resetResponseCard"></a>

```csharp
private void ResetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.message">Message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList">LexIntentRejectionStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.messageInput">MessageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCardInput">ResponseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCard">ResponseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.message"></a>

```csharp
public LexIntentRejectionStatementMessageList Message { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementMessageList">LexIntentRejectionStatementMessageList</a>

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.messageInput"></a>

```csharp
public object MessageInput { get; }
```

- *Type:* object

---

##### `ResponseCardInput`<sup>Optional</sup> <a name="ResponseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCardInput"></a>

```csharp
public string ResponseCardInput { get; }
```

- *Type:* string

---

##### `ResponseCard`<sup>Required</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCard"></a>

```csharp
public string ResponseCard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentRejectionStatementOutputReference.property.internalValue"></a>

```csharp
public LexIntentRejectionStatement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

---


### LexIntentSlotList <a name="LexIntentSlotList" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentSlotList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.get"></a>

```csharp
private LexIntentSlotOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentSlotList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexIntentSlotOutputReference <a name="LexIntentSlotOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentSlotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt">PutValueElicitationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetResponseCard">ResetResponseCard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSampleUtterances">ResetSampleUtterances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSlotTypeVersion">ResetSlotTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetValueElicitationPrompt">ResetValueElicitationPrompt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueElicitationPrompt` <a name="PutValueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt"></a>

```csharp
private void PutValueElicitationPrompt(LexIntentSlotValueElicitationPrompt Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetResponseCard` <a name="ResetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetResponseCard"></a>

```csharp
private void ResetResponseCard()
```

##### `ResetSampleUtterances` <a name="ResetSampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSampleUtterances"></a>

```csharp
private void ResetSampleUtterances()
```

##### `ResetSlotTypeVersion` <a name="ResetSlotTypeVersion" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetSlotTypeVersion"></a>

```csharp
private void ResetSlotTypeVersion()
```

##### `ResetValueElicitationPrompt` <a name="ResetValueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.resetValueElicitationPrompt"></a>

```csharp
private void ResetValueElicitationPrompt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPrompt">ValueElicitationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference">LexIntentSlotValueElicitationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCardInput">ResponseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterancesInput">SampleUtterancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraintInput">SlotConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeInput">SlotTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersionInput">SlotTypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPromptInput">ValueElicitationPromptInput</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCard">ResponseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterances">SampleUtterances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraint">SlotConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotType">SlotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersion">SlotTypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueElicitationPrompt`<sup>Required</sup> <a name="ValueElicitationPrompt" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPrompt"></a>

```csharp
public LexIntentSlotValueElicitationPromptOutputReference ValueElicitationPrompt { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference">LexIntentSlotValueElicitationPromptOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ResponseCardInput`<sup>Optional</sup> <a name="ResponseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCardInput"></a>

```csharp
public string ResponseCardInput { get; }
```

- *Type:* string

---

##### `SampleUtterancesInput`<sup>Optional</sup> <a name="SampleUtterancesInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterancesInput"></a>

```csharp
public string[] SampleUtterancesInput { get; }
```

- *Type:* string[]

---

##### `SlotConstraintInput`<sup>Optional</sup> <a name="SlotConstraintInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraintInput"></a>

```csharp
public string SlotConstraintInput { get; }
```

- *Type:* string

---

##### `SlotTypeInput`<sup>Optional</sup> <a name="SlotTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeInput"></a>

```csharp
public string SlotTypeInput { get; }
```

- *Type:* string

---

##### `SlotTypeVersionInput`<sup>Optional</sup> <a name="SlotTypeVersionInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersionInput"></a>

```csharp
public string SlotTypeVersionInput { get; }
```

- *Type:* string

---

##### `ValueElicitationPromptInput`<sup>Optional</sup> <a name="ValueElicitationPromptInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPromptInput"></a>

```csharp
public LexIntentSlotValueElicitationPrompt ValueElicitationPromptInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ResponseCard`<sup>Required</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.responseCard"></a>

```csharp
public string ResponseCard { get; }
```

- *Type:* string

---

##### `SampleUtterances`<sup>Required</sup> <a name="SampleUtterances" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.sampleUtterances"></a>

```csharp
public string[] SampleUtterances { get; }
```

- *Type:* string[]

---

##### `SlotConstraint`<sup>Required</sup> <a name="SlotConstraint" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotConstraint"></a>

```csharp
public string SlotConstraint { get; }
```

- *Type:* string

---

##### `SlotType`<sup>Required</sup> <a name="SlotType" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotType"></a>

```csharp
public string SlotType { get; }
```

- *Type:* string

---

##### `SlotTypeVersion`<sup>Required</sup> <a name="SlotTypeVersion" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersion"></a>

```csharp
public string SlotTypeVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentSlotOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexIntentSlotValueElicitationPromptMessageList <a name="LexIntentSlotValueElicitationPromptMessageList" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentSlotValueElicitationPromptMessageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.get"></a>

```csharp
private LexIntentSlotValueElicitationPromptMessageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexIntentSlotValueElicitationPromptMessageOutputReference <a name="LexIntentSlotValueElicitationPromptMessageOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentSlotValueElicitationPromptMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resetGroupNumber">ResetGroupNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupNumber` <a name="ResetGroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resetGroupNumber"></a>

```csharp
private void ResetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumberInput">GroupNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumber">GroupNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `GroupNumberInput`<sup>Optional</sup> <a name="GroupNumberInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumberInput"></a>

```csharp
public double GroupNumberInput { get; }
```

- *Type:* double

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `GroupNumber`<sup>Required</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumber"></a>

```csharp
public double GroupNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexIntentSlotValueElicitationPromptOutputReference <a name="LexIntentSlotValueElicitationPromptOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentSlotValueElicitationPromptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.putMessage">PutMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resetResponseCard">ResetResponseCard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessage` <a name="PutMessage" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.putMessage"></a>

```csharp
private void PutMessage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* object

---

##### `ResetResponseCard` <a name="ResetResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resetResponseCard"></a>

```csharp
private void ResetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.message">Message</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList">LexIntentSlotValueElicitationPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttemptsInput">MaxAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.messageInput">MessageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCardInput">ResponseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCard">ResponseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.message"></a>

```csharp
public LexIntentSlotValueElicitationPromptMessageList Message { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptMessageList">LexIntentSlotValueElicitationPromptMessageList</a>

---

##### `MaxAttemptsInput`<sup>Optional</sup> <a name="MaxAttemptsInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttemptsInput"></a>

```csharp
public double MaxAttemptsInput { get; }
```

- *Type:* double

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.messageInput"></a>

```csharp
public object MessageInput { get; }
```

- *Type:* object

---

##### `ResponseCardInput`<sup>Optional</sup> <a name="ResponseCardInput" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCardInput"></a>

```csharp
public string ResponseCardInput { get; }
```

- *Type:* string

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; }
```

- *Type:* double

---

##### `ResponseCard`<sup>Required</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCard"></a>

```csharp
public string ResponseCard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.internalValue"></a>

```csharp
public LexIntentSlotValueElicitationPrompt InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

---


### LexIntentTimeoutsOutputReference <a name="LexIntentTimeoutsOutputReference" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexIntentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexIntent.LexIntentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



