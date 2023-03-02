# `gameliftGameSessionQueue` Submodule <a name="`gameliftGameSessionQueue` Submodule" id="@cdktf/provider-aws.gameliftGameSessionQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftGameSessionQueue <a name="GameliftGameSessionQueue" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue aws_gamelift_game_session_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgamesessionqueue"

gameliftgamesessionqueue.NewGameliftGameSessionQueue(scope Construct, id *string, config GameliftGameSessionQueueConfig) GameliftGameSessionQueue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig">GameliftGameSessionQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig">GameliftGameSessionQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicy">PutPlayerLatencyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget">ResetNotificationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicy">ResetPlayerLatencyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPlayerLatencyPolicy` <a name="PutPlayerLatencyPolicy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicy"></a>

```go
func PutPlayerLatencyPolicy(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.putPlayerLatencyPolicy.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetId"></a>

```go
func ResetId()
```

##### `ResetNotificationTarget` <a name="ResetNotificationTarget" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetNotificationTarget"></a>

```go
func ResetNotificationTarget()
```

##### `ResetPlayerLatencyPolicy` <a name="ResetPlayerLatencyPolicy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetPlayerLatencyPolicy"></a>

```go
func ResetPlayerLatencyPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.resetTimeoutInSeconds"></a>

```go
func ResetTimeoutInSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgamesessionqueue"

gameliftgamesessionqueue.GameliftGameSessionQueue_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgamesessionqueue"

gameliftgamesessionqueue.GameliftGameSessionQueue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgamesessionqueue"

gameliftgamesessionqueue.GameliftGameSessionQueue_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicy">PlayerLatencyPolicy</a></code> | <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList">GameliftGameSessionQueuePlayerLatencyPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput">DestinationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput">NotificationTargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicyInput">PlayerLatencyPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations">Destinations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget">NotificationTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `PlayerLatencyPolicy`<sup>Required</sup> <a name="PlayerLatencyPolicy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicy"></a>

```go
func PlayerLatencyPolicy() GameliftGameSessionQueuePlayerLatencyPolicyList
```

- *Type:* <a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList">GameliftGameSessionQueuePlayerLatencyPolicyList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinationsInput"></a>

```go
func DestinationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationTargetInput`<sup>Optional</sup> <a name="NotificationTargetInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTargetInput"></a>

```go
func NotificationTargetInput() *string
```

- *Type:* *string

---

##### `PlayerLatencyPolicyInput`<sup>Optional</sup> <a name="PlayerLatencyPolicyInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.playerLatencyPolicyInput"></a>

```go
func PlayerLatencyPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSecondsInput"></a>

```go
func TimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.destinations"></a>

```go
func Destinations() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NotificationTarget`<sup>Required</sup> <a name="NotificationTarget" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.notificationTarget"></a>

```go
func NotificationTarget() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftGameSessionQueueConfig <a name="GameliftGameSessionQueueConfig" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgamesessionqueue"

&gameliftgamesessionqueue.GameliftGameSessionQueueConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Destinations: *[]*string,
	Id: *string,
	NotificationTarget: *string,
	PlayerLatencyPolicy: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#name GameliftGameSessionQueue#name}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations">Destinations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#id GameliftGameSessionQueue#id}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget">NotificationTarget</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicy">PlayerLatencyPolicy</a></code> | <code>interface{}</code> | player_latency_policy block. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags_all GameliftGameSessionQueue#tags_all}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#name GameliftGameSessionQueue#name}.

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.destinations"></a>

```go
Destinations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#id GameliftGameSessionQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationTarget`<sup>Optional</sup> <a name="NotificationTarget" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.notificationTarget"></a>

```go
NotificationTarget *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}.

---

##### `PlayerLatencyPolicy`<sup>Optional</sup> <a name="PlayerLatencyPolicy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.playerLatencyPolicy"></a>

```go
PlayerLatencyPolicy interface{}
```

- *Type:* interface{}

player_latency_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#player_latency_policy GameliftGameSessionQueue#player_latency_policy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#tags_all GameliftGameSessionQueue#tags_all}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueueConfig.property.timeoutInSeconds"></a>

```go
TimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}.

---

### GameliftGameSessionQueuePlayerLatencyPolicy <a name="GameliftGameSessionQueuePlayerLatencyPolicy" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgamesessionqueue"

&gameliftgamesessionqueue.GameliftGameSessionQueuePlayerLatencyPolicy {
	MaximumIndividualPlayerLatencyMilliseconds: *f64,
	PolicyDurationSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy.property.maximumIndividualPlayerLatencyMilliseconds">MaximumIndividualPlayerLatencyMilliseconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#maximum_individual_player_latency_milliseconds GameliftGameSessionQueue#maximum_individual_player_latency_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy.property.policyDurationSeconds">PolicyDurationSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#policy_duration_seconds GameliftGameSessionQueue#policy_duration_seconds}. |

---

##### `MaximumIndividualPlayerLatencyMilliseconds`<sup>Required</sup> <a name="MaximumIndividualPlayerLatencyMilliseconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```go
MaximumIndividualPlayerLatencyMilliseconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#maximum_individual_player_latency_milliseconds GameliftGameSessionQueue#maximum_individual_player_latency_milliseconds}.

---

##### `PolicyDurationSeconds`<sup>Optional</sup> <a name="PolicyDurationSeconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicy.property.policyDurationSeconds"></a>

```go
PolicyDurationSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_game_session_queue#policy_duration_seconds GameliftGameSessionQueue#policy_duration_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftGameSessionQueuePlayerLatencyPolicyList <a name="GameliftGameSessionQueuePlayerLatencyPolicyList" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgamesessionqueue"

gameliftgamesessionqueue.NewGameliftGameSessionQueuePlayerLatencyPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GameliftGameSessionQueuePlayerLatencyPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.get"></a>

```go
func Get(index *f64) GameliftGameSessionQueuePlayerLatencyPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GameliftGameSessionQueuePlayerLatencyPolicyOutputReference <a name="GameliftGameSessionQueuePlayerLatencyPolicyOutputReference" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gameliftgamesessionqueue"

gameliftgamesessionqueue.NewGameliftGameSessionQueuePlayerLatencyPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GameliftGameSessionQueuePlayerLatencyPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.resetPolicyDurationSeconds">ResetPolicyDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicyDurationSeconds` <a name="ResetPolicyDurationSeconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.resetPolicyDurationSeconds"></a>

```go
func ResetPolicyDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput">MaximumIndividualPlayerLatencyMillisecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.policyDurationSecondsInput">PolicyDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.maximumIndividualPlayerLatencyMilliseconds">MaximumIndividualPlayerLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.policyDurationSeconds">PolicyDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumIndividualPlayerLatencyMillisecondsInput`<sup>Optional</sup> <a name="MaximumIndividualPlayerLatencyMillisecondsInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.maximumIndividualPlayerLatencyMillisecondsInput"></a>

```go
func MaximumIndividualPlayerLatencyMillisecondsInput() *f64
```

- *Type:* *f64

---

##### `PolicyDurationSecondsInput`<sup>Optional</sup> <a name="PolicyDurationSecondsInput" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.policyDurationSecondsInput"></a>

```go
func PolicyDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `MaximumIndividualPlayerLatencyMilliseconds`<sup>Required</sup> <a name="MaximumIndividualPlayerLatencyMilliseconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.maximumIndividualPlayerLatencyMilliseconds"></a>

```go
func MaximumIndividualPlayerLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `PolicyDurationSeconds`<sup>Required</sup> <a name="PolicyDurationSeconds" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.policyDurationSeconds"></a>

```go
func PolicyDurationSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.gameliftGameSessionQueue.GameliftGameSessionQueuePlayerLatencyPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



