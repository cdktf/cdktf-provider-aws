# `elasticBeanstalkConfigurationTemplate` Submodule <a name="`elasticBeanstalkConfigurationTemplate` Submodule" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticBeanstalkConfigurationTemplate <a name="ElasticBeanstalkConfigurationTemplate" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template aws_elastic_beanstalk_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticbeanstalkconfigurationtemplate"

elasticbeanstalkconfigurationtemplate.NewElasticBeanstalkConfigurationTemplate(scope Construct, id *string, config ElasticBeanstalkConfigurationTemplateConfig) ElasticBeanstalkConfigurationTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig">ElasticBeanstalkConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig">ElasticBeanstalkConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.putSetting">PutSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetEnvironmentId">ResetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSetting">ResetSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSolutionStackName">ResetSolutionStackName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSetting` <a name="PutSetting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.putSetting"></a>

```go
func PutSetting(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.putSetting.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnvironmentId` <a name="ResetEnvironmentId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetEnvironmentId"></a>

```go
func ResetEnvironmentId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetSetting` <a name="ResetSetting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSetting"></a>

```go
func ResetSetting()
```

##### `ResetSolutionStackName` <a name="ResetSolutionStackName" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.resetSolutionStackName"></a>

```go
func ResetSolutionStackName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticbeanstalkconfigurationtemplate"

elasticbeanstalkconfigurationtemplate.ElasticBeanstalkConfigurationTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticbeanstalkconfigurationtemplate"

elasticbeanstalkconfigurationtemplate.ElasticBeanstalkConfigurationTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticbeanstalkconfigurationtemplate"

elasticbeanstalkconfigurationtemplate.ElasticBeanstalkConfigurationTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.setting">Setting</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList">ElasticBeanstalkConfigurationTemplateSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.applicationInput">ApplicationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.settingInput">SettingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackNameInput">SolutionStackNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.application">Application</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackName">SolutionStackName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Setting`<sup>Required</sup> <a name="Setting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.setting"></a>

```go
func Setting() ElasticBeanstalkConfigurationTemplateSettingList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList">ElasticBeanstalkConfigurationTemplateSettingList</a>

---

##### `ApplicationInput`<sup>Optional</sup> <a name="ApplicationInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.applicationInput"></a>

```go
func ApplicationInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentIdInput"></a>

```go
func EnvironmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SettingInput`<sup>Optional</sup> <a name="SettingInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.settingInput"></a>

```go
func SettingInput() interface{}
```

- *Type:* interface{}

---

##### `SolutionStackNameInput`<sup>Optional</sup> <a name="SolutionStackNameInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackNameInput"></a>

```go
func SolutionStackNameInput() *string
```

- *Type:* *string

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.application"></a>

```go
func Application() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SolutionStackName`<sup>Required</sup> <a name="SolutionStackName" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.solutionStackName"></a>

```go
func SolutionStackName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkConfigurationTemplateConfig <a name="ElasticBeanstalkConfigurationTemplateConfig" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticbeanstalkconfigurationtemplate"

&elasticbeanstalkconfigurationtemplate.ElasticBeanstalkConfigurationTemplateConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Application: *string,
	Name: *string,
	Description: *string,
	EnvironmentId: *string,
	Id: *string,
	Setting: interface{},
	SolutionStackName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.application">Application</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#application ElasticBeanstalkConfigurationTemplate#application}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#description ElasticBeanstalkConfigurationTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#environment_id ElasticBeanstalkConfigurationTemplate#environment_id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#id ElasticBeanstalkConfigurationTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.setting">Setting</a></code> | <code>interface{}</code> | setting block. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.solutionStackName">SolutionStackName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#solution_stack_name ElasticBeanstalkConfigurationTemplate#solution_stack_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.application"></a>

```go
Application *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#application ElasticBeanstalkConfigurationTemplate#application}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#description ElasticBeanstalkConfigurationTemplate#description}.

---

##### `EnvironmentId`<sup>Optional</sup> <a name="EnvironmentId" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.environmentId"></a>

```go
EnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#environment_id ElasticBeanstalkConfigurationTemplate#environment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#id ElasticBeanstalkConfigurationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Setting`<sup>Optional</sup> <a name="Setting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.setting"></a>

```go
Setting interface{}
```

- *Type:* interface{}

setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#setting ElasticBeanstalkConfigurationTemplate#setting}

---

##### `SolutionStackName`<sup>Optional</sup> <a name="SolutionStackName" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateConfig.property.solutionStackName"></a>

```go
SolutionStackName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#solution_stack_name ElasticBeanstalkConfigurationTemplate#solution_stack_name}.

---

### ElasticBeanstalkConfigurationTemplateSetting <a name="ElasticBeanstalkConfigurationTemplateSetting" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticbeanstalkconfigurationtemplate"

&elasticbeanstalkconfigurationtemplate.ElasticBeanstalkConfigurationTemplateSetting {
	Name: *string,
	Namespace: *string,
	Value: *string,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#namespace ElasticBeanstalkConfigurationTemplate#namespace}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#value ElasticBeanstalkConfigurationTemplate#value}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.resource">Resource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#resource ElasticBeanstalkConfigurationTemplate#resource}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#namespace ElasticBeanstalkConfigurationTemplate#namespace}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#value ElasticBeanstalkConfigurationTemplate#value}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSetting.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template#resource ElasticBeanstalkConfigurationTemplate#resource}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticBeanstalkConfigurationTemplateSettingList <a name="ElasticBeanstalkConfigurationTemplateSettingList" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticbeanstalkconfigurationtemplate"

elasticbeanstalkconfigurationtemplate.NewElasticBeanstalkConfigurationTemplateSettingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElasticBeanstalkConfigurationTemplateSettingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.get"></a>

```go
func Get(index *f64) ElasticBeanstalkConfigurationTemplateSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticBeanstalkConfigurationTemplateSettingOutputReference <a name="ElasticBeanstalkConfigurationTemplateSettingOutputReference" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/elasticbeanstalkconfigurationtemplate"

elasticbeanstalkconfigurationtemplate.NewElasticBeanstalkConfigurationTemplateSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElasticBeanstalkConfigurationTemplateSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.elasticBeanstalkConfigurationTemplate.ElasticBeanstalkConfigurationTemplateSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



