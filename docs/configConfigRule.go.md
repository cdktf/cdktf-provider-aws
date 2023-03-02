# `configConfigRule` Submodule <a name="`configConfigRule` Submodule" id="@cdktf/provider-aws.configConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigRule <a name="ConfigConfigRule" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule aws_config_config_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigrule"

configconfigrule.NewConfigConfigRule(scope Construct, id *string, config ConfigConfigRuleConfig) ConfigConfigRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig">ConfigConfigRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig">ConfigConfigRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetInputParameters">ResetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutScope` <a name="PutScope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putScope"></a>

```go
func PutScope(value ConfigConfigRuleScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putSource"></a>

```go
func PutSource(value ConfigConfigRuleSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetId"></a>

```go
func ResetId()
```

##### `ResetInputParameters` <a name="ResetInputParameters" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetInputParameters"></a>

```go
func ResetInputParameters()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetMaximumExecutionFrequency"></a>

```go
func ResetMaximumExecutionFrequency()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetScope"></a>

```go
func ResetScope()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigrule"

configconfigrule.ConfigConfigRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigrule"

configconfigrule.ConfigConfigRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigrule"

configconfigrule.ConfigConfigRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference">ConfigConfigRuleScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference">ConfigConfigRuleSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.inputParametersInput">InputParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.inputParameters">InputParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.scope"></a>

```go
func Scope() ConfigConfigRuleScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference">ConfigConfigRuleScopeOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.source"></a>

```go
func Source() ConfigConfigRuleSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference">ConfigConfigRuleSourceOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputParametersInput`<sup>Optional</sup> <a name="InputParametersInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.inputParametersInput"></a>

```go
func InputParametersInput() *string
```

- *Type:* *string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequencyInput"></a>

```go
func MaximumExecutionFrequencyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.scopeInput"></a>

```go
func ScopeInput() ConfigConfigRuleScope
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.sourceInput"></a>

```go
func SourceInput() ConfigConfigRuleSource
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.inputParameters"></a>

```go
func InputParameters() *string
```

- *Type:* *string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.maximumExecutionFrequency"></a>

```go
func MaximumExecutionFrequency() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigRuleConfig <a name="ConfigConfigRuleConfig" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigrule"

&configconfigrule.ConfigConfigRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Source: github.com/cdktf/cdktf-provider-aws-go/aws.configConfigRule.ConfigConfigRuleSource,
	Description: *string,
	Id: *string,
	InputParameters: *string,
	MaximumExecutionFrequency: *string,
	Scope: github.com/cdktf/cdktf-provider-aws-go/aws.configConfigRule.ConfigConfigRuleScope,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#name ConfigConfigRule#name}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#description ConfigConfigRule#description}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#id ConfigConfigRule#id}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.inputParameters">InputParameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#input_parameters ConfigConfigRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.scope">Scope</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags ConfigConfigRule#tags}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags_all ConfigConfigRule#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#name ConfigConfigRule#name}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.source"></a>

```go
Source ConfigConfigRuleSource
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#source ConfigConfigRule#source}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#description ConfigConfigRule#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#id ConfigConfigRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputParameters`<sup>Optional</sup> <a name="InputParameters" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.inputParameters"></a>

```go
InputParameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#input_parameters ConfigConfigRule#input_parameters}.

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.maximumExecutionFrequency"></a>

```go
MaximumExecutionFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.scope"></a>

```go
Scope ConfigConfigRuleScope
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

scope block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#scope ConfigConfigRule#scope}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags ConfigConfigRule#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tags_all ConfigConfigRule#tags_all}.

---

### ConfigConfigRuleScope <a name="ConfigConfigRuleScope" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigrule"

&configconfigrule.ConfigConfigRuleScope {
	ComplianceResourceId: *string,
	ComplianceResourceTypes: *[]*string,
	TagKey: *string,
	TagValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceId">ComplianceResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#compliance_resource_id ConfigConfigRule#compliance_resource_id}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceTypes">ComplianceResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#compliance_resource_types ConfigConfigRule#compliance_resource_types}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagKey">TagKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tag_key ConfigConfigRule#tag_key}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagValue">TagValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tag_value ConfigConfigRule#tag_value}. |

---

##### `ComplianceResourceId`<sup>Optional</sup> <a name="ComplianceResourceId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceId"></a>

```go
ComplianceResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#compliance_resource_id ConfigConfigRule#compliance_resource_id}.

---

##### `ComplianceResourceTypes`<sup>Optional</sup> <a name="ComplianceResourceTypes" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.complianceResourceTypes"></a>

```go
ComplianceResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#compliance_resource_types ConfigConfigRule#compliance_resource_types}.

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tag_key ConfigConfigRule#tag_key}.

---

##### `TagValue`<sup>Optional</sup> <a name="TagValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope.property.tagValue"></a>

```go
TagValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#tag_value ConfigConfigRule#tag_value}.

---

### ConfigConfigRuleSource <a name="ConfigConfigRuleSource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigrule"

&configconfigrule.ConfigConfigRuleSource {
	Owner: *string,
	CustomPolicyDetails: github.com/cdktf/cdktf-provider-aws-go/aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails,
	SourceDetail: interface{},
	SourceIdentifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#owner ConfigConfigRule#owner}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.customPolicyDetails">CustomPolicyDetails</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | custom_policy_details block. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceDetail">SourceDetail</a></code> | <code>interface{}</code> | source_detail block. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceIdentifier">SourceIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#source_identifier ConfigConfigRule#source_identifier}. |

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#owner ConfigConfigRule#owner}.

---

##### `CustomPolicyDetails`<sup>Optional</sup> <a name="CustomPolicyDetails" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.customPolicyDetails"></a>

```go
CustomPolicyDetails ConfigConfigRuleSourceCustomPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

custom_policy_details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#custom_policy_details ConfigConfigRule#custom_policy_details}

---

##### `SourceDetail`<sup>Optional</sup> <a name="SourceDetail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceDetail"></a>

```go
SourceDetail interface{}
```

- *Type:* interface{}

source_detail block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#source_detail ConfigConfigRule#source_detail}

---

##### `SourceIdentifier`<sup>Optional</sup> <a name="SourceIdentifier" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource.property.sourceIdentifier"></a>

```go
SourceIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#source_identifier ConfigConfigRule#source_identifier}.

---

### ConfigConfigRuleSourceCustomPolicyDetails <a name="ConfigConfigRuleSourceCustomPolicyDetails" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigrule"

&configconfigrule.ConfigConfigRuleSourceCustomPolicyDetails {
	PolicyRuntime: *string,
	PolicyText: *string,
	EnableDebugLogDelivery: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyRuntime">PolicyRuntime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#policy_runtime ConfigConfigRule#policy_runtime}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyText">PolicyText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#policy_text ConfigConfigRule#policy_text}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.enableDebugLogDelivery">EnableDebugLogDelivery</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#enable_debug_log_delivery ConfigConfigRule#enable_debug_log_delivery}. |

---

##### `PolicyRuntime`<sup>Required</sup> <a name="PolicyRuntime" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyRuntime"></a>

```go
PolicyRuntime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#policy_runtime ConfigConfigRule#policy_runtime}.

---

##### `PolicyText`<sup>Required</sup> <a name="PolicyText" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.policyText"></a>

```go
PolicyText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#policy_text ConfigConfigRule#policy_text}.

---

##### `EnableDebugLogDelivery`<sup>Optional</sup> <a name="EnableDebugLogDelivery" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails.property.enableDebugLogDelivery"></a>

```go
EnableDebugLogDelivery interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#enable_debug_log_delivery ConfigConfigRule#enable_debug_log_delivery}.

---

### ConfigConfigRuleSourceSourceDetail <a name="ConfigConfigRuleSourceSourceDetail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigrule"

&configconfigrule.ConfigConfigRuleSourceSourceDetail {
	EventSource: *string,
	MaximumExecutionFrequency: *string,
	MessageType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.eventSource">EventSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#event_source ConfigConfigRule#event_source}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.messageType">MessageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#message_type ConfigConfigRule#message_type}. |

---

##### `EventSource`<sup>Optional</sup> <a name="EventSource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.eventSource"></a>

```go
EventSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#event_source ConfigConfigRule#event_source}.

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.maximumExecutionFrequency"></a>

```go
MaximumExecutionFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}.

---

##### `MessageType`<sup>Optional</sup> <a name="MessageType" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetail.property.messageType"></a>

```go
MessageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule#message_type ConfigConfigRule#message_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigRuleScopeOutputReference <a name="ConfigConfigRuleScopeOutputReference" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigrule"

configconfigrule.NewConfigConfigRuleScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigConfigRuleScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceId">ResetComplianceResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceTypes">ResetComplianceResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagKey">ResetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagValue">ResetTagValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComplianceResourceId` <a name="ResetComplianceResourceId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceId"></a>

```go
func ResetComplianceResourceId()
```

##### `ResetComplianceResourceTypes` <a name="ResetComplianceResourceTypes" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetComplianceResourceTypes"></a>

```go
func ResetComplianceResourceTypes()
```

##### `ResetTagKey` <a name="ResetTagKey" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagKey"></a>

```go
func ResetTagKey()
```

##### `ResetTagValue` <a name="ResetTagValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.resetTagValue"></a>

```go
func ResetTagValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceIdInput">ComplianceResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypesInput">ComplianceResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceId">ComplianceResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypes">ComplianceResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValue">TagValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComplianceResourceIdInput`<sup>Optional</sup> <a name="ComplianceResourceIdInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceIdInput"></a>

```go
func ComplianceResourceIdInput() *string
```

- *Type:* *string

---

##### `ComplianceResourceTypesInput`<sup>Optional</sup> <a name="ComplianceResourceTypesInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypesInput"></a>

```go
func ComplianceResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValueInput"></a>

```go
func TagValueInput() *string
```

- *Type:* *string

---

##### `ComplianceResourceId`<sup>Required</sup> <a name="ComplianceResourceId" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceId"></a>

```go
func ComplianceResourceId() *string
```

- *Type:* *string

---

##### `ComplianceResourceTypes`<sup>Required</sup> <a name="ComplianceResourceTypes" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.complianceResourceTypes"></a>

```go
func ComplianceResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.tagValue"></a>

```go
func TagValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigConfigRuleScope
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleScope">ConfigConfigRuleScope</a>

---


### ConfigConfigRuleSourceCustomPolicyDetailsOutputReference <a name="ConfigConfigRuleSourceCustomPolicyDetailsOutputReference" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigrule"

configconfigrule.NewConfigConfigRuleSourceCustomPolicyDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigConfigRuleSourceCustomPolicyDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetEnableDebugLogDelivery">ResetEnableDebugLogDelivery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableDebugLogDelivery` <a name="ResetEnableDebugLogDelivery" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.resetEnableDebugLogDelivery"></a>

```go
func ResetEnableDebugLogDelivery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDeliveryInput">EnableDebugLogDeliveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntimeInput">PolicyRuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyTextInput">PolicyTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDelivery">EnableDebugLogDelivery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntime">PolicyRuntime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyText">PolicyText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableDebugLogDeliveryInput`<sup>Optional</sup> <a name="EnableDebugLogDeliveryInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDeliveryInput"></a>

```go
func EnableDebugLogDeliveryInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyRuntimeInput`<sup>Optional</sup> <a name="PolicyRuntimeInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntimeInput"></a>

```go
func PolicyRuntimeInput() *string
```

- *Type:* *string

---

##### `PolicyTextInput`<sup>Optional</sup> <a name="PolicyTextInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyTextInput"></a>

```go
func PolicyTextInput() *string
```

- *Type:* *string

---

##### `EnableDebugLogDelivery`<sup>Required</sup> <a name="EnableDebugLogDelivery" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.enableDebugLogDelivery"></a>

```go
func EnableDebugLogDelivery() interface{}
```

- *Type:* interface{}

---

##### `PolicyRuntime`<sup>Required</sup> <a name="PolicyRuntime" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyRuntime"></a>

```go
func PolicyRuntime() *string
```

- *Type:* *string

---

##### `PolicyText`<sup>Required</sup> <a name="PolicyText" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.policyText"></a>

```go
func PolicyText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigConfigRuleSourceCustomPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---


### ConfigConfigRuleSourceOutputReference <a name="ConfigConfigRuleSourceOutputReference" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigrule"

configconfigrule.NewConfigConfigRuleSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigConfigRuleSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails">PutCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetail">PutSourceDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetCustomPolicyDetails">ResetCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceDetail">ResetSourceDetail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceIdentifier">ResetSourceIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPolicyDetails` <a name="PutCustomPolicyDetails" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails"></a>

```go
func PutCustomPolicyDetails(value ConfigConfigRuleSourceCustomPolicyDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putCustomPolicyDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---

##### `PutSourceDetail` <a name="PutSourceDetail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetail"></a>

```go
func PutSourceDetail(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.putSourceDetail.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomPolicyDetails` <a name="ResetCustomPolicyDetails" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetCustomPolicyDetails"></a>

```go
func ResetCustomPolicyDetails()
```

##### `ResetSourceDetail` <a name="ResetSourceDetail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceDetail"></a>

```go
func ResetSourceDetail()
```

##### `ResetSourceIdentifier` <a name="ResetSourceIdentifier" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.resetSourceIdentifier"></a>

```go
func ResetSourceIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetails">CustomPolicyDetails</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference">ConfigConfigRuleSourceCustomPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetail">SourceDetail</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList">ConfigConfigRuleSourceSourceDetailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetailsInput">CustomPolicyDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetailInput">SourceDetailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifierInput">SourceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifier">SourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomPolicyDetails`<sup>Required</sup> <a name="CustomPolicyDetails" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetails"></a>

```go
func CustomPolicyDetails() ConfigConfigRuleSourceCustomPolicyDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetailsOutputReference">ConfigConfigRuleSourceCustomPolicyDetailsOutputReference</a>

---

##### `SourceDetail`<sup>Required</sup> <a name="SourceDetail" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetail"></a>

```go
func SourceDetail() ConfigConfigRuleSourceSourceDetailList
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList">ConfigConfigRuleSourceSourceDetailList</a>

---

##### `CustomPolicyDetailsInput`<sup>Optional</sup> <a name="CustomPolicyDetailsInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.customPolicyDetailsInput"></a>

```go
func CustomPolicyDetailsInput() ConfigConfigRuleSourceCustomPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceCustomPolicyDetails">ConfigConfigRuleSourceCustomPolicyDetails</a>

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `SourceDetailInput`<sup>Optional</sup> <a name="SourceDetailInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceDetailInput"></a>

```go
func SourceDetailInput() interface{}
```

- *Type:* interface{}

---

##### `SourceIdentifierInput`<sup>Optional</sup> <a name="SourceIdentifierInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifierInput"></a>

```go
func SourceIdentifierInput() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `SourceIdentifier`<sup>Required</sup> <a name="SourceIdentifier" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.sourceIdentifier"></a>

```go
func SourceIdentifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() ConfigConfigRuleSource
```

- *Type:* <a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSource">ConfigConfigRuleSource</a>

---


### ConfigConfigRuleSourceSourceDetailList <a name="ConfigConfigRuleSourceSourceDetailList" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigrule"

configconfigrule.NewConfigConfigRuleSourceSourceDetailList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigConfigRuleSourceSourceDetailList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.get"></a>

```go
func Get(index *f64) ConfigConfigRuleSourceSourceDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConfigRuleSourceSourceDetailOutputReference <a name="ConfigConfigRuleSourceSourceDetailOutputReference" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configconfigrule"

configconfigrule.NewConfigConfigRuleSourceSourceDetailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigConfigRuleSourceSourceDetailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetEventSource">ResetEventSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMessageType">ResetMessageType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventSource` <a name="ResetEventSource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetEventSource"></a>

```go
func ResetEventSource()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMaximumExecutionFrequency"></a>

```go
func ResetMaximumExecutionFrequency()
```

##### `ResetMessageType` <a name="ResetMessageType" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.resetMessageType"></a>

```go
func ResetMessageType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSourceInput">EventSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageTypeInput">MessageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSource">EventSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageType">MessageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventSourceInput`<sup>Optional</sup> <a name="EventSourceInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSourceInput"></a>

```go
func EventSourceInput() *string
```

- *Type:* *string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequencyInput"></a>

```go
func MaximumExecutionFrequencyInput() *string
```

- *Type:* *string

---

##### `MessageTypeInput`<sup>Optional</sup> <a name="MessageTypeInput" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageTypeInput"></a>

```go
func MessageTypeInput() *string
```

- *Type:* *string

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.eventSource"></a>

```go
func EventSource() *string
```

- *Type:* *string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.maximumExecutionFrequency"></a>

```go
func MaximumExecutionFrequency() *string
```

- *Type:* *string

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.messageType"></a>

```go
func MessageType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configConfigRule.ConfigConfigRuleSourceSourceDetailOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



