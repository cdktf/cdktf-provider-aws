# `snsTopicSubscription` Submodule <a name="`snsTopicSubscription` Submodule" id="@cdktf/provider-aws.snsTopicSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopicSubscription <a name="SnsTopicSubscription" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription aws_sns_topic_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SnsTopicSubscription(Construct Scope, string Id, SnsTopicSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig">SnsTopicSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig">SnsTopicSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetConfirmationTimeoutInMinutes">ResetConfirmationTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetDeliveryPolicy">ResetDeliveryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetEndpointAutoConfirms">ResetEndpointAutoConfirms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicy">ResetFilterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicyScope">ResetFilterPolicyScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetRawMessageDelivery">ResetRawMessageDelivery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetRedrivePolicy">ResetRedrivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetSubscriptionRoleArn">ResetSubscriptionRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetConfirmationTimeoutInMinutes` <a name="ResetConfirmationTimeoutInMinutes" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetConfirmationTimeoutInMinutes"></a>

```csharp
private void ResetConfirmationTimeoutInMinutes()
```

##### `ResetDeliveryPolicy` <a name="ResetDeliveryPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetDeliveryPolicy"></a>

```csharp
private void ResetDeliveryPolicy()
```

##### `ResetEndpointAutoConfirms` <a name="ResetEndpointAutoConfirms" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetEndpointAutoConfirms"></a>

```csharp
private void ResetEndpointAutoConfirms()
```

##### `ResetFilterPolicy` <a name="ResetFilterPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicy"></a>

```csharp
private void ResetFilterPolicy()
```

##### `ResetFilterPolicyScope` <a name="ResetFilterPolicyScope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicyScope"></a>

```csharp
private void ResetFilterPolicyScope()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRawMessageDelivery` <a name="ResetRawMessageDelivery" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetRawMessageDelivery"></a>

```csharp
private void ResetRawMessageDelivery()
```

##### `ResetRedrivePolicy` <a name="ResetRedrivePolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetRedrivePolicy"></a>

```csharp
private void ResetRedrivePolicy()
```

##### `ResetSubscriptionRoleArn` <a name="ResetSubscriptionRoleArn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetSubscriptionRoleArn"></a>

```csharp
private void ResetSubscriptionRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SnsTopicSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SnsTopicSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SnsTopicSubscription.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationWasAuthenticated">ConfirmationWasAuthenticated</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.pendingConfirmation">PendingConfirmation</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutesInput">ConfirmationTimeoutInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicyInput">DeliveryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirmsInput">EndpointAutoConfirmsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyInput">FilterPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScopeInput">FilterPolicyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDeliveryInput">RawMessageDeliveryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicyInput">RedrivePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArnInput">SubscriptionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArnInput">TopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutes">ConfirmationTimeoutInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicy">DeliveryPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirms">EndpointAutoConfirms</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicy">FilterPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScope">FilterPolicyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDelivery">RawMessageDelivery</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicy">RedrivePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArn">SubscriptionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArn">TopicArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ConfirmationWasAuthenticated`<sup>Required</sup> <a name="ConfirmationWasAuthenticated" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationWasAuthenticated"></a>

```csharp
public IResolvable ConfirmationWasAuthenticated { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `PendingConfirmation`<sup>Required</sup> <a name="PendingConfirmation" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.pendingConfirmation"></a>

```csharp
public IResolvable PendingConfirmation { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ConfirmationTimeoutInMinutesInput`<sup>Optional</sup> <a name="ConfirmationTimeoutInMinutesInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutesInput"></a>

```csharp
public double ConfirmationTimeoutInMinutesInput { get; }
```

- *Type:* double

---

##### `DeliveryPolicyInput`<sup>Optional</sup> <a name="DeliveryPolicyInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicyInput"></a>

```csharp
public string DeliveryPolicyInput { get; }
```

- *Type:* string

---

##### `EndpointAutoConfirmsInput`<sup>Optional</sup> <a name="EndpointAutoConfirmsInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirmsInput"></a>

```csharp
public object EndpointAutoConfirmsInput { get; }
```

- *Type:* object

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `FilterPolicyInput`<sup>Optional</sup> <a name="FilterPolicyInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyInput"></a>

```csharp
public string FilterPolicyInput { get; }
```

- *Type:* string

---

##### `FilterPolicyScopeInput`<sup>Optional</sup> <a name="FilterPolicyScopeInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScopeInput"></a>

```csharp
public string FilterPolicyScopeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RawMessageDeliveryInput`<sup>Optional</sup> <a name="RawMessageDeliveryInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDeliveryInput"></a>

```csharp
public object RawMessageDeliveryInput { get; }
```

- *Type:* object

---

##### `RedrivePolicyInput`<sup>Optional</sup> <a name="RedrivePolicyInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicyInput"></a>

```csharp
public string RedrivePolicyInput { get; }
```

- *Type:* string

---

##### `SubscriptionRoleArnInput`<sup>Optional</sup> <a name="SubscriptionRoleArnInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArnInput"></a>

```csharp
public string SubscriptionRoleArnInput { get; }
```

- *Type:* string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArnInput"></a>

```csharp
public string TopicArnInput { get; }
```

- *Type:* string

---

##### `ConfirmationTimeoutInMinutes`<sup>Required</sup> <a name="ConfirmationTimeoutInMinutes" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutes"></a>

```csharp
public double ConfirmationTimeoutInMinutes { get; }
```

- *Type:* double

---

##### `DeliveryPolicy`<sup>Required</sup> <a name="DeliveryPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicy"></a>

```csharp
public string DeliveryPolicy { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `EndpointAutoConfirms`<sup>Required</sup> <a name="EndpointAutoConfirms" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirms"></a>

```csharp
public object EndpointAutoConfirms { get; }
```

- *Type:* object

---

##### `FilterPolicy`<sup>Required</sup> <a name="FilterPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicy"></a>

```csharp
public string FilterPolicy { get; }
```

- *Type:* string

---

##### `FilterPolicyScope`<sup>Required</sup> <a name="FilterPolicyScope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScope"></a>

```csharp
public string FilterPolicyScope { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RawMessageDelivery`<sup>Required</sup> <a name="RawMessageDelivery" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDelivery"></a>

```csharp
public object RawMessageDelivery { get; }
```

- *Type:* object

---

##### `RedrivePolicy`<sup>Required</sup> <a name="RedrivePolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicy"></a>

```csharp
public string RedrivePolicy { get; }
```

- *Type:* string

---

##### `SubscriptionRoleArn`<sup>Required</sup> <a name="SubscriptionRoleArn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArn"></a>

```csharp
public string SubscriptionRoleArn { get; }
```

- *Type:* string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArn"></a>

```csharp
public string TopicArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicSubscriptionConfig <a name="SnsTopicSubscriptionConfig" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SnsTopicSubscriptionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Endpoint,
    string Protocol,
    string TopicArn,
    double ConfirmationTimeoutInMinutes = null,
    string DeliveryPolicy = null,
    object EndpointAutoConfirms = null,
    string FilterPolicy = null,
    string FilterPolicyScope = null,
    string Id = null,
    object RawMessageDelivery = null,
    string RedrivePolicy = null,
    string SubscriptionRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint SnsTopicSubscription#endpoint}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#protocol SnsTopicSubscription#protocol}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.topicArn">TopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#topic_arn SnsTopicSubscription#topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.confirmationTimeoutInMinutes">ConfirmationTimeoutInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.deliveryPolicy">DeliveryPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#delivery_policy SnsTopicSubscription#delivery_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpointAutoConfirms">EndpointAutoConfirms</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicy">FilterPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy SnsTopicSubscription#filter_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicyScope">FilterPolicyScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy_scope SnsTopicSubscription#filter_policy_scope}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#id SnsTopicSubscription#id}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.rawMessageDelivery">RawMessageDelivery</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#raw_message_delivery SnsTopicSubscription#raw_message_delivery}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.redrivePolicy">RedrivePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#redrive_policy SnsTopicSubscription#redrive_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.subscriptionRoleArn">SubscriptionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#subscription_role_arn SnsTopicSubscription#subscription_role_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint SnsTopicSubscription#endpoint}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#protocol SnsTopicSubscription#protocol}.

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.topicArn"></a>

```csharp
public string TopicArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#topic_arn SnsTopicSubscription#topic_arn}.

---

##### `ConfirmationTimeoutInMinutes`<sup>Optional</sup> <a name="ConfirmationTimeoutInMinutes" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.confirmationTimeoutInMinutes"></a>

```csharp
public double ConfirmationTimeoutInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}.

---

##### `DeliveryPolicy`<sup>Optional</sup> <a name="DeliveryPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.deliveryPolicy"></a>

```csharp
public string DeliveryPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#delivery_policy SnsTopicSubscription#delivery_policy}.

---

##### `EndpointAutoConfirms`<sup>Optional</sup> <a name="EndpointAutoConfirms" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpointAutoConfirms"></a>

```csharp
public object EndpointAutoConfirms { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}.

---

##### `FilterPolicy`<sup>Optional</sup> <a name="FilterPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicy"></a>

```csharp
public string FilterPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy SnsTopicSubscription#filter_policy}.

---

##### `FilterPolicyScope`<sup>Optional</sup> <a name="FilterPolicyScope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicyScope"></a>

```csharp
public string FilterPolicyScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy_scope SnsTopicSubscription#filter_policy_scope}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#id SnsTopicSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RawMessageDelivery`<sup>Optional</sup> <a name="RawMessageDelivery" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.rawMessageDelivery"></a>

```csharp
public object RawMessageDelivery { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#raw_message_delivery SnsTopicSubscription#raw_message_delivery}.

---

##### `RedrivePolicy`<sup>Optional</sup> <a name="RedrivePolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.redrivePolicy"></a>

```csharp
public string RedrivePolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#redrive_policy SnsTopicSubscription#redrive_policy}.

---

##### `SubscriptionRoleArn`<sup>Optional</sup> <a name="SubscriptionRoleArn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.subscriptionRoleArn"></a>

```csharp
public string SubscriptionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#subscription_role_arn SnsTopicSubscription#subscription_role_arn}.

---



