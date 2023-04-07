# `dataAwsRoute53ResolverRule` Submodule <a name="`dataAwsRoute53ResolverRule` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverRule <a name="DataAwsRoute53ResolverRule" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule aws_route53_resolver_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsroute53resolverrule"

dataawsroute53resolverrule.NewDataAwsRoute53ResolverRule(scope Construct, id *string, config DataAwsRoute53ResolverRuleConfig) DataAwsRoute53ResolverRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig">DataAwsRoute53ResolverRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig">DataAwsRoute53ResolverRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetResolverEndpointId">ResetResolverEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetResolverRuleId">ResetResolverRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetRuleType">ResetRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetDomainName"></a>

```go
func ResetDomainName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetName"></a>

```go
func ResetName()
```

##### `ResetResolverEndpointId` <a name="ResetResolverEndpointId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetResolverEndpointId"></a>

```go
func ResetResolverEndpointId()
```

##### `ResetResolverRuleId` <a name="ResetResolverRuleId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetResolverRuleId"></a>

```go
func ResetResolverRuleId()
```

##### `ResetRuleType` <a name="ResetRuleType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetRuleType"></a>

```go
func ResetRuleType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsroute53resolverrule"

dataawsroute53resolverrule.DataAwsRoute53ResolverRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsroute53resolverrule"

dataawsroute53resolverrule.DataAwsRoute53ResolverRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsroute53resolverrule"

dataawsroute53resolverrule.DataAwsRoute53ResolverRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.shareStatus">ShareStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverEndpointIdInput">ResolverEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverRuleIdInput">ResolverRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ruleTypeInput">RuleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverEndpointId">ResolverEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverRuleId">ResolverRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ruleType">RuleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `ShareStatus`<sup>Required</sup> <a name="ShareStatus" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.shareStatus"></a>

```go
func ShareStatus() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResolverEndpointIdInput`<sup>Optional</sup> <a name="ResolverEndpointIdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverEndpointIdInput"></a>

```go
func ResolverEndpointIdInput() *string
```

- *Type:* *string

---

##### `ResolverRuleIdInput`<sup>Optional</sup> <a name="ResolverRuleIdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverRuleIdInput"></a>

```go
func ResolverRuleIdInput() *string
```

- *Type:* *string

---

##### `RuleTypeInput`<sup>Optional</sup> <a name="RuleTypeInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ruleTypeInput"></a>

```go
func RuleTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResolverEndpointId`<sup>Required</sup> <a name="ResolverEndpointId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverEndpointId"></a>

```go
func ResolverEndpointId() *string
```

- *Type:* *string

---

##### `ResolverRuleId`<sup>Required</sup> <a name="ResolverRuleId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.resolverRuleId"></a>

```go
func ResolverRuleId() *string
```

- *Type:* *string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.ruleType"></a>

```go
func RuleType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverRuleConfig <a name="DataAwsRoute53ResolverRuleConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsroute53resolverrule"

&dataawsroute53resolverrule.DataAwsRoute53ResolverRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	Id: *string,
	Name: *string,
	ResolverEndpointId: *string,
	ResolverRuleId: *string,
	RuleType: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule#domain_name DataAwsRoute53ResolverRule#domain_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule#id DataAwsRoute53ResolverRule#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule#name DataAwsRoute53ResolverRule#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.resolverEndpointId">ResolverEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule#resolver_endpoint_id DataAwsRoute53ResolverRule#resolver_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.resolverRuleId">ResolverRuleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule#resolver_rule_id DataAwsRoute53ResolverRule#resolver_rule_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.ruleType">RuleType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule#rule_type DataAwsRoute53ResolverRule#rule_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule#tags DataAwsRoute53ResolverRule#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule#domain_name DataAwsRoute53ResolverRule#domain_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule#id DataAwsRoute53ResolverRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule#name DataAwsRoute53ResolverRule#name}.

---

##### `ResolverEndpointId`<sup>Optional</sup> <a name="ResolverEndpointId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.resolverEndpointId"></a>

```go
ResolverEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule#resolver_endpoint_id DataAwsRoute53ResolverRule#resolver_endpoint_id}.

---

##### `ResolverRuleId`<sup>Optional</sup> <a name="ResolverRuleId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.resolverRuleId"></a>

```go
ResolverRuleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule#resolver_rule_id DataAwsRoute53ResolverRule#resolver_rule_id}.

---

##### `RuleType`<sup>Optional</sup> <a name="RuleType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.ruleType"></a>

```go
RuleType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule#rule_type DataAwsRoute53ResolverRule#rule_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsRoute53ResolverRule.DataAwsRoute53ResolverRuleConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rule#tags DataAwsRoute53ResolverRule#tags}.

---



