# `lexBot` Submodule <a name="`lexBot` Submodule" id="@cdktf/provider-aws.lexBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexBot <a name="LexBot" id="@cdktf/provider-aws.lexBot.LexBot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lex_bot aws_lex_bot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBot(Construct Scope, string Id, LexBotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig">LexBotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lexBot.LexBot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotConfig">LexBotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.putAbortStatement">PutAbortStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.putClarificationPrompt">PutClarificationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.putIntent">PutIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetClarificationPrompt">ResetClarificationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetCreateVersion">ResetCreateVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetDetectSentiment">ResetDetectSentiment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetEnableModelImprovements">ResetEnableModelImprovements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetIdleSessionTtlInSeconds">ResetIdleSessionTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetLocale">ResetLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetNluIntentConfidenceThreshold">ResetNluIntentConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetProcessBehavior">ResetProcessBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.resetVoiceId">ResetVoiceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexBot.LexBot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lexBot.LexBot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lexBot.LexBot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexBot.LexBot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lexBot.LexBot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lexBot.LexBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lexBot.LexBot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lexBot.LexBot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lexBot.LexBot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexBot.LexBot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAbortStatement` <a name="PutAbortStatement" id="@cdktf/provider-aws.lexBot.LexBot.putAbortStatement"></a>

```csharp
private void PutAbortStatement(LexBotAbortStatement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexBot.LexBot.putAbortStatement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

---

##### `PutClarificationPrompt` <a name="PutClarificationPrompt" id="@cdktf/provider-aws.lexBot.LexBot.putClarificationPrompt"></a>

```csharp
private void PutClarificationPrompt(LexBotClarificationPrompt Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexBot.LexBot.putClarificationPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

---

##### `PutIntent` <a name="PutIntent" id="@cdktf/provider-aws.lexBot.LexBot.putIntent"></a>

```csharp
private void PutIntent(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexBot.LexBot.putIntent.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.lexBot.LexBot.putTimeouts"></a>

```csharp
private void PutTimeouts(LexBotTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexBot.LexBot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a>

---

##### `ResetClarificationPrompt` <a name="ResetClarificationPrompt" id="@cdktf/provider-aws.lexBot.LexBot.resetClarificationPrompt"></a>

```csharp
private void ResetClarificationPrompt()
```

##### `ResetCreateVersion` <a name="ResetCreateVersion" id="@cdktf/provider-aws.lexBot.LexBot.resetCreateVersion"></a>

```csharp
private void ResetCreateVersion()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.lexBot.LexBot.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDetectSentiment` <a name="ResetDetectSentiment" id="@cdktf/provider-aws.lexBot.LexBot.resetDetectSentiment"></a>

```csharp
private void ResetDetectSentiment()
```

##### `ResetEnableModelImprovements` <a name="ResetEnableModelImprovements" id="@cdktf/provider-aws.lexBot.LexBot.resetEnableModelImprovements"></a>

```csharp
private void ResetEnableModelImprovements()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lexBot.LexBot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdleSessionTtlInSeconds` <a name="ResetIdleSessionTtlInSeconds" id="@cdktf/provider-aws.lexBot.LexBot.resetIdleSessionTtlInSeconds"></a>

```csharp
private void ResetIdleSessionTtlInSeconds()
```

##### `ResetLocale` <a name="ResetLocale" id="@cdktf/provider-aws.lexBot.LexBot.resetLocale"></a>

```csharp
private void ResetLocale()
```

##### `ResetNluIntentConfidenceThreshold` <a name="ResetNluIntentConfidenceThreshold" id="@cdktf/provider-aws.lexBot.LexBot.resetNluIntentConfidenceThreshold"></a>

```csharp
private void ResetNluIntentConfidenceThreshold()
```

##### `ResetProcessBehavior` <a name="ResetProcessBehavior" id="@cdktf/provider-aws.lexBot.LexBot.resetProcessBehavior"></a>

```csharp
private void ResetProcessBehavior()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.lexBot.LexBot.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVoiceId` <a name="ResetVoiceId" id="@cdktf/provider-aws.lexBot.LexBot.resetVoiceId"></a>

```csharp
private void ResetVoiceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lexBot.LexBot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LexBot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lexBot.LexBot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lexBot.LexBot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LexBot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lexBot.LexBot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lexBot.LexBot.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LexBot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lexBot.LexBot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.abortStatement">AbortStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference">LexBotAbortStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.checksum">Checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.clarificationPrompt">ClarificationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference">LexBotClarificationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.failureReason">FailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.intent">Intent</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList">LexBotIntentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference">LexBotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.abortStatementInput">AbortStatementInput</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.childDirectedInput">ChildDirectedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.clarificationPromptInput">ClarificationPromptInput</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.createVersionInput">CreateVersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.detectSentimentInput">DetectSentimentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.enableModelImprovementsInput">EnableModelImprovementsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.idleSessionTtlInSecondsInput">IdleSessionTtlInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.intentInput">IntentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.localeInput">LocaleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.nluIntentConfidenceThresholdInput">NluIntentConfidenceThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.processBehaviorInput">ProcessBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.voiceIdInput">VoiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.childDirected">ChildDirected</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.createVersion">CreateVersion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.detectSentiment">DetectSentiment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.enableModelImprovements">EnableModelImprovements</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.idleSessionTtlInSeconds">IdleSessionTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.nluIntentConfidenceThreshold">NluIntentConfidenceThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.processBehavior">ProcessBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.voiceId">VoiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lexBot.LexBot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lexBot.LexBot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexBot.LexBot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lexBot.LexBot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lexBot.LexBot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lexBot.LexBot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lexBot.LexBot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lexBot.LexBot.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lexBot.LexBot.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lexBot.LexBot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lexBot.LexBot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lexBot.LexBot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lexBot.LexBot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lexBot.LexBot.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AbortStatement`<sup>Required</sup> <a name="AbortStatement" id="@cdktf/provider-aws.lexBot.LexBot.property.abortStatement"></a>

```csharp
public LexBotAbortStatementOutputReference AbortStatement { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference">LexBotAbortStatementOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lexBot.LexBot.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="@cdktf/provider-aws.lexBot.LexBot.property.checksum"></a>

```csharp
public string Checksum { get; }
```

- *Type:* string

---

##### `ClarificationPrompt`<sup>Required</sup> <a name="ClarificationPrompt" id="@cdktf/provider-aws.lexBot.LexBot.property.clarificationPrompt"></a>

```csharp
public LexBotClarificationPromptOutputReference ClarificationPrompt { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference">LexBotClarificationPromptOutputReference</a>

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.lexBot.LexBot.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktf/provider-aws.lexBot.LexBot.property.failureReason"></a>

```csharp
public string FailureReason { get; }
```

- *Type:* string

---

##### `Intent`<sup>Required</sup> <a name="Intent" id="@cdktf/provider-aws.lexBot.LexBot.property.intent"></a>

```csharp
public LexBotIntentList Intent { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotIntentList">LexBotIntentList</a>

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktf/provider-aws.lexBot.LexBot.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.lexBot.LexBot.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.lexBot.LexBot.property.timeouts"></a>

```csharp
public LexBotTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference">LexBotTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-aws.lexBot.LexBot.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `AbortStatementInput`<sup>Optional</sup> <a name="AbortStatementInput" id="@cdktf/provider-aws.lexBot.LexBot.property.abortStatementInput"></a>

```csharp
public LexBotAbortStatement AbortStatementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

---

##### `ChildDirectedInput`<sup>Optional</sup> <a name="ChildDirectedInput" id="@cdktf/provider-aws.lexBot.LexBot.property.childDirectedInput"></a>

```csharp
public object ChildDirectedInput { get; }
```

- *Type:* object

---

##### `ClarificationPromptInput`<sup>Optional</sup> <a name="ClarificationPromptInput" id="@cdktf/provider-aws.lexBot.LexBot.property.clarificationPromptInput"></a>

```csharp
public LexBotClarificationPrompt ClarificationPromptInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

---

##### `CreateVersionInput`<sup>Optional</sup> <a name="CreateVersionInput" id="@cdktf/provider-aws.lexBot.LexBot.property.createVersionInput"></a>

```csharp
public object CreateVersionInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.lexBot.LexBot.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DetectSentimentInput`<sup>Optional</sup> <a name="DetectSentimentInput" id="@cdktf/provider-aws.lexBot.LexBot.property.detectSentimentInput"></a>

```csharp
public object DetectSentimentInput { get; }
```

- *Type:* object

---

##### `EnableModelImprovementsInput`<sup>Optional</sup> <a name="EnableModelImprovementsInput" id="@cdktf/provider-aws.lexBot.LexBot.property.enableModelImprovementsInput"></a>

```csharp
public object EnableModelImprovementsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lexBot.LexBot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdleSessionTtlInSecondsInput`<sup>Optional</sup> <a name="IdleSessionTtlInSecondsInput" id="@cdktf/provider-aws.lexBot.LexBot.property.idleSessionTtlInSecondsInput"></a>

```csharp
public double IdleSessionTtlInSecondsInput { get; }
```

- *Type:* double

---

##### `IntentInput`<sup>Optional</sup> <a name="IntentInput" id="@cdktf/provider-aws.lexBot.LexBot.property.intentInput"></a>

```csharp
public object IntentInput { get; }
```

- *Type:* object

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="@cdktf/provider-aws.lexBot.LexBot.property.localeInput"></a>

```csharp
public string LocaleInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lexBot.LexBot.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NluIntentConfidenceThresholdInput`<sup>Optional</sup> <a name="NluIntentConfidenceThresholdInput" id="@cdktf/provider-aws.lexBot.LexBot.property.nluIntentConfidenceThresholdInput"></a>

```csharp
public double NluIntentConfidenceThresholdInput { get; }
```

- *Type:* double

---

##### `ProcessBehaviorInput`<sup>Optional</sup> <a name="ProcessBehaviorInput" id="@cdktf/provider-aws.lexBot.LexBot.property.processBehaviorInput"></a>

```csharp
public string ProcessBehaviorInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.lexBot.LexBot.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VoiceIdInput`<sup>Optional</sup> <a name="VoiceIdInput" id="@cdktf/provider-aws.lexBot.LexBot.property.voiceIdInput"></a>

```csharp
public string VoiceIdInput { get; }
```

- *Type:* string

---

##### `ChildDirected`<sup>Required</sup> <a name="ChildDirected" id="@cdktf/provider-aws.lexBot.LexBot.property.childDirected"></a>

```csharp
public object ChildDirected { get; }
```

- *Type:* object

---

##### `CreateVersion`<sup>Required</sup> <a name="CreateVersion" id="@cdktf/provider-aws.lexBot.LexBot.property.createVersion"></a>

```csharp
public object CreateVersion { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.lexBot.LexBot.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DetectSentiment`<sup>Required</sup> <a name="DetectSentiment" id="@cdktf/provider-aws.lexBot.LexBot.property.detectSentiment"></a>

```csharp
public object DetectSentiment { get; }
```

- *Type:* object

---

##### `EnableModelImprovements`<sup>Required</sup> <a name="EnableModelImprovements" id="@cdktf/provider-aws.lexBot.LexBot.property.enableModelImprovements"></a>

```csharp
public object EnableModelImprovements { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lexBot.LexBot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdleSessionTtlInSeconds`<sup>Required</sup> <a name="IdleSessionTtlInSeconds" id="@cdktf/provider-aws.lexBot.LexBot.property.idleSessionTtlInSeconds"></a>

```csharp
public double IdleSessionTtlInSeconds { get; }
```

- *Type:* double

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktf/provider-aws.lexBot.LexBot.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lexBot.LexBot.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NluIntentConfidenceThreshold`<sup>Required</sup> <a name="NluIntentConfidenceThreshold" id="@cdktf/provider-aws.lexBot.LexBot.property.nluIntentConfidenceThreshold"></a>

```csharp
public double NluIntentConfidenceThreshold { get; }
```

- *Type:* double

---

##### `ProcessBehavior`<sup>Required</sup> <a name="ProcessBehavior" id="@cdktf/provider-aws.lexBot.LexBot.property.processBehavior"></a>

```csharp
public string ProcessBehavior { get; }
```

- *Type:* string

---

##### `VoiceId`<sup>Required</sup> <a name="VoiceId" id="@cdktf/provider-aws.lexBot.LexBot.property.voiceId"></a>

```csharp
public string VoiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lexBot.LexBot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LexBotAbortStatement <a name="LexBotAbortStatement" id="@cdktf/provider-aws.lexBot.LexBotAbortStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotAbortStatement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotAbortStatement {
    object Message,
    string ResponseCard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement.property.message">Message</a></code> | <code>object</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement.property.responseCard">ResponseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}. |

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexBot.LexBotAbortStatement.property.message"></a>

```csharp
public object Message { get; set; }
```

- *Type:* object

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#message LexBot#message}

---

##### `ResponseCard`<sup>Optional</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexBot.LexBotAbortStatement.property.responseCard"></a>

```csharp
public string ResponseCard { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}.

---

### LexBotAbortStatementMessage <a name="LexBotAbortStatementMessage" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotAbortStatementMessage {
    string Content,
    string ContentType,
    double GroupNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content LexBot#content}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content_type LexBot#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.groupNumber">GroupNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#group_number LexBot#group_number}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content LexBot#content}.

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content_type LexBot#content_type}.

---

##### `GroupNumber`<sup>Optional</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessage.property.groupNumber"></a>

```csharp
public double GroupNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#group_number LexBot#group_number}.

---

### LexBotClarificationPrompt <a name="LexBotClarificationPrompt" id="@cdktf/provider-aws.lexBot.LexBotClarificationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotClarificationPrompt {
    double MaxAttempts,
    object Message,
    string ResponseCard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#max_attempts LexBot#max_attempts}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.message">Message</a></code> | <code>object</code> | message block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.responseCard">ResponseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}. |

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#max_attempts LexBot#max_attempts}.

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.message"></a>

```csharp
public object Message { get; set; }
```

- *Type:* object

message block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#message LexBot#message}

---

##### `ResponseCard`<sup>Optional</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexBot.LexBotClarificationPrompt.property.responseCard"></a>

```csharp
public string ResponseCard { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#response_card LexBot#response_card}.

---

### LexBotClarificationPromptMessage <a name="LexBotClarificationPromptMessage" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotClarificationPromptMessage {
    string Content,
    string ContentType,
    double GroupNumber = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content LexBot#content}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content_type LexBot#content_type}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.groupNumber">GroupNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#group_number LexBot#group_number}. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content LexBot#content}.

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#content_type LexBot#content_type}.

---

##### `GroupNumber`<sup>Optional</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessage.property.groupNumber"></a>

```csharp
public double GroupNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#group_number LexBot#group_number}.

---

### LexBotConfig <a name="LexBotConfig" id="@cdktf/provider-aws.lexBot.LexBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    LexBotAbortStatement AbortStatement,
    object ChildDirected,
    object Intent,
    string Name,
    LexBotClarificationPrompt ClarificationPrompt = null,
    object CreateVersion = null,
    string Description = null,
    object DetectSentiment = null,
    object EnableModelImprovements = null,
    string Id = null,
    double IdleSessionTtlInSeconds = null,
    string Locale = null,
    double NluIntentConfidenceThreshold = null,
    string ProcessBehavior = null,
    LexBotTimeouts Timeouts = null,
    string VoiceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.abortStatement">AbortStatement</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a></code> | abort_statement block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.childDirected">ChildDirected</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#child_directed LexBot#child_directed}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.intent">Intent</a></code> | <code>object</code> | intent block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#name LexBot#name}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.clarificationPrompt">ClarificationPrompt</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a></code> | clarification_prompt block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.createVersion">CreateVersion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create_version LexBot#create_version}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#description LexBot#description}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.detectSentiment">DetectSentiment</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#detect_sentiment LexBot#detect_sentiment}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.enableModelImprovements">EnableModelImprovements</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#enable_model_improvements LexBot#enable_model_improvements}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#id LexBot#id}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.idleSessionTtlInSeconds">IdleSessionTtlInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.locale">Locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#locale LexBot#locale}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.nluIntentConfidenceThreshold">NluIntentConfidenceThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.processBehavior">ProcessBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#process_behavior LexBot#process_behavior}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotConfig.property.voiceId">VoiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#voice_id LexBot#voice_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AbortStatement`<sup>Required</sup> <a name="AbortStatement" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.abortStatement"></a>

```csharp
public LexBotAbortStatement AbortStatement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

abort_statement block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#abort_statement LexBot#abort_statement}

---

##### `ChildDirected`<sup>Required</sup> <a name="ChildDirected" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.childDirected"></a>

```csharp
public object ChildDirected { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#child_directed LexBot#child_directed}.

---

##### `Intent`<sup>Required</sup> <a name="Intent" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.intent"></a>

```csharp
public object Intent { get; set; }
```

- *Type:* object

intent block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent LexBot#intent}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#name LexBot#name}.

---

##### `ClarificationPrompt`<sup>Optional</sup> <a name="ClarificationPrompt" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.clarificationPrompt"></a>

```csharp
public LexBotClarificationPrompt ClarificationPrompt { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

clarification_prompt block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#clarification_prompt LexBot#clarification_prompt}

---

##### `CreateVersion`<sup>Optional</sup> <a name="CreateVersion" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.createVersion"></a>

```csharp
public object CreateVersion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create_version LexBot#create_version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#description LexBot#description}.

---

##### `DetectSentiment`<sup>Optional</sup> <a name="DetectSentiment" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.detectSentiment"></a>

```csharp
public object DetectSentiment { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#detect_sentiment LexBot#detect_sentiment}.

---

##### `EnableModelImprovements`<sup>Optional</sup> <a name="EnableModelImprovements" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.enableModelImprovements"></a>

```csharp
public object EnableModelImprovements { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#enable_model_improvements LexBot#enable_model_improvements}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#id LexBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleSessionTtlInSeconds`<sup>Optional</sup> <a name="IdleSessionTtlInSeconds" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.idleSessionTtlInSeconds"></a>

```csharp
public double IdleSessionTtlInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}.

---

##### `Locale`<sup>Optional</sup> <a name="Locale" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.locale"></a>

```csharp
public string Locale { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#locale LexBot#locale}.

---

##### `NluIntentConfidenceThreshold`<sup>Optional</sup> <a name="NluIntentConfidenceThreshold" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.nluIntentConfidenceThreshold"></a>

```csharp
public double NluIntentConfidenceThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}.

---

##### `ProcessBehavior`<sup>Optional</sup> <a name="ProcessBehavior" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.processBehavior"></a>

```csharp
public string ProcessBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#process_behavior LexBot#process_behavior}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.timeouts"></a>

```csharp
public LexBotTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts">LexBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#timeouts LexBot#timeouts}

---

##### `VoiceId`<sup>Optional</sup> <a name="VoiceId" id="@cdktf/provider-aws.lexBot.LexBotConfig.property.voiceId"></a>

```csharp
public string VoiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#voice_id LexBot#voice_id}.

---

### LexBotIntent <a name="LexBotIntent" id="@cdktf/provider-aws.lexBot.LexBotIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotIntent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotIntent {
    string IntentName,
    string IntentVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntent.property.intentName">IntentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent_name LexBot#intent_name}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntent.property.intentVersion">IntentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent_version LexBot#intent_version}. |

---

##### `IntentName`<sup>Required</sup> <a name="IntentName" id="@cdktf/provider-aws.lexBot.LexBotIntent.property.intentName"></a>

```csharp
public string IntentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent_name LexBot#intent_name}.

---

##### `IntentVersion`<sup>Required</sup> <a name="IntentVersion" id="@cdktf/provider-aws.lexBot.LexBotIntent.property.intentVersion"></a>

```csharp
public string IntentVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#intent_version LexBot#intent_version}.

---

### LexBotTimeouts <a name="LexBotTimeouts" id="@cdktf/provider-aws.lexBot.LexBotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lexBot.LexBotTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create LexBot#create}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#delete LexBot#delete}. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#update LexBot#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.lexBot.LexBotTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#create LexBot#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.lexBot.LexBotTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#delete LexBot#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.lexBot.LexBotTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lex_bot#update LexBot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LexBotAbortStatementMessageList <a name="LexBotAbortStatementMessageList" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotAbortStatementMessageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.get"></a>

```csharp
private LexBotAbortStatementMessageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexBotAbortStatementMessageOutputReference <a name="LexBotAbortStatementMessageOutputReference" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotAbortStatementMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.resetGroupNumber">ResetGroupNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupNumber` <a name="ResetGroupNumber" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.resetGroupNumber"></a>

```csharp
private void ResetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumberInput">GroupNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumber">GroupNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `GroupNumberInput`<sup>Optional</sup> <a name="GroupNumberInput" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumberInput"></a>

```csharp
public double GroupNumberInput { get; }
```

- *Type:* double

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `GroupNumber`<sup>Required</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumber"></a>

```csharp
public double GroupNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexBotAbortStatementOutputReference <a name="LexBotAbortStatementOutputReference" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotAbortStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.putMessage">PutMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.resetResponseCard">ResetResponseCard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessage` <a name="PutMessage" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.putMessage"></a>

```csharp
private void PutMessage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* object

---

##### `ResetResponseCard` <a name="ResetResponseCard" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.resetResponseCard"></a>

```csharp
private void ResetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.message">Message</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList">LexBotAbortStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.messageInput">MessageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.responseCardInput">ResponseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.responseCard">ResponseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.message"></a>

```csharp
public LexBotAbortStatementMessageList Message { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatementMessageList">LexBotAbortStatementMessageList</a>

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.messageInput"></a>

```csharp
public object MessageInput { get; }
```

- *Type:* object

---

##### `ResponseCardInput`<sup>Optional</sup> <a name="ResponseCardInput" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.responseCardInput"></a>

```csharp
public string ResponseCardInput { get; }
```

- *Type:* string

---

##### `ResponseCard`<sup>Required</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.responseCard"></a>

```csharp
public string ResponseCard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexBot.LexBotAbortStatementOutputReference.property.internalValue"></a>

```csharp
public LexBotAbortStatement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

---


### LexBotClarificationPromptMessageList <a name="LexBotClarificationPromptMessageList" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotClarificationPromptMessageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.get"></a>

```csharp
private LexBotClarificationPromptMessageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexBotClarificationPromptMessageOutputReference <a name="LexBotClarificationPromptMessageOutputReference" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotClarificationPromptMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.resetGroupNumber">ResetGroupNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupNumber` <a name="ResetGroupNumber" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.resetGroupNumber"></a>

```csharp
private void ResetGroupNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumberInput">GroupNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumber">GroupNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `GroupNumberInput`<sup>Optional</sup> <a name="GroupNumberInput" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumberInput"></a>

```csharp
public double GroupNumberInput { get; }
```

- *Type:* double

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `GroupNumber`<sup>Required</sup> <a name="GroupNumber" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumber"></a>

```csharp
public double GroupNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexBotClarificationPromptOutputReference <a name="LexBotClarificationPromptOutputReference" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotClarificationPromptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.putMessage">PutMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.resetResponseCard">ResetResponseCard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMessage` <a name="PutMessage" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.putMessage"></a>

```csharp
private void PutMessage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* object

---

##### `ResetResponseCard` <a name="ResetResponseCard" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.resetResponseCard"></a>

```csharp
private void ResetResponseCard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.message">Message</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList">LexBotClarificationPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.maxAttemptsInput">MaxAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.messageInput">MessageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.responseCardInput">ResponseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.responseCard">ResponseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.message"></a>

```csharp
public LexBotClarificationPromptMessageList Message { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPromptMessageList">LexBotClarificationPromptMessageList</a>

---

##### `MaxAttemptsInput`<sup>Optional</sup> <a name="MaxAttemptsInput" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.maxAttemptsInput"></a>

```csharp
public double MaxAttemptsInput { get; }
```

- *Type:* double

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.messageInput"></a>

```csharp
public object MessageInput { get; }
```

- *Type:* object

---

##### `ResponseCardInput`<sup>Optional</sup> <a name="ResponseCardInput" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.responseCardInput"></a>

```csharp
public string ResponseCardInput { get; }
```

- *Type:* string

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; }
```

- *Type:* double

---

##### `ResponseCard`<sup>Required</sup> <a name="ResponseCard" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.responseCard"></a>

```csharp
public string ResponseCard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexBot.LexBotClarificationPromptOutputReference.property.internalValue"></a>

```csharp
public LexBotClarificationPrompt InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

---


### LexBotIntentList <a name="LexBotIntentList" id="@cdktf/provider-aws.lexBot.LexBotIntentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotIntentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.lexBot.LexBotIntentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexBot.LexBotIntentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexBot.LexBotIntentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexBot.LexBotIntentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexBot.LexBotIntentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.lexBot.LexBotIntentList.get"></a>

```csharp
private LexBotIntentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.lexBot.LexBotIntentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexBot.LexBotIntentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexBot.LexBotIntentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexBot.LexBotIntentList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexBotIntentOutputReference <a name="LexBotIntentOutputReference" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotIntentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentNameInput">IntentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentVersionInput">IntentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentName">IntentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentVersion">IntentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntentNameInput`<sup>Optional</sup> <a name="IntentNameInput" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentNameInput"></a>

```csharp
public string IntentNameInput { get; }
```

- *Type:* string

---

##### `IntentVersionInput`<sup>Optional</sup> <a name="IntentVersionInput" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentVersionInput"></a>

```csharp
public string IntentVersionInput { get; }
```

- *Type:* string

---

##### `IntentName`<sup>Required</sup> <a name="IntentName" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentName"></a>

```csharp
public string IntentName { get; }
```

- *Type:* string

---

##### `IntentVersion`<sup>Required</sup> <a name="IntentVersion" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.intentVersion"></a>

```csharp
public string IntentVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexBot.LexBotIntentOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LexBotTimeoutsOutputReference <a name="LexBotTimeoutsOutputReference" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LexBotTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.lexBot.LexBotTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



