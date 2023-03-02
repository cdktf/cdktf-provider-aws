# `appconfigDeploymentStrategy` Submodule <a name="`appconfigDeploymentStrategy` Submodule" id="@cdktf/provider-aws.appconfigDeploymentStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigDeploymentStrategy <a name="AppconfigDeploymentStrategy" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy aws_appconfig_deployment_strategy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appconfigdeploymentstrategy"

appconfigdeploymentstrategy.NewAppconfigDeploymentStrategy(scope Construct, id *string, config AppconfigDeploymentStrategyConfig) AppconfigDeploymentStrategy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig">AppconfigDeploymentStrategyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig">AppconfigDeploymentStrategyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetFinalBakeTimeInMinutes">ResetFinalBakeTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetGrowthType">ResetGrowthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFinalBakeTimeInMinutes` <a name="ResetFinalBakeTimeInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetFinalBakeTimeInMinutes"></a>

```go
func ResetFinalBakeTimeInMinutes()
```

##### `ResetGrowthType` <a name="ResetGrowthType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetGrowthType"></a>

```go
func ResetGrowthType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appconfigdeploymentstrategy"

appconfigdeploymentstrategy.AppconfigDeploymentStrategy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appconfigdeploymentstrategy"

appconfigdeploymentstrategy.AppconfigDeploymentStrategy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appconfigdeploymentstrategy"

appconfigdeploymentstrategy.AppconfigDeploymentStrategy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutesInput">DeploymentDurationInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutesInput">FinalBakeTimeInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactorInput">GrowthFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthTypeInput">GrowthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateToInput">ReplicateToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutes">DeploymentDurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutes">FinalBakeTimeInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactor">GrowthFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthType">GrowthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateTo">ReplicateTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DeploymentDurationInMinutesInput`<sup>Optional</sup> <a name="DeploymentDurationInMinutesInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutesInput"></a>

```go
func DeploymentDurationInMinutesInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FinalBakeTimeInMinutesInput`<sup>Optional</sup> <a name="FinalBakeTimeInMinutesInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutesInput"></a>

```go
func FinalBakeTimeInMinutesInput() *f64
```

- *Type:* *f64

---

##### `GrowthFactorInput`<sup>Optional</sup> <a name="GrowthFactorInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactorInput"></a>

```go
func GrowthFactorInput() *f64
```

- *Type:* *f64

---

##### `GrowthTypeInput`<sup>Optional</sup> <a name="GrowthTypeInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthTypeInput"></a>

```go
func GrowthTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReplicateToInput`<sup>Optional</sup> <a name="ReplicateToInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateToInput"></a>

```go
func ReplicateToInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeploymentDurationInMinutes`<sup>Required</sup> <a name="DeploymentDurationInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutes"></a>

```go
func DeploymentDurationInMinutes() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FinalBakeTimeInMinutes`<sup>Required</sup> <a name="FinalBakeTimeInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutes"></a>

```go
func FinalBakeTimeInMinutes() *f64
```

- *Type:* *f64

---

##### `GrowthFactor`<sup>Required</sup> <a name="GrowthFactor" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactor"></a>

```go
func GrowthFactor() *f64
```

- *Type:* *f64

---

##### `GrowthType`<sup>Required</sup> <a name="GrowthType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthType"></a>

```go
func GrowthType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReplicateTo`<sup>Required</sup> <a name="ReplicateTo" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateTo"></a>

```go
func ReplicateTo() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigDeploymentStrategyConfig <a name="AppconfigDeploymentStrategyConfig" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/appconfigdeploymentstrategy"

&appconfigdeploymentstrategy.AppconfigDeploymentStrategyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeploymentDurationInMinutes: *f64,
	GrowthFactor: *f64,
	Name: *string,
	ReplicateTo: *string,
	Description: *string,
	FinalBakeTimeInMinutes: *f64,
	GrowthType: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.deploymentDurationInMinutes">DeploymentDurationInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthFactor">GrowthFactor</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_factor AppconfigDeploymentStrategy#growth_factor}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#name AppconfigDeploymentStrategy#name}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.replicateTo">ReplicateTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#replicate_to AppconfigDeploymentStrategy#replicate_to}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#description AppconfigDeploymentStrategy#description}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.finalBakeTimeInMinutes">FinalBakeTimeInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthType">GrowthType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_type AppconfigDeploymentStrategy#growth_type}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#id AppconfigDeploymentStrategy#id}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags AppconfigDeploymentStrategy#tags}. |
| <code><a href="#@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags_all AppconfigDeploymentStrategy#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeploymentDurationInMinutes`<sup>Required</sup> <a name="DeploymentDurationInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.deploymentDurationInMinutes"></a>

```go
DeploymentDurationInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}.

---

##### `GrowthFactor`<sup>Required</sup> <a name="GrowthFactor" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthFactor"></a>

```go
GrowthFactor *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_factor AppconfigDeploymentStrategy#growth_factor}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#name AppconfigDeploymentStrategy#name}.

---

##### `ReplicateTo`<sup>Required</sup> <a name="ReplicateTo" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.replicateTo"></a>

```go
ReplicateTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#replicate_to AppconfigDeploymentStrategy#replicate_to}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#description AppconfigDeploymentStrategy#description}.

---

##### `FinalBakeTimeInMinutes`<sup>Optional</sup> <a name="FinalBakeTimeInMinutes" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.finalBakeTimeInMinutes"></a>

```go
FinalBakeTimeInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}.

---

##### `GrowthType`<sup>Optional</sup> <a name="GrowthType" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthType"></a>

```go
GrowthType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#growth_type AppconfigDeploymentStrategy#growth_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#id AppconfigDeploymentStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags AppconfigDeploymentStrategy#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy#tags_all AppconfigDeploymentStrategy#tags_all}.

---



