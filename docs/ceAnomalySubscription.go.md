# `ceAnomalySubscription` Submodule <a name="`ceAnomalySubscription` Submodule" id="@cdktf/provider-aws.ceAnomalySubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CeAnomalySubscription <a name="CeAnomalySubscription" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription aws_ce_anomaly_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscription(scope Construct, id *string, config CeAnomalySubscriptionConfig) CeAnomalySubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig">CeAnomalySubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig">CeAnomalySubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putSubscriber">PutSubscriber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression">PutThresholdExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThreshold">ResetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThresholdExpression">ResetThresholdExpression</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSubscriber` <a name="PutSubscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putSubscriber"></a>

```go
func PutSubscriber(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putSubscriber.parameter.value"></a>

- *Type:* interface{}

---

##### `PutThresholdExpression` <a name="PutThresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression"></a>

```go
func PutThresholdExpression(value CeAnomalySubscriptionThresholdExpression)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.putThresholdExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThreshold"></a>

```go
func ResetThreshold()
```

##### `ResetThresholdExpression` <a name="ResetThresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.resetThresholdExpression"></a>

```go
func ResetThresholdExpression()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.CeAnomalySubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.CeAnomalySubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.CeAnomalySubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriber">Subscriber</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList">CeAnomalySubscriptionSubscriberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpression">ThresholdExpression</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference">CeAnomalySubscriptionThresholdExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequencyInput">FrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnListInput">MonitorArnListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriberInput">SubscriberInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpressionInput">ThresholdExpressionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnList">MonitorArnList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Subscriber`<sup>Required</sup> <a name="Subscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriber"></a>

```go
func Subscriber() CeAnomalySubscriptionSubscriberList
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList">CeAnomalySubscriptionSubscriberList</a>

---

##### `ThresholdExpression`<sup>Required</sup> <a name="ThresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpression"></a>

```go
func ThresholdExpression() CeAnomalySubscriptionThresholdExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference">CeAnomalySubscriptionThresholdExpressionOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequencyInput"></a>

```go
func FrequencyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MonitorArnListInput`<sup>Optional</sup> <a name="MonitorArnListInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnListInput"></a>

```go
func MonitorArnListInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SubscriberInput`<sup>Optional</sup> <a name="SubscriberInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.subscriberInput"></a>

```go
func SubscriberInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ThresholdExpressionInput`<sup>Optional</sup> <a name="ThresholdExpressionInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdExpressionInput"></a>

```go
func ThresholdExpressionInput() CeAnomalySubscriptionThresholdExpression
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MonitorArnList`<sup>Required</sup> <a name="MonitorArnList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.monitorArnList"></a>

```go
func MonitorArnList() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CeAnomalySubscriptionConfig <a name="CeAnomalySubscriptionConfig" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Frequency: *string,
	MonitorArnList: *[]*string,
	Name: *string,
	Subscriber: interface{},
	AccountId: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Threshold: *f64,
	ThresholdExpression: github.com/cdktf/cdktf-provider-aws-go/aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.frequency">Frequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.monitorArnList">MonitorArnList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#name CeAnomalySubscription#name}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscriber">Subscriber</a></code> | <code>interface{}</code> | subscriber block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#account_id CeAnomalySubscription#account_id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#id CeAnomalySubscription#id}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags_all CeAnomalySubscription#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.threshold">Threshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold CeAnomalySubscription#threshold}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.thresholdExpression">ThresholdExpression</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a></code> | threshold_expression block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.frequency"></a>

```go
Frequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}.

---

##### `MonitorArnList`<sup>Required</sup> <a name="MonitorArnList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.monitorArnList"></a>

```go
MonitorArnList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#name CeAnomalySubscription#name}.

---

##### `Subscriber`<sup>Required</sup> <a name="Subscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.subscriber"></a>

```go
Subscriber interface{}
```

- *Type:* interface{}

subscriber block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#subscriber CeAnomalySubscription#subscriber}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#account_id CeAnomalySubscription#account_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#id CeAnomalySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags_all CeAnomalySubscription#tags_all}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold CeAnomalySubscription#threshold}.

---

##### `ThresholdExpression`<sup>Optional</sup> <a name="ThresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionConfig.property.thresholdExpression"></a>

```go
ThresholdExpression CeAnomalySubscriptionThresholdExpression
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

threshold_expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#threshold_expression CeAnomalySubscription#threshold_expression}

---

### CeAnomalySubscriptionSubscriber <a name="CeAnomalySubscriptionSubscriber" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionSubscriber {
	Address: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#address CeAnomalySubscription#address}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#type CeAnomalySubscription#type}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#address CeAnomalySubscription#address}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriber.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#type CeAnomalySubscription#type}.

---

### CeAnomalySubscriptionThresholdExpression <a name="CeAnomalySubscriptionThresholdExpression" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpression {
	And: interface{},
	CostCategory: github.com/cdktf/cdktf-provider-aws-go/aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory,
	Dimension: github.com/cdktf/cdktf-provider-aws-go/aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension,
	Not: github.com/cdktf/cdktf-provider-aws-go/aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot,
	Or: interface{},
	Tags: github.com/cdktf/cdktf-provider-aws-go/aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.and">And</a></code> | <code>interface{}</code> | and block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.not">Not</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.or">Or</a></code> | <code>interface{}</code> | or block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a></code> | tags block. |

---

##### `And`<sup>Optional</sup> <a name="And" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.and"></a>

```go
And interface{}
```

- *Type:* interface{}

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#and CeAnomalySubscription#and}

---

##### `CostCategory`<sup>Optional</sup> <a name="CostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.costCategory"></a>

```go
CostCategory CeAnomalySubscriptionThresholdExpressionCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.dimension"></a>

```go
Dimension CeAnomalySubscriptionThresholdExpressionDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `Not`<sup>Optional</sup> <a name="Not" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.not"></a>

```go
Not CeAnomalySubscriptionThresholdExpressionNot
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

not block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#not CeAnomalySubscription#not}

---

##### `Or`<sup>Optional</sup> <a name="Or" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.or"></a>

```go
Or interface{}
```

- *Type:* interface{}

or block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#or CeAnomalySubscription#or}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression.property.tags"></a>

```go
Tags CeAnomalySubscriptionThresholdExpressionTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionAnd <a name="CeAnomalySubscriptionThresholdExpressionAnd" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpressionAnd {
	CostCategory: github.com/cdktf/cdktf-provider-aws-go/aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory,
	Dimension: github.com/cdktf/cdktf-provider-aws-go/aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension,
	Tags: github.com/cdktf/cdktf-provider-aws-go/aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a></code> | tags block. |

---

##### `CostCategory`<sup>Optional</sup> <a name="CostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.costCategory"></a>

```go
CostCategory CeAnomalySubscriptionThresholdExpressionAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.dimension"></a>

```go
Dimension CeAnomalySubscriptionThresholdExpressionAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAnd.property.tags"></a>

```go
Tags CeAnomalySubscriptionThresholdExpressionAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionAndCostCategory <a name="CeAnomalySubscriptionThresholdExpressionAndCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionAndDimension <a name="CeAnomalySubscriptionThresholdExpressionAndDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpressionAndDimension {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionAndTags <a name="CeAnomalySubscriptionThresholdExpressionAndTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpressionAndTags {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionCostCategory <a name="CeAnomalySubscriptionThresholdExpressionCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpressionCostCategory {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionDimension <a name="CeAnomalySubscriptionThresholdExpressionDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpressionDimension {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionNot <a name="CeAnomalySubscriptionThresholdExpressionNot" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpressionNot {
	CostCategory: github.com/cdktf/cdktf-provider-aws-go/aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory,
	Dimension: github.com/cdktf/cdktf-provider-aws-go/aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension,
	Tags: github.com/cdktf/cdktf-provider-aws-go/aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a></code> | tags block. |

---

##### `CostCategory`<sup>Optional</sup> <a name="CostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.costCategory"></a>

```go
CostCategory CeAnomalySubscriptionThresholdExpressionNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.dimension"></a>

```go
Dimension CeAnomalySubscriptionThresholdExpressionNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot.property.tags"></a>

```go
Tags CeAnomalySubscriptionThresholdExpressionNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionNotCostCategory <a name="CeAnomalySubscriptionThresholdExpressionNotCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionNotDimension <a name="CeAnomalySubscriptionThresholdExpressionNotDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpressionNotDimension {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionNotTags <a name="CeAnomalySubscriptionThresholdExpressionNotTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpressionNotTags {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionOr <a name="CeAnomalySubscriptionThresholdExpressionOr" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpressionOr {
	CostCategory: github.com/cdktf/cdktf-provider-aws-go/aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory,
	Dimension: github.com/cdktf/cdktf-provider-aws-go/aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension,
	Tags: github.com/cdktf/cdktf-provider-aws-go/aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a></code> | tags block. |

---

##### `CostCategory`<sup>Optional</sup> <a name="CostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.costCategory"></a>

```go
CostCategory CeAnomalySubscriptionThresholdExpressionOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.dimension"></a>

```go
Dimension CeAnomalySubscriptionThresholdExpressionOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOr.property.tags"></a>

```go
Tags CeAnomalySubscriptionThresholdExpressionOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#tags CeAnomalySubscription#tags}

---

### CeAnomalySubscriptionThresholdExpressionOrCostCategory <a name="CeAnomalySubscriptionThresholdExpressionOrCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionOrDimension <a name="CeAnomalySubscriptionThresholdExpressionOrDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpressionOrDimension {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionOrTags <a name="CeAnomalySubscriptionThresholdExpressionOrTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpressionOrTags {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

### CeAnomalySubscriptionThresholdExpressionTags <a name="CeAnomalySubscriptionThresholdExpressionTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

&ceanomalysubscription.CeAnomalySubscriptionThresholdExpressionTags {
	Key: *string,
	MatchOptions: *[]*string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#key CeAnomalySubscription#key}.

---

##### `MatchOptions`<sup>Optional</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.matchOptions"></a>

```go
MatchOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ce_anomaly_subscription#values CeAnomalySubscription#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### CeAnomalySubscriptionSubscriberList <a name="CeAnomalySubscriptionSubscriberList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionSubscriberList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CeAnomalySubscriptionSubscriberList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.get"></a>

```go
func Get(index *f64) CeAnomalySubscriptionSubscriberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CeAnomalySubscriptionSubscriberOutputReference <a name="CeAnomalySubscriptionSubscriberOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionSubscriberOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CeAnomalySubscriptionSubscriberOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionSubscriberOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() CeAnomalySubscriptionThresholdExpressionAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() CeAnomalySubscriptionThresholdExpressionAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionAndList <a name="CeAnomalySubscriptionThresholdExpressionAndList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionAndList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CeAnomalySubscriptionThresholdExpressionAndList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.get"></a>

```go
func Get(index *f64) CeAnomalySubscriptionThresholdExpressionAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CeAnomalySubscriptionThresholdExpressionAndOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionAndOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CeAnomalySubscriptionThresholdExpressionAndOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putCostCategory">PutCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetCostCategory">ResetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCostCategory` <a name="PutCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putCostCategory"></a>

```go
func PutCostCategory(value CeAnomalySubscriptionThresholdExpressionAndCostCategory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a>

---

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putDimension"></a>

```go
func PutDimension(value CeAnomalySubscriptionThresholdExpressionAndDimension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a>

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putTags"></a>

```go
func PutTags(value CeAnomalySubscriptionThresholdExpressionAndTags)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a>

---

##### `ResetCostCategory` <a name="ResetCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetCostCategory"></a>

```go
func ResetCostCategory()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference">CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategoryInput">CostCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tagsInput">TagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategory"></a>

```go
func CostCategory() CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimension"></a>

```go
func Dimension() CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tags"></a>

```go
func Tags() CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference">CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference</a>

---

##### `CostCategoryInput`<sup>Optional</sup> <a name="CostCategoryInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.costCategoryInput"></a>

```go
func CostCategoryInput() CeAnomalySubscriptionThresholdExpressionAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndCostCategory">CeAnomalySubscriptionThresholdExpressionAndCostCategory</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() CeAnomalySubscriptionThresholdExpressionAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndDimension">CeAnomalySubscriptionThresholdExpressionAndDimension</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.tagsInput"></a>

```go
func TagsInput() CeAnomalySubscriptionThresholdExpressionAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionAndTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() CeAnomalySubscriptionThresholdExpressionAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndTags">CeAnomalySubscriptionThresholdExpressionAndTags</a>

---


### CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() CeAnomalySubscriptionThresholdExpressionCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CeAnomalySubscriptionThresholdExpressionDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() CeAnomalySubscriptionThresholdExpressionDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() CeAnomalySubscriptionThresholdExpressionNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() CeAnomalySubscriptionThresholdExpressionNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionNotOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionNotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CeAnomalySubscriptionThresholdExpressionNotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putCostCategory">PutCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetCostCategory">ResetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCostCategory` <a name="PutCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putCostCategory"></a>

```go
func PutCostCategory(value CeAnomalySubscriptionThresholdExpressionNotCostCategory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

---

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putDimension"></a>

```go
func PutDimension(value CeAnomalySubscriptionThresholdExpressionNotDimension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putTags"></a>

```go
func PutTags(value CeAnomalySubscriptionThresholdExpressionNotTags)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

---

##### `ResetCostCategory` <a name="ResetCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetCostCategory"></a>

```go
func ResetCostCategory()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference">CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategoryInput">CostCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tagsInput">TagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategory"></a>

```go
func CostCategory() CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimension"></a>

```go
func Dimension() CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tags"></a>

```go
func Tags() CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference">CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference</a>

---

##### `CostCategoryInput`<sup>Optional</sup> <a name="CostCategoryInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.costCategoryInput"></a>

```go
func CostCategoryInput() CeAnomalySubscriptionThresholdExpressionNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotCostCategory">CeAnomalySubscriptionThresholdExpressionNotCostCategory</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() CeAnomalySubscriptionThresholdExpressionNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotDimension">CeAnomalySubscriptionThresholdExpressionNotDimension</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.tagsInput"></a>

```go
func TagsInput() CeAnomalySubscriptionThresholdExpressionNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference.property.internalValue"></a>

```go
func InternalValue() CeAnomalySubscriptionThresholdExpressionNot
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

---


### CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionNotTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() CeAnomalySubscriptionThresholdExpressionNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotTags">CeAnomalySubscriptionThresholdExpressionNotTags</a>

---


### CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference.property.internalValue"></a>

```go
func InternalValue() CeAnomalySubscriptionThresholdExpressionOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a>

---


### CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() CeAnomalySubscriptionThresholdExpressionOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a>

---


### CeAnomalySubscriptionThresholdExpressionOrList <a name="CeAnomalySubscriptionThresholdExpressionOrList" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionOrList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CeAnomalySubscriptionThresholdExpressionOrList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.get"></a>

```go
func Get(index *f64) CeAnomalySubscriptionThresholdExpressionOrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CeAnomalySubscriptionThresholdExpressionOrOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionOrOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CeAnomalySubscriptionThresholdExpressionOrOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putCostCategory">PutCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetCostCategory">ResetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCostCategory` <a name="PutCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putCostCategory"></a>

```go
func PutCostCategory(value CeAnomalySubscriptionThresholdExpressionOrCostCategory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a>

---

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putDimension"></a>

```go
func PutDimension(value CeAnomalySubscriptionThresholdExpressionOrDimension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a>

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putTags"></a>

```go
func PutTags(value CeAnomalySubscriptionThresholdExpressionOrTags)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a>

---

##### `ResetCostCategory` <a name="ResetCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetCostCategory"></a>

```go
func ResetCostCategory()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference">CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategoryInput">CostCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tagsInput">TagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategory"></a>

```go
func CostCategory() CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimension"></a>

```go
func Dimension() CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tags"></a>

```go
func Tags() CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference">CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference</a>

---

##### `CostCategoryInput`<sup>Optional</sup> <a name="CostCategoryInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.costCategoryInput"></a>

```go
func CostCategoryInput() CeAnomalySubscriptionThresholdExpressionOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrCostCategory">CeAnomalySubscriptionThresholdExpressionOrCostCategory</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() CeAnomalySubscriptionThresholdExpressionOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrDimension">CeAnomalySubscriptionThresholdExpressionOrDimension</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.tagsInput"></a>

```go
func TagsInput() CeAnomalySubscriptionThresholdExpressionOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionOrTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() CeAnomalySubscriptionThresholdExpressionOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrTags">CeAnomalySubscriptionThresholdExpressionOrTags</a>

---


### CeAnomalySubscriptionThresholdExpressionOutputReference <a name="CeAnomalySubscriptionThresholdExpressionOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CeAnomalySubscriptionThresholdExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putAnd">PutAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putCostCategory">PutCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putNot">PutNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putOr">PutOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetAnd">ResetAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetCostCategory">ResetCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetNot">ResetNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetOr">ResetOr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnd` <a name="PutAnd" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putAnd"></a>

```go
func PutAnd(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putAnd.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCostCategory` <a name="PutCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putCostCategory"></a>

```go
func PutCostCategory(value CeAnomalySubscriptionThresholdExpressionCostCategory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putCostCategory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

---

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putDimension"></a>

```go
func PutDimension(value CeAnomalySubscriptionThresholdExpressionDimension)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putDimension.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

---

##### `PutNot` <a name="PutNot" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putNot"></a>

```go
func PutNot(value CeAnomalySubscriptionThresholdExpressionNot)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putNot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

---

##### `PutOr` <a name="PutOr" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putOr"></a>

```go
func PutOr(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putOr.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putTags"></a>

```go
func PutTags(value CeAnomalySubscriptionThresholdExpressionTags)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

---

##### `ResetAnd` <a name="ResetAnd" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetAnd"></a>

```go
func ResetAnd()
```

##### `ResetCostCategory` <a name="ResetCostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetCostCategory"></a>

```go
func ResetCostCategory()
```

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetNot` <a name="ResetNot" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetNot"></a>

```go
func ResetNot()
```

##### `ResetOr` <a name="ResetOr" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetOr"></a>

```go
func ResetOr()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.and">And</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList">CeAnomalySubscriptionThresholdExpressionAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategory">CostCategory</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.not">Not</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference">CeAnomalySubscriptionThresholdExpressionNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.or">Or</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList">CeAnomalySubscriptionThresholdExpressionOrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference">CeAnomalySubscriptionThresholdExpressionTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.andInput">AndInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategoryInput">CostCategoryInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimensionInput">DimensionInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.notInput">NotInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.orInput">OrInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tagsInput">TagsInput</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `And`<sup>Required</sup> <a name="And" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.and"></a>

```go
func And() CeAnomalySubscriptionThresholdExpressionAndList
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionAndList">CeAnomalySubscriptionThresholdExpressionAndList</a>

---

##### `CostCategory`<sup>Required</sup> <a name="CostCategory" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategory"></a>

```go
func CostCategory() CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference">CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimension"></a>

```go
func Dimension() CeAnomalySubscriptionThresholdExpressionDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimensionOutputReference">CeAnomalySubscriptionThresholdExpressionDimensionOutputReference</a>

---

##### `Not`<sup>Required</sup> <a name="Not" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.not"></a>

```go
func Not() CeAnomalySubscriptionThresholdExpressionNotOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNotOutputReference">CeAnomalySubscriptionThresholdExpressionNotOutputReference</a>

---

##### `Or`<sup>Required</sup> <a name="Or" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.or"></a>

```go
func Or() CeAnomalySubscriptionThresholdExpressionOrList
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOrList">CeAnomalySubscriptionThresholdExpressionOrList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tags"></a>

```go
func Tags() CeAnomalySubscriptionThresholdExpressionTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference">CeAnomalySubscriptionThresholdExpressionTagsOutputReference</a>

---

##### `AndInput`<sup>Optional</sup> <a name="AndInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.andInput"></a>

```go
func AndInput() interface{}
```

- *Type:* interface{}

---

##### `CostCategoryInput`<sup>Optional</sup> <a name="CostCategoryInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.costCategoryInput"></a>

```go
func CostCategoryInput() CeAnomalySubscriptionThresholdExpressionCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionCostCategory">CeAnomalySubscriptionThresholdExpressionCostCategory</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() CeAnomalySubscriptionThresholdExpressionDimension
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionDimension">CeAnomalySubscriptionThresholdExpressionDimension</a>

---

##### `NotInput`<sup>Optional</sup> <a name="NotInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.notInput"></a>

```go
func NotInput() CeAnomalySubscriptionThresholdExpressionNot
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionNot">CeAnomalySubscriptionThresholdExpressionNot</a>

---

##### `OrInput`<sup>Optional</sup> <a name="OrInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.orInput"></a>

```go
func OrInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.tagsInput"></a>

```go
func TagsInput() CeAnomalySubscriptionThresholdExpressionTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() CeAnomalySubscriptionThresholdExpression
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpression">CeAnomalySubscriptionThresholdExpression</a>

---


### CeAnomalySubscriptionThresholdExpressionTagsOutputReference <a name="CeAnomalySubscriptionThresholdExpressionTagsOutputReference" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/ceanomalysubscription"

ceanomalysubscription.NewCeAnomalySubscriptionThresholdExpressionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CeAnomalySubscriptionThresholdExpressionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetMatchOptions">ResetMatchOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMatchOptions` <a name="ResetMatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetMatchOptions"></a>

```go
func ResetMatchOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptionsInput">MatchOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptions">MatchOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MatchOptionsInput`<sup>Optional</sup> <a name="MatchOptionsInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptionsInput"></a>

```go
func MatchOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MatchOptions`<sup>Required</sup> <a name="MatchOptions" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.matchOptions"></a>

```go
func MatchOptions() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() CeAnomalySubscriptionThresholdExpressionTags
```

- *Type:* <a href="#@cdktf/provider-aws.ceAnomalySubscription.CeAnomalySubscriptionThresholdExpressionTags">CeAnomalySubscriptionThresholdExpressionTags</a>

---



