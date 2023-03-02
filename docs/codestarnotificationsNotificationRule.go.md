# `codestarnotificationsNotificationRule` Submodule <a name="`codestarnotificationsNotificationRule` Submodule" id="@cdktf/provider-aws.codestarnotificationsNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarnotificationsNotificationRule <a name="CodestarnotificationsNotificationRule" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule aws_codestarnotifications_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codestarnotificationsnotificationrule"

codestarnotificationsnotificationrule.NewCodestarnotificationsNotificationRule(scope Construct, id *string, config CodestarnotificationsNotificationRuleConfig) CodestarnotificationsNotificationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig">CodestarnotificationsNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig">CodestarnotificationsNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.putTarget"></a>

```go
func PutTarget(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.putTarget.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetId"></a>

```go
func ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.resetTarget"></a>

```go
func ResetTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codestarnotificationsnotificationrule"

codestarnotificationsnotificationrule.CodestarnotificationsNotificationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codestarnotificationsnotificationrule"

codestarnotificationsnotificationrule.CodestarnotificationsNotificationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codestarnotificationsnotificationrule"

codestarnotificationsnotificationrule.CodestarnotificationsNotificationRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList">CodestarnotificationsNotificationRuleTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailTypeInput">DetailTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIdsInput">EventTypeIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetInput">TargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailType">DetailType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIds">EventTypeIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.target"></a>

```go
func Target() CodestarnotificationsNotificationRuleTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList">CodestarnotificationsNotificationRuleTargetList</a>

---

##### `DetailTypeInput`<sup>Optional</sup> <a name="DetailTypeInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailTypeInput"></a>

```go
func DetailTypeInput() *string
```

- *Type:* *string

---

##### `EventTypeIdsInput`<sup>Optional</sup> <a name="EventTypeIdsInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIdsInput"></a>

```go
func EventTypeIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.targetInput"></a>

```go
func TargetInput() interface{}
```

- *Type:* interface{}

---

##### `DetailType`<sup>Required</sup> <a name="DetailType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.detailType"></a>

```go
func DetailType() *string
```

- *Type:* *string

---

##### `EventTypeIds`<sup>Required</sup> <a name="EventTypeIds" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.eventTypeIds"></a>

```go
func EventTypeIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarnotificationsNotificationRuleConfig <a name="CodestarnotificationsNotificationRuleConfig" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codestarnotificationsnotificationrule"

&codestarnotificationsnotificationrule.CodestarnotificationsNotificationRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DetailType: *string,
	EventTypeIds: *[]*string,
	Name: *string,
	Resource: *string,
	Id: *string,
	Status: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Target: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.detailType">DetailType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.eventTypeIds">EventTypeIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.resource">Resource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#id CodestarnotificationsNotificationRule#id}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags_all CodestarnotificationsNotificationRule#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.target">Target</a></code> | <code>interface{}</code> | target block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DetailType`<sup>Required</sup> <a name="DetailType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.detailType"></a>

```go
DetailType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}.

---

##### `EventTypeIds`<sup>Required</sup> <a name="EventTypeIds" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.eventTypeIds"></a>

```go
EventTypeIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}.

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#id CodestarnotificationsNotificationRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#tags_all CodestarnotificationsNotificationRule#tags_all}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleConfig.property.target"></a>

```go
Target interface{}
```

- *Type:* interface{}

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#target CodestarnotificationsNotificationRule#target}

---

### CodestarnotificationsNotificationRuleTarget <a name="CodestarnotificationsNotificationRuleTarget" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codestarnotificationsnotificationrule"

&codestarnotificationsnotificationrule.CodestarnotificationsNotificationRuleTarget {
	Address: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget.property.address">Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#address CodestarnotificationsNotificationRule#address}. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#type CodestarnotificationsNotificationRule#type}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget.property.address"></a>

```go
Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#address CodestarnotificationsNotificationRule#address}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTarget.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule#type CodestarnotificationsNotificationRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodestarnotificationsNotificationRuleTargetList <a name="CodestarnotificationsNotificationRuleTargetList" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codestarnotificationsnotificationrule"

codestarnotificationsnotificationrule.NewCodestarnotificationsNotificationRuleTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CodestarnotificationsNotificationRuleTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.get"></a>

```go
func Get(index *f64) CodestarnotificationsNotificationRuleTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CodestarnotificationsNotificationRuleTargetOutputReference <a name="CodestarnotificationsNotificationRuleTargetOutputReference" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/codestarnotificationsnotificationrule"

codestarnotificationsnotificationrule.NewCodestarnotificationsNotificationRuleTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CodestarnotificationsNotificationRuleTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.codestarnotificationsNotificationRule.CodestarnotificationsNotificationRuleTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



