# `sagemakerStudioLifecycleConfig` Submodule <a name="`sagemakerStudioLifecycleConfig` Submodule" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerStudioLifecycleConfig <a name="SagemakerStudioLifecycleConfig" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config aws_sagemaker_studio_lifecycle_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerstudiolifecycleconfig"

sagemakerstudiolifecycleconfig.NewSagemakerStudioLifecycleConfig(scope Construct, id *string, config SagemakerStudioLifecycleConfigConfig) SagemakerStudioLifecycleConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig">SagemakerStudioLifecycleConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig">SagemakerStudioLifecycleConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerstudiolifecycleconfig"

sagemakerstudiolifecycleconfig.SagemakerStudioLifecycleConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerstudiolifecycleconfig"

sagemakerstudiolifecycleconfig.SagemakerStudioLifecycleConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerstudiolifecycleconfig"

sagemakerstudiolifecycleconfig.SagemakerStudioLifecycleConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppTypeInput">StudioLifecycleConfigAppTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContentInput">StudioLifecycleConfigContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigNameInput">StudioLifecycleConfigNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppType">StudioLifecycleConfigAppType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContent">StudioLifecycleConfigContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigName">StudioLifecycleConfigName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StudioLifecycleConfigAppTypeInput`<sup>Optional</sup> <a name="StudioLifecycleConfigAppTypeInput" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppTypeInput"></a>

```go
func StudioLifecycleConfigAppTypeInput() *string
```

- *Type:* *string

---

##### `StudioLifecycleConfigContentInput`<sup>Optional</sup> <a name="StudioLifecycleConfigContentInput" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContentInput"></a>

```go
func StudioLifecycleConfigContentInput() *string
```

- *Type:* *string

---

##### `StudioLifecycleConfigNameInput`<sup>Optional</sup> <a name="StudioLifecycleConfigNameInput" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigNameInput"></a>

```go
func StudioLifecycleConfigNameInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StudioLifecycleConfigAppType`<sup>Required</sup> <a name="StudioLifecycleConfigAppType" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigAppType"></a>

```go
func StudioLifecycleConfigAppType() *string
```

- *Type:* *string

---

##### `StudioLifecycleConfigContent`<sup>Required</sup> <a name="StudioLifecycleConfigContent" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigContent"></a>

```go
func StudioLifecycleConfigContent() *string
```

- *Type:* *string

---

##### `StudioLifecycleConfigName`<sup>Required</sup> <a name="StudioLifecycleConfigName" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.studioLifecycleConfigName"></a>

```go
func StudioLifecycleConfigName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerStudioLifecycleConfigConfig <a name="SagemakerStudioLifecycleConfigConfig" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/sagemakerstudiolifecycleconfig"

&sagemakerstudiolifecycleconfig.SagemakerStudioLifecycleConfigConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StudioLifecycleConfigAppType: *string,
	StudioLifecycleConfigContent: *string,
	StudioLifecycleConfigName: *string,
	Id: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigAppType">StudioLifecycleConfigAppType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_app_type SagemakerStudioLifecycleConfig#studio_lifecycle_config_app_type}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigContent">StudioLifecycleConfigContent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_content SagemakerStudioLifecycleConfig#studio_lifecycle_config_content}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigName">StudioLifecycleConfigName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_name SagemakerStudioLifecycleConfig#studio_lifecycle_config_name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#id SagemakerStudioLifecycleConfig#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags SagemakerStudioLifecycleConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags_all SagemakerStudioLifecycleConfig#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StudioLifecycleConfigAppType`<sup>Required</sup> <a name="StudioLifecycleConfigAppType" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigAppType"></a>

```go
StudioLifecycleConfigAppType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_app_type SagemakerStudioLifecycleConfig#studio_lifecycle_config_app_type}.

---

##### `StudioLifecycleConfigContent`<sup>Required</sup> <a name="StudioLifecycleConfigContent" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigContent"></a>

```go
StudioLifecycleConfigContent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_content SagemakerStudioLifecycleConfig#studio_lifecycle_config_content}.

---

##### `StudioLifecycleConfigName`<sup>Required</sup> <a name="StudioLifecycleConfigName" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.studioLifecycleConfigName"></a>

```go
StudioLifecycleConfigName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#studio_lifecycle_config_name SagemakerStudioLifecycleConfig#studio_lifecycle_config_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#id SagemakerStudioLifecycleConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags SagemakerStudioLifecycleConfig#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerStudioLifecycleConfig.SagemakerStudioLifecycleConfigConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_studio_lifecycle_config#tags_all SagemakerStudioLifecycleConfig#tags_all}.

---



