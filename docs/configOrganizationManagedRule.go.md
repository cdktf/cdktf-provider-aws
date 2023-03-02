# `configOrganizationManagedRule` Submodule <a name="`configOrganizationManagedRule` Submodule" id="@cdktf/provider-aws.configOrganizationManagedRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationManagedRule <a name="ConfigOrganizationManagedRule" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule aws_config_organization_managed_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configorganizationmanagedrule"

configorganizationmanagedrule.NewConfigOrganizationManagedRule(scope Construct, id *string, config ConfigOrganizationManagedRuleConfig) ConfigOrganizationManagedRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig">ConfigOrganizationManagedRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig">ConfigOrganizationManagedRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetExcludedAccounts">ResetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetInputParameters">ResetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceIdScope">ResetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceTypesScope">ResetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagKeyScope">ResetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagValueScope">ResetTagValueScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.putTimeouts"></a>

```go
func PutTimeouts(value ConfigOrganizationManagedRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExcludedAccounts` <a name="ResetExcludedAccounts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetExcludedAccounts"></a>

```go
func ResetExcludedAccounts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetId"></a>

```go
func ResetId()
```

##### `ResetInputParameters` <a name="ResetInputParameters" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetInputParameters"></a>

```go
func ResetInputParameters()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetMaximumExecutionFrequency"></a>

```go
func ResetMaximumExecutionFrequency()
```

##### `ResetResourceIdScope` <a name="ResetResourceIdScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceIdScope"></a>

```go
func ResetResourceIdScope()
```

##### `ResetResourceTypesScope` <a name="ResetResourceTypesScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetResourceTypesScope"></a>

```go
func ResetResourceTypesScope()
```

##### `ResetTagKeyScope` <a name="ResetTagKeyScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagKeyScope"></a>

```go
func ResetTagKeyScope()
```

##### `ResetTagValueScope` <a name="ResetTagValueScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTagValueScope"></a>

```go
func ResetTagValueScope()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configorganizationmanagedrule"

configorganizationmanagedrule.ConfigOrganizationManagedRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configorganizationmanagedrule"

configorganizationmanagedrule.ConfigOrganizationManagedRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configorganizationmanagedrule"

configorganizationmanagedrule.ConfigOrganizationManagedRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference">ConfigOrganizationManagedRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccountsInput">ExcludedAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParametersInput">InputParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScopeInput">ResourceIdScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScopeInput">ResourceTypesScopeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifierInput">RuleIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScopeInput">TagKeyScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScopeInput">TagValueScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccounts">ExcludedAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParameters">InputParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScope">ResourceIdScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifier">RuleIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScope">TagKeyScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScope">TagValueScope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeouts"></a>

```go
func Timeouts() ConfigOrganizationManagedRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference">ConfigOrganizationManagedRuleTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExcludedAccountsInput`<sup>Optional</sup> <a name="ExcludedAccountsInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccountsInput"></a>

```go
func ExcludedAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputParametersInput`<sup>Optional</sup> <a name="InputParametersInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParametersInput"></a>

```go
func InputParametersInput() *string
```

- *Type:* *string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequencyInput"></a>

```go
func MaximumExecutionFrequencyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceIdScopeInput`<sup>Optional</sup> <a name="ResourceIdScopeInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScopeInput"></a>

```go
func ResourceIdScopeInput() *string
```

- *Type:* *string

---

##### `ResourceTypesScopeInput`<sup>Optional</sup> <a name="ResourceTypesScopeInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScopeInput"></a>

```go
func ResourceTypesScopeInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuleIdentifierInput`<sup>Optional</sup> <a name="RuleIdentifierInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifierInput"></a>

```go
func RuleIdentifierInput() *string
```

- *Type:* *string

---

##### `TagKeyScopeInput`<sup>Optional</sup> <a name="TagKeyScopeInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScopeInput"></a>

```go
func TagKeyScopeInput() *string
```

- *Type:* *string

---

##### `TagValueScopeInput`<sup>Optional</sup> <a name="TagValueScopeInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScopeInput"></a>

```go
func TagValueScopeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExcludedAccounts`<sup>Required</sup> <a name="ExcludedAccounts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.excludedAccounts"></a>

```go
func ExcludedAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.inputParameters"></a>

```go
func InputParameters() *string
```

- *Type:* *string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.maximumExecutionFrequency"></a>

```go
func MaximumExecutionFrequency() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceIdScope`<sup>Required</sup> <a name="ResourceIdScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceIdScope"></a>

```go
func ResourceIdScope() *string
```

- *Type:* *string

---

##### `ResourceTypesScope`<sup>Required</sup> <a name="ResourceTypesScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.resourceTypesScope"></a>

```go
func ResourceTypesScope() *[]*string
```

- *Type:* *[]*string

---

##### `RuleIdentifier`<sup>Required</sup> <a name="RuleIdentifier" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.ruleIdentifier"></a>

```go
func RuleIdentifier() *string
```

- *Type:* *string

---

##### `TagKeyScope`<sup>Required</sup> <a name="TagKeyScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagKeyScope"></a>

```go
func TagKeyScope() *string
```

- *Type:* *string

---

##### `TagValueScope`<sup>Required</sup> <a name="TagValueScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tagValueScope"></a>

```go
func TagValueScope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationManagedRuleConfig <a name="ConfigOrganizationManagedRuleConfig" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configorganizationmanagedrule"

&configorganizationmanagedrule.ConfigOrganizationManagedRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RuleIdentifier: *string,
	Description: *string,
	ExcludedAccounts: *[]*string,
	Id: *string,
	InputParameters: *string,
	MaximumExecutionFrequency: *string,
	ResourceIdScope: *string,
	ResourceTypesScope: *[]*string,
	TagKeyScope: *string,
	TagValueScope: *string,
	Timeouts: github.com/cdktf/cdktf-provider-aws-go/aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#name ConfigOrganizationManagedRule#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.ruleIdentifier">RuleIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#rule_identifier ConfigOrganizationManagedRule#rule_identifier}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#description ConfigOrganizationManagedRule#description}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.excludedAccounts">ExcludedAccounts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#excluded_accounts ConfigOrganizationManagedRule#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#id ConfigOrganizationManagedRule#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.inputParameters">InputParameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#input_parameters ConfigOrganizationManagedRule#input_parameters}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#maximum_execution_frequency ConfigOrganizationManagedRule#maximum_execution_frequency}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceIdScope">ResourceIdScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_id_scope ConfigOrganizationManagedRule#resource_id_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_types_scope ConfigOrganizationManagedRule#resource_types_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagKeyScope">TagKeyScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_key_scope ConfigOrganizationManagedRule#tag_key_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagValueScope">TagValueScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_value_scope ConfigOrganizationManagedRule#tag_value_scope}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#name ConfigOrganizationManagedRule#name}.

---

##### `RuleIdentifier`<sup>Required</sup> <a name="RuleIdentifier" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.ruleIdentifier"></a>

```go
RuleIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#rule_identifier ConfigOrganizationManagedRule#rule_identifier}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#description ConfigOrganizationManagedRule#description}.

---

##### `ExcludedAccounts`<sup>Optional</sup> <a name="ExcludedAccounts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.excludedAccounts"></a>

```go
ExcludedAccounts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#excluded_accounts ConfigOrganizationManagedRule#excluded_accounts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#id ConfigOrganizationManagedRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputParameters`<sup>Optional</sup> <a name="InputParameters" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.inputParameters"></a>

```go
InputParameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#input_parameters ConfigOrganizationManagedRule#input_parameters}.

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.maximumExecutionFrequency"></a>

```go
MaximumExecutionFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#maximum_execution_frequency ConfigOrganizationManagedRule#maximum_execution_frequency}.

---

##### `ResourceIdScope`<sup>Optional</sup> <a name="ResourceIdScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceIdScope"></a>

```go
ResourceIdScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_id_scope ConfigOrganizationManagedRule#resource_id_scope}.

---

##### `ResourceTypesScope`<sup>Optional</sup> <a name="ResourceTypesScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.resourceTypesScope"></a>

```go
ResourceTypesScope *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#resource_types_scope ConfigOrganizationManagedRule#resource_types_scope}.

---

##### `TagKeyScope`<sup>Optional</sup> <a name="TagKeyScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagKeyScope"></a>

```go
TagKeyScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_key_scope ConfigOrganizationManagedRule#tag_key_scope}.

---

##### `TagValueScope`<sup>Optional</sup> <a name="TagValueScope" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.tagValueScope"></a>

```go
TagValueScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#tag_value_scope ConfigOrganizationManagedRule#tag_value_scope}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleConfig.property.timeouts"></a>

```go
Timeouts ConfigOrganizationManagedRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts">ConfigOrganizationManagedRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#timeouts ConfigOrganizationManagedRule#timeouts}

---

### ConfigOrganizationManagedRuleTimeouts <a name="ConfigOrganizationManagedRuleTimeouts" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configorganizationmanagedrule"

&configorganizationmanagedrule.ConfigOrganizationManagedRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#create ConfigOrganizationManagedRule#create}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#delete ConfigOrganizationManagedRule#delete}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#update ConfigOrganizationManagedRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#create ConfigOrganizationManagedRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#delete ConfigOrganizationManagedRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule#update ConfigOrganizationManagedRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationManagedRuleTimeoutsOutputReference <a name="ConfigOrganizationManagedRuleTimeoutsOutputReference" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/configorganizationmanagedrule"

configorganizationmanagedrule.NewConfigOrganizationManagedRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigOrganizationManagedRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.configOrganizationManagedRule.ConfigOrganizationManagedRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



