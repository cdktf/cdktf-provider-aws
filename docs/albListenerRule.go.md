# `albListenerRule` Submodule <a name="`albListenerRule` Submodule" id="@cdktf/provider-aws.albListenerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlbListenerRule <a name="AlbListenerRule" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule aws_alb_listener_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRule(scope Construct, id *string, config AlbListenerRuleConfig) AlbListenerRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig">AlbListenerRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig">AlbListenerRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.putAction"></a>

```go
func PutAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.putAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.putCondition"></a>

```go
func PutCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.putCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.resetId"></a>

```go
func ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.AlbListenerRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.AlbListenerRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.AlbListenerRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList">AlbListenerRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList">AlbListenerRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.conditionInput">ConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.listenerArnInput">ListenerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.listenerArn">ListenerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.action"></a>

```go
func Action() AlbListenerRuleActionList
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList">AlbListenerRuleActionList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.condition"></a>

```go
func Condition() AlbListenerRuleConditionList
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList">AlbListenerRuleConditionList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.conditionInput"></a>

```go
func ConditionInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListenerArnInput`<sup>Optional</sup> <a name="ListenerArnInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.listenerArnInput"></a>

```go
func ListenerArnInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.listenerArn"></a>

```go
func ListenerArn() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.albListenerRule.AlbListenerRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AlbListenerRuleAction <a name="AlbListenerRuleAction" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleAction {
	Type: *string,
	AuthenticateCognito: github.com/cdktf/cdktf-provider-aws-go/aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito,
	AuthenticateOidc: github.com/cdktf/cdktf-provider-aws-go/aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc,
	FixedResponse: github.com/cdktf/cdktf-provider-aws-go/aws.albListenerRule.AlbListenerRuleActionFixedResponse,
	Forward: github.com/cdktf/cdktf-provider-aws-go/aws.albListenerRule.AlbListenerRuleActionForward,
	Order: *f64,
	Redirect: github.com/cdktf/cdktf-provider-aws-go/aws.albListenerRule.AlbListenerRuleActionRedirect,
	TargetGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#type AlbListenerRule#type}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.authenticateCognito">AuthenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito">AlbListenerRuleActionAuthenticateCognito</a></code> | authenticate_cognito block. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.authenticateOidc">AuthenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc">AlbListenerRuleActionAuthenticateOidc</a></code> | authenticate_oidc block. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponse">AlbListenerRuleActionFixedResponse</a></code> | fixed_response block. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.forward">Forward</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForward">AlbListenerRuleActionForward</a></code> | forward block. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.order">Order</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#order AlbListenerRule#order}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect">AlbListenerRuleActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#target_group_arn AlbListenerRule#target_group_arn}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#type AlbListenerRule#type}.

---

##### `AuthenticateCognito`<sup>Optional</sup> <a name="AuthenticateCognito" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.authenticateCognito"></a>

```go
AuthenticateCognito AlbListenerRuleActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito">AlbListenerRuleActionAuthenticateCognito</a>

authenticate_cognito block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#authenticate_cognito AlbListenerRule#authenticate_cognito}

---

##### `AuthenticateOidc`<sup>Optional</sup> <a name="AuthenticateOidc" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.authenticateOidc"></a>

```go
AuthenticateOidc AlbListenerRuleActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc">AlbListenerRuleActionAuthenticateOidc</a>

authenticate_oidc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#authenticate_oidc AlbListenerRule#authenticate_oidc}

---

##### `FixedResponse`<sup>Optional</sup> <a name="FixedResponse" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.fixedResponse"></a>

```go
FixedResponse AlbListenerRuleActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponse">AlbListenerRuleActionFixedResponse</a>

fixed_response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#fixed_response AlbListenerRule#fixed_response}

---

##### `Forward`<sup>Optional</sup> <a name="Forward" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.forward"></a>

```go
Forward AlbListenerRuleActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForward">AlbListenerRuleActionForward</a>

forward block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#forward AlbListenerRule#forward}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#order AlbListenerRule#order}.

---

##### `Redirect`<sup>Optional</sup> <a name="Redirect" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.redirect"></a>

```go
Redirect AlbListenerRuleActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect">AlbListenerRuleActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#redirect AlbListenerRule#redirect}

---

##### `TargetGroupArn`<sup>Optional</sup> <a name="TargetGroupArn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleAction.property.targetGroupArn"></a>

```go
TargetGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#target_group_arn AlbListenerRule#target_group_arn}.

---

### AlbListenerRuleActionAuthenticateCognito <a name="AlbListenerRuleActionAuthenticateCognito" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleActionAuthenticateCognito {
	UserPoolArn: *string,
	UserPoolClientId: *string,
	UserPoolDomain: *string,
	AuthenticationRequestExtraParams: *map[string]*string,
	OnUnauthenticatedRequest: *string,
	Scope: *string,
	SessionCookieName: *string,
	SessionTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.userPoolArn">UserPoolArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#user_pool_arn AlbListenerRule#user_pool_arn}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.userPoolClientId">UserPoolClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#user_pool_client_id AlbListenerRule#user_pool_client_id}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.userPoolDomain">UserPoolDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#user_pool_domain AlbListenerRule#user_pool_domain}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#scope AlbListenerRule#scope}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#session_cookie_name AlbListenerRule#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#session_timeout AlbListenerRule#session_timeout}. |

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.userPoolArn"></a>

```go
UserPoolArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#user_pool_arn AlbListenerRule#user_pool_arn}.

---

##### `UserPoolClientId`<sup>Required</sup> <a name="UserPoolClientId" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.userPoolClientId"></a>

```go
UserPoolClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#user_pool_client_id AlbListenerRule#user_pool_client_id}.

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.userPoolDomain"></a>

```go
UserPoolDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#user_pool_domain AlbListenerRule#user_pool_domain}.

---

##### `AuthenticationRequestExtraParams`<sup>Optional</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.authenticationRequestExtraParams"></a>

```go
AuthenticationRequestExtraParams *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}.

---

##### `OnUnauthenticatedRequest`<sup>Optional</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.onUnauthenticatedRequest"></a>

```go
OnUnauthenticatedRequest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#scope AlbListenerRule#scope}.

---

##### `SessionCookieName`<sup>Optional</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.sessionCookieName"></a>

```go
SessionCookieName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#session_cookie_name AlbListenerRule#session_cookie_name}.

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito.property.sessionTimeout"></a>

```go
SessionTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#session_timeout AlbListenerRule#session_timeout}.

---

### AlbListenerRuleActionAuthenticateOidc <a name="AlbListenerRuleActionAuthenticateOidc" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleActionAuthenticateOidc {
	AuthorizationEndpoint: *string,
	ClientId: *string,
	ClientSecret: *string,
	Issuer: *string,
	TokenEndpoint: *string,
	UserInfoEndpoint: *string,
	AuthenticationRequestExtraParams: *map[string]*string,
	OnUnauthenticatedRequest: *string,
	Scope: *string,
	SessionCookieName: *string,
	SessionTimeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#authorization_endpoint AlbListenerRule#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#client_id AlbListenerRule#client_id}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#client_secret AlbListenerRule#client_secret}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#issuer AlbListenerRule#issuer}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#token_endpoint AlbListenerRule#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#user_info_endpoint AlbListenerRule#user_info_endpoint}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#scope AlbListenerRule#scope}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#session_cookie_name AlbListenerRule#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#session_timeout AlbListenerRule#session_timeout}. |

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.authorizationEndpoint"></a>

```go
AuthorizationEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#authorization_endpoint AlbListenerRule#authorization_endpoint}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#client_id AlbListenerRule#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#client_secret AlbListenerRule#client_secret}.

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#issuer AlbListenerRule#issuer}.

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#token_endpoint AlbListenerRule#token_endpoint}.

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.userInfoEndpoint"></a>

```go
UserInfoEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#user_info_endpoint AlbListenerRule#user_info_endpoint}.

---

##### `AuthenticationRequestExtraParams`<sup>Optional</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.authenticationRequestExtraParams"></a>

```go
AuthenticationRequestExtraParams *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}.

---

##### `OnUnauthenticatedRequest`<sup>Optional</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.onUnauthenticatedRequest"></a>

```go
OnUnauthenticatedRequest *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#scope AlbListenerRule#scope}.

---

##### `SessionCookieName`<sup>Optional</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.sessionCookieName"></a>

```go
SessionCookieName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#session_cookie_name AlbListenerRule#session_cookie_name}.

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc.property.sessionTimeout"></a>

```go
SessionTimeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#session_timeout AlbListenerRule#session_timeout}.

---

### AlbListenerRuleActionFixedResponse <a name="AlbListenerRuleActionFixedResponse" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponse.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleActionFixedResponse {
	ContentType: *string,
	MessageBody: *string,
	StatusCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponse.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#content_type AlbListenerRule#content_type}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponse.property.messageBody">MessageBody</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#message_body AlbListenerRule#message_body}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponse.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#status_code AlbListenerRule#status_code}. |

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponse.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#content_type AlbListenerRule#content_type}.

---

##### `MessageBody`<sup>Optional</sup> <a name="MessageBody" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponse.property.messageBody"></a>

```go
MessageBody *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#message_body AlbListenerRule#message_body}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponse.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#status_code AlbListenerRule#status_code}.

---

### AlbListenerRuleActionForward <a name="AlbListenerRuleActionForward" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForward.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleActionForward {
	TargetGroup: interface{},
	Stickiness: github.com/cdktf/cdktf-provider-aws-go/aws.albListenerRule.AlbListenerRuleActionForwardStickiness,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForward.property.targetGroup">TargetGroup</a></code> | <code>interface{}</code> | target_group block. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForward.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickiness">AlbListenerRuleActionForwardStickiness</a></code> | stickiness block. |

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForward.property.targetGroup"></a>

```go
TargetGroup interface{}
```

- *Type:* interface{}

target_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#target_group AlbListenerRule#target_group}

---

##### `Stickiness`<sup>Optional</sup> <a name="Stickiness" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForward.property.stickiness"></a>

```go
Stickiness AlbListenerRuleActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickiness">AlbListenerRuleActionForwardStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#stickiness AlbListenerRule#stickiness}

---

### AlbListenerRuleActionForwardStickiness <a name="AlbListenerRuleActionForwardStickiness" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickiness.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleActionForwardStickiness {
	Duration: *f64,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickiness.property.duration">Duration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#duration AlbListenerRule#duration}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickiness.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#enabled AlbListenerRule#enabled}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickiness.property.duration"></a>

```go
Duration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#duration AlbListenerRule#duration}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickiness.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#enabled AlbListenerRule#enabled}.

---

### AlbListenerRuleActionForwardTargetGroup <a name="AlbListenerRuleActionForwardTargetGroup" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleActionForwardTargetGroup {
	Arn: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroup.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#arn AlbListenerRule#arn}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroup.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#weight AlbListenerRule#weight}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroup.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#arn AlbListenerRule#arn}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroup.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#weight AlbListenerRule#weight}.

---

### AlbListenerRuleActionRedirect <a name="AlbListenerRuleActionRedirect" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleActionRedirect {
	StatusCode: *string,
	Host: *string,
	Path: *string,
	Port: *string,
	Protocol: *string,
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#status_code AlbListenerRule#status_code}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect.property.host">Host</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#host AlbListenerRule#host}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#path AlbListenerRule#path}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect.property.port">Port</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#port AlbListenerRule#port}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#protocol AlbListenerRule#protocol}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#query AlbListenerRule#query}. |

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#status_code AlbListenerRule#status_code}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect.property.host"></a>

```go
Host *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#host AlbListenerRule#host}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#path AlbListenerRule#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect.property.port"></a>

```go
Port *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#port AlbListenerRule#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#protocol AlbListenerRule#protocol}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#query AlbListenerRule#query}.

---

### AlbListenerRuleCondition <a name="AlbListenerRuleCondition" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleCondition {
	HostHeader: github.com/cdktf/cdktf-provider-aws-go/aws.albListenerRule.AlbListenerRuleConditionHostHeader,
	HttpHeader: github.com/cdktf/cdktf-provider-aws-go/aws.albListenerRule.AlbListenerRuleConditionHttpHeader,
	HttpRequestMethod: github.com/cdktf/cdktf-provider-aws-go/aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethod,
	PathPattern: github.com/cdktf/cdktf-provider-aws-go/aws.albListenerRule.AlbListenerRuleConditionPathPattern,
	QueryString: interface{},
	SourceIp: github.com/cdktf/cdktf-provider-aws-go/aws.albListenerRule.AlbListenerRuleConditionSourceIp,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleCondition.property.hostHeader">HostHeader</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeader">AlbListenerRuleConditionHostHeader</a></code> | host_header block. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleCondition.property.httpHeader">HttpHeader</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeader">AlbListenerRuleConditionHttpHeader</a></code> | http_header block. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleCondition.property.httpRequestMethod">HttpRequestMethod</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethod">AlbListenerRuleConditionHttpRequestMethod</a></code> | http_request_method block. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleCondition.property.pathPattern">PathPattern</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPattern">AlbListenerRuleConditionPathPattern</a></code> | path_pattern block. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleCondition.property.queryString">QueryString</a></code> | <code>interface{}</code> | query_string block. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleCondition.property.sourceIp">SourceIp</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIp">AlbListenerRuleConditionSourceIp</a></code> | source_ip block. |

---

##### `HostHeader`<sup>Optional</sup> <a name="HostHeader" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleCondition.property.hostHeader"></a>

```go
HostHeader AlbListenerRuleConditionHostHeader
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeader">AlbListenerRuleConditionHostHeader</a>

host_header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#host_header AlbListenerRule#host_header}

---

##### `HttpHeader`<sup>Optional</sup> <a name="HttpHeader" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleCondition.property.httpHeader"></a>

```go
HttpHeader AlbListenerRuleConditionHttpHeader
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeader">AlbListenerRuleConditionHttpHeader</a>

http_header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#http_header AlbListenerRule#http_header}

---

##### `HttpRequestMethod`<sup>Optional</sup> <a name="HttpRequestMethod" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleCondition.property.httpRequestMethod"></a>

```go
HttpRequestMethod AlbListenerRuleConditionHttpRequestMethod
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethod">AlbListenerRuleConditionHttpRequestMethod</a>

http_request_method block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#http_request_method AlbListenerRule#http_request_method}

---

##### `PathPattern`<sup>Optional</sup> <a name="PathPattern" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleCondition.property.pathPattern"></a>

```go
PathPattern AlbListenerRuleConditionPathPattern
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPattern">AlbListenerRuleConditionPathPattern</a>

path_pattern block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#path_pattern AlbListenerRule#path_pattern}

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleCondition.property.queryString"></a>

```go
QueryString interface{}
```

- *Type:* interface{}

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#query_string AlbListenerRule#query_string}

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleCondition.property.sourceIp"></a>

```go
SourceIp AlbListenerRuleConditionSourceIp
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIp">AlbListenerRuleConditionSourceIp</a>

source_ip block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#source_ip AlbListenerRule#source_ip}

---

### AlbListenerRuleConditionHostHeader <a name="AlbListenerRuleConditionHostHeader" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleConditionHostHeader {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeader.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#values AlbListenerRule#values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeader.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#values AlbListenerRule#values}.

---

### AlbListenerRuleConditionHttpHeader <a name="AlbListenerRuleConditionHttpHeader" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleConditionHttpHeader {
	HttpHeaderName: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeader.property.httpHeaderName">HttpHeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#http_header_name AlbListenerRule#http_header_name}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeader.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#values AlbListenerRule#values}. |

---

##### `HttpHeaderName`<sup>Required</sup> <a name="HttpHeaderName" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeader.property.httpHeaderName"></a>

```go
HttpHeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#http_header_name AlbListenerRule#http_header_name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeader.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#values AlbListenerRule#values}.

---

### AlbListenerRuleConditionHttpRequestMethod <a name="AlbListenerRuleConditionHttpRequestMethod" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleConditionHttpRequestMethod {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethod.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#values AlbListenerRule#values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethod.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#values AlbListenerRule#values}.

---

### AlbListenerRuleConditionPathPattern <a name="AlbListenerRuleConditionPathPattern" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPattern.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleConditionPathPattern {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPattern.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#values AlbListenerRule#values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPattern.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#values AlbListenerRule#values}.

---

### AlbListenerRuleConditionQueryString <a name="AlbListenerRuleConditionQueryString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleConditionQueryString {
	Value: *string,
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryString.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#value AlbListenerRule#value}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryString.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#key AlbListenerRule#key}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryString.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#value AlbListenerRule#value}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryString.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#key AlbListenerRule#key}.

---

### AlbListenerRuleConditionSourceIp <a name="AlbListenerRuleConditionSourceIp" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleConditionSourceIp {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIp.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#values AlbListenerRule#values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIp.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#values AlbListenerRule#values}.

---

### AlbListenerRuleConfig <a name="AlbListenerRuleConfig" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

&alblistenerrule.AlbListenerRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: interface{},
	Condition: interface{},
	ListenerArn: *string,
	Id: *string,
	Priority: *f64,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.action">Action</a></code> | <code>interface{}</code> | action block. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.condition">Condition</a></code> | <code>interface{}</code> | condition block. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.listenerArn">ListenerArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#listener_arn AlbListenerRule#listener_arn}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#id AlbListenerRule#id}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#priority AlbListenerRule#priority}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#tags AlbListenerRule#tags}. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#tags_all AlbListenerRule#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.action"></a>

```go
Action interface{}
```

- *Type:* interface{}

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#action AlbListenerRule#action}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.condition"></a>

```go
Condition interface{}
```

- *Type:* interface{}

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#condition AlbListenerRule#condition}

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.listenerArn"></a>

```go
ListenerArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#listener_arn AlbListenerRule#listener_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#id AlbListenerRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#priority AlbListenerRule#priority}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#tags AlbListenerRule#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule#tags_all AlbListenerRule#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlbListenerRuleActionAuthenticateCognitoOutputReference <a name="AlbListenerRuleActionAuthenticateCognitoOutputReference" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleActionAuthenticateCognitoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerRuleActionAuthenticateCognitoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams">ResetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest">ResetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionCookieName">ResetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationRequestExtraParams` <a name="ResetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams"></a>

```go
func ResetAuthenticationRequestExtraParams()
```

##### `ResetOnUnauthenticatedRequest` <a name="ResetOnUnauthenticatedRequest" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest"></a>

```go
func ResetOnUnauthenticatedRequest()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSessionCookieName` <a name="ResetSessionCookieName" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionCookieName"></a>

```go
func ResetSessionCookieName()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.resetSessionTimeout"></a>

```go
func ResetSessionTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput">AuthenticationRequestExtraParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput">OnUnauthenticatedRequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput">SessionCookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArnInput">UserPoolArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput">UserPoolClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomainInput">UserPoolDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArn">UserPoolArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientId">UserPoolClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomain">UserPoolDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito">AlbListenerRuleActionAuthenticateCognito</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="AuthenticationRequestExtraParamsInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput"></a>

```go
func AuthenticationRequestExtraParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnUnauthenticatedRequestInput`<sup>Optional</sup> <a name="OnUnauthenticatedRequestInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput"></a>

```go
func OnUnauthenticatedRequestInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SessionCookieNameInput`<sup>Optional</sup> <a name="SessionCookieNameInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput"></a>

```go
func SessionCookieNameInput() *string
```

- *Type:* *string

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput"></a>

```go
func SessionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `UserPoolArnInput`<sup>Optional</sup> <a name="UserPoolArnInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArnInput"></a>

```go
func UserPoolArnInput() *string
```

- *Type:* *string

---

##### `UserPoolClientIdInput`<sup>Optional</sup> <a name="UserPoolClientIdInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput"></a>

```go
func UserPoolClientIdInput() *string
```

- *Type:* *string

---

##### `UserPoolDomainInput`<sup>Optional</sup> <a name="UserPoolDomainInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomainInput"></a>

```go
func UserPoolDomainInput() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams"></a>

```go
func AuthenticationRequestExtraParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest"></a>

```go
func OnUnauthenticatedRequest() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionCookieName"></a>

```go
func SessionCookieName() *string
```

- *Type:* *string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.sessionTimeout"></a>

```go
func SessionTimeout() *f64
```

- *Type:* *f64

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolArn"></a>

```go
func UserPoolArn() *string
```

- *Type:* *string

---

##### `UserPoolClientId`<sup>Required</sup> <a name="UserPoolClientId" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolClientId"></a>

```go
func UserPoolClientId() *string
```

- *Type:* *string

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.userPoolDomain"></a>

```go
func UserPoolDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerRuleActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito">AlbListenerRuleActionAuthenticateCognito</a>

---


### AlbListenerRuleActionAuthenticateOidcOutputReference <a name="AlbListenerRuleActionAuthenticateOidcOutputReference" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleActionAuthenticateOidcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerRuleActionAuthenticateOidcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams">ResetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest">ResetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetSessionCookieName">ResetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationRequestExtraParams` <a name="ResetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams"></a>

```go
func ResetAuthenticationRequestExtraParams()
```

##### `ResetOnUnauthenticatedRequest` <a name="ResetOnUnauthenticatedRequest" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest"></a>

```go
func ResetOnUnauthenticatedRequest()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSessionCookieName` <a name="ResetSessionCookieName" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetSessionCookieName"></a>

```go
func ResetSessionCookieName()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.resetSessionTimeout"></a>

```go
func ResetSessionTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput">AuthenticationRequestExtraParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput">OnUnauthenticatedRequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieNameInput">SessionCookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpointInput">UserInfoEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc">AlbListenerRuleActionAuthenticateOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="AuthenticationRequestExtraParamsInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput"></a>

```go
func AuthenticationRequestExtraParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpointInput"></a>

```go
func AuthorizationEndpointInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `OnUnauthenticatedRequestInput`<sup>Optional</sup> <a name="OnUnauthenticatedRequestInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput"></a>

```go
func OnUnauthenticatedRequestInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SessionCookieNameInput`<sup>Optional</sup> <a name="SessionCookieNameInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieNameInput"></a>

```go
func SessionCookieNameInput() *string
```

- *Type:* *string

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeoutInput"></a>

```go
func SessionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `UserInfoEndpointInput`<sup>Optional</sup> <a name="UserInfoEndpointInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpointInput"></a>

```go
func UserInfoEndpointInput() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams"></a>

```go
func AuthenticationRequestExtraParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest"></a>

```go
func OnUnauthenticatedRequest() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionCookieName"></a>

```go
func SessionCookieName() *string
```

- *Type:* *string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.sessionTimeout"></a>

```go
func SessionTimeout() *f64
```

- *Type:* *f64

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.userInfoEndpoint"></a>

```go
func UserInfoEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerRuleActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc">AlbListenerRuleActionAuthenticateOidc</a>

---


### AlbListenerRuleActionFixedResponseOutputReference <a name="AlbListenerRuleActionFixedResponseOutputReference" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleActionFixedResponseOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerRuleActionFixedResponseOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.resetMessageBody">ResetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessageBody` <a name="ResetMessageBody" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.resetMessageBody"></a>

```go
func ResetMessageBody()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.messageBodyInput">MessageBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.messageBody">MessageBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponse">AlbListenerRuleActionFixedResponse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `MessageBodyInput`<sup>Optional</sup> <a name="MessageBodyInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.messageBodyInput"></a>

```go
func MessageBodyInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `MessageBody`<sup>Required</sup> <a name="MessageBody" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.messageBody"></a>

```go
func MessageBody() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerRuleActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponse">AlbListenerRuleActionFixedResponse</a>

---


### AlbListenerRuleActionForwardOutputReference <a name="AlbListenerRuleActionForwardOutputReference" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleActionForwardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerRuleActionForwardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.putStickiness">PutStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.putTargetGroup">PutTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.resetStickiness">ResetStickiness</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStickiness` <a name="PutStickiness" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.putStickiness"></a>

```go
func PutStickiness(value AlbListenerRuleActionForwardStickiness)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickiness">AlbListenerRuleActionForwardStickiness</a>

---

##### `PutTargetGroup` <a name="PutTargetGroup" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.putTargetGroup"></a>

```go
func PutTargetGroup(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetStickiness` <a name="ResetStickiness" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.resetStickiness"></a>

```go
func ResetStickiness()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.stickiness">Stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference">AlbListenerRuleActionForwardStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.targetGroup">TargetGroup</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList">AlbListenerRuleActionForwardTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.stickinessInput">StickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickiness">AlbListenerRuleActionForwardStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.targetGroupInput">TargetGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForward">AlbListenerRuleActionForward</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Stickiness`<sup>Required</sup> <a name="Stickiness" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.stickiness"></a>

```go
func Stickiness() AlbListenerRuleActionForwardStickinessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference">AlbListenerRuleActionForwardStickinessOutputReference</a>

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.targetGroup"></a>

```go
func TargetGroup() AlbListenerRuleActionForwardTargetGroupList
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList">AlbListenerRuleActionForwardTargetGroupList</a>

---

##### `StickinessInput`<sup>Optional</sup> <a name="StickinessInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.stickinessInput"></a>

```go
func StickinessInput() AlbListenerRuleActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickiness">AlbListenerRuleActionForwardStickiness</a>

---

##### `TargetGroupInput`<sup>Optional</sup> <a name="TargetGroupInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.targetGroupInput"></a>

```go
func TargetGroupInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerRuleActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForward">AlbListenerRuleActionForward</a>

---


### AlbListenerRuleActionForwardStickinessOutputReference <a name="AlbListenerRuleActionForwardStickinessOutputReference" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleActionForwardStickinessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerRuleActionForwardStickinessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.durationInput">DurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.duration">Duration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickiness">AlbListenerRuleActionForwardStickiness</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.durationInput"></a>

```go
func DurationInput() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.duration"></a>

```go
func Duration() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickinessOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerRuleActionForwardStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardStickiness">AlbListenerRuleActionForwardStickiness</a>

---


### AlbListenerRuleActionForwardTargetGroupList <a name="AlbListenerRuleActionForwardTargetGroupList" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleActionForwardTargetGroupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlbListenerRuleActionForwardTargetGroupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.get"></a>

```go
func Get(index *f64) AlbListenerRuleActionForwardTargetGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlbListenerRuleActionForwardTargetGroupOutputReference <a name="AlbListenerRuleActionForwardTargetGroupOutputReference" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleActionForwardTargetGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlbListenerRuleActionForwardTargetGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardTargetGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlbListenerRuleActionList <a name="AlbListenerRuleActionList" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlbListenerRuleActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.get"></a>

```go
func Get(index *f64) AlbListenerRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlbListenerRuleActionOutputReference <a name="AlbListenerRuleActionOutputReference" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlbListenerRuleActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.putAuthenticateCognito">PutAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.putAuthenticateOidc">PutAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.putFixedResponse">PutFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.putForward">PutForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.putRedirect">PutRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resetAuthenticateCognito">ResetAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resetAuthenticateOidc">ResetAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resetFixedResponse">ResetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resetForward">ResetForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resetRedirect">ResetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resetTargetGroupArn">ResetTargetGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticateCognito` <a name="PutAuthenticateCognito" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.putAuthenticateCognito"></a>

```go
func PutAuthenticateCognito(value AlbListenerRuleActionAuthenticateCognito)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.putAuthenticateCognito.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito">AlbListenerRuleActionAuthenticateCognito</a>

---

##### `PutAuthenticateOidc` <a name="PutAuthenticateOidc" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.putAuthenticateOidc"></a>

```go
func PutAuthenticateOidc(value AlbListenerRuleActionAuthenticateOidc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.putAuthenticateOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc">AlbListenerRuleActionAuthenticateOidc</a>

---

##### `PutFixedResponse` <a name="PutFixedResponse" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.putFixedResponse"></a>

```go
func PutFixedResponse(value AlbListenerRuleActionFixedResponse)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponse">AlbListenerRuleActionFixedResponse</a>

---

##### `PutForward` <a name="PutForward" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.putForward"></a>

```go
func PutForward(value AlbListenerRuleActionForward)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForward">AlbListenerRuleActionForward</a>

---

##### `PutRedirect` <a name="PutRedirect" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.putRedirect"></a>

```go
func PutRedirect(value AlbListenerRuleActionRedirect)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect">AlbListenerRuleActionRedirect</a>

---

##### `ResetAuthenticateCognito` <a name="ResetAuthenticateCognito" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resetAuthenticateCognito"></a>

```go
func ResetAuthenticateCognito()
```

##### `ResetAuthenticateOidc` <a name="ResetAuthenticateOidc" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resetAuthenticateOidc"></a>

```go
func ResetAuthenticateOidc()
```

##### `ResetFixedResponse` <a name="ResetFixedResponse" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resetFixedResponse"></a>

```go
func ResetFixedResponse()
```

##### `ResetForward` <a name="ResetForward" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resetForward"></a>

```go
func ResetForward()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetRedirect` <a name="ResetRedirect" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resetRedirect"></a>

```go
func ResetRedirect()
```

##### `ResetTargetGroupArn` <a name="ResetTargetGroupArn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.resetTargetGroupArn"></a>

```go
func ResetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateCognito">AuthenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference">AlbListenerRuleActionAuthenticateCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateOidc">AuthenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference">AlbListenerRuleActionAuthenticateOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.fixedResponse">FixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference">AlbListenerRuleActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.forward">Forward</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference">AlbListenerRuleActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.redirect">Redirect</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference">AlbListenerRuleActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateCognitoInput">AuthenticateCognitoInput</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito">AlbListenerRuleActionAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateOidcInput">AuthenticateOidcInput</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc">AlbListenerRuleActionAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.fixedResponseInput">FixedResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponse">AlbListenerRuleActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.forwardInput">ForwardInput</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForward">AlbListenerRuleActionForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.redirectInput">RedirectInput</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect">AlbListenerRuleActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.targetGroupArnInput">TargetGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticateCognito`<sup>Required</sup> <a name="AuthenticateCognito" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateCognito"></a>

```go
func AuthenticateCognito() AlbListenerRuleActionAuthenticateCognitoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognitoOutputReference">AlbListenerRuleActionAuthenticateCognitoOutputReference</a>

---

##### `AuthenticateOidc`<sup>Required</sup> <a name="AuthenticateOidc" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateOidc"></a>

```go
func AuthenticateOidc() AlbListenerRuleActionAuthenticateOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidcOutputReference">AlbListenerRuleActionAuthenticateOidcOutputReference</a>

---

##### `FixedResponse`<sup>Required</sup> <a name="FixedResponse" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.fixedResponse"></a>

```go
func FixedResponse() AlbListenerRuleActionFixedResponseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponseOutputReference">AlbListenerRuleActionFixedResponseOutputReference</a>

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.forward"></a>

```go
func Forward() AlbListenerRuleActionForwardOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForwardOutputReference">AlbListenerRuleActionForwardOutputReference</a>

---

##### `Redirect`<sup>Required</sup> <a name="Redirect" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.redirect"></a>

```go
func Redirect() AlbListenerRuleActionRedirectOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference">AlbListenerRuleActionRedirectOutputReference</a>

---

##### `AuthenticateCognitoInput`<sup>Optional</sup> <a name="AuthenticateCognitoInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateCognitoInput"></a>

```go
func AuthenticateCognitoInput() AlbListenerRuleActionAuthenticateCognito
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateCognito">AlbListenerRuleActionAuthenticateCognito</a>

---

##### `AuthenticateOidcInput`<sup>Optional</sup> <a name="AuthenticateOidcInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.authenticateOidcInput"></a>

```go
func AuthenticateOidcInput() AlbListenerRuleActionAuthenticateOidc
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionAuthenticateOidc">AlbListenerRuleActionAuthenticateOidc</a>

---

##### `FixedResponseInput`<sup>Optional</sup> <a name="FixedResponseInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.fixedResponseInput"></a>

```go
func FixedResponseInput() AlbListenerRuleActionFixedResponse
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionFixedResponse">AlbListenerRuleActionFixedResponse</a>

---

##### `ForwardInput`<sup>Optional</sup> <a name="ForwardInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.forwardInput"></a>

```go
func ForwardInput() AlbListenerRuleActionForward
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionForward">AlbListenerRuleActionForward</a>

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `RedirectInput`<sup>Optional</sup> <a name="RedirectInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.redirectInput"></a>

```go
func RedirectInput() AlbListenerRuleActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect">AlbListenerRuleActionRedirect</a>

---

##### `TargetGroupArnInput`<sup>Optional</sup> <a name="TargetGroupArnInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.targetGroupArnInput"></a>

```go
func TargetGroupArnInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.targetGroupArn"></a>

```go
func TargetGroupArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlbListenerRuleActionRedirectOutputReference <a name="AlbListenerRuleActionRedirectOutputReference" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleActionRedirectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerRuleActionRedirectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.resetQuery"></a>

```go
func ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect">AlbListenerRuleActionRedirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirectOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerRuleActionRedirect
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleActionRedirect">AlbListenerRuleActionRedirect</a>

---


### AlbListenerRuleConditionHostHeaderOutputReference <a name="AlbListenerRuleConditionHostHeaderOutputReference" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleConditionHostHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerRuleConditionHostHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeader">AlbListenerRuleConditionHostHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerRuleConditionHostHeader
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeader">AlbListenerRuleConditionHostHeader</a>

---


### AlbListenerRuleConditionHttpHeaderOutputReference <a name="AlbListenerRuleConditionHttpHeaderOutputReference" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleConditionHttpHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerRuleConditionHttpHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderNameInput">HttpHeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderName">HttpHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeader">AlbListenerRuleConditionHttpHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpHeaderNameInput`<sup>Optional</sup> <a name="HttpHeaderNameInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderNameInput"></a>

```go
func HttpHeaderNameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `HttpHeaderName`<sup>Required</sup> <a name="HttpHeaderName" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.httpHeaderName"></a>

```go
func HttpHeaderName() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerRuleConditionHttpHeader
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeader">AlbListenerRuleConditionHttpHeader</a>

---


### AlbListenerRuleConditionHttpRequestMethodOutputReference <a name="AlbListenerRuleConditionHttpRequestMethodOutputReference" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleConditionHttpRequestMethodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerRuleConditionHttpRequestMethodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethod">AlbListenerRuleConditionHttpRequestMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerRuleConditionHttpRequestMethod
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethod">AlbListenerRuleConditionHttpRequestMethod</a>

---


### AlbListenerRuleConditionList <a name="AlbListenerRuleConditionList" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlbListenerRuleConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.get"></a>

```go
func Get(index *f64) AlbListenerRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlbListenerRuleConditionOutputReference <a name="AlbListenerRuleConditionOutputReference" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlbListenerRuleConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putHostHeader">PutHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putHttpHeader">PutHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putHttpRequestMethod">PutHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putPathPattern">PutPathPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putQueryString">PutQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putSourceIp">PutSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.resetHostHeader">ResetHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.resetHttpHeader">ResetHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.resetHttpRequestMethod">ResetHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.resetPathPattern">ResetPathPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.resetSourceIp">ResetSourceIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHostHeader` <a name="PutHostHeader" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putHostHeader"></a>

```go
func PutHostHeader(value AlbListenerRuleConditionHostHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putHostHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeader">AlbListenerRuleConditionHostHeader</a>

---

##### `PutHttpHeader` <a name="PutHttpHeader" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putHttpHeader"></a>

```go
func PutHttpHeader(value AlbListenerRuleConditionHttpHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putHttpHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeader">AlbListenerRuleConditionHttpHeader</a>

---

##### `PutHttpRequestMethod` <a name="PutHttpRequestMethod" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putHttpRequestMethod"></a>

```go
func PutHttpRequestMethod(value AlbListenerRuleConditionHttpRequestMethod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putHttpRequestMethod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethod">AlbListenerRuleConditionHttpRequestMethod</a>

---

##### `PutPathPattern` <a name="PutPathPattern" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putPathPattern"></a>

```go
func PutPathPattern(value AlbListenerRuleConditionPathPattern)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putPathPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPattern">AlbListenerRuleConditionPathPattern</a>

---

##### `PutQueryString` <a name="PutQueryString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putQueryString"></a>

```go
func PutQueryString(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putQueryString.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceIp` <a name="PutSourceIp" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putSourceIp"></a>

```go
func PutSourceIp(value AlbListenerRuleConditionSourceIp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.putSourceIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIp">AlbListenerRuleConditionSourceIp</a>

---

##### `ResetHostHeader` <a name="ResetHostHeader" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.resetHostHeader"></a>

```go
func ResetHostHeader()
```

##### `ResetHttpHeader` <a name="ResetHttpHeader" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.resetHttpHeader"></a>

```go
func ResetHttpHeader()
```

##### `ResetHttpRequestMethod` <a name="ResetHttpRequestMethod" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.resetHttpRequestMethod"></a>

```go
func ResetHttpRequestMethod()
```

##### `ResetPathPattern` <a name="ResetPathPattern" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.resetPathPattern"></a>

```go
func ResetPathPattern()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.resetQueryString"></a>

```go
func ResetQueryString()
```

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.resetSourceIp"></a>

```go
func ResetSourceIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.hostHeader">HostHeader</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference">AlbListenerRuleConditionHostHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpHeader">HttpHeader</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference">AlbListenerRuleConditionHttpHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpRequestMethod">HttpRequestMethod</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference">AlbListenerRuleConditionHttpRequestMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.pathPattern">PathPattern</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference">AlbListenerRuleConditionPathPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.queryString">QueryString</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList">AlbListenerRuleConditionQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.sourceIp">SourceIp</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference">AlbListenerRuleConditionSourceIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.hostHeaderInput">HostHeaderInput</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeader">AlbListenerRuleConditionHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpHeaderInput">HttpHeaderInput</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeader">AlbListenerRuleConditionHttpHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpRequestMethodInput">HttpRequestMethodInput</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethod">AlbListenerRuleConditionHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.pathPatternInput">PathPatternInput</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPattern">AlbListenerRuleConditionPathPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.sourceIpInput">SourceIpInput</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIp">AlbListenerRuleConditionSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostHeader`<sup>Required</sup> <a name="HostHeader" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.hostHeader"></a>

```go
func HostHeader() AlbListenerRuleConditionHostHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeaderOutputReference">AlbListenerRuleConditionHostHeaderOutputReference</a>

---

##### `HttpHeader`<sup>Required</sup> <a name="HttpHeader" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpHeader"></a>

```go
func HttpHeader() AlbListenerRuleConditionHttpHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeaderOutputReference">AlbListenerRuleConditionHttpHeaderOutputReference</a>

---

##### `HttpRequestMethod`<sup>Required</sup> <a name="HttpRequestMethod" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpRequestMethod"></a>

```go
func HttpRequestMethod() AlbListenerRuleConditionHttpRequestMethodOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethodOutputReference">AlbListenerRuleConditionHttpRequestMethodOutputReference</a>

---

##### `PathPattern`<sup>Required</sup> <a name="PathPattern" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.pathPattern"></a>

```go
func PathPattern() AlbListenerRuleConditionPathPatternOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference">AlbListenerRuleConditionPathPatternOutputReference</a>

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.queryString"></a>

```go
func QueryString() AlbListenerRuleConditionQueryStringList
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList">AlbListenerRuleConditionQueryStringList</a>

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.sourceIp"></a>

```go
func SourceIp() AlbListenerRuleConditionSourceIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference">AlbListenerRuleConditionSourceIpOutputReference</a>

---

##### `HostHeaderInput`<sup>Optional</sup> <a name="HostHeaderInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.hostHeaderInput"></a>

```go
func HostHeaderInput() AlbListenerRuleConditionHostHeader
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHostHeader">AlbListenerRuleConditionHostHeader</a>

---

##### `HttpHeaderInput`<sup>Optional</sup> <a name="HttpHeaderInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpHeaderInput"></a>

```go
func HttpHeaderInput() AlbListenerRuleConditionHttpHeader
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpHeader">AlbListenerRuleConditionHttpHeader</a>

---

##### `HttpRequestMethodInput`<sup>Optional</sup> <a name="HttpRequestMethodInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.httpRequestMethodInput"></a>

```go
func HttpRequestMethodInput() AlbListenerRuleConditionHttpRequestMethod
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionHttpRequestMethod">AlbListenerRuleConditionHttpRequestMethod</a>

---

##### `PathPatternInput`<sup>Optional</sup> <a name="PathPatternInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.pathPatternInput"></a>

```go
func PathPatternInput() AlbListenerRuleConditionPathPattern
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPattern">AlbListenerRuleConditionPathPattern</a>

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() interface{}
```

- *Type:* interface{}

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.sourceIpInput"></a>

```go
func SourceIpInput() AlbListenerRuleConditionSourceIp
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIp">AlbListenerRuleConditionSourceIp</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlbListenerRuleConditionPathPatternOutputReference <a name="AlbListenerRuleConditionPathPatternOutputReference" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleConditionPathPatternOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerRuleConditionPathPatternOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPattern">AlbListenerRuleConditionPathPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPatternOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerRuleConditionPathPattern
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionPathPattern">AlbListenerRuleConditionPathPattern</a>

---


### AlbListenerRuleConditionQueryStringList <a name="AlbListenerRuleConditionQueryStringList" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleConditionQueryStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlbListenerRuleConditionQueryStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.get"></a>

```go
func Get(index *f64) AlbListenerRuleConditionQueryStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlbListenerRuleConditionQueryStringOutputReference <a name="AlbListenerRuleConditionQueryStringOutputReference" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleConditionQueryStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlbListenerRuleConditionQueryStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.resetKey"></a>

```go
func ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionQueryStringOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlbListenerRuleConditionSourceIpOutputReference <a name="AlbListenerRuleConditionSourceIpOutputReference" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/alblistenerrule"

alblistenerrule.NewAlbListenerRuleConditionSourceIpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlbListenerRuleConditionSourceIpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIp">AlbListenerRuleConditionSourceIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIpOutputReference.property.internalValue"></a>

```go
func InternalValue() AlbListenerRuleConditionSourceIp
```

- *Type:* <a href="#@cdktf/provider-aws.albListenerRule.AlbListenerRuleConditionSourceIp">AlbListenerRuleConditionSourceIp</a>

---



