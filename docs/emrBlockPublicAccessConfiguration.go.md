# `emrBlockPublicAccessConfiguration` Submodule <a name="`emrBlockPublicAccessConfiguration` Submodule" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrBlockPublicAccessConfiguration <a name="EmrBlockPublicAccessConfiguration" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_block_public_access_configuration aws_emr_block_public_access_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrblockpublicaccessconfiguration"

emrblockpublicaccessconfiguration.NewEmrBlockPublicAccessConfiguration(scope Construct, id *string, config EmrBlockPublicAccessConfigurationConfig) EmrBlockPublicAccessConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig">EmrBlockPublicAccessConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig">EmrBlockPublicAccessConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.putPermittedPublicSecurityGroupRuleRange">PutPermittedPublicSecurityGroupRuleRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetPermittedPublicSecurityGroupRuleRange">ResetPermittedPublicSecurityGroupRuleRange</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPermittedPublicSecurityGroupRuleRange` <a name="PutPermittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.putPermittedPublicSecurityGroupRuleRange"></a>

```go
func PutPermittedPublicSecurityGroupRuleRange(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.putPermittedPublicSecurityGroupRuleRange.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetPermittedPublicSecurityGroupRuleRange` <a name="ResetPermittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.resetPermittedPublicSecurityGroupRuleRange"></a>

```go
func ResetPermittedPublicSecurityGroupRuleRange()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrblockpublicaccessconfiguration"

emrblockpublicaccessconfiguration.EmrBlockPublicAccessConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrblockpublicaccessconfiguration"

emrblockpublicaccessconfiguration.EmrBlockPublicAccessConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrblockpublicaccessconfiguration"

emrblockpublicaccessconfiguration.EmrBlockPublicAccessConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRange">PermittedPublicSecurityGroupRuleRange</a></code> | <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRulesInput">BlockPublicSecurityGroupRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRangeInput">PermittedPublicSecurityGroupRuleRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRules">BlockPublicSecurityGroupRules</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PermittedPublicSecurityGroupRuleRange`<sup>Required</sup> <a name="PermittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRange"></a>

```go
func PermittedPublicSecurityGroupRuleRange() EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList
```

- *Type:* <a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList">EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList</a>

---

##### `BlockPublicSecurityGroupRulesInput`<sup>Optional</sup> <a name="BlockPublicSecurityGroupRulesInput" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRulesInput"></a>

```go
func BlockPublicSecurityGroupRulesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PermittedPublicSecurityGroupRuleRangeInput`<sup>Optional</sup> <a name="PermittedPublicSecurityGroupRuleRangeInput" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.permittedPublicSecurityGroupRuleRangeInput"></a>

```go
func PermittedPublicSecurityGroupRuleRangeInput() interface{}
```

- *Type:* interface{}

---

##### `BlockPublicSecurityGroupRules`<sup>Required</sup> <a name="BlockPublicSecurityGroupRules" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.blockPublicSecurityGroupRules"></a>

```go
func BlockPublicSecurityGroupRules() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrBlockPublicAccessConfigurationConfig <a name="EmrBlockPublicAccessConfigurationConfig" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrblockpublicaccessconfiguration"

&emrblockpublicaccessconfiguration.EmrBlockPublicAccessConfigurationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BlockPublicSecurityGroupRules: interface{},
	Id: *string,
	PermittedPublicSecurityGroupRuleRange: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.blockPublicSecurityGroupRules">BlockPublicSecurityGroupRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_block_public_access_configuration#block_public_security_group_rules EmrBlockPublicAccessConfiguration#block_public_security_group_rules}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_block_public_access_configuration#id EmrBlockPublicAccessConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.permittedPublicSecurityGroupRuleRange">PermittedPublicSecurityGroupRuleRange</a></code> | <code>interface{}</code> | permitted_public_security_group_rule_range block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlockPublicSecurityGroupRules`<sup>Required</sup> <a name="BlockPublicSecurityGroupRules" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.blockPublicSecurityGroupRules"></a>

```go
BlockPublicSecurityGroupRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_block_public_access_configuration#block_public_security_group_rules EmrBlockPublicAccessConfiguration#block_public_security_group_rules}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_block_public_access_configuration#id EmrBlockPublicAccessConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PermittedPublicSecurityGroupRuleRange`<sup>Optional</sup> <a name="PermittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationConfig.property.permittedPublicSecurityGroupRuleRange"></a>

```go
PermittedPublicSecurityGroupRuleRange interface{}
```

- *Type:* interface{}

permitted_public_security_group_rule_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_block_public_access_configuration#permitted_public_security_group_rule_range EmrBlockPublicAccessConfiguration#permitted_public_security_group_rule_range}

---

### EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange <a name="EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrblockpublicaccessconfiguration"

&emrblockpublicaccessconfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange {
	MaxRange: *f64,
	MinRange: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.maxRange">MaxRange</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_block_public_access_configuration#max_range EmrBlockPublicAccessConfiguration#max_range}. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.minRange">MinRange</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_block_public_access_configuration#min_range EmrBlockPublicAccessConfiguration#min_range}. |

---

##### `MaxRange`<sup>Required</sup> <a name="MaxRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.maxRange"></a>

```go
MaxRange *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_block_public_access_configuration#max_range EmrBlockPublicAccessConfiguration#max_range}.

---

##### `MinRange`<sup>Required</sup> <a name="MinRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange.property.minRange"></a>

```go
MinRange *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_block_public_access_configuration#min_range EmrBlockPublicAccessConfiguration#min_range}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList <a name="EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrblockpublicaccessconfiguration"

emrblockpublicaccessconfiguration.NewEmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.get"></a>

```go
func Get(index *f64) EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference <a name="EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/emrblockpublicaccessconfiguration"

emrblockpublicaccessconfiguration.NewEmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRangeInput">MaxRangeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRangeInput">MinRangeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRange">MaxRange</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRange">MinRange</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxRangeInput`<sup>Optional</sup> <a name="MaxRangeInput" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRangeInput"></a>

```go
func MaxRangeInput() *f64
```

- *Type:* *f64

---

##### `MinRangeInput`<sup>Optional</sup> <a name="MinRangeInput" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRangeInput"></a>

```go
func MinRangeInput() *f64
```

- *Type:* *f64

---

##### `MaxRange`<sup>Required</sup> <a name="MaxRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.maxRange"></a>

```go
func MaxRange() *f64
```

- *Type:* *f64

---

##### `MinRange`<sup>Required</sup> <a name="MinRange" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.minRange"></a>

```go
func MinRange() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrBlockPublicAccessConfiguration.EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



