# `snsTopicSubscription` Submodule <a name="`snsTopicSubscription` Submodule" id="@cdktf/provider-aws.snsTopicSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopicSubscription <a name="SnsTopicSubscription" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription aws_sns_topic_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snstopicsubscription"

snstopicsubscription.NewSnsTopicSubscription(scope Construct, id *string, config SnsTopicSubscriptionConfig) SnsTopicSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig">SnsTopicSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetConfirmationTimeoutInMinutes` <a name="ResetConfirmationTimeoutInMinutes" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetConfirmationTimeoutInMinutes"></a>

```go
func ResetConfirmationTimeoutInMinutes()
```

##### `ResetDeliveryPolicy` <a name="ResetDeliveryPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetDeliveryPolicy"></a>

```go
func ResetDeliveryPolicy()
```

##### `ResetEndpointAutoConfirms` <a name="ResetEndpointAutoConfirms" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetEndpointAutoConfirms"></a>

```go
func ResetEndpointAutoConfirms()
```

##### `ResetFilterPolicy` <a name="ResetFilterPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicy"></a>

```go
func ResetFilterPolicy()
```

##### `ResetFilterPolicyScope` <a name="ResetFilterPolicyScope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetFilterPolicyScope"></a>

```go
func ResetFilterPolicyScope()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetId"></a>

```go
func ResetId()
```

##### `ResetRawMessageDelivery` <a name="ResetRawMessageDelivery" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetRawMessageDelivery"></a>

```go
func ResetRawMessageDelivery()
```

##### `ResetRedrivePolicy` <a name="ResetRedrivePolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetRedrivePolicy"></a>

```go
func ResetRedrivePolicy()
```

##### `ResetSubscriptionRoleArn` <a name="ResetSubscriptionRoleArn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.resetSubscriptionRoleArn"></a>

```go
func ResetSubscriptionRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snstopicsubscription"

snstopicsubscription.SnsTopicSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snstopicsubscription"

snstopicsubscription.SnsTopicSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snstopicsubscription"

snstopicsubscription.SnsTopicSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationWasAuthenticated">ConfirmationWasAuthenticated</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.pendingConfirmation">PendingConfirmation</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutesInput">ConfirmationTimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicyInput">DeliveryPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirmsInput">EndpointAutoConfirmsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyInput">FilterPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScopeInput">FilterPolicyScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDeliveryInput">RawMessageDeliveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicyInput">RedrivePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArnInput">SubscriptionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArnInput">TopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutes">ConfirmationTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicy">DeliveryPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirms">EndpointAutoConfirms</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicy">FilterPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScope">FilterPolicyScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDelivery">RawMessageDelivery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicy">RedrivePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArn">SubscriptionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ConfirmationWasAuthenticated`<sup>Required</sup> <a name="ConfirmationWasAuthenticated" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationWasAuthenticated"></a>

```go
func ConfirmationWasAuthenticated() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `PendingConfirmation`<sup>Required</sup> <a name="PendingConfirmation" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.pendingConfirmation"></a>

```go
func PendingConfirmation() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ConfirmationTimeoutInMinutesInput`<sup>Optional</sup> <a name="ConfirmationTimeoutInMinutesInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutesInput"></a>

```go
func ConfirmationTimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `DeliveryPolicyInput`<sup>Optional</sup> <a name="DeliveryPolicyInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicyInput"></a>

```go
func DeliveryPolicyInput() *string
```

- *Type:* *string

---

##### `EndpointAutoConfirmsInput`<sup>Optional</sup> <a name="EndpointAutoConfirmsInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirmsInput"></a>

```go
func EndpointAutoConfirmsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `FilterPolicyInput`<sup>Optional</sup> <a name="FilterPolicyInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyInput"></a>

```go
func FilterPolicyInput() *string
```

- *Type:* *string

---

##### `FilterPolicyScopeInput`<sup>Optional</sup> <a name="FilterPolicyScopeInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScopeInput"></a>

```go
func FilterPolicyScopeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RawMessageDeliveryInput`<sup>Optional</sup> <a name="RawMessageDeliveryInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDeliveryInput"></a>

```go
func RawMessageDeliveryInput() interface{}
```

- *Type:* interface{}

---

##### `RedrivePolicyInput`<sup>Optional</sup> <a name="RedrivePolicyInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicyInput"></a>

```go
func RedrivePolicyInput() *string
```

- *Type:* *string

---

##### `SubscriptionRoleArnInput`<sup>Optional</sup> <a name="SubscriptionRoleArnInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArnInput"></a>

```go
func SubscriptionRoleArnInput() *string
```

- *Type:* *string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArnInput"></a>

```go
func TopicArnInput() *string
```

- *Type:* *string

---

##### `ConfirmationTimeoutInMinutes`<sup>Required</sup> <a name="ConfirmationTimeoutInMinutes" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.confirmationTimeoutInMinutes"></a>

```go
func ConfirmationTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `DeliveryPolicy`<sup>Required</sup> <a name="DeliveryPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.deliveryPolicy"></a>

```go
func DeliveryPolicy() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `EndpointAutoConfirms`<sup>Required</sup> <a name="EndpointAutoConfirms" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.endpointAutoConfirms"></a>

```go
func EndpointAutoConfirms() interface{}
```

- *Type:* interface{}

---

##### `FilterPolicy`<sup>Required</sup> <a name="FilterPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicy"></a>

```go
func FilterPolicy() *string
```

- *Type:* *string

---

##### `FilterPolicyScope`<sup>Required</sup> <a name="FilterPolicyScope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.filterPolicyScope"></a>

```go
func FilterPolicyScope() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RawMessageDelivery`<sup>Required</sup> <a name="RawMessageDelivery" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.rawMessageDelivery"></a>

```go
func RawMessageDelivery() interface{}
```

- *Type:* interface{}

---

##### `RedrivePolicy`<sup>Required</sup> <a name="RedrivePolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.redrivePolicy"></a>

```go
func RedrivePolicy() *string
```

- *Type:* *string

---

##### `SubscriptionRoleArn`<sup>Required</sup> <a name="SubscriptionRoleArn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.subscriptionRoleArn"></a>

```go
func SubscriptionRoleArn() *string
```

- *Type:* *string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicSubscriptionConfig <a name="SnsTopicSubscriptionConfig" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/snstopicsubscription"

&snstopicsubscription.SnsTopicSubscriptionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Endpoint: *string,
	Protocol: *string,
	TopicArn: *string,
	ConfirmationTimeoutInMinutes: *f64,
	DeliveryPolicy: *string,
	EndpointAutoConfirms: interface{},
	FilterPolicy: *string,
	FilterPolicyScope: *string,
	Id: *string,
	RawMessageDelivery: interface{},
	RedrivePolicy: *string,
	SubscriptionRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint SnsTopicSubscription#endpoint}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#protocol SnsTopicSubscription#protocol}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.topicArn">TopicArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#topic_arn SnsTopicSubscription#topic_arn}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.confirmationTimeoutInMinutes">ConfirmationTimeoutInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.deliveryPolicy">DeliveryPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#delivery_policy SnsTopicSubscription#delivery_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpointAutoConfirms">EndpointAutoConfirms</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicy">FilterPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy SnsTopicSubscription#filter_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicyScope">FilterPolicyScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy_scope SnsTopicSubscription#filter_policy_scope}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#id SnsTopicSubscription#id}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.rawMessageDelivery">RawMessageDelivery</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#raw_message_delivery SnsTopicSubscription#raw_message_delivery}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.redrivePolicy">RedrivePolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#redrive_policy SnsTopicSubscription#redrive_policy}. |
| <code><a href="#@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.subscriptionRoleArn">SubscriptionRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#subscription_role_arn SnsTopicSubscription#subscription_role_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint SnsTopicSubscription#endpoint}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#protocol SnsTopicSubscription#protocol}.

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.topicArn"></a>

```go
TopicArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#topic_arn SnsTopicSubscription#topic_arn}.

---

##### `ConfirmationTimeoutInMinutes`<sup>Optional</sup> <a name="ConfirmationTimeoutInMinutes" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.confirmationTimeoutInMinutes"></a>

```go
ConfirmationTimeoutInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#confirmation_timeout_in_minutes SnsTopicSubscription#confirmation_timeout_in_minutes}.

---

##### `DeliveryPolicy`<sup>Optional</sup> <a name="DeliveryPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.deliveryPolicy"></a>

```go
DeliveryPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#delivery_policy SnsTopicSubscription#delivery_policy}.

---

##### `EndpointAutoConfirms`<sup>Optional</sup> <a name="EndpointAutoConfirms" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.endpointAutoConfirms"></a>

```go
EndpointAutoConfirms interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#endpoint_auto_confirms SnsTopicSubscription#endpoint_auto_confirms}.

---

##### `FilterPolicy`<sup>Optional</sup> <a name="FilterPolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicy"></a>

```go
FilterPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy SnsTopicSubscription#filter_policy}.

---

##### `FilterPolicyScope`<sup>Optional</sup> <a name="FilterPolicyScope" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.filterPolicyScope"></a>

```go
FilterPolicyScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#filter_policy_scope SnsTopicSubscription#filter_policy_scope}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#id SnsTopicSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RawMessageDelivery`<sup>Optional</sup> <a name="RawMessageDelivery" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.rawMessageDelivery"></a>

```go
RawMessageDelivery interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#raw_message_delivery SnsTopicSubscription#raw_message_delivery}.

---

##### `RedrivePolicy`<sup>Optional</sup> <a name="RedrivePolicy" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.redrivePolicy"></a>

```go
RedrivePolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#redrive_policy SnsTopicSubscription#redrive_policy}.

---

##### `SubscriptionRoleArn`<sup>Optional</sup> <a name="SubscriptionRoleArn" id="@cdktf/provider-aws.snsTopicSubscription.SnsTopicSubscriptionConfig.property.subscriptionRoleArn"></a>

```go
SubscriptionRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic_subscription#subscription_role_arn SnsTopicSubscription#subscription_role_arn}.

---



