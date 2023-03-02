# `glueTrigger` Submodule <a name="`glueTrigger` Submodule" id="@cdktf/provider-aws.glueTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueTrigger <a name="GlueTrigger" id="@cdktf/provider-aws.glueTrigger.GlueTrigger"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger aws_glue_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

gluetrigger.NewGlueTrigger(scope Construct, id *string, config GlueTriggerConfig) GlueTrigger
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig">GlueTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig">GlueTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.putEventBatchingCondition">PutEventBatchingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.putPredicate">PutPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetEventBatchingCondition">ResetEventBatchingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetPredicate">ResetPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetStartOnCreation">ResetStartOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.resetWorkflowName">ResetWorkflowName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutActions` <a name="PutActions" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putActions"></a>

```go
func PutActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEventBatchingCondition` <a name="PutEventBatchingCondition" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putEventBatchingCondition"></a>

```go
func PutEventBatchingCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putEventBatchingCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPredicate` <a name="PutPredicate" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putPredicate"></a>

```go
func PutPredicate(value GlueTriggerPredicate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putTimeouts"></a>

```go
func PutTimeouts(value GlueTriggerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEventBatchingCondition` <a name="ResetEventBatchingCondition" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetEventBatchingCondition"></a>

```go
func ResetEventBatchingCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetId"></a>

```go
func ResetId()
```

##### `ResetPredicate` <a name="ResetPredicate" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetPredicate"></a>

```go
func ResetPredicate()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetStartOnCreation` <a name="ResetStartOnCreation" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetStartOnCreation"></a>

```go
func ResetStartOnCreation()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkflowName` <a name="ResetWorkflowName" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.resetWorkflowName"></a>

```go
func ResetWorkflowName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

gluetrigger.GlueTrigger_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

gluetrigger.GlueTrigger_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

gluetrigger.GlueTrigger_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.actions">Actions</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.eventBatchingCondition">EventBatchingCondition</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList">GlueTriggerEventBatchingConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference">GlueTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.actionsInput">ActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.eventBatchingConditionInput">EventBatchingConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.predicateInput">PredicateInput</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.startOnCreationInput">StartOnCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.workflowNameInput">WorkflowNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.startOnCreation">StartOnCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.workflowName">WorkflowName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.actions"></a>

```go
func Actions() GlueTriggerActionsList
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EventBatchingCondition`<sup>Required</sup> <a name="EventBatchingCondition" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.eventBatchingCondition"></a>

```go
func EventBatchingCondition() GlueTriggerEventBatchingConditionList
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList">GlueTriggerEventBatchingConditionList</a>

---

##### `Predicate`<sup>Required</sup> <a name="Predicate" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.predicate"></a>

```go
func Predicate() GlueTriggerPredicateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.timeouts"></a>

```go
func Timeouts() GlueTriggerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference">GlueTriggerTimeoutsOutputReference</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.actionsInput"></a>

```go
func ActionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventBatchingConditionInput`<sup>Optional</sup> <a name="EventBatchingConditionInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.eventBatchingConditionInput"></a>

```go
func EventBatchingConditionInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PredicateInput`<sup>Optional</sup> <a name="PredicateInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.predicateInput"></a>

```go
func PredicateInput() GlueTriggerPredicate
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `StartOnCreationInput`<sup>Optional</sup> <a name="StartOnCreationInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.startOnCreationInput"></a>

```go
func StartOnCreationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `WorkflowNameInput`<sup>Optional</sup> <a name="WorkflowNameInput" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.workflowNameInput"></a>

```go
func WorkflowNameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `StartOnCreation`<sup>Required</sup> <a name="StartOnCreation" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.startOnCreation"></a>

```go
func StartOnCreation() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.workflowName"></a>

```go
func WorkflowName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueTrigger.GlueTrigger.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueTriggerActions <a name="GlueTriggerActions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

&gluetrigger.GlueTriggerActions {
	Arguments: *map[string]*string,
	CrawlerName: *string,
	JobName: *string,
	NotificationProperty: github.com/cdktf/cdktf-provider-aws-go/aws.glueTrigger.GlueTriggerActionsNotificationProperty,
	SecurityConfiguration: *string,
	Timeout: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.arguments">Arguments</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#arguments GlueTrigger#arguments}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.crawlerName">CrawlerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawler_name GlueTrigger#crawler_name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.jobName">JobName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#job_name GlueTrigger#job_name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | notification_property block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.securityConfiguration">SecurityConfiguration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#security_configuration GlueTrigger#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#timeout GlueTrigger#timeout}. |

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.arguments"></a>

```go
Arguments *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#arguments GlueTrigger#arguments}.

---

##### `CrawlerName`<sup>Optional</sup> <a name="CrawlerName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.crawlerName"></a>

```go
CrawlerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawler_name GlueTrigger#crawler_name}.

---

##### `JobName`<sup>Optional</sup> <a name="JobName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.jobName"></a>

```go
JobName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#job_name GlueTrigger#job_name}.

---

##### `NotificationProperty`<sup>Optional</sup> <a name="NotificationProperty" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.notificationProperty"></a>

```go
NotificationProperty GlueTriggerActionsNotificationProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

notification_property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#notification_property GlueTrigger#notification_property}

---

##### `SecurityConfiguration`<sup>Optional</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.securityConfiguration"></a>

```go
SecurityConfiguration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#security_configuration GlueTrigger#security_configuration}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActions.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#timeout GlueTrigger#timeout}.

---

### GlueTriggerActionsNotificationProperty <a name="GlueTriggerActionsNotificationProperty" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

&gluetrigger.GlueTriggerActionsNotificationProperty {
	NotifyDelayAfter: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}. |

---

##### `NotifyDelayAfter`<sup>Optional</sup> <a name="NotifyDelayAfter" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter"></a>

```go
NotifyDelayAfter *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}.

---

### GlueTriggerConfig <a name="GlueTriggerConfig" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

&gluetrigger.GlueTriggerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Actions: interface{},
	Name: *string,
	Type: *string,
	Description: *string,
	Enabled: interface{},
	EventBatchingCondition: interface{},
	Id: *string,
	Predicate: github.com/cdktf/cdktf-provider-aws-go/aws.glueTrigger.GlueTriggerPredicate,
	Schedule: *string,
	StartOnCreation: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.glueTrigger.GlueTriggerTimeouts,
	WorkflowName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.actions">Actions</a></code> | <code>interface{}</code> | actions block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#name GlueTrigger#name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#type GlueTrigger#type}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#description GlueTrigger#description}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#enabled GlueTrigger#enabled}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.eventBatchingCondition">EventBatchingCondition</a></code> | <code>interface{}</code> | event_batching_condition block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#id GlueTrigger#id}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.predicate">Predicate</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.schedule">Schedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#schedule GlueTrigger#schedule}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.startOnCreation">StartOnCreation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#start_on_creation GlueTrigger#start_on_creation}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags GlueTrigger#tags}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags_all GlueTrigger#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.workflowName">WorkflowName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#workflow_name GlueTrigger#workflow_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.actions"></a>

```go
Actions interface{}
```

- *Type:* interface{}

actions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#actions GlueTrigger#actions}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#name GlueTrigger#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#type GlueTrigger#type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#description GlueTrigger#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#enabled GlueTrigger#enabled}.

---

##### `EventBatchingCondition`<sup>Optional</sup> <a name="EventBatchingCondition" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.eventBatchingCondition"></a>

```go
EventBatchingCondition interface{}
```

- *Type:* interface{}

event_batching_condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#event_batching_condition GlueTrigger#event_batching_condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#id GlueTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Predicate`<sup>Optional</sup> <a name="Predicate" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.predicate"></a>

```go
Predicate GlueTriggerPredicate
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#predicate GlueTrigger#predicate}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#schedule GlueTrigger#schedule}.

---

##### `StartOnCreation`<sup>Optional</sup> <a name="StartOnCreation" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.startOnCreation"></a>

```go
StartOnCreation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#start_on_creation GlueTrigger#start_on_creation}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags GlueTrigger#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#tags_all GlueTrigger#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.timeouts"></a>

```go
Timeouts GlueTriggerTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#timeouts GlueTrigger#timeouts}

---

##### `WorkflowName`<sup>Optional</sup> <a name="WorkflowName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerConfig.property.workflowName"></a>

```go
WorkflowName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#workflow_name GlueTrigger#workflow_name}.

---

### GlueTriggerEventBatchingCondition <a name="GlueTriggerEventBatchingCondition" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

&gluetrigger.GlueTriggerEventBatchingCondition {
	BatchSize: *f64,
	BatchWindow: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition.property.batchSize">BatchSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#batch_size GlueTrigger#batch_size}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition.property.batchWindow">BatchWindow</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#batch_window GlueTrigger#batch_window}. |

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition.property.batchSize"></a>

```go
BatchSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#batch_size GlueTrigger#batch_size}.

---

##### `BatchWindow`<sup>Optional</sup> <a name="BatchWindow" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingCondition.property.batchWindow"></a>

```go
BatchWindow *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#batch_window GlueTrigger#batch_window}.

---

### GlueTriggerPredicate <a name="GlueTriggerPredicate" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

&gluetrigger.GlueTriggerPredicate {
	Conditions: interface{},
	Logical: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate.property.logical">Logical</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#logical GlueTrigger#logical}. |

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#conditions GlueTrigger#conditions}

---

##### `Logical`<sup>Optional</sup> <a name="Logical" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate.property.logical"></a>

```go
Logical *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#logical GlueTrigger#logical}.

---

### GlueTriggerPredicateConditions <a name="GlueTriggerPredicateConditions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

&gluetrigger.GlueTriggerPredicateConditions {
	CrawlerName: *string,
	CrawlState: *string,
	JobName: *string,
	LogicalOperator: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName">CrawlerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawler_name GlueTrigger#crawler_name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.crawlState">CrawlState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawl_state GlueTrigger#crawl_state}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.jobName">JobName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#job_name GlueTrigger#job_name}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator">LogicalOperator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#logical_operator GlueTrigger#logical_operator}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#state GlueTrigger#state}. |

---

##### `CrawlerName`<sup>Optional</sup> <a name="CrawlerName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName"></a>

```go
CrawlerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawler_name GlueTrigger#crawler_name}.

---

##### `CrawlState`<sup>Optional</sup> <a name="CrawlState" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.crawlState"></a>

```go
CrawlState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#crawl_state GlueTrigger#crawl_state}.

---

##### `JobName`<sup>Optional</sup> <a name="JobName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.jobName"></a>

```go
JobName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#job_name GlueTrigger#job_name}.

---

##### `LogicalOperator`<sup>Optional</sup> <a name="LogicalOperator" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator"></a>

```go
LogicalOperator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#logical_operator GlueTrigger#logical_operator}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditions.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#state GlueTrigger#state}.

---

### GlueTriggerTimeouts <a name="GlueTriggerTimeouts" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

&gluetrigger.GlueTriggerTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#create GlueTrigger#create}. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#delete GlueTrigger#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#create GlueTrigger#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_trigger#delete GlueTrigger#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueTriggerActionsList <a name="GlueTriggerActionsList" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

gluetrigger.NewGlueTriggerActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueTriggerActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.get"></a>

```go
func Get(index *f64) GlueTriggerActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueTriggerActionsNotificationPropertyOutputReference <a name="GlueTriggerActionsNotificationPropertyOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

gluetrigger.NewGlueTriggerActionsNotificationPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueTriggerActionsNotificationPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter">ResetNotifyDelayAfter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotifyDelayAfter` <a name="ResetNotifyDelayAfter" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```go
func ResetNotifyDelayAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput">NotifyDelayAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotifyDelayAfterInput`<sup>Optional</sup> <a name="NotifyDelayAfterInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```go
func NotifyDelayAfterInput() *f64
```

- *Type:* *f64

---

##### `NotifyDelayAfter`<sup>Required</sup> <a name="NotifyDelayAfter" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```go
func NotifyDelayAfter() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueTriggerActionsNotificationProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---


### GlueTriggerActionsOutputReference <a name="GlueTriggerActionsOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

gluetrigger.NewGlueTriggerActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueTriggerActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty">PutNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName">ResetCrawlerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetJobName">ResetJobName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty">ResetNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration">ResetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotificationProperty` <a name="PutNotificationProperty" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty"></a>

```go
func PutNotificationProperty(value GlueTriggerActionsNotificationProperty)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetArguments"></a>

```go
func ResetArguments()
```

##### `ResetCrawlerName` <a name="ResetCrawlerName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName"></a>

```go
func ResetCrawlerName()
```

##### `ResetJobName` <a name="ResetJobName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetJobName"></a>

```go
func ResetJobName()
```

##### `ResetNotificationProperty` <a name="ResetNotificationProperty" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty"></a>

```go
func ResetNotificationProperty()
```

##### `ResetSecurityConfiguration` <a name="ResetSecurityConfiguration" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration"></a>

```go
func ResetSecurityConfiguration()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput">ArgumentsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput">CrawlerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput">NotificationPropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput">SecurityConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.arguments">Arguments</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName">CrawlerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.jobName">JobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration">SecurityConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotificationProperty`<sup>Required</sup> <a name="NotificationProperty" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty"></a>

```go
func NotificationProperty() GlueTriggerActionsNotificationPropertyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput"></a>

```go
func ArgumentsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CrawlerNameInput`<sup>Optional</sup> <a name="CrawlerNameInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput"></a>

```go
func CrawlerNameInput() *string
```

- *Type:* *string

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput"></a>

```go
func JobNameInput() *string
```

- *Type:* *string

---

##### `NotificationPropertyInput`<sup>Optional</sup> <a name="NotificationPropertyInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput"></a>

```go
func NotificationPropertyInput() GlueTriggerActionsNotificationProperty
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---

##### `SecurityConfigurationInput`<sup>Optional</sup> <a name="SecurityConfigurationInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput"></a>

```go
func SecurityConfigurationInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.arguments"></a>

```go
func Arguments() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CrawlerName`<sup>Required</sup> <a name="CrawlerName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName"></a>

```go
func CrawlerName() *string
```

- *Type:* *string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.jobName"></a>

```go
func JobName() *string
```

- *Type:* *string

---

##### `SecurityConfiguration`<sup>Required</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration"></a>

```go
func SecurityConfiguration() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueTriggerEventBatchingConditionList <a name="GlueTriggerEventBatchingConditionList" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

gluetrigger.NewGlueTriggerEventBatchingConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueTriggerEventBatchingConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.get"></a>

```go
func Get(index *f64) GlueTriggerEventBatchingConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueTriggerEventBatchingConditionOutputReference <a name="GlueTriggerEventBatchingConditionOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

gluetrigger.NewGlueTriggerEventBatchingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueTriggerEventBatchingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchWindow">ResetBatchWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchWindow` <a name="ResetBatchWindow" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchWindow"></a>

```go
func ResetBatchWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindowInput">BatchWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSize">BatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindow">BatchWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSizeInput"></a>

```go
func BatchSizeInput() *f64
```

- *Type:* *f64

---

##### `BatchWindowInput`<sup>Optional</sup> <a name="BatchWindowInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindowInput"></a>

```go
func BatchWindowInput() *f64
```

- *Type:* *f64

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSize"></a>

```go
func BatchSize() *f64
```

- *Type:* *f64

---

##### `BatchWindow`<sup>Required</sup> <a name="BatchWindow" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindow"></a>

```go
func BatchWindow() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueTriggerPredicateConditionsList <a name="GlueTriggerPredicateConditionsList" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

gluetrigger.NewGlueTriggerPredicateConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueTriggerPredicateConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.get"></a>

```go
func Get(index *f64) GlueTriggerPredicateConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueTriggerPredicateConditionsOutputReference <a name="GlueTriggerPredicateConditionsOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

gluetrigger.NewGlueTriggerPredicateConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueTriggerPredicateConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName">ResetCrawlerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState">ResetCrawlState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName">ResetJobName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator">ResetLogicalOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrawlerName` <a name="ResetCrawlerName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName"></a>

```go
func ResetCrawlerName()
```

##### `ResetCrawlState` <a name="ResetCrawlState" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState"></a>

```go
func ResetCrawlState()
```

##### `ResetJobName` <a name="ResetJobName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName"></a>

```go
func ResetJobName()
```

##### `ResetLogicalOperator` <a name="ResetLogicalOperator" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator"></a>

```go
func ResetLogicalOperator()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput">CrawlerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput">CrawlStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput">LogicalOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName">CrawlerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState">CrawlState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName">JobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator">LogicalOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CrawlerNameInput`<sup>Optional</sup> <a name="CrawlerNameInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput"></a>

```go
func CrawlerNameInput() *string
```

- *Type:* *string

---

##### `CrawlStateInput`<sup>Optional</sup> <a name="CrawlStateInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput"></a>

```go
func CrawlStateInput() *string
```

- *Type:* *string

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput"></a>

```go
func JobNameInput() *string
```

- *Type:* *string

---

##### `LogicalOperatorInput`<sup>Optional</sup> <a name="LogicalOperatorInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput"></a>

```go
func LogicalOperatorInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CrawlerName`<sup>Required</sup> <a name="CrawlerName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName"></a>

```go
func CrawlerName() *string
```

- *Type:* *string

---

##### `CrawlState`<sup>Required</sup> <a name="CrawlState" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState"></a>

```go
func CrawlState() *string
```

- *Type:* *string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName"></a>

```go
func JobName() *string
```

- *Type:* *string

---

##### `LogicalOperator`<sup>Required</sup> <a name="LogicalOperator" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator"></a>

```go
func LogicalOperator() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueTriggerPredicateOutputReference <a name="GlueTriggerPredicateOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

gluetrigger.NewGlueTriggerPredicateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueTriggerPredicateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical">ResetLogical</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLogical` <a name="ResetLogical" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical"></a>

```go
func ResetLogical()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput">LogicalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.logical">Logical</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions"></a>

```go
func Conditions() GlueTriggerPredicateConditionsList
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `LogicalInput`<sup>Optional</sup> <a name="LogicalInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput"></a>

```go
func LogicalInput() *string
```

- *Type:* *string

---

##### `Logical`<sup>Required</sup> <a name="Logical" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.logical"></a>

```go
func Logical() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue"></a>

```go
func InternalValue() GlueTriggerPredicate
```

- *Type:* <a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---


### GlueTriggerTimeoutsOutputReference <a name="GlueTriggerTimeoutsOutputReference" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/gluetrigger"

gluetrigger.NewGlueTriggerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueTriggerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueTrigger.GlueTriggerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



