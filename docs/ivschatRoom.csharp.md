# `ivschatRoom` Submodule <a name="`ivschatRoom` Submodule" id="@cdktf/provider-aws.ivschatRoom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvschatRoom <a name="IvschatRoom" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room aws_ivschat_room}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatRoom(Construct Scope, string Id, IvschatRoomConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig">IvschatRoomConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig">IvschatRoomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.putMessageReviewHandler">PutMessageReviewHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetLoggingConfigurationIdentifiers">ResetLoggingConfigurationIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageLength">ResetMaximumMessageLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageRatePerSecond">ResetMaximumMessageRatePerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMessageReviewHandler">ResetMessageReviewHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMessageReviewHandler` <a name="PutMessageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putMessageReviewHandler"></a>

```csharp
private void PutMessageReviewHandler(IvschatRoomMessageReviewHandler Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putMessageReviewHandler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putTimeouts"></a>

```csharp
private void PutTimeouts(IvschatRoomTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoggingConfigurationIdentifiers` <a name="ResetLoggingConfigurationIdentifiers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetLoggingConfigurationIdentifiers"></a>

```csharp
private void ResetLoggingConfigurationIdentifiers()
```

##### `ResetMaximumMessageLength` <a name="ResetMaximumMessageLength" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageLength"></a>

```csharp
private void ResetMaximumMessageLength()
```

##### `ResetMaximumMessageRatePerSecond` <a name="ResetMaximumMessageRatePerSecond" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMaximumMessageRatePerSecond"></a>

```csharp
private void ResetMaximumMessageRatePerSecond()
```

##### `ResetMessageReviewHandler` <a name="ResetMessageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetMessageReviewHandler"></a>

```csharp
private void ResetMessageReviewHandler()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IvschatRoom.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IvschatRoom.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IvschatRoom.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandler">MessageReviewHandler</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference">IvschatRoomMessageReviewHandlerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference">IvschatRoomTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiersInput">LoggingConfigurationIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLengthInput">MaximumMessageLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecondInput">MaximumMessageRatePerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandlerInput">MessageReviewHandlerInput</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiers">LoggingConfigurationIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLength">MaximumMessageLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecond">MaximumMessageRatePerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `MessageReviewHandler`<sup>Required</sup> <a name="MessageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandler"></a>

```csharp
public IvschatRoomMessageReviewHandlerOutputReference MessageReviewHandler { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference">IvschatRoomMessageReviewHandlerOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeouts"></a>

```csharp
public IvschatRoomTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference">IvschatRoomTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoggingConfigurationIdentifiersInput`<sup>Optional</sup> <a name="LoggingConfigurationIdentifiersInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiersInput"></a>

```csharp
public string[] LoggingConfigurationIdentifiersInput { get; }
```

- *Type:* string[]

---

##### `MaximumMessageLengthInput`<sup>Optional</sup> <a name="MaximumMessageLengthInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLengthInput"></a>

```csharp
public double MaximumMessageLengthInput { get; }
```

- *Type:* double

---

##### `MaximumMessageRatePerSecondInput`<sup>Optional</sup> <a name="MaximumMessageRatePerSecondInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecondInput"></a>

```csharp
public double MaximumMessageRatePerSecondInput { get; }
```

- *Type:* double

---

##### `MessageReviewHandlerInput`<sup>Optional</sup> <a name="MessageReviewHandlerInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.messageReviewHandlerInput"></a>

```csharp
public IvschatRoomMessageReviewHandler MessageReviewHandlerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoggingConfigurationIdentifiers`<sup>Required</sup> <a name="LoggingConfigurationIdentifiers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.loggingConfigurationIdentifiers"></a>

```csharp
public string[] LoggingConfigurationIdentifiers { get; }
```

- *Type:* string[]

---

##### `MaximumMessageLength`<sup>Required</sup> <a name="MaximumMessageLength" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageLength"></a>

```csharp
public double MaximumMessageLength { get; }
```

- *Type:* double

---

##### `MaximumMessageRatePerSecond`<sup>Required</sup> <a name="MaximumMessageRatePerSecond" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.maximumMessageRatePerSecond"></a>

```csharp
public double MaximumMessageRatePerSecond { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ivschatRoom.IvschatRoom.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IvschatRoomConfig <a name="IvschatRoomConfig" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatRoomConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string[] LoggingConfigurationIdentifiers = null,
    double MaximumMessageLength = null,
    double MaximumMessageRatePerSecond = null,
    IvschatRoomMessageReviewHandler MessageReviewHandler = null,
    string Name = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    IvschatRoomTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#id IvschatRoom#id}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.loggingConfigurationIdentifiers">LoggingConfigurationIdentifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageLength">MaximumMessageLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageRatePerSecond">MaximumMessageRatePerSecond</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.messageReviewHandler">MessageReviewHandler</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | message_review_handler block. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#name IvschatRoom#name}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags IvschatRoom#tags}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags_all IvschatRoom#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#id IvschatRoom#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingConfigurationIdentifiers`<sup>Optional</sup> <a name="LoggingConfigurationIdentifiers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.loggingConfigurationIdentifiers"></a>

```csharp
public string[] LoggingConfigurationIdentifiers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}.

---

##### `MaximumMessageLength`<sup>Optional</sup> <a name="MaximumMessageLength" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageLength"></a>

```csharp
public double MaximumMessageLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}.

---

##### `MaximumMessageRatePerSecond`<sup>Optional</sup> <a name="MaximumMessageRatePerSecond" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.maximumMessageRatePerSecond"></a>

```csharp
public double MaximumMessageRatePerSecond { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}.

---

##### `MessageReviewHandler`<sup>Optional</sup> <a name="MessageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.messageReviewHandler"></a>

```csharp
public IvschatRoomMessageReviewHandler MessageReviewHandler { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

message_review_handler block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#message_review_handler IvschatRoom#message_review_handler}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#name IvschatRoom#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags IvschatRoom#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#tags_all IvschatRoom#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomConfig.property.timeouts"></a>

```csharp
public IvschatRoomTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts">IvschatRoomTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#timeouts IvschatRoom#timeouts}

---

### IvschatRoomMessageReviewHandler <a name="IvschatRoomMessageReviewHandler" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatRoomMessageReviewHandler {
    string FallbackResult = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.fallbackResult">FallbackResult</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#fallback_result IvschatRoom#fallback_result}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#uri IvschatRoom#uri}. |

---

##### `FallbackResult`<sup>Optional</sup> <a name="FallbackResult" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.fallbackResult"></a>

```csharp
public string FallbackResult { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#fallback_result IvschatRoom#fallback_result}.

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#uri IvschatRoom#uri}.

---

### IvschatRoomTimeouts <a name="IvschatRoomTimeouts" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatRoomTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#create IvschatRoom#create}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#delete IvschatRoom#delete}. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#update IvschatRoom#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#create IvschatRoom#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#delete IvschatRoom#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ivschat_room#update IvschatRoom#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IvschatRoomMessageReviewHandlerOutputReference <a name="IvschatRoomMessageReviewHandlerOutputReference" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatRoomMessageReviewHandlerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetFallbackResult">ResetFallbackResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFallbackResult` <a name="ResetFallbackResult" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetFallbackResult"></a>

```csharp
private void ResetFallbackResult()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResultInput">FallbackResultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResult">FallbackResult</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FallbackResultInput`<sup>Optional</sup> <a name="FallbackResultInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResultInput"></a>

```csharp
public string FallbackResultInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `FallbackResult`<sup>Required</sup> <a name="FallbackResult" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.fallbackResult"></a>

```csharp
public string FallbackResult { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandlerOutputReference.property.internalValue"></a>

```csharp
public IvschatRoomMessageReviewHandler InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomMessageReviewHandler">IvschatRoomMessageReviewHandler</a>

---


### IvschatRoomTimeoutsOutputReference <a name="IvschatRoomTimeoutsOutputReference" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IvschatRoomTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ivschatRoom.IvschatRoomTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



