# `snsPlatformApplication` Submodule <a name="`snsPlatformApplication` Submodule" id="@cdktf/provider-aws.snsPlatformApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsPlatformApplication <a name="SnsPlatformApplication" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application aws_sns_platform_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SnsPlatformApplication(Construct Scope, string Id, SnsPlatformApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig">SnsPlatformApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig">SnsPlatformApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformBundleId">ResetApplePlatformBundleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformTeamId">ResetApplePlatformTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventDeliveryFailureTopicArn">ResetEventDeliveryFailureTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointCreatedTopicArn">ResetEventEndpointCreatedTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointDeletedTopicArn">ResetEventEndpointDeletedTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointUpdatedTopicArn">ResetEventEndpointUpdatedTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetFailureFeedbackRoleArn">ResetFailureFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetPlatformPrincipal">ResetPlatformPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackRoleArn">ResetSuccessFeedbackRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackSampleRate">ResetSuccessFeedbackSampleRate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetApplePlatformBundleId` <a name="ResetApplePlatformBundleId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformBundleId"></a>

```csharp
private void ResetApplePlatformBundleId()
```

##### `ResetApplePlatformTeamId` <a name="ResetApplePlatformTeamId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetApplePlatformTeamId"></a>

```csharp
private void ResetApplePlatformTeamId()
```

##### `ResetEventDeliveryFailureTopicArn` <a name="ResetEventDeliveryFailureTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventDeliveryFailureTopicArn"></a>

```csharp
private void ResetEventDeliveryFailureTopicArn()
```

##### `ResetEventEndpointCreatedTopicArn` <a name="ResetEventEndpointCreatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointCreatedTopicArn"></a>

```csharp
private void ResetEventEndpointCreatedTopicArn()
```

##### `ResetEventEndpointDeletedTopicArn` <a name="ResetEventEndpointDeletedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointDeletedTopicArn"></a>

```csharp
private void ResetEventEndpointDeletedTopicArn()
```

##### `ResetEventEndpointUpdatedTopicArn` <a name="ResetEventEndpointUpdatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetEventEndpointUpdatedTopicArn"></a>

```csharp
private void ResetEventEndpointUpdatedTopicArn()
```

##### `ResetFailureFeedbackRoleArn` <a name="ResetFailureFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetFailureFeedbackRoleArn"></a>

```csharp
private void ResetFailureFeedbackRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPlatformPrincipal` <a name="ResetPlatformPrincipal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetPlatformPrincipal"></a>

```csharp
private void ResetPlatformPrincipal()
```

##### `ResetSuccessFeedbackRoleArn` <a name="ResetSuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackRoleArn"></a>

```csharp
private void ResetSuccessFeedbackRoleArn()
```

##### `ResetSuccessFeedbackSampleRate` <a name="ResetSuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.resetSuccessFeedbackSampleRate"></a>

```csharp
private void ResetSuccessFeedbackSampleRate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SnsPlatformApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SnsPlatformApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SnsPlatformApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleIdInput">ApplePlatformBundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamIdInput">ApplePlatformTeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArnInput">EventDeliveryFailureTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArnInput">EventEndpointCreatedTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArnInput">EventEndpointDeletedTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArnInput">EventEndpointUpdatedTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArnInput">FailureFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredentialInput">PlatformCredentialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformInput">PlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipalInput">PlatformPrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArnInput">SuccessFeedbackRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRateInput">SuccessFeedbackSampleRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleId">ApplePlatformBundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamId">ApplePlatformTeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArn">EventDeliveryFailureTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArn">EventEndpointCreatedTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArn">EventEndpointDeletedTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArn">EventEndpointUpdatedTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArn">FailureFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredential">PlatformCredential</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipal">PlatformPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArn">SuccessFeedbackRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRate">SuccessFeedbackSampleRate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ApplePlatformBundleIdInput`<sup>Optional</sup> <a name="ApplePlatformBundleIdInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleIdInput"></a>

```csharp
public string ApplePlatformBundleIdInput { get; }
```

- *Type:* string

---

##### `ApplePlatformTeamIdInput`<sup>Optional</sup> <a name="ApplePlatformTeamIdInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamIdInput"></a>

```csharp
public string ApplePlatformTeamIdInput { get; }
```

- *Type:* string

---

##### `EventDeliveryFailureTopicArnInput`<sup>Optional</sup> <a name="EventDeliveryFailureTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArnInput"></a>

```csharp
public string EventDeliveryFailureTopicArnInput { get; }
```

- *Type:* string

---

##### `EventEndpointCreatedTopicArnInput`<sup>Optional</sup> <a name="EventEndpointCreatedTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArnInput"></a>

```csharp
public string EventEndpointCreatedTopicArnInput { get; }
```

- *Type:* string

---

##### `EventEndpointDeletedTopicArnInput`<sup>Optional</sup> <a name="EventEndpointDeletedTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArnInput"></a>

```csharp
public string EventEndpointDeletedTopicArnInput { get; }
```

- *Type:* string

---

##### `EventEndpointUpdatedTopicArnInput`<sup>Optional</sup> <a name="EventEndpointUpdatedTopicArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArnInput"></a>

```csharp
public string EventEndpointUpdatedTopicArnInput { get; }
```

- *Type:* string

---

##### `FailureFeedbackRoleArnInput`<sup>Optional</sup> <a name="FailureFeedbackRoleArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArnInput"></a>

```csharp
public string FailureFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlatformCredentialInput`<sup>Optional</sup> <a name="PlatformCredentialInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredentialInput"></a>

```csharp
public string PlatformCredentialInput { get; }
```

- *Type:* string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformInput"></a>

```csharp
public string PlatformInput { get; }
```

- *Type:* string

---

##### `PlatformPrincipalInput`<sup>Optional</sup> <a name="PlatformPrincipalInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipalInput"></a>

```csharp
public string PlatformPrincipalInput { get; }
```

- *Type:* string

---

##### `SuccessFeedbackRoleArnInput`<sup>Optional</sup> <a name="SuccessFeedbackRoleArnInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArnInput"></a>

```csharp
public string SuccessFeedbackRoleArnInput { get; }
```

- *Type:* string

---

##### `SuccessFeedbackSampleRateInput`<sup>Optional</sup> <a name="SuccessFeedbackSampleRateInput" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRateInput"></a>

```csharp
public string SuccessFeedbackSampleRateInput { get; }
```

- *Type:* string

---

##### `ApplePlatformBundleId`<sup>Required</sup> <a name="ApplePlatformBundleId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformBundleId"></a>

```csharp
public string ApplePlatformBundleId { get; }
```

- *Type:* string

---

##### `ApplePlatformTeamId`<sup>Required</sup> <a name="ApplePlatformTeamId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.applePlatformTeamId"></a>

```csharp
public string ApplePlatformTeamId { get; }
```

- *Type:* string

---

##### `EventDeliveryFailureTopicArn`<sup>Required</sup> <a name="EventDeliveryFailureTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventDeliveryFailureTopicArn"></a>

```csharp
public string EventDeliveryFailureTopicArn { get; }
```

- *Type:* string

---

##### `EventEndpointCreatedTopicArn`<sup>Required</sup> <a name="EventEndpointCreatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointCreatedTopicArn"></a>

```csharp
public string EventEndpointCreatedTopicArn { get; }
```

- *Type:* string

---

##### `EventEndpointDeletedTopicArn`<sup>Required</sup> <a name="EventEndpointDeletedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointDeletedTopicArn"></a>

```csharp
public string EventEndpointDeletedTopicArn { get; }
```

- *Type:* string

---

##### `EventEndpointUpdatedTopicArn`<sup>Required</sup> <a name="EventEndpointUpdatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.eventEndpointUpdatedTopicArn"></a>

```csharp
public string EventEndpointUpdatedTopicArn { get; }
```

- *Type:* string

---

##### `FailureFeedbackRoleArn`<sup>Required</sup> <a name="FailureFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.failureFeedbackRoleArn"></a>

```csharp
public string FailureFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `PlatformCredential`<sup>Required</sup> <a name="PlatformCredential" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformCredential"></a>

```csharp
public string PlatformCredential { get; }
```

- *Type:* string

---

##### `PlatformPrincipal`<sup>Required</sup> <a name="PlatformPrincipal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.platformPrincipal"></a>

```csharp
public string PlatformPrincipal { get; }
```

- *Type:* string

---

##### `SuccessFeedbackRoleArn`<sup>Required</sup> <a name="SuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackRoleArn"></a>

```csharp
public string SuccessFeedbackRoleArn { get; }
```

- *Type:* string

---

##### `SuccessFeedbackSampleRate`<sup>Required</sup> <a name="SuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.successFeedbackSampleRate"></a>

```csharp
public string SuccessFeedbackSampleRate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsPlatformApplicationConfig <a name="SnsPlatformApplicationConfig" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SnsPlatformApplicationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Platform,
    string PlatformCredential,
    string ApplePlatformBundleId = null,
    string ApplePlatformTeamId = null,
    string EventDeliveryFailureTopicArn = null,
    string EventEndpointCreatedTopicArn = null,
    string EventEndpointDeletedTopicArn = null,
    string EventEndpointUpdatedTopicArn = null,
    string FailureFeedbackRoleArn = null,
    string Id = null,
    string PlatformPrincipal = null,
    string SuccessFeedbackRoleArn = null,
    string SuccessFeedbackSampleRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#name SnsPlatformApplication#name}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platform">Platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform SnsPlatformApplication#platform}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformCredential">PlatformCredential</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformBundleId">ApplePlatformBundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformTeamId">ApplePlatformTeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventDeliveryFailureTopicArn">EventDeliveryFailureTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointCreatedTopicArn">EventEndpointCreatedTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointDeletedTopicArn">EventEndpointDeletedTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointUpdatedTopicArn">EventEndpointUpdatedTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.failureFeedbackRoleArn">FailureFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#id SnsPlatformApplication#id}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformPrincipal">PlatformPrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackRoleArn">SuccessFeedbackRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}. |
| <code><a href="#@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackSampleRate">SuccessFeedbackSampleRate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#name SnsPlatformApplication#name}.

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platform"></a>

```csharp
public string Platform { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform SnsPlatformApplication#platform}.

---

##### `PlatformCredential`<sup>Required</sup> <a name="PlatformCredential" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformCredential"></a>

```csharp
public string PlatformCredential { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_credential SnsPlatformApplication#platform_credential}.

---

##### `ApplePlatformBundleId`<sup>Optional</sup> <a name="ApplePlatformBundleId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformBundleId"></a>

```csharp
public string ApplePlatformBundleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_bundle_id SnsPlatformApplication#apple_platform_bundle_id}.

---

##### `ApplePlatformTeamId`<sup>Optional</sup> <a name="ApplePlatformTeamId" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.applePlatformTeamId"></a>

```csharp
public string ApplePlatformTeamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#apple_platform_team_id SnsPlatformApplication#apple_platform_team_id}.

---

##### `EventDeliveryFailureTopicArn`<sup>Optional</sup> <a name="EventDeliveryFailureTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventDeliveryFailureTopicArn"></a>

```csharp
public string EventDeliveryFailureTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_delivery_failure_topic_arn SnsPlatformApplication#event_delivery_failure_topic_arn}.

---

##### `EventEndpointCreatedTopicArn`<sup>Optional</sup> <a name="EventEndpointCreatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointCreatedTopicArn"></a>

```csharp
public string EventEndpointCreatedTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_created_topic_arn SnsPlatformApplication#event_endpoint_created_topic_arn}.

---

##### `EventEndpointDeletedTopicArn`<sup>Optional</sup> <a name="EventEndpointDeletedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointDeletedTopicArn"></a>

```csharp
public string EventEndpointDeletedTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_deleted_topic_arn SnsPlatformApplication#event_endpoint_deleted_topic_arn}.

---

##### `EventEndpointUpdatedTopicArn`<sup>Optional</sup> <a name="EventEndpointUpdatedTopicArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.eventEndpointUpdatedTopicArn"></a>

```csharp
public string EventEndpointUpdatedTopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#event_endpoint_updated_topic_arn SnsPlatformApplication#event_endpoint_updated_topic_arn}.

---

##### `FailureFeedbackRoleArn`<sup>Optional</sup> <a name="FailureFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.failureFeedbackRoleArn"></a>

```csharp
public string FailureFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#failure_feedback_role_arn SnsPlatformApplication#failure_feedback_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#id SnsPlatformApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PlatformPrincipal`<sup>Optional</sup> <a name="PlatformPrincipal" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.platformPrincipal"></a>

```csharp
public string PlatformPrincipal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#platform_principal SnsPlatformApplication#platform_principal}.

---

##### `SuccessFeedbackRoleArn`<sup>Optional</sup> <a name="SuccessFeedbackRoleArn" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackRoleArn"></a>

```csharp
public string SuccessFeedbackRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_role_arn SnsPlatformApplication#success_feedback_role_arn}.

---

##### `SuccessFeedbackSampleRate`<sup>Optional</sup> <a name="SuccessFeedbackSampleRate" id="@cdktf/provider-aws.snsPlatformApplication.SnsPlatformApplicationConfig.property.successFeedbackSampleRate"></a>

```csharp
public string SuccessFeedbackSampleRate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_platform_application#success_feedback_sample_rate SnsPlatformApplication#success_feedback_sample_rate}.

---



